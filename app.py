from flask import Flask, render_template, request, send_file
from autopep8 import fix_code

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file_type = request.form['fileType']

    if file and (file_type == 'python' or file_type == 'php'):
        content = file.read().decode('utf-8')
        corrected_content = fix_code(content)
        corrected_filename = file.filename.replace('.py', '_corrected.py').replace('.php', '_corrected.php')

        with open(corrected_filename, 'w') as corrected_file:
            corrected_file.write(corrected_content)

        return send_file(corrected_filename, as_attachment=True)
    else:
        return "Invalid file or file type."

if __name__ == '__main__':
    app.run(debug=True)
