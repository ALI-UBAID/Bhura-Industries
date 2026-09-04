import breadMould400gImage from "@/images/400 gm breads pocket.jpg.jpeg";
import baguetteTrayImage from "@/images/BTY544.png";
import burgerRingImage from "@/images/burgerring.jpeg";
import creamRollConesImage from "@/images/cream roll cones.JPG.jpeg";
import rollingBelanImage from "@/images/DSC_6699 copy.jpg.jpeg";
import perforatedTrayImage from "@/images/perforated tary.JPG.jpeg";
import fourPocketRuskMouldImage from "@/images/product_image_1.png";
import bunTrayImage from "@/images/product_image_2.png";
import hotDogTrayImage from "@/images/product_image_3.png";
import breadMouldImage from "@/images/product_image_4.jpeg";
import flatBakingTrayImage from "@/images/product_image_5.jpeg";
import donutTrayImage from "@/images/product_image_6.jpeg";

export interface Product {
  name: string;
  label: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "Burger Ring",
    label: "Uniform browning for perfect burger buns",
    image: burgerRingImage,
  },
  {
    name: "Muffin Cake Tray",
    label: "Precision-formed cups for bakery-grade muffins",
    image: bunTrayImage,
  },
  {
    name: "Non-Stick Hot Dog Tray",
    label: "Effortless release with premium non-stick coating",
    image: hotDogTrayImage,
  },
  {
    name: "Donut Baking Tray",
    label: "Consistent shape and golden finish every batch",
    image: donutTrayImage,
  },
  {
    name: "Bread Moulds",
    label: "Heavy-duty moulds for structurally sound loaves",
    image: breadMouldImage,
  },
  {
    name: "Toast Moulds",
    label: "Square-corner precision for commercial toast lines",
    image: baguetteTrayImage,
  },
  {
    name: "4 Pocket Rusk Moulds",
    label: "Four-cavity efficiency for high-volume rusk production",
    image: fourPocketRuskMouldImage,
  },
  {
    name: "Perforated Tray",
    label: "Optimal airflow for even heat distribution",
    image: perforatedTrayImage,
  },
  {
    name: "Bun Baking Tray",
    label: "Multi-cavity design for sesame and poppy seed buns",
    image: bunTrayImage,
  },
  {
    name: "Puff & Khari Tray",
    label: "Flaky-layer perfection for Indian puff pastries",
    image: flatBakingTrayImage,
  },
  {
    name: "Cookies Drop Tray",
    label: "Uniform spacing for consistent cookie drops",
    image: donutTrayImage,
  },
  {
    name: "400gm Bread Moulds",
    label: "Standard 400g capacity for commercial bakeries",
    image: breadMould400gImage,
  },
  {
    name: "Cream Roll Cones",
    label: "Cone-shaped moulds for crisp cream roll shells",
    image: creamRollConesImage,
  },
  {
    name: "Rolling Belan",
    label: "Stainless-steel rollers for professional dough prep",
    image: rollingBelanImage,
  },
  {
    name: "Burger Ring",
    label: "Ring moulds for perfectly round burger patties",
    image: burgerRingImage,
  },
];

export const companyInfo = {
  name: "Bhura Industries",
  tagline: "Premium Baking Trays & Moulds",
  since: "1966",
  experience: "52+",
  address: "Plot No. 61, 63, Gurudev Nagar, Ambala Road, Saharanpur",
  phone: "+91 93586 97206, +91 88659 87972",
  email: "info@bhuraindustries.com",
  whatsapp: "919358697206",
};
