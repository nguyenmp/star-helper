$( document ).ready(function() {
  if (window.location.href==="https://isis.sa.ucsb.edu/Landing/Homepage.aspx" || window.location.href==="https://isis.sa.ucsb.edu/Landing/")
    window.location = "https://isis.sa.ucsb.edu/STAR/SACCP001.aspx";

  var continue_button = $('[name="ctl00$ContentPlaceHolder1$ButtonContinue"]');
  if (continue_button) continue_button.click();

  var course_input = $('[name="ctl00$ContentPlaceHolder1$Select"]');
  if (course_input) course_input.val("c")

  var select_button = $('[name="ctl00$ContentPlaceHolder1$ButtonSelect"]');
  if (select_button) select_button.click();

  var full_date = new Date();
  var month = pad(full_date.getMonth() + 1, 2); // for some reason JS counts months from 0
  var date = pad(full_date.getDate(), 2);
  var year = full_date.getFullYear() - 2000;  // Hack to get a 2 digit year instead of 4

  var month_field = $("#ContentPlaceHolder1_DateMm");
  if (month_field) month_field.val(month);
  var date_field = $("#ContentPlaceHolder1_DateDd");
  if (date_field) date_field.val(date);
  var year_field = $("#ContentPlaceHolder1_DateYy");
  if (year_field) year_field.val(year);

  var building_field = $("#ContentPlaceHolder1_Building");
  if (building_field) building_field.focus()
  
  if (window.location.href==="https://isis.sa.ucsb.edu/STAR/SAXCP017.aspx") {
    var trows = $("tbody").children();
    
    var first_time = $("#ContentPlaceHolder1_PG_1_StartTime_PR_1").val();
    
    if (first_time == "07:00") {
      var previous = [];
      for (i = 6; i < 21; i++)
        previous.push("<tr style=\"height: 18px\">" + $(trows.clone()[i]).wrap("<tr/>").wrap("<div/>").html() + "</tr>");
      saveString(previous.join());
      $("#ContentPlaceHolder1_ButtonEnter").click();
    }
    
    else {
      loadString();
    }
    
    console.log(chrome.extension['onMessage']);
  }
});

function saveString(string) {
  console.log("saving string");
  chrome.runtime.sendMessage(
    {
      type: 'SAVE_STRING',
      name: 'string',
      value: string
    }, function() {console.log("saving saving");});
}

function loadString() {
  console.log("loading string");
  chrome.runtime.sendMessage(
    {
      type: 'LOAD_STRING',
      name: '',
      value: ''
    }, stringLoaded);
}

function stringLoaded(previous) {
  console.log("loaded");
  var trows = $("tbody").children();
  $(previous).insertBefore(trows[6]);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
