#   Tax-APIs

Tax-apis is a web application developed using Node.js, TypeScript and PostgreSQL. It allows users to manage tax data with features such as user registration, tax bracket management, and more.

# Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)

## Getting Started

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (instead of npm)
- [Docker](https://www.docker.com/) (for database setup)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Uyapfa/nest-tax-apis/tree/feature/tax-calculator-apis
   cd nest-tax-apis

2.  Install dependencies:
   ```bash
   yarn install


##  Database Setup

  Tax-apis uses PostgreSQL as the database. Follow the steps below to set up the database:

   1. Install Docker if not already installed: Docker Installation

   2. Run the following command to start the PostgreSQL database and Adminer:

   ```bash
   docker-compose up 

    PostgreSQL:
       Database Name: testDB
       Username: postgres
       Password: postgres
         Port: 5432
         Adminer:
                 Visit http://localhost:8080 to access Adminer.

##  Running the Application
       Run the application using the following command:
        
        ```bash
       yarn start
               
      The application will be available at http://localhost:3000.
      
