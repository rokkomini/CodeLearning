function openOrSenior(data) {
    const senior = 55;
     let array = [];
     data.forEach(item => {
        if (item[0] >= senior && item[1] > 7) {
       array.push("Senior");
       return array;
     } else {
       array.push("Open");
       return array;
     }
     })
    return array
   }



