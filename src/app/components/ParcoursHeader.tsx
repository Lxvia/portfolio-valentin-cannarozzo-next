import Image from 'next/image';
import styles from './ParcoursHeader.module.scss';

export default function ParcoursHeader() {
    return (
        <div className={styles.parcoursContainer}>
            <div className={styles.headerLeft}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/imgs/valou-parcours.webp"
                        alt="photo de Valentin qui peint un tableau"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className={styles.headerRight}>
                <p>
                    <span>Artiste pluridisciplinaire</span> basé à Strasbourg, diplômé en design graphique à LISAA (2016) et indépendant depuis 2017, je développe une pratique mêlant création visuelle, écriture et interventions publiques.<br /><br />

                    Mes premières œuvres, réunies sous le titre &quot;Les amis imaginaires&quot;, explorent des territoires psychiques alors inaccessibles, à travers des figures qui tentent de donner forme à des blessures et des silences.<br /><br />

                    Mon travail a été présenté dans plusieurs expositions collectives entre Lausanne et Paris (Salon d’art contemporain de Colombes, Salon des Arts Visuels, Salon des 40 à Saint-Louis…), ainsi que lors de trois expositions personnelles.<br /><br />

                    À partir de 2020, un tournant s’opère. La disparition d’un proche et les bouleversements du monde m’amènent à redéfinir ma pratique. L’œuvre &quot;L’autre, c’est moi&quot; marque ce basculement: reconnaître mes fractures devient une ouverture vers l’autre.<br /><br />

                    Depuis 2023, je poursuis cette recherche à travers mon podcast <a href='https://www.instagram.com/sous_ma_peau/' target='blank'>Sous ma peau</a>, centré sur l’humain.<br /><br />

                    J’ai également collaboré avec des artistes comme Agnès Thurnauer dans le cadre du 1% artistique de l’Eurométropole et participé aux colloques Engagements de l’UQAM.<br /><br />

                    En 2025, le FRAC Alsace m’invite à réactiver Pot-pourri de Mehryl Ferri Levisse lors de deux événements, le vernissage de l’exposition « Aux lieux d’être » et la Nuit des musées.<br /><br />

                    Cette expérience renforce mon engagement vers une pratique de transmission, aujourd’hui prolongée par mon enseignement à LISAA et Ynov à Strasbourg.
                </p>
            </div>
        </div>
    );
}