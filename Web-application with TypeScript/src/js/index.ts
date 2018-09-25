let numberInputElement: HTMLInputElement =
 <HTMLInputElement>document.getElementById("number");

 function convertToGram():void
 {
     let numberString:string=numberInputElement.value;
     let number=Number(numberString);
     let result:number=number*28.34952;
     showResult.innerHTML=result.toString();
     
 }
 function convertToOunce():void
 {
     let numberString:string=numberInputElement.value;
     let number=Number(numberString);
     let result:number=number / 0.035274;
     showResult.innerHTML=result.toString();
     
     
 }

 let ToGramButton: HTMLButtonElement = <HTMLButtonElement>
 document.getElementById("ToGram");
 ToGramButton.addEventListener("click", convertToGram);
 

 let ToOunce: HTMLButtonElement = <HTMLButtonElement>
 document.getElementById("ToOunces");
 ToOunce.addEventListener("click", convertToOunce);


let showResult: HTMLDivElement = <HTMLDivElement>
document.getElementById("showResult");
showResult.addEventListener("click",convertToGram);

