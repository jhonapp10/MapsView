# Problem 1 Resolution
**Que problemas detectas en la operación?**

La función foreach nos realiza la operación en el momento pero no se puede guardar en una variable ya que el valor seria undefined.
y parece ademas que algun camino se me podria escapar con los if.


The foreach function performs the operation for us at the moment but it cannot be saved in a variable since the value would be undefined.
and it also seems that some path could escape me with the if.


**Solución alternativa propones?**
La solución que aportaria es utilizar map ya que con esto podria ejercer una función mientras que recorro el array.
Además que esta solución me permitiria guardar la solución en una const o variable let (de la manera que esta actual no se guarda en memoria ningún resultado).

The solution I would provide is to use map since with this I could perform a function while I go through the array.
In addition, this solution would allow me to save the solution in a const or let variable (as it is current, no result is saved in memory).


**Resolución pseudocódigo**

getStreaming (service,multi)={
    if(typeof service === Streaming)
    return multi*StreamingPrice;
    return 0;
}

getDownload (service,multi)={
    if(typeof service === Download)
    return multi*DownloadPrice;
    return 0;
}

getPremiun (service,multi)={
    if(typeof service === premium)
    return multi*PremiumPrice;
    return 0;
}


getTotal()=>{

    const total=0;
    this.services.map((service, index)=>{

        let multimediaContent= service.getMultimediaContent();

        let streaming+ = this.getStreaming(service,multimediaContent);
        let download+ = this.getDownload(service,multimediaContent);
        let premium+ = this.getPremiun(service,multimediaContent);


    })
}


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
