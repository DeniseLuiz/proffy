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

<br>
* [GET]['/']:
<p>Renderiza a view 'index.html'.</p>

*[GET]['/study']:
<p>Renderiza a view 'study.nkj' com os professores cadastrados no DB já sendo apresentados.
A view permite a filtragem de resultados.</p>
<p>***queryParameters:</p>
<p>______**subject**:</p>
<p>___________description: Matérias disponíveis para estudo.</p>
<p>___________type: integer (select)</p>
<p>___________required: true.</p>
<p>_______**weekday**: </p>
<p>___________description: Dias da semana disponíveis para estudo.</p>
<p>___________type: string (select)</p>
<p>___________required: true.</p>
<p>______**time**: </p>
<p>___________description: horários disponíveis para estudo.</p>
<p>___________type: integer</p>
<p>___________required: true.</p>

*[GET]['/give-classes']:
*[POST]['/save-classes']:

_________________________________________________________________
- **Próximos pontos de melhoria/refatoração:**
* Página de cadastro-success, com redirecionamento para a página '/study';
* Botão de excluir 'novo horário';
* Verificar o POST para o SaveClass;
* Desenvolvimento de API em C#;
* Cadastro e páginas de login para alunos e proffys;
* Verificar novalidate
