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
~~~html
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
~~~
_________________________________________________________________
- **Próximos pontos de melhoria/refatoração:**
* Página de cadastro-success, com redirecionamento para a página '/study';
* Botão de excluir 'novo horário';
* Verificar o POST para o SaveClass;
* Desenvolvimento de API em C#;
* Cadastro e páginas de login para alunos e proffys;
* Verificar novalidate

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
##########################################################################<br>
[GET]['/']:
&nbsp; Renderiza>Renderiza a view 'index.html'.
[GET]['/study']:
&nbsp;  Renderiza a view 'study.nkj' com os professores cadastrados no DB já sendo apresentados.
&nbsp;  A view permite a filtragem de resultados.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       *queryParameters*:
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subject: 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: Matérias disponíveis para estudo.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: integer (select)
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; required: true.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weekday: 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: Dias da semana disponíveis para estudo.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: string (select)
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; required: true.
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; time: 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: horários disponíveis para estudo.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: integer
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  required: true.
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