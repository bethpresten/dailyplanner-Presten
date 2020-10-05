$(document).ready(function () {
    // console.log("This is loading!")
    // dom variables
    var timeBlockContainer = $(".time-block");
    var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    var currentHour = moment().format("HH");
    console.log(currentHour);

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    // for loop to create the row time blocks

    for (var i = 0; i < workHours.length; i++) {
        // js variables
        var rowTimeEl = $("<div>").addClass("row time-block");
        var rowHourEl = $("<div>").addClass("hour col-sm-1").attr("id", "H" + workHours[i].replace(" ", "").replace(":", ""));
        var textInput = $("<input>").addClass("col-sm-10");

        rowTimeEl.append(rowHourEl, textInput);
        timeBlockContainer.append(rowTimeEl);

        rowHourEl.text(workHours[i]);
        // console.log(workHours[i].split(":")[0], "workHour");
        if (militaryHours[i] < currentHour) {
            textInput.addClass("past");
        }
        else if (militaryHours[i] > currentHour) {
            textInput.addClass("future");
        }
        else if (militaryHours[i] == currentHour) {
            textInput.addClass("present");
        }


        var saveBtn = $("<button>").attr("class", "col-sm-1").text("save");
        rowTimeEl.append(saveBtn);
        var savePic = $("<image>").attr("src", "./assets/save-icon.png");

        saveBtn.on("click", function () {
            var savedSchedule = ($(this).siblings("input").val());
            var anotherSavedItem = ($(this).siblings(".hour").attr("id")).replace(" ", "").replace(":", "");
            localStorage.setItem(anotherSavedItem, savedSchedule);
            console.log(saveBtn);
            console.log("id", savedSchedule);
            console.log($(this).siblings("input").val());
            console.log($(this).siblings(".hour").attr("id"))
        })
    }


    $("#H900AM").siblings("input").val(localStorage.getItem("H900AM"));
    $("#H1000AM").siblings("input").val(localStorage.getItem("H1000AM"));
    $("#H1100AM").siblings("input").val(localStorage.getItem("H1100AM"));
    $("#H1200PM").siblings("input").val(localStorage.getItem("H1200PM"));
    $("#H100PM").siblings("input").val(localStorage.getItem("H100PM"));
    $("#H200PM").siblings("input").val(localStorage.getItem("H200PM"));
    $("#H300PM").siblings("input").val(localStorage.getItem("H300PM"));
    $("#H400PM").siblings("input").val(localStorage.getItem("H400PM"));
    $("#H500PM").siblings("input").val(localStorage.getItem("H500PM"));
    //function code

    //event listeners
});



