let submit = document.querySelector('#submit');
let reset = document.querySelector('#reset');
let msg1 = document.querySelector('#permsg');
let msg2 = document.querySelector('.msg2');
let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');
let random = Math.floor(Math.random()*100);



//   set the name who you wants to show great results
function condition (){

    // NAME SAME CONDITION
    if 
    (name1.value === 'mustajab khan' | name1.value ===  'MUSTAJAB KHAN' | name1.value === 'MUSTAJAB' | name1.value ===  'mustajab' | name1.value === 'mustajabkhan'
    |name1.value === 'faiz khan' | name1.value ===  'FAIZ KHAN' | name1.value === 'FAIZ' | name1.value ===  'faiz' | name1.value === 'faizkhan'
 && 
     name2.value === 'kinza fatima'  | name2.value ===  'KINZA FATIMA'  | name2.value ===   'KINZA'  | name2.value === 'kinza'    | name2.value === 'kinzafatima' 
    )
    {
        console.log('h')
        msg1.style.display = 'none';
        msg2.innerText = `CONGRATULAIONS YOU HAVE 100% LOVE`;
    }

    // IF NAME IS MUSTAJAB YOU CANT TRY
    else if
    (name1.value === 'mustajab khan' | name1.value ===  'MUSTAJAB KHAN' | name1.value === 'MUSTAJAB' | name1.value ===  'mustajab' | name1.value === 'mustajabkhan'
    )
    {
        msg1.style.display = 'none';
        msg2.innerText = `MUSTAJAB IS ONLY FOR KINZA DON'T TRY AGAIN WITH THIS NAME`
    }

    // IF NAME IS FAIZ YOU CANT TRY
    else if
    (name1.value === 'faiz khan' | name1.value ===  'FAIZ KHAN' | name1.value === 'FAIZ' | name1.value ===  'faiz' | name1.value === 'faizkhan'
    )
    {
        msg1.style.display = 'none';
        msg2.innerText = `FAIZ IS ONLY FOR KINZA DON'T TRY AGAIN WITH THIS NAME`
    }

    // IF NAME IS KINZA YOU CANT TRY
    else if(name2.value === 'kinza fatima'  | name2.value ===  'KINZA FATIMA'  | name2.value ===   'KINZA'  | name2.value === 'kinza'    | name2.value === 'kinzafatima' )
    {
        msg1.style.display = 'none';
        msg2.innerText = `KINZA IS ONLY FOR MUSTAJAB DON'T TRY AGAIN WITH THIS NAME`
    }
    else if(random >=90){
        msg1.style.display = 'none';
        msg2.innerText = `CONGRATLATION'S YOU HAVE ${random}% LOVE`;
    }

    else{
        msg1.innerText = `YOU HAVE ${random} % LOVE`;
        msg2.style.display ='none'
    }

}





//   show result on click 
submit.addEventListener('click' , function(x){
    
    condition()
    x.preventDefault();
    submit.disabled = true;
    // if(random >=90){
    //     msg1.style.display = 'none';
    //     msg2.innerText = `CONGRATLATION'S YOU HAVE ${random}% LOVE`;
    // }

    // else{
    //     msg1.innerText = `YOU HAVE ${random} % LOVE`;
    //     msg2.style.display ='none'
    // }

});




//   submit button disabled 
name2.addEventListener('keyup' , (a) =>{

    const value1 = a.currentTarget.value;

    if(value1 === ""){
        submit.disabled = true
    }else{
        submit.disabled = false;
    }
})

//   reset function
function reset1 (){
    window.location.reload();
};{}