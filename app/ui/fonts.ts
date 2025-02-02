import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: "700" });
export const clash = localFont({ src: "./fonts/ClashDisplay_Semibold.otf" });
