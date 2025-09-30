import Image from "next/image";

function Services55() {
    return (
        <div className="flex w-full flex-col gap-14 py-[88px] px-[72px] bg-[#001487]">
            <div className="flex p-2 items-end content-end gap-6 flex-wrap">
                <div className="flex min-w-[320px] flex-col gap-6 grow shrink-0 basis-0">
                    <div className="flex gap-1  ">
                        <h2 className="text-[#FAFBFD] text-[48px] font-medium leading-[120%]">
                            55
                        </h2>
                        <h1 className="text-[#FAFBFD] font-larken text-[48px] italic font-medium leading-[120%]">
                            Services
                        </h1>
                    </div>
                    <p className="min-w-[320px] max-w-[640px] text-[#FAFBFD] text-base leading-normal">
                        Discover a full suite of creative, marketing, and communication solutions designed to grow your brand and connect with your audience.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="flex py-4 px-12 items-center gap-[25px] rounded-[30.46px] border border-white/[.16] bg-white/10 [box-shadow:inset_0_1px_12px_0_rgba(255,255,255,0.08)]">
                        <p className="text-white text-[18px] font-bold leading-[20.26px] capitalize">
                            Explore More
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex content-start gap-6 flex-wrap">
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
                <Card55Services src="/images/Digital-Marketing.png" title="Digital Marketing" description="We strategically manage your digital presence through content, advertising campaigns, and community management. Our focus is on delivering clear messages, engaging audiences, and achieving measurable results that elevate your brand." />
            </div>
        </div>
    );
}
function Card55Services({ src, title, description }: { src: string, title: string, description: string }) {
    return (
        <div className="flex h-[500px] min-w-[321px] py-14 px-8 flex-col gap-10 grow shrink-0 basis-0 rounded-lg bg-white">
            <div className="w-[100px] h-[100px] shrink-0 aspect-square relative ">
                <Image
                    src={src}
                    alt="Descriptive image alt text"
                    fill
                    className="object-cover object-center "
                />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="flex flex-col justify-center w-[225.16px] font-bold h-[92.2px] text-[#0F218D] text-[41.1px]  leading-[43.2px]">
                    {title}
                </h3>
                <p className="text-[#0F218D] text-base font-medium leading-[140%]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Services55;