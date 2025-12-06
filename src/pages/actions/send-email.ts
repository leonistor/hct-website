export const prerender = false
// https://developers.netlify.com/guides/send-emails-with-astro-and-resend/

import type { APIRoute } from "astro"
import { sendEmail } from "@/lib/email"

import { pb } from "@/content.config"

export const ALL: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const contact = formData.get("contact") as string | null
  const mesaj = formData.get("mesaj") as string | null

  try {
    const html = `<div>
    <h3>Mesaj din form contact site</h3>

      <p>telefon sau email: <strong>${contact}</strong></p>
    
      <p>mesaj:</p>
      <pre>${mesaj}</pre>

    </div>`
    await sendEmail({ to: "info@h-ct.ro", subject: "Mesaj din form contact site", html })
  } catch (error) {
    throw new Error("Failed to send email")
  }

  try {
    await pb.collection("mesaje").create({ contact_tel_email: contact, contact_mesaj: mesaj })
  } catch (error) {
    throw new Error("Failed to insert mesaj into pocketbase")
  }

  // Redirect the user to a success page after the email is sent.
  return redirect("/succes-contact")
}
