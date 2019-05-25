import React, { Component } from "react";
import Link from 'next/link'
import Layout from './components/layout'

const Index = (props) => {
	return (
		<Layout>
			<div className="hero text-center">
				<h1>Bluebell Therapy</h1>
				<h5>Judith Mason</h5>
				<p>
					A Nottingham based caring and confidential Counselling and Hypnotherapy service.
            	</p>
				<div className="hero-button">
					<h3>Find out more about</h3>
					<a className="button button-white button-center" href="/hypnotherapy.html">Hypnotherapy</a>
					<a className="button button-white button-center" href="/counselling.html">Counselling</a>
					<a className="button button-white button-center" href="/workshops.html">Workshops</a>
				</div>
			</div>
		</Layout>
	)
}


export default Index