export const alllogs = [
  { id: 1, category: 'WebDev', activities: ['FJU EAT', 'Diet-Tracker','HTML網頁實作結合機器學習','TWICE 問答小遊戲'] },
  { id: 2, category: '軟體開發', activities: ['Gateaway 遊戲','Crown 遊戲','Line Bot 串接實作記帳功能','Line Bot 串接實作自動發送訊息於群組功能'] },
  { id: 3, category: '資安', 
    activities: ['2025 資安大會會眾',
        '2025 GiCS尋找資安女婕思參賽',
        'NISRA Enlightened 2025 學員',
        '車聯網線上資安講座',
        '網路通信產業資安線上論壇',
        '金融反詐與AI深偽資安實務專題講座'
    ] 
  },

  { id: 4, category: '其他活動', 
    activities: ['Google 數位人才探索計--Google Cloud 學程',
        '台北酷課雲AI教材',
        'ewant深度學習的原理及實務上的應用',
        'COSCUP 2025 會眾',
        'HITCON 2025 會眾',
        'SITCON camp 2025 學員',
        'Arduino 音樂播放器實作',
        'Arduino 機器人專題實作'
    ] },
    { id: 5, category: '機器學習', activities: ['實驗室(進行中)'] },
    { id: 6, category: '程式設計', activities: ['TQC Python專業級證照'] },
];

export default function Logs({ onBack }) {
  return (
    <div className="container page-transition">
      <div className="page-header">
        <h2>All Logs</h2>
      </div>

      <section className="logs full-page">
        <div className="log-grid">
          {alllogs.map(log => (
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
      </section>
    </div>
  );
}
