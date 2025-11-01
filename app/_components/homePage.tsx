import { BoxDomnaSvg, boxFiftyfive, CheckenSvg, CreativitySvg, FiftyFiveLanguageSvg, FlowerSvg, HighFiveSvg, noiseSvg } from "@/public/svg/mainSvg";
import Image from "next/image";

function HomePage() {
    return (
        <div className="flex w-[100%] h-[796px] py-[175px] px-[181px] flex-col justify-center items-center bg-gradient-to-b from-[#0F218D] to-[#0F218D] bg-opacity-[.96]">
            {noiseSvg}
            <div className="flex relative w-[400] sm:w-[500] md:w-[700px] lg:w-[900px] 2xl:w-[1079px] py-16 flex-col items-center gap-10 rounded-[32px] bg-white/4">

                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-[#A6ADD5] text-center text-[40px] md:text-[56px] lg:text-[72px] font-semibold leading-[90%]">
                        Creativity Our
                    </h1>
                    <h2 className="text-[#FAFBFD] text-center text-[40px] md:text-[56px] lg:text-[72px]  font-bold leading-[90%]">
                        <span className="italic font-larken">Native</span> <span className="text-[#A6ADD5] text-[40px] md:text-[56px] lg:text-[72px]font-semibold leading-[90%]">
                            language
                        </span>
                    </h2>
                </div>
                <p className="w-[350px] md:w-[612.688px] text-white text-center text-[18px] font-normal leading-[130%]">
                    we’re a creative agency that shakes the dice with bold ideas, sharp strategy, and a team that knows how to win. we throw confident that is exactly what your brand needs
                </p>
                <div className="flex z-10 p-[18.949px] flex-col absolute right-1/2 translate-x-1/2 -top-18 gap-[9.475px]">
                    {boxFiftyfive}
                </div>

            </div>
        </div>
    );
}
export default HomePage;