import { 
    Poppins as GooglePoppins,
    DM_Sans as GoogleDM_Sans,
  } from "next/font/google";
  import localFont from "next/font/local";
  
  
  
  export const Poppins = GooglePoppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins"
  });
  
  export const DM_Sans = GoogleDM_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans"
  });
  
  export const Briquete = localFont({
    src: "../../public/fonts/briquete/Briquete.otf",
    display: "swap",
    variable: "--font-briquete",
  });