import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class NavBarLink extends Component {
	render () {
		const { github, logo, docker } = this.props
		return (
			<Fragment>
				<NavLink className="navbar-brand" to="/apaxy-v2">
					<img className="logo" src={logo} alt={logo} />
				</NavLink>
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item">
						<NavLink className="nav-link" to="/icon">
							Icon
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/doc">
							Doc
						</NavLink>
					</li>
				</ul>
				<ul className="my-auto">
					<li className="nav-item  d-inline-block">
						<a
							className="nav-link"
							href="https://hub.docker.com/r/fusengine/apaxy"
							target="_blank"
							rel="noopener noreferrer">
							<img className="dev" src={docker} alt={docker} />
						</a>
					</li>
					<li className="nav-item d-inline-block">
						<a
							className="nav-link"
							href="https://github.com/fusengine/apaxy-v2"
							target="_blank"
							rel="noopener noreferrer">
							<img className="dev" src={github} alt={github} />
						</a>
					</li>
				</ul>
			</Fragment>
		)
	}
}
export default NavBarLink
