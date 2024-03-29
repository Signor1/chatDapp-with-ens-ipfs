import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const data = useGetAllUsers();

  return (
    <div className="lg:w-[350px] md:w-[300px] w-[250px] p-6 flex border-r border-stone-100/40 flex-col gap-2">
      <h1>List of Users</h1>
      <div className="flex flex-col gap-1 overflow-y-auto">
        {data.map((user: { name: string, url: string, address: string }, index: number) => (
          <Link to={`/chat/${user.address}`}
            key={index}
            className="flex cursor-pointer p-3 items-center gap-4 bg-stone-900  rounded-lg border border-stone-500/80 hover:border-purple-400/60">
            <div className="rounded-full w-10 h-10 overflow-hidden bg-secondary">
              <img src={`https://beige-urban-takin-227.mypinata.cloud/ipfs/${user.url}`} alt={user.name} className="w-full h-full" />
            </div>
            <h1>{user.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
