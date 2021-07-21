function pwd () {
      var output = process.cwd();
      process.stdout.write(output);
      process.stdout.write("\nprompt > ");
}

module.exports = pwd