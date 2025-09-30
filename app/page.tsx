import Image from "next/image";
import HomePage from "./_components/homePage";
import Services55 from "./_components/55Services";
import BusinessWhoRolledTheDice from "./_components/BusnessWhoRolledTheDice";
import About from "./_components/About";
import RollChangesTheGameOursDidbutwhy from "./_components/Not Every DicRollChangesTheGameOursDidbutwhy";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <HomePage />
      <Services55 />
      <RollChangesTheGameOursDidbutwhy />
      <BusinessWhoRolledTheDice />
      <About />
    </div>
  );
}
