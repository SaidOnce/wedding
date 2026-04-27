import "./index.css"
import { useEffect, useRef, use } from "react";

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

  return (
    <div className="text-red-500">
      <audio ref={audioRef} loop>
        <source src="/sound.mp3" type="audio/mpeg" />
      </audio>
      Ассаламу алейкум!
С радостью и благодарностью приглашаем вас разделить с нами один из самых важных и счастливых дней в нашей жизни — день нашей свадьбы.

В этот особенный день мы хотим окружить себя близкими и дорогими людьми, чьё присутствие наполнит праздник теплом, радостью и искренними улыбками

    </div>
  );
}

export default App;