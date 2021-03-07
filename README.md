##########################################################################
##  Tecnologias utilizadas:                                         ##
##########################################################################

* HTML5;
* CSS;
* JavaScript;
* NodeJS;
* Nunjucks;
* SQLite.

##########################################################################
##  Definição dos endpoints:                                         ##
##########################################################################
[GET]['/']:
Renderiza a view 'index.html'.

[GET]['/study']:
Renderiza a view 'study.nkj' com os professores cadastrados no DB já sendo apresentados.
A view permite a filtragem de resultados.
    queryParameters:
        subject: 
            description: Matérias disponíveis para estudo.
            type: integer (select)
            required: true.
        weekday: 
            description: Dias da semana disponíveis para estudo.
            type: string (select)
            required: true.
        time: 
            description: horários disponíveis para estudo.
            type: integer
            required: true.
[GET]['/give-classes']:
[POST]['/save-classes']:

_________________________________________________________________
- **Próximos pontos de melhoria/refatoração:**
* Página de cadastro-success, com redirecionamento para a página '/study';
* Botão de excluir 'novo horário';
* Verificar o POST para o SaveClass;
* Desenvolvimento de API em C#;
* Cadastro e páginas de login para alunos e proffys;
* Verificar novalidate

