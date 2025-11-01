"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

interface MultiImageProps {
    images: string[];
    alt: string;
}

function MultiImage({ images, alt }: MultiImageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (!isHovered || images.length <= 1) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 150); // Half of transition duration for crossfade effect
        }, 800); // Change image every 800ms

        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    return (
        <div
            className="flex h-[264.24px] w-full min-h-[203.262px] p-4 flex-col gap-2 md:aspect-[416/264.24] rounded-t-3xl overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0);
                setIsTransitioning(false);
            }}
        >
            <Image
                src={images[currentImageIndex]}
                alt={alt}
                fill
                className={`object-cover object-center transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
            />
        </div>
    );
}

export function ProjectCard({ project }: { project: Project }) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' });
    };

    // Create array of images - if project has an image, use it multiple times for demo
    // In real scenario, the API should return multiple images
    const images = project.image
        ? [project.image, "/images/3.png",] // Repeat the image for demo
        : ["/images/3.png"];

    return (
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group flex min-w-[196px] md:min-w-[320px] flex-col items-center gap-[-8px] grow shrink-0 basis-0">
            <MultiImage images={images} alt={project.title} />
            <div className="flex p-6 flex-col gap-2 rounded-b-[32px] w-full bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h5 className="text-[#0F218D] text-center text-[18px] font-bold leading-[140%]">
                            {project.title}
                        </h5>
                        <p className="text-[#0F218D] text-center text-xs leading-[120%]">
                            {formatDate(project.end_at)}
                        </p>
                    </div>
                    <div className="flex p-2 items-center gap-2 rounded-full border border-[#DCDCE0]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="rotate-0 group-hover:-rotate-45 duration-200 ease-in-out transition-all">
                            <path opacity="0.4" d="M19.75 11.9658L4.75 11.9658" stroke="#0F218D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.7002 5.94123L19.7502 11.9652L13.7002 17.9902" stroke="#0F218D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <p className="text-[#484C6C] text-sm leading-[120%]">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}
