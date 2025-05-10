import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import styles from './HomeHeader.module.scss';

export default function HomeHeader() {
    return (
        <div className={styles.homeHeaderContainer}>
            <div className={styles.headerLeft}>
                <h1>
                    Valentin <br />
                    Cannarozzo.
                </h1>
                <p>
                    Mon travail artistique, qu’il s’agisse de dessin, de peinture ou de photographie, est une exploration profonde de
                    mon identité et une manière d’interroger les complexités du monde qui m’entoure.
                    C’est un espace où je me confronte à mes propres questionnements en tant qu’être humain tout en cherchant
                    à aborder des thèmes qui dépassent l’individuel, notamment ceux liés à la santé mentale et à des enjeux
                    sociaux fondamentaux. Ces thématiques, souvent taboues ou ignorées, sont pour moi des piliers essentiels pour
                    comprendre notre époque et ouvrir des dialogues sincères.
                </p>
                <div className={styles.btnContainer}>
                    <PrimaryButton text="En savoir plus" path="/" />
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/imgs/valou.jpg"
                        alt="photo de Valentin qui peint un tableau"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}
