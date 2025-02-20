import { Bell, Settings } from "lucide-react";

export default function Bar() {
  return (
    <div className="w-full top-bar shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold lucas-log">
              {/* <a href="/">LUCAS</a> */}
              LUCAS
            </h1>
            {/* <div className="flex items-center gap-2 search-input px-3 py-1 rounded-lg">
              <Search className="w-4 h-4 icon" />
              <input
                type="text"
                placeholder="Search patients..."
                className="bg-transparent outline-none text-sm w-48 search-input"
              />
            </div> */}
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 icon hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 icon hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">DR</span>
              </div>
              <span className="text-sm font-medium text">Dr. Roberts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
