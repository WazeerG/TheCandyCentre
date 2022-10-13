const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const storeItems = document.getElementById("container-fluid")
  const product = document.querySelectorAll("column")
  const pname = document.getElementByTagName("p")

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementByTagName('p')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}
