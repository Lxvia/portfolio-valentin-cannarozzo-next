'use client';

import React, { useState } from 'react';
import { artworks } from '@/data/artworks';
import styles from './styles.module.scss';

const Gallery: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<'all' | number>('all');

    const years: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

    const filteredArtworks = selectedYear === 'all' ? artworks : artworks.filter((art) => art.year === selectedYear);

    return (
        <div className={styles.galleryPage}>
            {/* Conteneur principal de la page galerie */}

            <div className={styles.filterBar}>
                {/* Barre contenant les boutons de filtre */}

                <button
                    className={`${styles.filterButton} ${selectedYear === 'all' ? styles.active : ''
                        }`}
                    onClick={() => setSelectedYear('all')}
                >
                    Toutes les œuvres
                </button>
                {/* Bouton pour sélectionner "Toutes les œuvres".
                    Si 'selectedYear' vaut 'all', on ajoute la classe active pour le styliser. */}

                {years.map((year) => (
                    <button
                        key={year}
                        className={`${styles.filterButton} ${selectedYear === year ? styles.active : ''
                            }`}
                        onClick={() => setSelectedYear(year)}
                    >
                        {year}
                    </button>
                ))}
                {/* On génère dynamiquement un bouton pour chaque année.
                    Quand on clique, on met à jour l’état 'selectedYear' avec l’année choisie.
                    Si c’est l’année active, on ajoute la classe active pour le style. */}
            </div>

            <div className={styles.galleryGrid}>
                {/* Grille contenant toutes les images filtrées */}

                {filteredArtworks.map((art) => (
                    <img
                        key={art.id}
                        src={art.imageUrl}
                        alt={art.title}
                        className={styles.artworkImage}
                    />
                ))}
                {/* On boucle sur les œuvres filtrées et on affiche uniquement l’image.
                    Chaque image a une clé unique (art.id) pour aider React à gérer la liste. */}
            </div>
        </div>
    );
};

export default Gallery;
