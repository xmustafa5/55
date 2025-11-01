import { grayNoiseSvg } from "@/public/svg/mainSvg";
import { ProjectCard } from "@/app/_components/ProjectCard";

interface Project {
    geoid: string;
    title: string;
    description: string;
    start_at: string;
    end_at: string;
    link: string;
    is_visible: {
        value: number;
        label: string;
    };
    status: {
        value: number;
        label: string;
    };
    client: {
        geoid: string;
        name: string;
        logo: string | null;
        is_visible: {
            value: number;
            label: string;
        };
        created_at: string;
        projects_count: number;
    };
    service: {
        geoid: string;
        name: string;
        description: string;
        image: string | null;
        is_visible: {
            value: number;
            label: string;
        };
        created_at: string;
        projects_count: number;
    };
    image: string | null;
}

interface ProjectsResponse {
    items: Project[];
    total_pages: number;
    per_page: number;
    current_page: number;
}

async function getProjects(): Promise<ProjectsResponse> {
    const res = await fetch('https://main-website-api.55-iq.com/api/website/projects?is_visible=1', {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    return res.json();
}

async function page() {
    const projectsData = await getProjects();
    const projects = projectsData.items;
    return (
        <div className="flex relative pt-28 flex-col items-center gap-14 py-[88px] w-full px-[32px] md:px-[52px] lg:px-[72px] bg-white self-auto">
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
                {projects.map((project) => (
                    <ProjectCard
                        key={project.geoid}
                        project={project}
                    />
                ))}
            </div>
            {/* <div className="flex z-10 gap-2">
                <Link href={"/project"} className="flex py-4 px-12 items-center gap-[25px] rounded-[30.46px] border border-[#0F218D] [box-shadow:inset_0_1px_12px_0_rgba(255,255,255,0.08)]">
                    <p className="text-[#0F218D] text-[18px] font-bold leading-[20.26px] capitalize">
                        View all our works
                    </p>
                </Link >
            </div> */}
        </div>
    )
}

export default page