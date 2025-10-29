import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "राजगड - Raajgadh Heritage | छत्रपती शिवाजी महाराजांचे स्वराज्याचे हृदय",
  description: "Explore the rich history and heritage of Raajgadh Fort, the capital of Chhatrapati Shivaji Maharaj's Swarajya. An immersive journey through Maharashtra's glorious past.",
  keywords: "Raajgadh, Raigad, Shivaji Maharaj, Maharashtra, Fort, Heritage, History, Maratha Empire, Swarajya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}