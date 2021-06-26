
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.a');
  let clear = document.querySelector('.button-clear');
  let equal = document.querySelector('.button-equal');
  
  buttons.forEach(function(button){
    button.addEventListener('click', function(x){
      let value = x.target.dataset.num;
      screen.value += value;
    })
  });
  
  equal.addEventListener('click', function(x){
    if(screen.value === ''){
      screen.value = 'enter value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(x){
    screen.value = '';
  })
 

