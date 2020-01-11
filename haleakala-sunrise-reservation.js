// A script for getting a reservation for the Haleakala Sunrise

// 1. Sign up at https://www.recreation.gov to create an account
// 2. Open https://www.recreation.gov/ticket/facility/253731
// 3. Run the script a couple of minutes before the reservation opening time:

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));
const delayTimeMs = 200;

const jQuery = window.$;

const selectTour = async () => {

  // Select tour
  console.log('Select tour');
  const tourOptionsSelectId = "tour-options";
  const tourOptionsSelect = document.getElementById(tourOptionsSelectId);
  const haleakalaSunriseTourId = 255;
  tourOptionsSelect.value = haleakalaSunriseTourId;

  // Select Date
  console.log('Click to open calendar');
  const openCalendarButtonClasses = [
    ".SingleDatePickerInput_calendarIcon",
    ".SingleDatePickerInput_calendarIcon_1"
  ];
  jQuery(openCalendarButtonClasses.join("")).click();
  await delay(delayTimeMs);

  console.log('Click to pick the date');
  jQuery('[aria-label="Monday, January 13, 2020, available"]').click()
  await delay(delayTimeMs);

  // Select number of guests
  console.log('Click to open the number of guests dropdown');
  jQuery('[aria-label="Guests"]').click();
  await delay(delayTimeMs);

  console.log('Click to add 1 guest');
  jQuery('[aria-label="Add Vehicle Passs"]').click();
  await delay(delayTimeMs);

  console.log('Click to close the number of guests dropdown');
  jQuery('[aria-label="Close"]').click();
  await delay(delayTimeMs);

  // Select time
  console.log('Click to open the time dropdown');
  jQuery('[aria-label="Time"]').click();
  await delay(delayTimeMs);

  console.log('Click to pick the time');
  jQuery('[title="7:00 AM"]').click();
  await delay(delayTimeMs);

  console.log('Click "Continue to Booking" button')
  jQuery('.select-tour-time-buttons button').click();
};


const intervalId = setInterval(async () => {
  const date = new Date();
  console.log(date);
  if (date.getHours() === 7) {
    // Use this for testing:
    // if (date.getMinutes() === 37) {
    clearInterval(intervalId);
    await selectTour();
  }
}, 200)

