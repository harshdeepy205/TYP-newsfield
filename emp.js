var arr1 = new Array();

function addItem() {
  var lists = document.getElementById("listItems");
  var inputdata = document.getElementById("inputdata").value;
  var li = document.createElement("li");

  if (inputdata === "") {
    alert("Enter the Text First");
  } else {
    if (arr1.includes(inputdata)) {
      alert("News are already there");
    } else {
      li.setAttribute("id", inputdata);
      li.classList.add("li-item");

      li.appendChild(getFirstChild(inputdata));
      li.appendChild(getSecondChild(inputdata));
      lists.appendChild(li);

      arr1.push(inputdata);
    }
  }
  document.getElementById("inputdata").value = "";
}

function getFirstChild(text) {
  let elem = document.createElement("div");
  elem.appendChild(document.createTextNode("👉" + " " + text));
  return elem;
}

function getSecondChild(parentId) {
  let elem = document.createElement("div");
  elem.appendChild(document.createTextNode("❌"));
  elem.onclick = function () {
    parentElement = document.getElementById(parentId);
    parentElement.remove();
  };
  return elem;
}

function displayNews() {
  if (document.getElementById("demo").style.display === "none") {
    element = document.getElementById("demo").style.display = "grid";
  } else {
    element = document.getElementById("demo").style.display = "none";
  }
}


function addNew() {
  if (document.getElementById("demo1").style.display === "none") {
    element1 = document.getElementById("demo1").style.display = "grid";
  } else {
    element1 = document.getElementById("demo1").style.display = "none";
  }
}

function addNewCard(name, description, github_url, linkedin_url, instagram_url, twitter_url) {
  console.log("addnewCrdWork", Date.now())
  console.log(name, description, github_url, linkedin_url, instagram_url, twitter_url)


  console.log(document.getElementById("divCards"))

  document.getElementById("divCards").innerHTML += `<div class="register-box" id="${Date.now()}">
  <center>
    <h2>${name}</h2>
  </center>
  <div class="card-head">
    <img src="img/harsh.jpg">
  </div>
  <div class="cdbody" style="margin-top: 10px;">
    <center>
      <h3>${description}</h3>
    </center>
    <a href="${github_url}" target="_blank" class="btn-img">
      <i class="fa fa-github-square fa-2x " aria-hidden="true"></i>
    </a>
    <a href="${linkedin_url}" target="_blank" class="btn-img">

      <i class="fa fa-linkedin-square fa-2x " aria-hidden="true"></i>
    </a>
    <a href="${instagram_url}" target="_blank" class="btn-img"><i class="fa fa-instagram fa-2x " aria-hidden="true"></i></a>
    <a href="${twitter_url}"  target="_blank" class="btn-img"><i class="fa fa-twitter-square fa-2x " aria-hidden="true"></i></a>
  </div>
  <button onCLick ="removeCard(this.parentNode.id)" style="margin-top:14px; cursor:pointer;"> ❌ </button>
</div>`
}

function removeCard(id_card) {

  console.log("remoceCard ", id_card)

  document.getElementById(id_card).style.display = 'none'

}