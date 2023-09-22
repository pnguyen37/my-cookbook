export interface Recipe {
  _id: string;
  image: string;
  meal: string;
  instructions: string;
  rating: number;
  allRatings: number[];
  liked: boolean
}
