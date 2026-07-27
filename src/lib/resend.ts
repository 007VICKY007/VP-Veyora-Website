import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

// Create Resend instance if key is valid (not empty and not the placeholder)
export const resend = apiKey && apiKey !== "re_1234567890" ? new Resend(apiKey) : null;

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (resend) {
    try {
      const data = await resend.emails.send({
        from: "VP Enterpriceses <no-reply@vpenterpriceses.com>",
        to,
        subject,
        html,
      });
      return { success: true, data };
    } catch (error) {
      console.error("Resend email error:", error);
      return { success: false, error };
    }
  } else {
    // Development Mock Logger
    console.log("=========================================");
    console.log(`[MOCK EMAIL SENT]`);
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Content HTML:\n${html}`);
    console.log("=========================================");
    return { success: true, mock: true };
  }
}
