function testForEquality(){
    const v1 = 123//number
    const v2 ="123"//string
    if(v1 == v2){
        alert("The values are same")
    }
    if(v1 === v2){
        alert("The values and their types are also same")
    }else{
        alert("Values might be same but their types are different")
    }
}
