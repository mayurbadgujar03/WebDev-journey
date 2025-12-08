//Union

let subs: number | string = "1M";

//custom modes
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

// suggestion will reflect and in big codebase that will really help
let airlineSeat: "aisle" | "window" | "middle" = "aisle";

airlineSeat = "middle";

const orders = ['12', '20', '28', '42'];

// he don't care as of now, insert any thing, if not define
// let currentorder;

// that's why know the possiblites of the variable and define the type
let currentorder: string | undefined;


for(let order of orders) {
    if(order === '28') {
        currentorder = order
        break
    }
}

console.log(currentorder);


// Summary 

// In union we can give multiple datatypes using | symbol
// let subs: number | string = "1M";

// And also we can create our own datatypes - custom 
// let apiRequestStatus: "pending" | "success" | "error" = "pending";

// To aviod the datatype as 'any', we need to tell what are the possiblites
// let currentorder: string | undefined;