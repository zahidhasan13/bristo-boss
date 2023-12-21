import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("token");
  const axiosSecure = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    // queryKey: ["carts", user?.email],
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
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
