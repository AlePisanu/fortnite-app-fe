export interface CosmeticsData {
  build: string;
  previousBuild: string;
  hash: string;
  date: string;
  lastAddition: string;
  items: CosmeticsItem[];
}

export interface CosmeticsItem {
  id: string;
  name: string;
  description: string;
  type: CosmeticsType;
  rarity: CosmeticsRarity;
  series?: CosmeticsSeries;
  set?: CosmeticsSet;
  introduction?: CosmeticsIntroduction | undefined;
  images: CosmeticsImages;
  variants?: CosmeticsVariant[];
  searchTags: any;
  gameplayTags?: string[];
  metaTags?: string[];
  showcaseVideo?: string;
  dynamicPakId?: string;
  displayAssetPath: any;
  definitionPath?: string;
  path: string;
  added: string;
  shopHistory?: string[];
}

export interface CosmeticsType {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface CosmeticsRarity {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface CosmeticsSeries {
  value: string;
  image: string;
  colors: string[];
  backendValue: string;
}

export interface CosmeticsSet {
  value: string;
  text: string;
  backendValue: string;
}

export interface CosmeticsIntroduction {
  chapter: string;
  season: string;
  text: string;
  backendValue: number;
}

export interface CosmeticsImages {
  smallIcon: string;
  icon: string;
  featured?: string;
  lego?: CosmeticsLego;
  other?: CosmeticsOther;
}

export interface CosmeticsLego {
  small?: string;
  large?: string;
  wide: any;
}

export interface CosmeticsOther {
  decal?: string;
  background?: string;
}

export interface CosmeticsVariant {
  channel: string;
  type: string;
  options: CosmeticsOption[];
}

export interface CosmeticsOption {
  tag: string;
  name: string;
  unlockRequirements?: string;
  image: string;
}
