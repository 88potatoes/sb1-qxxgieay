import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="container mx-auto mt-6 flex flex-col gap-4">
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
          Results
        </a>
        <a
          href="/selection"
          className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center"
        >
          Selection
        </a>
      </div>
    </>
  );
}
