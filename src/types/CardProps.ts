export type CardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  updateTotalPrice: (price: number) => void;
  idToDelete: (id: number) => number;
}