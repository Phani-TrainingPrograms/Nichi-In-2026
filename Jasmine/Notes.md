# Jasmine Notes
## What is Jasmine?
1. Jasmine is a Behavior-Driven-Development(BDD) testing framework for JS. 
2. It is used for creating Unit Tests and integration Tests. 
3. It is executed on NODEJS Environment. 
4. There is no dependencies on any Browser related components like DOM, jQuery etc.

## Installation
1. Initialize the Project. Create a new Folder where you can execute Jasmine code.  npm init -y
2. Install Jasmine in your folder.
```
npm install --save-dev jasmine
```
3. Initialize the Jasmine Enviornment. This shall create folders for execution purpose. This shall create spec folder for Tests and adds the jasmine.json file for providing settings to jasmine. 
```
npx jasmine init
```

## Important Points:
1. Any Unit test shall follow the AAA structure
    - Arrange =>Provide the required settings for the testing purpose before it launches. 
    - Act => Execute the testable code (function)
    - Assert => verify the result with expected result 
2. Unit testing is arranged in this order:
    - describe =>Top level grouping of UR Tests(Math Operations)
    - it=> specific Unit Test that U wish to do(Add numbers, Subtract Numbers, Divide Numbers)
    - toBe => asserts the expected and actual results. 
    - toEqual => Deep equality.
    - toContain => Checks if a value exists within the array
    - toThrowError => Test if the function correctly throws the expected Exception.

## Mocking Unit Test objects.
1. Any module can be unit tested using Mock objects.
2. You should seperate the dependencies and functionalities and unit test the functionalities using dependency objects.     