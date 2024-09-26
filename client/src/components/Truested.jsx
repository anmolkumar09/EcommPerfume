const Trusted = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center">
          Trusted By 1000+ People
        </h2>
        <p
          className="mt-8 text-gray-600 text-center max-w-screen-md mx-auto leading
        7"
        >
          We’ve built a reputation for helping small and medium sized businesses
          grow. Here are some of our trusted clients.
        </p>

        {/* Review's Sections */}
        <div className="grid grid-cols-1 gap-4 sm:flex mt-1">
          <div className="bg-gray-200 flex items-center justify-center flex-col text-center p-1 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/5726812/pexels-photo-5726812.jpeg?auto=compress&cs=tinysrgb&w=100"
              className="rounded-full"
            />
            <h2>Alice</h2>
            <p className="text-sm text-gray-600">
              {" "}
              Absolutely love this fragrance! It's light, refreshing, and lasts all day.
            </p>
          </div>
          <div className="bg-gray-200 flex items-center justify-center flex-col text-center p-1 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/1903308/pexels-photo-1903308.jpeg?auto=compress&cs=tinysrgb&w=150"
              className="rounded-full "
            />
            <h2>Anisha</h2>
            <p className="text-sm text-gray-600">
              {" "}
              One of the best perfumes I’ve tried. Compliments keep coming!
            </p>
          </div>
          <div className="bg-gray-200 flex items-center justify-center flex-col text-center p-1 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=100"
              className="rounded-full"
            />
            <h2>Akansha</h2>
            <p className="text-sm text-gray-600">
              {" "}
              It’s fresh and elegant, I feel confident every time I wear it!
            </p>
          </div>
          <div className="bg-gray-200 flex items-center justify-center flex-col text-center p-1 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/3783107/pexels-photo-3783107.jpeg?auto=compress&cs=tinysrgb&w=100"
              className="rounded-full"
            />
            <h2>Rita</h2>
            <p className="text-sm text-gray-600">
              {" "}
              Ghis scent is heavenly! So fresh, feminine, and classy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
