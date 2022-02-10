# ng-stopwatch

Stopwatch angular-js component.


Webpack Usage:

	npm install
For production:
	npm run prod
For development server:
    npm run dev


  Then, open index.html under dist folder in working directory.


Using with Docker:

	Creation:
        docker build -f build.Dockerfile -t webpack-angular-stopwatch .
        docker create  --name "bundlecontainer" webpack-angular-stopwatch
        docker cp bundlecontainer:/beforeWebpack/dist ./
        docker image rm -f webpack-angular-stopwatch
        docker container rm -f bundlecontainer
        docker build -f run.Dockerfile -t webpack-angular-stopwatch .

	Create container on port 2000:
		docker run -d -p 2000:80 webpack-angular-stopwatch


  Then, open "http://localhost:2000/" in browser of your choice.




Example Usage of Angular Component:


```
<head>
    <title>Stopwatch</title>
</head>

<body>
    <div ng-app="myApp">
      
        <stopwatch></stopwatch>
        <stopwatch></stopwatch>

    </div>
</body>
```
