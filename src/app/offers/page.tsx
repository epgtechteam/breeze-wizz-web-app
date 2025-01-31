// app/offers/page.js
import styles from "./page.module.css";

export default function OffersPage() {
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
}
