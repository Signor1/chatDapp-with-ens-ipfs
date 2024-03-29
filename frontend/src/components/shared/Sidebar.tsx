import { useGetAllUsers } from "@/hooks/useGetAllUsers";

export default function Sidebar() {
  const data = useGetAllUsers();

  return (
    <div className="w-full max-w-[350px] flex-1 p-6 flex border-r border-stone-100/40 flex-col gap-2">
      <h1>Users</h1>
      <div className="flex flex-col gap-1 overflow-y-auto">
        {data.map((user: { name: string, url: string }, index: number) => (
          <div
            key={index}
            className="flex cursor-pointer p-3 items-center gap-4 bg-secondary/20 hover:bg-secondary/50 rounded-lg">
            <div className="rounded-full w-10 h-10 bg-secondary">
              <img src={`https://gateway.pinata.cloud/ipfs/${user.url}`} alt={user.name} />
            </div>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
