// Here we imported avatar and info to profile
import { Avatar } from "./Avatar";
import { Info } from "./Info";

export function Profile({ name, title, location, moreInfo, avatar }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center mt-3.5">
      <Avatar src={avatar} alt={name} />
      <Info name={name} title={title} location={location} />
    </div>
  );
}
