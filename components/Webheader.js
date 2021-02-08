import React from 'react';
import styles from './Webheader.module.scss';
import useIsDesktop from '../hooks/useIsDesktop';
import DropdownButton from './DropdownButton';

export default function WebHeader() {
    const isDesktop = useIsDesktop();

    return (
        <>
            {isDesktop ? (
                <div className={'w-full flex flex-nowrap fx_acenter fx_between h-full box-border shadow-md px-1.5'}>
                    <div className={'mx-4 ' + styles.logo}>
                        <img src='https://www.car-plus.com.tw/img/logo_carplus.svg' />
                    </div>
                    <div className={'flex fx_nowrap fx_center ' + styles.menuBox}>
                        <DropdownButton title='短期租車' />
                        <DropdownButton title='附駕接送' />
                        <DropdownButton title='企業/個人長租' />
                        <DropdownButton title='優質中古車' />
                        <DropdownButton title='服務據點' />
                    </div>
                    <div className={'flex fx_acenter fx_around box-border px-1 ' + styles.sign}>
                        <a>登入</a>/<a>註冊</a>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
