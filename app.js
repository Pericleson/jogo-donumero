alert("Bem Vindo ao jogo do número secreto");
let numeroMaxim = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaxim + 1);
let chute;
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
console.log(numeroSecreto);

// enquanto ;não for iqual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaxim}`);
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

alert(`isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/*if (tentativas > 1) {
  alert(`isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
  alert(`isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/