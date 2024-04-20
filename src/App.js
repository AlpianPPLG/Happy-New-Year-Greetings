import Particles from "react-particles"
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter" 
import { useState } from "react"
import Countdown from "react-countdown"

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Menunggu Tahun Baru 2024"])

  const particlesInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

function timeLeft() {
  const newYearDate = new Date("January 1, 2024, 00:00:00").getTime();
  const nowDate = new Date().getTime()
  const remainingTime = newYearDate - nowDate
  return remainingTime
}

// container
// align-items: center
// display: flex
// justify-content: center
// gap: 4px
// flex-direction: column;
// min-height: 100vh;
// margin: 4px
// font-size: (1rem = 4px) jadi jika 4xl maka 4 x 4 = 16px, 4xl merupakan ukuran huruf yang paling besar dalam skala ini
// text-color: white / #FFF
  return (
    <>
      <Particles 
        init={particlesInitialization}
        options={{preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
          words={newYearMessage} 
          loop={false}
          cursorStyle={"✨"}
          cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat Tahun Baru 2024"])}/>
        </div>
      </div>
    </>
  );
}
// z-index: 50
export default App;