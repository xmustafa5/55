import { grayNoiseSvg } from "@/public/svg/mainSvg";
import Image from "next/image";

function BusinessWhoRolledTheDice() {
    return (
        <div className="flex relative flex-col items-center gap-14 py-[88px] w-full px-[32px] md:px-[52px] lg:px-[72px] bg-white self-auto">
            {grayNoiseSvg}
            <div className="flex flex-col z-10 items-center gap-4">
                <div className="flex flex-col items-center gap-[21px]">
                    <h1 className="text-[#0F218D] text-center text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[110%]">
                        <span className="italic font-larken px-4">
                            Business
                        </span>
                        Who rolled the dice
                    </h1>
                </div>
                <h6 className="text-[#0F218D] text-center text-[20px] font-medium leading-[140%] capitalize">
                    We walk with your story, and turn into your lucky number
                </h6>
            </div>
            <div className="flex z-10 justify-center content-start gap-6 flex-wrap">
                <CardBussinessWhoRolledTheDice />
                <CardBussinessWhoRolledTheDice />
                <CardBussinessWhoRolledTheDice />
                <CardBussinessWhoRolledTheDice />
                <CardBussinessWhoRolledTheDice />
                <CardBussinessWhoRolledTheDice />
            </div>
            <div className="flex z-10 gap-2">
                <div className="flex py-4 px-12 items-center gap-[25px] rounded-[30.46px] border border-[#0F218D] [box-shadow:inset_0_1px_12px_0_rgba(255,255,255,0.08)]">
                    <p className="text-[#0F218D] text-[18px] font-bold leading-[20.26px] capitalize">
                        View all our works
                    </p>
                </div>
            </div>
        </div>
    );
}
function CardBussinessWhoRolledTheDice({ src, title, description }: { src?: string, title?: string, description?: string }) {
    return (
        <div className="flex min-w-[196px] md:min-w-[320px]  flex-col items-center gap-[-8px] grow shrink-0 basis-0">
            <div className="flex h-[264.24px] w-full min-h-[203.262px] p-4 flex-col gap-2 md:aspect-[416/264.24] rounded-t-3xl overflow-hidden relative">
                <Image
                    src={"/images/3.png"}
                    alt={"title"}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="flex p-6 flex-col gap-2 rounded-b-[32px] w-full bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h5 className="text-[#0F218D] text-center text-[18px] font-bold leading-[140%]">
                            Zayna | زينة
                        </h5>
                        <p className="text-[#0F218D] text-center text-xs leading-[120%]">
                            فبراير 2024
                        </p>
                    </div>
                    <div className="flex p-2 items-center gap-2 rounded-full border border-[#DCDCE0]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path opacity="0.4" d="M19.75 11.9658L4.75 11.9658" stroke="#0F218D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.7002 5.94123L19.7502 11.9652L13.7002 17.9902" stroke="#0F218D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <p className="text-[#484C6C] text-sm leading-[120%]">
                    The Natural Care platform wanted to shine with a warm identity that
                </p>
            </div>
        </div>
    );
}
export default BusinessWhoRolledTheDice;