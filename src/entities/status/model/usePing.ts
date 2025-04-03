import {useQueryPingStatus} from "../api/useQueryPingStatus.ts";

export const usePing = () => {
    const { data } = useQueryPingStatus();
    const checkPingStatus = () => data;
    return {checkPingStatus};
};