window.onbeforeunload = function () {
  return true
};
function openBib() {
  let bib = document.getElementById('bib-div')
  bib.style.visibility = 'visible'
};
function closeBib() {
  let bib = document.getElementById('bib-div')
  bib.style.visibility = 'hidden'
};
