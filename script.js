
document.addEventListener('DOMContentLoaded', ()=>{
  const startBtn = document.getElementById('startBtn');
  const cover = document.getElementById('cover');
  const main = document.getElementById('main');
  startBtn.addEventListener('click', ()=>{
    cover.style.display='none';
    main.style.display='block';
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

function clearHighlights(section){
  const qs = section.querySelectorAll('.question');
  qs.forEach(q => { q.classList.remove('correct','incorrect'); });
}

function checkAnswers(sectionId){
  const section = document.getElementById(sectionId);
  const questions = section.querySelectorAll('.question');
  // reset highlights
  clearHighlights(section);
  questions.forEach(q => {
    const correct = q.dataset.correct.trim().toLowerCase();
    const input = q.querySelector('input, select');
    let val = '';
    if(!input) return;
    if(input.tagName.toLowerCase() === 'select') val = input.value.trim().toLowerCase();
    else val = input.value.trim().toLowerCase();
    if(val === '') return; // don't highlight empty
    if(val === correct){
      q.classList.add('correct');
    } else {
      q.classList.add('incorrect');
    }
  });
}
