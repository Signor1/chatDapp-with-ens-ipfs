import Footer from "@/components/shared/Footer"
import MessageContainer from "@/components/shared/MessageContainer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"



const Chat = () => {
    const { isConnected } = useWeb3ModalAccount();

    return (
        <div className="w-full h-full overflow-y-auto bg-stone-950 mx-auto rounded-md flex flex-col">
            <Navbar />
            {
                isConnected && (
                    <div className="w-full h-full max-w-[1440px] overflow-y-auto bg-stone-950 mx-auto rounded-md flex">
                        <Sidebar />
                        <MessageContainer />
                    </div>
                )
            }
            {
                !isConnected && (
                    <div className="w-full h-full max-w-[1440px] flex flex-col justify-center items-center overflow-y-auto bg-stone-950 mx-auto rounded-md ">
                        <h1 className="text-stone-100 text-4xl">Please connect your wallet</h1>
                    </div>
                )
            }

            <Footer />
        </div>
    )
}

export default Chat