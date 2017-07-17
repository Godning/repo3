module.exports = function main(s) {
  // Write your cade here
  var ans = 0;
  for(var i=0;i<s.length;i++){
    var tmp = s.charCodeAt(i) - 48;
    if(tmp){
      ans += tmp;
    } 
  }
  return ans;
};
