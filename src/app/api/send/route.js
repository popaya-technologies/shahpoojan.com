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
      from: `Poojan Shah <${fromEmail}>`,
      to: ["pshah@shahpoojan.com", email],
      subject: subject,
      react: (
        <>
          <p>
            Thank you for contacting me. Please expect a reply within next 24 to
            48 hours!
          </p>
          <h4>{name}</h4>
          <p>{subject}</p>
          <p>
            New message submitted:
            <br />
            {message}
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
