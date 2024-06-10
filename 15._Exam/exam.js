/* 

  Create vite by:

  npm create vite
  - svelte
  - javascript
  - cd client
  - npm install
  - npm run dev
  - delete public/vite.svg
  - delete src/assets
  - delete src/lib
  - delete content in App.svelte

*/




/* 

 Create Express Server

 npm init -y
 add type: module
 npm install express
 
 create app.js
 - import express
 - create instance of express
 - Create PORT
 - Make app listen on port

*/

/* 

  Add route
  - ""
  - (req, res)
  - res.send()

*/

/* 
  REQUEST BODY

  To be able to receive JSON in req.body remember to add
  app.use(express.JSON())

*/

/* 
  REQUEST QUERY

  localhost:8080/?username=steffen@localhost.com
  const query = req.query;

*/

/* 
  REQUEST PARAMS

  "/:username"

  const params = req.params;
  const username = params.username;

*/

/* 
  ROUTERS

  Step 1:
  - import object Router from express ({Router})
  - Create instance of router in variable router
  - export default router
  - Add the  router

  Step 2:
  - Import the router
  - Tell app to use the new router
 
  
*/
