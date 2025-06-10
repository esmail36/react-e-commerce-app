# 🛍️ Simple React E-Commerce App

This is a basic e-commerce front-end built with React.js. It includes core shopping cart features and basic authentication functionality. The app is designed to be simple and easy to extend with an API in the future.

---

## ✨ Features

- View a list of products
- Add items to the cart
- Remove items from the cart
- Update item quantities inside the cart
- Simple login system (no backend yet)
- Uses local storage to persist cart and login state

---

## 🧰 Technologies Used

- React.js
- React Hooks (useState, useContext)
- React Router
- CSS Modules / Plain CSS
- localStorage

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/esmail36/react-e-commerce-app.git
cd react-e-commerce-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


🔗 API (Not Integrated Yet)
---------------------------
    This project currently runs without an API. You can connect it to a backend later by:

    Replacing static product data with API calls

    Sending cart actions (add/remove/update) to a backend

    Implementing login with real authentication (e.g., JWT)



📁 Project Structure
```bash
src/
├── components/  
    ├──CartComponents
    ├──images
    ├──styles
├── pages/          
├── utils/          
├── data/          
└── App.jsx
```

🚧 To-Do / Future Improvements
---------------------------
    Connect to a real backend/API

    Add checkout and order pages

    Improve user authentication

    Add product categories and filters

    Use a global state manager like Redux


📃 License
------------
    This project is open-source and available under the MIT License.