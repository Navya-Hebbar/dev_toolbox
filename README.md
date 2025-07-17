
---

## Getting Started

### 1. **Clone the repository**
```sh
git clone https://github.com/Navya-Hebbar/dev_toolbox.git
cd dev_toolbox
```

### 2. **Install Frontend Dependencies**
```sh
npm install
```

### 3. **Install Backend Dependencies**
```sh
cd backend
npm install
cd ..
```

### 4. **Run the Backend**
```sh
cd backend
npm start
```
The backend will start on [http://localhost:5000](http://localhost:5000).

### 5. **Run the Frontend**
```sh
npm start
```
The frontend will start on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

- `POST /format-json`  
  `{ json: "<raw_json_string>" }` → `{ success, pretty | error }`
- `POST /encode`  
  `{ text: "<plain_text>" }` → `{ success, encoded | error }`
- `POST /decode`  
  `{ base64: "<base64_string>" }` → `{ success, decoded | error }`

---

## How to Use

- **JSON Formatter:**  
  Paste raw JSON, click "Format", and copy prettified JSON. Errors are shown with interactive Lottie feedback.
  **Example:**
  - **Input:**
    ```json
    {"name":"Alice","age":25,"skills":["JavaScript","React"]}
    ```
  - **After clicking "Format", Output:**
    ```json
    {
      "name": "Alice",
      "age": 25,
      "skills": [
        "JavaScript",
        "React"
      ]
    }
    ```
- **Base64 Encoder/Decoder:**  
  Enter text or Base64, click "Encode" or "Decode", and copy the result.
  **Example:**
  - **To Encode:**
    - **Input:**  
      ```
      Hello, world!
      ```
    - **Click:** Encode
    - **Output:**  
      ```
      SGVsbG8sIHdvcmxkIQ==
      ```

  - **To Decode:**
    - **Input:**  
      ```
      SGVsbG8sIHdvcmxkIQ==
      ```
    - **Click:** Decode
    - **Output:**  
      ```
      Hello, world!
      ```
- **Dark Mode:**  
  Use the toggle in the top right for a glowing dark theme.

---

## What I'd Improve With More Time

- Add a database (e.g., MongoDB) to store and display all processed JSON (bonus feature).
- Add Docker support for easy deployment.
- Add user authentication for personalized history.
- Add more tools (e.g., JWT decoder, UUID generator, etc).
- Polish accessibility and add more Lottie effects.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [LottieFiles](https://lottiefiles.com/)
- [Express](https://expressjs.com/)

---

> Made with ❤️ for developer productivity!