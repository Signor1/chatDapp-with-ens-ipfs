import { ethers } from "ethers";
import ensABI from "./ensAbi.json";

export const getProposalsContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
    ensABI,
    providerOrSigner
  );
};
