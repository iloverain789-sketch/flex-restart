# 柔韧重启 · 12 周居家健身 PWA

## 使用

将整个文件夹上传到任意静态 HTTPS 托管：GitHub Pages、Netlify 或 Cloudflare Pages 均可。不要直接双击 `index.html` 期待自动安装 PWA；Safari 的 PWA 安装和 Service Worker 需要 HTTPS（本机开发时 `localhost` 例外）。

在 iPhone Safari 打开 HTTPS 地址：点击底部“分享” → “添加到主屏幕” → “添加”。首次打开联网加载后，后续可离线使用。

## 已包含

- 12 周渐进式训练日历：每周二、周四、周日，按低冲击与关节友好原则编排。
- 当天动作、组数/次数/时长、动作步骤、安全边界与教学资源搜索入口。
- 逐项打卡、周进度、体重/体脂/疼痛记录、JSON 导出与导入。
- `manifest.webmanifest`、`sw.js` 离线缓存、iPhone 图标。

## 重要使用边界

当前版本以“日历完成项”作为训练打卡；动作计时以页面展示的时长/次数为准。若出现刺痛、麻木、放射痛、关节肿胀或眩晕，应立即停止并咨询医生或康复专业人士。
