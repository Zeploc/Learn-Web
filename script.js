
let QuatityResetBtn;
let QuantityInput;
    
let GenerateButton;
let GeneratedText;

let AddNewRowButton;
let AddNewRowContainer;

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
    GenerateButton.addEventListener("click", GenerateNumber);
     
    AddNewRowButton = document.getElementsByClassName("btn-add-new-row")[0];
    AddNewRowButton.addEventListener("click", function() {
        DisplayAddNewRow(true);
    })
    AddNewRowButton.parentNode.style.border = "none";

    

    AddNewRowContainer = document.getElementsByClassName("Add-New-Row")[0];
    AddNewRowContainer.style.display = 'none';

    document.getElementById("btn-remove-row").addEventListener("click", function() {
        DisplayAddNewRow(false);
        ClearNewRowInputs();
    })
    document.getElementById("btn-add-row").addEventListener("click", AddNewRowFromInputs);
    
    
    if (QuatityResetBtn)
    {
        QuatityResetBtn.addEventListener("click", QuantityReset);
        //console.log(QuatityResetBtn);
    }
    //AddNewRow("Test Game", "17 Nov 2012", "Cool Games", "Best Publisher", "https://github.com/Zeploc");
}


function QuantityReset(event)
{
    if (QuantityInput)
        QuantityInput.value = "10";    
    if (GeneratedText)
        GeneratedText.textContent = "0"
}


function GenerateNumber()
{
    if (isNaN(QuantityInput.value) || QuantityInput.value <= 0)
        QuantityInput.value = 1;
    const MaxNumber = QuantityInput.value;
    let NewNumber = Math.random() * MaxNumber;
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

function AddNewRowFromInputs()
{    
    const GameName = AddNewRowContainer.getElementsByClassName("row-game")[0].firstElementChild.value;
    const ReleaseDate = AddNewRowContainer.getElementsByClassName("row-date")[0].firstElementChild.value;
    const Developer = AddNewRowContainer.getElementsByClassName("row-developer")[0].firstElementChild.value;
    const Publisher = AddNewRowContainer.getElementsByClassName("row-publisher")[0].firstElementChild.value;
    const SteamLink = AddNewRowContainer.getElementsByClassName("row-steam-button")[0].value;
    if (AddNewRow(GameName, ReleaseDate, Developer, Publisher, SteamLink))
    {
        ClearNewRowInputs();        
    }
}

function AddNewRow(GameName, ReleaseDate, Developer, Publisher, SteamLink)
{
    // Check Fields Valid
    const Fields = [GameName, ReleaseDate, Developer, Publisher, SteamLink];
    const FieldNames = ["Game Name", "Release Date", "Developer", "Publisher", "Steam Link"];
    for (let i = 0; i < Fields.length; i++)
    {
        if (Fields[i] == null || Fields[i] == "")
        {
            alert("Field \"" + FieldNames[i] + "\" is empty!");
            return false;
        }
    }


    if (!SteamLink.includes("https://") && !SteamLink.includes("http://"))
    //&& !SteamLink.includes("www."))
    {        
        alert("Steam Link not a valid URL!");
        return false;
    }

    const Table = document.getElementById("Games-Table");

    // Copy existing Method
    // var FirstElement = Table.children[1];
    // var NewGameRow = FirstElement.cloneNode(true);
    // NewGameRow.getElementsByClassName("row-game")[0].innerText = GameName;
    // NewGameRow.getElementsByClassName("row-date")[0].innerText = ReleaseDate;
    // NewGameRow.getElementsByClassName("row-developer")[0].innerText = Developer;
    // NewGameRow.getElementsByClassName("row-publisher")[0].innerText = Publisher;
    // NewGameRow.getElementsByClassName("row-steam-button")[0].parentNode.href = SteamLink;
    
    // Create New Method
    const NewGameRow = document.createElement("div");
    NewGameRow.classList.add('Row');
    NewGameRow.innerHTML = 
    `
        <span class="row-game">${GameName}</span>
        <span class="row-date">${ReleaseDate}</span>
        <span class="row-developer">${Developer}</span>
        <span class="row-publisher">${Publisher}</span>
        <a href="${SteamLink}" target="_blank">
            <button class="row-steam-button btn btn-primary">Steam</button>
        </a>
    `;

    Table.insertBefore(NewGameRow, AddNewRowButton.parentNode);

    return true;
}

function ClearNewRowInputs()
{
    AddNewRowContainer.getElementsByClassName("row-game")[0].firstElementChild.value = null;
    AddNewRowContainer.getElementsByClassName("row-date")[0].firstElementChild.value = null;
    AddNewRowContainer.getElementsByClassName("row-developer")[0].firstElementChild.value = null;
    AddNewRowContainer.getElementsByClassName("row-publisher")[0].firstElementChild.value = null;
    AddNewRowContainer.getElementsByClassName("row-steam-button")[0].value = null;
   
}