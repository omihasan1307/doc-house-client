import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecuire from "./useAxiosSecuire";

const useBookingList = () => {
  const [instance] = useAxiosSecuire();
  const { user, loading } = useContext(AuthContext);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["bookingList"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/bookingList?email=${user?.email}`);
      return response.data;
    },
  });
  return [data, refetch, isLoading];
};

export default useBookingList;
