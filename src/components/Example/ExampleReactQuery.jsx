import React from "react";
import { useQuery } from "react-query";
const randomUser = Math.floor(Math.random() * 100);
const url = `https://dummyjson.com/users/${randomUser}`;

const ExampleComponent = () => {
  // Define a query function to fetch data
  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Use the useQuery hook to execute the query
  const { data, isLoading, error } = useQuery("user", fetchUser);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Firstname: {data.firstName}</p>
      <p>Lastname: {data.lastName}</p>
    </div>
  );
};

export default ExampleComponent;
