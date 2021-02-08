import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
export default function ControlCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className={styles.carousel}>
            <Carousel.Item>
                <img className='h-100' src='https://wd.car-plus.com.tw/ImgAdmin/Banner/20201112112232.jpg' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='h-100' src='https://wd.car-plus.com.tw/ImgAdmin/Banner/20200924175632.jpg' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='h-100' src='https://wd.car-plus.com.tw/ImgAdmin/Banner/20201217155740.jpg' />
            </Carousel.Item>
        </Carousel>
    );
}
