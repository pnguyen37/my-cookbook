import axios from "axios";
import { Recipe } from "../../interfaces/responses";

export const loadRecipes = async (): Promise<Recipe[]> => {
  return axios
    .get<Recipe[]>("http://localhost:8080/recipes", {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};
