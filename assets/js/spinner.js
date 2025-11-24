// Simple spinner remover: hides #site-spinner once page is fully loaded
(function(){
  function hideSpinner(){
    var s = document.getElementById('site-spinner');
    if(s){ s.classList.add('hidden'); }
  }
  if(document.readyState === 'complete'){
    hideSpinner();
  } else {
    window.addEventListener('load', hideSpinner, {once:true});
    // fallback: remove after 5s
    setTimeout(hideSpinner, 5000);
  }
})();
