# python 3.6

import random
import time
import json
import pymongo
from pymongo import MongoClient

def insert_collection(name_db, name_coll, item):
     # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "localhost:27017"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient

    client = MongoClient(CONNECTION_STRING)
    dbname = client[name_db]
    collection_name = dbname[name_coll]
    collection_name.insert_one(item)

def publish():
    # co2 = "600"
    # month = "12"
    # day = "12"
    # hour = "12"
    # minute = "12"
    # msg_count = {
    # "data" : {
    #     "CO2": co2,
    #     "time" : {
    #         "mm" : month,
    #         "dd" : day,
    #         "h" : hour,
    #         "m" : minute
    #     }
    # }
    # }
    for x in range(1, 24, 1):
        for y in range(0, 60, 5):
            
            # print(type(msg))
           
            co2 = random.randint(600, 1000)
            month = "7"
            day = "7"
            hour = x
            minute = y 
            msg_count = {
            "data" : {
                "CO2": co2,
                "time" : {
                    "mm" : month,
                    "dd" : day,
                    "h" : hour,
                    "m" : minute
                }
            }
            }
            name_db = "WeatherStation"
            name_coll = "Other"
            insert_collection(name_db, name_coll, msg_count)
            # print(msg_count)

if __name__ == '__main__':
   publish()
