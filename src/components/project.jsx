import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
  return (
    <div
      key={project.id}
      className={`w-screen h-screen bg-gradient-to-b from-red-100 to-blue-100 flex justify-center items-center`}
    >
      <div className="rounded-md shadow-xl w-full lg:w-2/4 gap-6 flex flex-col p-8 m-2">
        <div className="h-[100px] sm:h-[300px] w-full relative">
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="object-cover sm:object-fill shadow-md rounded"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h1 className="text-3xl md:text-4xl text-stone-900 font-semibold tracking-wider uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-500">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 text-center font-semibold">
            {project.liveLink && <Link target="_blank" href={project.liveLink} className="p-2 md:p-4 bg-gradient-to-r from-purple-500 to-orange-200 shadow-md rounded text-white uppercase">SEE LIVE</Link>}
            {project.codeLink && <Link target="_blank" href={project.codeLink} className="p-2 md:p-4 bg-white shadow-md rounded text-black uppercase">SEE CODE</Link>}
            
        </div>
      </div>
    </div>
  );
}

export default Project;
