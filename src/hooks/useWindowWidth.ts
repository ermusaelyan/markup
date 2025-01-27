import { useState, useEffect } from "react";

const useWindowWidth = (): {
    windowWidth: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} => {
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1366);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isDesktop = windowWidth > 1200;
    const isTablet = windowWidth > 992 && windowWidth <= 1200;
    const isMobile = windowWidth <= 992;

    return { windowWidth, isMobile, isTablet, isDesktop };
};

export default useWindowWidth;
