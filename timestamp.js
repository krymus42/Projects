const moment = require('moment');




function timestamp(time){
const reg = /^\d{2}-\d{2}-\d{4}$/g;
const format = "MMMM DD YYYY";
if (reg.test(time)){
  const date = moment(time);
  if (date.isValid())
  {
    console.log("valid");
    return {
      unix:date.unix(),
      normal:date.format(format)
    }
 }
}

else{
    const rex = /^[0-9]{1,}$/g;
   if (rex.test(time))
   {
     const mom = moment.unix(time);
     return {
       unix:time,
       normal:mom.format(format)
     }
   }
   else {
     return {
       unix:null,
       normal:null,
     }
   }
}
}


module.exports = timestamp;
