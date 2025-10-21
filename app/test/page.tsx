'use client';

function page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <Squri />
        </div>
    )
}

function Squri() {
    return (
        <div className="relative w-[700px] h-[500px]">
            {/* Center square - stays in the middle always */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 bg-green-400 rounded-lg z-20 shadow-lg"></div>

            {/* Connection lines - fade in after animation */}
            <svg className="absolute inset-0 w-full h-full animate-lines-fade z-10" style={{ pointerEvents: 'none' }}>
                {/* Center is at 350, 250 */}
                {/* Left side - 2 boxes */}
                <line x1="350" y1="250" x2="170" y2="170" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                <line x1="350" y1="250" x2="170" y2="330" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />

                {/* Right side - 3 boxes */}
                <line x1="350" y1="250" x2="530" y2="140" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                <line x1="350" y1="250" x2="530" y2="250" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                <line x1="350" y1="250" x2="530" y2="360" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
            </svg>

            {/* Box 1: Blue - orbits then moves to left top */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-box-1">
                <div className="size-16 bg-blue-400 rounded-lg shadow-lg animate-keep-upright"></div>
            </div>

            {/* Box 2: Red - orbits then moves to left bottom */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-box-2">
                <div className="size-16 bg-red-400 rounded-lg shadow-lg animate-keep-upright"></div>
            </div>

            {/* Box 3: Purple - orbits then moves to right top */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-box-3">
                <div className="size-16 bg-purple-400 rounded-lg shadow-lg animate-keep-upright"></div>
            </div>

            {/* Box 4: Yellow - orbits then moves to right middle */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-box-4">
                <div className="size-16 bg-yellow-400 rounded-lg shadow-lg animate-keep-upright"></div>
            </div>

            {/* Box 5: Pink - orbits then moves to right bottom */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-box-5">
                <div className="size-16 bg-pink-400 rounded-lg shadow-lg animate-keep-upright"></div>
            </div>
        </div>
    )
}

export default page