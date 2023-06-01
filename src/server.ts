import mongoose from "mongoose";

import app from "./app";
import config from "./config";


//parsee


async function main() {
   
   try {
    await mongoose.connect(config.database_url as string);
    console.log("database is connection successful"); 
    app.listen(config.port, () => {
        console.log(` server is listening on port ${config.port}`)
      })

    } catch (error) {
         console.log("database is not connection successful",error);
    }
  }

  main();