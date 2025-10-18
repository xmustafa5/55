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
        <div className="relative w-96 h-96">
            {/* Center square */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 bg-green-300 z-10"></div>

            {/* Rotating container for surrounding squares */}
            <div className="absolute inset-0 animate-spin-slow">
                {/* Top square */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 size-12 bg-blue-400 animate-counter-spin"></div>

                {/* Right square */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 size-12 bg-purple-400 animate-counter-spin"></div>

                {/* Bottom square */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 size-12 bg-yellow-400 animate-counter-spin"></div>

                {/* Left square */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 size-12 bg-red-400 animate-counter-spin"></div>

                {/* Top-right square (diagonal) */}
                <div className="absolute top-12 right-12 size-12 bg-pink-400 animate-counter-spin"></div>
            </div>
        </div>
    )
}

export default page