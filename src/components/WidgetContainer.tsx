"use client";
import styles from "@/app/offers/page.module.css";
import { useEffect, useState } from "react";

const renderWidget = async (widget: {
    render: (container: HTMLElement) => Promise<HTMLIFrameElement>;
}) => {
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
export default function OffersPage() {
    const widgetContainerId = "widget-container";
    const widget = globalThis?.IntuitWebAppExperience;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWidget = async () => {
            if (loading) {
                try {
                    await renderWidget(widget);
                } catch (error) {
                    console.error("Error loading widget: ", error);
                }
                setLoading(false);
            }
        };
        loadWidget();
        return () => {
            widget.unmount();
        };
    }, []);

    return (
        <div
            id={widgetContainerId}
            className={`${styles.widgetContainer} relative w-full`}
        ></div>
    );
}
