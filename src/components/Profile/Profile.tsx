import React from "react";

import ProfilePicture from "./../ProfilePicture/ProfilePicture";
import profileImg from "../../assets/img/profileImage.png";
import ActionButton from "./../ActionButton/ActionButton";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="flex flex-col text-center gap-4 container-default">
      <ProfilePicture profileImg={profileImg}></ProfilePicture>

      <div>
        <h1 className="text-3xl font-bold">Ignacio Cattalurda</h1>
        <span className="text-subtitle text-sm ">
          Full-stack developer - Maldonado, Uruguay
        </span>
      </div>
      <div className="text-subtitle">
        <p>
          I code for us to be more efficient, for life to be easier, and for our
          time to be more enjoyable.
        </p>
      </div>

      <div className="w-1/2 mx-auto mt-2.5 ">
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}

export default Profile;
