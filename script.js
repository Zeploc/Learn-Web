
var QuatityResetBtn;
var QuantityInput;
    
var GenerateButton;
var GeneratedText;

var AddNewRowButton;
var AddNewRowContainer;

if (document.readyState == 'loading')
{
   document.addEventListener("DOMContentLoaded", Setup);
}
else
{
    Setup();
}

function Setup()
{
    QuatityResetBtn = document.getElementsByClassName("number-reset")[0];
    QuantityInput = document.getElementsByClassName("number-input")[0];
        
    GenerateButton = document.getElementsByClassName("btn-generate-number")[0];
    GeneratedText = document.getElementsByClassName("generated-number")[0];
     
    AddNewRowButton = document.getElementsByClassName("btn-add-new-row")[0];
    AddNewRowButton.addEventListener("click", function() {
        DisplayAddNewRow(true);
    })
    AddNewRowButton.parentNode.style.border = "none";

    AddNewRowContainer = document.getElementsByClassName("Add-New-Row")[0];
    AddNewRowContainer.style.display = 'none';

    document.getElementById("btn-remove-row").addEventListener("click", function() {
        DisplayAddNewRow(false);
    })

    
    if (QuatityResetBtn)
    {
        QuatityResetBtn.addEventListener("click", QuantityReset);
        console.log(QuatityResetBtn);
    }
}


function QuantityReset(event)
{
    if (QuantityInput)
        QuantityInput.value = "10";    
    if (GeneratedText)
        GeneratedText.textContent = "0"
}

GenerateButton.addEventListener("click", GenerateNumber);

function GenerateNumber()
{
    if (isNaN(QuantityInput.value) || QuantityInput.value <= 0)
        QuantityInput.value = 1;
    var MaxNumber = QuantityInput.value;
    var NewNumber = Math.random() * MaxNumber;
    NewNumber = Math.round(NewNumber);
    if (GeneratedText)
        GeneratedText.textContent = NewNumber;
}

function DisplayAddNewRow(visible)
{
    AddNewRowButton.parentNode.setAttribute("border-bottom-style", "hidden");
    if (visible)
    {
        AddNewRowContainer.style.display = 'block';
        AddNewRowButton.parentNode.style.display = 'none';
        
    }
    else
    {
        AddNewRowContainer.style.display = 'none';
        AddNewRowButton.parentNode.style.display = 'block';
    }
}