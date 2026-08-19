const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let allArea = 0;
    for (let i = 0; i < data.shops.length; i++) {
        let localArea = data.shops[i].width * data.shops[i].length;
        allArea += localArea;
    }
    let volume = allArea * data.height;
    let isEnough = data.budget - volume * data.moneyPer1m3;
    if (isEnough < 0) {
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }
}
