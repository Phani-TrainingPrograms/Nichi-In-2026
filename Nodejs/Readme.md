# Node js
- Its a JS platform for developing JS applications out of browser. 
- It uses Chrome's V8 Engine for its processing.
- Its a single threaded environment that internally uses Chrome's Thread pool to perform all its actions and events asynchronously. 
- Its Light and powerful completing the JS requirement on all kinds of Applications.
- Developed by Ryan Dyhl for executing js code on a Unix machine when he was working in Joyant Technologies. 
- Later Joyant collaborated with Dyhl and continued to support Nodejs. 

# Node package Manager(NPM)
- Its a central repository of all the Nodejs components distributed as packages that are licenced under MIT where users can consume it for non commercial purposes. 
- Most of the components developed by the Nodejs developers shall be made available to rest of the community using NPM. 
- There is a licenced version of Nodejs which is proprietory and has more security features that allows licensed users to consume the packages. 

# How to work in Nodejs. 
1. Install the nodejs environment from the Nodejs website https://nodejs.org/en/download.
2. U can use the (Long Term Support) LTS version of the Environment.
3. Once U set the Environment variables of PATH, U R ready to use nodejs from the Windows Cmd prompt. 
4. Node provides REPL(Read, Evaluate, Print loop) that allows to run node commands from the terminal and wait for the next command from the user. 

# How to execute Nodejs Apps
1. Create a Nodejs Application like a JS files in a designated folder.
2. From the terminal, run the Node command to execute the app. 
3. Nodejs is asynchronous and non blocking thread ->No UI related functions can be used in Nodejs.  

# Features of Nodejs
1. Server side JS: Runs JS outside the browser for all kinds of back end development. 
2. Asynchronous programming: Handles Multiple requests efficiently using a Event driven model.
3. Single Threaded Event loop:  Manages mutitple tasks using Thread pool instead of creating new threads. 
4. Light weight: Helps in developing microservices and high traffic apps. 
5. NPM: Has 100s of reusable open source components of Nodejs available thru a central repository called NPM.

# NODE Modules
1. JS code in Nodejs is exported in the form of modules. It is based in CommonJs. They are self contained units that can be exported as Modules and imported from the other end to consume those modules.
2. A Nodejs Application could be any folder that has a file called package.json. The package.json contains the settings required to start UR application, dependencies of UR package, testing environment. For ES6 Modules, U should have package.json that contains an attribute called module which tells what kind of module it is.  




