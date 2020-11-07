var student_name_array=[];
function submit(){
for ( index = 1; index <=15; index++) {
var name=document.getElementById("name"+index).value;
    student_name_array.push(name);
}
document.getElementById("display_name").innerHTML=student_name_array;
}
function sorting(){
    student_name_array.sort();
    document.getElementById("display_name").innerHTML=student_name_array;
}