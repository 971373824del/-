#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
科学素养测评系统数据服务器
用于实现跨平台数据共享
"""

import http.server
import socketserver
import json
import os

PORT = 8002
DATA_FILE = "student_data.json"

# 创建数据文件（如果不存在）
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f)

class DataHandler(http.server.BaseHTTPRequestHandler):
    def _set_headers(self, content_type="application/json"):
        self.send_response(200)
        self.send_header("Content-type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        """获取所有学生数据"""
        self._set_headers()
        
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

    def do_POST(self):
        """保存学生数据"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            new_student_data = json.loads(post_data.decode('utf-8'))
            
            # 读取现有数据
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                all_data = json.load(f)
            
            # 检查是否已存在相同学生的数据
            existing_index = -1
            for i, student in enumerate(all_data):
                if (student['name'] == new_student_data['name'] and
                    student['grade'] == new_student_data['grade'] and
                    student['className'] == new_student_data['className'] and
                    student['testDate'] == new_student_data['testDate']):
                    existing_index = i
                    break
            
            # 更新或添加数据
            if existing_index >= 0:
                all_data[existing_index] = new_student_data
            else:
                all_data.append(new_student_data)
            
            # 保存数据
            with open(DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(all_data, f, ensure_ascii=False, indent=2)
            
            self._set_headers()
            self.wfile.write(json.dumps({"success": True, "message": "数据保存成功"}, ensure_ascii=False).encode('utf-8'))
            
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "message": "JSON格式错误"}, ensure_ascii=False).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "message": str(e)}, ensure_ascii=False).encode('utf-8'))

    def do_DELETE(self):
        """删除学生数据"""
        content_length = int(self.headers['Content-Length'])
        delete_data = self.rfile.read(content_length)
        
        try:
            student_to_delete = json.loads(delete_data.decode('utf-8'))
            
            # 读取现有数据
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                all_data = json.load(f)
            
            # 查找并删除数据
            new_data = [student for student in all_data if not (
                student['name'] == student_to_delete['name'] and
                student['grade'] == student_to_delete['grade'] and
                student['className'] == student_to_delete['className'] and
                student['testDate'] == student_to_delete['testDate']
            )]
            
            # 保存数据
            with open(DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(new_data, f, ensure_ascii=False, indent=2)
            
            self._set_headers()
            self.wfile.write(json.dumps({"success": True, "message": "数据删除成功"}, ensure_ascii=False).encode('utf-8'))
            
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "message": "JSON格式错误"}, ensure_ascii=False).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "message": str(e)}, ensure_ascii=False).encode('utf-8'))

def run_server():
    """启动服务器"""
    try:
        with socketserver.TCPServer(("", PORT), DataHandler) as httpd:
            print(f"\n科学素养测评系统数据服务器启动")
            print(f"服务器地址: http://localhost:{PORT}")
            print(f"数据文件: {DATA_FILE}")
            print("按 Ctrl+C 停止服务器\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
    except Exception as e:
        print(f"服务器启动失败: {e}")

if __name__ == "__main__":
    run_server()
