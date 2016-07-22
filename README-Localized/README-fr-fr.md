# Exemple de complément de volet Office - GitHub de données externes pour Excel 2016

_S’applique à : Excel 2016_

Ce complément de volet Office montre comment charger des données à partir d’un service externe, par exemple à l’aide des API de recherche GitHub dans Excel 2016. Il a deux versions : éditeur de code et Visual Studio.

![Exemple de GitHub de données externes](../images/ExternalDataGitHub_data.PNG)

## Essayez !
### Version d’éditeur de code

Pour déployer et tester votre complément, le plus simple consiste à copier les fichiers sur un partage réseau.

1.  Créez un dossier sur un partage réseau (par exemple, \\\MyShare\ExternalDataGitHub) et copiez tous les fichiers dans le dossier de projet d’éditeur de code. 
2.  Modifiez l’élément <SourceLocation> du fichier manifeste afin qu’il pointe vers le fichier HTML de l’emplacement de partage de l’étape 1. 
3.  Copiez le fichier manifeste (ExternalDataGitHubManifest.xml) dans un partage réseau (par exemple, \\\MyShare\MyManifests).
4.  Ajoutez l’emplacement de partage qui contient le fichier manifeste sous forme de catalogue d’applications approuvées dans Excel.

    a. Lancez Excel et ouvrez une feuille de calcul vide.  
    
    b. Choisissez l’onglet **Fichier**, puis choisissez **Options**.
    
    c. Choisissez **Centre de gestion de la confidentialité**, puis cliquez sur le bouton **Paramètres du Centre de gestion de la confidentialité**.
    
    d. Choisissez **Catalogues de compléments approuvés**.
    
    e. Dans la zone **URL du catalogue**, entrez le chemin d’accès du partage réseau que vous avez créé à l’étape 3, puis choisissez **Ajouter un catalogue**.
    
   Activez la case à cocher **Afficher dans le menu**, puis cliquez sur **OK**. Un message s’affiche pour vous informer que vos paramètres seront appliqués la prochaine fois que vous démarrerez Office. 
        
5.  Testez et exécutez le complément. 

    a. Dans l’onglet **Insertion** d’Excel 2016, choisissez **Mes compléments**. 
    
    b. Dans la boîte de dialogue **Compléments Office**, choisissez **Dossier partagé**.
    
    c. Choisissez **Exemple de GitHub de données externes**>**Insertion**. Le complément s’ouvre dans un volet Office, comme indiqué sur le diagramme. 
      
   ![Exemple de GitHub de données externes](../images/ExternalDataGitHub_taskpane.PNG) 

    d. Entrez un mot clé de recherche et un langage de programmation dans les cellules A2 et B2, puis cliquez sur le bouton Obtenir des informations sur le référentiel pour charger les résultats dans le tableau de la feuille de calcul, comme indiqué ci-dessous.
    
      ![Exemple de GitHub de données externes](../images/ExternalDataGitHub_data.PNG) 
    
### Version de Visual Studio
1.  Copiez le projet dans un dossier local et ouvrez le fichier Excel-Add-in-JS-ExternalDataGitHub.sln dans Visual Studio.
2.  Appuyez sur F5 pour créer et déployer l’exemple de complément. Excel démarre et le complément s’ouvre dans un volet Office à droite de la feuille de calcul active, comme indiqué dans l’illustration suivante. 
        
  ![Exemple de GitHub de données externes](../images/ExternalDataGitHub_taskpane.PNG) 

3.  Entrez un mot clé de recherche et un langage de programmation dans les cellules A2 et B2, puis cliquez sur le bouton Obtenir des informations sur le référentiel pour charger les résultats dans le tableau de la feuille de calcul, comme indiqué ci-dessous.

  ![Exemple de GitHub de données externes](../images/ExternalDataGitHub_data.PNG) 


### En savoir plus

1.  [Présentation de la programmation pour les compléments Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-programming-overview.md)
2.  [Explorateur d’extraits de code pour Excel](http://officesnippetexplorer.azurewebsites.net/#/snippets/excel)
3.  [Exemples de code pour les compléments Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-code-samples.md) 
4.  [Référence de l’API JavaScript pour les compléments Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/excel-add-ins-javascript-reference.md)
5.  [Créer son premier complément Excel](https://github.com/OfficeDev/office-js-docs/blob/master/excel/build-your-first-excel-add-in.md)
