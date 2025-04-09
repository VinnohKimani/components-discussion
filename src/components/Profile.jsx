// Here we imported avatar and info to profile
import { Avatar } from "./Avatar";
import { Info } from "./Info";

export function Profile() {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
      <Avatar></Avatar>
      <Info name="Kasongo" title="Thief" location="Nairobi" />
    </div>
  );
}
