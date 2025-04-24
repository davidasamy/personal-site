import FloatingVideo from '../components/FloatingVideo'; // adjust the path as needed

function Work() {
    return (
        <div className="work-page">
            <div className="proj-box">
                <h2 className="proj-title">vision targeting system</h2>
                <FloatingVideo src="/robots.mp4" />

                <div className="proj-desc">
                    <p>vision-based targeting system for detecting and shooting enemies. worked on development of classification and integration as part of the UW’s competitive robotics team.
                    </p>
                </div>
            </div>

            <div className="proj-box">
                <h2 className="proj-title">pose analysis and viewer tools</h2>

                <FloatingVideo src="/sleap-viewer.mov" />
                <div className="proj-desc">
                    <p>interactive pose viewer for sleap-io, a tool I helped develop at the salk institute. built in python and compiled to webassembly for fast performance.</p>
                </div>
            </div>

        </div>
    );
}

export default Work;
