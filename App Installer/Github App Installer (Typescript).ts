const { execSync } = require('child_process');
const readline = require('readline');

function pauseForConfirmation() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Press Enter to exit...', () => {
        rl.close();
        process.exit(0); 
    });
}
const apps = [
  { name: 'Git', cmd: 'winget install git.git --scope user --accept-source-agreements --accept-package-agreements' },
  { name: 'VS Code', cmd: 'winget install Microsoft.VisualStudioCode --scope user --accept-source-agreements --accept-package-agreements' },
  { name: 'PowerShell', cmd: 'winget install Microsoft.Powershell --source winget --accept-source-agreements --accept-package-agreements' },
  { name: 'UniGetUI', cmd: 'winget install Devolutions.UniGetUI --scope user --accept-source-agreements --accept-package-agreements' },
  { name: 'GitHub Copilot CLI', cmd: 'winget install GitHub.Copilot --accept-source-agreements --accept-package-agreements' },
  { name: 'Git LFS', cmd: 'winget install -e --id GitHub.GitLFS  --accept-source-agreements --accept-package-agreements'},
  { name: 'GitHub Desktop', cmd: 'winget install GitHub.GitHubDesktop --accept-source-agreements --accept-package-agreements' },
  { name: 'Node.js LTS', cmd: 'winget install OpenJS.NodeJS.LTS  --accept-source-agreements --accept-package-agreements' },
  { name: 'Electron v44', cmd: 'winget install -e --id OpenJS.Electron.44 --accept-source-agreements --accept-package-agreements' },
  { name: 'Notepad++', cmd: 'winget install Notepad++.Notepad++ --scope user --accept-source-agreements --accept-package-agreements' }
];
const execOptions = { stdio: 'inherit' };
console.log('Starting Installation');
apps.forEach(app => {
  try {
    console.log(`Installing ${app.name}...`);
    execSync(app.cmd, execOptions);
    console.log(`Successfully installed ${app.name}.\n`);
  } catch (error) {
    console.error(`Failed to install ${app.name}. Moving to next item.\n`);
  }
});

console.log('Install Completed');
pauseForConfirmation();