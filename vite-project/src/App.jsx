import { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./assets/TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: true,
  },
  {
    userName: "otro",
    name: "Nombre Completo",
    isFollowing: false,
  },
  {
    userName: "otromas",
    name: "Nombre Completo",
    isFollowing: false,
  },
  {
    userName: "otro3",
    name: "Nombre Completo",
    isFollowing: true,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
            <TwitterFollowCard
                key = {userName}
                userName = {userName}
                name = {name}
                initialIsFollowing = {isFollowing}
            
            />
        )
      })}
    </section>
  );
}

export default App;
