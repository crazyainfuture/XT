export const allProjects = [
  { id: 1, title: 'my-portfolio', desc: '我的個人網站' },
  { id: 2, title: 'fjufindfood', desc: '輔大校園美食地圖' },
  { id: 3, title: 'brain.push_back', desc: '大學筆記、作業、程式相關資訊' },
  { id: 4, title: 'GateAway', desc: '使用 Unity 開發的動作遊戲' },
  { id: 5, title: 'TWICE Fan Map', desc: '使用 React + Firebase 製作的粉絲地圖' },
  { id: 6, title: 'Line Bot', desc: '自動化記帳機器人' },
  { id: 7, title: 'Portfolio Website', desc: '使用 React + Vite 打造的個人展示網站' },
  { id: 8, title: 'Weather App', desc: '即時串接氣象 API 的天氣預報小工具' },
  { id: 9, title: 'Task Manager', desc: '具有完整 CRUD 功能的待辦事項管理系統' },
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
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
