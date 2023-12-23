import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useReview = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: review = [] } = useQuery({
    queryKey: ["review", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/review?email=${user.email}`);
      return res.data;
    },
  });
  return [review];
};

export default useReview;
