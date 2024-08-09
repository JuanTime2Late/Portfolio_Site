import NavBar from "./navBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800">
        <NavBar />
        <div className="flex h-screen items-center"> 
          <div className="flex justify-center items-center h-5/6 w-screen bg-radial-center shadow-zinc-950 text-white 
          shadow-[0_-7px_10px_-1px_rgba(0,0,0,0.1),_0_7px_10px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-center ml-5 mr-5">
              <div className="grid border border-dashed rounded-2xl border-zinc-800 bg-zinc-950 justify-center w-1/2 px-4 py-10 animate-slideIn bg-opacity-30">
                <h1 className="ml-20 mb-4 justify-self-start text-5xl font-extrabold animate-fadeIn">About me</h1>
                <p className="animate-slideInSlower text-balance sm:text-xs md:text-sm lg:text-lg xl:text-xl"> 
                  I am eager to utilize my skills in programming, problem-solving, and project management 
                  and excited to contribute to innovative projects and dynamic teams. 
                  My academic journey has equipped me with skills in various programming languages, software development methodologies, and modern technologies. 
                  Anything involving scalability, efficiency, and user-friendly solutions is synonymous with my drive to improve and participate.
                </p>
              </div>
              <div className="flex justify-center sm:h-32 md:h-96 lg:h-[40rem] w-1/2">
                <Image className="animate-slideInL rounded-lg h-full w-auto" src="./imgs/J1.jpg" alt="Juan Vera" ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
