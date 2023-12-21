import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: booking = [] } = useQuery({
    queryKey: ["booking", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?email=${user.email}`);
      return res.data;
    },
  });
  return [booking];
};

export default useBooking;
