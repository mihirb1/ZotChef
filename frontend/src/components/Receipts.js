import React, { useState, useEffect } from "react";
import CardItem from "./CardItem"; // Import the CardItem component
 // Import the CSS for cards
import "./Receipts.css";
import { Button } from "./Button";
import { Link }from "react-router";

function ReceiptsPage() {
    const [receipts, setReceipts] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    // sets receipt to be an empty list 
    
    //useEffect runs when page loads
    useEffect(() => {
      // attempts to get receipts (getItem method) saved in current session (sessionStorage) at key "receipts"
      const storedReceipts = JSON.parse(sessionStorage.getItem("receipts")) || [];
      setReceipts(storedReceipts);
    }, []);
  
    //used to save receipts into sessionStorage (when user is on website, only called when receipts value is changed aka handleFileUpload)
    //receipts are saved in "receipts" key of sessionStorage, value is JSON representation of receipts
    useEffect(() => {
      sessionStorage.setItem("receipts", JSON.stringify(receipts));
    }, [receipts]);
  
    //event is automatically passed by react due to onChage
    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);
  
      files.forEach((file) => {
          console.log(file)
          const formData = new FormData();
          formData.append("file", file);
          for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
          }

          // /process_receipt will automatically call process_receipt() method
          fetch("http://localhost:5000/process_receipt", {
              method: "POST", // Ensure this is POST
              body: formData
          })
              .then((response) => response.json())
              .then((data) => setIngredients(data.ingredients))
              .catch((error) => console.error("Error:", error));
      });
  
      const newReceipts = files.map((file) => ({
          url: URL.createObjectURL(file),
          name: file.name,
      }));
      setReceipts((prev) => [...prev, ...newReceipts]);
  };  
  
    // index parameter is index or receipt you want to delete
    const handleRemoveReceipt = (index) => {
        // filter function goes through array (prev/current receipts), with value _ and index i and adds elemtns with i != index to prev array
        // (prev) => is called a state update, which updates the current state of receipts and rerenders
      setReceipts((prev) => prev.filter((_, i) => i !== index));
    };
  
    return (
      <div className="receipts">
        <div className="upload-container">
          
          <h1 class = "title">Upload receipts from your computer: </h1>
          {/* allows user to select multiple files (multiple onChange) */}
          <input class="upload" type="file" multiple onChange={handleFileUpload} />
        </div>
        <div className="cards">
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                {/* map function efficiently goes through receipts and renders CardItem based on its attributes */}
                {/* receipt, and index are parameters, what is returned is after the => */}
                {receipts.map((receipt, index) => (
                  <div>
                  <CardItem
                    key={index}
                    src={receipt.url}
                    text={`${receipt.name}`}
                    label="Added" 
                    path="#"
                  />
                    <button className = "remove-button" onClick = {() => handleRemoveReceipt(index)}>Remove</button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="for_button">
          {/* redirects to /recipes */}
          <Link to={`/recipes?ingredients=${ingredients.join(",")}`}>
          <button className="bottom_button" >
            Generate recipes!
          </button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default ReceiptsPage; 