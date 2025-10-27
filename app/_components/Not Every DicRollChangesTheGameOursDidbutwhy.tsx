import Link from "next/link";

function RollChangesTheGameOursDidbutwhy() {
    return (
        <div className="flex w-full py-[88px] px-[22px] md:px-[52px] lg:px-[72px] flex-col gap-2 bg-white">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#0F218D] max-w-[696px]  text-center text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[120%]">
                        Not Every Dice Roll Changes the Game, Ours Did, <span className="italic font-larken">
                            but why?
                        </span>
                    </p>
                </div>
                <div className="flex items-center content-center gap-4 flex-wrap">
                    <CardRoll />
                    <CardRoll />
                    <CardRoll />
                    <CardRoll />
                    <CardRoll />
                    <CardRoll />
                </div>
            </div>
        </div>
    )
}
function CardRoll() {
    return (
        <div className="relative group overflow-hidden flex h-[380px] min-w-[350px] p-8 px-6 flex-col gap-10 grow shrink-0 basis-0 rounded-3xl border border-[#E5E5E5] bg-white">
            <p className="text-[#0F218D] text-[48px] italic font-medium leading-[110%]">
                01
            </p>
            <div className="flex flex-col gap-3">
                <h3 className="text-[#001487] text-xl font-semibold leading-[140%] capitalize">
                    Multitalented Team That Thinks Wide, Works Smart.
                </h3>
                <p className="text-[#001487] text-sm leading-[140%] capitalize">
                    Our talented team brings together everything your brand needs, from photography, graphic design, brand building, content marketing, campaign management, and content writing, all perfectly aligned with your brand’s voice to present it exactly how should be.
                </p>
            </div>

            <div className=" absolute h-[380px] left-0 top-0 w-full group-hover:translate-y-0 transition-all ease-in duration-200 opacity-0 group-hover:opacity-100 scal0 group-hovecale-100   translate-y-100  flex  min-w-[350px] p-8 px-6  flex-col justify-between grow shrink-0 basis-0 rounded-3xl border border-[#001487] bg-[#0E208D] ">
                <div className="flex flex-col gap-6">
                    <p className="text-[#FAFBFD] text-3xl italic font-bold leading-[35.2px] capitalize">
                        Reasons to Partner
                        <span className="not-italic">
                            With Us
                        </span>
                    </p>
                    <p className="text-[#FAFBFD] text-base leading-[17.6px] capitalize">
                        we provide everything your brand needs, lets create something great together
                    </p>
                </div>
                <div className="flex hover:p-1.5 group transition-all ease-in-out duration-150 flex-col gap-2 rounded-[56px] border-2 border-white/26 w-fit">
                    <Link href={"/contact-us"} className="flex py-3  px-14 items-center gap-4 rounded-[54px] bg-white shadow-[inset_0_4px_9.519px_0_#FFF]">
                        <p className="text-[#13131D] text-base font-medium leading-[130%]">
                            Contact us
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
                            <rect width="26" height="29" rx="13" fill="#13131D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.805 10.9388C10.805 10.57 11.073 10.271 11.4037 10.271H16.1932C16.5238 10.271 16.7918 10.57 16.7918 10.9388V16.2809C16.7918 16.6497 16.5238 16.9486 16.1932 16.9486C15.8625 16.9486 15.5945 16.6497 15.5945 16.2809V12.5509L10.2305 18.5337C9.99672 18.7945 9.61764 18.7945 9.38385 18.5337C9.15005 18.273 9.15005 17.8502 9.38385 17.5894L14.7478 11.6065H11.4037C11.073 11.6065 10.805 11.3076 10.805 10.9388Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default RollChangesTheGameOursDidbutwhy;