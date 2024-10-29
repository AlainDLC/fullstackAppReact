import { useMutation } from "@tanstack/react-query";
import { signup as sigupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: sigupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account"
      );
    },
  });

  return { signup, isLoading };
}
