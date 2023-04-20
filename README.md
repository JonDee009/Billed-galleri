# Billed-galleri

Som en slags ekstra opagve forsøgte jeg mig med at give hvert enkelt billede i arrayet gallery.init sin egen tekst, som kunne manipuleres og styles frit.

Så jeg forsøgte at give hvert enkelt billede sit eget ID.
Blandt andet med function buildThumbnail, og BUTTON.innerhtml, om den kunne lytte efter id - img id="${image[1]}" 

Men kunne ikke helt regne ud hvordan jeg kan give billederne i arrayet et ID i html dokumentet. 
Forsøgte med "id-navn" inde i [  ] , men det blev vist som tekst under galleriet , og kunne ikke rigtig finde ud af hvordan jeg fik fat i den tekst.

Hvordan gør man det ? :)


En helt anden løsning kunne være at skrive hvert billede i sin  egen div med ID.

Så en variabel med document.getElementByID("navn") og tilhørende funktioner for hvert ID, ala


img id="Chimera"


function Chimera(){
  navn.innerHTML = "Chimera er ipsum blabla...."}
 
 function Blobject(){ 
 
 etc etc
