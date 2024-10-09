
// daily work

//  let A ; // variable difind
  
   //   A="apple"; // value assign 
	  
 // let A="apple"; // variable difind and value assign
  
    
	// kind of data type
	 
	 
	  // 1. String
	  // 2. Number
	  // 3.BigInt
	  // 4.boolean
	  // 5. null
	  // 6. undefined
	  // 7. Symbol
	  // 8.Object
	  
	  // kind of Object
	  // 1. Object
	  // 2. array Object
	  
	  
	  
	  // let B="belt";  String
	  
	  // let roll =246718;  Number
	  
	  // let goodboy=true;  boolean
	  
	  // const product={};   Object
	  // const  list =[];  array Object
	  
	  
	  
	//  const numbers =["A+" , "B+","C+","C-","D+","D-","D","F","C","F","A-","F"];
	  
	   //    const result=[];
	  
	  
	   //     for(let number of numbers){
				
				
			//	if(number !=="F"){
					
					//result.push(number);
			//	};
				
			//	if(number==="A+"){
					
			//		result.push("A-")
		//		}
			//	else{
			//		result.push(number);
					
			//	}
				
				
				
		//	};
	  
	       //      console.log(result)
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	   // for (let i=0;i<numbers.length;i++){
			
		//	let number=numbers[i];
			
			//  if(number !=="F"){
				  
				// result.push(number) ;
			//  };
			
		//	if(number==="A+"){
			//	result.push("A-");
		//	} else{
			//	result.push(number) ;
		//	}
			
		// };
	  
	  
	     //  console.log(result);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	 // const greatPoint=numbers.filter(function(number){
		  
		  
		//  if(number=="A+" || number==="D+" || number==="C" || number==="B+"){
			  
			//  return true
		//  };
		  
		  
		  
		  
		   // if(number!=="F"){
				
			//	return true
		//	};
	 
		  
		  
		  
	 // });
	  
	     //  console.log(greatPoint)
	 
	 
	//Math.round(x)	Returns x rounded to its nearest integer
	//Math.ceil(x)	Returns x rounded up to its nearest integer
	//Math.floor(x)	Returns x rounded down to its nearest integer
	//Math.trunc(x)	Returns the integer part of x (new in ES6)

          


           // const mathrount=Math.round(5.3);
			
			
			
			//console.log(mathrount)


              const ceilnumber=Math.ceil(-5.8);
			  
			  
			 // console.log(ceilnumber);
			  
			  // const floornumber=Math.floor(6);
			  
			  
			 // console.log(floornumber);
			  
			  // const truncnumber=Math.trunc(5.9);
			  
			  
			 // console.log(truncnumber);



		// Math.sign()

		// Math.pow()
		
		// Math.sqrt()
		
		// Math.abs()
		
		// Math.sin()
		
		// Math.cos()

		// Math.min() and Math.max()


		// Math.random()
		
		// The Math.log() Method

		// The Math.log2() Method
		
		// The Math.log10() Method



   /* const singnumber=Math.sign(0);
	
	
	 console.log(singnumber)
	 
	  const pownumber=Math.abs(8);
	
	
	 console.log(pownumber)*/
	 
	 
	 
	 const student={
		 
		 bangla: 85,
	   math : 70,
	   arabic: 65,
	   english:75,
	 };
	 
	 
	 function numberToPoint(marks){
		let point=0;	
		 
		    if(marks>=80){
				point= 5.0;
			}
			else if(marks>=70){
				
				point= 4.0;
			}
			else if(marks>=60){
				
				point= 3.0;
			}
		 else if(marks>=50){
				
				point= 2.0;
			}
		 
		 			 return point;

	 };
	 
   const subjects=Object.keys(student);
   const subjectLength=subjects.length;
	 
	 
/*	const bangla= numberToPoint(student['bangla']);
	const math= numberToPoint(student['math']);
	const arabic= numberToPoint(student['arabic']);
	const english= numberToPoint(student['english']);
	const poits =bangla+math+arabic+english*/
	// const poitn=subjects;
	// console.log(poitn)
	let points=0;
	 
	 for(let subject of subjects){
		const subjectNumber= student['bangla'];
	const x= numberToPoint(subjectNumber);
		 
		 points= points+x 
		// console.log(subject,subjectNumber)
	 };
	 
	 const GPA=points/subjectLength
	 
		 console.log(GPA)
	 
	 
	 
	 
	 
	 const product={
		 
		 name:"i-phone",
		 model:"x-altra",
		 colour:"black",
		 id:246718,
		 
	 };
	 
	const  objectvalues=Object.values(product);
	
	const  objectKey=Object.keys(product);
	
	 
	 console.log(objectKey,objectvalues);
	 
	 
	 
	 // daily work
	 
	 
	//let name; // variable difind kora
	 
	 // name="rakib"; // value assign kora
	  
	  let a="apple"; // variable difind and assign kora
	  
	  
	//  kind of data type
	  
	  // 1. String
	  // 2. number
	  // 3. BigInt
	  // 4. null
	  // 5. undefined
	  // 6. boolean
	  // 7.Symbol
	  // 8. Object  1. object  2. array object
	  
	  
	  let b="belt"; // String
	  let roll=246718; // number
	  let goodBoy=true;  // boolean
	 // const product={};  //object
//	  const listName={}; //array object


         let text="hello world";
		 
		 let result=text.slice(0,4);
		 
		   console.log(result);