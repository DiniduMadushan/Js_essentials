let userRole="admin";
let accessLevel;

if(userRole==="admin"){
    accessLevel="full access granted";
}else if(userRole==="manager"){
    accessLevel="limited access granted";
}else{
    accessLevel="no access granted";
}

console.log("Access level: ",accessLevel);

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome, admin!";
    }else{
        userMessage="welcome, user!";
    }
}else{
    userMessage="please log into access the system!";
}

console.log("user message: ",userMessage);

let userType="subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory="administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="subscriber";
        break;
    default:
        userCategory="unknown";            
}

console.log("User category: ",userCategory);