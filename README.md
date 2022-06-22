# React Password Generator
<img src='public\logo-192x192.png'>

> <b>Author: Nicola De Nicolais</b>

This code represents a Password Generator created with React with the addition of React Router.

## 💻 Technologies used
[<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="70">](https://reactjs.org/)

React.js is a JavaScript library for creating user interfaces specific to single-page applications. It allows developers to create large web applications that can modify data without having to reload the page every time.

[<img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width="80">](https://reactrouter.com/)

React Router is a complete JavaScript routing library that allows you to manage paths within a web application using so-called dynamic routing. It allows navigation between sections of various components in React applications and allows you to change the URL of the browser while keeping the user interface synchronized with the URL.
### Installation
```
npm install react-router-dom
yarn add react-router-dom
```

[<img src="https://user-images.githubusercontent.com/5574267/54994574-df4c1380-4fc4-11e9-8509-1d3aedbc7b96.png" width="80">](https://fkhadra.github.io/react-toastify/introduction)

React-Toastify allows you to add notifications to your app in an easy way.
### Installation
```
npm install --save react-toastify
yarn add react-toastify
```

[<img src="https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png" width="80">](https://fontawesome.com/)

Font Awesome is the Internet's icon library and toolkit.
### Installation
```
npm install --save font-awesome
yarn add font-awesome
```

## 🛠️ Installation Steps
In the project folder we can perform several actions:

1) Clone this repository from GitHub.
```
git clone https://github.com/ndenicolais/react-password-generator
```

2) Change the working directory
```
cd react-password-generator-main
```

3) Install dependencies
```
npm install
yarn
```

4) Run the application in developer mode
```
npm run dev
yarn dev
```

5) Open "localhost" to view the application in the browser.

## ⚙️ Customization

Customize the aspect of React-toastify according to your preferences by editing these parameters:

📄 App.js file in 📂 src

|Parameter|Description|
|-|-|
|position|position of the toast|
|autoClose|delay in ms to close the toast. If set to false the notification needs to be closed manually|
|hideProgressBar|display or not the progress bar below the toast(remaining time)|
|newsOnTop|display newest toast on top|
|closeOnClick|dismiss toast on click|
|pauseOnHover|keep the timer running or not on hover|
|draggable|allow toast to be draggable|
|progress|show a progress bar|

```
In this list there are only the parameters that i've used in the code.
For all parameters see React-toastify's documentation.
```