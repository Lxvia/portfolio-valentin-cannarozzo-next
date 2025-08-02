'use client';

import React, { useState } from 'react';
import { artworks } from '@/data/artworks';
import styles from './styles.module.scss';
import GalleryNavbar from '../components/Gallery/GalleryNavbar/GalleryNavbar';
import GalleryLayout from '../components/Gallery/GalleryLayout/GalleryLayout';

const Gallery: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<'all' | number>('all');
    const years: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

    const filteredArtworks =
        selectedYear === 'all' ? artworks : artworks.filter((art) => art.year === selectedYear);

    return (
        <div className={styles.galleryPage}>
            <GalleryNavbar
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
                years={years}
            />
            <GalleryLayout artworks={filteredArtworks} />
        </div>
    );
};

export default Gallery;
