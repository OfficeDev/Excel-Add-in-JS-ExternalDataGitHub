# Aufgabenbereich-Add-In-Beispiel für externe Daten aus GitHub für Excel 2016

_Gilt für: Excel 2016_

Dieses Aufgabenbereich-Add-In veranschaulicht, wie Daten aus einem externen Dienst geladen werden, beispielsweise mithilfe der GitHub Search-APIs in Excel 2016. Es ist in zwei Versionen verfügbar: Code-Editor und Visual Studio.

![GitHub-Beispiel für externe Daten](../images/ExternalDataGitHub_data.PNG)

## Probieren Sie es aus
### Code-Editor-Version

Am einfachsten können Sie Ihr Add-In bereitstellen und testen, indem Sie die Dateien in eine Netzwerkfreigabe kopieren.

1.  Erstellen Sie einen Ordner in einer Netzwerkfreigabe (z.ä B. \\\MyShare\ExternalDataGitHub), und kopieren Sie alle Dateien im Ordner „ Code Editor Proj”. 
2.  Bearbeiten Sie das <SourceLocation>-Element der Manifestdatei, damit es auf die HTML-Datei in der Netzwerkfreigabe aus Schrittä 1 zeigt. 
3.  Kopieren Sie das Manifest (ExternalDataGitHubManifest.xml) in eine Netzwerkfreigabe (z.ä B. \\\MyShare\MyManifests).
4.  Fügen Sie den Freigabepfad, unter dem das Manifest enthalten ist, als vertrauenswürdigen App-Katalog in Excel hinzu.

    a. Starten Sie Excel, und öffnen Sie ein leeres Arbeitsblatt.  
    
    b. Klicken Sie auf die Registerkarte **Datei**, und klicken Sie dann auf **Optionen**.
    
    c. Wählen Sie **Trust Center** aus, und klicken Sie dann auf die Schaltfläche **Einstellungen für das Trust Center**.
    
  d. Klicken Sie auf **Vertrauenswürdige Add-in-Kataloge**.
    
  e. Geben Sie im Feld **Katalog-URL** den Pfad zu der in Schritt 3 erstellten Netzwerkfreigabe ein, und klicken Sie auf **Katalog hinzufügen**.
    
   f. Aktivieren Sie das Kontrollkästchen **Im Menü anzeigen**, und wählen Sie dann **OK**. Eine Meldung wird angezeigt, dass Ihre Einstellungen angewendet werden, wenn Office das nächste Mal gestartet wird. 
        
5.  Testen und führen Sie das Add-In aus. 

  a. Klicken Sie auf der Registerkarte **Einfügen** in Excel 2016 auf **Meine-Add-Ins**. 
    
  b. Wählen Sie im Dialogfenster **Office-Add-Ins** die Option **Freigegebener Ordner** aus.
    
  c. Wählen Sie **GitHub-Beispiel für externe Daten**>**Einfügen**. The add-in opens in a task pane as shown in this diagram. 
      
   ![GitHub-Beispiel für externe Daten](../images/ExternalDataGitHub_taskpane.PNG) 

  d. Geben Sie einen Suchschlüsselwort und eine Programmiersprache in den Zellen A2 und B2 ein, und klicken Sie auf die Schaltfläche „Repository-Informationen abrufen“, um die Ergebnisse in die Tabelle in dem Arbeitsblatt zu laden, wie im Folgenden dargestellt.
    
      ![External Data GitHub Sample](../images/ExternalDataGitHub_data.PNG) 
    
### Visual Studio-Version
1.  Kopieren Sie das Projekt in einen lokalen Ordner, und öffnen Sie die Datei „Excel-Add-in-JS-ExternalDataGitHub.sln” in Visual Studio.
2.  Drücken Sie F5, um das Beispiel-Add-In zu erstellen und bereitzustellen. Excel wird gestartet und das Add-In wird in einem Aufgabenbereich rechts neben einem leeren Arbeitsblatt geöffnet, wie in der folgenden Abbildung dargestellt. 
        
  ![GitHub-Beispiel für externe Daten](../images/ExternalDataGitHub_taskpane.PNG) 

3.  Geben Sie einen Suchschlüsselwort und eine Programmiersprache in den Zellen A2 und B2 ein, und klicken Sie auf die Schaltfläche „Repository-Informationen abrufen”, um die Ergebnisse in die Tabelle in dem Arbeitsblatt zu laden, wie im Folgenden dargestellt.

  ![GitHub-Beispiel für externe Daten](../images/ExternalDataGitHub_data.PNG) 


### Weitere Informationen

1.  [Programmierungsübersicht für Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Codeausschnitt-Explorer für Excel](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Codebeispiele zu Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md) 
4.  [JavaScript-API-Referenz zu Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [Erstellen Ihres ersten Excel-Add-Ins](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)
