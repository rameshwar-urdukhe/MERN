let buld = document.querySelector(".box")
let btn = document.querySelector('button');
let flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        buld.style.backgroundColor = "red";
        btn.innerText = "OF";
        flag = 1;
    } else {
        buld.style.backgroundColor = "green";
        btn.innerText = "ON";
        flag = 0;
    }
})