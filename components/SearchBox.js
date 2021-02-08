import React from 'react';
import styles from './SearchBox.module.scss';
import StationBox from './widgets/stationBox';
import SlotBox from './widgets/slotBox';

export default function SearchBox() {
    const btnStyle = {
        marginTop: '10px',
    };
    return (
        <div className={styles.container + ' absolute z-50 flex flex-wrap'}>
            <div className={'w-full flex fx_center ' + styles.title}>我要租車</div>
            <div className={'w-full flex fx_center flex-wrap ' + styles.content}>
                <Title title={'取還車地點'} />
                <div className='w-full flex flex-nowrap'>
                    <StationBox />
                </div>

                <div className='w-full flex flex-nowrap'>
                    <Title title={'取車日期'} />
                    <Title title={'取車時間'} />
                </div>

                <div className='w-full flex fx-nowrap fx_acenter'>
                    <SlotBox />
                </div>

                <div className='w-full flex fx-nowrap'>
                    <Title title={'還車日期'} />
                    <Title title={'還車時間'} />
                </div>
                <div className='w-full flex flex-nowrap fx_acenter'>
                    <SlotBox />
                </div>

                {/* <Title title={'取還車地址'} />
                <div>{}</div> */}
                <div className='w-full' style={btnStyle}>
                    <button type='submit' className={'btn w-full btn_00'}>
                        搜尋車輛
                    </button>
                </div>
            </div>
        </div>
    );
}

function Title({ title = '小標題' }) {
    return <label className={'w-full '}>{title}</label>;
}
