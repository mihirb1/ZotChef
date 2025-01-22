from flask import render_template, url_for, request, Response, jsonify 
import json
from zotchef import app
# added for receipt processing
from PIL import Image
import pytesseract
import os
import google.generativeai as genai
# added for cross-origin resource sharing (CORS) aka for diff ports
from flask_cors import CORS
from zotchef import app

CORS(app)

genai.configure(api_key="AIzaSyBAAbv9FkoPcW5o-xfKJ8yb7SwUyVvagsU")
model = genai.GenerativeModel("gemini-1.5-flash")

# makes uploads folder if it does not exist yet
UPLOAD_FOLDER = 'uploads'  
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def get_ingredients(text):
    prompt = "Given the following receipts, find the main ingredients and convert them into more generalized terms. For example, GRAPE TOMATO is Tomato, GRND TURKEY is Turkey, KFT SINGLES is cheese. Only respond with the names of the generalized terms. Do \
    not write anything else. Exclude non-food items. Return the ingredients in a single, comma-separated line" + text
    #print(prompt)
    response = model.generate_content(prompt)
    print(response.text)
    return response.text.strip('\n').split(", ")


def extract_receipt_data(image_path):

    try:
        # tries to open image at specified path using Pillow (PIL)
        image = Image.open(image_path)
        # uses pytesseract image_to_string method to convert to text, then returns it
        extracted_text = pytesseract.image_to_string(image)
        return extracted_text
    except Exception as e:
        return f"Error processing image {image_path}: {e}"

@app.route("/")
@app.route("/home")
def home():
    # finds files if they exist in teh current directory
    receipt_images = ["costco.png", "walmart.png"]

    all_ingredients = []
    # goes through list of receipts
    for receipt_image in receipt_images:
        # checks if each image exists in the current file system
        if os.path.exists(receipt_image):
            extracted_text = extract_receipt_data(receipt_image)
            ingredients = get_ingredients(extracted_text)
            all_ingredients += ingredients
            #print(extracted_text)
            #print(ingredients)

        else:
            print(f"File {receipt_image} not found.")
    
    data = {'ingredients': list(set(all_ingredients))}
    return Response(json.dumps(data), mimetype='application/json')

    # TODO: connect to React react-website, get receipt photos, save to folder in flask
    # process using images user uploades to React website, not from static file

@app.route("/process_receipt", methods=["POST"])
def process_receipt():

    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        extracted_text = extract_receipt_data(filepath)
        ingredients = get_ingredients(extracted_text)

        return jsonify({'ingredients': ingredients})
    return jsonify({'error': 'Unexpected error'}), 500

@app.route("/routes", methods=["GET"])
def list_routes():
    return jsonify([str(rule) for rule in app.url_map.iter_rules()])