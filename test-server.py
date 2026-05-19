import http.server
import socketserver
import os

# 设置端口
PORT = 8000

# 确保当前工作目录正确
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# 创建简单的HTTP请求处理器
class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    # 处理默认路由，当访问根目录时重定向到weather_website.html
    def do_GET(self):
        if self.path == '/':
            self.path = '/weather_website.html'
        return super().do_GET()

# 创建服务器
with socketserver.TCPServer(('', PORT), MyHttpRequestHandler) as httpd:
    print(f"本地测试服务器已启动，访问地址: http://localhost:{PORT}")
    print(f"按 Ctrl+C 停止服务器")
    try:
        # 启动服务器
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
