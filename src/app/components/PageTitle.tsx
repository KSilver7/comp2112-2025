'use client';

import { useEffect } from "react";

type PageTitleProps = {
    title: string;
}

// component recieves a title prop as a string (unique on each page)
export default function PageTitle({ title }: PageTitleProps ) {
    // trigger this effect and update the page title every time the title prop value changes
    // we need to use Effect Hook as layout only loads once. // this is the title at the top of the tab
    useEffect(() => {
        document.title = `${title} - COMP2112 Blog`
    },[title])

    // React components must have a return statement EVEN IF they don't render any JSX to the browser
    return null;
}