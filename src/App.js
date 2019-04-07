import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/** Component */
import { Footer, NavBar } from './components'

/** Image */
import logo from './images/logo/apaxy-v2.svg'
import github from './images/fontawesome/github.svg'
import docker from './images/fontawesome/docker.svg'

/** Pages */
import { Apaxy, Icon, Doc } from './components/pages'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			logo,
			github,
			docker
		}
	}

	render () {
		const { logo, github, docker } = this.state

		return (
			<Fragment>
				{/* like index.js - default page that are implemented in all pages */}

				<Router>
					<NavBar logo={logo} github={github} docker={docker} />

					{/* Margin top because of the navbar */}
					<div className="margintop" />

					{/* Here come the containt of the page */}

					{/* Select page for each path */}
					<Switch>
						<Route path="/apaxy-v2" component={Apaxy} />
						<Route path="/icon" component={Icon} />
						<Route path="/doc" component={Doc} />
						<Route path="https://hub.docker.com/r/fusengine/apaxy" />
						<Route path="https://github.com/fusengine/apaxy-v2" />
						{/* <Route path="/test" render={()=> { return(<h1>Test</h1>)}}></Route> */}
					</Switch>
				</Router>

				<Footer />
			</Fragment>
		)
	}
}
export default App
