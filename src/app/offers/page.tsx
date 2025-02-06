// app/offers/page.js
import { API_BASE_URL } from "@/constants/api";
import styles from "./page.module.css";
async function getBearerToken() {
  const tokenResponse = await fetch(
    `${API_BASE_URL[process.env.NODE_ENV]}/api/token`
  );
  const { token } = await tokenResponse.json();
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 5000);
  });
  return token;
}

export default async function OffersPage() {
  console.log("✅ Rendered Offer on the SERVER");
  const token = await getBearerToken();
  console.log(token);

  if (token) {
    return (
      <div className="h-screen max-w-screen-xl m-auto text-center flex flex-col justify-center align-items-center">
        <p className={styles.pageTitle}>
          Here are the latest offers we have for you!
        </p>
        <div className={`${styles.widgetContainer} relative w-full`}>
          <iframe
            src="https://www.example.com" // URL to the dummy page you want to embed
            title="Static Dummy Page"
            className="w-full h-[500px] border-none"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
