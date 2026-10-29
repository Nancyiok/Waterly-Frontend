import sipImage from "@/assets/images/cups/sip.jpg";
import smallGlassImage from "@/assets/images/cups/small-glass.jpg";
import standardGlassImage from "@/assets/images/cups/standard-glass.jpg";
import tallGlassImage from "@/assets/images/cups/tall-glass.jpg";
import mugImage from "@/assets/images/cups/mug.jpg";
import sportBottleImage from "@/assets/images/cups/sport-bottle.jpg";
import largeBottleImage from "@/assets/images/cups/large-bottle.jpg";
import literBottleImage from "@/assets/images/cups/liter-bottle.jpg";

export interface CupSize {
  id: string;
  label: string;
  amount: number;
  image: string;
}

export interface WaterLogItem {
  id: number;
  ml: number;
  date: string;
}

export const DAILY_GOAL = 2000;

export const INITIAL_CUP_SIZES: CupSize[] = [
  { id: "cup-1", label: "Sip", amount: 100, image: sipImage },
  { id: "cup-2", label: "Small glass", amount: 150, image: smallGlassImage },
  { id: "cup-3", label: "Standard glass", amount: 250, image: standardGlassImage },
  { id: "cup-4", label: "Tall glass", amount: 300, image: tallGlassImage },
  { id: "cup-5", label: "Favorite mug", amount: 350, image: mugImage },
  { id: "cup-6", label: "Sport bottle", amount: 500, image: sportBottleImage },
  { id: "cup-7", label: "Large bottle", amount: 750, image: largeBottleImage },
  { id: "cup-8", label: "Liter bottle", amount: 1000, image: literBottleImage },
];
