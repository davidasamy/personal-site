import { useEffect } from 'react';

const preloadAssets = [
    { href: '/sleap-viewer.mov', as: 'video', type: 'video/quicktime' },
    { href: '/robots.mp4', as: 'video', type: 'video/mp4' },
    // Add more assets here as needed
];

function Home() {
    useEffect(() => {
        const links: HTMLLinkElement[] = [];

        preloadAssets.forEach(({ href, as, type }) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = as;
            link.href = href;
            link.type = type;
            document.head.appendChild(link);
            links.push(link);
        });

        return () => {
            links.forEach((link) => document.head.removeChild(link));
        };
    }, []);

    return (
        <div className="home-container">
            <p>
                Currently a student at the University of Washington, interested in neuroscience, computer vision, robotics, and math.
            </p>
        </div>
    );
}

export default Home;
