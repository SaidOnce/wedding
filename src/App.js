import "./index.css"
import { useEffect, useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener("click", handleClick, { once: true });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const [open, setOpen] = useState(false);


  return (
    <div className="text-red-500">
      <audio ref={audioRef} loop>
        <source src="/sound.mp3" type="audio/mpeg" />
      </audio>


    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-80 h-52">

        {/* Верхняя часть */}
        <div
          className={`absolute top-0 left-0 w-full h-1/2 bg-red-400 origin-bottom transition-transform duration-700 ${
            open ? "-translate-y-full rotate-12" : ""
          }`}
        ></div>

        {/* Нижняя часть */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1/2 bg-red-500 transition-transform duration-700 ${
            open ? "translate-y-full" : ""
          }`}
        ></div>

        {/* Печать / кнопка */}
        <button
          onClick={() => setOpen(true)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center z-10"
        >
          Войти
        </button>

      </div>
    </div>
 
    </div>
  );
}

export default App;