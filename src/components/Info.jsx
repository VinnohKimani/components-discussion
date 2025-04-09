export function Info(props) {
	// This is a child to Profile we used props in order to access the info 
  return (
	  <div>
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p className="text-gray-600">{props.title}</p>
      <p className="text-gray-500 text-sm">{props.location}</p>
    </div>
  );
}
