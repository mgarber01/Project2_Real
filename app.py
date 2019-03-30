import sqlalchemy
import pandas as  pd 
import os 
   # from sqlalchemy.ext.automap import automap_base
    ##from sqlalchemy.orm import Session
    #from sqlalchemy.orm import scoped_session, sessionmaker
    #from sqlalchemy import create_engine, func
    #from flask import Flask,jsonify
    #import datetime as dt 
df = pd.read_excel('BeerData2.xlsx')

## OR 

from flask import (
    Flask,
    render_template,
    jsonify,
    request)

from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__ ))

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+os.path.join(basedir,"BEER.db.sqlite")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)




@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        nickname = request.form["nickname"]
        age = request.form["age"]

        pet = Pet(nickname=nickname, age=age)
        db.session.add(pet)
        db.session.commit()

        return "Thanks for the form data!"

    return render_template("form.html")


@app.route("/api/data")
def list_pets():
    results = db.session.query(beer_data., beer_data., beer_data.).all()

    mylist  = []
    for result in results:
        pets.append({
           "nickname": result[0],
            "age": result[1]
        })
    return jsonify(pets)
