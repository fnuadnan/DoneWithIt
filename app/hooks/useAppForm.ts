import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useStore from "../store";
import { useState } from "react";

const useAppForm = <T extends {}>( schema: any ) => {
  const [isSubmitting, setSubmitting] = useState(false); // Local isSubmitting state
  const { control, handleSubmit, reset, formState: { errors }, watch } = useForm<T>({ resolver: zodResolver(schema)});


  return { control, handleSubmit, errors, isSubmitting, reset, setSubmitting, watch };
};

export default useAppForm;
