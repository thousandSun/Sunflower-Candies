import { Product } from "./types/Product";

export const sampleProducts:Product[] = [
    {
        name: 'Sour Patch Watermelon',
        slug: 'sour-patch-watermelon',
        category: 'candy',
        image: '../public/images/sour-watermelon.jpg',
        price: 6,
        countInStock: 10,
        brand: 'Sunflower Sour Candies',
        rating: 4,
        numReviews: 10,
        description: 'Sour Path Watermelons coated in our signature blend of chamoy and chili powder',
    },
    {
        name: 'Sour Gushers',
        slug: 'sour-gushers',
        category: 'candy',
        image: '../public/images/sour-gushers.jpg',
        price: 6,
        countInStock: 10,
        brand: 'Sunflower Sour Candies',
        rating: 5,
        numReviews: 10,
        description: 'Gushers coated in our signature blend of chamoy and chili powder'
    },
    {
        name: 'Sour Skittles',
        slug: 'sour-skittles',
        category: 'candy',
        image: '../public/images/sour-skittles.jpg',
        price: 6,
        countInStock: 10,
        brand: 'Sunflower Sour Candies',
        rating: 4.5,
        numReviews: 10,
        description: 'Skittles coated in our signature blend of chamoy and chili powder'
    },
    {
        name: 'Rim Dip',
        slug: 'rim-dip',
        category: 'dips',
        image: '../public/images/rim-dip.jpg',
        price: 10,
        countInStock: 10,
        brand: 'Sunflower Sour Candies',
        rating:3.5,
        numReviews: 10,
        description: 'Our signature blend of chamoy and chili powder in a container perfect for rimming your favorite drinks!'
    }
]