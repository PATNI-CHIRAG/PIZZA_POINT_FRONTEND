let login = false;
let register = false;
let r_name='';
let r_email='';
let r_password='';
let l_email='';
let l_password='';

function Register(){
    let username = /^[A-z]+$/;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    r_name = document.getElementById("r_name").value;
    r_email = document.getElementById("r_email").value;
    r_password = document.getElementById("r_password").value;
    
    if ((r_name.length == 0) || (r_email.length == 0) || (r_password.length == 0)) {
        alert("Please Enter Data");
    }
    
    else if (!(username.test(r_name))) {
        alert("Invalid user Name !");
    }
  
    else if (!(email.test(r_email))) {
        alert("Invalid Email !");
    }

    else if ((r_password.length < 4 || r_password.length > 8) || /\s/.test(r_password)) {
        alert("Invalid Password! (Password length must be between 4 to 8 characters or spaces are not allowed)");
    }
    else {
        alert("Registered successfully!");
        register = true;
    }
}

function Login(){

    l_email = document.getElementById("l_email").value;
    l_password = document.getElementById("l_password").value;

    if(register)
    {
        if((l_email != r_email) || (l_password != r_password)){
            alert("Somthing wrong !");
        }
        else{
            alert("Login Successfully by : "+r_name);
            login = true;

            document.getElementById("loginBtn").classList.add("d-none");
            document.getElementById("logoutBtn").classList.remove("d-none");
        }
    }else{
        alert("Please Register!")
    }
}

function Logout() {
    login = false;

    // Show Login button, hide Logout
    document.getElementById("loginBtn").classList.remove("d-none");
    document.getElementById("logoutBtn").classList.add("d-none");

    alert("Logged out successfully!");
}

let cartItems = [];
function add_cart(pizzaName, pizzaPrice, quantity) 
{
    if(quantity>0){
        const totalPrice = pizzaPrice * quantity;
        cartItems.push({
            pizzaName: pizzaName,
            quantity: quantity,
            totalPrice: totalPrice
        });

        alert(`${quantity} ${pizzaName}(s) added to your cart. Total Price: $${totalPrice.toFixed(2)}`);
    }
    else{
        alert("plese enter Quntity greater one!");
    }
}

function Order() {
    const phoneNumberPattern = /^\d{10}$/;

    const name = document.getElementById("o_name").value;
    const phoneNumber = document.getElementById("o_number").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const address = document.getElementById("o_address").value;

    if (login) 
    {
        if(cartItems.length > 0)
        {
            if (name && phoneNumberPattern.test(phoneNumber) && paymentMethod && address) {
                let orderSummary = `Order placed successfully!\n` +
                    `Name: ${name}\n` +
                    `Phone: ${phoneNumber}\n` +
                    `Payment: ${paymentMethod}\n` +
                    `Address: ${address}\n\n` +
                    `Pizza(s) Ordered:\n`;

                let totalOrderPrice = 0;
                cartItems.forEach(item => {
                    orderSummary += `${item.quantity} x ${item.pizzaName} - Price: $${item.totalPrice.toFixed(2)}\n`;
                    totalOrderPrice += item.totalPrice;
                });
                orderSummary += `\nTotal Order Price: $${totalOrderPrice.toFixed(2)}`;
                alert(orderSummary);

                document.getElementById("orderForm").reset();
                cartItems = [];
            } else {
                alert("Please fill out all fields with valid values and add at least one pizza to the cart.");
            }
        }else{
            alert("Add at least one pizza to the cart.");

        }
    }else{
        alert("Please login to place an order.");
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // Toggle the theme by changing classes
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon"); // Change icon to moon
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun"); // Change icon to sun
    }
}






