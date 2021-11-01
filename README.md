<!-- Logo & Links -->
<br />
<p align="center">
  <a>
    <img src='assets/img/header.png' width="20%" height="20%">
  </a>

  <h3 align="center">Discord-Waterbottle</h3>

  <p align="center">
    Remind your members to stay hydrated
    <br />
    <a href="https://github.com/BitsOfAByte/discord-waterbottle/issues">Issues</a>
    ·
    <a href="https://github.com/BitsOfAByte/discord-waterbottle/pulls">Pull Requests</a>
  </p>
</p>

<!-- Badges -->
<br />
<p align="center">
<!-- Contributors -->
<img src="https://img.shields.io/github/contributors/BitsOfAByte/discord-waterbottle.svg?style=for-the-badge" align="center" alt='Contributors'>
<!-- Forks -->
<img src="https://img.shields.io/github/forks/BitsOfAByte/discord-waterbottle.svg?style=for-the-badge" align="center" alt='Forks' >
<!-- Stars- ->
<img src="https://img.shields.io/github/stars/BitsOfAByte/discord-waterbottle.svg?style=for-the-badge" align="center" alt='Stars' >
<!-- Issues -->
<img src="https://img.shields.io/github/issues/BitsOfAByte/discord-waterbottle.svg?style=for-the-badge" align="center" alt='Issues' >
</p>

# 

<!-- Project ReadMe -->

## Archived
This project has now been archived and will not be receiving any future updates or support. Feel free to make a fork if you would like to continue development for the project.

## Purpose
Discord-Waterbottle is a project designed to help members of Discord servers stay hydrated by reminding them at regular intervals to drink something.

## Setting Up
### Prerequisites
This project requires [NodeJS](https://nodejs.org/) 16.x or higher in order to function properly.

## Install Dependancies
`npm install` for all dependancies, `npm install -production` for only production dependancies.

## Configuration
Once dependancies have been installed, open a terminal in the root directory and run `npm run config` and follow the prompts. Once you have done this, go to `src/core/config/sample` and copy message.json into `src/core/config` and adjust the message. 

*Note: Thumbnail and Image links must be direct links to the images and be resolvable by discord, an error will be thrown if they are not._*