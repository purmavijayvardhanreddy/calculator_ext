console.log('vijay');
var c=document.getElementById('valu');
var disp=document.getElementById('disp');
// dis.innerText=33;
var t=""
c.addEventListener('click',function fun(e){
    if(e.target.value!=undefined){
    if (e.target.value=='AC'){
        t='';
        disp.innerText=t;
    }
    else if(e.target.value=='B'){
        var tem=t;
        var n=tem.length;
        // e.target.value=tem.slice(0,n-1);
        disp.innerText=tem.slice(0,n-1,1);
        t=tem.slice(0,n-1,1);

    }

    else if (e.target.value=='='){
        var tem=eval(t)
        disp.innerText=tem;
        t=tem;

    }
    else{
        t+=(e.target.value);
        disp.innerText=t;
    }
}
else{
    // t=''
    disp.innerText=t;
}
})
