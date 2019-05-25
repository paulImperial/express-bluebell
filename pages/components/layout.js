import React, { Component } from "react";
import Header from "./header";
import Head from "./head";

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: "1px solid #DDD"
};

const Layout = props => (
	<main>
		<props.children />
	</main>
);

export default Layout;
