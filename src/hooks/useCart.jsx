import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("token");
  const axiosSecure = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    // queryKey: ["carts", user?.email],
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://bistro-boss-server-puce-phi.vercel.app/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
