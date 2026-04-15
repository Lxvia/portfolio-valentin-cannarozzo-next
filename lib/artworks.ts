import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import type { Artwork } from '../types/artwork';

export async function getArtworks(): Promise<Artwork[]> {
    const snapshot = await getDocs(collection(db, 'artworks'));

    const data = snapshot.docs
        .map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Artwork, 'id'>),
        }))
        .filter((art) => art.isPublished)
        .sort((a, b) => a.order - b.order);

    return data;
}