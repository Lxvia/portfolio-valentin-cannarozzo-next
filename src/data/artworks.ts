export interface Artwork {
    id: number;
    year: number;
    title: string;
    imageUrl: string;
    description: string;
    details: string[];
}

export const artworks: Artwork[] = [
    // 2024 œuvres
    {
        id: 1,
        year: 2024,
        title: 'Oeuvre1-24',
        imageUrl: '/imgs/oeuvres/2024/Oeuvre1-24.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 2,
        year: 2024,
        title: 'Oeuvre2-24',
        imageUrl: '/imgs/oeuvres/2024/Oeuvre2-24.png',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 3,
        year: 2024,
        title: 'Oeuvre3-24',
        imageUrl: '/imgs/oeuvres/2024/Oeuvre3-24.png',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 4,
        year: 2024,
        title: 'Oeuvre4-24',
        imageUrl: '/imgs/oeuvres/2024/Oeuvre4-24.png',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },

    // 2025 œuvres
    {
        id: 5,
        year: 2025,
        title: 'Oeuvre1',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 6,
        year: 2025,
        title: 'Oeuvre2',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre2.png',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 7,
        year: 2025,
        title: 'Oeuvre3',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre3.png',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 8,
        year: 2025,
        title: 'Oeuvre4',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre4.png',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 9,
        year: 2025,
        title: 'Oeuvre5',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre5.png',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
    {
        id: 10,
        year: 2025,
        title: 'Oeuvre6',
        imageUrl: '/imgs/oeuvres/2025/Oeuvre6.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        details: ['/imgs/oeuvres/detailOeuvre/detail-1.png', '/imgs/oeuvres/detailOeuvre/detail-2.png', '/imgs/oeuvres/detailOeuvre/detail-3.png']
    },
];
