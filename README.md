# Orlando Magic Analytics

<p align="center">
    <img src='public/logo192.png' />
</p>

Just was a speed run through of the broad space that was mentioned in the Software Engineer - Basketball Analytics position for the Orlando Magic team.  

## Built with: 

### Front-End
[![My Skills](https://skillicons.dev/icons?i=react,js,sass )](https://skillicons.dev)

### Back-End
[![My Skills](https://skillicons.dev/icons?i=express,mysql,nodejs)](https://skillicons.dev)

## Libraries

## D3js Library
[D3js](https://d3js.org/)

<p align="center">
    <img src='src/assets/readme/d3.svg' />
</p>

Utilized open source datasets of NBA player stats to be able to practice data visualization for the Orlando Magic. 

### Donut Chart - Points Per Game
Connected front-end to back-end API point that used mySQL & knex.js to query the data for players and their PPG score. The players names are noted by their initials.
<p align="center">
    <img src='src/assets/readme/PPG-3Djs.PNG' />
</p>

### Bar Graph - Assists & Rebounds Per Game 
Connected front-end to back-end API points to have an interactive bar chart that switches data on toggling of a button. The component uses React Hooks to accomplish this change, with the initial state being Rebounds Per Game and toggles to Assists Per Game. Players names are denoted by their initials.
<p align="center">
    <img src='src/assets/readme/BarRPG.PNG' />
</p>
<p align="center">
    <img src='src/assets/readme/BarAPG.PNG' />
</p>

## React Router Dom
[React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

<p align="center">
    <img src='src/assets/readme/reactRouterDom.png' />
</p>

Use of dynamic routing to have the user logged in ID in the URL. Used Single Page Application technique with switch and Browser Routers.

## Components
### Signup Form
<p align="center">
    <img src='src/assets/readme/SignupForm.PNG' />
</p>
Signup form has server side validation where the error message is displayed in a message at the bottom of the form.

### Login Form 
<p align="center">
    <img src='src/assets/readme/LoginForm.PNG' />
</p>
Login form validates using a JWT key that is in the dotenv file that verifies that the hashed password comparison is the same and was produced by our server alone.

### Player Card
<p align="center">
    <img src='src/assets/readme/PlayerCard.PNG' />
</p>
Player Cards have basic stats that are pulled from the back-end API points, future use could direct towards player pages with analytics specific to the player.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Run Locally

### Dashboard Analytics Client
Clone the project

```bash
  git clone https://github.com/Nicholas-Nguyen8742/Orlando-Magic-Dashboard
```

Go to the project directory

```bash
  cd vertigo-network-client
```

Install dependencies

```bash
  npm install
```
### Dashboard Analytics Server
Clone the project

```bash
  git clone https://github.com/Nicholas-Nguyen8742/Orlando-Magic-Dashboard-Server
```

Go to the project directory

```bash
  cd vertigo-network-server
```

Install dependencies

```bash
  npm install
```

Run knex migrations & seeds to setup & populate the mySQL server.
```bash
    npx knex migrate:latest
    npx knex seed:run
```

Run the script on vertigo-network-server terminal.
```bash
    node index.js
```



