import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecuire from "./useAxiosSecuire";

const useAllPayments = () => {
  const [instance] = useAxiosSecuire();
  const { loading } = useContext(AuthContext);

  const { data: allpayment, isLoading } = useQuery({
    queryKey: ["payment"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/allPayments`);
      return response.data;
    },
  });

  return [allpayment, isLoading];
};

export default useAllPayments;
