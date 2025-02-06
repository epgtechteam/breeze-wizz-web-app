// app/api/token/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const clientID = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientID || !clientSecret) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
  }
  
  const credentials = `${clientID}:${clientSecret}`;
  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("scope", "com.intuit.quickbooks.accounting");

  const options = {
    headers: {
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    method: "POST",
  };

  const response = await fetch(
    `https://oauth-sandbox.platform.intuit.com/oauth2/v1/tokens/bearer`,
    options
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch token" },
      { status: 500 }
    );
  }

  const data = await response.json();
  return NextResponse.json({ token: data.access_token });
}
