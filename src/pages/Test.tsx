import TopBar from "@/components/TopBar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ActivityIcon, User } from "lucide-react";

const physicalExamActions = [
  "Capillary Blood Glucose (BGL)",
  "Arterial Blood Gas (ABG)",
  "Venous Blood Gas (VBG)",
  "Urinalysis (Dipstick)",
  "Ketones (/Urine)",
  "Pregnancy Test (Urine hCG)",
  "ECG (12-Lead)",
  "Peak Expiratory Flow Rate (PEFR) - Asthma Assessment",
  "Spirometry (Basic Lung Function)",
  "Orthostatic Blood Pressure (Postural Drop Test)",
  "Bladder Scan (Urinary Retention Assessment)",
  "Capillary Refill Time",
  "Skin Turgor Assessment (Dehydration Check)",
  "Bedside Coagulation Test (INR/Clotting Time)",
  "Nasal/Throat Swab (POCT for Infection - Strep, Flu, COVID, RSV)",
  "Cuff Leak Test (Pre-Extubation Readiness)",
  "Ankle-Brachial Index (ABI) - Peripheral Artery Disease",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <TopBar />

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
              <div>
                <p className="text-lg font-semibold">Orders</p>
              </div>

              {/* Meds */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                    Meds
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">Meds</DialogTitle>
                    <DialogDescription>Medication</DialogDescription>
                  </DialogHeader>
                  Some content
                </DialogContent>
              </Dialog>
              {/* IV */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                  IV
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">IV</DialogTitle>
                    <DialogDescription>Medication</DialogDescription>
                  </DialogHeader>
                  Some content
                </DialogContent>
              </Dialog>

              {/* MET */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                  MET
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">MET</DialogTitle>
                    <DialogDescription>Medication</DialogDescription>
                  </DialogHeader>
                  Some content
                </DialogContent>
              </Dialog>

              {/* O₂ */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
                  O₂
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">O₂</DialogTitle>
                    <DialogDescription>Medication</DialogDescription>
                  </DialogHeader>
                  Some content
                </DialogContent>
              </Dialog>

              {/* <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
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
              </button> */}
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
                className="w-full h-full rounded-md object-contain"
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
              {/* Physical Exam */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                    Physical Exam
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">Physical Exam</DialogTitle>
                    <DialogDescription>
                      Find the action you would like to take
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                    {physicalExamActions.map((action_string, index) => {
                      return (
                        <button
                          key={index}
                          className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 text-start"
                        >
                          {action_string}
                        </button>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Imagery */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                    Imagery
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">Imagery</DialogTitle>
                    <DialogDescription>
                      Find the action you would like to take
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                    {physicalExamActions.map((action_string, index) => {
                      return (
                        <button
                          key={index}
                          className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 text-start"
                        >
                          {action_string}
                        </button>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Bedside */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                    Bedside
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">Bedside</DialogTitle>
                    <DialogDescription>
                      Find the action you would like to take
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                    {physicalExamActions.map((action_string, index) => {
                      return (
                        <button
                          key={index}
                          className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 text-start"
                        >
                          {action_string}
                        </button>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Labs */}
              <Dialog>
                <DialogTrigger>
                  <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
                    Labs
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-">Labs</DialogTitle>
                    <DialogDescription>
                      Find the action you would like to take
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                    {physicalExamActions.map((action_string, index) => {
                      return (
                        <button
                          key={index}
                          className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 text-start"
                        >
                          {action_string}
                        </button>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
