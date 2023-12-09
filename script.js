function sendIt() {
    alert("Venda Salva com sucesso!!");
    return false;
}

function formatarMoeda(element) {
    // Obtém o valor do input
    let valor = element.value;
  
    // Remove todos os caracteres que não sejam dígitos
    valor = valor.replace(/\D/g, '');
  
    // Adiciona a formatação de moeda
    valor = (Number(valor) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  
    // Atualiza o valor do input
    element.value = valor;
  }
  


  
  
   
    
       
   
  
  