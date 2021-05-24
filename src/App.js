import './assets/app.css';
import orgnizerImage from './assets/orgnizer.png';
import Header from './components/Header.js';
import TextImage from './components/TextImage.js';
import ListWrapper from './components/ListWrapper.js';

function App() {

    return (
        <div className="app">

            <div id="start">
                <Header
                    name="Tor<br>Bratsberg"
                    introduction="Web developer and hobby beer brewer based in Oslo."
                />
            </div>

            <div id="projects">

                <TextImage
                    title="Orgnizer"
                    text="Organizer your daily tasks using workspaces, kanban-boards and documents.<br><br>Full-stack project with React, Tailwind CSS, Python, Flask and MySql."
                    link="https://orgnizer.torbratsberg.no"
                    image={orgnizerImage}
                />

                <TextImage
                    title="Estimater"
                    text="Make estimate based on data, not gut feeling.<br>See how your estimates compares to the actual time it took.<br><br>Full-stack project with React, Material UI, SCSS, Python, Flask and MySql"
                    image={orgnizerImage}
                    reverse="true"
                />

            </div>

            <div id="stack">
                <ListWrapper
                    title="My stack"
                >

                    <div>
                        <h3>Front-end</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS, SCSS</li>
                            <ul>
                                <li>Zurb Foundation</li>
                                <li>TailwindCSS</li>
                            </ul>
                            <li>JavaScript</li>
                            <ul>
                                <li>React</li>
                                <li>Vue</li>
                                <li>jQuery</li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3>Back-end</h3>
                        <ul>
                            <li>Python</li>
                            <ul>
                                <li>Flask</li>
                                <li>MySQLConnector</li>
                            </ul>
                            <li>PHP</li>
                            <li>SQL</li>
                            <ul>
                                <li>MySQL</li>
                            </ul>
                            <li>NGINX</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Design tools</h3>
                        <ul>
                            <li>Figma</li>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>

                    <div>
                        <h3>CMS's</h3>
                        <ul>
                            <li>WordPress</li>
                            <li>Sanity</li>
                        </ul>
                    </div>

                </ListWrapper>
            </div>

        </div>
    );
}

export default App;
