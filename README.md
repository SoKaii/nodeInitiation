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

  - /chat -> \msg\ville -> Return "Nous sommes à Paris"
  - /chat -> \msg\météo -> Return "Il fait beau"
  - /chat -> \msg\demain -> Return "Je ne connais pas demain" si aucun jour n'a été donné précédemment ou "<day>" si un jour de lendemain à été stocké
  - /chat -> \msg\demain = <day> -> Return "Merci pour cette information"

