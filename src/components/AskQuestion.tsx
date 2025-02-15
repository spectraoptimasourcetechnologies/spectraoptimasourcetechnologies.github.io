import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface AskForm {
  name: string;
  email: string;
  question: string;
}

interface AskQuestionProps {
  closeDialog?: () => void;
  setIsSuccessMessageOpen: any;
  t: any;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ closeDialog, setIsSuccessMessageOpen, t }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AskForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: AskForm) => {
    setIsLoading(true);

    let askFormData = new FormData();
    askFormData.append(import.meta.env.VITE_FORM_FIELD_NAME, data.name);
    askFormData.append(import.meta.env.VITE_FORM_FIELD_EMAIL, data.email);
    askFormData.append(import.meta.env.VITE_FORM_FIELD_QUESTION, data.question);

    try {
      const res = await fetch(import.meta.env.VITE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: askFormData,
      });
      console.log(res);
      if (res.ok === false) {
        throw console.error("gagal coy");
      }

      reset();
      if (closeDialog) {
        closeDialog();
      }
      setIsSuccessMessageOpen(true);
    } catch (error: any) {
      console.error("Error!", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor='nama'>{t("name")}</Label>
        <Input
          type='text'
          className='text-white'
          placeholder='Jhon Doe'
          {...register("name", {
            required: t("validateName"),
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: t("validateInvalidName"),
            },
          })}
        />
        {errors.name && <p className='text-red-500 text-xs mt-2'>{errors.name.message}</p>}
      </div>
      <div className='mt-4'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          className='text-white'
          placeholder='jhondoe@email.com'
          {...register("email", {
            required: t("validateEmail"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("validateInvalidEmail"),
            },
          })}
        />
        {errors.email && <p className='text-red-500 text-xs mt-2'>{errors.email.message}</p>}
      </div>
      <div className='mt-4'>
        <Label htmlFor='question'>{t("question")}</Label>
        <Textarea placeholder={t("hintQuestion")} className='text-white' {...register("question", { required: t("validateQuestion") })} />
        {errors.question && <p className='text-red-500 text-xs mt-2'>{errors.question.message}</p>}
      </div>
      <div className='flex gap-4 mt-4'>
        <Button className='bg-input px-6 hover:bg-input/80 active:bg-input/60 text-white' type='submit' disabled={isLoading}>
          {isLoading ? (
            <span className='flex items-center'>
              <svg className='animate-spin h-5 w-5 mr-2 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8z'></path>
              </svg>
              {t("loading")}
            </span>
          ) : (
            t("submit")
          )}
        </Button>
        {closeDialog && (
          <Button type='button' onClick={closeDialog} variant={"ghost"} className='text-primary'>
            {t("cancel")}
          </Button>
        )}
      </div>
    </form>
  );
};

export default AskQuestion;
