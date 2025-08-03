// components/GalleryLayout.tsx
'use client';

import React from 'react';
import styles from './styles.module.scss';
import { Artwork } from '@/data/artworks'; // si tu as un type ou une interface définie

interface GalleryLayoutProps {
    artworks: Artwork[];
    onSelectArtwork: (art: Artwork) => void;
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ artworks, onSelectArtwork }) => {
    return (
        <div className={styles.galleryGrid}>
            {artworks.map((art) => (
                <img
                    key={art.id}
                    src={art.imageUrl}
                    alt={art.title}
                    className={styles.artworkImage}
                    onClick={() => onSelectArtwork(art)}
                />
            ))}
        </div>
    );
};

export default GalleryLayout;
