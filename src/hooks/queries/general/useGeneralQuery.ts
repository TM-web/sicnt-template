import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGeneralQuery = <Data = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions = {}
) =>
  useQuery({
    queryKey: [url, params],
    queryFn: () =>
      axios
        .get<Data>(url, { params })
        .then((response: AxiosResponse) => response.data),
    ...options,
  });

export default useGeneralQuery;
