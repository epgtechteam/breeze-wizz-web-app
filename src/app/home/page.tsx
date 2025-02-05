import Banner from "../components/Banner";

export default function Home() {
  console.log("✅ Rendered Home on the SERVER");
  return (
    <div className="h-screen font-sans bg-gray-50">
      <Banner />
    </div>
  );
}
