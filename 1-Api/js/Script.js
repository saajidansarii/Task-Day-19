let url = "https://api.thecatapi.com/v1/images/search?limit=11";

let Sajid = (data) => {
  console.log(data);
};

let Sajid_promise = new Promise(function (resolve, reject) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status === 200) {
      resolve(request.responseText);
    } else {
      reject(request.status);
    }
  };
  request.send();
});

Sajid_promise.then(function Success(value) {
  console.log(value);
})
  .catch(function Failure(value) {
    Sajid(value);
  })
  .finally(function Final() {
    console.log("The Promise Ran Successfully ");
  });

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];

function AddRow() {
  var n = 1;
  var x = 0;
  var AddRown = document.getElementById("table");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("").value;
  list2[x] = document.getElementById("").value;
  list3[x] = document.getElementById("").value;
  list4[x] = document.getElementById("").value;
  list5[x] = document.getElementById("").value;
  list6[x] = document.getElementById("").value;
  list7[x] = document.getElementById("").value;
  list8[x] = document.getElementById("").value;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];

  n++;
  x++;
}

function resetForm() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";

  //   form.classList.remove('was-validated');
}
