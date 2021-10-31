document.body.innerHTML=`<section class="container"></section>
                         `

let data=document.querySelector('.container');
data.innerHTML=`<div class="formElements"></div>
                <div><table class="table"> </table></div>`;

let formdata=document.querySelector('.formElements');
formdata.innerHTML=`

<form class="form"> 

<div class="form-data">
<label for="firstname"><strong>FirstName</strong></label><br>
<input type="text" class="Firstname" name="fname" id="firstname" >
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle firstname"></i>
<small>Error message</small><br>
</div>

<div class="form-data">
<label for="lastname"><strong>LastName</strong></label><br>
<input type="text" class="Lastname" name="lname"  id="lastname">
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i>
<small>Error message</small><br>
</div>

<div class="form-data">
<label for="address"><strong>Address</strong></label>
<input type="text" class="address" name="address" id="address">
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i>
<small>Error message</small><br>
</div>

<div class="form-data">
<label for="pincode"><strong>Pincode</strong></label><br>
<input type="number"  class="pincode" number="pincode" id="pincode">
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i>
<small>Error message</small><br>
</div>

<div class="form-data">
<label><strong>Gender</strong></label><br>
<input type="radio" id="male"   class="male"    name="gender" value="Male"><label for="male">Male</label>
<input type="radio" id="female" class="female"  name="gender" value="Female"><label for="female">Female</label><br><br>
</div>

<label ><strong>Choice of food</strong></label><br>
<input type="checkbox" class="food"  name="food[]" id="biriyani" value="Biriyani">    <label for="biriyani">Biriyani</label>
<input type="checkbox" class="food"  name="food[]" id="friedrice" value="Fried rice"> <label for="friedrice">Fried Rice</label>
<input type="checkbox" class="food"  name="food[]" id="tandoori" value="Tandoori">    <label for="tandoori">Tandoori</label>
<input type="checkbox" class="food"  name="food[]" id="parotta" value="Parotta">      <label for="parotta">Parotta</label>
<input type="checkbox" class="food"  name="food[]" id="eggrice" value="Egg Rice">     <label for="eggrice">Egg Rice</label><br><br>

<div class="form-data">
<label for="state"><strong>State</strong></label><br>
<input type="text" class="state" name="state" id="state">
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i>
<small>Error message</small><br>
</div>

<div class="form-data">
<label for="country"><strong>Country</strong></label><br>
<input type="text" class="country" name="country" id="country">
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i>
<small>Error message</small><br>
</div>

<div class="d-grid gap-2 ">
<button class="btn btn-primary submit" onclick="stop()"  >Submit</button>
</div>
</form>
`

let RowNumber=0;
document.querySelector('.form').addEventListener("submit",getdata);

function getdata(s)
{
let firstname=document.querySelector('.Firstname').value.trim();
let lastname=document.querySelector('.Lastname').value.trim();
let address=document.querySelector('.address').value.trim();
let pincode=document.querySelector('.pincode').value.trim();
let state=document.querySelector('.state').value.trim();
let country=document.querySelector('.country').value.trim()

// storing data in Local Storage

localStorage.setItem("FirstName",firstname);
localStorage.setItem("LastName",lastname);
localStorage.setItem("Address",address);
localStorage.setItem("Pincode",pincode);

// Gender Selection
let gender=document.querySelector('input[name="gender"]:checked').value
localStorage.setItem("Gender",gender);

// Food Selection
let ChoiceOfFood=[];
let food=document.getElementsByName('food[]');

for(let i in food)
{
  if(food[i].checked)
  {
    ChoiceOfFood.push(food[i].value);
  }
}

if(ChoiceOfFood.length==0 ||ChoiceOfFood.length<2)
{
  alert('Select atleast two foods')
  // return false;
}
else
{
ChoiceOfFood=ChoiceOfFood.join(',');
localStorage.setItem("food",ChoiceOfFood);
}

localStorage.setItem("State",state);
localStorage.setItem("Country",country);

// Clearing Data from inputField

document.querySelector('.Firstname').value="";
document.querySelector('.Lastname').value="";
document.querySelector('.address').value="";
document.querySelector('.pincode').value="";
document.querySelector("#male").checked=false;
document.querySelector("#female").checked=false;


for(let i in food)
{
  if(food[i].checked)
  {
    food[i].checked=false;
  }
}

document.querySelector('.state').value="";
document.querySelector('.country').value="";

// Accessing Data from localstorage
let Firstname=localStorage.getItem("FirstName");
let Lastname=localStorage.getItem("LastName");
let Address=localStorage.getItem("Address");
let Pincode=localStorage.getItem("Pincode");
let Gender=localStorage.getItem("Gender");
let SelectedFood=localStorage.getItem("food");
let State=localStorage.getItem("State");
let Country=localStorage.getItem("Country");

// Creating Table Header
let table=document.querySelector('.table')
function createtable()
{
   
   let row=table.insertRow(RowNumber);

   let cell1=row.insertCell(0);
   let cell2=row.insertCell(1);
   let cell3=row.insertCell(2);
   let cell4=row.insertCell(3);
   let cell5=row.insertCell(4);
   let cell6=row.insertCell(5);
   let cell7=row.insertCell(6);
   let cell8=row.insertCell(7);


   cell1.innerHTML="FirstName";
   cell2.innerHTML="LastName";
   cell3.innerHTML="Address";
   cell4.innerHTML="Pincode";
   cell5.innerHTML="Gender";
   cell6.innerHTML="Choice Of Food";
   cell7.innerHTML="State";
   cell8.innerHTML="Country";
}

    if(RowNumber==0)
      {  
         createtable();
         RowNumber--;
      }
   
        row=table.insertRow(RowNumber);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        let cell5=row.insertCell(4);
        let cell6=row.insertCell(5);
        let cell7=row.insertCell(6);
        let cell8=row.insertCell(7);


        cell1.innerHTML=Firstname;
        cell2.innerHTML=Lastname;
        cell3.innerHTML=Address;
        cell4.innerHTML=Pincode;
        cell5.innerHTML=Gender;
        cell6.innerHTML=SelectedFood;
        cell7.innerHTML=State;
        cell8.innerHTML=Country;
   
    s.preventDefault(); 

 }
















