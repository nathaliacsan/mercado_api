Mercado_api
Projeto Cadastro - Mercado
Este projeto tem como objetivo desenvolver um sistema de Cadastro de produtos de mercado, como parte das atividades acadêmicas da faculdade.

## 🛠️ Tecnologias Utilizadas:
- [nodejs](https://nodejs.org/) 
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [jwt](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)


## 📌 Padrões e Processos
📂 Estrutura de Branches:

O projeto segue o fluxo Git Flow, utilizando as seguintes branches principais:

- **Dev:** Contém o código a ser desenvolvido até a entrega da AC.

- **Homolog:** Contém a versão de entrega da AC.

- **Main:** Contém a versão final do projeto que é a versão final do que está em homolog.

## 🔄 Processo de Desenvolvimento
- Criar uma nova branch baseada na dev.

- Implementar a funcionalidade ou correção necessária e fazer o merge para a dev novamente.

- O merge de homolog será feito com a versão de dev para entregar a ac.

## 🏷️ Nomeação de Branches
Funcionalidades novas: feature/numero_tarefa_descricao
Correções de bugs: fix/numero_tarefa_descricao

Exemplo:

    feature/2_criacao_endpoint
    fix/5_correcao_cadastro

## 📌 Padrão de Commits
O projeto utiliza a seguinte convenção para mensagens de commit:

[FEAT] #numero descrição → Para novas funcionalidades.
[FIX] #numero descrição → Para correções de bugs.

git commit -m "[FEAT] #2 Criação do EndPoint"
git commit -m "[FIX] #5 Correção do fluxo de cadastro"


## 🚀 Como Executar o Projeto
npm start

## 📌 Contribuição
Contribuições são bem-vindas! Certifique-se de seguir os padrões estabelecidos antes de abrir um Pull Request.
