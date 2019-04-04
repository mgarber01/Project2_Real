import sqlalchemy
import pandas as  pd 
import os 
import plotly
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
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__ ))

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+os.path.join(basedir,"BEER.sqlite.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
class annual_production(db.Model):
    __tablename__ = 'annual_production'
    index =  db.Column('index',db.Integer,primary_key = True)
    year =  db.Column('year',db.String(64))
    brewery_size= db.Column('brewry_size',db.String(64))
    brewery_count = db.Column('brewier_count',db.String(64))
    total_barrels = db.Column('total_barrels',db.String(64))
    domestic_consumption = db.Column('domestic_consumption',db.String(64))
    exported_barrels = db.Column('exported_barrels',db.String(64))

db2 = SQLAlchemy(app)
class vw_total_prod_by_size(db2.Model):
    __tablename__ = "vw_total_prod_by_size"
    index = db2.Column("index",db2.Integer,primary_key = True)
    brewery_size = db2.Column('brewry_size',db2.String(64))
    
    total_barrels = db2.Column('total_barrels',db2.String(64))
   
    




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
            annual_production_dict['brewery_size'] = x.brewery_size
            annual_production_dict['brewery_count'] = x.brewery_count
            annual_production_dict['total_barrels'] = x.total_barrels
            annual_production_dict['domestic_consumption'] = x.domestic_consumption
            annual_production_dict['exported_barrels'] = x.exported_barrels
            annual_production_list.append(annual_production_dict)
        return jsonify(annual_production_list)
    



@app.route("/grab/data", methods = ['GET'])
def grab2():
     if request.method == "GET":
        view_list = []
        results = db2.session.query(vw_total_prod_by_size).all()
        for x in results:
            view_dict = {}

            view_dict['brewery_size'] = x.brewery_size
            view_dict['total_barrels'] = x.total_barrels
            view_list.append(view_dict)
        return jsonify(view_list)

        

        
   

@app.route("/")
def home():
    return render_template("index.html")  
    

if __name__ == '__main__':
    app.run()