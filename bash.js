const process = require("process");
const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require("./cat.js")

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim()
  if (cmd === "pwd") {
    pwd()
  } else if (cmd === "ls") {
    ls()
  } else if (cmd.split(' ')[0] === "cat") {
    cat(cmd.split(' ')[1])
  }
   else {
    process.stdout.write(cmd + " is not a legit command, try again! \nprompt > ")
  }
})