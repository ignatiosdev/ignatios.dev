import React from "react";
import Button from "./../Button/Button";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="flex flex-col text-center gap-5 ">
      <div className="w-40 h-40 container-default mx-auto ">profile pic</div>

      <div>
        <h1 className="text-3xl mb-1.5">Ignacio Cattalurda</h1>
        <span className="text-subtitle">
          Full-stack developer - Maldonado, Uruguay
        </span>
      </div>
      <div className="text-subtitle">
        <p>
          I'm a self-taught developer, who likes to create interesting projects
          that can help people do their chores more easily and fast.
        </p>
      </div>

      <div className="w-1/2 mx-auto mt-2.5">
        <Button text="GET IN TOUCH"></Button>
        </div>
    </div>
  );
}

export default Profile;
