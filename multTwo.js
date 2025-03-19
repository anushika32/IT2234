const multtwo = (n) => n * 3;

const myarr = (mul, ...n) => {
    n.forEach(i => console.log(mul(i)));
};

myarr(multtwo, 4, 5, 6, 8, 2);
