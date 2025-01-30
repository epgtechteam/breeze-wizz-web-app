// pages/index.js
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <main className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to BreezeWizz
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your trusted partner in home services.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          We provide plumbing, electrical, HVAC, and more!
        </p>
      </main>
    </div>
  );
}
