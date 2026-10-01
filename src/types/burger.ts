export interface BurgerItem {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  giantWordmark: string;
  microTitle: string;
  tagline: string;
  description: string;
  price: number;
  calories: string;
  image: string;
  alt: string;
  ingredients: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'artesanais' | 'acompanhamentos' | 'combos';
  badge?: string;
  serves?: string;
  image?: string;
  ingredients?: string[];
}

export interface CartItem {
  burger: BurgerItem | MenuItem;
  quantity: number;
  addedAt: number;
}
