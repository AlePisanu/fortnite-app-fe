import { CosmeticsIntroduction, CosmeticsRarity, CosmeticsType } from "../../api/interfaces/Cosmetics";

export interface Cosmetic {
    id: string;
    name: string;
    description: string;
    type: CosmeticsType;
    rarity: CosmeticsRarity;
    image: string;
    added: string;
    introduction?: CosmeticsIntroduction;
}