# <a name="external-data-from-github-task-pane-add-in-sample-for-excel-2016"></a>适用于 Excel 2016 的 GitHub 外部数据任务窗格外接程序示例

_适用于：Excel 2016_

此任务窗格外接程序介绍如何从外部服务加载数据，如通过使用 Excel 2016 中的 GitHub 搜索 API。它有两种类型：代码编辑器和 Visual Studio。

![外部数据 GitHub 示例](../Images/ExternalDataGitHub_data.PNG)

## <a name="try-it-out"></a>尝试一下
### <a name="code-editor-version"></a>代码编辑器版本

部署和测试外接程序的最简单方法是将文件复制到网络共享中。

1.  使用你选择的服务器托管代码编辑器项目文件夹中的文件。
2.  编辑清单文件中的 \<SourceLocation\> 和 \<URL\> 元素，使其指向第 1 步中的托管位置（例如，https://localhost/ExternalDataGitHub/Home.html）
3.  将清单文件 (ExternalDataGitHubManifest.xml) 复制到网络共享（例如，\\\MyShare\\MyManifests）中。
4.  添加将清单作为 Excel 中受信任的应用目录的共享位置。

    a.启动 Excel 并打开一个空白的电子表格。

    b.依次选择“**文件**”选项卡和“**选项**”。

    c.依次选择“**信任中心**”和“**信任中心设置**”按钮。

    d.选择“**受信任的外接程序目录**”。

    e.在“**目录 URL**”框中，输入你在第 3 步中创建的网络共享路径，然后选择“**添加目录**”。

   f.  选中“**显示在菜单中**”复选框，然后选择“**确定**”。此时，系统会显示一条消息，提醒你注意你的设置将在 Office 下次启动时应用。

5.  测试并运行外接程序。

    a.在 Excel 2016 的“**插入**”选项卡中，选择“**我的外接程序**”。

    b.在“**Office 外接程序**”对话框中，选择“**共享文件夹**”。

    c.依次选择“**外部数据 GitHub 示例**”>“**插入**”。此时，外接程序在任务窗格中打开，如下图所示。

   ![外部数据 GitHub 示例](../Images/ExternalDataGitHub_taskpane.PNG)

    d.在 A2 和 B2 单元格中输入一个搜索关键字和编程语言，然后单击“获取存储库信息”按钮，以将结果加载到电子表格中的表，如下所示。

      ![外部数据 GitHub 示例](../Images/ExternalDataGitHub_data.PNG)

### <a name="visual-studio-version"></a>Visual Studio 版本
1.  将项目复制到本地文件夹，并在 Visual Studio 中打开 Excel-Add-in-JS-ExternalDataGitHub.sln。
2.  按 F5 生成并部署示例外接程序。Excel 启动并且外接程序会在空白工作簿右侧的任务窗格中打开，如下图所示。

  ![外部数据 GitHub 示例](../Images/ExternalDataGitHub_taskpane.PNG)

3.  在 A2 和 B2 单元格中输入一个搜索关键字和编程语言，然后单击“获取存储库信息”按钮，以将结果加载到电子表格中的表，如下所示。

  ![外部数据 GitHub 示例](../Images/ExternalDataGitHub_data.PNG)


### <a name="learn-more"></a>了解详细信息

1.  [Excel 外接程序编程概述](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [适用于 Excel 的代码段资源管理器](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Excel 外接程序代码示例](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md)
4.  [Excel 外接程序 JavaScript API 参考](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [生成你的第一个 Excel 外接程序](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)