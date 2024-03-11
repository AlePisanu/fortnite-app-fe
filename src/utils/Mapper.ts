import { CosmeticsItem, CosmeticsType } from "../api/interfaces/Cosmetics";
import { Cosmetic } from "./interfaces/Cosmetic.interface";

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
  // TODO remove duplicates
  return data.map((i) => ({
    value: i.type.value,
    displayValue: i.type.displayValue,
    backendValue: i.type.backendValue,
  }));
};
