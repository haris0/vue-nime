# vue-nusa

Application to display anime list for each season, the API used is provided by Jikan, more detail let's check [Jikan](https://jikan.docs.apiary.io/). This project was developed using Vue Js. You can see the demo application at [Zeronime](https://vuenime.surge.sh/)


## Preview
![page1](src\assets\Zero0.PNG)

![page2](src\assets\Zero1.PNG)

![page3](src\assets\Zero2.PNG)

## Build Setup

``` bash
# install Node Module dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and 
[docs for vue-loader](http://vuejs.github.io/vue-loader).

## Dependencies
This project uses several third parties :

- **Axios** is dependencies for Apis Consuming, you can check documentatin at [Axios](https://github.com/axios/axios)
- **Ant Design Vue** is a component framework for Vue.js you can check documentatin at [Ant Desing Vue](https://vue.ant.design)
- **Vue Router** is the official router for Vue.js, you can check documentatin [Vue Router](https://router.vuejs.org/)
- **Vue Underscore** is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects, you can check documentatin [Vue Underscore](https://github.com/HKskn/vue-underscore)
- **Vue Youtube** provides a simple layer for you to use your imagination while over the YouTube IFrame Player API you can check documentatin [Vue Youtube](https://github.com/anteriovieira/vue-youtube)
  
## Source Code Folder
```
src   
└─── components
│    │   Home.vue
│    │   ...
└─── router
│    │   index.js
└─── services
│    │   index.js
│    App.vue
│    main.js
```
A few details about each of these folders:
- **components** ── All the components of the projects that are not the main views
- **router** ── All the routes of your projects
- **services** ── All the url for apis consuming
