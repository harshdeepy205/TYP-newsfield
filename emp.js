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

  var check = true
  var x;
  x = [document.getElementById("new_name").value,
    document.getElementById('about_me').value,
    document.getElementById('github_url').value,
    document.getElementById('linkedin_url').value,
    document.getElementById('instagram_url').value,
    document.getElementById('twitter_url').value
  ];
  x.forEach((el) => {
    if (el == "") {
      check = false
    }
  });
  if (check == false) {
    alert("Enter the Details First!");
  } else {
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
  <button onCLick ="removeCard(this.parentNode.id)" class="deleteBtn"> ❌ </button>
</div>`

    document.getElementById('demo1').innerHTML = `<table class="table" cellspacing="10">
          <tr>
            <td><b>Name:</b></td>
            <td><input type="text" name="new_name" placeholder="Enter Name here" class="field" id="new_name"></td>
          </tr>
          <tr>
            <td><b>Description:</b></td>
            <td><input type="text" name="about_me" placeholder="Enter Name here" class="field" id="about_me"></td>
          </tr>
          <tr>
            <td><b>Github Url:</b></td>
            <td><input type="text" name="github_url" placeholder="Enter Name here" class="field" id="github_url"></td>
          </tr>
          <tr>
            <td><b>LinkedIn Url:</b></td>
            <td><input type="text" name="linkedin_url" placeholder="Enter Name here" class="field" id="linkedin_url">
            </td>
          </tr>
          <tr>
            <td><b>Instagram Url:</b></td>
            <td><input type="text" name="instagram_url" placeholder="Enter Name here" class="field" id="instagram_url">
            </td>
          </tr>
          <tr>
            <td><b>Twitter Url:</b></td>
            <td><input type="text" name="twitter_url" placeholder="Enter Name here" class="field" id="twitter_url"></td>
          </tr>
        </table>
        <center> <button class="btn"
            onclick="addNewCard(document.getElementById('new_name').value,document.getElementById('about_me').value,document.getElementById('github_url').value,document.getElementById('linkedin_url').value,document.getElementById('instagram_url').value,document.getElementById('twitter_url').value)">Submit</button>
        </center>`
  }

}

function removeCard(id_card) {

  console.log("remoceCard ", id_card)

  document.getElementById(id_card).style.display = 'none'

}


// function empty() {
//   var x;
//   x = document.getElementById("new_name").value,
//     document.getElementById('about_me').value,
//     document.getElementById('github_url').value,
//     document.getElementById('linkedin_url').value,
//     document.getElementById('instagram_url').value,
//     document.getElementById('twitter_url').value;
//   if (x == "") {
//     alert("Enter the Details First!");
//   };
// }