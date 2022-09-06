// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name : "Birthday party",
    guestlist : ['Akshat','Nishtha','Parth'],
    
    printguestlist : function(){
        console.log('Guest List For ' + this.name)

        // this.guestlist.forEach(function(guest){
        //     console.log(guest + " is here to attend " + this.name)
        // }) arrow function creates its own binding while function method  does not create its own binding 
        //      this should not be in its own binding in this case

        this.guestlist.forEach((guest) =>{
                console.log(guest + " is here to attend " + this.name)})
    }

}

event.printguestlist()