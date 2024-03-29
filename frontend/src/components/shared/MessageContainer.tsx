import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Chat from "./Chat";



export default function MessageContainer({ user }: { user: { name: string, avatar: string, address: string } }) {


  const [messages, setMessages] = useState([
    {
      message: "Hi",
      mine: true,
    },
    {
      message: "Hello",
      mine: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Prevent sending empty messages

    // Add the new message to the messages state
    setMessages(prevMessages => [...prevMessages, { message: newMessage, mine: true }]);

    // Clear the input field after sending the message
    setNewMessage('');
  };

  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1">
      {
        user && (
          <div
            className="flex p-3 items-center gap-4 border-b border-stone-500/80 ">
            <div className="rounded-full w-10 h-10 overflow-hidden bg-secondary">
              <img src={`https://beige-urban-takin-227.mypinata.cloud/ipfs/${user.avatar}`} alt={user.name} className="w-full h-full" />
            </div>
            <h1>{user.name}</h1>
          </div>
        )
      }

      <div className="flex-1 p-7 w-full h-full flex flex-col gap-4">
        <div className="w-full flex-1 flex flex-col gap-1.5 overflow-y-auto">
          {messages.map((message, index) => (
            <Chat key={index} {...message} avatar={user?.avatar} />
          ))}
        </div>

        <div className="h-12 w-full bg-secondary rounded-full flex items-center px-2">
          <Input
            autoComplete="false"
            className="border-0 h-full py-4 rounded-full"
            placeholder="Send a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button className="text-sm rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-semibold" onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </main>
  );
}
