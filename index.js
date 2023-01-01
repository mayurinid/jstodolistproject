
var hide = document.querySelector(".hidden");
var inp_title = document.querySelector(".input_title");
var task_plus1 = document.querySelector('.index_plus');
task_plus1.addEventListener('click', add_ele);
function add_ele() {
   hide.classList.remove("hidden");
  
 }

 function closer() {
   hide.classList.add("hidden");
   }

   var object_arry = [];
   var count = 0;
   var trash_icon01 = [];
var inp_title = document.querySelector(".input_title");
var con_box = document.getElementById("continer_box");
 var textmsg=document.getElementById("message");


function Obj_Create(unique_id, title) {
  this.unique_id = unique_id;
  this.title = title;
  task_obj = {};
}


document.querySelector(".add_button").addEventListener("click", () => {
 
 textmsg.classList.add("hidden");
   if (inp_title.value == "") {
      closer();
    } 
    
      else {
    var unique_id = new Date().valueOf();
    var box_obj = inp_title.value; 
    var temp_title = box_obj;
    box_obj = new Obj_Create(unique_id, temp_title); 
    object_arry.push(box_obj); 

    var box_div = document.createElement("div"); 
    box_div.classList.add("index_box", unique_id); 

    var p_tag = document.createElement("p"); 
    p_tag.classList.add("title", unique_id); 
    p_tag.textContent = inp_title.value; 
    

    box_div.append(p_tag); 
    
    box_div.append(document.createElement("hr")); 

    var task_box = document.createElement("div"); 
    task_box.classList.add("task_box", unique_id); 
    box_div.append(task_box); 
    
    var task_icon1 = document.createElement("div"); 
    task_icon1.classList.add("task_icon");
    
    var task_plus1 = document.createElement("i"); 
    task_plus1.classList.add("fas", "fa-plus-circle", "task_plus", unique_id);
    task_icon1.append(task_plus1); 

    var task_trash1 = document.createElement("i"); 
    task_trash1.classList.add("fas", "fa-trash-alt", "task_trash", unique_id);
    task_icon1.append(task_trash1); 
    box_div.append(task_icon1); 

    con_box.append(box_div); 
   
    plus_icon01 = document.getElementsByClassName("task_plus");
    plus_icon01[count].addEventListener('click', function (count) {
      plus_icon2(count.target.classList[3]);
    });

    trash_icon01 = document.getElementsByClassName("task_trash");
    trash_icon01[count].addEventListener('click', function (count) {
      trash_icon2(count.target.classList[3]);
    });
    count++;
    
    closer(); 
   }
  
   });

  
    function trash_icon2(id) {
      var temp_box = document.getElementsByClassName('index_box');
      for (let i of temp_box) {
        if (i.classList[1] == id) {
          con_box.removeChild(i);
          count--;
        }
      }
    }


