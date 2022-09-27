//change font button

const btn = document.getElementById('font-style');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Dyslexic friendly';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Back to original';
    document.getElementById("font").style.fontFamily = "Times New Roman, Times, serif";
    document.getElementById("font").style.fontSize = "150%";

  } else {
    btn.textContent = initialText;
    document.getElementById("font").style.fontFamily = "Source Sans Pro, Roboto, Arial, sans-serif";
    document.getElementById("font").style.fontSize = "100%";

  }
});
