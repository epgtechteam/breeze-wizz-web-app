export default function WidgetContainer() {
  return (
    <div id="widget-container">
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
  );
}
