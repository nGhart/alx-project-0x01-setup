import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import React, { useState } from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

const Users = ({ users }: { users: UserData[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: users.length + 1 });
  };
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white"
        >
          Add User
        </button>
      </div>
      {users.map((post: UserData, index: number) => (
        <UserCard
          id={post.id}
          name={post.name}
          username={post.username}
          email={post.email}
          phone={post.phone}
          website={post.website}
          street={post.address.street}
          suite={post.address.suite}
          city={post.address.city}
          zipcode={post.address.zipcode}
          lat={post.address.geo.lat}
          lng={post.address.geo.lng}
          companyName={post.company.name}
          catchPhrase={post.company.catchPhrase}
          bs={post.company.bs}
        />
      ))}
    </div>
  );
};

export default Users;
