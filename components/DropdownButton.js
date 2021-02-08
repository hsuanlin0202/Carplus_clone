import React, { useState } from 'react';
import styles from './DropdownButton.module.scss';

export default function DropdownButton({ title = '下拉選單' }) {
    const [isDrop, setDrop] = useState(false);

    function showDrop(e) {
        e.preventDefault();
        setDrop(!isDrop);
        console.log(isDrop);
    }
    return (
        <>
            <button
                className={'w-full text-center font-bold text-base border-none no-underline ' + styles.menuItem}
                onClick={showDrop}
            >
                {title}
            </button>
        </>
    );
}
