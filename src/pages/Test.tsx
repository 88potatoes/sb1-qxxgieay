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
import ModelViewer from "@/components/ModelViewer";
import { useRef, useState, useEffect } from "react";
import { AudioLines } from "lucide-react";

const bedsideActions = [
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

type bedsideActionsType = (typeof bedsideActions)[number];

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
	"I'm have pain in my chest and it's running down my left arm."
];

const medicines = [
	"Acetaminophen (Tylenol)",
	"Morphine",
	"Hydromorphone (Dilaudid)",
	"Fentanyl",
	"Ketorolac (Toradol)",
	"Ceftriaxone (Rocephin)",
	"Vancomycin",
	"Piperacillin/tazobactam (Zosyn)",
	"Azithromycin (Zithromax)",
	"Metronidazole (Flagyl)",
	"Metoprolol (Lopressor)",
	"Lisinopril",
	"Amlodipine (Norvasc)",
	"Furosemide (Lasix)",
	"Ondansetron (Zofran)",
	"Pantoprazole (Protonix)",
]

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
	const [selectedMedicine, setSelectedMedicine] =
		useState<null | bedsideActionsType>(null);
	const [selectedResource, setSelectedResource] =
		useState<null | bedsideActionsType>(null);

	const [isTestCompleted, setIsTestCompleted] = useState(false);

	const [patientResponse, setPatientResponse] = useState<string | 0 | 1>(0); // 0 is initial state, 1 means patient is currently 'thinking'
	const inputFormRef = useRef(null);

	const [requestedResources, setRequestedResources] = useState<
		RequestedResource[]
	>([]);
	const [doctorInput, setDoctorInput] = useState<0 | 1 | 2 | 3>(0);
	const [isShowingMedicineSuccess, setIsShowingMedicineSuccess] = useState(false);

	const [isShowingMedicineSelection, setIsShowingMedicineSelection] = useState(false);

	const [isShowingECG12Lead, setIsShowingECG12Lead] = useState(false);
	const [isShowingReferralNote, setIsShowingReferralNote] = useState(false);
	const [isListening, setIsListening] = useState(false);

	useEffect(() => {
		let timeoutId;

		if (doctorInput === 3) {
			timeoutId = setTimeout(() => {
				setDoctorInput(2);
			}, 2000);
		}

		// Cleanup function to clear timeout if component unmounts
		// or if isListening changes before timeout completes
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [doctorInput]);
	return (
		<div className="min-h-screen bg-gray-100">
			{/* Top Navigation Bar */}
			<TestTopBar />

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-4 py-6 h-[calc(100vh-60px)]">
				{/* Three Column Layout */}
				<div className="flex gap-6 h-full">
					{/* Left Column - 1/4 width */}
					<div className="w-1/4 space-y-4 flex flex-col">
						<div className="w-full">
							{/* Vitals Monitor */}
							<div className="w-full bg-black text-green-400 p-3 rounded-lg shadow-md">
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
						<div className="flex flex-col w-full flex-1 gap-2 justify-end">
							{/* Meds */}
							<Dialog>
								<DialogTrigger>
									<button className="shadow-sm w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left" onClick={() => setSelectedMedicine(null)}>
										Meds
									</button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle className="text-">Medication</DialogTitle>
										<DialogDescription>Select medication to prescribe</DialogDescription>
									</DialogHeader>
									<div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
										{medicines.map((action_string, index) => {
											return (
												<button
													key={index}
													className={`rounded-md ${selectedMedicine !== action_string
														? "bg-gray-100 hover:bg-gray-200"
														: "bg-gray-300 hover:bg-gray-400"
														} p-2 text-start`}
													onClick={() => {
														setSelectedMedicine(action_string);
														console.log(action_string);
													}}
												>
													{action_string}
												</button>
											);
										})}
									</div>
									{selectedMedicine !== null && (
										<DialogFooter className="flex gap-2">
											<DialogClose asChild>
												<button
													className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
													onClick={() => setIsShowingMedicineSuccess(true)}
												>
													Confirm
												</button>
											</DialogClose>
											<DialogClose asChild>
												<button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
													Cancel
												</button>
											</DialogClose>
										</DialogFooter>
									)}
								</DialogContent>
							</Dialog>
							{/* IV */}
							<Dialog>
								<DialogTrigger>
									<button className="shadow-sm w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
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
									<button className="shadow-sm w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
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
									<button className="shadow-sm w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-left">
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
										<button className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg shadow-sm">
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
											className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg shadow-sm"
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
														className={`rounded-md ${referral_string !== selectedReferralLocation
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
												<DialogClose asChild>
													<button
														className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
														onClick={() => { setIsShowingReferralNote(true); setDoctorInput(0); }}
													>
														Confirm
													</button>
												</DialogClose>
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
							<ModelViewer /> {/* Replace the image with the 3D model */}
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
									<div className="relative p-2 bg-gray-200 rounded-3xl shadow-sm">
										<input
											type="text"
											className="rounded-3xl p-2 w-full pr-12 bg-inherit"
											placeholder="Talk to patient"
										/>
										<AudioLines className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-3xl hover:bg-gray-300 hover:cursor-pointer" width={32} height={32} />
									</div>
								</form>
							</div>
							<div className="bg-gray-200 rounded-3xl p-4 flex-1 shadow-sm">
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
								<div className="p-4 border rounded-lg shadow-md bg-white">
									<h2 className="text-md font-semibold mb-2">
										Visual Cues
									</h2>
									<ul className="space-y-1 text-sm list-disc list-inside">
										<li className="leading-relaxed">
											56-year-old male, clutching chest, diaphoretic.
										</li>
										<li className="leading-relaxed">
											Pale, sweaty, visibly distressed.
										</li>
										<li className="leading-relaxed">
											Rapid, shallow breathing (RR 24).
										</li>
										<li className="leading-relaxed">
											Grimacing, holding left arm occasionally.
										</li>
										<li className="leading-relaxed">
											Restless, shifting uncomfortably.
										</li>
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
						<div className="flex flex-col gap-2 justify-end flex-1">
							{/* Physical Exam */}
							<Dialog>
								<DialogTrigger asChild>
									<button className="shadow-sm w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left">
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
								</DialogContent>
							</Dialog>

							{/* Bedside */}
							<Dialog>
								<DialogTrigger>
									<button
										className="shadow-sm w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left "
										onClick={() => setSelectedResource(null)}
									>
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
										{bedsideActions.map((action_string, index) => {
											return (
												<button
													key={index}
													className={`rounded-md ${selectedResource !== action_string
														? "bg-gray-100 hover:bg-gray-200"
														: "bg-gray-300 hover:bg-gray-400"
														} p-2 text-start`}
													onClick={() => {
														setSelectedResource(action_string);
														console.log(action_string);
													}}
												>
													{action_string}
												</button>
											);
										})}
									</div>
									{selectedResource !== null && (
										<DialogFooter className="flex gap-2">
											<DialogClose asChild>
												<button
													className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
													onClick={() => setIsShowingECG12Lead(true)}
												>
													Confirm
												</button>
											</DialogClose>
											<DialogClose asChild>
												<button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
													Cancel
												</button>
											</DialogClose>
										</DialogFooter>
									)}
								</DialogContent>
							</Dialog>

							{/* Imagery */}
							<Dialog>
								<DialogTrigger>
									<button className="shadow-sm w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left ">
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
										{/* Empty  */}
									</div>
								</DialogContent>
							</Dialog>

							{/* Labs */}
							<Dialog>
								<DialogTrigger>
									<button className="shadow-sm w-full bg-gray-800 text-white py-3 px-4 rounded-lg text-left ">
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
										{/* Empty */}
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
			</div>

			{/* ECG 12 Lead Dialog */}
			<Dialog open={isShowingECG12Lead} onOpenChange={setIsShowingECG12Lead}>
				<DialogContent className="max-w-[80vw] w-full">
					<DialogHeader>
						<DialogTitle>
							Results for <span className="font-bold">ECG 12 Lead</span>
						</DialogTitle>
						<DialogDescription>Review the results</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col justify-center items-center">
						<img src="https://www.saem.org/images/default-source/academy-images/cdem/picture1236f4cc18-5b6a-4608-8b50-47e2af5e16f4.png?sfvrsn=eea9ca83_1" className="max-w-[80rem] w-full" />
					</div>
				</DialogContent>
			</Dialog>

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
							href="/selection"
							className="bg-gray-800 text-white py-3 rounded-lg text-center"
						>
							See summary
						</a>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Medicine Success */}
			<Dialog open={isShowingMedicineSuccess} onOpenChange={setIsShowingMedicineSuccess}>
				<DialogContent className="max-w-[40vw] w-full">
					<DialogHeader>
						<DialogTitle>
							You have prescribed <span className="font-bold">{selectedMedicine}</span>.
						</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>


			{/* Referral Note */}
			<Dialog open={isShowingReferralNote} onOpenChange={setIsShowingReferralNote}>
				<DialogContent className="max-w-[40vw] w-full">
					<DialogHeader>
						<DialogTitle>
							Referral Note
						</DialogTitle>
						<DialogDescription>Leave a note for the doctor
						</DialogDescription>
					</DialogHeader>
					<button onClick={() => {
						setDoctorInput(prev => {
							if (prev === 0) {
								return 1;
							}
							if (prev === 1) { return 3 }
						})
						setIsListening((prev) => !prev);
					}}>
						<AudioLines className={`p-1 rounded-3xl ${isListening ? 'bg-gray-200': ''} hover:bg-gray-300 hover:cursor-pointer`} width={32} height={32} />
					</button>
					<div className="bg-gray-200 rounded-3xl p-4 flex-1 shadow-sm">
						<div>{doctorInput === 0 && "Please record input"}</div>
						<div>
							{doctorInput === 1 && (
								<p className="text-gray-600">Reading input...</p>
							)}
						</div>
						<div>
							{doctorInput === 2 && "My name is Dr Robert’s and I have a 55 year old with an abnormal ECG."}
							{doctorInput === 3 && <p className="text-gray-600">Processing input...</p>}
						</div>
					</div>
					{doctorInput === 2 && (
						<DialogFooter className="flex gap-2">
							<DialogClose asChild>
								<button
									className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg"
									onClick={() => setIsTestCompleted(true)}
								>
									Confirm
								</button>
							</DialogClose>
							<DialogClose asChild>
								<button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg">
									Cancel
								</button>
							</DialogClose>
						</DialogFooter>
					)}

				</DialogContent>
			</Dialog>
		</div >
	);
}
