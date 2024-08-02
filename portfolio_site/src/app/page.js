import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center bg-zinc-900 shadow-white 
      shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.9)]"> 
        <div className="flex justify-center items-center h-5/6 w-screen bg-radial-center shadow-zinc-950 text-white 
        shadow-[0_-7px_10px_-1px_rgba(0,0,0,0.1),_0_7px_10px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-center ml-5 mr-5">
            <div className="grid border border-dashed rounded-2xl border-zinc-800 bg-zinc-950 justify-center w-1/2 px-4 py-10 animate-slideIn bg-opacity-30">
              <h1 className="ml-20 mb-4 justify-self-start text-5xl font-extrabold animate-fadeIn">About me</h1>
              <p className="animate-slideInR text-balance sm:text-xs md:text-sm lg:text-lg xl:text-xl"> 
                I am eager to utilize my skills in programming, problem-solving, and project management 
                and excited to contribute to innovative projects and dynamic teams. 
                My academic journey has equipped me with skills in various programming languages, software development methodologies, and modern technologies. 
                Anything involving scalability, efficiency, and user-friendly solutions is synonymous with my drive to improve and participate.
              </p>
            </div>
            <div className="flex justify-center h-1/2 w-1/2 bg-red-800">
              <img className="rounded-lg max-h-screen w-auto" src="./imgs/J1.jpg" alt="Juan Vera" ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
