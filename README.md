# Initiation node.js ESGI
<u>How to make the app works locally :</u> 

​    1) Do a `git clone` on the repository

​    2) Install npm : `npm install`

​    3) Launch the server : `npm start`

​    4) The server is launched , you can try with `curl http://localhost:3000`

<u>How to use the app on the web :</u> 

1) Access to https://nodeinitiation.herokuapp.com/

<u>Endpoints :</u> 

- GET : 

  - / -> Return "Hello World !"

  - /hello -> Return "Quel est votre nom ? "

  - /hello?nom=<name> -> Return "Bonjour, <name>"

    

- POST (locally): 

  - `curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat` -> Return and stock "Nous sommes à Paris"
  - `curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat` -> Return and stock "Il fait beau"
  - `curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" http://localhost:3000/chat` -> Return "Je ne connais pas demain" if the information is not stocked
  - `curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"<X> = <Y>\"}" http://localhost:3000/chat` -> Return "Merci pour cette information ! " and will stock it
  
  - `curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"<X>\"}" http://localhost:3000/chat` Return "<x>: <Y>" if the information is known 
  
  To make it works on the web , just replace *"localhost:3000"* by *"nodeinitiation.herokuapp.com"*
  
  
  
- DELETE : 

  - `curl -X DELETE http://localhost:3000/messages/last` -> Delete the last message of an user AND the bot

  To make it works on the web , just replace *"localhost:3000"* by *"nodeinitiation.herokuapp.com"*

**Things to know : All the interaction between an user and the bot are saved**