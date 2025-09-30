import { BoxDomnaSvg, CheckenSvg, CreativitySvg, FiftyFiveLanguageSvg, FlowerSvg, HighFiveSvg, noiseSvg } from "@/public/svg/mainSvg";
import Image from "next/image";

function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen p-[175px] px-[181px] bg-[#001487] [background-image:linear-gradient(0deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.04)_100%)]">
            {noiseSvg}
            <div className="relative flex flex-col items-center w-[1079px] h-[247px] gap-10 shrink-0">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-[#A6ADD5] text-center text-[72px] font-semibold leading-[90%]">
                        Creativity Our
                    </h1>
                    <h2 className="text-[#FAFBFD] text-center text-[72px]  font-bold leading-[90%]">
                        <span className="italic font-larken">Native</span> <span className="text-[#A6ADD5] text-[72px] font-semibold leading-[90%]">
                            language
                        </span>
                    </h2>
                </div>
                <p className="w-[612.688px] text-white text-center text-[18px] font-normal leading-[130%]">
                    we’re a creative agency that shakes the dice with bold ideas, sharp strategy, and a team that knows how to win. we throw confident that is exactly what your brand needs
                </p>
                {CheckenSvg}
                {BoxDomnaSvg}
                {FlowerSvg}
                {HighFiveSvg}
                {CreativitySvg}
                {/* {FiftyFiveLanguageSvg} */}
                <div className=" absolute w-42 h-42 left-[121px] top-[-68px] rotate-[-10deg]">
                    <Image src={"/images/Group.png"} alt="Group" fill />
                </div>
            </div>
        </div>
    );
}
export default HomePage;