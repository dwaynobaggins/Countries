### Clone this repository

     git clone  
     

Once the repository has been cloned, you will have two folders; **json_builder** and client.   
**json_builder** is for creating the .json files that will be used later by the client, and the **client** folder contains everything necessary to use those files.
There are node dependencies for this project and they will need to be installed in both folders.

### Install the dependencies

     npm install  
     
This command will need to be issued *twice*, inside both the **json_builder** and **client** folders

### Run a Http server localhost:5555

To operate the client frontend, you will need a server, which you can initilize on port 5555

     npm run serve
     
### Build the client project

The frontend is ready to go once cloned, but you can update it and then run the build (which transpiles the .js through Babel) 

     npm run build
