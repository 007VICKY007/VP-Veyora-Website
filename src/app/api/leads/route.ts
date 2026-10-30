import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/resend";

// GET - Retrieve all leads for Admin Dashboard
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const leads = await db.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("GET leads error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST - Submit contact lead form (Public)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      companyName, 
      email, 
      phone, 
      country, 
      inquiryType,
      service, 
      budget, 
      timeline, 
      message,
      preferredMeetingTime 
    } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please provide your name, business email, and requirement description." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const effectiveService = inquiryType || service || "General AI Automation Inquiry";
    const effectiveBudget = budget || "To be scoped during audit";
    const effectiveTimeline = timeline || preferredMeetingTime || "Standard Implementation";

    // Attempt to persist in Database (with graceful fallback if DB is unreachable in serverless / build)
    let lead = null;
    try {
      lead = await db.lead.create({
        data: {
          name: name.trim(),
          companyName: (companyName || "").trim(),
          email: email.trim().toLowerCase(),
          phone: (phone || "").trim(),
          country: (country || "").trim(),
          service: effectiveService,
          budget: effectiveBudget,
          timeline: effectiveTimeline,
          message: message.trim(),
          status: "PENDING",
        },
      });
    } catch (dbError) {
      console.warn("Database storage warning (operating in resilient mode):", dbError);
    }

    // Confirmation Email for the Client / Partner
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #F5C200; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #05050d; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">VP VEYORA PRIVATE LIMITED</h2>
          <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">AI Automation Delivery Partner</p>
        </div>
        
        <p style="color: #1e293b; font-size: 15px; line-height: 1.6;">Dear ${name},</p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          Thank you for reaching out to VP VEYORA. We have received your inquiry regarding <strong>${effectiveService}</strong>.
        </p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin: 0 0 12px 0; color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Summary:</h4>
          <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 13px; line-height: 1.8;">
            <li><strong>Company:</strong> ${companyName || "N/A"}</li>
            <li><strong>Country / Region:</strong> ${country || "N/A"}</li>
            <li><strong>Inquiry Type:</strong> ${effectiveService}</li>
            ${preferredMeetingTime ? `<li><strong>Preferred Time:</strong> ${preferredMeetingTime}</li>` : ""}
            <li><strong>Message / Problem Scope:</strong> ${message}</li>
          </ul>
        </div>

        <p style="color: #475569; font-size: 13px; line-height: 1.6;">
          Our solutions engineering team will review your business requirements and follow up within 24 business hours to discuss scoping or schedule a discovery call.
        </p>
        <p style="color: #475569; font-size: 13px; line-height: 1.6;">
          If you have technical specifications, API documentation, or diagrams to share in advance, feel free to reply directly to this email at <a href="mailto:vpveyora@gmail.com" style="color: #c49b00; font-weight: bold;">vpveyora@gmail.com</a>.
        </p>

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin: 0;">
          <strong>VP VEYORA PRIVATE LIMITED</strong><br />
          Turn Repetitive Business Operations into Intelligent AI Workflows.<br />
          International Delivery: UK · USA · UAE · Singapore · Australia · Europe<br />
          Website: <a href="https://vpveyora.com" style="color: #64748b;">https://vpveyora.com</a>
        </p>
      </div>
    `;

    // Notification Email for VP VEYORA Engineering Team
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #e11d48; margin-top: 0; font-size: 18px;">[NEW INQUIRY] ${name} — ${effectiveService}</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 35%;">Name</td><td style="padding: 8px 0; color: #0f172a;">${name}</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company</td><td style="padding: 8px 0; color: #0f172a;">${companyName || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Country</td><td style="padding: 8px 0; color: #0f172a;">${country || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Inquiry Type</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${effectiveService}</td></tr>
          ${preferredMeetingTime ? `<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Meeting Preference</td><td style="padding: 8px 0; color: #0f172a;">${preferredMeetingTime}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b; vertical-align: top;">Business Need</td><td style="padding: 8px 0; color: #0f172a; white-space: pre-wrap;">${message}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <a href="https://vpveyora.com/admin/leads" style="background-color: #0f172a; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 12px; display: inline-block;">View in Admin Portal</a>
        </div>
      </div>
    `;

    // Send emails non-blockingly
    try {
      await sendEmail({ 
        to: email, 
        subject: "We received your inquiry — VP VEYORA", 
        html: clientHtml 
      });
      await sendEmail({ 
        to: "vpveyora@gmail.com", 
        subject: `[NEW LEAD] ${name} (${companyName || country || "New"}) - ${effectiveService}`, 
        html: adminHtml 
      });
    } catch (emailError) {
      console.warn("Email delivery note (logging inquiry):", emailError);
    }

    return NextResponse.json({ 
      success: true, 
      lead: lead || { name, companyName, email, service: effectiveService }
    });
  } catch (error) {
    console.error("POST lead error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
