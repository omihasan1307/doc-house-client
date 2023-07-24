import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllDoctors = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: async () => {
      const response = await axios.get(
        "https://doc-house-server-omihasan1307.vercel.app/doctorList"
      );
      return response.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useAllDoctors;
