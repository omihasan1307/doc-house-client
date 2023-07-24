import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useListedBook = (date, slot) => {
  const {
    data: booked,
    refetch,
    isLoading: loading,
  } = useQuery({
    queryFn: ["booked"],
    queryKey: async () => {
      const response = await axios.get(
        `https://doc-house-server-omihasan1307.vercel.app/booked?date=${date}&slot=${slot}`
      );
      return response.data;
    },
  });
  return [booked, loading];
};

export default useListedBook;
