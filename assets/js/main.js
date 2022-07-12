AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});
 
// Navbar mobille button and menu
const navigation = document.querySelector(".navbar-mobille");
document.querySelector('.navbar-mobille-btn').onclick = function(){
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}