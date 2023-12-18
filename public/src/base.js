// Parse URL parameters
// titlebar - titlebar (0 - enable titlebar, anything else: disable titlebar)
// self - references to myself (0 - enable references, anything else: disable references)
// redir - redirects to a page. must start with a slash (%2F) and then a not slash or nothing else (aka on site url)
// theme - "light" or "dark", sets theme
// Example: //trinkey.web.app/?titlebar=1&self=1&redir=%2Fgames%2Fconnect4&theme=light
// this would disable the titlebar, disable all references, to me, redirects to the
// connect four page, and change the site theme to light mode.

const urlParamsADFJAHFJKHFKH = new URLSearchParams(window.location.search);

if (urlParamsADFJAHFJKHFKH.get("self")) { localStorage.setItem("trinkey-titlebar", urlParamsADFJAHFJKHFKH.get("self")); }
enableSelf = (localStorage.getItem("trinkey-titlebar") || "0") === "0"

if (urlParamsADFJAHFJKHFKH.get("titlebar")) { localStorage.setItem("trinkey-bar", urlParamsADFJAHFJKHFKH.get("titlebar")); }
enableTitlebar = (localStorage.getItem("trinkey-bar") || "0") === "0"

if (
  urlParamsADFJAHFJKHFKH.get("redir") && urlParamsADFJAHFJKHFKH.get("redir")[0] == "/" &&
  (urlParamsADFJAHFJKHFKH.get("redir").length == 1 || "/:".indexOf(urlParamsADFJAHFJKHFKH.get("redir")[1]) == -1)
) { window.location.href = urlParamsADFJAHFJKHFKH.get("redir"); }

if (urlParamsADFJAHFJKHFKH.get("theme") == "light" || urlParamsADFJAHFJKHFKH.get("theme") == "dark") {
  localStorage.setItem("trinkey-theme", urlParamsADFJAHFJKHFKH.get("theme"));
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
