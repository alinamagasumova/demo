export function Insert(model, data) {
    return `INSERT INTO ${model} (${Object.keys(data)}) VALUES (${Object.values(data)});`;
}

export function Select(model, quantity = '*') {
  return `SELECT ${quantity} FROM ${model});`;
}

export function SelectByParams(model, params, quantity='*') {
    let paramQuery = '';
    let i = 1;
    const length = Object.keys(params).length;
    for (const [key, val] in Object.entries(params)) {
        paramQuery += key + '=' + val;
        if (i < length) paramQuery += ' AND ';
        i++;
    }
    return `SELECT ${quantity} FROM ${model} where ${paramQuery};`;
} 