import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user.email}`);
      return res.data;
    },
  });
  return [payment];
};

export default usePayment;
