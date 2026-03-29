export const allProjects = [
  { id: 0, title: 'my-portfolio', desc: '我的個人網站', link: 'https://crazyainfuture.github.io/XT/' },
  { id: 1, title: 'FJU EAT', desc: '輔大校園美食地圖', link: 'https://crazyainfuture.github.io/fjufindfood/' },
  { id: 2, title: 'brain.push_back', desc: '大學筆記、作業、程式相關資訊，歡迎挖寶!', link: 'https://github.com/crazyainfuture/brain.push_back.git' },
  { id: 3, title: 'medical_platform', desc: '一個結合AI與醫療的平台，學習api串接與網頁開發', link: 'https://github.com/crazyainfuture/medical_platform_revised.git' },
  { id: 4, title: 'GateAway', desc: '《GateAway》是一款以「環狀無限循環跑道」為核心的反應型駕駛生存街機遊戲，與朋友一起開發', link: 'https://github.com/shyuray/GateAway.git' },
  { id: 5, title: 'Crown', desc: '《平民王冠》是一款以「從平凡到榮耀」為主題的遊戲作品。玩家將扮演一位平民，透過努力、抉擇與冒險，最終爭奪屬於自己的王冠。' },
  { id: 6, title: 'Line Bot', desc: '自動發送訊息於群組' },
  { id: 7, title: 'Line Bot', desc: '自動化記帳機器人' },
  { id: 8, title: 'diet-tracker', desc: '熱量記錄小工具，學習串接 CRUD 功能' },
  { id: 9, title: 'tryhtml', desc: 'HTML 練習並與Teachable Machine 結合，實現物體辨識' },
  { id: 10, title: 'TWICE 問答小遊戲', desc: 'TWICE 知識問答小遊戲，網頁開發練習' },
];

export default function Projects({ onBack }) {
  return (
    <div className="container page-transition">
      <div className="page-header">
        <h2>All Projects</h2>
      </div>

      <section className="projects full-page">
        <div className="project-grid">
          {allProjects.map(proj => (
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
      </section>
    </div>
  );
}
