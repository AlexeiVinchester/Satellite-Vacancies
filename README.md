Satellite Vacancies

Introduction: 

Satellite Vacancies app has an opportunity to load vacancies from MongoDB, to load amount of applications for different vacancies and also give you an opportunity to send apply for each vacancy entering your email. If you have no vacancies in your "vacancies" DB, server will check it and add some initial vacancies. You can fill this initial array in /backend/InitialValues/initialVacancies.js. There are six vacancies by default. 

Also this app has an opportunity to check country of applying by ip and avoid applying for vacancy not from Belarus.

If your client and your MongoDB are in localhosts, this checking will be skipped by server. 

1. Clone repository 

git clone git@github.com:AlexeiVinchester/Satellite-Vacancies.git

cd Satellite-Vacancies          

2. Install dependencies 

npm install (in Satellite-Vacancies/) 

cd frontend/

npm install

cd ..

cd backend/  

npm install

cd..

3. Environment variables

You should have .env files both in frontend and backend parts where you should save your base urls for app

- frontend/.env

VITE_LOCAL_URL=your_local_url 

(example: VITE_LOCAL_URL=http://localhost:3002)

VITE_BASE_URL=your_base_url 

(example: VITE_BASE_URL=https://something.net)

(As for this value: VITE_BASE_URL - if you save your server somewhere not locally, you should put it's url here, and follow step 4. If you don't have your server remote, you don't need to put VITE_BASE_URL, and if you want to test work locally on localhosts for client and DB, folow step 4 (in this case server will skip checking of country).

But if you want to test work of this application with ngrok api, there is no need to put value VITE_BASE_URL in .env because server will do it in the next step. When you will start server with ngrok it will check this field in frontend/.env and put new ngrok domain inside as a value of VITE_BASE_URL)

- backend/.env

PORT=your_port 

(example: PORT=3002)

DB_CONNECTION_STRING=your_database_connection_string 

(example DB_CONNECTION_STRING=mongodb://localhost:27017/local)

MONGO_COLLECTION_VACANCIES=your_name_of_vacancies_table

(example MONGO_COLLECTION_VACANCIES=vacancies)

MONGO_COLLECTION_APPLICATIONS_FOR_VACANCIES=your_name_of_applications_for_vacancies_table

(example MONGO_COLLECTION_APPLICATIONS_FOR_VACANCIES=vacancies_applications)

4. Running of full project locally or with your remote server

This application should work with checking of country of applying for vacancy
If you work locally, when your client in localhost and your DB in localhost, this app has such opportunity to skip checking of ip in this case. To run app only in this way, you can next steps. 

- full start 

cd Satellite-Vacancies/

npm run start:all

If you want separately: 

- start frontend 

cd frontend/

npm run dev

- start backend

cd backend/  

nodemon server.js

Also it will work the same way if you will have remote server (but with checking of country).

5. Running of full project with ip checking

This application should work with checking of country while applying for vacancy. In order to test app locally you can change your server url with ngrok api. It can help you to made an illusion that your server is not locally. And ngrok will give new virtual domain to your server. And with VPN on your computer or browser you can test checking of country.

- If you want to run separately, follow this instructions:

srart frontend

cd frontend/

npm run dev

start backend

cd backend/  

npm run start:ngrok

- But if you want to start your app once, follow this

full start 

cd Satellite-Vacancies/

npm run start:all-ngrok

