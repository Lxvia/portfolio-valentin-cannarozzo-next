// components/GalleryLayout.tsx
'use client';

import React from 'react';
import styles from './styles.module.scss';
import type { Artwork } from '@/types/artwork';
import Image from 'next/image'; // si tu as un type ou une interface définie

interface GalleryLayoutProps {
    artworks: Artwork[];
    onSelectArtwork: (art: Artwork) => void;
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ artworks, onSelectArtwork }) => {
    return (
        <div className={styles.galleryGrid}>
            {artworks.map((art, index) => (
                <div
                    key={art.id}
                    className={styles.artworkWrapper}
                    onClick={() => onSelectArtwork(art)}
                >
                    <Image
                        src={art.thumbnailUrl || art.imageUrl}
                        alt={art.title}
                        fill
                        className={styles.artworkImage}
                        priority={index < 6}
                        loading={index < 6 ? 'eager' : 'lazy'}
                        sizes="(max-width: 768px) 50vw, 200px"
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryLayout;
