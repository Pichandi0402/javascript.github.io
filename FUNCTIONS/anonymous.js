//anonymous fuctions or unnamed functions
setTimeout(function(){
    console.log('unnamed function');
},3000);

var numbers= [4,8,12];

numbers.forEach((a)=>{
    console.log(a-2);
})