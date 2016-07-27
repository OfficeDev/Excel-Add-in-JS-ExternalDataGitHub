# 适用于 Excel 2016 的 GitHub 任务窗格外接程序示例的外部数据

_适用于：Excel 2016_

此任务窗格外接程序介绍如何从外部服务加载数据，如通过使用 Excel 2016 中的 GitHub 搜索 API。它有两种类型：代码编辑器和 Visual Studio。

![外部数据 GitHub 示例](../images/ExternalDataGitHub_data.PNG)

## 尝试一下
### 代码编辑器版本

部署和测试外接程序最简单的方法是将文件复制到网络共享。

1.  在网络共享上创建一个文件夹（如 \\\MyShare\ExternalDataGitHub），然后复制代码编辑器 Proj 文件夹中的所有文件。 
2.  编辑清单文件的 <SourceLocation> 元素，使其指向步骤 1 中共享位置的 HTML 文件。 
3.  将清单 (ExternalDataGitHubManifest.xml) 复制到网络共享（例如 \\\MyShare\\MyManifests）。
4.  添加将清单作为 Excel 中受信任的应用目录的共享位置。

    a.启动 Excel 并打开一个空白的电子表格。  
    
    b.选择**文件**选项卡，然后选择**选项**。
    
    c.选择**信任中心**，然后选择**信任中心设置**按钮。
    
    d.选择**受信任的外接程序目录**。
    
    e.在**目录 Url**框中，输入在第 3 步中创建的网络共享的路径，然后选择**添加目录**。
    
   f.  选中“**显示在菜单中**”复选框，然后选择“**确定**”。此时，系统会显示一条消息，提醒你注意你的设置将在 Office 下次启动时应用。 
        
5.  测试并运行外接程序。 

    a.在 Excel 2016 的**插入选项卡**中，选择**我的外接程序**。
    
    b.在**Office 外接程序**对话框中，选择**共享文件夹**。
    
    c.选择**外部数据 GitHub 示例**>**插入**。 外接程序在任务窗格中打开，如此图中所示。 
      
   ![外部数据 GitHub 示例](../images/ExternalDataGitHub_taskpane.PNG) 

    d.在 A2 和 B2 单元格中输入一个搜索关键字和编程语言，然后单击获取存储库信息按钮，以将结果加载到电子表格中的表，如下所示。
    
      ![外部数据 GitHub 示例](../images/ExternalDataGitHub_data.PNG) 
    
### Visual Studio 版本
1.  将项目复制到本地文件夹，并在 Visual Studio 中打开 Excel-Add-in-JS-ExternalDataGitHub.sln。
2.  按 F5 生成并部署示例外接程序。Excel 启动并且外接程序会在空白工作簿右侧的任务窗格中打开，如下图所示。 
        
  ![外部数据 GitHub 示例](../images/ExternalDataGitHub_taskpane.PNG) 

3.  在 A2 和 B2 单元格中输入一个搜索关键字和编程语言，然后单击“获取存储库信息”按钮，以将结果加载到电子表格中的表，如下所示。

  ![外部数据 GitHub 示例](../images/ExternalDataGitHub_data.PNG) 


### 了解详细信息

1.  [Excel 外接程序编程概述](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [适用于 Excel 的代码段资源管理器](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Excel 外接程序代码示例](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md) 
4.  [Excel 外接程序 JavaScript API 参考](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [构建你的第一个 Excel 外接程序](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)
