const tabCollection = document.querySelectorAll('.tabs__preview-item');
const removeActiveState = () => {
  tabCollection.forEach(everyTab => {
    everyTab.classList.remove('active')
  });
}
tabCollection.forEach(tabElement => {
  tabElement.addEventListener('click', () => {
    removeActiveState()
    tabElement.classList.toggle('active')
  })
});

$(function () {
  $("#tabs").tabs();
});