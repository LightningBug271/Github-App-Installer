const { execSync } = require('child_process');
let commandGit = "winget install git.git --scope user";
let commandVS = "winget install Microsoft.VisualStudioCode --scope user";
let commandPWSH = "winget install Microsoft.Powershell --source winget";
let commandUI = "winget install Devolutions.UniGetUI --scope user";
let commandCo = "winget install GitHub.Copilot";
let commandLFS = "winget install GitHub.LFS";
let commandHub = "winget install GitHub.GitHubDesktop";
let commandJS = "winget install OpenJS.NodeJS.LTS --scope user";
let commandEl = "winget install -e --id OpenJS.Electron.44"
let commandNote = "winget install notepad++ --scope user"
execSync(commandGit, 0, false); 
execSync(commandVS, 0, false); 
execSync(commandPWSH, 0, false);
execSync(commandUI, 0, false); 
execSync(commandCo, 0, false);
execSync(commandLFS, 0, false);  
execSync(commandHub, 0, false); 
execSync(commandJS, 0, false); 
execSync(commandEl, 0, false); 
execSync(commandNote, 0, false); 