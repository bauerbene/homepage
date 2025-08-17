import { Stack } from "@mui/material";
import { useGetCategories } from "./use-get-categories";
import { CategoryCard } from "./CategoryCard";

type CategoriesProps = {
  readonly addSelectedCategory: (name: string) => void;
  readonly removeSelectedCategory: (name: string) => void;
  readonly selectedCategoryNames: string[];
};

export const Categories = (props: CategoriesProps) => {
  const categories = useGetCategories();
  return (
    <Stack sx={{ overflow: "scroll", height: "100%", p: 2 }} spacing={2}>
      {categories.map((c, index) => (
        <CategoryCard
          key={index}
          categoryName={c.categoryName}
          setActiveState={(activeState) => {
            if (activeState) {
              props.addSelectedCategory(c.categoryName);
            } else {
              props.removeSelectedCategory(c.categoryName);
            }
          }}
          isActive={
            props.selectedCategoryNames.find((x) => x === c.categoryName) !==
            undefined
          }
        />
      ))}
    </Stack>
  );
};
