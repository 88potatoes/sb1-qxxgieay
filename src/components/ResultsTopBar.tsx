import { Bell, Settings } from "lucide-react";

const SelectionTopBar = () => {
  return (
    <div className="w-full selection-top-bar shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold lucas-logo">
              <a href="/" className="bg-transparent px-0">
                LUCAS
              </a>
              {/* LUCAS */}
            </h1>
            <span className="text-lg font-medium text-white">RESULTS</span>
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
              <span className="text-sm font-medium text-white">
                Dr. Roberts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionTopBar;
