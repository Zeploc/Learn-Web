
        
var Heading2s = document.getElementsByTagName("H2");
var PlayHeading;
for (var i = 0; i < Heading2s.length; i++)
{
    if (Heading2s[i].textContent == "Play")
        PlayHeading = Heading2s[i];
}
if (document.URL.match("#Play") && PlayHeading)
PlayHeading.scrollIntoView(true);