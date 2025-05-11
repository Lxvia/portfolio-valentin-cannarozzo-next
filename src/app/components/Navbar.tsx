import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.scss';  // Importation du module SCSS

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinks}>
                <Link href="/">Accueil</Link>
                <Link href="/gallery">Galerie</Link>
                <Link href="/">Parcours</Link>
            </div>
            <div className={styles.navbarIcons}>
                <FaInstagram size={26} style={{ display: 'inline-flex' }} />  {/* Applique inline-flex ici */}
                <FaEnvelope size={26} style={{ display: 'inline-flex' }} />  {/* Applique inline-flex ici */}
            </div>
        </div>
    );
}

export default Navbar;
