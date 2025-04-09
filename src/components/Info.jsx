export function Info({ name, title, location }) {
  // This is a child to Profile we used props in order to access the info
  return (
    <div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{title}</p>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  );
}
