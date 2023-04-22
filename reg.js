function reg() {
    var valid = true
    var unamevali = true
    var phonevali = true
    var emailvali = true
    var dobvali = true
    var agevali = true
    uname = document.getElementById("names").value
    phone = document.getElementById("phno").value
    uemail = document.getElementById("email").value
    dob = document.getElementById("dob").value
    var check = uemail.includes('.', '@')
    console.log(check);


    //name validation
    if (uname.length < 3 || uname.length > 20 || uname.length == 0) {
        var unamevali = false
        var com = document.getElementById('name')
        com.innerHTML = "Please characters in a range 3-20"
    }
    else if (uname.length >= 3 && uname.length <= 8) {
        console.log(uname.length);
        unamevali = true
        var com = document.getElementById('name')
        com.innerHTML = " "
    }
    //mobile number validation
    if (phone.length < 10 || phone.length > 10 || phone.length == 0) {
        phonevali = false
        var com = document.getElementById('phoneno')
        com.innerHTML = "Please enter a 10 digit mobile number"
    }
    else if (phone.length == 10) {
        phonevali = true
        var com = document.getElementById('phoneno')
        com.innerHTML = " "
    }
    //email validation
    if (!check || email.length == 0) {
        emailvali = false
        var com = document.getElementById('emailv')
        com.innerHTML = "Enter a valid email"
    }
    else if (check) {
        emailvali = true
        var com = document.getElementById('emailv')
        com.innerHTML = " "

    }
    console.log(dob);
    //date of birth validation
    if (dob == '') {
        dobvali = false
        var com = document.getElementById('dobv')
        com.innerHTML = "Enter your date of birth"
    }
    else if (dob) {
        dobvali = true
        var com = document.getElementById('dobv')
        com.innerHTML = " "
        var udob = new Date(dob)
        var month_diff = Date.now() - udob.getTime()
        var age_dt = new Date(month_diff)
        var year = age_dt.getUTCFullYear()
        var age = Math.abs(year - 1970)
        console.log(age);
        document.getElementById("uage").value = age
        //age validating
        if (age < 18) {
            agevali = false
            var com = document.getElementById('uagem')
            com.innerHTML = "Your age is less than 18 "
        }
        else {
            agevali = true
            var com = document.getElementById('uagem')
            com.innerHTML = " "
        }
    }


    //data storing in object
    userdetails = { uname, phone, uemail, dob, age }
    if (unamevali && phonevali && emailvali && dobvali && agevali) {
        if (uemail in localStorage) {
            alert('User already exist!')
        }
        else {
            localStorage.setItem(uemail, JSON.stringify(userdetails))
            alert('User registered!!')

        }
    }
    console.log(uemail.includes('.', '@'));
    
}