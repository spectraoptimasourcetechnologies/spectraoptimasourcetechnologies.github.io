import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

interface SuccessMessageProps {
  isSuccessMessageOpen: boolean;
  setIsSuccessMessageOpen: any;
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ isSuccessMessageOpen, setIsSuccessMessageOpen, message }) => {
  return (
    <Dialog open={isSuccessMessageOpen} onOpenChange={setIsSuccessMessageOpen}>
      <DialogContent className='sm:max-w-[425px] bg-input' withClose={true}>
        <DialogTitle className='hidden'></DialogTitle>
        <DialogDescription className='hidden'></DialogDescription>
        <p className='text-center p-12 text-white'>{message}</p>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessMessage;
