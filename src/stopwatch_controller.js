angular.
    module("myApp").
    component("stopwatch", {

        template: "<div class=\"stopwatch\">" +
            "<p>{{$ctrl.time | date: \"HH:mm:ss\"}}</p>" +
            "<button ng-click=\"$ctrl.toggle()\" class=\"button toggleButton\">{{$ctrl.toggleText}}</button>" +
            "<button ng-click=\"$ctrl.reset()\" class=\"button resetButton\">Reset</button>" +
            "</div>",

        controller: ["$interval", function stopwatchController($interval) {

            this.toggleText = "Start";
            this.time = new Date(0, 0, 0, 0, 0, 0);
            this.interval = undefined;

            stopwatchController.prototype.toggle = function () {

                if (this.toggleText == "Start") {
                    this.toggleText = "Stop";
                    this.startInterval();
                }
                else {
                    this.toggleText = "Start";
                    this.stopInterval();
                }
            };

            stopwatchController.prototype.stopInterval = function () {
                if (this.interval != undefined) {
                    $interval.cancel(this.interval);
                    this.interval = undefined;
                }
            };

            stopwatchController.prototype.intervalFunction = function () {
                this.time.setSeconds(this.time.getSeconds() + 1);
            };

            stopwatchController.prototype.startInterval = function () {
                if (this.interval == undefined) {
                    this.interval = $interval(this.intervalFunction.bind(this), 1000);
                }
            };

            stopwatchController.prototype.reset = function () {
                this.stopInterval();
                if (this.toggleText == "Stop") {
                    this.toggleText = "Start";
                }
                this.time = new Date(0, 0, 0, 0, 0, 0);
            };

        }]
    });
