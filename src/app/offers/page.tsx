// app/offers/page.js
"use client";
import { IntuitWebAppExperience } from "@appfabric-plugin/appf-embedded-experiences/iframe";
import { Suspense, useEffect, useState } from "react";
import IntuitWebAppExperienceSingleton from "@/lib/iframe/IntuitWidgetManagerSingleton";

export default function Offers() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("hello world");
        const loadWidget = async () => {
            if (loading) {
                const widgetInstance =
                    await IntuitWebAppExperienceSingleton.getInstance();
                await IntuitWebAppExperienceSingleton.renderInstance(
                    "widget-container"
                );
                setLoading(false);
            }
        };
        loadWidget();
        return () => {
            if (IntuitWebAppExperienceSingleton.getIsWidgetMounted()) {
                IntuitWebAppExperienceSingleton.unmountInstance();
            }
        };
    }, []);

    return (
        <>
            <div id="widget-container"></div>
        </>
    );
}
