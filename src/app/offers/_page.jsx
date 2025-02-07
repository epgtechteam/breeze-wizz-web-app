// app/offers/page.js
"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const renderWidget = async (widget) => {
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
    const widget = globalThis.IntuitWebAppExperience
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
                widget.unmount()
        }
    }, []);

    return (
        <div className="h-screen max-w-screen-xl m-auto flex flex-col justify-center align-items-center">
            <p className={styles.pageTitle}>
                Here are the latest offers we have for you!
            </p>
            <div className={`${styles.widgetContainer} relative w-full`}>
                <div id={widgetContainerId} className={`${styles.widgetContainer} relative w-full`}>
                </div>
            </div>
        </div>
    );
}
