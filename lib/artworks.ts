import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import type { Artwork } from '../types/artwork';

export async function getArtworks(): Promise<Artwork[]> {
    console.log('Début récupération Firestore');

    const snapshot = await getDocs(collection(db, 'artworks'));

    console.log('Nombre de documents Firestore :', snapshot.docs.length);

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Artwork, 'id'>),
    }));

    console.log('Données récupérées :', data);

    return data;
}