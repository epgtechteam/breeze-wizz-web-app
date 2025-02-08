"use client";
import styles from "./WidgetContainer.module.css";
import { useEffect, useState } from "react";

const renderWidget = async (widget) => {
  try {
    const widgetContainer = document.getElementById("widget-container");
    if (!widgetContainer) {
      throw new Error("Widget container not found");
    }
    await widget?.render(widgetContainer);
  } catch (error) {
    throw new Error("Error rendering widget: " + error);
  }
};
export default function OffersPage({
  onWidgetLoad,
  token,
  persona,
  loanPurpose,
  amount,
  widgetDataProps,
}) {
  const widgetContainerId = "widget-container";
  const widget = globalThis?.IntuitWebAppExperience;
  const [loading, setLoading] = useState(true);
  const [dummy, setDummy] = useState(true);
  //   const [isLoading, setIsLoading] = useState(true); // Track loading state

  const handleIframeLoad = () => {
    // setIsLoading(false); // Hide loader when iframe is loaded
    onWidgetLoad(); // Trigger any external callback if needed
  };

  const onSuccess = (type, message, additionalInfo) => {
    console.log(type, message, additionalInfo);
  };

  const onError = (type, errorCode, message, additionalInfo) => {
    console.log(type, errorCode, message, additionalInfo);
  };

  const onEvent = (type, message, additionalInfo) => {
    console.log(type, message, additionalInfo);
  };
  const intuitWidgetProps = {
    onSuccess,
    onError,
    onEvent,
    bearerToken: token,
  };
  //   console.log(intuitWidgetProps);

  useEffect(() => {
    setLoading(true);
    const loadWidget = async () => {
      try {
        await renderWidget(widget);
        await widget.updateProps(widgetDataProps);
      } catch (error) {
        console.error("Error loading widget: ", error);
      }
      setTimeout(() => {
        setLoading(false);
        handleIframeLoad();
      }, 1000);
    };
    loadWidget();
    return () => {
      widget.unmount();
    };
  }, [widgetDataProps]);

  return (
    <div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      )}
      <div id={widgetContainerId} className={`h-[700] relative w-full`}></div>
    </div>
  );
}
