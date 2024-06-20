"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Navbar from "./Navbar";

export default function MainMenu() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? (
    <div className="mr-0 flex justify-between">
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon className="text-muRed" />
        </DrawerTrigger>
        <DrawerContent>Some Drawer Content</DrawerContent>
      </Drawer>
    </div>
  ) : (
    <Navbar />
  );
}
