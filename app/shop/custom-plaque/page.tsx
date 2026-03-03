import type { Metadata } from "next";
import CustomPlaqueClient from "./CustomPlaqueClient";

export const metadata: Metadata = {
  title: "Custom State Plaques — Handcrafted Wood Cutouts | rackline.ai",
  description:
    "Mount your euro or shoulder mount on a handcrafted state-shaped wooden plaque. Cut from 12\"×16\" pine boards with American flag finish. Free shipping.",
};

export default function CustomPlaquePage() {
  return <CustomPlaqueClient />;
}
