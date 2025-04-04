Mercado_api
Projeto Cadastro - Mercado
Este projeto tem como objetivo desenvolver um sistema de Cadastro de produtos de mercado, como parte das atividades acadêmicas da faculdade.

🛠️ Tecnologias Utilizadas
[Especificar as tecnologias aqui]

📌 Padrões e Processos
📂 Estrutura de Branches
O projeto segue o fluxo Git Flow, utilizando as seguintes branches principais:

Main: Contém a versão estável do projeto.
Dev: Contém tudo que foi desenvolvido na sprint.
Homolog: Utilizada para testes antes da entrega final.

🔄 Processo de Desenvolvimento
Criar uma nova branch baseada na main.
Implementar a funcionalidade ou correção necessária.
Fazer merge para a branch homolog para testes e validação.
Após aprovação, integrar na main.

🏷️ Nomeação de Branches
Funcionalidades novas: feature/numero_tarefa_descricao
Correções de bugs: fix/numero_tarefa_descricao

Exemplo:

    feature/2_criacao_endpoint
    fix/5_correcao_cadastro

📌 Padrão de Commits
O projeto utiliza a seguinte convenção para mensagens de commit:

[FEAT] #numero descrição → Para novas funcionalidades.
[FIX] #numero descrição → Para correções de bugs.
[HOTFIX] #numero descrição → Para correções urgentes.

git commit -m "[FEAT] #2 Criação do EndPoint"
git commit -m "[FIX] #5 Correção do fluxo de cadastro"
git commit -m "[HOTFIX] #10 Ajuste crítico no login"


🚀 Como Executar o Projeto
execute o comando npm install para instalar as dependências.
siga o caminho src/db e rode o comando npx prisma db push, depois npx prisma generate.
depois de voltar para a raiz do projeto execute npm run dev para iniciar o server.

📌 Contribuição
Contribuições são bem-vindas! Certifique-se de seguir os padrões estabelecidos antes de abrir um Pull Request.
