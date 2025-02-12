export default function ActionButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-64 relative text-left">
      <button
        className="mt-10 h-[36px] bg-[#00892E] text-white font-semibold px-6 rounded-md hover:bg-green-700 transition-colors"
        onClick={() => {
          onClick();
        }}
      >
        Continue
      </button>
    </div>
  );
}
