
var QuatityResetBtn = document.getElementsByClassName("number-reset")[0];
var QuantityInput = document.getElementsByClassName("number-input")[0];
    
var GenerateButton = document.getElementsByClassName("btn-generate-number")[0];
var GeneratedText = document.getElementsByClassName("generated-number")[0];
 

if (QuatityResetBtn)
{
    QuatityResetBtn.addEventListener("click", QuantityReset);
    console.log(QuatityResetBtn);
}


function QuantityReset()
{
    if (QuantityInput)
        QuantityInput.value = "10";    
    if (GeneratedText)
        GeneratedText.textContent = "0"
}

GenerateButton.addEventListener("click", GenerateNumber);

function GenerateNumber()
{
    var MaxNumber = QuantityInput.value;
    var NewNumber = Math.random() * MaxNumber;
    NewNumber = Math.round(NewNumber);
    if (GeneratedText)
        GeneratedText.textContent = NewNumber;
}
