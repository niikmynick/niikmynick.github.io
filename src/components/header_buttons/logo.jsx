import React from "react";
import { Link } from 'react-router-dom';

export const LogoButton = () => {
    return (
        <div id="minimal-logo-header">
            <Link to="/">
                <svg width="100" height="100" viewBox="0 0 889 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M842.125 1L776 83.5L792 105.25L843.625 181.375H888.75L819.5 80.625L884.125 1H842.125Z"
                          fill="white"/>
                    <path d="M435.125 181V0.625H472.875V181H435.125Z" fill="white"/>
                    <path d="M33 1H0L38.375 63.25L120.125 181.375H152.875L114.5 118.25L33 1Z" fill="white"/>
                </svg>
            </Link>
        </div>
    )
}
