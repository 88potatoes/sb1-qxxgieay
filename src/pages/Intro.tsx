import { AudioLines, Bot } from "lucide-react";
import "../styles.css";

export default function Home() {
  return (
    <div className="gradient-background justify-center items-center">
      <div className="max-w-[25rem] flex flex-col gap-2 w-full">
        <div className="w-full px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-50">LUCAS</h1>
          <Bot className="text-gray-50" width={28} height={28}/>
        </div>
        <div className="relative p-2 bg-gray-200 rounded-3xl w-full">
          <input
            type="text"
            className="rounded-3xl p-2 w-full pr-12 bg-inherit"
            placeholder="Learning Under Clinical AI Simulation"
          />
          <AudioLines
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-3xl hover:bg-gray-300 hover:cursor-pointer"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}
