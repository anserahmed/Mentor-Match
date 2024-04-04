
import React from "react";
import ProfileCard from "./ProfileCard";
import ProfilePosts from "./ProfilePosts";
export default function MentorProfile() {
  return (
    <div className="bg-zinc-900">
      <ProfileCard />
      <ProfilePosts />
    </div>
  );
}