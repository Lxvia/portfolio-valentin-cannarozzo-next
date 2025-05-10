import Link from 'next/link';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
    text: string;
    path: string;
}

const PrimaryButton = ({ text, path }: PrimaryButtonProps) => {
    return (
        <Link href={path} className={styles.primaryButton}>
            {text}
        </Link>
    );
};

export default PrimaryButton;
