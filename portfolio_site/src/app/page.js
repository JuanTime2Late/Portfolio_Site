import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center bg-zinc-900 shadow-white 
      shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.9)]"> 
        <div className="flex justify-center items-center h-5/6 w-screen bg-radial-center shadow-zinc-950 text-white 
        shadow-[0_-7px_10px_-1px_rgba(0,0,0,0.1),_0_7px_10px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex ml-5 mr-5 justify-evenly">
            <div className="grid border border-dashed rounded-2xl border-zinc-800 bg-zinc-950 justify-center w-1/2 px-4 py-10 animate-slideIn bg-opacity-30">
              <h1 className="ml-20 mb-4 justify-self-start text-5xl font-extrabold animate-fadeIn">About me</h1>
              <p className="animate-slideInR">
                Placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder
              </p>
            </div>
            <div className="flex justify-center w-1/2">
              <img className="h-200 w-320" src="JuanVera3d.png" alt="Juan Vera" ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
