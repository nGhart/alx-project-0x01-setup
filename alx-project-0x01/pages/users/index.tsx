import UserCard from "@/components/common/UserCard";
import React from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const Users = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <UserCard
          id={post.id}
          name={post.name}
          username={post.username}
          email={post.email}
          phone={post.phone}
          website={post.website}
          // street={post.address.street}
          // suite={post.address.suite}
          // city={post.address.city}
          // zipcode={post.address.zipcode}
          // lat={post.geo.lat}
          // lng={post.geo.lng}
          // name={post.company.name}
          // catchPhrase={post.company.catchPhrase}
          // bs={post.company.bs}
        />
      ))}
    </div>
  );
};

export default Users;
