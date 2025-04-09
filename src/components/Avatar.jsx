export function Avatar({ src, alt }) {
	return (
    <img
      src={
        (src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNarWcg5j8UmFHsLxd_k4CUI-SfM9YbxBkxg&s")
      }
      alt={alt="Kasongo"}
      className="w-20 h-20 rounded-full border-2 border-blue-500"
    />
  );
}