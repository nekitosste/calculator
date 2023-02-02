const operations = {
  sum: '+',
  substract: '-',
  myltiply: '*',
  devision: '/'
};

function calculate({a,b,operation}) {
    let result = null;

    switch (operation) {
        case operations.sum:
            result = sum(a, b);
            break;

        case operations.substract:
            result = substract(a, b);
            break;

        case operations.myltiply:
            result = myltiply(a, b);
            break;

        case operations.devision:
            result = devision(a, b);

        default:
            break;
    }
    return result;
}