function Search(){
  var q =document.getElementById("search").value;
 $(".column").each(function(){

    var name = this.textContent;

    if(name.search(q) < 0) $(this).fadeOut();
  });
}

/*$('#search').on('change', function(e){

  if(name.search(q) < 0) $(this).fadeOut();

});
*/
