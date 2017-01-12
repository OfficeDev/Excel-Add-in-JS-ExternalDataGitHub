# <a name="external-data-from-github-task-pane-add-in-sample-for-excel-2016"></a>Ejemplo del complemento del panel de tareas de datos externos de GitHub para Excel 2016

_Se aplica a: Excel 2016_

Este complemento del panel de tareas muestra cómo cargar datos de un servicio externo, por ejemplo al usar las API de búsqueda de GitHub de Excel 2016. Hay dos tipos: editor de código y Visual Studio.

![Ejemplo de GitHub de datos externos](../images/ExternalDataGitHub_data.PNG)

## <a name="try-it-out"></a>Pruébelo
### <a name="code-editor-version"></a>Versión del editor de código

La forma más sencilla de implementar y probar el complemento consiste en copiar los archivos en un recurso compartido de red.

1.  Hospede los archivos del proyecto del Editor de código mediante su servidor favorito.
2.  Edite los elementos \<SourceLocation\> y \<URL\> del archivo de manifiesto para que apunte a la ubicación hospedada que creó en el paso 1 (por ejemplo, https://hostlocal/DatosExternosDeGitHub/Home.html).
3.  Copie el manifiesto (ExternalDataGitHubManifest.xml) en un recurso compartido de red (por ejemplo, \\\MiRecursoCompartido\\MisManifiestos).
4.  Agregue la ubicación del recurso compartido que contiene el manifiesto como un catálogo de aplicaciones de confianza en Excel.

    a.  Inicie Excel y abra una hoja de cálculo en blanco.

    b.  Elija la pestaña **Archivo** y, a continuación, **Opciones**.

    c.  Elija **Centro de confianza** y, a continuación, el botón **Configuración del Centro de confianza**.

    d.  Elija **Catálogos de complementos de confianza**.

    e.  En el cuadro **URL del catálogo**, escriba la ruta de acceso al recurso compartido de red que creó en el paso 3 y, a continuación, elija **Agregar catálogo**.

   f. Active la casilla **Mostrar en el menú** y elija **Aceptar**. Aparecerá un mensaje para informarle de que la configuración se aplicará la próxima vez que inicie Office.

5.  Pruebe y ejecute el complemento.

    a.  En la pestaña **Insertar** de Excel 2016, elija **Mis complementos**.

    b.  En el cuadro de diálogo **Complementos de Office**, elija **Carpeta compartida**.

    c.  Elija **Ejemplo de GitHub de datos externos**>**Insertar**. El complemento se abrirá en un panel de tareas, tal y como se muestra en este diagrama.

   ![Ejemplo de GitHub de datos externos](../images/ExternalDataGitHub_taskpane.PNG)

    d.  Escriba una palabra clave de búsqueda y un lenguaje de programación en las celdas A2 y B2 y haga clic en el botón Obtener información del repositorio para cargar los resultados en la tabla de la hoja de cálculo, tal como se muestra a continuación.

      ![Ejemplo de GitHub de datos externos](../images/ExternalDataGitHub_data.PNG)

### <a name="visual-studio-version"></a>Versión de Visual Studio
1.  Copie el proyecto en una carpeta local y abra Excel-Add-in-JS-ExternalDataGitHub.sln en Visual Studio.
2.  Pulse F5 para crear e implementar el complemento de ejemplo. Excel se inicia y se abre el complemento en un panel de tareas a la derecha de una hoja de cálculo en blanco, como se muestra en la siguiente ilustración.

  ![Ejemplo de GitHub de datos externos](../images/ExternalDataGitHub_taskpane.PNG)

3.  Escriba una palabra clave de búsqueda y un lenguaje de programación en las celdas A2 y B2 y haga clic en el botón Obtener información del repositorio para cargar los resultados en la tabla de la hoja de cálculo, tal como se muestra a continuación.

  ![Ejemplo de GitHub de datos externos](../images/ExternalDataGitHub_data.PNG)


### <a name="learn-more"></a>Obtener más información

1.  [Introducción a la programación de complementos de Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Explorador de fragmentos de código para Excel](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Ejemplos de código de complementos de Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md)
4.  [Referencia de la API de JavaScript de complementos de Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [Compilar el primer complemento de Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)