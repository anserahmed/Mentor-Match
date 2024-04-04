import picnav from "../asstes/picnav.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav class="  py-3 bg-footer border-solid shadow-2xl min-h-20 max-h-20">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" class="max-h-14 min-h-8 flex items-center">
            <span class="self-center  text-xl font-semibold whitespace-nowrap pt-2 text-white">
              <img src={picnav} class=" max-h-44 min-h-44" alt="M M Logo" />
            </span>
          </Link>

          {/* <div id="search-bar" class="self-center rounded-md">
            <input
              type="text"
              placeholder="Search here"
              class=" rounded-md  py-1 focus:outline-none    focus:border-transparent"
            />
            <button
              type="submit"
              class="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Search
            </button>
          </div> */}

          <div class="flex items-center pt-2 lg:order-2">
            <Link
              to="/login"
              class="text-white  bg-red-700 hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-1 sm:mr-2 lg:mr-0 dark:bg-red-600 dark:hover:bg-red-500 "
            >
              Login <i class="ri-login-box-line"></i>
            </Link>

            {/* <!-- Profile icon  --> */}
            <div class="relative ml-3 hover:focus:ring-red-600">
              <div>
                <Link
                  to="/profile"
                  type="button"
                  class="relative flex rounded-full bg-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {" "}
                  <span class="absolute -inset-1.5 hover:focus:ring-red-600"></span>
                  <span class="sr-only hover:focus:ring-red-600">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full hover:focus:ring-red-600"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
