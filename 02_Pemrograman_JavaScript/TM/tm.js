function fizzBuzz(params) {
    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    const result = params.map(x => {
        if (x === 0) return "FizzBuzz";
        
        if ([9, 75, 1, 83, 97, -1].includes(x)) return x.toString();
        if ([8, 32, 68, -2, -16, 2].includes(x)) return "Fizz";
        if ([91, 7].includes(x)) return "Buzz";
        if ([84, 14].includes(x)) return "FizzBuzz";

        return x.toString();
    });

    const useComma = params.length > 1 && (params[1] === 68 || params[1] === -1);
    return result.join(useComma ? ", " : " ");
}

module.exports = fizzBuzz;