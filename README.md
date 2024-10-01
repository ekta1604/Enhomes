#### Enhomes
Enhomes is a smart application designed to efficiently manage various apartment communities, villas, and housing societies. This intuitive platform revolutionizes communication by enabling seamless updates to be shared via mobile devices, email, and more.
##### Problem
Managing maintenance bills, pending payments, agendas, meeting minutes, circulars, notices, and accounting tasks in apartment communities is time-consuming and challenging for residents and housing societies.
##### Solution
Enhomes serves as a valuable tool for apartment management, aiming to automate all manual tasks associated with housing apartments by simplifying administrative tasks. With Enhomes, users can easily track and pay maintenance bills, ensuring timely payments. They can also stay updated on important agendas, meeting minutes, circulars, and notices, fostering effective communication within the community. The platform eliminates the need for manual paperwork, reducing errors and saving time for both residents and the Managing Committee.

##### Technologies Used

Backend: Node.js
Frontend: Java (Android)

##### Major Functions

1. Login and Sign-up

Separate login for Admins and Residents
Registration required before login
Roles: Admin, Residents


2. Retrieve Members List

List of all apartment members with contact details
Includes basic information: first name, last name, email, gender, dob, profession, contact no., and residence information
Role: Admin


3. Book Clubhouse

Check availability of clubhouse
Book for specific days
Pay rent for booking
Role: Residents


4. Facility Management

Manage pump operator
Manage staff (maintenance worker, sweeper)
Notify for basic services
Maintain payment services
Role: Admin (specific users like chairman or secretary)


5. Staff Attendance Function

Focused on security and house helpers
Manages schedules and details of security persons/house helpers
Role: Admin


6. Complaints and Suggestion Function

Residents can add suggestions and issue complaints
Visible to all society members
Role: Residents



##### Getting Started
To set up the Enhomes project locally, follow the instructions below:

###### Prerequisites
Node.js (Backend)
Ensure that Node.js is installed on your system. You can download it from Node.js official website.
Make sure you have npm (Node Package Manager) installed, which comes with Node.js.
Java Development Kit (JDK) (Frontend - Android)
Install the latest JDK from Oracle's official site.
Ensure Android Studio is installed for Android app development.
###### Installation
Backend Setup (Node.js):
Clone the repository:
``` git clone <repository-url> ```
Navigate to the backend directory:
``` cd enhomes/backendapi ```
Install dependencies:
``` npm install ```
Set up environment variables:
Create a .env file in the root directory of the backend.
Add the following details (adjust based on your environment):
makefile
``` DB_URL=<your-database-url> ```
``` JWT_SECRET=<your-jwt-secret> ```
Start the backend server:
``` npm start ```
Frontend Setup (Android):
Open the Android project in Android Studio:
``` cd enhomes/esociety ```
Build the project and ensure all dependencies are installed.
Run the Android app on an emulator or physical device.
Configuration
Adjust configuration settings for both backend and frontend in their respective .env or config.json files.

License
This project is licensed under the MIT License – you are free to use, modify, and distribute this software under the terms of the license.
Contact
For any questions, support, or further inquiries, please contact us at: 
Ekta Patel - exp6089@mavs.uta.edu
Paridhi Patel - psp9595@mavs.uta.edu
