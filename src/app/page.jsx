import Image from "next/image";
import PageTransitionProvider from "@/components/pageTransitionProvider";
import Link from "next/link";

const Homepage = () => {
  return (
    <PageTransitionProvider>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-[75vh] w-1/2 lg:h-100vh relative self-center">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Image container */}

        {/* Text Container */}
        <div className=" lg:h-100vh lg:w-1/2 flex flex-col gap-8 justify-center self-center items-start p-2">
          <h1 className="text-4xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="text-xl">
          Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.                                                                                                                                                                                                                                                                                           
          </p>
          <div className="flex gap-4 justify-between w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-transparent hover:text-black  transition-all uppercase"
            >
              See My Projects
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/drive/folders/1O5LZlNyXGnVtjKSYXurhmqXvAZE2t1lW?usp=drive_link"
              className="p-2 md:p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white transition-all uppercase"
            >
              See My Certificates
            </Link>
          </div>
        </div>
        {/* Text Container */}
      </div>
    </PageTransitionProvider>
  );
};

export default Homepage;
