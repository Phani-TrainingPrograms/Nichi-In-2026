# Introduction ot MONGODB.
1. MongoDB is a NoSQL, document-oriented database designed for high scalability and flexibility. Unlike traditional Dbs, it stores the data into BSON(Binary JSON) docs.

# Features of MongoDB.
- Document : A record in Mongodb, similar to Row of SQL. 
- Collection: Group of Docs, similart o table of SQL
- Schema-less: Documents in the same collection can have different fields(column). 
- Scalability: Uses "Sharding " to distibute data across multiple apps. 

# Installation
1. Download the Community Edition from the Mongodb Website https://www.mongodb.com/try/download/community
2. Run the .msi file. Choose Complete. 
3. Choose Compass if U want IDE for working with MongoDB. 
4. To install the Mongodb Shell for using it as CLI, U should install it from https://www.mongodb.com/try/download/shell. 
5. Choose the msi and download the file and install it. 
6. Set the Path environment variable to the bin folder, so that U can execute Mongo Commands from the terminal.
7. Open the terminal and type mongosh. If the shell opens, U R ready to work with it. 


# Important commands
```
mongosh
use MySampleDatabase;
db.createCollection("empList");
db.empList.insertOne({empId: 123, empName: 'Phaniraj', empAddress: "Bangalore", empSalary: 45000})
db.empList.insertMany(
    [
        {empId: 124, empName: 'Banu Prakash', empAddress: "Yelahanka", empSalary: 55000},
        {empId: 125, empName: 'Vinod Kumar', empAddress: "Shimoga", empSalary: 35000},
        {empId: 126, empName: 'Joydip Mondal', empAddress: "Kolkata", empSalary: 30000},
        {empId: 127, empName: 'Ramnath Nishad', empAddress: "Noida", empSalary: 30000}
    ]
)
```
1. mongosh is the command used to open the shell for database interactions.
2. use is used to switch to the database, if the database does not exist, it shall create and switch. 
3. createCollection function of the db object allows to create a new collection. Optionally U can add size and other security restrictions. 
4. insertOne allows to insert single record into the collection. the structure of the data shall be a Javascript object. For bulk insertions, use insertMany 
