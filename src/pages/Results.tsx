import ResultsTopBar from "../components/ResultsTopBar";
import {
  Droplets,
  HeartPulse,
  Baby,
  Activity,
  Brain,
  Scissors,
  Hospital,
  Heart,
  Wind, // for Pulmonology (represents breathing)
  TestTube, // for Endocrinology (medical container)
  Shield, // for Infectious Diseases (immune system)
  Pill,
  Stethoscope,
} from "lucide-react";

const specialties = [
  { name: "Cardiology", icon: <Heart size={24} /> },
  { name: "Neurology", icon: <Brain size={24} /> },
  { name: "Pulmonology", icon: <Wind size={24} /> },
  { name: "Gastroenterology", icon: <Pill size={24} /> },
  { name: "Endocrinology", icon: <TestTube size={24} /> },
  { name: "Infectious Diseases", icon: <Shield size={24} /> },
  { name: "Hematology & Oncology", icon: <Droplets size={24} /> },
  { name: "Renal", icon: <Stethoscope size={24} /> },
  { name: "Hematology", icon: <Droplets size={24} /> },
  { name: "Trauma", icon: <HeartPulse size={24} /> },
  { name: "Obstetrics & Gynecology", icon: <Activity size={24} /> },
  { name: "Pediatrics", icon: <Baby size={24} /> },
  { name: "Rheumatology", icon: <Activity size={24} /> },
  { name: "Psychiatry", icon: <Brain size={24} /> },
  { name: "Surgery", icon: <Scissors size={24} /> },
  { name: "ICU", icon: <Hospital size={24} /> },
];

// export default function Results() {
//   return (
//     <div className="selection-page">
//       <ResultsTopBar />
//       <div className="max-w-4xl mx-auto p-6 space-y-8 flex flex-col justify-center items-center h-[calc(100vh-60px)]">
//         {/* Focus Mode Header */}
//         <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full w-full">
//           <h1 className="text-center text-2xl font-medium">Focus Mode</h1>
//         </button>

//         {/* Specialty Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {specialties.map((specialty, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 hover:cursor-pointer hover:bg-gray-900 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 min-h-24"
//             >
//               {specialty.icon}
//               <span className="text-center">{specialty.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-4 bg-white border-2 border-black rounded-full overflow-hidden">
//           <div className="w-1/4 h-full bg-black"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Results() {
  return (
    <div className="selection-page">
      <ResultsTopBar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 flex flex-col h-[calc(100vh-60px)] justify-center">
        {/* Focus Mode Header */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full w-full">
          <h1 className="text-center text-2xl font-medium">Focus Mode</h1>
        </button>

        {/* Specialty Grid - Modified for horizontal scroll */}
        <div
          className="overflow-x-auto"
        >
          <div
            className="grid grid-rows-2 grid-flow-col gap-4 pb-4"
          >
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:cursor-pointer hover:bg-gray-900 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 min-h-24 w-48"
              >
                {specialty.icon}
                <span className="text-center">{specialty.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
