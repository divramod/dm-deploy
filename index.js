// =========== [ REQUIRE ] ===========
var co = require("co");
var prompt = require("co-prompt");
var colors = require("colors");
require("shelljs/global");

// =========== [ DEFINE ] ===========
var job = {};

// =========== [ npmName.start ] ===========
job.start = function() {
    var arg = process.argv[2];
    if (!arg) {
        console.log("You have to run npm init! After that you can do the following!".red);
        dmNpm.help();
    } else {
        if (arg === "-help" || arg === "-h") {
            dmNpm.help();
        } else {

            if (arg === "-index") {
                dmNpm.createIndexJs();
            }
            if (arg === "-test" || arg === "-t") {
                dmNpm.createTest();
            }
            if (arg === "test") {
                dmNpm.test();
            }
            if (arg === "-gitignore" || arg === "-g") {
                dmNpm.createGitignore();
            }
            if (arg === "-readme" || arg === "-r") {
                dmNpm.createReadme();
            }
            if (arg === "-init" || arg === "-i" || arg === "init") {
                dmNpm.init();
            }
            if (arg === "-install" || arg === "-in" || arg === "install") {
                dmNpm.install();
            }
        }
    }
}; // npmName.start

// =========== [ dmNpm.help() ] ===========
job.help = function() {
    var version = require(__dirname + "/package.json").version;
    console.log();
    console.log("          dm-deploy (".yellow + version.yellow + ") help".yellow);
    console.log("==============================================");
    console.log("-help | -h".yellow + "      --> help");
}; //dmNpm.help()

// =========== [ job.createTag() ] ===========
// TODO
job.createTag = function() {
  console.log("job.createTag");
  return "test";
}; //job.createTag()


module.exports = job;
