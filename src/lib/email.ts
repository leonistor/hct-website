import { createTransport, type Transporter } from "nodemailer"
import { stripTags } from "./util"

type SendEmailOptions = {
  /** Email address of the recipient */
  to: string
  /** Subject line of the email */
  subject: string
  /** Message used for the body of the email */
  html: string
  text?: string
}

export async function sendEmail(options: SendEmailOptions): Promise<Transporter> {
  const transporter = await getEmailTransporter()
  return new Promise(async (resolve, reject) => {
    // Build the email message
    const { to, subject, html } = options
    // const from = import.meta.env.SEND_EMAIL_FROM
    const from = "site@h-ct.ro"
    const message = { to, subject, html, from, text: stripTags(html) }
    // Send the email
    transporter.sendMail(message, (err, info) => {
      // Log the error if one occurred
      if (err) {
        console.error(err)
        reject(err)
      }
      // Log the message ID and preview URL if available.
      console.log("Message sent:", info.messageId)
      resolve(info)
    })
  })
}

async function getEmailTransporter(): Promise<Transporter> {
  return new Promise((resolve, reject) => {
    // if (!import.meta.env.RESEND_API_KEY) {
    //   throw new Error("Missing Resend configuration")
    // }
    const transporter = createTransport({
      host: "maildev.parsedw.ink",
      secure: false,
      port: 2500,
      //   auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
    })
    resolve(transporter)
  })
}
