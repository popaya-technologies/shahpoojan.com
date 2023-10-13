// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();

  // return NextResponse.json("Poojan Shah");

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["pshah@shahpoojan.com", email],
      subject: subject,
      react: (
        <>
          <h1>{name}</h1>
          <p>{subject}</p>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
