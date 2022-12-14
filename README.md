# 🌎 Operation Mother Earth -  Backend 
Operation Mother Earth is a multi-page application for school-age children to learn about electronic waste.  The web application in mobile responsiveness is intended to be played on a mobile or tablet device.  The application consists of a storyboard game, google search for e-waste centers around the client, user to add ew-waste centers to the server, ask questions and post questions, and view a collection of videos about e-waste. 

## 🚀 Demo
https://operation-mother-earth.netlify.app/

## 💻 Built with
<li>Axios</li>
<li>MongoDB</li>
<li>Express</li>
<li>Node.js</li>
<li>Mongoose</li>
<li>Google-API</li>
<li>RESTful APIs</li>
<li>uuidv4</li>

## Install/Run
When you open the directory run:
<p>npm install</p>
<p>In the project directory, run:</p>
<p>npm start</p>
<p>The frontend for this project is located on repo <a href="https://github.com/revyrob/operation-mother-earth-client">operation-mother-earth-client</a><p>
<p>You will need to open and run the frontend for the backend to work.</p>

## 🛠️ Installation Steps:
1. To start using this app you first need to clone the repository:

    git clone git@github.com:revyrob/operation-mother-earth-server.git

2. Run with MongoDB:

   Within the Data folder there are 5 folders with json data for the projects.  Import these files into your MongoDB database and enter your DB_URI key into the     environment file.
   OR
   You can also run the <a href="https://github.com/revyrob/operation-mother-earth-jsonServer">operation-mother-earth-jsonServer</a> if you don't want to create a MongoDB database.

3. Create a .env file within the root folder. Create a google api key with Google Cloud.  Create a MongoDB account and add your DB_URI key. Include the following into the .env file:

    PORT = 8080
    REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = Google API key
    DB_URI = MongoDB connection line

4. Run the backend with the following command in the folder:

    npm start
    
5. Locate the frontend repo at <a href="https://github.com/revyrob/operation-mother-earth-client">operation-mother-earth-client</a> and follow install steps.


## 🔮 Future Plans for Operation Mother Earth

<li>Searching for funding to continue and grow
this application.</li>
<li>Add different game levels for different ages.
</li>
<li>Continue to research and add questions and resources about e-waste.
</li>
<li>The application to be in french and english.
</li>
<li>Trial the application with a local school.
</li>
