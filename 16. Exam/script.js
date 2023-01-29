function addToPets(e){
  e.innerText++
}

let adoptAlert = document.querySelectorAll('.choice')

adoptAlert.forEach(function(select){
  select.addEventListener('click', function(){
    alert('You are looking for a: ' + select.innerText)
  })
})
