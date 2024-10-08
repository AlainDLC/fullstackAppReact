import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export const useBookings = function () {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return {
    isLoading,
    bookings,
    error,
  };
};
