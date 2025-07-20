import { useMutation, useQuery } from "@tanstack/vue-query";
import { queryClient } from "../plugins/vue-query";

export function useGetAllUrl() {
  const url_prod = useRuntimeConfig().public.PROD_URL;
  return useQuery({
    queryKey: ["urlList"],
    queryFn: async () => {
      const res = await fetch(`${url_prod}/url`);
      return res.json();
    },
  });
}

export const useDeleteUrl = (id: string) => {
  const url_prod = useRuntimeConfig().public.PROD_URL;
  return useMutation({
    mutationKey: ["delete", { id }],
    mutationFn: async () => {
      const res = await fetch(`${url_prod}/url/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["urlList"] }),
  });
};
