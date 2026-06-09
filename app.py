from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")

client = MongoClient(os.getenv("MONGO_URI"))
db = client["arkark"]
users_collection = db["users"]

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


class User(UserMixin):
    def __init__(self, user_data):
        self.id = str(user_data["_id"])
        self.username = user_data["username"]


@login_manager.user_loader
def load_user(user_id):
    user_data = users_collection.find_one(
        {"_id": ObjectId(user_id)}
    )

    if user_data:
        return User(user_data)

    return None


@app.route("/")
@login_required
def inicio():
    return render_template(
        "Inicio.html",
        username=current_user.username
    )


@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        user_data = users_collection.find_one(
            {"username": username}
        )

        if user_data and check_password_hash(
            user_data["password"],
            password
        ):

            user = User(user_data)

            login_user(user)

            return redirect(url_for("inicio"))

        flash("Usuario o contraseña incorrectos")

    return render_template("Login.html")


@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if users_collection.find_one(
            {"username": username}
        ):

            flash("Ese usuario ya existe")
            return redirect(url_for("register"))

        users_collection.insert_one({
            "username": username,
            "password": generate_password_hash(password)
        })

        flash("Registro exitoso")

        return redirect(url_for("login"))

    return render_template("Register.html")


@app.route("/logout")
@login_required
def logout():

    logout_user()

    return redirect(url_for("login"))


@app.route("/resident")
@login_required
def resident():
    return render_template("RE.html")


@app.route("/undertale")
@login_required
def undertale():
    return render_template("UDTL.html")


@app.route("/fnaf")
@login_required
def fnaf():
    return render_template("FNAF.html")


@app.route("/cuphead")
@login_required
def cuphead():
    return render_template("CUP.html")


@app.route("/pokemon")
@login_required
def pokemon():
    return render_template("PK.html")


@app.route("/genshin")
@login_required
def genshin():
    return render_template("GI.html")


@app.route("/little-nightmares")
@login_required
def little_nightmares():
    return render_template("LN.html")


@app.route("/poppy-playtime")
@login_required
def poppy():
    return render_template("PPT.html")


@app.route("/zelda")
@login_required
def zelda():
    return render_template("ZLD.html")


if __name__ == "__main__":
    app.run(debug=True)