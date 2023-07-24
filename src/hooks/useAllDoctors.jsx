import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecuire from "./useAxiosSecuire";

const useAllDoctors = () => {
  const [instance] = useAxiosSecuire();
  const { user, loading } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allDoctors"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/doctorList?uid=${user?.uid}`);
      return response.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useAllDoctors;
