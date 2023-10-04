import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <h2>三日月ステップの世界</h2>
          <p>本家</p>
          <p className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YCoauaN_CMI?si=CCtboTdQDUth1qRa"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>
        <div>
          <p className="videotitle">2023</p>
          <p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bncdfyVBmI8?si=DHuwqCQuPhzba2hL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>
        <div>
          <p className="videotitle">ごめ言えremix</p>
          <p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ksF4nLXvnhs?si=qL5xANu1BozkV0lK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
