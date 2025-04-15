import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = '/sleap-viewer.mov';
        link.type = 'video/quicktime'; // or 'video/mp4' if it's .mp4
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="home-container">
            <h1>I'm David Samy</h1>
            <p>
                Currently a student at the University of Washington. I'm interested in neuroscience, computer vision, robotics, and math.
            </p>
        </div>
    );
}

export default Home;
