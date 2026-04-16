'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

interface GalleryNavbarProps {
    selectedYear: 'all' | number;
    onSelectYear: (year: 'all' | number) => void;
    years: number[];
}

const GalleryNavbar: React.FC<GalleryNavbarProps> = ({ selectedYear, onSelectYear, years }) => {
    const router = useRouter();

    return (
        <div className={styles.filterBar}>
            <button
                className={styles.backButton}
                onClick={() => router.push('/home')}
            >
                ←
            </button>

            {/* Boutons sur desktop */}
            <div className={styles.filterButtons}>
                <button
                    className={`${styles.filterButton} ${selectedYear === 'all' ? styles.active : ''}`}
                    onClick={() => onSelectYear('all')}
                >
                    Toutes les œuvres
                </button>
                {years.map((year) => (
                    <button
                        key={year}
                        className={`${styles.filterButton} ${selectedYear === year ? styles.active : ''}`}
                        onClick={() => onSelectYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Select déroulant sur mobile */}
            <select
                className={styles.filterSelect}
                value={selectedYear}
                onChange={(e) => {
                    const val = e.target.value;
                    onSelectYear(val === 'all' ? 'all' : Number(val));
                }}
            >
                <option value="all">Toutes les œuvres</option>
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    );
};

export default GalleryNavbar;