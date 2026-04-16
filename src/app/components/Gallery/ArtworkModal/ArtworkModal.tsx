'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '../../../../context/AuthContext';
import type { Artwork } from '@/types/artwork';
import styles from './styles.module.scss';
import { FiShoppingBag } from 'react-icons/fi';

interface ArtworkModalProps {
    artwork: Artwork;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    onUpdate: (updated: Artwork) => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose, onPrev, onNext, onUpdate }) => {
    const { isAdmin } = useAuth();
    const [currentImage, setCurrentImage] = useState(artwork.imageUrl);

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(artwork.title);
    const [description, setDescription] = useState(artwork.description);
    const [collection, setCollection] = useState(artwork.collection ?? '');
    const [isSold, setIsSold] = useState(artwork.isSold);
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState('');
    const [isPublished, setIsPublished] = useState(artwork.isPublished);


    useEffect(() => {
        setCurrentImage(artwork.imageUrl);
        setTitle(artwork.title);
        setDescription(artwork.description);
        setCollection(artwork.collection ?? '');
        setIsSold(artwork.isSold);
        setIsEditing(false);
        setSaveError('');
    }, [artwork]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isEditing) return;
            if (e.key === 'ArrowLeft') onPrev();
            else if (e.key === 'ArrowRight') onNext();
            else if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onPrev, onNext, onClose, isEditing]);

    const handleSave = async () => {
        setSaving(true);
        setSaveError('');

        try {
            const ref = doc(db, 'artworks', artwork.id);
            await updateDoc(ref, { title, description, collection, isSold, isPublished });
            onUpdate({ ...artwork, title, description, collection, isSold, isPublished });
            setIsPublished(artwork.isPublished);
            setIsEditing(false);
        } catch (err) {
            setSaveError('Erreur lors de la sauvegarde.');
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setTitle(artwork.title);
        setDescription(artwork.description);
        setCollection(artwork.collection ?? '');
        setIsSold(artwork.isSold);
        setIsEditing(false);
        setSaveError('');
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                <img src={currentImage} alt={artwork.title} className={styles.artworkImage} />

                <div className={styles.artworkDetails}>

                    {/* Haut : titre + édition */}
                    <div className={styles.detailsTop}>

                        {/* Ligne titre + bouton modifier */}
                        <div className={styles.titleRow}>
                            {isEditing ? (
                                <input
                                    className={styles.editInput}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            ) : (
                                <h1>{title}</h1>
                            )}
                            {isAdmin && !isEditing && (
                                <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                                    ✏️
                                </button>
                            )}
                        </div>

                        {/* Collection */}
                        {isEditing ? (
                            <input
                                className={styles.editInput}
                                value={collection}
                                onChange={(e) => setCollection(e.target.value)}
                                placeholder="Collection"
                            />
                        ) : (
                            collection && <p className={styles.collection}>{collection}</p>
                        )}

                        {/* Description */}
                        {isEditing ? (
                            <textarea
                                className={styles.editTextarea}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                            />
                        ) : (
                            <p className={styles.description}>{description}</p>
                        )}

                        {/* Boutons save/cancel */}
                        {isAdmin && isEditing && (
                            <div className={styles.adminActions}>
                                <button className={styles.saveButton} onClick={handleSave} disabled={saving}>
                                    {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                                </button>
                                <button className={styles.cancelButton} onClick={handleCancel} disabled={saving}>
                                    Annuler
                                </button>
                                {saveError && <p className={styles.error}>{saveError}</p>}
                            </div>
                        )}
                    </div>

                    {/* Bas : pastille + vignettes */}
                    <div className={styles.detailsBottom}>
                        <div className={styles.badgeRow}>
                            {isAdmin ? (
                                isEditing ? (
                                    <button
                                        className={`${styles.badge} ${isSold ? styles.sold : styles.available}`}
                                        onClick={() => setIsSold(!isSold)}
                                    >
                                        {isSold ? 'Vendu' : 'Disponible'}
                                    </button>
                                ) : (
                                    <span className={`${styles.badge} ${isSold ? styles.sold : styles.available}`}>
                                        {isSold ? 'Vendu' : 'Disponible'}
                                    </span>
                                )
                            ) : (
                                <span className={`${styles.badge} ${isSold ? styles.sold : styles.available}`}>
                                    {isSold ? 'Vendu' : 'Disponible'}
                                </span>
                            )}

                            {!isSold && (
                                <a href={`mailto:valentin@cannarozzo.com?subject=Intéressé par l'œuvre : ${artwork.title}`}
                                    className={styles.contactButton}
                                >
                                    <FiShoppingBag size={16} />
                                    <span className={styles.contactText}>Cette œuvre m'intéresse</span>
                                </a>
                            )}
                        </div>

                        {artwork.detailImages && artwork.detailImages.length > 0 && (
                            <div className={styles.detailsGallery}>
                                {[artwork.imageUrl, ...artwork.detailImages].map((detailUrl, index) => (
                                    <Image
                                        key={index}
                                        src={detailUrl}
                                        alt={`Détail ${index} de ${artwork.title}`}
                                        width={60}
                                        height={60}
                                        className={`${styles.detailImage} ${currentImage === detailUrl ? styles.active : ''}`}
                                        onClick={() => setCurrentImage(detailUrl)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button onClick={onClose} className={styles.closeButton}>×</button>
                <button className={styles.arrow + ' ' + styles.leftArrow} onClick={onPrev}>←</button>
                <button className={styles.arrow + ' ' + styles.rightArrow} onClick={onNext}>→</button>
            </div>
        </div>
    );
};

export default ArtworkModal;