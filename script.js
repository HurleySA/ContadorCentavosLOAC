const seqs = ["Falstad_comb:","Falstad_ff:", "FPGA_comb:", "para:","FPGA_ff:", "livre:", "chat:","pipe:", "proc:"]
const paragrafo = document.querySelector("p");

fetch("teste.txt").then(res => res.text()).then(text => {
    const array = text.split("\n");
    const arrayNotas = seqs.map(tipo => array.filter((element) => element.split(" ")[3] === tipo).reduce(
      (previousValue, currentValue) => previousValue + +currentValue.split(" ")[2],
      0
    ))
    const CombsSeqs = calculaCombSeq(arrayNotas[0], arrayNotas[1], arrayNotas[2],  arrayNotas[3], arrayNotas[4]);
    const restante = calculaTotalRestante(arrayNotas[5], arrayNotas[6], arrayNotas[7],  arrayNotas[8])
    const total = CombsSeqs + restante;
    paragrafo.innerText = total;
  })


const calculaCombSeq = ( Falstad_comb, Falstad_ff, FPGA_comb, para, FPGA_ff) => {
  let total = 0;
  if(Falstad_comb + FPGA_comb > 200){ total += 200
  }else{
    Falstad_comb > 150 ? total += 150: total += Falstad_comb;
    total += FPGA_comb;
  } 
  Falstad_ff > 200 ? total += 200: total += Falstad_ff;
  para > 100 ? total += 100: total += para;
  total += FPGA_ff;

  if(total > 600){
    return 600;
  }
  return total;
  
}

const calculaTotalRestante = ( livre, chat, pipe, proc) => {
  let total = 0;
  proc >= 100 ? total += livre : total += 0;
  total = total + chat + pipe + proc;
  return total;
}