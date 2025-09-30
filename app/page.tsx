import Image from "next/image";
import HomePage from "./_components/homePage";
import Services55 from "./_components/55Services";
import BusinessWhoRolledTheDice from "./_components/BusnessWhoRolledTheDice";
import About from "./_components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <HomePage />
      <Services55 />
      <BusinessWhoRolledTheDice />
      <About />
    </div>
  );
}
