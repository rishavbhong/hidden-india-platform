import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white space-y-6">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Discover Hidden India
          </h1>

          <p className="text-gray-200 text-base md:text-lg">
            Explore offbeat destinations verified by locals.
            Connect with trusted guides. Experience authentic India safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              variant="primary"
              className="px-8 py-3 text-base"
              onClick={() => navigate("/explore")}
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              className="px-8 py-3 text-base"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
