//function myFunction() {
//    var w = window.innerWidth;
//    var h = window.innerHeight;
//    //document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
//    console.log(w + " " + h);

//    if (w < 585) {
//        $(".responsiveMenu").css("display", "block");
//        $(".responsiveMenu").css("float", "none");
//        console.log("hello")
//    }
//    else {
//        $(".responsiveMenu").css("display", "inline-block");
//        $(".responsiveMenu").css("float", "right");
//        console.log("hello")
//    }
//}


// מפת מילים

var words = [];
var counter = 0;

function getWordsFunc() {
    var getWordsArray = document.getElementById("inputWords").value;
    words[0] = getWordsArray.toString();
    if (counter == 0) {
        startWordCloud();
    }
    counter++;

    // העלמת התיבות
    var btnCheck = document.getElementById("btnGetWords");
    var inputCheck = document.getElementById("inputWords");
    if (btnCheck.style.display == "none") {
        btnCheck.style.display = "block";
        inputCheck.style.display = "block";
    }
    else {
        btnCheck.style.display = "none";
        inputCheck.style.display = "none";
    }
}


function startWordCloud() {
    // Encapsulate the word cloud functionality
    function wordCloud(selector) {

        var fill = d3.scale.category20();

        //Construct the word cloud's SVG element
        var svg = d3.select(selector).append("div")
            .attr("id", "wordCloudsSvg")
            //.attr("width", 500)
            //.attr("height", 500)
            .append("svg")
            .style("width", "70%")
            .style("height", "30vw")
            //.style("background-color", "blue")
            //.style("margin-right", "5.3vw")
            //.style("margin-top", "-100px")

            .append("g")
            .attr("transform", "translate(250,250)");


        //Draw the word cloud
        function draw(words) {
            var cloud = svg.selectAll("g text")
                            .data(words, function (d) { return d.text; })

            //Entering words
            cloud.enter()
                .append("text")
                .style("font-family", "OpenSans")
                .style("fill", function (d, i) { return fill(i); })
                .attr("text-anchor", "middle")
                .attr('font-size', 1)
                .text(function (d) { return d.text; });

            //Entering and existing words
            cloud
                .transition()
                    .duration(1000)
                    .style("font-size", function (d) { return d.size + "px"; })
                    .attr("transform", function (d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .style("fill-opacity", 1);

            //Exiting words
            cloud.exit()
                .transition()
                    .duration(600)
                    .style('fill-opacity', 1e-6)
                    .attr('font-size', 1)
                    .remove();
        }


        //Use the module pattern to encapsulate the visualisation code. We'll
        // expose only the parts that need to be public.
        return {

            //Recompute the word cloud for a new set of words. This method will
            // asycnhronously call draw when the layout has been computed.
            //The outside world will need to call this function, so make it part
            // of the wordCloud return value.
            update: function (words) {
                d3.layout.cloud().size([700, 700])
                    .words(words)
                    .padding(5)
                    .rotate(function () { return ~~(Math.random() * 2) * 90; })
                    .font("OpenSans")
                    .fontSize(function (d) { return d.size; })
                    .on("end", draw)
                    .start();
            }
        }
    }

    //Prepare one of the sample sentences by removing punctuation,
    // creating an array of words and computing a random size attribute.
    function getWords(i) {
        return words[i]
                .replace(/[!\.,:;\?]/g, '')
                .split(' ')
                .map(function (d) {
                    return { text: d, size: 10 + Math.random() * 60 };
                })
    }

    //This method tells the word cloud to redraw with a new set of words.
    //In reality the new words would probably come from a server request,
    // user input or some other source.
    function showNewWords(vis, i) {
        i = i || 0;

        vis.update(getWords(i++ % words.length))
        setTimeout(function () { showNewWords(vis, i + 1) }, 2000)
    }

    //Create a new instance of the word cloud visualisation.
    var myWordCloud = wordCloud('body');

    //Start cycling through the demo data
    showNewWords(myWordCloud);
}
