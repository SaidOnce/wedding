import "./index.css"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import startImg from "./start.jpeg"
import endImg from "./end.jpeg"
import dateImg from "./date.jpeg"



function App() {
  const targetDate = new Date("2026-06-26T18:00:00"); // 👈 твоя дата события

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  //TIMER END
  const audioRef = useRef(null);
  useEffect(() => {
    
  const audio = audioRef.current;

  return () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };
}, []);

  useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden && audioRef.current) {
      audioRef.current.pause();
    }
  };
  document.addEventListener("visibilitychange", handleVisibilityChange);
  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleClick = () => { if (audioRef.current) { audioRef.current.play(); } };


  const [open, setOpen] = useState(false);
  const [canClick, setCanClick] = useState(false);

  useEffect(() => {
  if (!open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  // anketa
  
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (name.length < 4){
        alert("Минимальная длина имени 3 символа")
        return
      } 
      if (status === ""){
        alert("Выберите 'Приду' если придёте или 'Не приду' если нет")
        return
      } 
      await fetch("https://script.google.com/macros/s/AKfycbyzWWwEoA9QIFb8cbp64Kx-Ox8Le6jJWy7Y9VwtCDyFMt4enY74STcrDWjAFTlsfC23/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name,
          status,
        }),
      });

      alert("Отправлено ❤️");

    } catch (error) {
      alert("Ошибка отправки");
      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <audio ref={audioRef} loop>
        <source src="/sound.mp3" type="audio/mpeg" />
      </audio>
      
      
      <div className={`${open ? "opacity-100" : "opacity-0"} transition duration-500 relative`}>
  
  <div className="relative">
    <img src={startImg} alt="" className="w-full" />
    <div className="absolute inset-0 h-screen flex flex-col items-center justify-center text-white text-center -translate-y-56 gap-4">
    <p
      className="text-5xl md:text-8xl drop-shadow-lg"
      style={{ fontFamily: "Great Vibes, cursive" }}>
      Рашид & Инара
    </p>
    <p
      className="text-4xl md:text-7xl drop-shadow-lg"
      style={{ fontFamily: "Great Vibes, cursive" }}>
      26/06/26
    </p>
    
  </div>
  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-[#353535]" />
  </div>

  
     
    <div className="h-[100vh] text-center bg-gradient-to-b from-[#353535] to-gray-100 relative flex  items-center">

      <div className="flex flex-col gap-20 translate-y-32">
        <div>
          
          {open ? (<div className="flex flex-col gap-5" style={{fontFamily: "Playfair Display, serif"}}>
            <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1.5, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: .75 }}
            className="text-xl"
          >
            <div className="text-4xl italic text-white">
              ДОРОГИЕ ГОСТИ!
            </div>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 2, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: .75 }}
            className="text-xl"
          >
            <div className="
            text-4xl italic text-white">
              Ассаламу алейкум!
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 2.5, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: .75 }}
            className="text-xl"
          >
            <div className="text-3xl italic">
              الـسَّـلَامُ عَـلَـيْـكُـمْ
            </div>
          </motion.div>
          </div>): (<div></div>)}

        </div>

        <div className="px-1 flex flex-col gap-7 text-center" 
        style={{fontFamily: "Playfair Display, serif"}}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: false, amount: .75 }}
            className="text-xl px-2"
          >
            <div className="text-xl italic">
          С радостью и благодарностью приглашаем вас разделить с нами один из самых важных и счастливых дней в нашей жизни — день нашей
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: .75 }}
            className="text-xl"
          >
            <div className="text-4xl italic font-bold"
            style={{ fontFamily: "Great Vibes, cursive" }}>
              свадьбы!
            </div>
          </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1.4, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: .75 }}
            className="text-xl"
          >
            <div className="text-xl italic px-2">
    В этот особенный день мы хотим окружить себя близкими и дорогими людьми, чьё присутствие наполнит праздник теплом, радостью и искренними улыбками

            </div>
          </motion.div>

        </div>
      </div>
    </div>

  <div>
    <img src={dateImg} alt="" className="w-full" />
  </div>

  <div className="flex gap-8 flex-col items-center justify-center bg-gray-100 py-24">
    <div className="text-4xl" style={{fontFamily: "Playfair Display, serif"}}>НАЧАЛО</div>
    <div className="w-1 h-16 bg-black mx-4"></div>
    <div className="text-3xl" style={{fontFamily: "Playfair Display, serif"}}>18:00</div>
    <div className="flex flex-col gap-10 text-center mt-5 text-3xl"
    style={{fontFamily: "Playfair Display, serif"}}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false, amount: .6 }}
            className=""
          >
                  Место проведения
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: .75 }}
            className=""
          >
                  Ресторан «Камалия»
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: .75 }}
            className=""
          >
                  Кульджинский тракт 98
          </motion.div>
    </div>
  </div>

  <div className="relative h-full">
    <img src={endImg} alt="" className="w-full" />
    <div className="absolute inset-0 top-96 flex item-center justify-center">

<div className="flex gap-2 text-white text-3xl font-semibold">
  <div className="text-center">
    <div className="text-3xl text-yellow-300">{timeLeft.days}</div>
    <div className="text-2xl ">Дней</div>
  </div>
:
  <div className="text-center">
    <div className="text-3xl text-yellow-300">{timeLeft.hours}</div>
    <div className="text-2xl">Часов</div>
  </div>
:
  <div className="text-center">
    <div className="text-3xl text-yellow-300">{timeLeft.minutes}</div>
    <div className="text-2xl ">Минут</div>
  </div>
:
  <div className="text-center">
    <div className="text-3xl text-yellow-300">{timeLeft.seconds}</div>
    <div className="text-2xl ">Секунд</div>
  </div>
</div>

    </div>
  </div>

</div>

      {!open && (
        <div className="bg-white absolute inset-0 h-screen w-full flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ y: -480, x: 0, rotate: 0, opacity: 1 }}
        animate={{
          y: 0,
          x:      [0, 80, -70, 60, -50, 30, -30, 5, 0],
          rotate: [0, -13, 13, -10, 8, -5, 3, -1 ,0],
          scale:  [1,  1,  1,  1,  1,  1, 1, 1, 1.1]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          delay: .5
        }}
        onAnimationComplete={() => setCanClick(true)}
        className="w-40 h-24 bg-red-400 rounded-md flex items-center justify-center">
        <div className="h-[100dvh] w-full  relative overflow-hidden">
        <div
          onClick={() => {
            canClick && setOpen(true);
            canClick && handleClick();
          }}
          className={` rounded-[33%] overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${open ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
          style={{width: "50vw",maxWidth: "220px",height: "20vh",maxHeight: "140px"}}>
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <polygon points="0,60 100,60 50,35" fill="#ef4444" />
            <polygon points="0,0 0,60 50,35" fill="#dc2626" />
            <polygon points="100,0 100,60 50,35" fill="#b91c1c" />
            <polygon points="0,0 100,0 50,35" fill="#f87171" />
            <g transform="translate(55 35) scale(0.6) translate(-25 -20)" >
            <path d="M32.476 21.844c1.626 -0.422 2.047 -2.469 0.361 -3.192 -0.482 -0.181 -0.422 -0.843 0.121 -0.903 0.482 -1.385 0.361 -1.927 -0.422 -1.746 -0.241 0 -0.301 -0.181 -0.241 -0.422 -0.12 -0.06 -0.301 -0.181 -0.301 -0.301s0 -0.181 0.12 -0.301c0.542 -0.482 1.144 -0.903 1.204 -1.686 0.06 -1.024 -0.783 -1.626 -1.686 -1.806 -0.421 -0.06 -0.421 -0.602 -0.12 -0.783 1.385 -0.903 -0.361 -2.047 -1.144 -2.047h-0.06c-0.301 0.241 -0.783 -0.241 -0.542 -0.542 0.422 -0.602 0.783 -1.204 0.482 -1.927 -0.361 -0.783 -1.204 -1.084 -2.047 -0.903 -0.301 0.06 -0.662 -0.181 -0.542 -0.542 0.422 -1.265 -1.024 -1.867 -1.867 -1.084 -0.06 0.06 -0.181 0.12 -0.241 0.06v0.06c-0.12 0.241 -0.542 0.12 -0.542 -0.12 0 -0.723 0.06 -1.204 -0.542 -1.686 -0.662 -0.542 -1.445 -0.301 -1.987 0.301 -0.06 0.06 -0.121 0.12 -0.241 0.12s-0.301 -0.12 -0.361 -0.241q-0.09 -0.542 -0.361 -1.084c-0.181 -0.361 -0.963 -0.843 -1.445 -0.602 0 0.241 0 0.422 -0.06 0.662 -0.121 0.241 -0.422 0.241 -0.482 0 -0.12 -0.542 -0.482 -0.783 -1.144 -0.723 -0.542 -0.542 -1.024 -0.542 -1.325 0 -0.361 0.301 -0.542 0.662 -0.723 1.084 -0.12 0.241 -0.602 0.301 -0.723 0.12 -1.325 -1.686 -3.372 -0.662 -3.673 1.204 -0.06 0.241 -0.241 0.241 -0.422 0.181 -0.06 0.181 -0.301 0.301 -0.482 0.241 -0.602 -0.12 -3.613 -0.06 -2.89 1.445 0.181 0.361 -0.121 0.903 -0.602 0.783 -1.987 -0.662 -2.83 1.265 -2.288 2.89 0 0.12 0 0.181 -0.06 0.241 0.06 0.241 -0.12 0.482 -0.361 0.542 -1.867 0.181 -2.65 1.505 -1.927 3.252 0.06 0.241 -0.12 0.542 -0.361 0.602 -1.445 0.181 -1.927 2.469 -0.843 3.432h0.482c0.241 0.06 0.241 0.422 0.06 0.482 -1.746 1.084 -1.144 2.71 0.181 3.854 0.121 0.121 0.181 0.422 0.06 0.542 -0.241 0.361 -0.482 0.723 -0.662 1.144 -0.482 1.084 0.06 1.746 1.505 2.108h0.181c0.06 0 0.06 -0.06 0.12 -0.06 0.121 -0.06 0.301 0.06 0.361 0.181v0.181c-0.241 0.602 -0.662 1.084 -0.723 1.746 0 1.204 1.144 2.047 2.288 1.867 0.422 -0.06 0.723 0.482 0.301 0.723 -1.204 0.723 -0.301 1.927 0.723 2.047 0.301 0.06 0.662 0 0.963 0 0.12 -0.12 0.301 -0.241 0.482 -0.301 0.241 -0.06 0.422 0.181 0.301 0.421 -0.301 0.542 0.12 1.325 0.542 1.686 0.723 0.542 1.686 0.181 2.228 -0.482 0.301 -0.361 0.843 -0.06 0.662 0.361q-0.632 0.723 0.181 1.265c0.121 0.482 0.422 0.662 0.783 0.542 0.482 0 1.204 -0.361 1.505 -0.723 0 0 0.06 0 0.06 -0.06 0 -0.241 0.12 -0.482 0.301 -0.723 0.121 -0.121 0.422 -0.06 0.422 0.181 -0.12 1.144 0.723 1.686 1.806 1.566 0.482 -0.06 1.144 -0.602 1.566 -0.903 0.361 -0.241 0.723 0.121 0.783 0.422 0.12 1.204 1.686 0.06 1.927 -0.181 0.422 -0.482 0.662 -0.964 0.602 -1.626 0 -0.121 0.12 -0.241 0.241 -0.241 0.12 -0.181 0.421 -0.241 0.602 -0.06 0.361 0.301 0.783 0.482 1.325 0.421 0.662 -0.06 1.987 -0.662 1.325 -1.686 -0.301 -0.482 0.422 -1.024 0.783 -0.602 1.144 1.325 2.71 0.06 2.228 -1.445 -0.06 -0.121 0.12 -0.301 0.241 -0.301l-0.06 -0.06c-0.241 -0.361 0.241 -0.723 0.542 -0.542 0.361 0.181 0.963 0.06 1.385 -0.121 0.301 -0.06 0.542 -0.241 0.723 -0.421l-0.361 -1.265h-0.12c-0.482 0 -0.662 -0.843 -0.12 -0.963h0.301c0.482 0 0.963 -0.06 1.325 -0.421 0.662 -0.602 0.783 -1.626 -0.12 -2.108 -0.181 -0.12 -0.121 -0.361 0.06 -0.421 0.06 -0.241 0.12 -0.542 0.482 -0.602m-1.385 -3.432c-0.482 7.527 -6.022 13.308 -13.669 13.368 -3.794 0.06 -8.129 -1.084 -10.658 -4.035 -0.843 -0.963 -1.566 -2.168 -2.047 -3.372 -1.084 -2.529 -1.506 -5.48 -1.265 -8.069 0.542 -7.527 8.069 -13.97 15.656 -13.308 1.024 0 1.987 0.12 2.951 0.361 5.119 1.385 8.37 6.624 9.032 12.043 0 1.024 0.06 2.047 0 3.011" />
            <path d="M18.265 3.598h-0.121c-2.951 0.723 -5.781 1.385 -8.37 3.252 -2.83 2.047 -4.817 5.058 -5.359 8.551 -0.602 3.673 0.241 8.069 2.469 11.08 2.288 3.131 6.323 4.336 10.056 4.336 7.286 0.06 12.585 -5.239 13.067 -12.405 0.422 -6.865 -3.974 -15.054 -11.742 -14.813m8.31 8.189c3.432 5.058 -4.215 11.682 -8.129 13.609 -0.602 0.301 -1.084 -0.482 -0.662 -0.843 0 0 0.06 -0.06 0.121 -0.06 2.951 -1.566 5.6 -3.974 7.166 -6.925 0.843 -1.566 1.024 -2.228 0.542 -3.974 0 -1.505 -0.723 -2.348 -2.228 -2.65 -0.662 0 -1.385 0.06 -2.047 0.06 -2.228 0.542 -3.372 2.529 -3.974 4.576 0.06 0.181 0.121 0.361 0.121 0.602 0.06 0.361 -0.482 0.662 -0.662 0.301 -0.903 -1.987 -2.288 -4.336 -4.938 -3.854 -2.348 0.482 -3.673 3.191 -3.131 5.419 0.963 4.155 5.179 5.239 8.792 5.961 0.241 0.06 0.301 0.361 0.121 0.542 -0.06 0.06 -0.121 0.121 -0.241 0.121 -4.878 0.12 -11.983 -4.035 -9.454 -9.876 1.867 -4.275 7.045 -3.673 8.912 -0.181 0.482 -1.867 1.505 -3.432 3.312 -4.275 2.288 -1.084 4.998 -0.602 6.383 1.445"/>
            </g>
          </svg>
        </div>
      </div>
      </motion.div>
    </div>
      )}

    <form onSubmit={handleSubmit} className="px-4 text-center gap-10 h-screen flex flex-col items-center justify-center" style={{fontFamily: "Playfair Display, serif"}}>
      <div className="text-5xl">
        АНКЕТА
      </div>
      <div className="text-3xl">
        Подтвердите своё присутствие!
      </div>
      <div className="text-xl">
        Ваше имя и фамилия (Если будете с парой, укажите ваши имена)
      </div>

      <div className="w-full">
        <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
          className="p-4 border rounded-xl w-full placeholder:text-xl"
        />
      </div>

      <div className="w-full text-3xl flex">
        <label className="flex items-center gap-3 cursor-pointer w-full">
        <input
          type="radio"
          name="attendance"
          value="Приду"
          checked={status === "Приду"}
          onChange={(e) => setStatus(e.target.value)}
          className="w-5 h-5"
        />

        <span>Приду</span>
      </label>

      <label className="flex items-center gap-3 cursor-pointer w-full">
        <input
          type="radio"
          name="attendance"
          value="Не приду"
          checked={status === "Не приду"}
          onChange={(e) => setStatus(e.target.value)}
          className="w-5 h-5"
        />

        <span>Не приду</span>
      </label>
      </div>
      
      <div>
        <button
        disabled={loading}
        className="
          bg-black text-white p-4 text-3xl rounded-lg
          transition
          disabled:opacity-50
        "
      >
        {loading ? "Отправка..." : "Отправить"}
      </button>
      </div>
      
    </form>

    </div>
  );
}

export default App;