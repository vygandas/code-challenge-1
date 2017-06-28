# Quandoo Power YT Explorer

This is React Youtube search auto-complete demo application.

React was chosen because it seems to be the most elegant way to solve such task.

## RUN

This command will build SASS and run web server.
```
npm run dev
```

## Structure
Each component is separated with its JS and SCSS file.

Style must be imported to get it rendered to one CSS file.
```
import style from './example.scss';
```

CSS is generated to styles/main.css directory.

## Whats used
For Youtube API lookup:
```
youtube-api-search
```

For handling user click outside search input and autocomplete suggestions list:
```
react-onclickoutside
```
