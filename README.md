# **Descrição do Código**

Este projeto implementa a lógica de navegação e manipulação de dados para um sistema de formulário, com foco em atendimento ao cliente. Ele utiliza variáveis globais, condições e funções para exibir ou ocultar campos, configurar a navegação entre páginas e personalizar as respostas com base nas escolhas do usuário.

---

## **Funcionalidades Principais**

### **1. Navegação Entre Páginas**
A função `goToAndFinalPage` controla a página para a qual o sistema deve redirecionar o usuário com base em uma lógica específica. A página 66 é definida como a "página final" padrão.

**Exemplo:**
```javascript
function goToAndFinalPage(value){
  goToPage = value;
  finalPage = 66; // página de atendimento final.
}
```

Se o botão "continuar" for clicado e o usuário estiver na página configurada, o sistema redireciona automaticamente para a página final:
```javascript
if (continueClicked && currentPage == goToPage) {
  goToPage = 66;
}
```

---

### **2. Configuração Inicial de Usuário**
Na inicialização, o código verifica os dados do usuário atual e os preenche automaticamente nos campos do formulário.

**Exemplo:**
```javascript
if(runOnce){
  for(var i=0; i<users.length; i++){
    if(currentUser == users[i].id){
      data.txtNOMECOMPLETO = `${users[i].firstName} ${users[i].lastName}`;
      data.txtEMAIL = users[i].email;
      break;
    } 
  }
}
```

- Preenche o nome completo e o e-mail nos campos correspondentes (`txtNOMECOMPLETO` e `txtEMAIL`).

---

### **3. Exibição e Ocultação de Campos**
O sistema permite exibir ou ocultar campos específicos com base em condições definidas.

**Funções Auxiliares:**
```javascript
function ocultarCampos(campos) {
  campos.forEach(campo => schema[campo].hide = true);
}

function exibirCampos(campos) {
  campos.forEach(campo => schema[campo].hide = false);
}
```

**Lógica de Exibição para "Confirmar Solicitação":**
Se o usuário selecionar "Não" no campo `sltSELECT_CONFIRMAR_SOLICITACAO_SELECT`, determinados campos são exibidos; caso contrário, eles são ocultados:
```javascript
function configurarConfirmarSolicitacao() {
  const camposNaoAtendida1 = [
    "txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA2",
    "uplDEVOLUCAO_ANEXO_NAO_ATENDIDO2"
  ];

  if (data.sltSELECT_CONFIRMAR_SOLICITACAO_SELECT === "Não") {
    exibirCampos(camposNaoAtendida1);
  } else if (data.sltSELECT_CONFIRMAR_SOLICITACAO_SELECT === "Sim") {
    ocultarCampos(camposNaoAtendida1);
  }
}
```

---

### **4. Escolha de Tipo de Atendimento**
Ao iniciar o processo, o usuário seleciona o tipo de atendimento. Com base nessa seleção, o sistema redireciona para uma página específica.

**Exemplo:**
```javascript
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
    // Outros casos...
  }
}
```

---

### **5. Anexos e Dados Adicionais**
O código garante que os arquivos anexados pelo usuário sejam exibidos, e dados de solicitações não atendidas sejam transferidos para outro campo:
```javascript
data.txaDESCRICAO_CONFIRMAR_SOLICITACAO_GERAL = data.txaDESCRICAO_ATENDER_SOLICITACAO_GERAL;

if(data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA) {
  data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA2 = data.txaDESCRICAO_SOLICITACAO_NAO_ATENDIDA;
}

showUploadedFiles = true; // Exibe arquivos anexados.
```

---

## **Como Utilizar**
1. **Configuração Inicial**:
   - As variáveis globais `goToPage` e `finalPage` controlam o fluxo entre páginas.
   - Certifique-se de que os campos e páginas correspondam aos nomes definidos no código.

2. **Personalização**:
   - Adapte os campos e os tipos de atendimento ao seu fluxo de trabalho.
   - Use as funções genéricas `ocultarCampos` e `exibirCampos` para manipular a interface.

3. **Execução**:
   - Este código é ideal para sistemas de atendimento com múltiplas opções, onde a navegação e os dados são configurados dinamicamente.

---

## **Estrutura do Repositório**
- **`index.js`**: Código principal contendo a lógica descrita.
- **`README.md`**: Arquivo com explicação detalhada (este texto).
- **Outros Arquivos**: Inclua arquivos de exemplo, caso necessário, para auxiliar na compreensão.
