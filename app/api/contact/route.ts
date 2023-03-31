import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const body = await request.json()
  let transporter = nodemailer.createTransport({
    host: process.env.AWS_SES_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.AWS_SES_USERNAME,
      pass: process.env.AWS_SES_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${body.name}" <${process.env.CONTACT_SENDER}>`,
    to: `${process.env.CONTACT_RECIPIENT}`,
    subject: `Personal Site Mail - ${body.name}`,
    text: `Name: ${body.name} \nEmail: ${body.email} \nMessage: ${body.message}`,
    html: `<b>Name: ${body.name}</b> <br> <b>Email: ${body.email}</b> <br> <b>Message: ${body.message}</b>`,
  });

  return new Response('Sent!')
}
