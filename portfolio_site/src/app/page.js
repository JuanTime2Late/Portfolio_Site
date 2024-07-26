import Image from "next/image";
import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center bg-zinc-900 shadow-white 
      shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.9)]"> 
        <div className="flex justify-evenly items-center h-5/6 w-screen bg-black shadow-zinc-950 text-white 
        shadow-[0_-7px_10px_-1px_rgba(0,0,0,0.1),_0_7px_10px_-1px_rgba(0,0,0,0.1)]">
          <p>Recent Computer Science Bachelor graduate with great enthusiasm for learning and programming.</p>
          <img className=" h-12 w-32" src="JuanVera3d.png" alt="Juan Vera" ></img>
        </div>
      </div>
    </>
  );
}
