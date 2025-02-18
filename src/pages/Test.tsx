import { Search, Bell, Settings, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-blue-600">MedDash</h1>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="bg-transparent outline-none text-sm w-48"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">DR</span>
                </div>
                <span className="text-sm font-medium">Dr. Roberts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 h-[calc(100vh-52px)]">
        {/* Three Column Layout */}
        <div className="flex gap-6 h-full">
          {/* Left Column - 1/4 width */}
          <div className="w-1/4 space-y-4 flex flex-col">
            <div className="w-full">
              {/* Vitals Monitor */}
              <div className="w-full bg-black text-green-400 p-3 rounded-lg">
                <div className="border-b border-green-400 pb-2 mb-2">
                  <div className="h-8 bg-green-400/20 rounded mb-1"></div>
                </div>
                <div className="border-b border-green-400 pb-2 mb-2">
                  <div className="h-8 bg-green-400/20 rounded mb-1"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">60</div>{" "}
                  <div className="text-2xl font-bold">30</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full flex-1 gap-4 justify-end">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                Meds
              </button>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                IV
              </button>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                O₂
              </button>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                MET
              </button>
              <div className="flex gap-2">
                <button className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg">
                  Disc
                </button>
                <button className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg">
                  Refer
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column - 1/2 width */}
          <div className="w-1/2 flex flex-col">
            <div className="w-full flex-1">
              <img
                src="https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644147.jpg"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="h-1/2 flex flex-col w-full">
              <div className="py-4">
                <input
                  type="text"
                  className="bg-gray-200 rounded-3xl p-4 w-full"
                  placeholder="Talk to patient"
                />
              </div>
              <div className="bg-gray-200 rounded-3xl p-4 flex-1">
                <p>"I feel the pain in my chest and"</p>
              </div>
            </div>
          </div>

          {/* Right Column - 1/4 width */}
          <div className="w-1/4 space-y-4 flex flex-col gap-6">
            <div>
              {/* Patient Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    56-year-old male, clutching chest, diaphoretic.
                  </h2>
                  <ul className="space-y-1 text-sm">
                    <li>• Pale, sweaty, visibly distressed.</li>
                    <li>• Rapid, shallow breathing (RR 24).</li>
                    <li>• Grimacing, holding left arm occasionally.</li>
                    <li>• Restless, shifting uncomfortably.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-end flex-1">
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                Physical Exam
              </button>
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                Bedside
              </button>
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                Labs
              </button>
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                Imagery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
