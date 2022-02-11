import { NextPage } from "next";
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
	return (
		<Html lang="en">
			<Head />
			<body className="scroll-bar">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document;