import React, { useState } from "react";
import { useMount } from "react-use";

export const Index = () => {
  const [data, setData] = useState(null);

  useMount(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  });

  return <div>{data === null ? <p>Loading...</p> : <p>{data.title}</p>}</div>;
};
export default Index;
