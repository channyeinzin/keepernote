# COMSW3102_001_2024 Spring 2024, Class Project
## Name: Chan Nyein Zin, GitHub username: channyeinzin

## Keeper is a web-based note-taking application that allows users to quickly jot down and organize their thoughts in a visually appealing manner. Built with React and utilizing a simple authentication system, Keeper ensures that your notes are private and secure.

## Features
**Create Notes:** Add new notes with a title and take a note.
**View Notes:** All notes are displayed on the main page.
**Delete Notes:** Remove notes you no longer need.
**User Authentication:** Log in to view and manage your notes.

## Installing Keeper

To install Keeper, follow these steps:

```
git clone https://github.com/yourusername/keeper.git
cd keeper
npm install
```


## Prerequisites

Before we begin, ensure we have met the following requirements:
- We have installed the latest version of [Node.js](https://nodejs.org/).
- We have a Windows/Linux/Mac machine.
- We have read access to the necessary environment for deploying the application (if applicable).
- If we do not have DFX need to install...
1. Open up our Terminal app (In your applications folder). Or just search for it with spotlight.
2. Copy the following command and paste it into our terminal and hit
enter.

```bash
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```
- need to have Motoko in the VS code


# How to Run Completed Code

1. Make sure dfx is running

```
dfx start --clean
```
2. If you have not installed npm do the following, Otherwise, skip this step
```
npm install
```
3. Deploy the project
```
dfx deploy
```

4. Start NPM
```
npm start





