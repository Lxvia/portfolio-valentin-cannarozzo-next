'use client';

import React, { useEffect, useState, useMemo } from 'react';
import type { Artwork } from '@/types/artwork';
import { getArtworks } from '@/lib/artworks';
import styles from './styles.module.scss';
import GalleryNavbar from '../components/Gallery/GalleryNavbar/GalleryNavbar';
import GalleryLayout from '../components/Gallery/GalleryLayout/GalleryLayout';
import ArtworkModal from '../components/Gallery/ArtworkModal/ArtworkModal';

const Gallery: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState<'all' | number>('all');
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                console.log('Chargement des oeuvres...');
                const data = await getArtworks();
                console.log('Oeuvres reçues dans Gallery :', data);
                setArtworks(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des œuvres :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    const years = useMemo(() => {
        const uniqueYears = [...new Set(artworks.map((art) => art.year))];
        return uniqueYears.sort((a, b) => b - a);
    }, [artworks]);

    const filteredArtworks =
        selectedYear === 'all'
            ? artworks
            : artworks.filter((art) => art.year === selectedYear);

    const openModal = (art: Artwork) => setSelectedArtwork(art);
    const closeModal = () => setSelectedArtwork(null);

    const goToPrev = () => {
        if (!selectedArtwork || filteredArtworks.length === 0) return;

        const index = filteredArtworks.findIndex((a) => a.id === selectedArtwork.id);
        const prevIndex = (index - 1 + filteredArtworks.length) % filteredArtworks.length;
        setSelectedArtwork(filteredArtworks[prevIndex]);
    };

    const goToNext = () => {
        if (!selectedArtwork || filteredArtworks.length === 0) return;

        const index = filteredArtworks.findIndex((a) => a.id === selectedArtwork.id);
        const nextIndex = (index + 1) % filteredArtworks.length;
        setSelectedArtwork(filteredArtworks[nextIndex]);
    };

    if (loading) {
        return <div className={styles.galleryPage}>Chargement...</div>;
    }

    return (
        <div className={styles.galleryPage}>
            <GalleryNavbar
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
                years={years}
            />

            <GalleryLayout artworks={filteredArtworks} onSelectArtwork={openModal} />

            {selectedArtwork && (
                <ArtworkModal
                    artwork={selectedArtwork}
                    onClose={closeModal}
                    onPrev={goToPrev}
                    onNext={goToNext}
                />
            )}
        </div>
    );
};

export default Gallery;