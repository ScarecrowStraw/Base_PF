# python3.6

import random
import json
import pymongo
from pymongo import MongoClient
from datetime import datetime

def get_time_from_DB(name_db, name_coll):
    CONNECTION_STRING = "localhost:27017"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient

    client = MongoClient(CONNECTION_STRING)
    dbname = client[name_db]
    collection_name = dbname[name_coll]
    get_data = collection_name.find_one()
    return get_data['state_pump']['time_execution']['time_start']

def get_time_now():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return current_time

def check_match_time(time, othertime):
    if(time == othertime):
        return 1
    return 0

def execution():
    get_data = get_time_from_DB('farm1', 'LoRa')
    print("timer execution :", get_data)
    # print(get_time_now())
    check = check_match_time(get_data[0:5], get_time_now()[0:5])
    if(check == 1):
        print("execution...")

def run():
    execution()

if __name__ == '__main__':
    run()

