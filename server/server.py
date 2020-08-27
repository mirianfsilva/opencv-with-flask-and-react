from flask import Flask, render_template, request, jsonify, redirect, url_for, session, make_response, Response
from flask_cors import CORS, cross_origin
import os
from cv2 import *
import numpy as np
import os
import random
from celery import Celery
import time
import tensorflow as tf
from werkzeug.utils import secure_filename

APP_ROOT = os.path.dirname(os.path.abspath(__file__))   # refers to application_top

app = Flask(__name__)

CORS(app)


def progress_helper():
    # faking progess
    millis = int(round(time.time() * 1000))
    progress = (millis / ((1584307819064)+4400000000000))
    return progress

def gen(camera):
    capture = cv2.VideoCapture(camera)
    current_frame = 0
    while True:
        sucess, frame = capture.read()
        if(sucess):
            frame_name = "framevideo.jpg"
            #extracting frames from video
            cv2.imwrite(frame_name, frame) 
            
            frame = open(frame_name,'rb').read()
            yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video_feed', methods=['GET'])
def video_feed():
    pathVideo = f"{APP_ROOT}/static/video/site.mp4"
    return Response(gen(pathVideo), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')


@app.route('/user', methods=['GET'])
def get_user_account_info():
    user = {"Name": "David Tennant"}
    response = jsonify(user)
    return response


@app.route('/ontime', methods=['GET'])
def ontime():
    dict = {"ontime":str(progress_helper()*.70)}
    return jsonify(dict)

@app.route('/progress', methods=['GET'])
def progress():
    dict = {"progress":str(progress_helper())}
    return jsonify(dict)

@app.route('/defects',methods=['GET'])
def defects():
    defects = {"1":{"Type": "Settlement Cracking",
                    "Description": "Potential unsupported structure",
                    "Importance": "High",
                    "Priority": "Urgent",
                    "Confidence":".30"},

               "2": {"Type": "Structural Cracking",
                     "Description": "Stress-induced concrete delamination",
                     "Importance": "High",
                     "Priority": "Urgent",
                     "Confidence": ".90"},

               "3": {"Type": "Shrinkage",
                     "Description": "Plastic shrinkage likely via rapid drying",
                     "Importance": "Medium",
                     "Priority": "Urgent",
                     "Confidence": ".40"},

               "4": {"Type": "Hairline",
                     "Description": "Plastic shrinkage",
                     "Importance": "Low",
                     "Priority": "Not Urgent",
                     "Confidence": ".90"},

               "5": {"Type": "Hairline",
                     "Description": "Plastic shrinkage",
                     "Importance": "Low",
                     "Priority": "Not Urgent",
                     "Confidence": ".70"},


               }

    return jsonify(defects)

@app.route('/employees/<type>', methods=['GET'])
def take_building_photo(type):

    # format is jobrole:name
    onsite = {"Manager":"David Tennant", "Structural Engineer" :"Janice Yu",
               "Electrician" :"Frank Smith", "Worker I": "Chris Lewis",
               "Worker II": "Alice Summers", "Structural Engineer" :"Luke Parker",
               "Worker I": "Mark Davis"}


    all = {"Manager":"David Tennant", "Structural Engineer" :"Janice Yu",
               "Electrician" :"Frank Smith", "Worker I": "Chris Lewis",
               "Worker II": "Alice Summers", "Structural Engineer" :"Luke Parker",
               "Worker I": "Mark Davis", "Architect" : "Michael Jackson",
               "Concrete Specialist": "Suzie McMaster", "Worker III": "Dave Plank"}

    response = jsonify({})
    if type == "onsite":
        response = jsonify(onsite)
    elif type == "all":
        response = jsonify(all)

    return response

@app.route('/photo_of_wall/<type>', methods=['GET'])
def take_wall_photo(type):
    image_binary = open(APP_ROOT + "/static/walls/" + type + ".png", 'rb').read()
    response = make_response(image_binary)
    response.headers.set('Content-Type', 'image/jpeg')
    return response

if __name__ == '__main__':
    app.run(threaded=True, host="0.0.0.0", port=5003)