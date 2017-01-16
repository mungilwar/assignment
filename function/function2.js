function myAddition(){
   
     var add=0;
     for(i=0;i<arguments.length;i++){
     add+=arguments[i]
      }
        return add

}


document.write(myAddition(55,65));