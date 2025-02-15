import React, { useState } from 'react';
import { Stethoscope, Activity, ScanLine, Microscope } from 'lucide-react';

// Simulated patient data for MI case
const patientData = {
  profile: {
    name: 'John Mitchell',
    age: 58,
    occupation: 'Office Manager',
    medicalHistory: [
      'Hypertension - diagnosed 5 years ago, on Ramipril',
      'Type 2 Diabetes - diagnosed 2 years ago, diet-controlled',
      'High cholesterol - on Atorvastatin',
    ],
    familyHistory: [
      'Father died of heart attack at 60',
      'Mother has hypertension',
      'Brother had MI at 55',
    ],
    socialHistory: {
      smoking: '20 pack-year history, currently 10/day',
      alcohol: 'Social drinker, 10-14 units/week',
      exercise: 'Sedentary lifestyle',
    },
  },
  symptoms: {
    mainComplaint: 'Severe chest pain started 45 minutes ago',
    characteristics: [
      'Central chest pain',
      'Crushing/heavy sensation',
      'Radiating to left arm and jaw',
      'Associated with sweating and nausea',
      'Pain score 8/10',
    ],
  },
};

// Hardcoded physical exam results
const physicalExamResults: Record<string, string> = {
  heart:
    'Heart rate 92 bpm, regular rhythm. Normal S1 and S2. No murmurs, rubs, or gallops detected. JVP not elevated.',
  lungs:
    'Respiratory rate 20. Clear breath sounds bilaterally. No added sounds or crackles.',
  chest:
    'Chest wall non-tender. Patient appears uncomfortable and diaphoretic. Using accessory muscles.',
  abdomen: 'Soft, non-tender. No epigastric tenderness. Normal bowel sounds.',
  vitals: 'BP 165/95, HR 92, RR 20, SpO2 97% on room air, Temp 36.8°C',
  extremities:
    'Peripheral pulses present and equal. No peripheral edema. Hands cold and clammy.',
};

// Enhanced patient response system
const patientPersona = {
  // Personality traits that affect responses
  traits: {
    anxietyLevel: 'high',
    painLevel: 8,
    cooperation: 'good',
  },

  // Core symptoms and their descriptions
  symptoms: {
    pain: {
      location: 'central chest',
      quality: 'crushing, heavy',
      radiation: ['left arm', 'jaw'],
      severity: '8/10',
      onset: '45 minutes ago',
      aggravators: ['deep breathing', 'movement'],
      relievers: ['sitting still', 'leaning forward'],
    },
  },

  // Response patterns based on question types
  getResponse(input: string): string {
    const lowercaseInput = input.toLowerCase();

    // Pain-related questions
    if (lowercaseInput.includes('pain')) {
      if (lowercaseInput.includes('where')) {
        return "It's right in the middle of my chest, like someone's sitting on it. It's going up to my jaw and down my left arm too.";
      }
      if (lowercaseInput.includes('bad') || lowercaseInput.includes('severe')) {
        return "It's really bad, probably 8 out of 10. Worst pain I've ever had. *grimaces and puts hand to chest*";
      }
      if (lowercaseInput.includes('start')) {
        return 'It started about 45 minutes ago while I was just sitting watching TV. Came on quite suddenly.';
      }
      return "It's a heavy crushing pain in my chest. Really uncomfortable. *appears distressed*";
    }

    // Associated symptoms
    if (lowercaseInput.includes('breath')) {
      return "It's hard to catch my breath properly. The pain gets worse when I try to breathe deeply. *speaking in short sentences*";
    }
    if (lowercaseInput.includes('sick') || lowercaseInput.includes('nausea')) {
      return "Yes, I feel really sick to my stomach. Haven't been sick but feeling very nauseous.";
    }
    if (lowercaseInput.includes('sweat')) {
      return "Yes, I'm sweating a lot more than usual. My wife noticed how clammy I looked before calling the ambulance.";
    }

    // Medical history
    if (
      lowercaseInput.includes('medical') ||
      lowercaseInput.includes('history')
    ) {
      return 'I have high blood pressure and diabetes. Been on medication for the blood pressure for about 5 years now. *pauses due to pain* The diabetes is controlled with diet.';
    }
    if (lowercaseInput.includes('family')) {
      return "Yes, heart problems run in the family unfortunately. My father had a heart attack at 60 - that's what he died from. And my brother had one last year at 55.";
    }
    if (lowercaseInput.includes('medication')) {
      return 'I take Ramipril for my blood pressure and Atorvastatin for cholesterol. *grimaces* No allergies to any medications.';
    }

    // Lifestyle
    if (lowercaseInput.includes('smoke')) {
      return 'Yes, I smoke about 10 cigarettes a day. Been smoking for 30 years but cut down recently. *coughs slightly* I know I should quit.';
    }
    if (
      lowercaseInput.includes('drink') ||
      lowercaseInput.includes('alcohol')
    ) {
      return 'I drink socially, probably about 10-14 units a week. Nothing today though.';
    }
    if (lowercaseInput.includes('exercise')) {
      return 'Not really, my job keeps me at a desk most of the day. I know I should do more exercise. *shifts uncomfortably*';
    }

    // General questions
    if (lowercaseInput.includes('feel')) {
      return "I'm feeling really unwell. This chest pain is frightening me. Never had anything like this before.";
    }
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi ')) {
      return "Hello doctor, *grimaces* I'm having terrible chest pain. It's really bad.";
    }
    if (lowercaseInput.includes('work')) {
      return "I'm an office manager. Quite a stressful job actually, especially lately. *winces in pain*";
    }

    // Default response if no specific match is found
    return "I'm sorry, but this pain is making it hard to focus. *holds chest* The pain in my chest is really severe.";
  },
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [chatMessages, setChatMessages] = useState<
    Array<{ text: string; sender: 'user' | 'patient' }>
  >([
    {
      text: "Hello doctor, I'm having terrible chest pain.",
      sender: 'patient',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [examInput, setExamInput] = useState('');
  const [examResults, setExamResults] = useState<string | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user's message first
      const userMessage = { text: inputMessage, sender: 'user' };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputMessage('');

      // Get patient's response using the enhanced persona system
      const patientResponse = patientPersona.getResponse(inputMessage);
      await delay(1000); // Increased delay for more natural feeling

      // Add patient's response as a separate state update
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: patientResponse, sender: 'patient' },
      ]);
    }
  };

  const handlePhysicalExam = (e: React.FormEvent) => {
    e.preventDefault();
    const input = examInput.toLowerCase().trim();
    let result = 'No specific findings for this examination.';

    // Check if the input contains any of our known examination keywords
    Object.entries(physicalExamResults).forEach(([key, value]) => {
      if (input.includes(key)) {
        result = value;
      }
    });

    setExamResults(result);
    setExamInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-6 h-[calc(100vh-3rem)]">
        {/* Patient Column - Takes up half the screen */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Patient</h2>
          <div className="mb-4 flex-shrink-0">
            <img
              src="https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644075.jpg"
              alt="Patient"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="flex-grow overflow-y-auto mb-4 bg-gray-50 rounded-lg p-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Side Column - Contains both Actions and Results */}
        <div className="grid grid-rows-2 gap-6">
          {/* Actions Section - Top Half */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Left column - Investigation buttons */}
              <div className="space-y-4">
                <button className="w-full p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  ECG
                </button>
                <button className="w-full p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Bloods
                </button>
                <button className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <ScanLine className="w-5 h-5" />
                  Scans
                </button>
              </div>

              {/* Right column - Physical examination */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5" />
                    Physical Exam
                  </h3>
                  <form onSubmit={handlePhysicalExam} className="space-y-2">
                    <input
                      type="text"
                      value={examInput}
                      onChange={(e) => setExamInput(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter examination (e.g., heart, lungs, vitals)"
                    />
                    <button
                      type="submit"
                      className="w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      Examine
                    </button>
                  </form>
                </div>
                {examResults && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Examination Results:</h4>
                    <p className="text-sm text-gray-700">{examResults}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Section - Bottom Half */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Results</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
