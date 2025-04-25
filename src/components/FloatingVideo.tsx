import { useEffect, useRef } from 'react';
import './FloatingVideo.css';

interface FloatingVideoProps {
    src: string;
}

function FloatingVideo({ src }: FloatingVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;

            const rotateX = y * -30;
            const rotateY = -x * -30;

            if (videoRef.current) {
                videoRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="floating-video-wrapper">
            <video
                className="floating-video"
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
}

export default FloatingVideo;
