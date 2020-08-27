## Frontend Application using OpenCV with flask server

About this frontend project:
- This frontend was implemented using react with javascript.
- This implementation simulates the profile of the manager, as if he were logged into the application that monitors your construction. 
Through the menu/navbar, it is possible for the user in the application to be able to:
  - See the entire employee members;
  - See his profile;
  - Check the monitoring of his drone from the main page.

- On the drone monitoring page, it is possible for him to view:
  - Employees online,
  - Defects reported by the drone,
  - The footage of the drone.
  
- All data used in this solution, are responses from the endpoints made available on the server.
- To stream a footage to this web application, a python generating function was implemented, which consists of transmitting sequences of video frames for a Motion jpeg stream. 

## How to run the project?

In this development version, the server and the frontend must be started together, but on different ports and so the frontend can be served.

After cloned repo, to **run frontend** application: 
```
$ cd frontend
npm install
npm start
```
For the backend flask web serve, it'r required run the following command. It will install the packages according to the configuration file `requirements.txt`.
```
$ pip install -r requirements.txt
```
To **run web server** `python server/server.py`
