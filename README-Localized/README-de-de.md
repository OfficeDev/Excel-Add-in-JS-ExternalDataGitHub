# <a name="external-data-from-github-task-pane-add-in-sample-for-excel-2016"></a>Aufgabenbereich-Add-In-Beispiel für externe Daten aus GitHub für Excel 2016

_Gilt für: Excel 2016_

Dieses Aufgabenbereich-Add-In veranschaulicht, wie Daten aus einem externen Dienst geladen werden, beispielsweise mithilfe der GitHub Search-APIs in Excel 2016. Es ist in zwei Versionen verfügbar: Code-Editor und Visual Studio.

![GitHub-Beispiel für externe Daten](../Images/ExternalDataGitHub_data.PNG)

## <a name="try-it-out"></a>Probieren Sie es aus
### <a name="code-editor-version"></a>Code-Editor-Version

Am einfachsten können Sie Ihr Add-In bereitstellen und testen, indem Sie die Dateien in eine Netzwerkfreigabe kopieren.

1.  Hosten Sie die Dateien aus dem Code-Editor-Projekt mithilfe eines Servers Ihrer Wahl.
2.  Bearbeiten Sie die Elemente \<SourceLocation\> und \<URL\> der Manifestdatei so, dass sie auf den gehosteten Speicherort aus Schritt 1 zeigt (z. B. https://localhost/ExternalDataGitHub/Home.html).
3.  Kopieren Sie das Manifest (ExternalDataGitHubManifest.xml) in eine Netzwerkfreigabe (z. B. \\\MyShare\MyManifests).
4.  Fügen Sie den Freigabepfad, unter dem das Manifest enthalten ist, als vertrauenswürdigen App-Katalog in Excel hinzu.

    a.  Starten Sie Excel, und öffnen Sie ein leeres Arbeitsblatt.

    b.  Klicken Sie auf die Registerkarte **Datei**, und klicken Sie dann auf **Optionen**.

    c.  Wählen Sie **Sicherheitscenter** aus, und klicken Sie dann auf die Schaltfläche **Einstellungen für das Sicherheitscenter**.

    d.  Klicken Sie auf **Vertrauenswürdige Add-in-Kataloge**.

    e.  Geben Sie im Feld  **Katalog-URL** den Pfad zu der in Schritt 3 erstellten Netzwerkfreigabe ein, und klicken Sie auf **Katalog hinzufügen**.

   f. Aktivieren Sie das Kontrollkästchen **Im Menü anzeigen**, und wählen Sie dann **OK**. Eine Meldung wird angezeigt, dass Ihre Einstellungen angewendet werden, wenn Office das nächste Mal gestartet wird.

5.  Testen und führen Sie das Add-In aus.

    a.  Klicken Sie auf der Registerkarte **Einfügen** in Excel 2016 auf **Meine-Add-Ins**.

    b.  Wählen Sie im Dialogfenster **Office-Add-Ins** die Option **Freigegebener Ordner** aus.

    c.  Wählen Sie **GitHub-Beispiel für externe Daten**>**Einfügen**. Das Add-In wird in einem Aufgabenbereich geöffnet, wie in diesem Diagramm dargestellt.

   ![GitHub-Beispiel für externe Daten](../Images/ExternalDataGitHub_taskpane.PNG)

    d.  Geben Sie einen Suchschlüsselwort und eine Programmiersprache in den Zellen A2 und B2 ein, und klicken Sie auf die Schaltfläche „Repository-Informationen abrufen“, um die Ergebnisse in die Tabelle in dem Arbeitsblatt zu laden, wie im Folgenden dargestellt.

      ![GitHub-Beispiel für externe Daten](../Images/ExternalDataGitHub_data.PNG)

### <a name="visual-studio-version"></a>Visual Studio-Version
1.  Kopieren Sie das Projekt in einen lokalen Ordner, und öffnen Sie die Datei „Excel-Add-in-JS-ExternalDataGitHub.sln“ in Visual Studio.
2.  Drücken Sie F5, um das Beispiel-Add-In zu erstellen und bereitzustellen. Excel wird gestartet und das Add-In wird in einem Aufgabenbereich rechts neben einem leeren Arbeitsblatt geöffnet, wie in der folgenden Abbildung dargestellt.

  ![GitHub-Beispiel für externe Daten](../Images/ExternalDataGitHub_taskpane.PNG)

3.  Geben Sie einen Suchschlüsselwort und eine Programmiersprache in den Zellen A2 und B2 ein, und klicken Sie auf die Schaltfläche „Repository-Informationen abrufen“, um die Ergebnisse in die Tabelle in dem Arbeitsblatt zu laden, wie im Folgenden dargestellt.

  ![GitHub-Beispiel für externe Daten](../Images/ExternalDataGitHub_data.PNG)


### <a name="learn-more"></a>Weitere Informationen

1.  [Programmierungsübersicht für Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Codeausschnitt-Explorer für Excel](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Codebeispiele zu Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md)
4.  [JavaScript-API-Referenz zu Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [Erstellen Ihres ersten Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)