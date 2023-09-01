// // Create an object with the following functionality

// // Ability to add 3 students details and their marks in 3 subjects
// // Method to find the student with the least total.
// // Method to find the student with the highest total.

// details = {
//   data : [],
//   myfun : function (name,english,math,science){
//     let obj={};
//     obj.name = name;
//     obj.english = english;
//     obj.math = math;
//     obj.science = science;
//     this.data.push(obj);
//   },

//   print : function (){
//   console.log(this.data)
//   },

//   max : function(){
//     let max = -Infinity;
//     let maxstudent = ""
//     let min = Infinity;
//     let minstudent=""
//     for(i=0;i<this.data.length;i++){
//       // console.log(this.data[i])
//       let total = this.data[i].english +
//                   this.data[i].math +
//                   this.data[i].science;
//       if(total>max){
//         max=total;
//         maxstudent= this.data[i].name;
//       }
//       if(total<min){
//         min=total;
//         minstudent= this.data[i].name;
//       }
//     }
//     console.log("Max:",max,maxstudent)
//     console.log("Min:",min,minstudent)
//   }
  
// }

// details.myfun("Vishal",70,80,90);
// details.myfun("Namita",100,70,80);
// details.myfun("Tejaswini",50,20,20);

// details.print()
// details.max()



// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

details = {
  data : [],
  myfun : function(a,b,c,d){
    let obj = {}
    obj.name=a;
    obj.english=b;
    obj.sci=c;
    obj.math=d;
    // console.log(obj)
    this.data.push(obj)
  }
}

details.myfun("vishal",1,2,3);
console.log(details.data)

// console.log(result)

// details = {
//   data : [],
//   myfun : function (name,english,math,science){
//     let obj={};
//     obj.name = name;
//     obj.english = english;
//     obj.math = math;
//     obj.science = science;
//     this.data.push(obj);
//   },

//   print : function (){
//   console.log(this.data)
//   },

// }
// details.myfun("dffk",40,50,57)
// // console.log(details.data)
// details.print()





// // arr=[
// //   { name:'vishal', english : 1, math : 1, sci :1 },
// //   { name:'namita', english : 2, math : 2, sci :2 },
// //   { name:'tej', english : 3, math : 3, sci :3 },
// // ]
// // let max=0;
// // let maxstudent=""
// // for(i=0;i<arr.length;i++){
// //   let total=arr[i].english+arr[i].math+arr[i].sci;
// //   if(total>max){
// //     max=total;
// //     maxstudent=arr[i].name;
// //   }
// // }
// // console.log(max,maxstudent)





