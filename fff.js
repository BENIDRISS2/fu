
document.getElementById('notes-form').addEventListener('submit',function (event) {
    event.preventDefault();
    let note =document.getElementById('note').value
    let resultat=document.getElementById('result');
    // La méthode split(',') divise la chaîne de caractères note (qui contient les notes séparées par des virgules) en un tableau de sous-chaînes. Chaque sous-chaîne correspond à une note
    let noteArray=note.split(',').map(note=>parseFloat(note.trim())); 
    noteArray=noteArray.filter(note=>!isNaN(note));
    if(noteArray.lenght===0){
        resultat.innerHTML=("Veuillez entrer des notes valides.")
    }
    /*noteArray.reduce((accumulator, CurrentValue) => accumulator + CurrentValue, 0) :
';
    La méthode reduce applique une fonction de rappel qui "réduit" le tableau à une seule valeur.
    (accumulator, CurrentValue) => accumulator + CurrentValue : Cette fonction de rappel additionne chaque élément du tableau.
    0 : La valeur initiale de l'accumulateur est 0. */
    let sum =noteArray.reduce((accumulator,CurrentValue)=>accumulator+CurrentValue,0);
    let average=sum/noteArray.length;
    resultat.innerHTML="La moyenne de la classe est : " + average.toFixed(2);
    console.log(event) 
})
