import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>S.O.T_XT</h1>
        <p>輔大資工 | 大二 </p>
      </header>

      <section className="about">
        <h2>About Meeeeee~</h2>
        <p>目前就讀於輔仁大學資訊工程學系。</p>
      </section>

      <section className="projects">
        <h2>我的專案</h2>
        <div className="project-grid">
          <div className="card">
            <h3>GateAway</h3>
            <p>使用 Unity 開發的動作遊戲。</p>
          </div>
          <div className="card">
            <h3>TWICE Fan Map</h3>
            <p>使用 React + Firebase 製作的粉絲地圖。</p>
          </div>
          <div className="card">
            <h3>Line Bot</h3>
            <p>自動化記帳機器人。</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 S.O.T_XT. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App