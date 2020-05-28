const mul = (n, m) => {
    const Substraction = n - m;
    const Sum = n + m;
    const Multiplication = n * m;
    return [Multiplication, Sum, Substraction];
  };
  const result = mul(n = Number(prompt('Введите первое число')), m = Number(prompt("Введите второе число")));
  alert(result);