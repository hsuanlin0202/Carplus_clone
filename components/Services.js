import React from 'react';
import styles from './Services.module.scss';
import Item from './ServiceItem';
export default function Services() {
    return (
        <>
            <div className={'wid100 fx fx_center fx_wrap ' + styles.serviceBox}>
                <Item imgUrl='https://www.car-plus.com.tw/img/img_GoSmart.jpg' title='格上GoSmart' />
                <Item imgUrl='https://www.car-plus.com.tw/img/index_twdd.jpg' title='格上代駕' />
                <Item imgUrl='https://www.car-plus.com.tw/img/sealand.JPG' title='格上車訂閱' />
                <Item imgUrl='https://www.car-plus.com.tw/img/img_Smart2go.jpg' title='Smart2go' />
                <Item imgUrl='https://www.car-plus.com.tw/img/img_SmartTaxi.jpg' title='SmartTaxi' />
                <Item imgUrl='https://www.car-plus.com.tw/img/img_autoleasing.png' title='企業/個人長租' />
                <Item imgUrl='https://www.car-plus.com.tw/img/img_11_secondhand.jpg' title='優質中古車' />
                <Item imgUrl='https://www.car-plus.com.tw/img/img_leasing_supervisor.jpg' title='主管駕駛' />
            </div>
        </>
    );
}
