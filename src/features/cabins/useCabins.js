import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

// extract from cabinTable.jsx as a custom usehook
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}
