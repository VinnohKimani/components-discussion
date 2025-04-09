export function Header(props) { //inline Destructuring
	const {title} = props;
	return (
		<header className="bg-blue-600 text-white p-4 shadow-md">
			<h1 className="text-xl font-semibold">{title}</h1>
		</header>
	);
}
