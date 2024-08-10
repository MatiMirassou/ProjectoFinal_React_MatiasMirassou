const products = [
    {
        "id": "1",
        "name": "Piggies",
        "artist": "Matias Mirassou",
        "category": "aline",
        "stock": 1,
        "price": 10,
        "rutaImagen": "/assets/video/piggies.mp4"
    },
    {
        "id": "2",
        "name": "Flamingos",
        "artist": "Matias Mirassou",
        "category": "aline",
        "stock": 1,
        "price": 30,
        "rutaImagen": "/assets/video/flamingos.mp4"
    },
    {
        "id": "3",
        "name": "Rubber Ducks",
        "artist": "Matias Mirassou",
        "category": "aline",
        "stock": 1,
        "price": 50,
        "rutaImagen": "/assets/video/ducks.mp4"
    },
    {
        "id": "4",
        "name": "Desintegrate Art",
        "artist": "Decentral Artist",
        "category": "dart",
        "stock": 5,
        "price": 150,
        "rutaImagen": "/assets/video/desintegratingart.mp4"
    },
    {
        "id": "5",
        "name": "Stoic Art",
        "artist": "Decentral Artist",
        "category": "dart",
        "stock": 5,
        "price": 250,
        "rutaImagen": "/assets/video/stoicart.mp4"
    },
    {
        "id": "6",
        "name": "Ethereal Art",
        "artist": "Decentral Artist",
        "category": "dart",
        "stock": 5,
        "price": 350,
        "rutaImagen": "/assets/video/etherealart.mp4"
    },
    {
        "id": "7",
        "name": "Synthesizer",
        "artist": "Roger Kilimanjaro",
        "category": "roger",
        "stock": 1,
        "price": 500,
        "rutaImagen": "/assets/video/synthesizer.mp4"
    },
    {
        "id": "8",
        "name": "Gravity",
        "artist": "Roger Kilimanjaro",
        "category": "roger",
        "stock": 1,
        "price": 500,
        "rutaImagen": "/assets/video/gravity.mp4"
    },
    {
        "id": "9",
        "name": "Twist",
        "artist": "Roger Kilimanjaro",
        "category": "roger",
        "stock": 1,
        "price": 500,
        "rutaImagen": "/assets/video/twist.mp4"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};