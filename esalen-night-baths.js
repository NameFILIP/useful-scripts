// 1. The Esalen Hot Springs https://www.esalen.org/page/esalen-hot-springs
// 1. Read the info https://nightbaths.esalen.org/
// 2. Go to https://nightbaths.esalen.org/reservations/new
// 3. Paste this in DevTools Console in the morning at ~8:57am

/*
  Drugs and alcohol are strictly forbidden in the Esalen baths.
  Please Arrive sober, We reserve the right to refuse entry upon check in.

  PLEASE BRING YOUR OWN TOWELS, NOT PROVIDED. GLASS IS NOT PERMITTED AT THE BATHS.
  A water fountain is provided, and please bring a non-glass water bottle.

  Please be considerate of others and support a wonderful experience for all, this is not intended to be a party environment.

  Parking and Arrival Time
  Please Arrive by 12:45 am, PARK AND WAIT at the Esalen entrance on Highway 1 and DO NOT DRIVE DOWN THE HILL.
  Parking in the pull out next to the Esalen Institute sign, Head In parking only, Do not block the entrance.

  Arrival Time is 12:45am.
  At 12:45am Please wait by your car prepared to check in and embark . An Esalen Staff member will greet you and escort you to the baths.
 */

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));
const delayTimeMs = 200;

const jQuery = window.$;

const makeReservation = async () => {
  console.log('Click Reserve on the date');
  jQuery('[data-date="2020-01-13"] .reserve-now').click();
  await delay(delayTimeMs);

  console.log('Click Next 1');
  jQuery('[data-next="new-res-message-2"] button').click();
  await delay(delayTimeMs);

  console.log('Click Next 2');
  jQuery('[data-next="new-res-form-info"] button').click();
  await delay(delayTimeMs);

  console.log('Fill in First Name');
  document.getElementById('reservation_first_name').value = 'George';

  console.log('Fill in Last Name');
  document.getElementById('reservation_last_name').value = 'Clooney';

  console.log('Fill in Email');
  document.getElementById('reservation_email_address').value = 'george.clooney@gmail.com';

  console.log('Fill in Phone Number');
  document.getElementById('reservation_phone_number').value = '123-456-7890';

  console.log('Fill in Party Size');
  jQuery('#reservation_party_size option[value="2"]').prop('selected', true).trigger("change");

  console.log('Fill in Credit Card Number');
  document.getElementById('cc_number').value = '1234567812345678';

  console.log('Fill in Expiration Date');
  document.getElementById('cc_expiration_date').value = '11/2020';

  console.log('Fill in CVV Code');
  document.getElementById('cc_cv2_code').value = '123';

  console.log('Fill in Zip Code');
  document.getElementById('reservation_billing_zip_code').value = '77777';

  console.log('Click Check Availability')
  jQuery('[data-next="new-res-form-review"] button').click();
  await delay(delayTimeMs);

  console.log('Click Reserve Now');
  jQuery('[value="Reserve Now"]').click();
  await delay(delayTimeMs);
};

const intervalId = setInterval(async () => {
  const date = new Date();
  console.log(date);
  if (date.getHours() === 9) {
    clearInterval(intervalId);
    await makeReservation();
  }
}, 200);