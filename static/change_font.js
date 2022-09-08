//change font
document.querySelector('button').addEventListener("click", e=>{
  document.body.classList.toggle("od");
});

//change button content
const btn = document.getElementById('font-style');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Dyslexic friendly';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Back to original';
  } else {
    btn.textContent = initialText;
  }
});
