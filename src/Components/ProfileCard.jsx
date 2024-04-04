import React from "react";

export default function ProfileCard() {
  return (
    <div class=" dark:bg-gray-700 bg-zinc-900 py-5">
      {/* <!-- Card start --> */}
      <div class="max-w-sm mx-auto hover:bg-zinc-800 dark:bg-gray-900 rounded-lg overflow-hidden">
        <div class=" px-6 pb-4">
          <div class="text-center my-4">
            <img
              class="h-32 w-32 rounded-full border-4 border-red-500 dark:border-gray-800 mx-auto my-4"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt=""
            />
            <div class="py-2">
              <h3 class="font-bold text-2xl text-zinc-200 dark:text-white mb-1">
                Anser Ahmed
              </h3>
              <div class="inline-flex text-red-500 dark:text-gray-300 items-center">
              <i class="ri-at-line"></i> anserahmed
              </div>
            </div>
          </div>
          <div class="flex gap-2 px-2">
            <button class="flex-1 rounded-full bg-red-600 dark:bg-red-800 text-white dark:text-white antialiased font-bold hover:text-black hover:bg-white dark:hover:bg-white px-4 py-2">
              Follow
            </button>
            <button class="flex-1 rounded-full border-2 border-red-500 dark:border-red-700 font-semibold text-red-500 dark:text-red hover:border-zinc-200  hover:text-zinc-200 px-4 py-2">
              Message
            </button>
          </div>
        </div>

        <div class="px-4">
          <div class="flex gap-2 items-center px-4 text-zinc-400 dark:text-zinc-200 mb-4">
            <svg
              class="h-6 w-6 text-red-500 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                class=""
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <span >
              <strong class="text-zinc-400 dark:text-white">12</strong> Followers
              you know
            </span>
          </div>
        
        </div>
      </div>
      {/* <!-- Card end --> */}
    </div>
  );
}
