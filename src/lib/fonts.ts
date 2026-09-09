import { Archivo, DM_Serif_Display, Manrope } from "next/font/google";

export const displayFont = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const serifFont = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});
