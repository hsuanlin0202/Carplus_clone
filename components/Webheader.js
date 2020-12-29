import React from 'react';
import styles from './Webheader.module.scss';
import useIsDesktop from '../hooks/useIsDesktop';
import DropdownButton from './DropdownButton';

export default function WebHeader() {
    const isDesktop = useIsDesktop();

    return (
        <>
            {isDesktop ? (
                <div className={'wid100 fx fx_nowrap fx_acenter fx_between ' + styles.container}>
                    <div className={styles.logo}>
                        <img src='https://www.car-plus.com.tw/img/logo_carplus.svg' />
                    </div>
                    <div className={'fx fx_nowrap fx_center ' + styles.menuBox}>
                        <DropdownButton title='短期租車' />
                        <DropdownButton title='附駕接送' />
                        <DropdownButton title='企業/個人長租' />
                        <DropdownButton title='優質中古車' />
                        <DropdownButton title='服務據點' />
                    </div>
                    <div className={'fx fx_acenter fx_around ' + styles.sign}>
                        <a>登入</a>/<a>註冊</a>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
