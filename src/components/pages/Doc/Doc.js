import React, { Component } from 'react'
import Docdb from '../StaticDB/Documentation.json'
import Info from './Info'

class Doc extends Component {
	constructor (props) {
		super(props)
		this.state = {
			Docdb
		}
	}
	render () {
		const { Docdb } = this.state
		return (
			<div className="container">
				<h1 className="doc text-center ">Documentation</h1>
				{Docdb.data.map((dataInfo, index) => (
					<Info
						title={dataInfo.title}
						content={dataInfo.content}
						liste={dataInfo.liste}
						link={dataInfo.link}
						key={index}
					/>
				))}
			</div>
		)
	}
}

export default Doc
