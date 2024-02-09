// Navbar
export default {
  template: await (await fetch('./Components/Navbar.html')).text() 
}
