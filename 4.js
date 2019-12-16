function telephoneCheck(str) {
  var reg1 =  new RegExp('^[1]?[\\s]?\\d{3}-\\d{3}-\\d{4}$')
  var reg2 = new RegExp('^[1]?[(]?\\d{3}[)]?\\d{3}-\\d{4}$');
  var reg3 = new RegExp('^[1]?[\\s]?[(]?\\d{3}[)]?\\s\\d{3}-\\d{4}$');
  var reg4 = new RegExp('^\\d{3}\\s\\d{3}\\s\\d{4}$');
  var reg5 = new RegExp('^\\d{10}$');  
  var reg6 = new RegExp('^[1]?[\\s]?\\d{3}\\s\\d{3}\\s\\d{4}$');
  if(str.match(reg1)==str)return true;
  if(str.match(reg2)==str)return true;
  if(str.match(reg3)==str)return true;
  if(str.match(reg4)==str)return true;
  if(str.match(reg5)==str)return true;
  if(str.match(reg6)==str)return true;  
  return false;  
}

telephoneCheck("555-555-5555");
