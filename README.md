# ZotChef 🍽️  
**From Receipts to Recipes — Smart Cooking Made Simple**

ZotChef is a full-stack web application that transforms your grocery receipts into personalized recipe recommendations. By leveraging OCR technology, AI-based ingredient recognition, and recipe APIs, ZotChef helps reduce food waste and makes meal planning effortless.

---

## 🚀 Features

- 🧾 **Receipt Upload:** Upload a grocery receipt image and let ZotChef extract the text.
- 🔍 **OCR Text Recognition:** Uses **Tesseract OCR** with 93% accuracy to extract ingredients.
- 🧠 **Ingredient Standardization:** Utilizes **Google Gemini-1.5 Flash** for cleaning and standardizing item names.
- 🥘 **Recipe Generator:** Connects to the **Spoonacular API** to generate 20–25 relevant recipes with full details.
- 🔐 **User Authentication:** Secure login and session management using **Clerk**.
- 💾 **Session History:** View previously uploaded receipts and recommended recipes.
- ☁️ **Deployed on AWS:** Hosted on **AWS EC2** with **S3** for file storage.

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** Flask (Python)  
- **OCR:** Tesseract, Pytesseract  
- **Authentication:** Clerk  
- **AI Ingredient Cleaning:** Google Gemini-1.5 Flash  
- **API Integration:** Spoonacular  
- **Cloud Hosting:** AWS EC2 & S3  

---

## 📷 Screenshots

<!-- Add actual screenshots in your GitHub repo and reference them like this:
![Upload Page](./screenshots/upload_page.png)
![Recipe Results](./screenshots/recipes.png)
-->

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/zotchef.git
cd zotchef
