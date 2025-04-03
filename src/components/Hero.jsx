const Hero = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            A smile can change your day
          </h1>
          <div className="w-full max-w-xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for topics, people, and stories.."
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
