import React, {useEffect} from "react";
import {Footer} from "../components/footer";
import { useNavigate } from 'react-router-dom';
import {Header} from "../components/header";
import {initPage} from "../utils/page";

export const OtherPage = () => {
    useEffect(() => {
        initPage()
    }, []);

    const navigate = useNavigate();

     // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            navigate("/#menu-object");
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [handleKeyDown]);

    return (
        <>
            <Header />

            <Footer />
        </>

    )
}
