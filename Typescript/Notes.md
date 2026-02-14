# What is TS?
- It's a superset of JS which is more type safe. Here TS adds the "Safety units" into UR code. 
- JS being dynamic, varaiable which is assigned will be determined only at run time. The same variable that stores string could be a number after some time. 
- TS gives static typing where it catches the errors while U write the code instead of evaluating at runtime. 

# Key Issue:
- Browsers cannot directly TS files. They support only JS files. 
- Typescript transpiles(Transforms) the code into std JS files that are consumed by the Application. 

# Installation points:
1. Nodejs and npm ->Runtime and the package Manager of JS libraries. 
2. Typescript compiler ->Downloaded using npm or from MS website.
3. Text Editor-> VS Code, as it has built in support for using Typescript.

```
npm install -g typescript

# Verify ts:
tsc -v
```

# Starting TS files.
1. The tsconfig.json is a file that provides settings for the typescript. It tells how the JS code be generated and other options for testing purposes. 
2. Run a cmd called tsc --init to generate a config file. 
3. Important options:
    a. target : tells the version of JS to generate. (ES6, ESNext)
    b. outDir : Location of the output dir and name for it. 
    c. rootDir : location of the src files of UR Typescript. 



