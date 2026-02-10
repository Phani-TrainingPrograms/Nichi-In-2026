//OS module is used for getting OS related information like CPU, Memory, Home Directory, Temp Directory, etc.
import os from 'os';

console.log("Operating System Info:");
console.log("Platform:", os.platform());//platform of the OS
console.log("Architecture:", os.arch());//Architecture of the OS
console.log("CPU Info:", os.cpus());//No of cpus and its info
console.log("Total Memory:", os.totalmem());//Total memory 
console.log("Free Memory:", os.freemem());//Free memory
console.log("Home Directory:", os.homedir());//Gets the Home Directory of the current user
console.log("Temporary Directory:", os.tmpdir());
console.log("Uptime (in seconds):", os.uptime());//Total time in seconds since the OS was started.