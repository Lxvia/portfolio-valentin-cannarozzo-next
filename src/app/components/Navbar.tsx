import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinks}>
                <Link href="/">Accueil</Link>
                <Link href="/gallery">Galerie</Link>
                <Link href="/">Parcours</Link>
            </div>
            <div className={styles.navbarIcons}>
                <a
                    href="https://www.instagram.com/valentin.cnrz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <FaInstagram size={26} />
                </a>
                <a
                    href="mailto:cannarozzovalentin@gmail.com"
                    className={styles.iconLink}
                >
                    <FaEnvelope size={26} />
                </a>
            </div>
        </div>
    );
}

export default Navbar;