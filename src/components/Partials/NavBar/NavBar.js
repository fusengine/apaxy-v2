import React, { Component, Fragment } from 'react'
import NavBarLink from './NavLink/NavBarLink'

class NavBar extends Component {
	render () {
		const { logo, docker, github } = this.props

		return (
			<Fragment>
				<header>
					<nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar fixed-top mb-5">
						<div className="container">
							<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
								<NavBarLink logo={logo} docker={docker} github={github} />
							</div>
						</div>
					</nav>
				</header>
			</Fragment>
		)
	}
}

export default NavBar
