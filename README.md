# Initiation node.js ESGI
[ESGI] Initiation à node.js

How to make the app works locally : 

​    1) Do a "git clone" on the repository

​    2) Install npm : "npm install"

​    3) Launch the server : "npm start"

​    4) The server is launched , you can try with "curl http://localhost:3000"

How to use the app on the web : 

1) Access to https://nodeinitiation.herokuapp.com/

Endpoints : 

- GET : 

  - / -> Return "Hello World !"

  - /hello -> Return "Quel est votre nom ? "

  - /hello?nom=<name> -> Return "Bonjour, <name>"

    

- POST : 

  - \msg\ville -> Return "Nous sommes à Paris"
  - \msg\météo -> Return "Il fait beau"

