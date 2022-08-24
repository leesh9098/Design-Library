import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Head>
        </Html>
    )
}