import { useQuery } from "@tanstack/vue-query";

export function useGetAllUrl() {
  return useQuery({
    queryKey: ["urlList"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4200/api/url");
      return res.json();
    },
  });
}
