export function Avatar({ src, alt }) {
	return (
    <img
      src={ (src) }
      alt={alt}
      className="w-20 h-20 rounded-full border-2 border-blue-500"
    />
  );
}