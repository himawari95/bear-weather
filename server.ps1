$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8888/')
$listener.Start()
Write-Host 'Server running at http://localhost:8888/'

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $filePath = Join-Path (Get-Location) $request.Url.LocalPath.TrimStart('/')
    
    if ($filePath -eq (Get-Location)) {
        $filePath = Join-Path $filePath 'weather_website.html'
    }
    
    if (Test-Path $filePath -PathType Leaf) {
        $content = Get-Content -Path $filePath -Encoding Byte
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
    }
    
    $response.Close()
}