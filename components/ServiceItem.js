import React from 'react';
import styles from './serviceItem.module.scss';
export default function ServiceBox({ imgUrl, title }) {
    const itemImg = {
        backgroundImage: `url("` + imgUrl + `")`,
    };
    return (
        <>
            <div className={styles.serviceItem} style={itemImg}>
                <div className={styles.serviceTitle}>{title}</div>
            </div>
        </>
    );
}
