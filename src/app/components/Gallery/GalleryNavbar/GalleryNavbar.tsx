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
        <div>
            {/* Navbar */}
            <div className={styles.filterBar}>
                <button
                    className={styles.backButton}
                    onClick={() => router.push('/home')}
                >
                    ←
                </button>
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
        </div>
    );
};

export default GalleryNavbar;