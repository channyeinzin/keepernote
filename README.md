# Keeper Note-taking Application

## Overview
**Keeper** is a web-based note-taking application designed to allow users to quickly jot down and organize their thoughts in a visually appealing manner. Built with React and integrated with a simple authentication system, Keeper ensures that your notes are private and secure.

## Features
- **Create Notes:** Users can add new notes with a title.
- **View Notes:** All notes are displayed on the main page for easy access.
- **Delete Notes:** Users can remove notes they no longer need.
- **User Authentication:** Secure login system to view and manage notes.

## Prerequisites
Before installing Keeper, ensure you meet the following requirements:
- **Node.js:** Install the latest version of Node.js from [Node.js official site](https://nodejs.org/).
- **Operating System:** Compatible with Windows, Linux, or Mac.
- **Access Permissions:** Ensure read access to the necessary environments for deploying the application.
- **Internet Computer SDK:** If not already installed, set up DFX with the following command:

    ```bash
    DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
    ```

- **Visual Studio Code:** Recommended to have the Motoko plugin installed for development.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/channyeinzin/keepernote.git
cd keepernote
npm install
```

## Running the Application

- Start the Internet Computer locally:
```
dfx start --clean

```

- Deploy the project:
```
dfx deploy

```

- Start the application:
```
npm start

```
- Access the application:Navigate to 
``` 
http://localhost:<port_number>/ 
```
in your web browser. Replace <port_number> with the port number provided in the terminal after running npm start.

## Demo

![Demo Screenshot1](/src/dkeeper_assets/assets/sc1.gif)