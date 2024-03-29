import Footer from "@/components/shared/Footer"
import Form from "@/components/shared/Form"
import Navbar from "@/components/shared/Navbar"
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const { isConnected } = useWeb3ModalAccount();
    const navigate = useNavigate();

    const change = useCallback(() => {
        if (!isConnected) {

            navigate("/");
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);
    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <Navbar />
            <Form />
            <Footer />
        </div>
    )
}

export default Signup