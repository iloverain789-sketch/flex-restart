const style=document.createElement('style');style.textContent='.pose-tutorial{position:relative;width:100%;aspect-ratio:1.68;border-radius:16px;background-color:#fff8ec;background-image:url("exercise-sheet.png");background-repeat:no-repeat;background-size:200% 300%;background-position:center;overflow:hidden;margin:0 0 16px;border:1px solid #f0e5d3;box-shadow:0 10px 26px #173f3512}.pose-tutorial span{position:absolute;left:12px;bottom:10px;padding:5px 9px;border-radius:99px;background:#fffdf8d9;color:#173f35;font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.08em}@media(max-width:500px){.pose-tutorial{aspect-ratio:1.35;margin-bottom:14px}}';document.head.appendChild(style);
const posePosition={
  '坐姿起立（扶椅）':'0% 0%','墙面俯卧撑':'100% 0%',臀桥:'0% 50%',
  '鸟狗式（小幅度）':'100% 50%',蚌式开合:'0% 100%',靠墙静蹲:'100% 100%'
};
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-detail]');
  if(!button)return;
  const name=button.dataset.detail;
  window.setTimeout(()=>{
    const detail=document.querySelector('#detail');
    if(!detail||detail.querySelector('.pose-tutorial'))return;
    const position=posePosition[name];
    if(!position)return;
    const figure=document.createElement('div');
    figure.className='pose-tutorial';
    figure.setAttribute('role','img');
    figure.setAttribute('aria-label',`${name}图片教程`);
    figure.style.backgroundPosition=position;
    figure.innerHTML='<span>动作示意</span>';
    detail.querySelector('article')?.append(figure);
  },0);
});
const injectPose=()=>{
  const detail=document.querySelector('#detail');
  const article=detail?.querySelector('article');
  if(!article||article.querySelector('.pose-tutorial'))return;
  const title=article.querySelector('h3')?.textContent?.trim();
  const position=posePosition[title]||'center';
  const figure=document.createElement('div');figure.className='pose-tutorial';figure.setAttribute('role','img');figure.setAttribute('aria-label',`${title}图片教程`);figure.style.backgroundPosition=position;if(!posePosition[title])figure.style.backgroundSize='100% 100%';figure.innerHTML='<span>动作图片教程</span>';article.append(figure);
};
new MutationObserver(injectPose).observe(document.body,{childList:true,subtree:true});
injectPose();
