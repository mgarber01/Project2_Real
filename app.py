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
    Brewery_Size= db.Column('Barrels (31 gallons) (2)',db.String(64))
    Breweries_Count = db.Column('Number of Breweries (1)',db.String(64))
    Total_Barrels = db.Column('Total Barrels (3)',db.String(64))
    Domestic_Consumption = db.Column('Taxable Removals (4)',db.String(64))
    Exported_Barrels = db.Column('Total Shipped (Exported) (6)')
    




#@app.route("/get", methods=["GET", "POST"])
#def send():
    #if request.method == "GET":
        
       #results = db.session.query(annual_production).all()

       # return "Thanks for the form data!"

   # return render_template("form.html")


@app.route("/grab", methods = ["GET"])

def grab():
    if request.method == "GET":
        annual_production_list = []
        results = db.session.query(annual_production).all()
        for x in results:
            annual_production_dict = {}
            
            annual_production_dict['year'] = x.year
            annual_production_dict['Brewery_Size'] = x.Brewery_Size
            annual_production_dict['Breweries_Count'] = x.Breweries_Count
            annual_production_dict['Total_Barrels'] = x.Total_Barrels
            annual_production_dict['Domestic_Consumption'] = x.Domestic_Consumption
            annual_production_dict['Exported_Barrels'] = x.Exported_Barrels
            annual_production_list.append(annual_production_dict)
        return jsonify(annual_production_list)
    return render_template("index.html")

@app.route("/")
def home():
    return render_template("index.html")  
    

if __name__ == '__main__':
    app.run()