using System;
using System.Diagnostics;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        string[] commands = new string[]
        {
            "install git.git --scope user --silent --accept-source-agreements --accept-package-agreements",
            "install Microsoft.VisualStudioCode --scope user --silent --accept-source-agreements --accept-package-agreements",
            "install --id Microsoft.PowerShell --source winget --silent --accept-source-agreements --accept-package-agreements",
            "install Devolutions.UniGetUI --scope user --silent --accept-source-agreements --accept-package-agreements",
            "install GitHub.GitLFS --silent --accept-source-agreements --accept-package-agreements",
            "install -e --id GitHub.GitHubDesktop --silent --accept-source-agreements --accept-package-agreements",
            "install OpenJS.NodeJS.LTS --scope user --silent --accept-source-agreements --accept-package-agreements",
            "install -e --id OpenJS.Electron.44 --silent --accept-source-agreements --accept-package-agreements",
            "install -e --id Microsoft.Sysinternals.ProcessExplorer --scope user --silent --accept-source-agreements --accept-package-agreements",
            "install notepad++ --scope user --silent --accept-source-agreements --accept-package-agreements"
        };

        Console.WriteLine("Starting WinGet installations...\n");

        foreach (string argument in commands)
        {
            await RunWinGetCommandAsync(argument);
        }

        Console.WriteLine("\nAll installations finished execution.");
    }

    static async Task RunWinGetCommandAsync(string arguments)
    {
        Console.WriteLine($"Executing: winget {arguments}");

        ProcessStartInfo startInfo = new ProcessStartInfo
        {
            FileName = "winget",
            Arguments = arguments,
            UseShellExecute = false,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            CreateNoWindow = true
        };

        try
        {
            using (Process process = Process.Start(startInfo))
            {
                if (process == null)
                {
                    Console.WriteLine("Failed to start process.");
                    return;
                }

                // Start reading one stream asynchronously to prevent deadlocks
                Task<string> errorReader = process.StandardError.ReadToEndAsync();
                
                // Read the output stream on the current thread
                string output = await process.StandardOutput.ReadToEndAsync();
                string error = await errorReader;

                await process.WaitForExitAsync();

                if (!string.IsNullOrWhiteSpace(output))
                {
                    Console.WriteLine(output);
                }

                if (!string.IsNullOrWhiteSpace(error))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Error: {error}");
                    Console.ResetColor();
                }

                Console.WriteLine($"Finished with exit code: {process.ExitCode}\n----------------------------------------");
            }
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Failed to run command. Details: {ex.Message}");
            Console.ResetColor();
            Console.WriteLine("\n----------------------------------------");
        }
    }
}
