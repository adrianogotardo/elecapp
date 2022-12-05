const { exec } = require("child_process");
const app = require('./server/app');


// All of the Node.js APIs are available in the preload process.
window.addEventListener("DOMContentLoaded", () => {
  console.log("preload carregando, server será gerado agr");
  //exec(`npm run server`);
  console.log("sever gerado?");
  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
});