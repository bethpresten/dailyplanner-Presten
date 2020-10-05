$(document).ready(function () {
    // console.log("This is loading!")
    // dom variables
    var timeBlockContainer = $(".time-block");
    var workHours = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00pm", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];
    var currentHour = moment().format("H");

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    // for loop to create the row time blocks
    for (var i = 0; i < workHours.length; i++) {
        // js variables
        var rowTimeEl = $("<div>").addClass("row time-block");
        var rowHourEl = $("<div>").addClass("hour col-sm-1").attr("id", workHours[i]);
        var textInput = $("<input>").addClass("col-sm-10");

        rowTimeEl.append(rowHourEl, textInput);
        timeBlockContainer.append(rowTimeEl);

        rowHourEl.text(workHours[i]);
        if (workHours > currentHour) {
            $(textInput).addClass("past");
        }
        else if (workHours < currentHour) {
            $(textInput).addClass("future");
        }
        else {
            $(textInput).addClass("present");
        }

        var saveBtn = $("<button>").attr("class", "col-sm-1").text("save");
        rowTimeEl.append(saveBtn);

        saveBtn.on("click", function () {
            var hourSchedule = $(this).siblings("input");
            localStorage.setItem(rowHourEl, hourSchedule());
            console.log(saveBtn);

        })
    }

    //function code

    //event listeners
});



