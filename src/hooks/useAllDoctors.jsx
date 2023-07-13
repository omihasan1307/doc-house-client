import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllDoctors = () => {
  const { user, loading } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allDoctors"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/doctorList?uid=${user?.uid}`,
        {
          headers: {
            authorization: localStorage.getItem("access-token"),
          },
        }
      );
      return response.data;
    },
  });
  console.log(data);
  return [data, refetch, isLoading];
};

export default useAllDoctors;
