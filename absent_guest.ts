
let Guest_list : string[] = ['imran Khan','Nawaz shahrif','Shehbaz Sharif','Asif Ali ZArdari'];

   //for(let i=0; i<Guest_list.length; i++){

   //   console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\
  
   // Thanks You\n\n');


 let absent_Guest : string = 'imran Khan' ;


let new_Guest : string = 'Kamran Khan Tessori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}
 console.log(`${absent_Guest} is not coming into the party.`);






