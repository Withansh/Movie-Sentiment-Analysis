function showDate()
{
    document.getElementById('demo').innerHTML = Date();
}

function resetDate()
{
    document.getElementById('demo').innerHTML ="";
}
function showName()
{
    document.getElementById('demo1').innerHTML="Hello Aishwarya";
}
function lightOn()
{
    document.getElementById('on').src ='bulbon.jpg';
}
function lightOff()
{
    document.getElementById('on').src ='bulb.jpg';
}
function fontBig()
{
    document.getElementById('big').style.fontSize="35px";
    document.getElementById('big').style.color="red";
    document.getElementById('big').innerText='hello aishwarya';
}
function fontBig1()
{
    document.getElementById('big').style.display='none';
    console.log(5+7);
    window.print();
}
