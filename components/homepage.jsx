const SidebarLeft = () => {
  return (
    <div className="hidden md:block w-1/4">
      {/* Login Card */}
      <div className="hidden lg:block p-4 bg-white shadow-md mb-4">
        <h5 className="text-xl font-bold mb-2">
          DEV Community is a community of 1,666,666 amazing developers
        </h5>
        <p className="text-gray-600 mb-4">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline-primary border-2 py-1 px-4">
            Create account
          </button>
          <a href="/login" className="w-full">
            <button className="btn bg-blue-500 text-white w-full py-1">
              Log in
            </button>
          </a>
        </div>
      </div>

      {/* Menu List */}
      <div className="mb-6">
        <ul className="flex flex-col gap-3 text-start">
          <li>
            <a href="/" className="flex items-center gap-2 text-gray-700">
              <img src="/icons8-home-30.png" alt="Home" />
              Home
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2 text-gray-700">
              <img src="/icons8-book-30.png" alt="Reading List" />
              Reading List
            </a>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>

      {/* My Tags */}
      <div className="my-6">
        <h5 className="font-bold text-lg">My Tags</h5>
        <div className="scrollspy-example bg-gray-100 p-3 mt-3 rounded-2">
          <p>#myTags</p>
          <p>#myTags</p>
          <p>#myTags</p>
        </div>
      </div>

      {/* DEV Community Card */}
      <div className="bg-white shadow-md p-4">
        <h4 className="text-lg font-semibold">DEV Community</h4>
        <p className="text-gray-600 mt-2">
          Easiest way to help the DEV community feel more like a community? Head
          over to our
          <a href="/" className="text-blue-500">
            {" "}
            Welcome Thread{" "}
          </a>
          to greet new members!
        </p>
      </div>
    </div>
  );
};

const CentralColumn = () => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="flex space-x-4 mb-4">
        <button className="btn bg-gray-200 px-4 py-1">Relevant</button>
        <button className="btn bg-gray-200 px-4 py-1">Latest</button>
        <button className="btn bg-gray-200 px-4 py-1">Top</button>
      </div>
      <div id="main-post" className="bg-white border shadow-sm p-4">
        {/* Posts will be dynamically rendered here */}
      </div>
    </div>
  );
};

const SidebarRight = () => {
  return (
    <div className="hidden md:block w-1/4 p-4">
      <p className="font-monospace text-gray-500 text-start">
        Trending guides/resources
      </p>
      <div className="list-group">{/* Trending content will go here */}</div>
      <div className="card p-4 mt-4 bg-white shadow-sm">
        {/* Other content */}
      </div>
    </div>
  );
};

const HomeLayout = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row my-8">
      <SidebarLeft />
      <CentralColumn />
      <SidebarRight />
    </div>
  );
};

export default HomeLayout;
