from flask import Flask, render_template, request, jsonify
import openai
import os

app = Flask(__name__)

# Configura tu clave de API de OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_message = request.form['message']
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    bot_message = response.choices[0].message['content']
    return jsonify({'response': bot_message})

if __name__ == "__main__":
    app.run(debug=True)
