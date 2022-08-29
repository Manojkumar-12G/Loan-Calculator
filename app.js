// Listen for submit
document.getElementById("loan-form").addEventListener('submit',function(e){
  // Hide Results
  document.getElementById('results').style.display="none" ;

  // show Loader
  document.getElementById('loading').style.display="block" ;

  setTimeout(calculateResults,2000);

  e.preventDefault();
});


//calculateResults
function calculateResults(){
  console.log("calculating....");
//Ui vars
const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');
const monthlyPayment=document.getElementById('monthly-payment');
const totalPayment=document.getElementById('total-payment');
const totalInterest=document.getElementById('total-interest');

//calculations
const principal =parseFloat(amount.value);
const calculatedInterest =parseFloat(interest.value)/100/12 ;
const calculatedPayments=parseFloat(years.value)*12;

//Computed monthly payments
const x = Math.pow(1+calculatedInterest,calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);
if(isFinite(monthly)){
  monthlyPayment.value=monthly.toFixed(2);
  totalPayment.value=(monthly*calculatedPayments).toFixed(2);
  totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

//show Results
  document.getElementById('results').style.display="block"

  //Hide Loader
    document.getElementById('loading').style.display="none"

}else{
  // console.log("Please check your numbers");
  showError('Please check your numbers');
}

  // e.preventDefault();

}
//Show console.error;

function showError(error){

  //Hide Results
    document.getElementById('results').style.display="none"

    //Hide Loader
      document.getElementById('loading').style.display="none"




  //create a div
  const errorDiv=document.createElement('div');
   //Get elements

   const card = document.querySelector(".card");
   const heading=document.querySelector(".heading");

  // Add class
  errorDiv.className="alert alert-danger";

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv,heading);

  //clear error after 3 seconds
  setTimeout(clearError,3000);
}

// clear error
function clearError(){
  document.querySelector(".alert").remove();
  // Hide Loader
  // document.getElementById('loading').style.display="none"
}
