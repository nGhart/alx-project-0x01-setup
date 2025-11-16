import { UserData } from "@/interfaces";
import React, { useState } from "react";

interface UserModalProps {
  onClose: () => void;
  onSubmit: (newUser: UserData) => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: null,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => {
      const keys = name.split(".");
      let temp: any = { ...prev };
      let obj = temp;

      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;
      return temp;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-[700px]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="street"
                className="block text-gray-700 font-medium mb-2"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter street"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="suite"
                className="block text-gray-700 font-medium mb-2"
              >
                Suite
              </label>
              <input
                type="text"
                id="suite"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter suite"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-medium mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipcode"
                className="block text-gray-700 font-medium mb-2"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zipcode"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lat"
                className="block text-gray-700 font-medium mb-2"
              >
                Latitude
              </label>
              <input
                type="text"
                id="lat"
                name="address.geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter latitude"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lng"
                className="block text-gray-700 font-medium mb-2"
              >
                Longitude
              </label>
              <input
                type="text"
                id="lng"
                name="address.geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter longitude"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="website"
                className="block text-gray-700 font-medium mb-2"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="catchPhrase"
                className="block text-gray-700 font-medium mb-2"
              >
                Catchphrase
              </label>
              <input
                type="text"
                id="catchPhrase"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company catchPhrase"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bs"
                className="block text-gray-700 font-medium mb-2"
              >
                Slogan
              </label>
              <input
                type="text"
                id="bs"
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company slogan"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
