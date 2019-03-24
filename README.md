# React Video Player APP V1.0.0
Created by Giovanni Ferrara
## Available Scripts

To install the project you, you can run clone this repo and run: 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features

- Playing videos by entering a custom url on a promt window (or eventually it works hitting "enter", by lunching a default video).
- Skiping the reproduction by clicking the timeline.
- Preview by clicking on the hotspot.
- Change the url when user clicks on the relative hotspot.
- Moves to the exact time of the video when the user pastes query params on the url, (for intance: localhost:3000?time=55).
- Having the implementation the change smoothly between different moments. (feature that will be improved in the next version)

## Todo for the upcoming version

- Change smoothly between different times
- Make it responsive for the mobile
