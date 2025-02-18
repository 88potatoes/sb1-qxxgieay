import TestTopBar from "@/components/TestTopBar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import { useRef, useState } from "react";

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
] as const;

type physicalExamActionsType = (typeof physicalExamActions)[number];

const referralLocations = [
  "General Medicine",
  "Infectious Diseases",
  "Endocrinology",
  "Nephrology",
  "Rheumatology",
  "Hematology",
  "Oncology",
  "Geriatrics",
  "Immunology & Allergy",
  "Palliative Care",
  "Cardiology",
  "Cardiothoracic Surgery",
  "Respiratory Medicine",
  "Sleep Medicine",
] as const;

type referralLocationsType = (typeof referralLocations)[number];

const patientReponses = [
  "The pain started about an hour ago, it's like a squeezing in my chest.",
  "I feel dizzy whenever I stand up, especially in the morning.",
  "My throat's been really sore for the past few days and I've had chills.",
  "I've been having trouble catching my breath, especially when I lay down.",
  "The headache won't go away, and bright lights make it worse.",
  "My stomach has been hurting and I've thrown up twice today.",
  "I noticed my ankles are really swollen, more on the right side.",
  "The cough keeps me up at night, and sometimes I cough up yellow mucus.",
  "My left arm feels numb and tingly, especially in my fingers.",
  "I've been feeling really tired lately, more than usual, and my heart races sometimes.",
];

type RequestedResource = {
  resource_name: string;
  resource_image: string;
};

const randomImageLinks = [
  "https://www.researchgate.net/publication/306226599/figure/fig3/AS:395911227297794@1471404000825/Random-sample-of-medical-images-from-datasets-MMM-and-DX-rows-1-and-2-show-X-ray-images.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhR_jFy4aEMXr6oYivkLZCUr0USdBCeLT0uQ&s",
  "https://ars.els-cdn.com/content/image/1-s2.0-S1361841515000912-fx1.jpg",
  "https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/f127e67ec7334d19ec56478c99d2bb3d182ab286/11-Figure5-1.png",
  "https://www.statcan.gc.ca/sites/default/files/images/data-science-image-segmentation-figure-1-english.png",
];

export default function Home() {
  const [selectedReferralLocation, setSelectedReferralLocation] =
    useState<null | referralLocationsType>(null);
  const [selectedResource, setSelectedResource] =
    useState<null | physicalExamActionsType>(null);

  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const [patientResponse, setPatientResponse] = useState<string | 0 | 1>(0); // 0 is initial state, 1 means patient is currently 'thinking'
  const inputFormRef = useRef(null);

  const [requestedResources, setRequestedResources] = useState<
    RequestedResource[]
  >([]);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <TestTopBar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 h-[calc(100vh-52px)]">
        {/* Three Column Layout */}
        <div className="flex gap-6 h-full">
          {/* Left Column - 1/4 width */}
          <div className="w-1/4 space-y-4 flex flex-col">
            <div className="w-full">
              {/* Vitals Monitor */}
              <div className="w-full bg-black text-green-400 p-3 rounded-lg">
                {/* BPM */}
                <div className="border-b border-green-400 pb-2 mb-2 flex gap-2">
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-2/3"></div>
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-1/3 px-1">
                    <div className="text-2xl font-bold text-center">
                      60
                      <span className="text-sm text-white font-normal">
                        bpm
                      </span>
                    </div>
                  </div>
                </div>

                {/* PR BPM */}
                <div className="border-b border-green-400 pb-2 mb-2 flex gap-2">
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-2/3"></div>
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-1/3 px-1">
                    <div className="text-2xl font-bold text-center text-white flex">
                      <div>98</div>
                      <div className="flex flex-col text-xs font-normal py-1 gap-0 justify-center items-center">
                        <div>89</div>
                        <div>%</div>
                      </div>
                      <div className="text-xs font-normal">PR bpm</div>
                    </div>
                  </div>
                </div>

                {/* RPM */}
                <div className="flex gap-2">
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-2/3"></div>
                  <div className="h-8 bg-green-400/20 rounded mb-1 basis-1/3 px-1">
                    <div className="text-2xl font-bold text-center text-white flex">
                      <div className="pr-1">30</div>
                      <div className="flex flex-col text-xs font-normal py-1 gap-0 justify-center items-center">
                        rpm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full flex-1 gap-4 justify-end">
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

              <div className="flex gap-2">
                {/* Discharge */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg">
                      Discharge
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-">Discharge</DialogTitle>
                      <DialogDescription>Confirm Discharge</DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2 max-h-96 overflow-y-auto">
                      <DialogClose asChild>
                        <button
                          className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
                          onClick={() => setIsTestCompleted(true)}
                        >
                          Discharge
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
                          Don't discharge
                        </button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Refer */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
                      onClick={() => setSelectedReferralLocation(null)}
                    >
                      Refer
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-">Refer</DialogTitle>
                      <DialogDescription>
                        Select referral location
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                      {referralLocations.map((referral_string, index) => {
                        return (
                          <button
                            key={index}
                            className={`rounded-md ${
                              referral_string !== selectedReferralLocation
                                ? "bg-gray-100 hover:bg-gray-200"
                                : "bg-gray-300 hover:bg-gray-400"
                            } p-2 text-start`}
                            onClick={() =>
                              setSelectedReferralLocation(referral_string)
                            }
                          >
                            {referral_string}
                          </button>
                        );
                      })}
                    </div>
                    {selectedReferralLocation !== null && (
                      <DialogFooter className="flex gap-2">
                        <button
                          className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
                          onClick={() => setIsTestCompleted(true)}
                        >
                          Confirm
                        </button>
                        <DialogClose asChild>
                          <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
                            Cancel
                          </button>
                        </DialogClose>
                      </DialogFooter>
                    )}
                  </DialogContent>
                </Dialog>
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
                <form
                  ref={inputFormRef}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    inputFormRef.current?.reset();
                    setPatientResponse(1);
                    await new Promise((resolve) =>
                      setTimeout(() => resolve(null), 1000)
                    );
                    setPatientResponse(
                      patientReponses[
                        Math.floor(Math.random() * patientReponses.length)
                      ]
                    );
                  }}
                >
                  <input
                    type="text"
                    className="bg-gray-200 rounded-3xl p-4 w-full"
                    placeholder="Talk to patient"
                  />
                </form>
              </div>
              <div className="bg-gray-200 rounded-3xl p-4 flex-1">
                <div>{patientResponse === 0 && "Hi Doctor"}</div>
                <div>
                  {patientResponse === 1 && (
                    <p className="text-gray-600">Patient is thinking...</p>
                  )}
                </div>
                <div>
                  {typeof patientResponse !== "number" && patientResponse}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1/4 width */}
          <div className="w-1/4 space-y-4 flex flex-col gap-6">
            <div>
              {/* Patient Info */}
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-md font-semibold mb-2">
                    Initial Information
                  </h2>
                  <ul className="space-y-1 text-sm">
                    <li>• 56-year-old male, clutching chest, diaphoretic.</li>
                    <li>• Pale, sweaty, visibly distressed.</li>
                    <li>• Rapid, shallow breathing (RR 24).</li>
                    <li>• Grimacing, holding left arm occasionally.</li>
                    <li>• Restless, shifting uncomfortably.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col overflow-y-auto">
              <h2 className="text-md font-semibold mb-2">
                Requested Resources
              </h2>
              <div className="flex flex-col">
                // {requestedResources.map((resource, index) => {
                return <Dialog>

                  <DialogHeader>
                    <DialogTitle>

                    </DialogTitle>
                  </DialogHeader>
                </Dialog>
                })}
              </div>
            </div> */}
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
                          onClick={() => setSelectedResource(action_string)}
                        >
                          {action_string}
                        </button>
                      );
                    })}
                  </div>
                </DialogContent>
                {/* {selectedResource !== null && (
                  <DialogFooter className="flex gap-2">
                    <button
                      className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
                      onClick={async () => {
                        setRequestedResources((prev) => [
                          ...prev,
                          {
                            resource_name: selectedResource,
                            resource_image:
                              randomImageLinks[
                                Math.random() * randomImageLinks.length
                              ],
                          },
                        ]);
                      }}
                    >
                      Confirm
                    </button>
                    <DialogClose asChild>
                      <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
                        Cancel
                      </button>
                    </DialogClose>
                  </DialogFooter>
                )} */}
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
                          className={`rounded-md bg-gray-100 hover:bg-gray-200 p-2 text-start`}
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

      {/* Test Completion Dialog */}
      <Dialog open={isTestCompleted}>
        <DialogContent className="[&>button]:hidden w-full max-w-[80vw]">
          <DialogHeader>
            <DialogTitle>
              Results for <span className="font-bold">Patient LUCAS</span>
            </DialogTitle>
            <DialogDescription>Review your results</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            {/* Clarity & Structure (SBAR Format) */}
            <div className="grid grid-cols-[1fr_80px_2fr] gap-4 items-start">
              <div className="font-medium text-gray-700">
                Clarity & Structure (SBAR Format)
              </div>
              <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium text-center">
                GOOD
              </div>
              <div className="text-gray-600 text-sm">
                Clear structure but could improve conciseness. Age, symptoms,
                and risk factors are well communicated.
              </div>
            </div>

            {/* Patient Details */}
            <div className="grid grid-cols-[1fr_80px_2fr] gap-4 items-start">
              <div className="font-medium text-gray-700">Patient Details</div>
              <div className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm font-medium text-center">
                FAIR
              </div>
              <div className="text-gray-600 text-sm">
                Mentioned STEMI but didn’t explicitly request immediate PCI
                activation.
              </div>
            </div>

            {/* Urgency & Prioritization */}
            <div className="grid grid-cols-[1fr_80px_2fr] gap-4 items-start">
              <div className="font-medium text-gray-700">
                Urgency & Prioritization
              </div>
              <div className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm font-medium text-center">
                FAIR
              </div>
              <div className="text-gray-600 text-sm">
                Correctly identified STEMI (II, III, aVF) with reciprocal
                changes.
              </div>
            </div>

            {/* ECG Interpretation */}
            <div className="grid grid-cols-[1fr_80px_2fr] gap-4 items-start">
              <div className="font-medium text-gray-700">
                ECG Interpretation
              </div>
              <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-medium text-center">
                WEAK
              </div>
              <div className="text-gray-600 text-sm">
                Included aspirin, ticagrelor, and GTN but forgot to mention
                oxygen, fluids, or heparin.
              </div>
            </div>

            {/* Handover Request */}
            <div className="grid grid-cols-[1fr_80px_2fr] gap-4 items-start">
              <div className="font-medium text-gray-700">Handover Request</div>
              <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-medium text-center">
                WEAK
              </div>
              <div className="text-gray-600 text-sm">
                Did not confirm if cardiology wants additional management before
                transfer.
              </div>
            </div>
          </div>
          <DialogFooter>
            <a
              href="/"
              className="bg-gray-800 text-white py-3 px-4 rounded-lg text-left"
            >
              Return to Dashboard
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
