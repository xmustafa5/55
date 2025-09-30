import Image from "next/image";
import HomePage from "./_components/homePage";

export default function Home() {
  return (
    <div className="flex flex-col items-start w-screen">
      <HomePage />
    </div>
  );
}
