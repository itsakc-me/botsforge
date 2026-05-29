import localFont from "next/font/local";

const Borel = localFont({
  src: "Borel.ttf",
  variable: "--font-borel"
});

const LeagueSpartan = localFont({
  src: "LeagueSpartan.ttf",
  variable: "--font-spartan"
});

const Poppins = localFont({
  src: "Poppins.ttf",
  variable: "--font-poppins"
});

const Quicksand = localFont({
  src: "Quicksand.ttf",
  variable: "--font-quicksand"
});

export { Borel, LeagueSpartan, Poppins, Quicksand };