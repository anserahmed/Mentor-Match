import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Profile from "./MentorProfile";
function Feed() {
  return (
    <>
      <div class="flex h-screen bg-light">
        {/* <!-- sidebar --> */}
        <Sidebar />

        {/* <!-- Main content --> */}

        <div class="flex flex-col flex-1 py-2 bg-dark overflow-y-auto">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
      <hr class=" text-zinc-400 opacity-30 "></hr>
    </>
  );
}

export default Feed;
