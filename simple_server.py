import http.server
import socketserver

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/weather_website.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

try:
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print("服务器运行在 http://localhost:{}".format(PORT))
        print("按 Ctrl+C 停止服务器")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n服务器已停止")