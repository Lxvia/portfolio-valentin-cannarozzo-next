import Image from 'next/image';
import styles from './HomeHeader.module.scss';
import Link from 'next/link';

export default function HomeHeader() {
    return (
        <div className={styles.homeHeaderContainer}>
            <div className={styles.headerLeft}>
                <h1>
                    Valentin <br />
                    Cannarozzo.
                </h1>
                <p>Mon travail artistique, qu&apos;il s&apos;agisse de dessin, de peinture ou de photographie, est une exploration profonde de mon identité et une manière d&apos;interroger les complexités du monde qui m&apos;entoure.</p>

                <p>La peinture a longtemps été un espace de confrontation et de réparation, faisant émerger des figures fragmentées et des corps en tension. En parallèle, le dessin a donné naissance à des formes hybrides et colorées, où le monstrueux devient un terrain de réinvention, en résonance avec mon identité queer.</p>

                <p>Je m&apos;intéresse à l&apos;empreinte du vécu, l&apos;émotion, le souvenir, la sensation. Le corps y apparaît comme un lieu de mémoire, instable et en constante transformation.</p>
                <div className={styles.btnContainer}>
                    <Link href='/parcours'>En savoir plus</Link>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/imgs/valou.webp"
                        alt="photo de Valentin qui peint un tableau"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
