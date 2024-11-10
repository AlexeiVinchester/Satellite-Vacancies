
# Satellite Vacancies

## Introduction

The **Satellite Vacancies** app allows you to:
- Load job vacancies from MongoDB.
- View the number of applications for each vacancy.
- Apply for a vacancy by submitting your email.
  
If there are no vacancies in your "vacancies" collection in MongoDB, the server will initialize it with sample vacancies from `/backend/data/vacancies.js`. By default, six vacancies are available for initialization.

Additionally, the app can check the applicant's country based on their IP and restrict applications to those from Belarus. If both your client and MongoDB are running on localhost, the server will skip this country check.

---

### 1. Clone the Repository 

```bash
git clone git@github.com:AlexeiVinchester/Satellite-Vacancies.git
cd Satellite-Vacancies          
```

### 2. Install Dependencies 

From the `Satellite-Vacancies/` directory:

```bash
npm install
cd frontend/
npm install
cd ../backend/  
npm install
cd ..
```

---

### 3. Set Up Environment Variables

You need `.env` files for both the frontend and backend, specifying base URLs and other environment-specific settings.

- **frontend/.env**

  ```plaintext
  VITE_LOCAL_URL=your_local_url 
  # Example: VITE_LOCAL_URL=http://localhost:3002

  VITE_BASE_URL=your_base_url 
  # Example: VITE_BASE_URL=https://your-remote-server.net
  ```

  - If your server is remote, set `VITE_BASE_URL` to the server's URL.
  - For local testing on localhost, set `VITE_LOCAL_URL` and leave `VITE_BASE_URL` blank.
  - For testing with ngrok, `VITE_BASE_URL` will be automatically set by the server when you start with `npm run start:ngrok` (see Step 5).

- **backend/.env**

  ```plaintext
  PORT=your_port 
  # Example: PORT=3002

  DB_CONNECTION_STRING=your_database_connection_string 
  # Example: DB_CONNECTION_STRING=mongodb://localhost:27017/local

  MONGO_COLLECTION_VACANCIES=your_vacancies_collection_name
  # Example: MONGO_COLLECTION_VACANCIES=vacancies

  MONGO_COLLECTION_APPLICATIONS_FOR_VACANCIES=your_applications_collection_name
  # Example: MONGO_COLLECTION_APPLICATIONS_FOR_VACANCIES=vacancies_applications
  ```

---

### 4. Running the Full Project (Local or Remote Server)

If you are running both the client and MongoDB on localhost, the IP check will be automatically skipped. Use the following commands to start the app in this setup:

- **Full Start** (frontend and backend together):

  ```bash
  npm run start:all
  ```

- **Separate Start**:

  - Start frontend:

    ```bash
    cd frontend/
    npm run dev
    ```

  - Start backend:

    ```bash
    cd backend/
    nodemon server.js
    ```

If you are using a remote server, the country check will still be active by default.

---

### 5. Running the Project with IP Country Check (using ngrok)

To test the country check feature locally, you can use [ngrok](https://ngrok.com/) to create a virtual domain for your server. This will simulate a non-local server, allowing you to test IP-based restrictions. With a VPN, you can further test responses from different countries.

- **Separate Start with ngrok**:

  - Start frontend:

    ```bash
    cd frontend/
    npm run dev
    ```

  - Start backend with ngrok:

    ```bash
    cd backend/
    npm run start:ngrok
    ```

- **Full Start with ngrok** (frontend and backend together):

  ```bash
  npm run start:all-ngrok
  ```

---

Now you’re ready to use the **Satellite Vacancies** app! Test vacancy loading, application submission, and the country-based application restriction. Enjoy!
