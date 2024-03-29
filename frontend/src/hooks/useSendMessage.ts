/* eslint-disable @typescript-eslint/no-explicit-any */
import { getChatContract } from "@/constants/contract";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/util";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "react-toastify";

const useSendMessage = (msg: string, to: string) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId))
      return toast.error("Wrong network !", {
        position: "top-right",
      });

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getChatContract(signer);

    try {
      const transaction = await contract.sendMessage(msg, to);

      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Message Sent!", {
          position: "top-right",
        });
      }

      toast.error("Message not sent!", {
        position: "top-right",
      });
    } catch (error: any) {
      // console.error("error: ", error);
      toast.error(`${error.message.slice(0, 20)}...`, {
        position: "top-right",
      });
    }
  }, [chainId, walletProvider, msg, to]);
};

export default useSendMessage;
