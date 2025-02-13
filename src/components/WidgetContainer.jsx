"use client";
import React, { useEffect, useState } from "react";

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

function WidgetContainer({ token, widgetDataProps, offerType }) {
  const widgetContainerId = "widget-container";
  const widget = globalThis?.IntuitWebAppExperience;
  const [loading, setLoading] = useState(true);

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
    // onSuccess,
    // onError,
    // onEvent,
    bearerToken: token,
    env: process.env.NODE_ENV === "production" ? "PROD" : "E2E",
    headerInfo: {
      xCorrelationId: "123456789",
      xMerchantId: "123",
      xPartnerId: "111-partner-ID",
    },
    offerType: offerType.value,
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
      setLoading(false);
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
      <div
        id={widgetContainerId}
        className={`h-[600px] flex flex-col w-full`}
      ></div>
    </div>
  );
}

export default React.memo(WidgetContainer);
