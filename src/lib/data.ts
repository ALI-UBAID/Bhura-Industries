import ruskTray4PocketImage from "@/images/processed/rusk_tray_4pocket.webp";
import bunTrayImage from "@/images/processed/bun_tray.webp";
import breadMouldImage from "@/images/processed/bread_mould.webp";
import flatBakingTrayImage from "@/images/processed/flat_baking_tray.webp";
import donutTrayImage from "@/images/processed/donut_tray.webp";
import baguetteTrayImage from "@/images/processed/baguette_tray.webp";
import burgerRingImage from "@/images/processed/burger_ring.webp";
import creamRollConesImage from "@/images/processed/cream_roll_cones.webp";
import perforatedTrayImage from "@/images/processed/perforated_tray.webp";
import breadMould400gImage from "@/images/processed/bread_mould_400g.webp";
import rollingBelanImage from "@/images/processed/rolling_belan.webp";
import breadMould4CavityImage from "@/images/processed/bread_mould_4cavity.webp";
import muffinTrayNonstickImage from "@/images/processed/muffin_tray_nonstick.webp";
import donutTrayRawImage from "@/images/processed/donut_tray_raw.webp";
import muffinTrayLargeImage from "@/images/processed/muffin_tray_large.webp";
import breadTinLidImage from "@/images/processed/bread_tin_lid.webp";
import toastMould4SlotImage from "@/images/processed/toast_mould_4slot.webp";

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
    name: "Muffin / Cake Tray (Non-Stick)",
    label: "Premium non-stick finish for bakery-grade muffins",
    image: muffinTrayNonstickImage,
  },
  {
    name: "Muffin / Bun Tray (Large)",
    label: "Multi-cavity large tray for high-volume bun batches",
    image: muffinTrayLargeImage,
  },
  {
    name: "Donut Baking Tray",
    label: "Consistent shape and golden finish every batch",
    image: donutTrayImage,
  },
  {
    name: "Donut / Cookie Tray (Raw Steel)",
    label: "Heavy-duty raw steel for industrial donut production",
    image: donutTrayRawImage,
  },
  {
    name: "Bread Moulds",
    label: "Heavy-duty moulds for structurally sound loaves",
    image: breadMouldImage,
  },
  {
    name: "400gm Bread Moulds",
    label: "Standard 400g capacity for commercial bakeries",
    image: breadMould400gImage,
  },
  {
    name: "Bread Mould (4-Cavity)",
    label: "Four-loaf efficiency for high-volume bread lines",
    image: breadMould4CavityImage,
  },
  {
    name: "Bread Tin with Lid",
    label: "Enclosed tin for square-top sandwich bread",
    image: breadTinLidImage,
  },
  {
    name: "Toast / Baguette Tray",
    label: "Square-corner precision for commercial toast lines",
    image: baguetteTrayImage,
  },
  {
    name: "Toast Mould (4-Slot)",
    label: "Four-slot stainless steel for premium toast production",
    image: toastMould4SlotImage,
  },
  {
    name: "4 Pocket Rusk Moulds",
    label: "Four-cavity efficiency for high-volume rusk production",
    image: ruskTray4PocketImage,
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
    name: "Cream Roll Cones",
    label: "Cone-shaped moulds for crisp cream roll shells",
    image: creamRollConesImage,
  },
  {
    name: "Rolling Belan",
    label: "Stainless-steel rollers for professional dough prep",
    image: rollingBelanImage,
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
