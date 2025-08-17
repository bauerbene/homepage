import { useMemo } from "react";
import data from "../../../assets/words.json";

type TCategories = {
  categoryName: string;
  words: string[];
}[];

export const useGetCategories = () => {
  return useMemo(() => {
    const test = Object.entries(data).map(([key, values]) => ({
      categoryName: key,
      words: values,
    })) as TCategories;
    return test;
  }, []);
};
