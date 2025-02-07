export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      <p className="ml-4 text-xl font-semibold">Loading... ⏳</p>
    </div>
  );
}
