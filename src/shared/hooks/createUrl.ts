import { useMutation } from "@tanstack/vue-query";
import { queryClient } from "../plugins/vue-query";

export function useCreateUrl() {
  return useMutation({
    mutationKey: ["createUrl"],
    mutationFn: (url: string) =>
      fetch(`https://url-shortener.emgushovs.ru/api/url/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      }),
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["urlList"] }),
  });
}
