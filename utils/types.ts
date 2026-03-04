export interface FoodCategory {
  id: string;
  name: string;
  slug: string;
  image: any; // 👈 change this
}

export interface Food {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isVeg: boolean;
  categoryId: string;
  rating: number;
  reviewsCount: number;
}
