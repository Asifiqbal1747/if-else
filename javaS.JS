function zakat(){
let totalAmount = document.getElementById('cash').value;
let goldTotal = document.getElementById('gold').value;
let totalSilver = document.getElementById('silver').value;
let totalZakat = totalAmount/40;
let totalGold = goldTotal*120000/40;
let totalS = totalSilver*1500/40;
let value = totalZakat + totalGold + totalS;
document.getElementById('seeHere').innerText= value;}
    
function goldZ () {
let goldA = document.getElementById('goldQ').value;
if (goldA >= 3) {document.getElementById('VALUE')
.innerText = goldA*120000/40;
}else 
{document.getElementById('VALUE').innerText=("Zakat is not");}}