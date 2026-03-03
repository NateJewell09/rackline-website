import type { Metadata } from "next";
import MiniMountClient from "./MiniMountClient";

export const metadata: Metadata = {
  title: "Mini Mount Replica — 3D-Printed Trophy Keepsake | rackline.ai",
  description:
    "Turn your trophy into a stunning 3D-printed miniature replica. Hand-painted by skilled artists for lifelike detail. The ultimate keepsake for your desk, shelf, or trophy room.",
};

export default function MiniMountPage() {
  return <MiniMountClient />;
}
