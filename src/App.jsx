import { useState, useEffect } from 'react'
import './App.css'

import Projects, { allProjects } from './pages/projects'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const featuredProjects = allProjects.slice(0, 4);

  return (
    <div className="app-wrapper">
      {/* 滿版 Header Navigation */}
      <header className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={() => setCurrentPage('home')}>S.O.T_XT</div>
          <nav className="nav-links">
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={currentPage === 'projects' ? 'active' : ''} 
              onClick={() => setCurrentPage('projects')}
            >
              Projects
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {currentPage === 'projects' ? (
          <Projects onBack={() => setCurrentPage('home')} />
        ) : (
          <div className="container page-transition">
            <section className="hero">
              <h1>S.O.T_XT's Home</h1>
              <p>輔大資工 | 大二 | ONCE </p>
            </section>

            <section className="about">
              <h2>About Meeeeee~</h2>
              <p>目前就讀於輔仁大學資訊工程學系。</p>
              <div className="about-grid">
                <div className="left-grid">
                  <h3>進行中:</h3>
                  <ol>
                    <li>C/C++</li>
                    <li>實驗室:機器學習相關</li>
                    <li>資安相關知識學習</li>
                  </ol>
                </div>
                <div className="right-grid">
                  <h3>興趣:</h3>
                  <ol>
                    <li>WebDev</li>
                    <li>資訊相關笑話</li>
                    <li>Kpop</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="projects">
              <div className="section-header">
                <h2>My Dev</h2>
                <button className="view-all-btn" onClick={() => setCurrentPage('projects')}>
                  查看全部 (View All) <span>→</span>
                </button>
              </div>
              <div className="project-grid">
                {featuredProjects.map(proj => (
                  <div className="card" key={proj.id}>
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="experience">
              <h2>My Experience</h2>
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
          </div>
        )}
      </main>

      <footer>
        <p>© 2026 S.O.T_XT. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App