import { UserData } from "@/interfaces";

const UserCard = ({ user }: { user: UserData }) => {
  return (
    <div className="max-w-md w-full mx-auto rounded-2xl shadow-md p-6 bg-white border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.username}</p>

      <div className="mt-4 space-y-3 text-sm text-gray-700">
        <div>
          <p className="font-medium text-gray-900">Contact</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>

        <div>
          <p className="font-medium text-gray-900">Address</p>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city} {user.address.zipcode}
          </p>
          <p>
            Lat: {user.address.geo.lat} Lng: {user.address.geo.lng}
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>
          <p>{user.company.name}</p>
          <p className="italic text-gray-600">“{user.company.catchPhrase}”</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
