# Simple PowerShell HTTP Server
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8081/")
$listener.Start()

Write-Host "Server running at: http://localhost:8081"
Write-Host "Press Ctrl+C to stop the server"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Get the requested file path
        $localPath = $request.Url.LocalPath
        $filePath = "$PSScriptRoot$localPath"

        # If path ends with /, use weather_website.html by default
        if ($localPath -eq "/") {
            $filePath = "$PSScriptRoot\weather_website.html"
        }

        # Check if file exists
        if (Test-Path $filePath -PathType Leaf) {
            # Set content type based on file extension
            $ext = [System.IO.Path]::GetExtension($filePath)
            $contentType = "text/plain"
            switch ($ext) {
                ".html" { $contentType = "text/html" }
                ".css" { $contentType = "text/css" }
                ".js" { $contentType = "text/javascript" }
                ".json" { $contentType = "application/json" }
                ".png" { $contentType = "image/png" }
                ".jpg" { $contentType = "image/jpeg" }
                ".gif" { $contentType = "image/gif" }
                ".svg" { $contentType = "image/svg+xml" }
            }

            $response.ContentType = $contentType
            $response.StatusCode = 200

            # Read file content and send response
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # File not found
            $response.StatusCode = 404
            $content = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($content, 0, $content.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped"
}