import React from 'react';
import styles from './SearchBox.module.scss';
import StationBox from './widgets/stationBox';
import SlotBox from './widgets/slotBox';

export default function SearchBox() {
    const btnStyle = {
        marginTop: '10px',
    };
    return (
        <div className={styles.container + ' fx fx_wrap'}>
            <div className={'wid100 fx fx_center ' + styles.title}>我要租車</div>
            <div className={'wid100 fx fx_center fx_wrap ' + styles.content}>
                <Title title={'取還車地點'} />
                <div className='wid100 fx fx_nowrap'>
                    <StationBox />
                </div>

                <div className='wid100 fx fx_nowrap'>
                    <Title title={'取車日期'} />
                    <Title title={'取車時間'} />
                </div>

                <div className='wid100 fx fx_nowrap fx_acenter'>
                    <SlotBox />
                </div>

                <div className='wid100 fx fx_nowrap'>
                    <Title title={'還車日期'} />
                    <Title title={'還車時間'} />
                </div>
                <div className='wid100 fx fx_nowrap fx_acenter'>
                    <SlotBox />
                </div>

                {/* <Title title={'取還車地址'} />
                <div>{}</div> */}
                <div className='wid100' style={btnStyle}>
                    <button type='submit' className={'btn wid100 btn_00'}>
                        搜尋車輛
                    </button>
                </div>
            </div>
        </div>
    );
}

function Title({ title = '小標題' }) {
    return <label className={'wid100 '}>{title}</label>;
}
