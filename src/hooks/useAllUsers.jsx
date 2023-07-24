import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecuire from "./useAxiosSecuire";

const useAllUsers = () => {
  const [instance] = useAxiosSecuire();
  const { user, loading } = useContext(AuthContext);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await instance.get(`/users?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [data, refetch, isLoading];
};

export default useAllUsers;
