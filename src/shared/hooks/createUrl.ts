import { useMutation } from "@tanstack/vue-query";
import { queryClient } from "../plugins/vue-query";

export function useCreateUrl() {
  const url_prod = useRuntimeConfig().public.PROD_URL;
  return useMutation({
    mutationKey: ["createUrl"],
    mutationFn: (url: string) =>
      $fetch(`${url_prod}/url/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      }),
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["urlList"] }),
  });
}
