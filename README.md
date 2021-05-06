# Mars Rover Photo's

## Live Link

Check out the project [here](https://wafs-guus.netlify.app/)

![](https://i.imgur.com/SEr9vVd.jpg)

## Concept

I will create a dashboard in theme of *Mars* (the planet), where you can see the recent pictures of Mars sent by the Mars Rover. Also, the average temperature of Mars will be shown in the dashboard. From the dashboard, you can navigate to a detailed page of that day at Mars, and see pictures of the same day.
In my project I will be working with a NASA API, specifically the *[Mars Rover Photos](https://api.nasa.gov/#b-a10)* API and also a *[self made API](https://wafs-be.herokuapp.com/temps)* for the temperatures on Mars.

## Actor & Interaction diagram

*Actor diagram*

![Actor Diagram](https://i.imgur.com/wC9OLfP.png)

*Interaction diagram*

![Interaction Diagram](https://i.imgur.com/bC2O6Fw.png)

## Installation

1. Clone the repository:

```
  git clone https://github.com/tsjuusmei/web-app-from-scratch-2021.git
```

2. Install packages

```
  npm install 
  // or yarn install
```

3. Run the app

```
  npm run dev
```

## Datasets

The first dataset I use is the [Mars Rover Photos API](https://api.nasa.gov/#mars-rover-photos). Here is where I get photos and some other information about the context of the photos. Each day there are pictures received on earth, there will be a few hundreds are sent over, which look like this in the dataset: 

```json

  "photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },
    {
      "id": 102694,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, ...
```

The second dataset is a [self made API](https://wafs-be.herokuapp.com/temps) which has the average temperatures measured on Mars the past few years. I use this to calculate an average temperature of Mars. The dataset looks like this:

```json
[
  {
    "temps": {
      "average": -65.45,
      "minimum": -99.64,
      "maximum": -23.16
    }
  },
  {
    "temps": {
      "average": -63.5,
      "minimum": -99.98,
      "maximum": -21.74
    }
  }, ...
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
