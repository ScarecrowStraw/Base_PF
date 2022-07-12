# python3.6

import random
import json
from paho.mqtt import client as mqtt_client
import pymongo
from pymongo import MongoClient

def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "localhost:27017"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['fawdb']

def insert_collection(name_db, name_coll, item):
     # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "localhost:27017"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient

    client = MongoClient(CONNECTION_STRING)
    dbname = client[name_db]
    collection_name = dbname[name_coll]
    collection_name.insert_one(item)

def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        # print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")
        m_decode =str(msg.payload.decode("utf-8"))
        print("message",m_decode)
        post = json.loads(m_decode)
        name_db = post['name_gate']
        name_coll = post['id_device']['type']
        insert_collection(name_db, name_coll, post)

    client.subscribe(topic)
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()


if __name__ == '__main__':
    run()
