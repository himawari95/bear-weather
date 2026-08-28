# ☁️ 小熊天气 · AI 智能天气助手

> 结合实时天气查询与 AI 对话的全栈天气应用，支持中英双语、城市搜索与动态天气背景。

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square)
![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=flat-square)

## 📸 界面预览

> 截图待补充：请将图片放入 `screenshots/` 目录，并替换下方路径。

| 天气主界面 | AI 对话 | 趋势图表 |
|:---:|:---:|:---:|
| ![主界面](screenshots/main.png) | ![AI 对话](screenshots/chat.png) | ![趋势图](screenshots/chart.png) |

## ✨ 项目亮点

- **实时天气数据** — 接入 OpenWeather API：实时天气、5 日预报、空气质量、紫外线、分钟级降水
- **AI 智能对话** — 通过本地 Express 代理调用 vivo 蓝心大模型，以口语化方式回答天气问题
- **动态天气背景** — 根据天气状况自动切换背景与图标
- **中英双语国际化** — 基于 `data-lang-key` 的无刷新语言切换
- **城市搜索与自动补全** — 支持定位、搜索、历史缓存
- **天气趋势图表** — 原生 Canvas 绘制多日趋势

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 前端 | HTML / CSS / JavaScript |
| 后端 | Node.js + Express |
| 天气数据 | OpenWeather API |
| AI 模型 | vivo 蓝心大模型（Doubao-Seed） |

## 🚀 运行方式

```bash
git clone https://github.com/himawari95/bear-weather.git
cd bear-weather
npm install
node server.js
# 浏览器打开 http://localhost:3000/weather_website.html
```

> ⚠️ 生产部署前，请将 `script.js` 中的 OpenWeather API Key 与 `server.js` 中的大模型 AppKey 移入环境变量，避免密钥泄露。

## 📄 License

MIT License

## 👤 作者

[himawari95](https://github.com/himawari95)
