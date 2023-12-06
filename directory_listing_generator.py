import os

base = """
<!DOCTYPE html>

<html>
  <head>
    <title>Index of {{DISP_PATH}}</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/directory.css">
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
  </head>

  <body>
    <script src="/src/base.js"></script>

    <div id="container2">
      <h1>Index of {{DISP_PATH}}</h1>
      <table>
        <tr>
          <th class="file">Name</th>
          <th class="size">Size</th>
        </tr>
  {{TABLE}}    </table>
    </div>
  </body>
</html>
"""[1::]
template = """
        <tr>
          <td class="file"><a href="{{LINK}}">{{PATH}}</a></td>
          <td class="size">{{SIZE}}{{TYPE}}</td>
        </tr>
"""[1::]

for i in [
  ["public/css/",                   "/css/",                   "public/directory/css.html"],
  ["public/css/themes/",            "/css/themes/",            "public/directory/css_themes.html"],
  ["public/css/other/",             "/css/other/",             "public/directory/css_other.html"],
  ["public/css/games/",             "/css/games/",             "public/directory/css_games.html"],
  ["public/img/",                   "/img/",                   "public/directory/img.html"],
  ["public/img/about/",             "/img/about/",             "public/directory/img_about.html"],
  ["public/img/photography/",       "/img/photography/",       "public/directory/img_photography.html"],
  ["public/img/photography/small/", "/img/photography/small/", "public/directory/img_photography_small.html"],
  ["public/src/",                   "/src/",                   "public/directory/src.html"],
]:
    path = i[0]
    dispPath = i[1]
    outputPath = i[2]

    output = ""
    for i in os.listdir(path):
        if not os.path.isfile(path + i):
            output += template.replace("{{LINK}}", dispPath + i).replace("{{PATH}}", i).replace("{{SIZE}}", "").replace("{{TYPE}}", '<svg viewBox="0 0 1670 1410" xmlns="http://www.w3.org/2000/svg" class="folder"><path d="M1664 928V224q0-92-66-158T1440 0H224Q132 0 66 66T0 224v960q0 92 66 158t158 66h320q92 0 158-66t66-158v-32h672q92 0 158-66t66-158Z"/></svg>')

    for i in os.listdir(path):
        if os.path.isfile(path + i):
            output += template.replace("{{LINK}}", dispPath + i).replace("{{PATH}}", i).replace("{{SIZE}}", "{:,}".format(round(os.path.getsize(path + i) / 100_000) / 10 if os.path.getsize(path + i) > 1_000_000 else round(os.path.getsize(path + i) / 100) / 10 if os.path.getsize(path + i) > 1_000 else os.path.getsize(path + i))).replace("{{TYPE}}", " MB" if os.path.getsize(path + i) > 1_000_000 else " KB" if os.path.getsize(path + i) > 1_000 else " B");

    f = open(outputPath, "w")
    f.write(base.replace("{{TABLE}}", output).replace("{{DISP_PATH}}", dispPath))
    f.close()
