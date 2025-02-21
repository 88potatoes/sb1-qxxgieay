import SelectionTopBar from "../components/SelectionTopBar";
import PentagramChart from "../components/PentagramChart";
import CircleProgressBar from "../components/CircleProgressBar";

const generateRandomValue = (max, decimalPlaces = 0) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(Math.random() * max * factor) / factor;
};

export default function Selection() {
  const simulationsValue = generateRandomValue(100);
  const averageGradeValue = generateRandomValue(10, 1);

  return (
    <div className="selection-page flex flex-col justify-center items-center">
      <SelectionTopBar />
      <div className="selection-page-container flex items-center h-[calc(100vh-60px)]">
        <div className="w-1/2 p-4">
          <PentagramChart />
        </div>
        <div className="w-1/2 p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Dr. Roberts Statistics</h2>
          <div className="flex flex-col">
            <div className="flex justify-around w-full">
              <div className="w-1/2 p-4">
                <CircleProgressBar
                  value={simulationsValue}
                  maxValue={100}
                  text={`${simulationsValue}`}
                  label="Simulations in the past 30 days"
                />
              </div>
              <div className="w-1/2 p-4">
                <CircleProgressBar
                  value={averageGradeValue}
                  maxValue={10}
                  text={`${averageGradeValue.toFixed(1)}`}
                  label="Average Grade (out of 10)"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full w-full">
                <h1 className="text-center text-2xl font-medium">Focus Mode</h1>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full w-full">
                <a href="/results" className="bg-transparent px-0">
                  <h1 className="text-center text-2xl font-medium">
                    Enter Simulation
                  </h1>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
