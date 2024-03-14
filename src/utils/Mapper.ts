import { CosmeticsItem, CosmeticsType } from "../api/interfaces/Cosmetics";
import { NewsData } from "../api/interfaces/News";
import { NewsCategories } from "./Constants";
import { Cosmetic } from "./interfaces/Cosmetic.interface";
import { News } from "./interfaces/News.interface";

export const mapCosmetics = (data: CosmeticsItem[]): Cosmetic[] => {
  return data.map((i) => ({
    id: i.id,
    name: i.name,
    description: i.description,
    type: i.type,
    rarity: i.rarity,
    image: i.images.icon,
    added: i.added,
    introduction: i?.introduction,
  }));
};

export const mapCosmeticsCategories = (
  data: CosmeticsItem[]
): CosmeticsType[] => {
  const mappedData = data.map((i) => ({
    value: i.type.value,
    displayValue: i.type.displayValue,
    backendValue: i.type.backendValue,
  }));
  let uniqueArray = Array.from(
    new Set(mappedData.map((obj) => JSON.stringify(obj)))
  ).map((str) => JSON.parse(str));
  return uniqueArray;
};

export const mapNews = (data: NewsData): News[] => {
  const brArray: News[] = data?.br?.motds
    ? data?.br?.motds?.map((i) => {
        return {
          id: i.id,
          title: i.title,
          tabTitle: i.tabTitle,
          body: i.body,
          image: i.image,
          tileImage: i.tileImage,
          sortingPriority: i.sortingPriority,
          hidden: i.hidden,
          category: NewsCategories.BR.toString(),
          date: i?.date,
        };
      })
    : [];
  const stwArray: News[] = data?.stw?.motds
    ? data?.stw?.motds?.map((i) => {
        return {
          id: i.id,
          title: i.title,
          tabTitle: i.tabTitle,
          body: i.body,
          image: i.image,
          tileImage: i.tileImage,
          sortingPriority: i.sortingPriority,
          hidden: i.hidden,
          category: NewsCategories.STW.toString(),
        };
      })
    : [];
  const creativeArray: News[] = data?.creative?.motds
    ? data?.creative?.motds?.map((i) => {
        return {
          id: i.id,
          title: i.title,
          tabTitle: i.tabTitle,
          body: i.body,
          image: i.image,
          tileImage: i.tileImage,
          sortingPriority: i.sortingPriority,
          hidden: i.hidden,
          category: NewsCategories.CREATIVE.toString(),
        };
      })
    : [];
  return [...brArray, ...stwArray, ...creativeArray];
};

export const GetNewsCategoryName = (val: string): string => {
  return val === NewsCategories.BR.toString()
    ? "NewsCategoryBR"
    : val === NewsCategories.STW.toString()
    ? "NewsCategorySTW"
    : val === NewsCategories.CREATIVE
    ? "NewsCategoryCREATIVE"
    : "NewsCategoryND";
};

export const filterCosmeticsByIds = (cosmetics: Cosmetic[], idsToFilter: string[]): Cosmetic[] => {
  return cosmetics.filter(cosmetic => idsToFilter.includes(cosmetic.id));
};