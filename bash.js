const process = require("process");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  if (cmd === "pwd") {
    var output = process.cwd();
  } else {
    var output = "You typed: " + cmd;
  }
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
});
