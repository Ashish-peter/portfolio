//alert("hello");

//##############################################################Registration Form JS Code #########################################################

const scriptURL = 'https://script.google.com/macros/s/AKfycbwfQOoUuMG8UfqRjd4AZkSSLCQwKUE1v92czC0MRGxKe0l-hqnwTAwDptwolrukfw52/exec';
const form = document.forms['Registration Form Details'];

getdata()


function getdata() {
  fetch(scriptURL).then((res) => {
    return res.json()
  }).then((json) => {





    form.addEventListener('submit', e => {

      e.preventDefault()
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        }).then(function() {


          var userContactNumber = document.getElementById("inputContactNo").value;
          // console.log(userContactNumber);

          //fetching length of contact_number in the total list
          var count = 0; //global var
          json.data.forEach((ele => {
            count++;
          }))
          // console.log(count);
          var result1 = "";
            var result2 = "";
            for (var i = 0; i < count; i++) {
              if (userContactNumber == json.data[i].contact_number) {
                result1 = userContactNumber;
                result2 = json.data[i].contact_number;
                //next html page
                // alert("you already singup");
                window.location.replace("AlreadyRegistered.html");



                break;
              }
            }
            // console.log(result1);
            // console.log(result2);



        })
        .catch(error => console.error('Error!', error.message)).then(function(){
          console.log("it's work");
        })


    })

  })


}


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
