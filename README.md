# Recipe-app
A small Recipe website where anybody can search recipes and make it particular recipe according to instructions
Backend :-
npm install
for start locally server :- npm run start 
User-registration API :- https://salmon-moose-slip.cyclic.cloud/register
User-login API :- https://salmon-moose-slip.cyclic.cloud/login
Search API :- https://salmon-moose-slip.cyclic.cloud/getrecipe?query=${recipe name}&page=${page number}&limit=${total number of recipe for every page}&sortby=${sortCategory name }&sort=${sortorder(asc||desc}
Detailed Recipe API:- https://salmon-moose-slip.cyclic.cloud/getdetailedrecipe/{recipe id};
For every API (expect registration and login API) We have to pass token in headers as key name of authorization 
Frontend :- 
npm install
for start locally app :- npm run start 
