/*
 * A script to fill the modal windows on lottery.broadwaydirect.com/
 */

document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_name_first').value = 'First'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_name_last').value = 'Last'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_ticket_qty').value = '2'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_email').value = 'email@email.com'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_dob_month').value = 'mm'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_dob_day').value = 'dd'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_dob_year').value = 'yyyy'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_zip').value = 'nnnnn'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_country').value = '2'
document.getElementsByClassName('fancybox-iframe')[0].contentWindow.document.getElementById('dlslot_agree').checked = true
