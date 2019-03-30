import sqlalchemy
import pandas as  pd 
import os 
   # from sqlalchemy.ext.automap import automap_base
    ##from sqlalchemy.orm import Session
    #from sqlalchemy.orm import scoped_session, sessionmaker
    #from sqlalchemy import create_engine, func
    #from flask import Flask,jsonify
    #import datetime as dt 


## OR 

from flask import (
    Flask,
    render_template,
    jsonify,
    request)

from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__ ))

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+os.path.join(basedir,"BEER.sqlite.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
class annual_production(db.Model):
    __tablename__ = 'annual_production'
    index =  db.Column('index',db.Integer,primary_key = True)
    year =  db.Column('year',db.String(64))
    Barrels= db.Column('Barrels (31 gallons) (2)',db.String(64))
    Breweries_Count = db.Column('Number of Breweries (1)',db.String(64))
    Total_Barrels = db.Column('Total Barrels (3)',db.String(64))
    Taxable_Removals = db.Column('Taxable Removals (4)',db.String(64))
    Total_Exported = db.Column('Total Shipped (Exported) (6)')
    




#@app.route("/get", methods=["GET", "POST"])
#def send():
    #if request.method == "GET":
        
       #results = db.session.query(annual_production).all()

       # return "Thanks for the form data!"

   # return render_template("form.html")


@app.route("/api/data")
def list_beer():
    annual_procucktion_list = []
    results = db.session.query(annual_production).all()
    for x in results:
        annual_procucktion_dict = {}
        annual_procucktion_dict['index'] = x.index
        annual_procucktion_dict['year'] = x.year
        annual_procucktion_dict['Barrels'] = x.Barrels
        annual_procucktion_dict['Breweries_Count'] = x.Breweries_Count
        annual_procucktion_dict['Taxable_Removals'] = x.Taxable_Removals
        annual_procucktion_dict['Total_Exported'] = x.Total_Exported
        annual_procucktion_list.append(annual_procucktion_dict)
    return jsonify(annual_procucktion_list)

@app.route("/")
def home():
    return "Welcome!"   
    

if __name__ == '__main__':
    app.run()