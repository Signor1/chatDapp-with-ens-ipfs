import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header className="w-full flex justify-between items-center py-6 border-b border-stone-100/30 px-4">
            <Link to="/" className="font-light text-xl text-stone-100">
                Chat<span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zone</span>
            </Link>
            <w3m-button />
        </header>
    )
}

export default Navbar