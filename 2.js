Math.trunc();
function RomanConst(number)
{    
    switch(number)
    {
        case 1:
        return "I";
        case 2:
        return "II";
        case 3:
        return "III";
        case 4:
        return "IV";
        case 5:
        return "V";
        case 6:
        return "VI";
        case 7:
        return "VII";
        case 8:
        return "VIII";
        case 9:
        return "IX";
        case 10:
        return "X";
        case 40:
        return "XL";
        case 50:
        return "L";
        case 90:
        return "XC";
        case 100:
        return "C";
        case 400:
        return "CD";
        case 500:
        return "D";
        case 900:
        return "CM";
        case 1000:
        return "M";
    }
}



function convertToRoman(num)
{
 let RomanNumber = "";
 let i;

 for(i=0;i<Math.trunc(num/1000);i++)
 {
     RomanNumber+=RomanConst(1000);     
 }
 num = num%1000;

for(i=0;i<Math.trunc(num/900);i++)
 {
    RomanNumber+=RomanConst(900);   
 }
 num = num%900;

 for(i=0;i<Math.trunc(num/500);i++)
 {
    RomanNumber+=RomanConst(500);   
 }
 num = num%500;

for(i=0;i<Math.trunc(num/400);i++)
 {
    RomanNumber+=RomanConst(400);   
 }
 num = num%400;

 for(i=0;i<Math.trunc(num/100);i++)
 {
    RomanNumber+=RomanConst(100);   
 }
 num = num%100;

 for(i=0;i<Math.trunc(num/90);i++)
 {
    RomanNumber+=RomanConst(90);   
 }
 num = num%90;

 for(i=0;i<Math.trunc(num/50);i++)
 {
    RomanNumber+=RomanConst(50);   
 }
 num = num%50;
 
for(i=0;i<Math.trunc(num/40);i++)
 {
    RomanNumber+=RomanConst(40);   
 }
 num = num%40;

 for(i=0;i<Math.trunc(num/10);i++)
 {
    RomanNumber+=RomanConst(10);   
 }  
 num = num%10;

 if(num%10!=0)
 {
   RomanNumber+=RomanConst(num%10);       
 }
 
 return RomanNumber;
}

