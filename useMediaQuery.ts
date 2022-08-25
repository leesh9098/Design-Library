import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function checkDevice() {
    const [device, setDevice] = useState(false);
    const tabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        setDevice(tabletOrDesktop)
    }, [tabletOrDesktop])
    return device;
}

// const tabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
// const mobile = useMediaQuery({ query: '(max-width: 767px)' });