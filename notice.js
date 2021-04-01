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

    console.log(json.data[0].important_notice);
      document.getElementById("notice").innerHTML = json.data[0].important_notice
        // document.getElementById("notice").innerHTML = json.data[0].important_notice;//dynamic

  })

}
