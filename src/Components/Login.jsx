import picui from "../asstes/picui.png";
import "../index.css"
import { Link } from "react-router-dom";
export default function Example() {
  return (
    <>
      <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/feed">
            <img
              className="mx-auto h-10 w-auto"
              src={picui}
              alt="Mentor Match"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-200">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-zinc-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-zinc-300"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="#"
                    className="font-semibold text-red-600 hover:text-red-100"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-300">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-red-600 hover:text-zinc-200"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
