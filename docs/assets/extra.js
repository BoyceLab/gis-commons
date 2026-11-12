// Click-to-load video embeds, and open collapsed blocks for printing and for links that target content inside them.
function geoalsInit(){
  document.querySelectorAll('.video .frame button[data-id]').forEach(function(b){
    b.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.id+'?autoplay=1&rel=0';
      f.title=b.dataset.title||'Video';
      f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen=true;
      b.parentNode.replaceChildren(f);
    });
  });
  openTarget();
}
function openTarget(){
  if(!location.hash) return;
  var el; try{ el=document.querySelector(decodeURIComponent(location.hash)); }catch(e){ return; }
  while(el){ if(el.tagName==='DETAILS') el.open=true; el=el.parentElement; }
}
window.addEventListener('hashchange',openTarget);
window.addEventListener('beforeprint',function(){document.querySelectorAll('details').forEach(function(d){d.dataset.wasOpen=d.open;d.open=true;});});
window.addEventListener('afterprint',function(){document.querySelectorAll('details').forEach(function(d){if(d.dataset.wasOpen==='false')d.open=false;});});
if(window.document$){document$.subscribe(geoalsInit);}else{document.addEventListener('DOMContentLoaded',geoalsInit);}
