"use strict";
let Guest_list = ['imran Khan', 'Nawaz shahrif', 'Shehbaz Sharif', 'Asif Ali ZArdari'];
//for(let i=0; i<Guest_list.length; i++){
//console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\
//Thanks You\n\n');
let absent_Guest = 'imran Khan';
let new_Guest = 'Kamran Khan Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}
console.log(`${absent_Guest} is not coming into the party.`);
console.log('Good news! we have a Big table dinner so we are inviiting 3 more Guest');
Guest_list.unshift('Sir, ZIA Khan');
Guest_list.splice(1, 0, 'Maryum Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}
console.log('\n\nwe just found out that our new dinner table would not arrive on time and we have space for only two guests.\n\n');
let removeGuests = 'Bilawal Bhutto Zardari';
console.log(`'Dear Mr, ' ${removeGuests} \n\n'we are sorry you could not invited for dinner.\n\n'`);
let guestInv = ['Maryum Nawaz', 'Sir ZIA Khan'];
for (let i = 0; i < guestInv.length; i++) {
    console.log(guestInv[i] + '\n\n you are still invited.\n\n');
}
