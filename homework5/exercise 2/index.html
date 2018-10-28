<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<style>
    body {
        overflow: hidden;
    }
</style>

<body>
    <div style="background: palevioletred; height:300; width:300;display: none;"></div>
    <canvas id="canvas"></canvas>
</body>
<script>
    var canvasInit = document.getElementById("canvas");
    canvasInit.height = window.innerHeight;
    canvasInit.width = window.innerWidth;

    function rand(num, exclude) {
        var finalNum = 0;
        var keepGoing = true;
        while (keepGoing) {
            var num = Math.floor(Math.random() * num) + 1;
            // if (exclude != null && exclude.length != 0) {
            //     for (var i = 0; i < exclude.length; i++) {
            //         if (!(num < exclude[i].to && num > exclude[i].from)) {
            //             allPassed = false;
            //             break;
            //         }
            //         if (allPassed)
            //             keepGoing = false;
            //     }
            // }
            // else {
            finalNum = num;
            keepGoing = false;
            //}
        }
        return finalNum;
    };

    var colors = [
        { color: "red", wasUsed: false },
        { color: "green", wasUsed: false },
        { color: "blue", wasUsed: false },
        { color: "orange", wasUsed: false },
        { color: "blueviolet", wasUsed: false },
        { color: "aqua", wasUsed: false },
        { color: "crimson", wasUsed: false },
        { color: "cornflowerblue", wasUsed: false },
        { color: "darkolivegreen", wasUsed: false },
        { color: "pink", wasUsed: false },
        { color: "palevioletred", wasUsed: false }
    ];

    function getColor() {
        var keepGoing = true;
        while (keepGoing) {
            var colorNum = rand(rand(11) - 1);
            var pickedColor = colors[colorNum];
            if (!pickedColor.wasUsed) {
                pickedColor.wasUsed = true;
                keepGoing = false;
                return pickedColor;
            }
        }
    }


    const createBoxes = function (count, canvasWidth, canvasHeight) {
        function getBoxesY() {
            var ys = [];
            for (var i = 0; i < boxes.length; i++) {
                var combo = { from: boxes[i].y, to: this.from + 30 };
                ys.push(combo);
            }
            return ys;
        }


        var boxes = [];
        for (var i = 0; i < count; i++) {
            var rec = {
                width: 30,
                height: 30,
                x: rand(canvasWidth - 30),
                y: rand(canvasHeight - 30, getBoxesY()),
                xDelta: 1,
                yDelta: 1,
                direction_rightToLeft: true,
                color: getColor().color,
                draw: function () {
                    //this.clearRect();
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.fillStyle = this.color;
                    context.fillRect(this.x, this.y, this.height, this.width);
                },
                update: function () {
                    this.clearRect();
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.fillStyle = this.color;
                    if (this.direction_rightToLeft) {
                        this.direction_rightToLeft = (this.x + 1 + this.width) >= canvasWidth ? false : true;
                    }
                    else {
                        this.direction_rightToLeft = (this.x - 1) <= 0 ? true : false;
                    }
                    context.fillRect(this.direction_rightToLeft ? this.x++ : this.x--, this.y, this.height, this.width);
                },
                clearRect: function () {
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    if (this.direction_rightToLeft)
                        context.clearRect(this.x - 1, this.y, this.width, this.height);
                    else
                        context.clearRect(this.x, this.y, this.width + 1, this.height);
                }
            };
            boxes.push(rec);
        }
        return boxes;
    };

    var boxes = createBoxes(5, window.innerWidth, window.innerHeight);
    console.log(boxes);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].draw();
    }

    setInterval(function () {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].update();
        }
    }, 10);
</script>

</html>