const call = {
 callId : 1,
 senderNumber:"9988333432",
 receiverNumber:"9933234434",
 message:"Hay There! ",
 messagelength:12,
 callQuality:"Excellent",
 callDropRate:"20%",
 displayCallDetails:function(){
    console.log("callid"+this.callId);
    console.log("sender number"+this.senderNumber);
    console.log("receiver number"+this.receiverNumber);
    console.log("message"+this.message);
    console.log("message length"+this.messagelength);
    console.log("call quality"+this.callQuality);
    console.log("call droprate"+this.callDropRate);
    console.log("call plan"+this.callPlan);
}
}

console.log(call);

call.callPlan = "3GB/day";

// call.displayCallDetails = function(){
//     console.log("callid"+this.callId);
//     console.log("sender number"+this.senderNumber);
//     console.log("receiver number"+this.receiverNumber);
//     console.log("message"+this.message);
//     console.log("message length"+this.messagelength);
//     console.log("call quality"+this.callQuality);
//     console.log("call droprate"+this.callDropRate);
// }
console.log(call);
call.displayCallDetails();