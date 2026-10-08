// GB/T 8685-2008 洗涤符号 SVG 库
// 所有符号 viewBox 统一 48x48，用 currentColor 继承颜色
window.WASH_SYMBOLS = {
  // ========== 水洗类 ==========
  wash30: {
    label: "30℃水洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 42 L 8 14 L 40 14 L 40 42 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 8 14 Q 12 10 16 14 Q 20 18 24 14 Q 28 10 32 14 Q 36 18 40 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="24" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">30</text>
    </svg>`
  },
  wash40: {
    label: "40℃水洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 42 L 8 14 L 40 14 L 40 42 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 8 14 Q 12 10 16 14 Q 20 18 24 14 Q 28 10 32 14 Q 36 18 40 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="24" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">40</text>
    </svg>`
  },
  wash60: {
    label: "60℃水洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 42 L 8 14 L 40 14 L 40 42 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 8 14 Q 12 10 16 14 Q 20 18 24 14 Q 28 10 32 14 Q 36 18 40 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="24" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">60</text>
    </svg>`
  },
  handWash: {
    label: "手洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 42 L 8 14 L 40 14 L 40 42 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 8 14 Q 12 10 16 14 Q 20 18 24 14 Q 28 10 32 14 Q 36 18 40 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 14 28 Q 14 24 18 24 L 28 24 Q 34 24 34 30 Q 34 36 28 36 L 20 36 M 20 36 L 16 40 M 24 32 Q 28 28 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  noWash: {
    label: "不可水洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 42 L 8 14 L 40 14 L 40 42 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 8 14 Q 12 10 16 14 Q 20 18 24 14 Q 28 10 32 14 Q 36 18 40 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="8" y1="42" x2="40" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // ========== 漂白类 ==========
  bleach: {
    label: "可漂白",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 24 8 L 42 40 L 6 40 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>`
  },
  noBleach: {
    label: "不可氯漂",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 24 8 L 42 40 L 6 40 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="8" y1="40" x2="40" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // ========== 干燥类 ==========
  tumbleDry: {
    label: "可翻转干燥",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
    </svg>`
  },
  tumbleDryLow: {
    label: "低温翻转干燥",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="2.2" fill="currentColor"/>
    </svg>`
  },
  noTumbleDry: {
    label: "不可翻转干燥",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="6" y1="40" x2="42" y2="8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  lineDry: {
    label: "悬挂晾干",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 10 14 Q 24 2 38 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>`
  },
  shadeDry: {
    label: "阴干",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 10 14 Q 24 2 38 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="8" y1="16" x2="18" y2="26" stroke="currentColor" stroke-width="2"/>
      <line x1="8" y1="22" x2="14" y2="28" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  flatDry: {
    label: "平摊晾干",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="10" y1="24" x2="38" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  dripDry: {
    label: "滴干",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 10 14 Q 24 2 38 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="18" y1="20" x2="18" y2="38" stroke="currentColor" stroke-width="2"/>
      <line x1="30" y1="20" x2="30" y2="38" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },

  // ========== 熨烫类 ==========
  iron1: {
    label: "低温熨烫",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 4 36 L 10 20 Q 12 16 18 16 L 38 16 Q 44 16 44 24 L 44 36 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="27" r="2.5" fill="currentColor"/>
    </svg>`
  },
  iron2: {
    label: "中温熨烫",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 4 36 L 10 20 Q 12 16 18 16 L 38 16 Q 44 16 44 24 L 44 36 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="19" cy="27" r="2.5" fill="currentColor"/>
      <circle cx="29" cy="27" r="2.5" fill="currentColor"/>
    </svg>`
  },
  iron3: {
    label: "高温熨烫",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 4 36 L 10 20 Q 12 16 18 16 L 38 16 Q 44 16 44 24 L 44 36 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="15" cy="27" r="2.5" fill="currentColor"/>
      <circle cx="24" cy="27" r="2.5" fill="currentColor"/>
      <circle cx="33" cy="27" r="2.5" fill="currentColor"/>
    </svg>`
  },
  noIron: {
    label: "不可熨烫",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 4 36 L 10 20 Q 12 16 18 16 L 38 16 Q 44 16 44 24 L 44 36 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="6" y1="38" x2="42" y2="14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // ========== 干洗类 ==========
  dryClean: {
    label: "可干洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
    </svg>`
  },
  dryCleanP: {
    label: "可干洗(四氯乙烯)",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="24" y="30" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">P</text>
    </svg>`
  },
  dryCleanF: {
    label: "可干洗(石油溶剂)",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="24" y="30" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">F</text>
    </svg>`
  },
  noDryClean: {
    label: "不可干洗",
    svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="10" y1="38" x2="38" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  }
};
