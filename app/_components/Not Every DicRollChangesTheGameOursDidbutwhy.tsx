function RollChangesTheGameOursDidbutwhy() {
    return (
        <div className="flex w-full py-[88px] px-[72px] flex-col gap-2 bg-white">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#0F218D] max-w-[696px]  text-center text-[48px] font-bold leading-[120%]">
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
        <div className="flex h-[380px] min-w-[350px] p-8 px-6 flex-col gap-10 grow shrink-0 basis-0 rounded-3xl border border-[#E5E5E5] bg-white">
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
        </div>
    )
}
export default RollChangesTheGameOursDidbutwhy;