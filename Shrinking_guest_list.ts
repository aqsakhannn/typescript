
let Guest_list : string[] = ['imran Khan','Nawaz shahrif','Shehbaz Sharif','Asif Ali ZArdari'];

  //for(let i=0; i<Guest_list.length; i++){


    //console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\
    //Thanks You\n\n');


let absent_Guest : string = 'imran Khan' ;


let new_Guest : string = 'Kamran Khan Tessori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}
 console.log(`${absent_Guest} is not coming into the party.`);


   console.log('Good news! we have a Big table dinner so we are inviiting 3 more Guest');



   Guest_list.unshift('Sir, ZIA Khan') ;
   Guest_list.splice( 1 , 0 ,'Maryum Nawaz');
   Guest_list.push('Bilawal Bhutto Zardari');

   for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}

   console.log('\n\nsorrywe just found out that our new dinner table would not arrive on time and we have space for only two guests.\n\n');

   while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
  
  
    console.log(`Sorry Mr, ${remove_Guest} you are not invited for dinner.`);
  

}

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr, ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\Thanks You\n\n');
}

    
