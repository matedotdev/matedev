import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || typeof email !== "string" || !email.length) {
    return NextResponse.json({ error: "Forgot to add your email?" }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const listId = process.env.MAILCHIMP_LIST_ID

  if (!apiKey || !listId) {
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet. Please try again later." },
      { status: 500 },
    )
  }

  const datacenter = apiKey.split("-")[1]
  const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`
  const basicAuth = Buffer.from(`anystring:${apiKey}`).toString("base64")

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    })

    if (!response.ok) {
      throw new Error("Mailchimp request failed")
    }

    return NextResponse.json({ error: null }, { status: 201 })
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong or you are already in one of our mailing lists... Please contact me by email at chris@chalten.io.",
      },
      { status: 400 },
    )
  }
}
