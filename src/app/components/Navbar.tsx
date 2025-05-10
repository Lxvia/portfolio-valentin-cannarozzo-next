import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.scss';  // Importation du module SCSS

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinks}>
                <Link href="/">Parcours</Link>
                <Link href="/gallery">Galerie</Link>
                <Link href="/">Liennnn</Link>
            </div>
            <h1 className={styles.navbarTitle}>Valentin C.</h1>
            <div className={styles.navbarIcons}>
                <FaInstagram size={24} style={{ display: 'inline-flex' }} />  {/* Applique inline-flex ici */}
                <FaEnvelope size={24} style={{ display: 'inline-flex' }} />  {/* Applique inline-flex ici */}
            </div>
        </div>
    );
}

export default Navbar;
