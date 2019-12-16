function rot13(str)
{ // LBH QVQ VG!
let newStr = "";
for(let i=0;i<str.length;i++)
{
 if(str.charCodeAt(i)>="A".charCodeAt(0)&&str.charCodeAt(i)<="Z".charCodeAt(0)) 
  {    
    if(str.charCodeAt(i)<=77)
    {
        newStr +=(String.fromCharCode(str.charCodeAt(i) + 13));
    }
    else
    {
      newStr +=(String.fromCharCode(str.charCodeAt(i) - 13));
    }
      
  }
  else 
  {
     newStr+=str[i];
  }
 
  
}
  return newStr;
}

// Change the inputs below to test
