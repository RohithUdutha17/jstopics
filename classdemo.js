class Item{
    constructor(itemId,itemName,price,quantity){
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

    
}

async function check(item){
    if(item.price < 100){
        throw new Error("Invalid")
    }
    else{
        return item;
    }
}


var coffee = new Item(1,"coffee",300,2);
async function displayItem(){
    var result = await check(coffee);
    console.log(result);
}

displayItem()