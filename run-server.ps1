# 简单的HTTP服务器脚本
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
$listener.Start()
Write-Host "Web服务器已启动，访问地址：http://localhost:8000"
Write-Host "按Ctrl+C停止服务器"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # 获取请求的文件路径
        $filePath = $request.Url.LocalPath
        if ($filePath -eq "/") {
            $filePath = "/weather_website.html"
        }
        $filePath = Join-Path $PSScriptRoot ($filePath -replace "^/", "")

        # 检查文件是否存在
        if (Test-Path $filePath -PathType Leaf) {
            # 设置内容类型
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css" }
                ".js" { "application/javascript" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType

            # 读取文件内容并发送
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # 文件不存在，返回404
            $response.StatusCode = 404
            $response.ContentType = "text/plain"
            $content = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Web服务器已停止"
}
