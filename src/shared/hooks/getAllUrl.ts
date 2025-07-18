import { useQuery } from "@tanstack/vue-query";

export function useGetAllUrl() {
  return useQuery({
    queryKey: ["urlList"],
    queryFn: async () => {
      const res = await fetch(`https://url-shortener.emgushovs.ru/api/url`);
      return res.json();
    },
  });
}
