export type TypeProduct = {
    id: string,
    name: string,
    category: string,
    colors: string[],
    accent: string,
    prices: number[],
    rating: number,
    reviews: number,
    limited?: boolean,
}