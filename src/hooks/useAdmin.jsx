import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecuire from "./useAxiosSecuire";

const useAdmin = () => {
  const [instance] = useAxiosSecuire();
  const { user, loading } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["admin"],
    enabled: !loading,
    queryFn: async () => {
      const response = await instance.get(`/admin?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [data, isLoading];
};

export default useAdmin;
