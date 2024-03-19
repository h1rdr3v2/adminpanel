import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div
			style={{ flexDirection: "column", gap: 20 }}
			className="cs-container"
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error occured</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
