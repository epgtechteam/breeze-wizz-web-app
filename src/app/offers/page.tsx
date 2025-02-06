// app/offers/page.js
"use client";
import { useEffect, useState } from "react";
import IntuitWebAppExperienceSingleton from "@/lib/iframe/IntuitWidgetManagerSingleton";

export default function Offers() {
    const containerId = "widget-container";
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadWidget = async () => {
            await IntuitWebAppExperienceSingleton.getInstance();
            await IntuitWebAppExperienceSingleton.renderInstance(containerId);
            setIsLoading(false);
        };

        if (isLoading) loadWidget();

        return () => {
            if (!isLoading) {
                IntuitWebAppExperienceSingleton.unmountInstance();
            }
        };
    }, [isLoading]);

    return (
        <>
            <div id={containerId}></div>
            {isLoading && <h1>Loading...</h1>}
        </>
    );
}
