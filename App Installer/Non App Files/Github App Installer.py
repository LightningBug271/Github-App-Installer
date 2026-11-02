import subprocess
import sys

def winget(package_id: str):
    """
    Installs a package using Windows Package Manager (winget).
    Example package_id: 'Git.Git' or 'Mozilla.Firefox'
    """
    command = [
        "winget", "install", 
        "--id", package_id, 
        "--silent", 
        "--accept-package-agreements", 
        "--accept-source-agreements",
		"--scope", "user"
    ]
    
    print(f"Starting installation for {package_id}...")
    
    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        
        print("Installation completed successfully!")
        print("Output:", result.stdout)
        
    except subprocess.CalledProcessError as e:
        print(f"Installation failed with exit code {e.returncode}")
        print("Error details:", e.stderr)
        print("Standard Output:", e.stdout)

winget("VideoLAN.VLC")
winget ("git.git")
winget ("Microsoft.VisualStudioCode")
winget ("Microsoft.PowerShell")
winget ("Devolutions.UniGetUI")
winget (" GitHub.GitLFS")
winget (" GitHub.GitHubDesktop")
winget (" OpenJS.NodeJS.LTS")
subprocess.run(["npm", "install", "-g", "typescript"], check=True)
winget (" OpenJS.Electron.44")
winget (" Microsoft.Sysinternals.ProcessExplorer")
winget ("notepad++")
# WHAT HAPPENED TO PYTHON BEING EASY? THE JAVASCRIPT WAS 10 TIMES EASIER THAN THIS AND I JUST LEARNED IT! I'M SUPPOSED TO KNOW PYTHON! FUCK THIS IM OUT - @LightningBug271, 26.11.1
# Ok, I'm back, this isn't that hard.  - @LightningBug271, 26.11.1, One Hour later.