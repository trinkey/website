// Set theme
let updateTheme = () => { document.getElementsByTagName("body")[0].setAttribute("data-theme", localStorage.getItem("trinkey-theme") || "dark"); };
updateTheme();

// Inject title bar
titleBar = `<nav style="position: relative; z-index: 1000;">
  <table class="menu" id="fullDisplay">
    <tr>
      <td class="logo"><div class="logo"><a class="plainLink" href="/">Trinkey's Website</a></div></td>
      <td class="long"></td>
      <td class="only-large"><a href="/about-me">About Me</a></td>
      <td class="only-large"><a href="/photography">Photography</a></td>
      <td class="only-large"><a href="/other">Other</a></td>
      <td class="only-large"><a href="/games">Games</a></td>
      <td class="only-large"><a href="/changelog">Changelog</a></td>
      <td class="only-large light-toggle" onclick='localStorage.setItem("trinkey-theme", "light"); updateTheme();'>Light Mode</td>
      <td class="only-large dark-toggle" onclick='localStorage.setItem("trinkey-theme", "dark"); updateTheme();'>Dark Mode</td>
      <td class="only-small"><div class="hamburger" id="hamburger"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></td>
    </tr>
  </table>

  <ul class="noListIcon only-small hidden" id="hamburgerDisplay">
    <li><a href="/about-me">About Me</a></td>
    <li><a href="/photography">Photography</a></td>
    <li><a href="/other">Other</a></td>
    <li><a href="/games">Games</a></td>
    <li><a href="/changelog">Changelog</a></td>
    <li class="light-toggle" onclick='localStorage.setItem("trinkey-theme", "light"); updateTheme();'>Light Mode</td>
    <li class="dark-toggle" onclick='localStorage.setItem("trinkey-theme", "dark"); updateTheme();'>Dark Mode</td>
  </ul>
</nav>`;

const elem1 = document.createElement("header");
const elem2 = document.createElement("div");
elem1.innerHTML = titleBar;
elem2.innerHTML = '<div style="display: block; height: 62px; width: 1px; opacity: 0%;"></div>'
document.getElementsByTagName("body")[0].prepend(elem1);
document.getElementsByTagName("body")[0].prepend(elem2);

document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementById("hamburgerDisplay").classList.toggle("hidden");
});
