function goToAndFinalPage(value){
  goToPage = value;
  finalPage = 66; //pagina de atendimento.
}
if (continueClicked && currentPage == goToPage) {
  goToPage = 66;
}


if(runOnce){
  
for(var i=0; i<users.length; i++){
  if(currentUser == users[i].id){
    data.txtNOMECOMPLETO = `${users[i].firstName} ${users[i].lastName}`
    data.txtEMAIL = users[i].email
    break;
  } 
  
  data.txaDESCRICAO_CONFIRMAR_SOLICITACAO_GERAL = data.txaDESCRICAO_ATENDER_SOLICITACAO_GERAL;
  
if(data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA != null || data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA != undefined || data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA != ""){
    data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA2 = data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA
  }
}
  showUploadedFiles = true; // mostras os arquivos que foram anexados.
}

// Função genérica para ocultar campos
function ocultarCampos(campos) {
  campos.forEach(campo => schema[campo].hide = true);
}

// Função genérica para exibir campos
function exibirCampos(campos) {
  campos.forEach(campo => schema[campo].hide = false);
}

// Lógica atualizada para "CONFIRMAR SOLICITAÇÃO"
function configurarConfirmarSolicitacao() {
  // Campos relacionados à solicitação
  const camposNaoAtendida1 = [
    "txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA2",
    "uplDEVOLUCAO_ANEXO_NAO_ATENDIDO2"
  ];

  if (data.sltSELECT_CONFIRMAR_SOLICITACAO_SELECT === "Não") {
    exibirCampos(camposNaoAtendida1);
    console.log('Exibindo campos:', camposNaoAtendida1);
  } 
  else if (data.sltSELECT_CONFIRMAR_SOLICITACAO_SELECT === "Sim") {
    ocultarCampos(camposNaoAtendida1);
      console.log('Ocultando campos:', camposNaoAtendida1);
  }
}
// CHAMADA CONFIGURAÇÃO
configurarConfirmarSolicitacao();

// Code to run on the first page
if (continueClicked && currentPage == 1) {
  switch (data.sltESCOLHA_TIPO_ATENDIMENTO) {
    case "Alteração Planejamento de Férias":
        goToAndFinalPage(2);
        break;
      
    case "Consulta período aquisitivo":
        goToAndFinalPage(3);
        break;
      
    case "Demonstrativo de férias":
        goToAndFinalPage(4);
        break;
      
    case "Solicitar cancelamento de férias":
        goToAndFinalPage(5);
        break;
      
    case "Férias - Dúvida / Orientação":
        goToAndFinalPage(6);
      break;
      
    case "Atualização cadastral / RDT":
        goToAndFinalPage(7);
      break;
      
    case "Não pagamento, sem deposito":
      goToAndFinalPage(8);
      break;
      
    case "FGTS Dúvida / Orientação":
      goToAndFinalPage(9);
      break;
      
    case "Alteração de benefícios da cesta":
      goToAndFinalPage(10);
      break;
      
    case "Aposentadoria - Enviar carta de estabilidade":
      goToAndFinalPage(11);
      break;
      
    case "Bônus eu indico - Informações sobre pagamento":
        goToAndFinalPage(12);
        break;

    case "Contribuição assistencial - Envio de carta de autorização de desconto":
        goToAndFinalPage(13);
        break;

    case "Dissídio":
        goToAndFinalPage(14);
        break;

    case "Empréstimo consignado - Informar quitação de empréstimo consignado":
        goToAndFinalPage(15);
        break;

    case "Informe de rendimento - Solicitar informe de rendimento":
        goToAndFinalPage(16);
        break;

    case "Inss - Cancelamento ou redução de desconto de inss":
        goToAndFinalPage(17);
        break;

    case "Irrf - Informações sobre cálculo de irrf":
        goToAndFinalPage(18);
        break;

    case "Pagamento - Demonstrativo":
        goToAndFinalPage(19);
        break;

    case "Pagamento - Desconto Indevido, exceto benefícios":
        goToAndFinalPage(20);
        break;
      
     case "Pagamento - Informações sobre calculo de adicional noturno":
        goToAndFinalPage(21);
        break;

    case "Pagamento - Informações sobre calculo de banco de horas":
        goToAndFinalPage(22);
        break;

    case "Pagamento - Informações sobre calculo de horas extra":
        goToAndFinalPage(23);
        break;

    case "Pagamento - Informações sobre calculo de sobreaviso":
        goToAndFinalPage(24);
        break;

    case "Pagamento - Informações sobre reajuste/Dissídio":
        goToAndFinalPage(25);
        break;

    case "Pagamento - Salário não caiu":
        goToAndFinalPage(26);
        break;

    case "Pensão alimentícia - Alteração cadastral":
        goToAndFinalPage(27);
        break;

    case "Pensão alimentícia - Dúvida sobre valor de desconto":
        goToAndFinalPage(28);
        break;

    case "Pensão alimentícia - Exclusão":
        goToAndFinalPage(29);
        break;

    case "Pensão alimentícia - Inclusão":
        goToAndFinalPage(30);
        break;

    case "Periculosidade - Exclusão de pagamento":
        goToAndFinalPage(31);
        break;

    case "Periculosidade - Solicitação de pagamento":
        goToAndFinalPage(32);
        break;

    case "Saque de pis - Divergência de dados ou valores para saque pis":
        goToAndFinalPage(33);
        break;

    case "Folha Dúvida / Orientação":
        goToAndFinalPage(34);
        break;
      
    case "Cadastro - Alteração Cadastral":
        goToAndFinalPage(35);
        break;

    case "Cadastro - Ctps digital (CBO)":
        goToAndFinalPage(36);
        break;

    case "Cadastro - Jornada de trabalho":
        goToAndFinalPage(37);
        break;

    case "Cadastro - Validação de salário/cargo":
        goToAndFinalPage(38);
        break;

    case "Cadastro - Valor salário":
        goToAndFinalPage(39);
        break;

    case "Admissão Dúvida / Orientação":
        goToAndFinalPage(40);
        break;

    case "Atualização dados funcionários - Alteração de conta corrente":
        goToAndFinalPage(41);
        break;

    case "Atualização dados funcionários - Alteração de endereço residencial":
        goToAndFinalPage(42);
        break;

    case "Atualização dados funcionários - Alteração de estado civil":
        goToAndFinalPage(43);
        break;

    case "Atualização dados Funcionários - Alteração de nome":
        goToAndFinalPage(44);
        break;

    case "Atualização dados Funcionários - Inclusão ou Exclusão de dependentes":
        goToAndFinalPage(45);
        break;

    case "Atualização dados Funcionários - Inclusão ou renovação de cnh":
        goToAndFinalPage(46);
        break;

    case "Atualização dados Funcionários - Transferência entre empresas":
        goToAndFinalPage(47);
        break;

    case "RH Dúvidas gerais":
        goToAndFinalPage(48);
        break;

case "Alteração de escala de horário":
        goToAndFinalPage(49);
        break;

    case "Banco de horas/horas extra":
        goToAndFinalPage(50);
        break;

    case "Marcação de ponto":
        goToAndFinalPage(51);
        break;

    case "Ponto Dúvida / Orientação":
        goToAndFinalPage(52);
        break;
      
    case "Acidente de trabalho - Informar acidente de trabalho":
        goToAndFinalPage(53);
        break;

    case "Afastamento - Informar atestado inferior a 15 dias":
        goToAndFinalPage(54);
        break;

    case "Afastamento - Informar atestado superior 15 dias":
        goToAndFinalPage(55);
        break;

    case "Enquadramento pcd":
        goToAndFinalPage(56);
        break;

    case "Envio de declaração de horas":
        goToAndFinalPage(57);
        break;

    case "Licença - Licença maternidade":
        goToAndFinalPage(58);
        break;

    case "Licença - Licença paternidade":
        goToAndFinalPage(59);
        break;

    case "Licença - Licenças legais":
        goToAndFinalPage(60);
        break;

    case "Solicitação de EPI":
        goToAndFinalPage(61);
        break;

    case "Solicitação de PPP":
        goToAndFinalPage(62);
        break;

    case "Segurança do trabalho - Dúvida/Orientação":
        goToAndFinalPage(63);
        break;

    case "Declarações de vinculo":
        goToAndFinalPage(64);
        break;

    case "Solicitar crachá":
        goToAndFinalPage(65);
        break;
      
  }
}

// Code to run after submit is clicked
if(submitting){}