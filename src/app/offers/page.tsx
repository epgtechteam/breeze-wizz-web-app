// app/offers/page.js
// import { API_BASE_URL } from "@/constants/api";
import styles from "./page.module.css";
import WidgetContainer from "@/components/WidgetContainer";

async function getBearerToken() {
  console.log("BASE_URL");
  console.log(process.env.BASE_URL);
  console.log("ENV");
  console.log(process.env);
  const tokenResponse = await fetch(
    `https://${process.env.VERCEL_URL}/api/token`
  );
  // const tokenResponse = await fetch(
  //   `${process.env.BASE_URL}/api/token`
  // );
  const { token } = await tokenResponse.json();
  await new Promise((resolve) => {
    // Added 3 seconds to test the server side rendering and display of loader
    setTimeout(() => {
      resolve("");
    }, 3000);
  });
  return token;
  return "test";
}

export default async function OffersPage() {
  const token = await getBearerToken();

  if (token) {
    return (
      <div className="h-screen m-auto text-center p-10 pt-64 flex flex-col justify-center align-items-center">
        <p className={styles.pageTitle}>
          Here are the latest offers we have for you!
        </p>
        <div className={`${styles.widgetContainer} relative w-full`}>
          <WidgetContainer />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
