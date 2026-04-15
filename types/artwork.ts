export interface Artwork {
    id: string;
    year: number;
    title: string;
    imageUrl: string;
    description: string;
    detailImages: string[];
    collection?: string;
    order: number;
    isPublished: boolean;
    isSold: boolean;
}