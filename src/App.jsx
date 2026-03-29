import { useState, useEffect } from 'react'
import './App.css'

import Projects, { allProjects } from './pages/projects'
import Logs, { alllogs } from './pages/logs'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const featuredProjects = allProjects.slice(1, 5);
  const featuredLogs = alllogs.slice(0, 4);

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
            <button 
              className={currentPage === 'logs' ? 'active' : ''} 
              onClick={() => setCurrentPage('logs')}
            >
              Logs
            </button>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{ fontSize: '1.2rem', padding: '0.3rem', marginLeft: '0.5rem' }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {currentPage === 'projects' ? (
          <Projects onBack={() => setCurrentPage('home')} />
        ) : currentPage === 'logs' ? (
          <Logs onBack={() => setCurrentPage('home')} />
        ) : (
          <div className="container page-transition">
            <section className="hero">
              <h1>S.O.T_XT's Home</h1>
              <p>輔大資工 | 大二 | ONCE </p>
            </section>

            <section className="about">
              <h2>About Meeeeee~</h2>
              <p>目前就讀於輔仁大學資訊工程學系</p>
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
                    <li>資訊相關冷笑話</li>
                    <li>Kpop</li>
                  </ol>
                </div>
                <div className="contact">
                  <h3>聯絡方式:</h3>
                  <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                    <a href="mailto:ozymmadeinfuture@gmail.com" className="contact-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>ozymmadeinfuture@gmail.com</span>
                    </a>
                    <a href="https://github.com/crazyainfuture" target="_blank" rel="noopener noreferrer" className="contact-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>crazyainfuture</span>
                    </a>
                    <a href="https://www.instagram.com/d.xx___xx.b" target="_blank" rel="noopener noreferrer" className="contact-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span>IG: d.xx___xx.b</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="projects">
              <div className="section-header">
                <h2>My Dev</h2>
              </div>
              <div className="project-grid">
                {featuredProjects.map(proj => (
                  <div className="card" key={proj.id}>
                    <h3>
                      {proj.link ? (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          {proj.title}
                        </a>
                      ) : (
                        proj.title
                      )}
                    </h3>
                    <p>{proj.desc}</p>
                  </div>
                ))}
              </div>
              <div className='section-footer'>
                <button className="view-all-btn" onClick={() => setCurrentPage('projects')}>
                  查看全部 <span>→</span>
                </button>
              </div>
            </section>

            <section className="logs">
              <div className="section-header">
                <h2>My Logs</h2>
              </div>
              <div className="log-grid">
                { featuredLogs.map(log => (
                  <div className="card" key={log.id}>
                    <h3>{log.category}</h3>
                    <div className="activity-list">
                      {log.activities.map((activity, index) => (
                        <p key={index}>• {activity}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className='section-footer'>
                <button className="view-all-btn" onClick={() => setCurrentPage('logs')}>
                  查看全部 <span>→</span>
                </button>
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