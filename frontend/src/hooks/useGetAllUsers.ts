import { useEffect, useState } from "react";
import { getProposalsContract } from "@/constants/contract";
import { readOnlyProvider } from "@/constants/provider";

export const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const contract = getProposalsContract(readOnlyProvider);

    contract
      .getAllUsers()
      .then((res) => {
        const converted = res.map((item: [string, string]) => ({
          name: item[0],
          url: item[1] || "",
        }));

        setAllUsers(converted);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return allUsers;
};
