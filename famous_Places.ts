  

  //Seeing the World: Think of at least five places in the world you’d like to visit.

  // Store the locations in a array. Make sure the array is not in alphabetical order.

  let famous_places : string[] = ['UAE','Canada','Turkey','Maldive','Austrlia'] 
   //  Print your array in its original order.
  console.log("In original order:" , famous_places);
  // Print your array in alphabetical order without modifying the actual list.
  console.log("Alphabetical order:" , [...famous_places].sort());
  //Show that your array is still in its original order by printing it.
  console.log("Still in original order:" , famous_places);
  //Print your array in reverse alphabetical order without changing the order of the original list.
  console.log("Reverse alphabetical order:" ,[...famous_places].sort().reverse());
  // Show that your array is still in its original order by printing it again.
  console.log("Still in original order:" , famous_places);
  // Reverse the order of your list. Print the array to show that its
  //order has changed.
  console.log("Reverse  original order:" , [...famous_places].reverse());
  //Reverse the order of your list again. Print the list to show it’s back to its original order.
  console.log("Back to original order:" , famous_places);
  // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
  console.log("orignal order into Alphabetical order:" , [...famous_places].sort());
  //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
  console.log("order changed" ,[...famous_places].sort().reverse());
