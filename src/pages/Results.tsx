import ResultsTopBar from "../components/ResultsTopBar";
import {
  Droplets,
  HeartPulse,
  Baby,
  Activity,
  Brain,
  Scissors,
  Hospital,
} from "lucide-react";

const specialties = [
  { name: "Hematology", icon: <Droplets size={24} /> },
  { name: "Trauma", icon: <HeartPulse size={24} /> },
  { name: "Obstetrics & Gynecology", icon: <Activity size={24} /> },
  { name: "Pediatrics", icon: <Baby size={24} /> },
  { name: "Rheumatology", icon: <Activity size={24} /> },
  { name: "Psychiatry", icon: <Brain size={24} /> },
  { name: "Surgery", icon: <Scissors size={24} /> },
  { name: "ICU", icon: <Hospital size={24} /> },
];

export default function Results() {
  return (
    <div className="selection-page">
      <ResultsTopBar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 flex flex-col justify-center items-center h-[calc(100vh-60px)]">
        {/* Focus Mode Header */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full w-full">
          <h1 className="text-center text-2xl font-medium">Focus Mode</h1>
        </button>

        {/* Specialty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:cursor-pointer hover:bg-gray-900 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 min-h-24"
            >
              {specialty.icon}
              <span className="text-center">{specialty.name}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-white border-2 border-black rounded-full overflow-hidden">
          <div className="w-1/4 h-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}
