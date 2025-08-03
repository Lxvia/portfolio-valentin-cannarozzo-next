'use client';

import React, { useState } from 'react';
import { artworks, Artwork } from '@/data/artworks';
import styles from './styles.module.scss';
import GalleryNavbar from '../components/Gallery/GalleryNavbar/GalleryNavbar';
import GalleryLayout from '../components/Gallery/GalleryLayout/GalleryLayout';
import ArtworkModal from '../components/Gallery/ArtworkModal/ArtworkModal';

const Gallery: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<'all' | number>('all');
    const years: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

    const filteredArtworks =
        selectedYear === 'all' ? artworks : artworks.filter((art) => art.year === selectedYear);

    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const openModal = (art: Artwork) => setSelectedArtwork(art);
    const closeModal = () => setSelectedArtwork(null);

    const goToPrev = () => {
        if (!selectedArtwork) return;
        const index = filteredArtworks.findIndex(a => a.id === selectedArtwork.id);
        const prevIndex = (index - 1 + filteredArtworks.length) % filteredArtworks.length;
        setSelectedArtwork(filteredArtworks[prevIndex]);
    };

    const goToNext = () => {
        if (!selectedArtwork) return;
        const index = filteredArtworks.findIndex(a => a.id === selectedArtwork.id);
        const nextIndex = (index + 1) % filteredArtworks.length;
        setSelectedArtwork(filteredArtworks[nextIndex]);
    };

    return (
        <div className={styles.galleryPage}>
            <GalleryNavbar
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
                years={years}
            />
            <GalleryLayout artworks={filteredArtworks} onSelectArtwork={openModal} />
            {selectedArtwork && (
                <ArtworkModal artwork={selectedArtwork}
                    onClose={closeModal}
                    onPrev={goToPrev}
                    onNext={goToNext} />
            )}
        </div>
    );
};

export default Gallery;
