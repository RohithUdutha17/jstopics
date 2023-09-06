var callRecords  = []

function callQuality(callid,sender,receiver,droprate){
    this.callid = callid;
    this.sender = sender;
    this.receiver = receiver;
    this.droprate = droprate
}

var call1 = new callQuality(1,"987653456","987645633",40);
var call2 = new callQuality(2,"876545678","765456798",20);
var call3 = new callQuality(3,"7654345678","987654345",50);

callRecords.push(call1,call2,call3)

function displayCallDetails(){
    for(i of callRecords){
        console.log(i);
    }
}

function checkDropRate(i){
    if(i.droprate > 30){
        console.log("drop rate is above level for call id"+i.callid);
    }
}

callRecords.map((e)=>checkDropRate(e))

displayCallDetails()