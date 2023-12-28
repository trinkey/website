const bangs = {
  "!g"    : ["https://www.google.com/search?q={{QUERY}}", "https://www.google.com"],
  "!gi"   : ["https://www.google.com/search?tbm=isch&q={{QUERY}}", "https://www.google.com/imghp"],
  "!gf"   : ["https://fonts.google.com/?query={{QUERY}}", "https://fonts.google.com"],
  "!ddg"  : ["https://duckduckgo.com/?q={{QUERY}}", "https://duckduckgo.com"],
  "!ddgi" : ["https://duckduckgo.com/?q={{QUERY}}&iax=images&ia=images", "https://duckduckgo.com"],
  "!ffa"  : ["https://addons.mozilla.org/search/?q={{QUERY}}", "https://addons.mozilla.org"],
  "!cws"  : ["https://chromewebstore.google.com/search/{{QUERY}}", "https://chromewebstore.google.com/"],
  "!a"    : ["https://www.amazon.com/s?k={{QUERY}}", "https://www.amazon.com"],
  "!t"    : ["https://twitter.com/search?q={{QUERY}}", "https://twitter.com"],
  "!yt"   : ["https://www.youtube.com/results?search_query={{QUERY}}", "https://www.youtube.com"],
  "!wiki" : ["https://wikipedia.org/w/index.php?search={{QUERY}}", "https://wikipedia.org"],
  "!gh"   : ["https://github.com/search?q={{QUERY}}", "https://github.com"],
}

// The if statement is used to scope urlParams as consts can't be deleted
// and urlParams is used later in base.js, however this is loaded first
// so it is overall slightly faster.
if (true) {
  const urlParams = new URLSearchParams(window.location.search);
  let query = urlParams.get("q");

  if (query) {
    query = query.replaceAll("%20", " ").replaceAll("+", " ").split(" ");
    let bang = query[0].toLowerCase();
    if (Object.keys(bangs).includes(bang)) {
      if (query.length == 1) { window.location.href = bangs[bang][1]; }
      else { window.location.href = bangs[bang][0].replaceAll("{{QUERY}}", query.slice(1).join("%20")); }
    } else {
      // Fallback to ddg if there isn't a valid bang
      window.location.href = bangs["!ddg"][0].replaceAll("{{QUERY}}", query.join("%20"));
    }
  }
}
