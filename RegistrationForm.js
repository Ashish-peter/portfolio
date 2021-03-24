//alert("hello");

//##############################################################Registration Form JS Code #########################################################

const scriptURL = 'https://script.google.com/macros/s/AKfycbwfQOoUuMG8UfqRjd4AZkSSLCQwKUE1v92czC0MRGxKe0l-hqnwTAwDptwolrukfw52/exec';
const form = document.forms['Registration Form Details'];

getdata()


function getdata() {
  fetch(scriptURL).then((res) => {
    return res.json()
  }).then((json) => {

    //fetching length of contact_number in the total list
    var count = 0; //global var
    json.data.forEach((ele => {
      count++;
    }))


    //the below code will execute on clicking submit buttom
    form.addEventListener('submit', e => {
      var userContactNumber = document.getElementById("inputContactNo").value;
      // console.log(x);

      var result1 = "";
      var result2 = "";
      for (var i = 0; i < count; i++) {
        if (userContactNumber == json.data[i].contact_number) {
          result1 = userContactNumber;
          result2 = json.data[i].contact_number;
          break;
        }
      }


      if (result1 == result2) {

        console.log("you arleady");


        //console.log('you already participated');
        // e.preventDefault()
        // fetch(scriptURL, {
        //     method: 'POST',
        //     //body: new FormData(form)
        //   }).then(
        //     response => alert("you already participated")
        //   )
          //.catch(error => console.error('Error!', error.message))
        }

        e.preventDefault()
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
          }).then(
            response => alert("Thanks for Registering with us. We will contact you soon")
          )
          .catch(error => console.error('Error!', error.message))












    })
    // console.log(json.data[0].contact_number);

  })
}



console.log("hello");




// form.addEventListener('submit',e =>{
//   var x = document.getElementById("inputContactNo").value;
//   console.log(x);
//
//
//
//   e.preventDefault()
//   fetch(scriptURL,{method:'POST', body : new FormData(form)}).then(
//     response=> alert("Thanks for Registering with us. We will contact you soon")
//   )
//   .catch(error=> console.error('Error!', error.message))
// })
