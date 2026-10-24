const B=document.body,$=i=>document.getElementById(i),Q=s=>[...document.querySelectorAll(s)];
function route(){const h=location.hash.slice(1);B.classList.toggle('c',h==='consult');if(h==='consult'||!h)scrollTo(0,0);else requestAnimationFrame(()=>{const e=$(h);e&&e.scrollIntoView()})}
addEventListener('hashchange',route);route();
Q('#fl input').forEach(r=>r.onchange=()=>Q('#wk article').forEach(a=>a.hidden=r.value!=='all'&&a.dataset.t!==r.value));
let s=0;const st=Q('.st'),pg=Q('.pg i');
function go(n){s=n;st.forEach((x,i)=>x.classList.toggle('on',i===n));pg.forEach((x,i)=>x.classList.toggle('on',i<=n));$('bk').style.visibility=n?'visible':'hidden';$('nx').textContent=n===2?'إرسال الطلب':'التالي'}
const er=(el,m)=>{el.parentNode.querySelector('.er').textContent=m||'';return !!m};
function ok(){let bad=false;
if(s===0)bad=er($('f').querySelector('.st .cl'),document.querySelector('[name=t]:checked')?'':'اختر نوع المشروع');
if(s===1)bad=er(Q('.st')[1].querySelector('.cl'),document.querySelector('[name=b]:checked')?'':'اختر الميزانية');
if(s===2){const a=er($('n'),$('n').value.trim().length<3?'أدخل اسمك':''),b=er($('p'),/^[+\d][\d\s-]{7,}$/.test($('p').value.trim())?'':'أدخل رقم هاتف صحيح'),c=er($('c'),$('c').value.trim()?'':'أدخل مكان السكن'),d=er($('w'),$('w').value.trim().length<10?'اكتب وصفاً مختصراً':'');bad=a||b||c||d}
return !bad}
$('bk').onclick=()=>go(s-1);
$('nx').onclick=()=>{if(!ok())return;if(s<2)return go(s+1);
const m=`طلب استشارة جديد - Codex\nالاسم: ${$('n').value.trim()}\nالهاتف: ${$('p').value.trim()}\nالميزانية: ${document.querySelector('[name=b]:checked').value}\nمكان السكن: ${$('c').value.trim()}\nنوع المشروع: ${document.querySelector('[name=t]:checked').value}\nالموعد: ${$('d').value}\nالبريد: ${$('e').value||'-'}\nماذا يريد: ${$('w').value.trim()}`;
$('sm').textContent=m;$('wa2').href='https://wa.me/966500000000?text='+encodeURIComponent(m);
$('f').style.display='none';document.querySelector('.pg').style.display='none';$('done').style.display='block';scrollTo(0,0)};
