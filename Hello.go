package main
import ("fmt" 
"math")

// created a function to ask age from user 

func askage()  {

	age:= 0.0

	fmt.Println("enter your age : ")
    fmt.Scan(&age)
     
    if math.IsNaN(age) || age <= 0 {

		println("Please enter a valid age! ")

		askage()

	}else if age >= 18 {
		println("You can drive")
	}else {
		println("underage! you cannot drive")
	}

	
}

func main(){
	fmt.Println("hello_world")

// we can declare a variable with two methods

//first method to declare a vraiable 
//var age int  

// second method to declare variable

//age:= 0


askage() // calling the function in main 
	
}
