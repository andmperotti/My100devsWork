document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  const result = document.querySelector('#placeToSee')
  // if(day=='tuesday'||day=='thursday'){
  //   result.innerText = 'Good day!'
  // }else if(day=='monday'||day=='wednesday'||day=='friday'){
  //   result.innerText = "Boring day!"
  // }else{
  //   result.innerText = 'Weekend day!'
  // }
  switch(day.toLowerCase()){
    case 'tuesday'||'thursday':
      result.innerText = 'good day';
      break;
    case 'monday'||'wednesday'||'wednesday':
      result.innerText = 'boring day';
      break;
    default:
      result.innerText = 'weekend day!';
      break;
  }


}
