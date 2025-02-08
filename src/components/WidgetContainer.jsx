"use client";
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
  widgetDataProps,
  offerType,
}) {
  const widgetContainerId = "widget-container";
  const widget = globalThis?.IntuitWebAppExperience;
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false); // Hide loader when iframe is loaded
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
  const widgetProps = {
    onSuccess,
    onError,
    onEvent,
    bearerToken: token,
    env: process.env.NODE_ENV === "production" ? "PRD" : "E2E",
    headerInfo: {
      "X-BreezeWizz-CorrelationId": "123456789",
      "X-Merchant-Id": "123",
    },
    offerType,
    data: widgetDataProps.data,
  };

  const loadWidget = async () => {
    setLoading(true);
    try {
      await renderWidget(widget);
      await widget.updateProps(widgetProps);
    } catch (error) {
      console.error("Error loading widget: ", error);
    }
    setTimeout(() => {
      handleIframeLoad();
    }, 1000);
  };

  useEffect(() => {
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
      <div id={widgetContainerId} className={`h-[700px] flex flex-col w-full`}></div>
    </div>
  );
}
