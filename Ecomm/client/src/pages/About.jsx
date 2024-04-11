import Navbar from "../components/Navbar";
const headerImg = [
  {
    name: "1",
    Img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "2",
    Img: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "3",
    Img: "https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "4",
    Img: "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-20">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ABOUT US | Why choose us?
            </h1>
            <p className=" text-lg leading-8 text-gray-600 p-3">
              We pride ourselves on delivering an unparalleled shopping
              experience that combines the convenience of online retail with the
              luxury of exploring a high-end fragrance boutique. Here's what
              sets us apart:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {headerImg.map((item) => (
                <img src={item.Img} key={item.name} />
              ))}
            </div>
            <p className=" text-lg leading-8 text-gray-600 p-3">
              we invite you to explore the art of fragrance and make every day
              an aromatic celebration. Whether you're treating yourself or
              searching for the perfect gift, embark on a scented journey with
              us. Elevate your senses, define your essence – because with the
              right perfume, every moment becomes unforgettable.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
