//###################################### Batch Time Table JS CoDE ############################################

const url = 'https://script.google.com/macros/s/AKfycbxVul5da8McGDHI3jWUB-LGQOhIL76TxaKunJ7-YknonzmQ4iU6A1x5at3we6ZNUSXQ/exec';
getdata();

function getdata() {
  fetch(url).then((res) => {
    return res.json()
  }).then((json) => {
    //console.log(json.data[0].batch_name);
    // json.data.forEach((ele => {
    //   //var r2c2= ele[0];
    //   console.log(ele);
    //
    //   // console.log(ele.First);
    //   // console.log(ele.Last);
    // console.log(ele.Handle);
    const result = json.data[0].batch_name.length;
    // console.log(result);


    if (result === result) {
      var element = document.getElementById("remove");
      element.classList.remove("spinner-border");
    }



    document.getElementById("r2c2").innerHTML = json.data[0].batch_name;
    document.getElementById("r2c3").innerHTML = json.data[0].batch_timing;
    document.getElementById("r2c4").innerHTML = json.data[0].batch_type;
    document.getElementById("r2c5").innerHTML = json.data[0].faculty_name;
    document.getElementById("r3c2").innerHTML = json.data[1].batch_name;
    document.getElementById("r3c3").innerHTML = json.data[1].batch_timing;
    document.getElementById("r3c4").innerHTML = json.data[1].batch_type;
    document.getElementById("r3c5").innerHTML = json.data[1].faculty_name;
    document.getElementById("r4c2").innerHTML = json.data[2].batch_name;
    document.getElementById("r4c3").innerHTML = json.data[2].batch_timing;
    document.getElementById("r4c4").innerHTML = json.data[2].batch_type;
    document.getElementById("r4c5").innerHTML = json.data[2].faculty_name;
    document.getElementById("r5c2").innerHTML = json.data[3].batch_name;
    document.getElementById("r5c3").innerHTML = json.data[3].batch_timing;
    document.getElementById("r5c4").innerHTML = json.data[3].batch_type;
    document.getElementById("r5c5").innerHTML = json.data[3].faculty_name;

    // }));

  })
}
//https://script.google.com/macros/s/AKfycbxVul5da8McGDHI3jWUB-LGQOhIL76TxaKunJ7-YknonzmQ4iU6A1x5at3we6ZNUSXQ/exec
