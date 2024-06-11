"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";

export default function MainMenu() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>Some Drawer Content</DrawerContent>
      </Drawer>
    </div>
  ) : (
    <div>Desktop</div>
  );
}
