import './assets/app.css';
import orgnizerImage from './assets/orgnizer.png';
import Header from './components/Header.js';
import TextImage from './components/TextImage.js';
import ListWrapper from './components/ListWrapper.js';
import Contact from './components/Contact.js';

function App() {
	return (
		<div className="app">
			<div id="start">
				<Header
					name="Tor<br>Bratsberg"
					introduction="Developer and hobby beer brewer based in Oslo."
				/>
			</div>

			<div id="projects">
				<TextImage
					title="Noted"
					text="CLI Notes library, with viewer and shortcuts to edit and create new notes."
					link="https://github.com/torbratsberg/noted"
				/>

				<TextImage
					title="Orgnizer"
					reverse="true"
					text="Organizer your daily tasks using workspaces, kanban-boards and documents.<br><br>Full-stack project with React, Tailwind CSS, Python, Flask and MySql."
					image={orgnizerImage}
				/>

				<TextImage
					title="Gitor"
					text="Manage your Git repositories on a remove server.<br><br>CLI tool written in Go."
					link="https://github.com/torbratsberg/gitor"
				/>

				<TextImage
					title="ScriptHub"
					reverse="true"
					text="Keep track of all the scripts scattered around your computer with ScriptHub.<br><br>CLI tool written in Go."
					link="https://github.com/torbratsberg/scripthub"
				/>
			</div>

			<div id="stack">
				<ListWrapper title="My stack">
					<div>
						<h3>Front-end</h3>
						<ul>
							<li>Semantic HTML</li>
							<li>CSS, SCSS</li>
							<ul>
								<li>Zurb Foundation</li>
								<li>TailwindCSS</li>
								<li>Material Design</li>
							</ul>
							<li>JavaScript/TypeScript</li>
							<ul>
								<li>Angular</li>
								<li>React</li>
								<li>Vue</li>
								<li>jQuery</li>
								<li>Material UI</li>
							</ul>
						</ul>
					</div>

					<div>
						<h3>Back-end</h3>
						<ul>
                            <li>C#</li>
                            <ul>
                                <li>.NET</li>
                            </ul>
							<li>NodeJS</li>
							<li>Go</li>
							<li>Python</li>
							<ul>
								<li>Flask</li>
							</ul>
							<li>PHP</li>
							<li>SQL</li>
							<li>NGINX</li>
						</ul>
					</div>

					<div>
						<h3>Design tools</h3>
						<ul>
							<li>Figma</li>
							<li>Illustrator</li>
							<li>Photoshop</li>
							<li>Aseprite</li>
						</ul>
					</div>

					<div>
						<h3>Misc</h3>
						<ul>
							<li>Git</li>
							<li>WordPress</li>
							<li>Sanity</li>
							<li>Webpack</li>
						</ul>
					</div>
				</ListWrapper>
			</div>

			<Contact title="Contact details" email="tor@bratsberg.net" />
		</div>
	);
}

export default App;
