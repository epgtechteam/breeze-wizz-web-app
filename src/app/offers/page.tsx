// app/offers/page.js

import OfferPageWrapper from "@/components/OfferPageWrapper";
import {
  API_BASE_URL,
  API_BODY_PARAM_KEYS,
  API_BODY_PARAM_VALUES,
} from "@/constants/api";

async function getBearerToken() {
  try {
    const clientID = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    if (!clientID || !clientSecret) {
      return { error: "Missing credentials", status: 500 };
    }

    // const credentials = `${clientID}:${clientSecret}`;
    const body = new URLSearchParams();
    body.append(
      API_BODY_PARAM_KEYS.GRANT_TYPE,
      API_BODY_PARAM_VALUES.CLIENT_CREDENTIALS
    );
    body.append(
      API_BODY_PARAM_KEYS.SCOPE,
      API_BODY_PARAM_VALUES.LENDING_OFFERS_TEST
    );
    body.append(API_BODY_PARAM_KEYS.CLIENT_ID, clientID);
    body.append(API_BODY_PARAM_KEYS.CLIENT_SECRET, clientSecret);

    const options = {
      headers: {
        // Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      method: "POST",
    };

    const response = await fetch(API_BASE_URL.OAUTH_URL, options);

    if (!response.ok) {
      return { error: "Failed to fetch token", status: 500 };
    }

    const data = await response.json();
    await new Promise((resolve) => {
      // Added 1 seconds to test the server side rendering and display of loader
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
    return { status: 200, token: data.access_token };
  } catch (error) {
    console.log(JSON.stringify(error));
    return { error: "Failed to fetch token", status: 500 };
  }
}

export default async function OffersPage() {
  const { status, token } = await getBearerToken();
  if (status === 200 && token) {
    return <OfferPageWrapper token={token} />;
  } else {
    return null;
  }
}
