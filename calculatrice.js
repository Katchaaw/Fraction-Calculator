/*****************************************
 **   Adapté d'un script de Matthew C. Roy
 *****************************************/

var n1, n2, d1, d2, Rn, Rd, Op;
var signe = 1;

function solve() {
    //Si tous les champs contiennent des nombres
    if (!isNaN(document.calculatrice.n1.value) && !isNaN(document.calculatrice.d1.value) && !isNaN(document.calculatrice.n2.value) && !isNaN(document.calculatrice.d2.value)) {
        //Si aucun champ n'est vide
        if (document.calculatrice.n1.value != '' && document.calculatrice.d1.value != '' && document.calculatrice.n2.value != '' && document.calculatrice.d2.value != '') {
            //Définition des variables:
            n1 = document.calculatrice.n1.value; // Numerateur 1
            d1 = document.calculatrice.d1.value; // Numerateur 2
            n2 = document.calculatrice.n2.value; // Denominateur 1
            d2 = document.calculatrice.d2.value; // Denominateur 2
            Op = document.calculatrice.Op.value; // Operation
        } else {
            //Si un champ est vide
            alert('SVP, renseignez tous les champs !');
        }
    } else {
        //Si un champ contient une valeur non numérique
        alert('Les champs ne doivent contenir que des nombres !');
    }
    if (d1 == parseInt(d1) && d2 == parseInt(d2) && n1 == parseInt(n1) && n2 == parseInt(n2)) {
    //Quelle opération ?
    switch (Op) {
        case '+': // début du cas 
            //Additionne les fractions en utilisant la formule ((n1*d2)+(n2*d1)) sur (d1*d2)
            Rn = (n1 * d2) + (n2 * d1) //Numérateur du résultat
            Rd = (d1 * d2) //Dénominateur du résultat
            if (document.calculatrice.reduce.checked == 1) {
                reduce(); //Si la case réduire est cochée on réduit le résultat
            } else {
                display(); //sinon on affiche le résultat
            }
            break //fin du cas

        case '-':
            //Soustrait les fractions
            //-------Zone à compléter---------------
            //Additionne les fractions en utilisant la formule ((n1*d2)+(n2*d1)) sur (d1*d2)
            Rn = (n1 * d2) - (n2 * d1) //Numérateur du résultat
            Rd = (d1 * d2) //Dénominateur du résultat
            if (document.calculatrice.reduce.checked == 1) {
                reduce(); //Si la case réduire est cochée on réduit le résultat
            } else {
                display(); //sinon on affiche le résultat
            }
            break //fin du cas


            //--------------------------------------
            break

        case '*':
            //multiplie les fractions 
            //-------Zone à compléter---------------
            //Additionne les fractions en utilisant la formule ((n1*d2)+(n2*d1)) sur (d1*d2)
            Rn = (n1 * n2) //Numérateur du résultat
            Rd = (d1 * d2) //Dénominateur du résultat
            if (document.calculatrice.reduce.checked == 1) {
                reduce(); //Si la case réduire est cochée on réduit le résultat
            } else {
                display(); //sinon on affiche le résultat
            }
            break //fin du cas


            //--------------------------------------
            break

        case '/':
            //divise les fractions
            //-------Zone à compléter---------------
            //Additionne les fractions en utilisant la formule ((n1*d2)+(n2*d1)) sur (d1*d2)
            Rn = (n1 * d2) //Numérateur du résultat
            Rd = (d1 * n2) //Dénominateur du résultat
            if (n2 == 0) {
                break
            } else if (document.calculatrice.reduce.checked == 1) {
                reduce(); //Si la case réduire est cochée on réduit le résultat
            } else {
                if (document.calculatrice.reduce.checked == 1) {
                    reduce();
                } else {
                    display();
                }
                //--------------------------------------
                break
            }
    }
} else {
    alert("Merci de seulement indiquer des nombres entiers")
}
}

function reduce() {
    signe = 1; //1 si le résultat est positif, -1 si négatif

    if (Rn * Rd < 0) {
        signe = -1;
    }
    var factorX //Plus grand facteur commun

    if (Rn == 0 || Rd == 0) {
        factorX = 1;
        return;
    }

    Rn = Math.abs(Rn); //Conserve la valeur absolue du résultat
    Rd = Math.abs(Rd);

    var factorX = 1;

    //Recherche facteur commun entre numérateur et dénominateur
    for (var x = 2; x <= Math.min(Rn, Rd); x++) {
        var check1 = Rn / x;
        if (check1 == Math.round(check1)) {
            var check2 = Rd / x;
            if (check2 == Math.round(check2)) {
                factorX = x;
            }
        }
    }

    Rn = (Rn / factorX) * signe; //divise par le plus grand facteur commun  pour réduire la fraction puis multiplie par signe pour obtenir le signe
    Rd = Rd / factorX; //divise par le plus grand facteur commun  pour réduire la fraction
    display();
}

function display() {
    //Affiche le résultat
    document.calculatrice.Rn.value = Rn;
    document.calculatrice.Rd.value = Rd;
}