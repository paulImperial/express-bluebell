import React, { Component } from "react";
import NextHead from "next/head";

const Head = props => {
	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="shortcut icon"
				href="../images/favicon.ico"
				type="image/x-icon"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css"
			/>
			<title>{props.title}</title>
		</NextHead>
	);
};

export default Head;
