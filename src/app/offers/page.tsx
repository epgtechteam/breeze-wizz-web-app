// app/offers/page.js
// import { API_BASE_URL } from "@/constants/api";

import OfferPageWrapper from "@/components/OfferPageWrapper";

async function getBearerToken() {
    try {
        const clientID = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;

        if (!clientID || !clientSecret) {
            return { error: "Missing credentials", status: 500 };
        }

        const credentials = `${clientID}:${clientSecret}`;
        const body = new URLSearchParams();
        body.append("grant_type", "client_credentials");
        body.append("scope", "com.intuit.quickbooks.accounting");

        const options = {
            headers: {
                Authorization:
                    "Basic " + Buffer.from(credentials).toString("base64"),
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
            return { error: "Failed to fetch token", status: 500 };
        }

        const data = await response.json();
        await new Promise((resolve) => {
            // Added 3 seconds to test the server side rendering and display of loader
            setTimeout(() => {
                resolve("");
            }, 5000);
        });
        return { status: 200, token: data.access_token };
    } catch (error) {
        console.log(JSON.stringify(error));
        return { error: "Failed to fetch token", status: 500 };
    }
}

export default async function OffersPage() {
    const { status, token } = await getBearerToken();
    console.log(token);

  if (status === 200 && token) {
    return <OfferPageWrapper token={token} />;
  } else {
    return null;
  }
}
