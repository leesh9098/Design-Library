import { useMediaQuery } from "react-responsive";

export const Desktop = useMediaQuery({ query: '(min-width: 1024px)' });
export const Tablet = useMediaQuery({ query: '(max-width: 1023px)' });
export const Mobile = useMediaQuery({ query: '(max-width: 767px)' });