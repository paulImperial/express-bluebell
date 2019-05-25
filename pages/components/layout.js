import React, { Component } from "react";
import Header from "./header";
import Head from "./head";

const LayoutStyle = {
	margin: 20,
	padding: 20,
	border: "1px solid #DDD"
};

const Layout = props => (
	render(){
		return 
	<main>
	<props.children />
</main>
)
	}

export default Layout;
