export default function EstimateDetails() {
  // Get today's date in the format "MMM DD, YYYY"
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "");

  return (
    <div className="flex flex-col items-center pt-10 text-center">
      <div className="text-2xl font-bold leading-9">
        Mr. detail sent you an estimate
        <br />
        <span className="text-2xl font-bold leading-9">for $15,000</span>
      </div>
      <div className="mt-5 text-base font-medium">
        Service date: {formattedDate}
      </div>
      <button className="mt-10 px-10 py-2 font-semibold border-2 rounded border-[#00892E] text-[#00892E] bg-white transition duration-300 ease-in-out hover:bg-gray-200">
        View estimate details
      </button>
    </div>
  );
}
