//alert("hello");

//##############################################################Registration Form JS Code #########################################################

const scriptURL ='https://script.google.com/macros/s/AKfycbwfQOoUuMG8UfqRjd4AZkSSLCQwKUE1v92czC0MRGxKe0l-hqnwTAwDptwolrukfw52/exec';
const form = document.forms['Registration Form Details'];

form.addEventListener('submit',e =>{
  var result=1;
  if(result===2){
    e.preventDefault()
    fetch(scriptURL,{method:'POST', body : new FormData(form)}).then(
      response=> alert("Thanks for Registering with us. We will contact you soon")
    )
    .catch(error=> console.error('Error!', error.message))
  }
  else{
    console.log("You already submitted form");
  }

})
