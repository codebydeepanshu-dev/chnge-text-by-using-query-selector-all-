var allbtn = document.querySelectorAll('button');

allbtn.forEach(function(elem){
  elem.addEventListener('click', function(){
    if (elem.textContent.trim() === "add friends") {
      elem.textContent = "remove friends";
      elem.style.textTransform = 'uppercase';
    } else {
      elem.textContent = "add friends";
      elem.style.textTransform = 'uppercase';
    }
  });
  
});
