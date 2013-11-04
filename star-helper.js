$( document ).ready(function() {
  if (window.location.href==="https://isis.sa.ucsb.edu/Landing/Homepage.aspx")
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
  console.log(year);
});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
