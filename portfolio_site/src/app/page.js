import Image from "next/image";
import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center bg-zinc-900 shadow-white 
      shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.9)]"> 
        <div className="flex justify-center items-center h-5/6 w-screen bg-black shadow-zinc-950 text-white 
        shadow-[0_-7px_10px_-1px_rgba(0,0,0,0.1),_0_7px_10px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex ml-5 mr-5 justify-evenly">
            <div className="flex justify-center w-1/2">
              <p>
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
