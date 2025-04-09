export function Footer(props) {
	const { message } = props;
	return (
		<footer className="bg-gray-200 text-center text-sm p-4 mt-6">
			{message}
		</footer>
	);
}
