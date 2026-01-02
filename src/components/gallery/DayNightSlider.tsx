import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DayNightSliderProps {
    dayImage: string;
    nightImage: string;
    className?: string;
}

export const DayNightSlider: React.FC<DayNightSliderProps> = ({ dayImage, nightImage, className = "" }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    return (
        <div
            ref={containerRef}
            className={`relative w-full aspect-[16/9] overflow-hidden cursor-col-resize select-none ${className}`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* Night Image (Base) */}
            <img
                src={nightImage}
                alt="Night view"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Day Image (Overlay) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={dayImage}
                    alt="Day view"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Slider Line / Handle */}
            <div
                className="absolute inset-y-0 w-0.5 bg-white z-10"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-3 bg-charcoal/30 rounded-full" />
                        <div className="w-0.5 h-3 bg-charcoal/30 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="bg-charcoal/40 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-white/20">Day</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                <span className="bg-charcoal/40 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-white/20">Night</span>
            </div>
        </div>
    );
};
