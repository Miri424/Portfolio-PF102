export interface Product {
  id: number;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  category?: string;
  rating?: number;
  sold?: number;
  favourites?: number;
}

export type DetailsProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  sold: number;
  favourites: number;
};
