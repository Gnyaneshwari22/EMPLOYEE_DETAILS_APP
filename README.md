# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# PROJECT NAME:MY ASSIGNMENT FOR CURD OPERATIONS USING REACT JS 


Welcome to the documentation for Create, Upadte,Read ,Delete operations using react JS. This document provides information on how to install and use the project.


## Table of Contents

1. Introduction
2. Working Flow
3. Prerequisites
4. API Reference
  
   
   ## INRODUCTION

   In my project, I employ the React library along with essential hooks like 'useState', 'useEffect', 'useParams', and 'useNavigate'. Additionally, I rely on the React Router library to facilitate UI navigation and leverage the JSON Server as a REST API to perform Create, Read, Update, and Delete (CRUD) operations on my local development server. To enhance the visual appeal and user experience, I incorporate the Bootstrap framework for styling throughout my React application.
   
  ## WORKING FLOW
  
  I.Set Up Your Project:

   First, created a new React project and set up a JSON server for API. You can use create-react-app for the React app and json-server    for the API.
   
  II.Then, created my own JSON server API by creating a db.json file with some initial data
  
  III.Started the JSON server with command
       json-server --watch db.json --port 8000
       
   IV.In App Component used Browser router for different routes .
   
   V.Created Components for CURD operations such as these cpmonents are explained in API reference section
      1.EmpListing    2.EmpCreating   3.EmpEdit  4.EmpDetail  
      
      
  VI.Testing: Testing the app by running npm start for the React app and json-server --watch db.json --port 8000 for the JSON server.
      
      
      
 ## PREREQUESITIONS 
 
 
     1.Visual Studio Code IDE 
     2.Creating React App using NPX 
     3.Installing Bootstrap
     4.Installing json-server     



## API REFERENCE:

     Using the above mentioned components I am able to make  API calls to perform CURD opeartion as explained below
        1.EmpListing :The "EmpListing" component serves as the default route ('/') on the home page of the application. It utilizes the "useEffect" hook to initially fetch and display the current employee details on the user interface. This data is managed using the "useState" hook. To delete a specific employee's information, the "RemoveFunction" is invoked, which triggers a DELETE request to the endpoint "http://localhost:8000/employee" with the corresponding employee ID.
  
        2.EmpCreating :The "EmpCreating" component employs the Bootstrap Form class to facilitate the creation of employee records. It is accessible through the route "http://localhost:8000/employee/create" and employs the HTTP POST method to submit new employee details. Additionally, it leverages the "useState" hook to ensure that any modifications made to the data are accurately reflected on the user interface.
        
        3.EmpEdit: This component is accessible via the route ('/employee/edit/:empid'). It shares similarities with the "EmpCreating" component but differs in its functionality. Instead of creating new records, it utilizes the HTTP PUT method to update existing user details. This update is carried out through a "fetch" request to the endpoint "http://localhost:8000/employee/" along with the specific Employee ID. Additionally, it relies on the "useState" hook to ensure that any changes made to the data are promptly reflected on the user interface.
        
        
        4.EmpDetail :We access this component through the path '/employee/detail/:empid'. Within this component, it utilizes a "fetch" request to 'http://localhost:8000/employee/' with a specific empID as part of its functionality. This request is encapsulated within a "useEffect" hook, and the retrieved employee details are subsequently rendered on the user interface.

        
   
   