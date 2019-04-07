import React, { Component, Fragment } from 'react'

class Info extends Component {
	render () {
		const { title, content, link, liste } = this.props
		return (
			<Fragment>
				<div className="card text-white bg-dark mb-3">
					<div className="card-header">
						<h2>{title}</h2>
					</div>
					<div className="card-body">
						<p className="card-text">
							{content} {' '}
							{link ? (
								<a href={link} className="btn btn-outline-primary btn-sm">
									View on github.
								</a>
							) : (
								''
							)}
							{liste ? (
								liste.map((value, index) => {
									return (
										<ul>
											<li key={index}>{value}</li>
										</ul>
									)
								})
							) : (
								''
							)}
						</p>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Info
