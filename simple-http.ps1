# Simple HTTP Server in PowerShell

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()

Write-Host "Server running at http://localhost:8080"
Write-Host "Press Ctrl+C to stop"

while ($listener.IsListening)
{
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $filePath = $request.Url.LocalPath
    
    # Redirect root to weather_website.html
    if ($filePath -eq "/")
    {
        $filePath = "/weather_website.html"
    }
    
    $filePath = Join-Path (Get-Location) ($filePath.Substring(1))
    
    if (Test-Path $filePath -PathType Leaf)
    {
        $content = Get-Content -Path $filePath -Raw
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
        
        # Set content type based on file extension
        $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
        switch ($extension)
        {
            ".html" {$response.ContentType = "text/html; charset=UTF-8"}
            ".js" {$response.ContentType = "application/javascript"}
            ".css" {$response.ContentType = "text/css"}
            ".png" {$response.ContentType = "image/png"}
            ".jpg" {$response.ContentType = "image/jpeg"}
            default {$response.ContentType = "text/plain"}
        }
        
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    }
    else
    {
        $response.StatusCode = 404
        $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    }
    
    $response.Close()
}

$listener.Stop()
$listener.Close()