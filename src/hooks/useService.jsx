import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useService = () => {
  const { data: service, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axios.get(
        `https://doc-house-server-omihasan1307.vercel.app/services`
      );
      return response.data;
    },
  });
  return [service, refetch];
};

export default useService;
