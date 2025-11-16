import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import { useState } from "react";

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

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">User Content</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white"
        >
          Add User
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 ">
        {users.map((user: UserData, index: number) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
