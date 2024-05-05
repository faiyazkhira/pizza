import CreateUser from "../features/user/CreateUser";
import videoBg from "../assets/PizzaHD.mp4";

function Home() {
  return (
    <div className="fixed inset-10">
      <div className="my-10 text-center sm:my-16">
        <div className="relative w-full">
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="h-[300px] w-screen object-cover"
          />
        </div>
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Out of the oven, straight to you.
          </span>
        </h1>

        <CreateUser />
      </div>
    </div>
  );
}

export default Home;
