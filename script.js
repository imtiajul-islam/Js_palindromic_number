let valuer = document.querySelector('#input');
let submit = document.querySelector('#submit');
let result = document.querySelector('#result');

submit.addEventListener('click', () => {
    if (valuer.value == '') {
        alert('Please enter a number!');
        return;
    }
    let val = valuer.value;
    let oposite = val.split('');
        oposite = oposite.reverse();
        oposite = oposite.toString(); 
        oposite = oposite.replaceAll(',' , '');
        // oposite = Number(oposite);
        if(val == oposite){
            result.innerHTML = "This is a Palindromic number"
        }else{
            result.innerHTML = "This is not a palindromic number!!"
        }

}) 