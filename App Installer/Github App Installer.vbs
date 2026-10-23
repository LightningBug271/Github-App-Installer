Set objShell = CreateObject("WScript.Shell")
objShell.Run "winget install git.git --scope user", 0, False
objShell.Run "winget install Microsoft.VisualStudioCode --scope user", 0, False
objShell.Run "winget install --id Microsoft.PowerShell --source winget", 0, False
objShell.Run "winget install Devolutions.UniGetUI --scope user", 0, False
objShell.Run "winget install GitHub.Copilot", 0, False
objShell.Run "winget install GitHub.GitLFS", 0, False
objShell.Run "winget install -e --id GitHub.GitHubDesktop", 0, False
objShell.Run "winget install OpenJS.NodeJS.LTS --scope user", 0, False
	