import Image from "next/image";

function YourNextWinning() {
    return (
        <div className="flex py-[88px] w-full px-[72px] flex-col items-center gap-8 bg-white">
            <div className="flex flex-col items-center gap-6">
                <h1 className="max-w-[740px] text-[#0F218D] text-center text-[48px] font-bold leading-[120%]">
                    Your next winning move starts with our team, The dice is yours
                </h1>
                <h6 className="w-[611.825px] text-[#0F218D] text-center text-[20px] font-medium leading-[140%]">
                    Meet the minds behind the creativity
                </h6>
            </div>
            <div className="h-[534.373px] w-full relative">
                <Image
                    src="/images/people.png"
                    alt="Background image"
                    fill
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}
export default YourNextWinning;