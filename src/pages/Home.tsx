import TopBar from "../components/TopBar";
import "../styles.css";

export default function Home() {
  return (
    <div className="gradient-background">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="slogan-container">
        <h1>EMPOWERING FUTURE DOCTORS,</h1>
        <h2>AT YOUR FINGERTIPS</h2>
      </div>
      <div className="content-container container mx-auto mt-6 flex flex-col gap-4">
        <a
          href="/test"
          className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center"
        >
          Test
        </a>
        <a
          href="/results"
          className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center"
        >
          Selection
        </a>
        <a
          href="/selection"
          className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center"
        >
          Results
        </a>
        <a
          href="/intro"
          className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center"
        >
          Intro
        </a>
      </div>
    </div>
  );
}
