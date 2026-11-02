import { execSync } from "node:child_process";
import * as readline from "node:readline";

interface AppDefinition {
    name: string;
    command: string;
}

const apps: AppDefinition[] = [
    { name: "Git", command: "winget install git.git --scope user --accept-source-agreements --accept-package-agreements" },
    { name: "VS Code", command: "winget install Microsoft.VisualStudioCode --scope user --accept-source-agreements --accept-package-agreements" },
    { name: "PowerShell", command: "winget install Microsoft.Powershell --source winget --accept-source-agreements --accept-package-agreements" },
    { name: "UniGetUI", command: "winget install Devolutions.UniGetUI --scope user --accept-source-agreements --accept-package-agreements" },
    { name: "GitHub Copilot", command: "winget install GitHub.Copilot --accept-source-agreements --accept-package-agreements" },
    { name: "Git LFS", command: "winget install -e --id GitHub.GitLFS --accept-source-agreements --accept-package-agreements" },
    { name: "GitHub Desktop", command: "winget install GitHub.GitHubDesktop --accept-source-agreements --accept-package-agreements" },
    { name: "Node.js", command: "winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements" },
    { name: "TypeScript", command: "npm install -g typescript" },
    { name: "Electron", command: "winget install -e --id OpenJS.Electron.44 --accept-source-agreements --accept-package-agreements" },
    { name: "Notepad++", command: "winget install Notepad++.Notepad++ --scope user --accept-source-agreements --accept-package-agreements" }
];

function askYesNo(promptText: string): Promise<boolean> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`${promptText} [Y/N]: `, (answer: string) => {
            rl.close();
            const normalized = answer.trim().toLowerCase();
            resolve(normalized === "y" || normalized === "yes");
        });
    });
}

async function installApp(app: AppDefinition): Promise<void> {
    const confirmed = await askYesNo(`Install ${app.name}?`);

    if (!confirmed) {
        console.log(`${app.name}: Installation canceled.`);
        return;
    }

    try {
        console.log(`Installing ${app.name}...`);
        execSync(app.command, { stdio: "inherit" });
        console.log(`Installation Complete: ${app.name}`);
    } catch (error) {
        const status = typeof error === "object" && error !== null && "status" in error ? Number((error as { status?: number }).status) : "unknown";
        console.error(`Install failed for ${app.name}. Exit code: ${status}`);
    }
}

async function main(): Promise<void> {
    console.log("GithubAppInstaller - TypeScript Edition");
    console.log("Starting Installation");

    for (const app of apps) {
        await installApp(app);
    }

    console.log("All requested installs have been attempted.");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Press Enter to exit...", () => {
        rl.close();
        process.exit(0);
    });
}

main();