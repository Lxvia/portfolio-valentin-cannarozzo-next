'use client';

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import type { Artwork } from '@/types/artwork';
import styles from './styles.module.scss';

interface AddArtworkModalProps {
    onClose: () => void;
    onAdd: (artwork: Artwork) => void;
    currentMaxOrder: number;
}

const AddArtworkModal: React.FC<AddArtworkModalProps> = ({ onClose, onAdd, currentMaxOrder }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [collection_, setCollection] = useState('');
    const [year, setYear] = useState(new Date().getFullYear());
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [detailImages, setDetailImages] = useState<File[]>([]);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const uploadImage = async (file: File, path: string): Promise<string> => {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    };

    const slugify = (text: string) =>
        text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mainImage) {
            setError('Veuillez ajouter une image principale.');
            return;
        }

        setSaving(true);
        setError('');

        try {
            const titleSlug = slugify(title);
            const basePath = `imgs/oeuvres/${year}/${slugify(collection_ || title)}`;

            // Upload image principale
            const mainExt = mainImage.name.split('.').pop();
            const imageUrl = await uploadImage(
                mainImage,
                `${basePath}/${titleSlug}.${mainExt}`
            );

            // Upload images de détail
            const detailUrls: string[] = [];
            for (let i = 0; i < detailImages.length; i++) {
                const ext = detailImages[i].name.split('.').pop();
                const url = await uploadImage(
                    detailImages[i],
                    `${basePath}/details/detail${i + 1}.${ext}`
                );
                detailUrls.push(url);
            }

            // Création du document Firestore
            const id = `${titleSlug}-${Date.now()}`;
            const newArtwork = {
                title,
                description,
                collection: collection_,
                year,
                imageUrl,
                detailImages: detailUrls,
                order: currentMaxOrder + 1,
                isPublished: true,
                isSold: false,
                createdAt: new Date(),
            };

            const docRef = await addDoc(collection(db, 'artworks'), newArtwork);
            onAdd({ id: docRef.id, ...newArtwork });
            onClose();
        } catch (err) {
            console.error(err);
            setError('Erreur lors de l\'ajout de l\'œuvre.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.formContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton}>×</button>
                <h2>Ajouter une œuvre</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                        <label>Titre *</label>
                        <input
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formRow}>
                        <label>Collection</label>
                        <input
                            className={styles.input}
                            value={collection_}
                            onChange={(e) => setCollection(e.target.value)}
                            placeholder="Nom de la collection"
                        />
                    </div>

                    <div className={styles.formRow}>
                        <label>Année *</label>
                        <input
                            className={styles.input}
                            type="number"
                            value={year}
                            onChange={(e) => setYear(Number(e.target.value))}
                            min={2000}
                            max={2100}
                            required
                        />
                    </div>

                    <div className={styles.formRow}>
                        <label>Description</label>
                        <textarea
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <label>Image principale *</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setMainImage(e.target.files?.[0] ?? null)}
                            required
                        />
                        {mainImage && (
                            <img
                                src={URL.createObjectURL(mainImage)}
                                alt="preview"
                                className={styles.preview}
                            />
                        )}
                    </div>

                    <div className={styles.formRow}>
                        <label>Images de détail</label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => setDetailImages(Array.from(e.target.files ?? []))}
                        />
                        {detailImages.length > 0 && (
                            <div className={styles.previewRow}>
                                {detailImages.map((file, i) => (
                                    <img
                                        key={i}
                                        src={URL.createObjectURL(file)}
                                        alt={`detail ${i}`}
                                        className={styles.previewThumb}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={saving}
                    >
                        {saving ? 'Ajout en cours...' : 'Ajouter l\'œuvre'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddArtworkModal;