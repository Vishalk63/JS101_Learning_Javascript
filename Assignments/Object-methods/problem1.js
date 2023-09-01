// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

details = {
  data : [],
  myfun : function (name,english,math,science){
    let obj={};
    obj.name = name;
    obj.english = english;
    obj.math = math;
    obj.science = science;
    this.data.push(obj);
  },

  print : function (){
  console.log(this.data)
  },

  max : function(){
    let max = -Infinity;
    let maxstudent = ""
    let min = Infinity;
    let minstudent=""
    for(i=0;i<this.data.length;i++){
      // console.log(this.data[i])
      let total = this.data[i].english +
                  this.data[i].math +
                  this.data[i].science;
      if(total>max){
        max=total;
        maxstudent= this.data[i].name;
      }
      if(total<min){
        min=total;
        minstudent= this.data[i].name;
      }
    }
    console.log("Max:",max,maxstudent)
    console.log("Min:",min,minstudent)
  }
  
}

details.myfun("Vishal",70,80,90);
details.myfun("Namita",100,70,80);
details.myfun("Tejaswini",50,20,20);

details.print()
details.max()






