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
    const { name, companyName, email, phone, country, service, budget, timeline, message } = body;

    // Validation
    if (!name || !email || !service || !budget || !timeline || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields: name, email, service, budget, timeline, message." },
        { status: 400 }
      );
    }

    // Save lead in database
    const lead = await db.lead.create({
      data: {
        name,
        companyName: companyName || "",
        email,
        phone: phone || "",
        country: country || "",
        service,
        budget,
        timeline,
        message,
        status: "PENDING",
      },
    });

    // Send confirmation email to client
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #4f46e5; margin-bottom: 20px;">Thank you for contacting VP Enterprises</h2>
        <p>Dear ${name},</p>
        <p>We have received your project request and our team is already reviewing your details. Founder & CEO Vignesh Pandiya or a senior systems architect will get in touch with you shortly.</p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0; color: #0f172a;">Your Submission Summary:</h4>
          <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.6;">
            <li><strong>Service Needed:</strong> ${service}</li>
            <li><strong>Est. Budget:</strong> ${budget}</li>
            <li><strong>Desired Timeline:</strong> ${timeline}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
        </div>

        <p>If you have urgent files or specifications, feel free to reply to this email directly at <a href="mailto:contact@vpenterprises.in">contact@vpenterprises.in</a>.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;" />
        <p style="font-size: 13px; color: #64748b;">
          <strong>VP Enterprises</strong><br />
          Engineering AI Solutions for Tomorrow<br />
          Location: Tamil Nadu, India<br />
          Website: <a href="https://vpenterprises.in">https://vpenterprises.in</a>
        </p>
      </div>
    `;

    // Send notification email to VP Enterprises
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #e11d48; margin-bottom: 20px;">New Project Lead Received</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 30%;">Full Name</td>
            <td style="padding: 10px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Company Name</td>
            <td style="padding: 10px 0; color: #0f172a;">${companyName || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address</td>
            <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number</td>
            <td style="padding: 10px 0; color: #0f172a;">${phone || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Country</td>
            <td style="padding: 10px 0; color: #0f172a;">${country || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Selected Service</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: bold;">${service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Selected Budget</td>
            <td style="padding: 10px 0; color: #0f172a;">${budget}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Project Timeline</td>
            <td style="padding: 10px 0; color: #0f172a;">${timeline}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Project Scope</td>
            <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://vpenterprises.in/admin/leads" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Open Admin Dashboard</a>
        </div>
      </div>
    `;

    // Trigger emails asynchronously, non-blocking
    await sendEmail({ to: email, subject: "Project Inquiry Received - VP Enterprises", html: clientHtml });
    await sendEmail({ to: "contact@vpenterprises.in", subject: `[NEW LEAD] ${name} - ${service}`, html: adminHtml });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("POST lead error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
