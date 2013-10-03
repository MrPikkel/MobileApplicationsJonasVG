function hello() {
    var name = inputnaam.value;
    if(name !=""){
    var para = document.getElementById("hellotext");
    var response = "Hello " + name + ", have a nice day!";
    para.textContent = response;
    }


}
