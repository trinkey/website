// Parse URL parameters
// titlebar - titlebar (0 - enable titlebar, anything else: disable titlebar)
// self - references to myself (0 - enable references, anything else: disable references)
// redir - redirects to a page. must start with a slash (%2F) and then a not slash or nothing else (aka on site url)
// theme - "light" or "dark", sets theme
// Example: //trinkey.web.app/?titlebar=1&self=1&redir=%2Fgames%2Fconnect4&theme=light
// this would disable the titlebar, disable all references, to me, redirects to the
// connect four page, and change the site theme to light mode.

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("self")) { localStorage.setItem("trinkey-titlebar", urlParams.get("self")); }
enableSelf = (localStorage.getItem("trinkey-titlebar") || "0") === "0"

if (urlParams.get("titlebar")) { localStorage.setItem("trinkey-bar", urlParams.get("titlebar")); }
enableTitlebar = (localStorage.getItem("trinkey-bar") || "0") === "0"

if (
  urlParams.get("redir") && urlParams.get("redir")[0] == "/" &&
  (urlParams.get("redir").length == 1 || "/:".indexOf(urlParams.get("redir")[1]) == -1)
) { window.location.href = urlParams.get("redir"); }

if (urlParams.get("theme") == "light" || urlParams.get("theme") == "dark") {
  localStorage.setItem("trinkey-theme", urlParams.get("theme"));
}

// Set theme
let updateTheme = () => { document.getElementsByTagName("body")[0].setAttribute("data-theme", localStorage.getItem("trinkey-theme") || "dark"); };
let dom = (id) => ( document.getElementById(id) );

updateTheme();

// Inject title bar
if (enableTitlebar) {
  titleBar = `<nav style="position: relative; z-index: 1000;">
    <table class="menu" id="fullDisplay">
      <tr>
        <td class="logo"><div class="logo"><a class="plainLink" href="/">${enableSelf ? `Trinkey's Website` : "\u200b"}</a></div></td>
        <td class="long"></td>
        ${enableSelf ? `<td class="only-large"><a href="/about-me/">About Me</a></td>
        <td class="only-large"><a href="/photography/">Photography</a></td>` : ""}
        <td class="only-large"><a href="/games/">Games</a></td>
        <td class="only-large"><a href="/quizzes/">Quizzes</a></td>
        <td class="only-large"><a href="/other/">Other</a></td>
        ${enableSelf ? `<td class="only-large"><a href="/changelog/">Changelog</a></td>` : ""}
        <td class="only-large light-toggle" onclick='localStorage.setItem("trinkey-theme", "light"); updateTheme();'><div>Light Mode</div></td>
        <td class="only-large dark-toggle" onclick='localStorage.setItem("trinkey-theme", "dark"); updateTheme();'><div>Dark Mode</div></td>
        <td class="only-small"><div class="hamburger" id="hamburger"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></td>
      </tr>
    </table>

    <ul class="noListIcon only-small hidden" id="hamburgerDisplay">
    ${enableSelf ? `<li><a href="/about-me/">About Me</a></td>
      <li><a href="/photography/">Photography</a></td>` : ""}
      <li><a href="/games/">Games</a></td>
      <li><a href="/quizzes/">Quizzes</a></td>
      <li><a href="/other/">Other</a></td>
      ${enableSelf ? `<li><a href="/changelog/">Changelog</a></td>` : ""}
      <li class="light-toggle" onclick='localStorage.setItem("trinkey-theme", "light"); updateTheme();'><div>Light Mode</div></td>
      <li class="dark-toggle" onclick='localStorage.setItem("trinkey-theme", "dark"); updateTheme();'><div>Dark Mode</div></td>
    </ul>
  </nav>`;

  const elem1 = document.createElement("header");
  const elem2 = document.createElement("div");
  elem1.innerHTML = titleBar;
  elem2.innerHTML = '<div style="display: block; height: 62px; width: 1px; opacity: 0%;"></div>';
  document.getElementsByTagName("body")[0].prepend(elem1);
  document.getElementsByTagName("body")[0].prepend(elem2);

  document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("hamburgerDisplay").classList.toggle("hidden");
  });
}
