const url = 'https://script.google.com/macros/s/AKfycbxA80IrGOcWyozo3xvlig3g75xjkTh5Y_zTcCYQN_FrPsR6zI_z-nyPeu6nFw5nGBhU/exec';
getdata();

function getdata() {
  fetch(url).then((res) => {
    return res.json()
  }).then((json) => {


    var today = new Date;
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    var date = today.toLocaleDateString("en-US", options);
    document.getElementById("date").innerHTML = date;

    var count = 0; //global var
    json.data.forEach((ele => {
      count++;
    }));

    for(var i=0 ; i<count; i++){
      var notice = document.getElementById("notice");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(json.data[i].important_notice));
      notice.appendChild(li);
    }










    // console.log(json.data[0].important_notice);
    //   document.getElementById("notice").innerHTML = json.data[0].important_notice
        // document.getElementById("notice").innerHTML = json.data[0].important_notice;//dynamic

  })

}
