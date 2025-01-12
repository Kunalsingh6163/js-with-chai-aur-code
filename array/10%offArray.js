let items = [500, 600, 700, 800, 900, 1000];

for(i=0; i<items.length; i++){
    console.log(`before 10% off the array data is ${items[i]}`);
};

for(i=0; i<items.length; i++){
   let off = items[i]/10;
   items[i] = items[i] - off
    console.log(`After 10% off the data is ${items[i]}`);
};