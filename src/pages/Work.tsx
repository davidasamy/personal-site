import FloatingVideo from '../components/FloatingVideo'; // adjust the path as needed

function Work() {
    return (
        <div>
            <h1>work</h1>

            <FloatingVideo src="/sleap-viewer.mov" />

            <div className="proj-desc">
                <p>pose viewer developed to demonstrate capability of package I helped develop (sleap-io). coded in python, compiled to webassembly, to run in the browser!</p>
            </div>

            {/* <FloatingVideo src="/sleap-viewer.mov" />

            <div className="proj-desc">
                <p>pose viewer developed to demonstrate capability of package I helped develop (sleap-io). coded in python, compiled to webassembly, to run in the browser!</p>
            </div> */}

        </div>
    );
}

export default Work;
