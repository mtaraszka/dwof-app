import { useQuery } from "react-query";
import { fetchFormulas } from "./requests";

export const useFormulas = () => {
  return useQuery({ queryKey: ['formulas'], queryFn: fetchFormulas })
}
