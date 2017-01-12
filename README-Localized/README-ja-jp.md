# <a name="external-data-from-github-task-pane-add-in-sample-for-excel-2016"></a>Excel 2016 用の GitHub 外部データ作業ウィンドウ アドインのサンプル

_適用対象:Excel 2016_

この作業ウィンドウ アドインには、Excel 2016 で GitHub Search API を使用して外部サービスからデータをロードする方法が示されます。コード エディターと Visual Studio のいずれかを選択できます。

![外部データ GitHub のサンプル](../Images/ExternalDataGitHub_data.PNG)

## <a name="try-it-out"></a>お試しください。
### <a name="code-editor-version"></a>コード エディターのバージョン

アドインを展開してテストする最も簡単な方法は、ファイルをネットワーク共有にコピーすることです。

1.  任意のサーバーを使用して、コード エディターのプロジェクトのファイルをホストします。
2.  マニフェスト ファイルの \<SourceLocation\> 要素と \<URL\> 要素を編集して、手順 1 のホストの場所 (たとえば https://localhost/ExternalDataGitHub/Home.html) をポイントするようにします。
3.  マニフェスト (ExternalDataGitHubManifest.xml) をネットワーク共有 (たとえば \\\MyShare\\MyManifests) にコピーします。
4.  マニフェストを格納する共有の場所を、Excel で信頼されるアプリ カタログとして追加します。

    a.Excel を起動し、空のスプレッドシートを開きます。

    b.**[ファイル]** タブを選び、**[オプション]** を選びます。

    c.**[セキュリティ センター]** を選択し、**[セキュリティ センターの設定]** ボタンを選択します。

    d.**[信頼されているアドイン カタログ]** を選びます。

    e.**[カタログの URL]** ボックスで、手順 3 で作成したネットワーク共有のパスを入力し、**[カタログの追加]** を選択します。

   f. **[メニューに表示する]** チェック ボックスをオンにしてから **[OK]** を選択します。これらの設定は Office を次回起動したときに適用されることを示すメッセージが表示されます。

5.  アドインをテストし、実行します。

    a.Excel 2016 の **[挿入]** タブで、**[個人用アドイン]** を選択します。

    b.**[Office アドイン]** ダイアログ ボックスで、**[共有フォルダー]** を選択します。

    c.**[外部データ GitHub のサンプル]**>**[挿入]** の順に選択します。次の図に示すように、作業ウィンドウでアドインが開きます。

   ![外部データ GitHub のサンプル](../Images/ExternalDataGitHub_taskpane.PNG)

    d.セル A2 と B2 に、検索キーワードとプログラミング言語を入力し、[リポジトリ情報を取得] ボタンをクリックすると、以下のように、スプレッドシートのテーブルに結果が読み込まれます。

      ![外部データ GitHub のサンプル](../Images/ExternalDataGitHub_data.PNG)

### <a name="visual-studio-version"></a>Visual Studio のバージョン
1.  プロジェクトをローカル フォルダーにコピーし、Visual Studio で Excel-Add-in-JS-ExternalDataGitHub.sln を開きます。
2.  F5 キーを押して、サンプル アドインをビルドおよび展開します。Excel が起動し、次の図に示すように、空白のワークシートの右側の作業ウィンドウでアドインが開きます。

  ![外部データ GitHub のサンプル](../Images/ExternalDataGitHub_taskpane.PNG)

3.  セル A2 と B2 に、検索キーワードとプログラミング言語を入力し、[リポジトリ情報を取得] ボタンをクリックすると、以下のように、スプレッドシートのテーブルに結果が読み込まれます。

  ![外部データ GitHub のサンプル](../Images/ExternalDataGitHub_data.PNG)


### <a name="learn-more"></a>詳細を見る

1.  [Excel アドインのプログラミングの概要](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Excel のスニペット エクスプローラー](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Excel アドインのコード サンプル](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md)
4.  [Excel アドインの JavaScript API リファレンス](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [最初の Excel アドインをビルドする](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)