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

*[GET]['/study']:<br>
Renderiza a view 'study.nkj' com os professores cadastrados no DB já sendo apresentados.
A view permite a filtragem de resultados.<br>
<p>queryParameters:</p>
&nbsp;&nbsp;&nbsp;&nbsp;<p>subject: <br></p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>description: Matérias disponíveis para estudo.</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>type: integer (select)</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>required: true.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<p>weekday: </p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>description: Dias da semana disponíveis para estudo.</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>type: string (select)</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>required: true.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<p>time: </p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>description: horários disponíveis para estudo.</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>type: integer</p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>required: true.</p>
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
