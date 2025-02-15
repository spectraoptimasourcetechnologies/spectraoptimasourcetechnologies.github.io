import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import burger from "@/assets/icons/burger.png";
import { useTranslatedPath, useTranslations } from "@/i18n/utils";

interface MenuMobProps {
  lang: any;
}

const MenuMob: React.FC<MenuMobProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='p-2 md:hidden'>
        <img src={burger.src} alt='burger' className='h-4/5' />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='flex flex-col items-end mt-4'>
          <a href={translatePath("/")} className={" py-2"} onClick={() => setOpen(false)}>
            {t("nav.home")}
          </a>
          <a href={translatePath("/about")} className={" py-2"} onClick={() => setOpen(false)}>
            {t("nav.about")}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMob;
