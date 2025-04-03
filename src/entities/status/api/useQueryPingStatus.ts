import {useQuery} from "@tanstack/vue-query";

import {Status} from "@shared/api/Status.ts";

const statusApi = new Status();

export const useQueryPingStatus = () => useQuery({
    queryKey: ["ping"], // Уникальный ключ запроса
    queryFn: async () => statusApi.getVersionStatus(),
    retry: 2,
    select: res => res.data,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    staleTime: 60 * 1000,
});
