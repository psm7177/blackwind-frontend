import Image from "next/image";
import HighlightButton from "../components/atoms/buttons/HighlightButton";
import Login from "../components/molecules/Login/Login";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-md p-3">
        <Login />
      </div>
    </main>
  );
}
