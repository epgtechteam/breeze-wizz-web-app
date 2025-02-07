/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  CommunicationEventType,
  ErrorType,
  IntuitWidgetProps,
  SuccessType,
  WidgetPersonaDataProps,
} from "@/@types/persona";
import { useState } from "react";

export default function WidgetContainer({
  onWidgetLoad,
  token,
  persona,
  loanPurpose,
  amount,
  widgetDataProps,
}: {
  onWidgetLoad: () => void;
  token: string;
  persona: string;
  loanPurpose: string;
  amount: string | number;
  widgetDataProps: WidgetPersonaDataProps | undefined;
}) {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const handleIframeLoad = () => {
    setIsLoading(false); // Hide loader when iframe is loaded
    onWidgetLoad(); // Trigger any external callback if needed
  };

  const onSuccess = (
    type: SuccessType,
    message: string,
    additionalInfo: any
  ) => {
    console.log(type, message, additionalInfo);
  };

  const onError = (
    type: ErrorType,
    errorCode: number,
    message: string,
    additionalInfo: any
  ) => {
    console.log(type, errorCode, message, additionalInfo);
  };

  const onEvent = (
    type: CommunicationEventType,
    message: string,
    additionalInfo: any
  ) => {
    console.log(type, message, additionalInfo);
  };
  const intuitWidgetProps: IntuitWidgetProps = {
    onSuccess,
    onError,
    onEvent,
    bearerToken: token,
  };
  console.log(intuitWidgetProps);

  return (
    <div className="h-[700px]" id="widget-container">
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          <p className="ml-4 text-xl font-semibold">Loading... ⏳</p>
        </div>
      )}
      <iframe
        src="https://financing.app.intuit.com/consumer-financing/620e6411-9875-47af-9ec0-bf81b7f61a6e" // URL to the dummy page you want to embed
        title="Static Dummy Page"
        className="w-full h-[700px] border-none"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={handleIframeLoad} // Trigger loader hide on load
      ></iframe>
    </div>
  );
}
