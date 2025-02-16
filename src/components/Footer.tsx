import { useState } from "react";

import AskQuestion from "./AskQuestion";
import SuccessMessage from "./SuccessMessage";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

import sosLogo from "@/assets/logo-sos-1.png";
import dialogIcon from "@/assets/icons/ask mob.png";

import contact from "@/constant/constact";
import { useTranslations } from "@/i18n/utils";

interface FooterProps {
  lang: any;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);

  const t = useTranslations(lang);

  return (
    <div className='bg-[#0C1921] text-white md:px-4 md:py-24 py-12 w-full shadow-md'>
      <div className='container mx-auto grid md:grid-cols-3 grid-cols-2 gap-4'>
        <img src={sosLogo.src} alt='Logo SOS' className='md:w-5/6 w-full max-md:max-w-36' />
        <div className='flex flex-col gap-4 items-start sm:items-end md:items-start'>
          <Button
            variant={"ghost"}
            size={"sm"}
            className='p-0 text-sm md:hidden hover:bg-transparent hover:opacity-80 hover:text-white'
            onClick={() => setIsDialogOpen(true)}
          >
            <p>{t("questionTitle")}</p>
            <img src={dialogIcon.src} alt='Open Dialog' className='' />
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className='py-10 max-w-xs' withClose={false}>
              <DialogTitle className='hidden'></DialogTitle>
              <DialogDescription className='hidden'></DialogDescription>
              <p className='md:text-3xl text-3xl mb-6 text-center'>{t("questionTitle")}</p>
              <AskQuestion closeDialog={() => setIsDialogOpen(false)} setIsSuccessMessageOpen={setIsSuccessMessageOpen} t={t} />
            </DialogContent>
          </Dialog>
          <p className='md:text-3xl text-sm' id='contactus'>
            {t("contactUs")}
          </p>
          <div className='flex gap-1 md:gap-4'>
            {contact.map((media, index) => (
              <a href={media.link} target='_blank' key={index}>
                <Button variant={"ghost"} className='hover:bg-white/10 p-1 h-fit'>
                  <img src={media.iconUrl.src} alt={media.name} className='w-4 md:w-full' />
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div className='max-md:col-span-3 max-md:hidden'>
          <p className='md:text-3xl text-lg mb-6'>{t("questionTitle")}</p>
          <AskQuestion setIsSuccessMessageOpen={setIsSuccessMessageOpen} t={t} />
        </div>
      </div>
      <SuccessMessage
        isSuccessMessageOpen={isSuccessMessageOpen}
        setIsSuccessMessageOpen={setIsSuccessMessageOpen}
        message={t("successMessage")}
      />
    </div>
  );
};

export default Footer;
