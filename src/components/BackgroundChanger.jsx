import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black rounded-xl px-3 py-2">
            <button onClick={()=>setColor("red")}
              className="outline-none px-4 py-1 rounded-xl text-white shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button onClick={()=>setColor("blue")}
              className="outline-none px-4 py-1       rounded-xl text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button onClick={()=>setColor("yellow")}
              className="outline-none px-4 py-1       rounded-xl text-black shadow-sm"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button onClick={()=>setColor("green")}
              className="outline-none px-4 py-1       rounded-xl text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button onClick={()=>setColor("olive")}
              className="outline-none px-4 py-1       rounded-xl text-black shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundChanger;
