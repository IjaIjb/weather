from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

API_KEY = "8631408bbd50406cba0131620232505"

@app.route('/forecast', methods=['GET'])
def get_forecast():
    location = request.args.get('location')  # Get location from query params
    if not location:
        return jsonify({"error": "Location is required"}), 400

    url = f"https://api.weatherapi.com/v1/forecast.json"
    params = {
        "key": API_KEY,
        "q": location,
        "days": 3,
        "aqi": "no",
        "alerts": "no"
    }

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        forecast_data = response.json()
        return jsonify(forecast_data)
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
