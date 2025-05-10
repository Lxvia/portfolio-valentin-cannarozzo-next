import React from 'react'
import styles from './styles.module.scss';
import GalleryLeft from '../components/Gallery/GalleryLeft'
import GalleryRight from '../components/Gallery/GalleryRight'
import GalleryBottom from '../components/Gallery/GalleryBottom'

const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryLeft}>
                <GalleryLeft />
            </div>
            <div className={styles.galleryRight}>
                <GalleryRight />
            </div>
            <div className={styles.galleryBottom}>
                <GalleryBottom />
            </div>
        </div>
    );
};

export default Gallery
