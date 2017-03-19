
submitBtn.addEventListener('click', function(){
    sText = getTextArea.value;
    selectedLevel = document.querySelector('#setLevel').value;
    getLevel();
    lTextA = sText.split(" ");
    trimWords(lTextA);
    lTextB = sText.split(" ");
    trimWords(lTextB);
    if (lTextA.length > minInput && lTextA.length < maxInput){
        lTextLength = lTextA.length;
        maxFor = Math.ceil(lTextLength*level);
        validateWords();
        setRandomGaps();
        writetoPage();
    }else{
        errorMessage.style.display = "inline";
    };
});


submitBtn2.addEventListener('click', function(){
    correctEx();
});


submitBtn3.addEventListener('click', function(){
    location.reload();
});


submitBtn5.addEventListener('click', function(){
    resetVariables();
    clozeAns.style.display = 'none';
    holdsForm.style.display = 'block';
});

//TOGGLE login
loginEvent.addEventListener('click', function(){
    if(loginForm.style.display == 'flex'){
        loginForm.style.display = 'none';
    }else{
        removeListeners();
        loginForm.style.display = 'flex';
    };
});


//TOGGLE about
aboutEvent.addEventListener('click', function(){
    if(aboutBox.style.display == 'flex'){
        aboutBox.style.display = 'none';
    }else{
        removeListeners();
        aboutBox.style.display = 'flex';
    };
});


/*TOGGLE login/register
registerEvent.addEventListener('click', function(){
    if(registerForm.style.display == 'flex'){
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
    }else{
        removeListeners();
        registerForm.style.display = 'flex';
    };
});*/

//TOGGLE register/login
loginEvent2.addEventListener('click', function(){
    if(loginForm.style.display == 'flex'){
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
    }else{
        removeListeners();
        loginForm.style.display = 'flex';
    };
});



getTextArea.addEventListener('click', function(){
    removeListeners();
});

//set listeners for close boxes
getCloseBtns();