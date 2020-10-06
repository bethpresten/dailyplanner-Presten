$(document).ready(function () {
    // console.log("This is loading!")
    // DOM variables
    var timeBlockContainer = $(".time-block");
    var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    var currentHour = moment().format("HH");
    // Checking to make sure the moment.js was pulled correctly
    // console.log(currentHour);

    // Format for the date at the top of the page located within the jumbotron
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    // for loop to create the row time blocks
    for (var i = 0; i < workHours.length; i++) {
        // js variables (3 step process)
        var rowTimeEl = $("<div>").addClass("row time-block");
        var rowHourEl = $("<div>").addClass("hour col-sm-1").attr("id", "H" + workHours[i].replace(" ", "").replace(":", ""));
        var textInput = $("<textarea>").addClass("col-sm-10").addClass("textarea");
        rowTimeEl.append(rowHourEl, textInput);
        timeBlockContainer.append(rowTimeEl);
        // Adding in each hour to every row
        rowHourEl.text(workHours[i]);
        // console.log(workHours[i].split(":")[0], "workHour");
        // Conditional statement to color-code time events
        if (militaryHours[i] < currentHour) {
            textInput.addClass("past");
        }
        else if (militaryHours[i] > currentHour) {
            textInput.addClass("future");
        }
        else if (militaryHours[i] == currentHour) {
            textInput.addClass("present");
        }

        // adding in the save icon image to the save button as well as color-coding it from CSS
        // 3 step process for creating the button
        var saveBtn = $("<button>").attr("class", "col-sm-1").addClass("i fas fa-save").addClass("saveBtn");
        saveBtn.attr("src", "assets/save-icon.png");
        rowTimeEl.append(saveBtn);

        // Event Listener for save button
        saveBtn.on("click", function () {
            var savedSchedule = ($(this).siblings("textarea").val());
            var anotherSavedItem = ($(this).siblings(".hour").attr("id")).replace(" ", "").replace(":", "");
            localStorage.setItem(anotherSavedItem, savedSchedule);
            console.log(saveBtn);
            console.log("id", savedSchedule);
            console.log($(this).siblings("input").val());
            console.log($(this).siblings(".hour").attr("id"))
        })
    }

    // data persistence for all of the text areas
    $("#H900AM").siblings("textarea").val(localStorage.getItem("H900AM"));
    $("#H1000AM").siblings("textarea").val(localStorage.getItem("H1000AM"));
    $("#H1100AM").siblings("textarea").val(localStorage.getItem("H1100AM"));
    $("#H1200PM").siblings("textarea").val(localStorage.getItem("H1200PM"));
    $("#H100PM").siblings("textarea").val(localStorage.getItem("H100PM"));
    $("#H200PM").siblings("textarea").val(localStorage.getItem("H200PM"));
    $("#H300PM").siblings("textarea").val(localStorage.getItem("H300PM"));
    $("#H400PM").siblings("textarea").val(localStorage.getItem("H400PM"));
    $("#H500PM").siblings("textarea").val(localStorage.getItem("H500PM"));
});



