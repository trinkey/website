from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory("public", "index.html")

@app.route("/<path:filename>/")
def base(filename):
    return send_from_directory("public", filename + ".html")

@app.route("/css/<path:filename>")
def css(filename):
    return send_from_directory("public/css", filename)

@app.route("/css/games/<path:filename>")
def css_games(filename):
    return send_from_directory("public/css/games", filename)

@app.route("/css/other/<path:filename>")
def css_other(filename):
    return send_from_directory("public/css/other", filename)

@app.route("/css/themes/<path:filename>")
def css_themes(filename):
    return send_from_directory("public/css/themes", filename)

@app.route("/img/<path:filename>")
def img(filename):
    return send_from_directory("public/img", filename)

@app.route("/img/about/<path:filename>")
def img_about(filename):
    return send_from_directory("public/img/about", filename)

@app.route("/img/index/<path:filename>")
def img_index(filename):
    return send_from_directory("public/img/index", filename)

@app.route("/img/photography/<path:filename>")
def img_photography(filename):
    return send_from_directory("public/img/photography", filename)

@app.route("/img/photography/small/<path:filename>")
def img_photography_small(filename):
    return send_from_directory("public/img/photography/small", filename)

@app.route("/other/<path:filename>/")
def other(filename):
    return send_from_directory("public/other/", filename + ".html")

@app.route("/games/<path:filename>/")
def games(filename):
    return send_from_directory("public/games/", filename + ".html")

@app.route("/quizzes/<path:filename>/")
def quizzes(filename):
    return send_from_directory("public/quizzes/", filename + ".html")

@app.route("/src/<path:filename>")
def src(filename):
    return send_from_directory("public/src", filename)

app.run(port=80)
