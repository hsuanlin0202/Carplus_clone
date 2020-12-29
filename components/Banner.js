import React from 'react';
import styles from './Banner.module.scss';
import useIsDesktop from '../hooks/useIsDesktop';
import SearchBox from './SearchBox';
import Carousel from './Carousel';

export default function Banner() {
    const isDesktop = useIsDesktop();

    return (
        <>
            {isDesktop ? (
                <div className={'wid100 ' + styles.container}>
                    <Carousel></Carousel>
                    <SearchBox></SearchBox>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
