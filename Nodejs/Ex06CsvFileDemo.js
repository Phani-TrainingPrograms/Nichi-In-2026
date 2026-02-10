import fs from 'fs';
//We are not using any 3rd party module to read and write CSV files. We will use the fs module to read and write CSV files as they are just text files with comma separated values.


const csvContent = "Name, City, Salary, \nPhaniraj, Bangalore, 50000, \nSuresh, Chennai, 45000, \nRamesh, Mumbai, 55000";

fs.writeFile('employees.csv', csvContent, (err) => {
    if (err) {
        console.error("Error writing CSV file asynchronously:", err);
    } else {
        console.log("CSV file written successfully using asynchronous method.");
    }
});

//read each line, split by comma and print the details in a formatted way.
fs.readFile('employees.csv', 'utf8', (err, data) => {
    if (err) {
        console.log('Error while reading the file:', err);
    } else {
        const lines = data.split('\n');//Split into lines
        lines.forEach(line => {//read each line
            const fields = line.split(',');//split by comma to get individual fields
            console.log(fields);
        });
    }
});

//Using fs, try to add a new employee record to the existing CSV file.
//Find the Employee from the file,
//Create a new Program to store the data as JSON format in a file named employees.json
// U should be able to read the data also. 