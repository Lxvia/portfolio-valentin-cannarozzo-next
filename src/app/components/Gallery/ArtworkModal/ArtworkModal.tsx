'use client';

import React from 'react';
import styles from './styles.module.scss'
import { Artwork } from '@/data/artworks';
import { useEffect, useState } from 'react';


interface ArtworkModalProps {
    artwork: Artwork;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose, onPrev, onNext }) => {
    const [currentImage, setCurrentImage] = useState(artwork.imageUrl);

    useEffect(() => {
        setCurrentImage(artwork.imageUrl);
    }, [artwork]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                onPrev();
            } else if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onPrev, onNext, onClose]);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={currentImage} alt={artwork.title} className={styles.artworkImage} />
                <div className={styles.artworkDetails}>
                    <div>
                        <h1>{artwork.title}</h1>
                        <p>{artwork.description}</p>
                    </div>

                    {artwork.details && artwork.details.length > 0 && (
                        <div className={styles.detailsGallery}>
                            {[artwork.imageUrl, ...artwork.details].map((detailUrl, index) => (
                                <img
                                    key={index}
                                    src={detailUrl}
                                    alt={`Détail ${index} de ${artwork.title}`}
                                    className={`${styles.detailImage} ${currentImage === detailUrl ? styles.active : ''}`}
                                    onClick={() => setCurrentImage(detailUrl)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={onClose} className={styles.closeButton}>×</button>
                <button className={styles.arrow + ' ' + styles.leftArrow} onClick={onPrev}>←</button>
                <button className={styles.arrow + ' ' + styles.rightArrow} onClick={onNext}>→</button>

            </div>
        </div>
    );
};

export default ArtworkModal;
