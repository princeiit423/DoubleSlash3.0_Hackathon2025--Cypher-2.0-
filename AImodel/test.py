import requests

url = "http://127.0.0.1:8000/predict"  # Change endpoint if needed
files = {"file": open("demo.jpeg", "rb")}

response = requests.post(url, files=files)
print(response.json())  # Print prediction result
