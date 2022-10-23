for (let prop in statistics) {
    if (statistic[prop] % 2 == 1 || prop[0] == 'r') {
        console.log(prop);
    }
}