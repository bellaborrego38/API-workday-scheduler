// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?



  $(document).ready(function () {
    

    // Event listener for save button
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time,value);

      $('.notification').addClass('show');

      // removes class 'show' once it is in the past
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function updateBlock() {

    // current hour
    var currentHour = dayjs().hour()

    console.log(currentHour);
  
    // similar to a for loop, this is iterating over the time-block ids....
    $(".time-block").each(function(index,element){
  
      // ...at the index of 1
      var blockHour = element.id.split("-")[1];

      // comparison of the currentHour and blockhour
  
      if (blockHour < currentHour) {
        $(this).addClass("past")
      }
      else if (blockHour == currentHour) {
        $(this).addClass("present")
      }
      else {
        $(this).addClass("future")
      }
    });
  }

  updateBlock();
  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));


});
