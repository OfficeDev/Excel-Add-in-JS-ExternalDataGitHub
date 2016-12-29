# External Data from GitHub Task Pane Add-in Sample for Excel 2016

_Applies to: Excel 2016_

This task pane add-in shows how to load data from an external service such as by using the GitHub Search APIs in Excel 2016. It comes in two flavors: code editor and Visual Studio.

![External Data GitHub Sample](images/ExternalDataGitHub_data.PNG)

## Try it out
### Code editor version

The simplest way to deploy and test your add-in is to copy the files to a network share.

1.  Host the files from the Code Editor Proj by using a server of your choice.
2.  Edit the \<SourceLocation\> and \<URL\> elements of the manifest file so that it points to the hosted location from step 1. (for example, https://localhost/ExternalDataGitHub/Home.html)
3.  Copy the manifest (ExternalDataGitHubManifest.xml) to a network share (for example, \\\MyShare\MyManifests).
4.  Add the share location that contains the manifest as a trusted app catalog in Excel.

    a.  Launch Excel and open a blank spreadsheet.

    b.  Choose the **File** tab, and then choose **Options**.

    c.  Choose **Trust Center**, and then choose the **Trust Center Settings** button.

    d.  Choose **Trusted Add-in Catalogs**.

    e.  In the **Catalog Url** box, enter the path to the network share you created in step 3, and then choose **Add Catalog**.

   f.  Select the **Show in Menu** check box, and then choose **OK**. A message appears to inform you that your settings will be applied the next time you start Office.

5.  Test and run the add-in.

    a.  In the **Insert tab** in Excel 2016, choose **My Add-ins**.

    b.  In the **Office Add-ins** dialog box, choose **Shared Folder**.

    c.  Choose **External Data GitHub Sample**>**Insert**. The add-in opens in a task pane as shown in this diagram.

   ![External Data GitHub Sample](images/ExternalDataGitHub_taskpane.PNG)

    d.  Enter a search keyword and a programming language in the cells, A2 and B2 and click the Get repository info button to load the results into the table in the spreadsheet as shown below.

      ![External Data GitHub Sample](images/ExternalDataGitHub_data.PNG)

### Visual Studio version
1.  Copy the project to a local folder and open the Excel-Add-in-JS-ExternalDataGitHub.sln in Visual Studio.
2.  Press F5 to build and deploy the sample add-in. Excel launches and the add-in opens in a task pane to the right of a blank worksheet, as shown in the following figure.

  ![External Data GitHub Sample](images/ExternalDataGitHub_taskpane.PNG)

3.  Enter a search keyword and a programming language in the cells, A2 and B2 and click the Get repository info button to load the results into the table in the spreadsheet as shown below.

  ![External Data GitHub Sample](images/ExternalDataGitHub_data.PNG)


### Learn more

1.  [Excel Add-ins programming overview](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Snippet Explorer for Excel](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Excel Add-ins code samples](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md)
4.  [Excel Add-ins JavaScript API Reference](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [Build your first Excel Add-in](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)