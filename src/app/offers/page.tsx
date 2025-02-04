// app/offers/page.js
"use client";
import { IntuitWebAppExperience } from "@appfabric-plugin/appf-embedded-experiences/iframe";
import { useEffect, useState } from "react";
import IFRAME_INIT from "@/lib/constants/iframe";
import IntuitWebAppExperienceSingleton from "@/lib/iframe/IntuitWidgetManagerSingleton";

const renderWidget = async (widget: Readonly<IntuitWebAppExperience>) => {
    try {
        const widgetContainer = document.getElementById("widget-container");
        if (!widgetContainer) {
            throw new Error("Widget container not found");
        }
        await widget.render(widgetContainer);
    } catch (error) {
        throw new Error("Error rendering widget: " + error);
    }
};

export default function Offers() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWidget = async () => {
            if (loading) {
                try {
                    const widgetInstance =
                        await IntuitWebAppExperienceSingleton.getInstance();
                    await renderWidget(widgetInstance);
                } catch (error) {
                    console.error("Error loading widget: ", error);
                }
                setLoading(false);
            }
        };
        loadWidget();
        return () => {
            IntuitWebAppExperienceSingleton.getInstance().then(
                (instance: IntuitWebAppExperience) => {
                    instance.unmount();
                }
            );
        };
    }, []);

    return (
        <>
            <div id="widget-container"></div>
        </>
    );
}
