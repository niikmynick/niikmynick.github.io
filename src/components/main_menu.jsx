import React, { useEffect, useReducer } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const MainMenu = () => {
    const navigate = useNavigate();
    const addresses = ['/person', '/programming', '/music', '/other'];

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const [selectedItem, setSelectedItem] = useReducer((state, action) => {
        if (action === 'up') {
            return state === 0 ? 3 : state - 1;
        } else if (action === 'down') {
            return state === 3 ? 0 : state + 1;
        } else {
            return action;
        }
    }, parseInt(localStorage.getItem('selectedItem')) || 0);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedItem('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedItem('down');
        } else if (e.key === 'Enter') {
            e.preventDefault();
            localStorage.setItem('selectedItem', selectedItem);
            navigate(addresses[selectedItem]);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [handleKeyDown]);

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a id="menu_object">
            <div id="menu-content">
                <h3 id="tip">
                    {isMobile ? 'tap for navigation' : 'use ↑ ↓ to navigate, enter to select'}
                </h3>
                <div id="items">
                    {isMobile ? (
                        <>
                            <h2><Link to="/person">person</Link></h2>
                            <h2><Link to="/programming">programming</Link></h2>
                            <h2><Link to="/music">music</Link></h2>
                            <h2><Link to="/other">other</Link></h2>
                        </>
                    ) : (
                        <ul className="menu">
                            <li className={selectedItem === 0 ? 'menu-item selected' : 'menu-item'}><Link to="/person">person</Link></li>
                            <li className={selectedItem === 1 ? 'menu-item selected' : 'menu-item'}><Link to="/programming">programming</Link></li>
                            <li className={selectedItem === 2 ? 'menu-item selected' : 'menu-item'}><Link to="/music">music</Link></li>
                            <li className={selectedItem === 3 ? 'menu-item selected' : 'menu-item'}><Link to="/other">other</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </a>
    )
}
