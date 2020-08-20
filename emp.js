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
      li.appendChild(document.createTextNode(inputdata));
      lists.appendChild(li);
      arr1.push(inputdata);
    }
  }
  document.getElementById("inputdata").value = "";
}
