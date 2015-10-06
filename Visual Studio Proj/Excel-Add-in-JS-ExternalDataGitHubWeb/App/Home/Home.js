/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
	See full license at the bottom of this file. */

/// <reference path="../App.js" />

(function () {
    "use strict";

    var keyword;
    var language;


    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            // If not using Excel 2016, return
            if (!Office.context.requirements.isSetSupported('ExcelApi', '1.1')) {
                app.showNotification("Need Office 2016 or greater", "Sorry, this app only works with newer versions of Excel.");
                return;
            }

            // Attach a click event handler for the button
            $('#get-repo-info').click(getRepoInfo);

            // Put the default search keyword and language into the active worksheet
            // Run a batch operation against the Excel object model
            Excel.run(function (ctx) {

                var labels = [["Keyword", "Language"],
                          ["Excel", "JavaScript"]];

                // Create a proxy object for the active sheet
                var sheet = ctx.workbook.worksheets.getActiveWorksheet();

                // Queue a command to set the value of the range with keyword and language
                sheet.getRange("A1:B2").values = labels;

                // Queue a command to format the header row
                sheet.getRange("A1:B1").format.font.bold = true;

                // Queue a command to add a new table to contain the results
                var table = ctx.workbook.tables.add('A8:G8', true);
                table.name = "reposTable";

                //Run the queued-up commands, and return a promise to indicate task completion
                return ctx.sync();
            })
            // Always catch errors on the outside of Excel.run()
            .catch(function (error) {
                app.showNotification("Error: " + error);
                console.log("Error: " + error);
                if (error instanceof OfficeExtension.RuntimeError) {
                    console.log("Debug info: " + JSON.stringify(error.debugInfo));
                }
            });
        });
    };

    // Click event handler for the button
    // Get repo information from GitHub using their public Search API
    function getRepoInfo() {

        // Run a batch operation against the Excel object model
        Excel.run(function (ctx) {

            // Create a proxy object for the range that contains the city and state
            var range = ctx.workbook.worksheets.getActiveWorksheet().getRange("A2:B2");

            // Queue a command to load the values of the range
            range.load("values");

            //Run the queued-up commands, and return a promise to indicate task completion
            return ctx.sync().then(function () {
                // Get the city and state
                keyword = range.values[0][0];
                language = range.values[0][1];

                // Create the URL
                var requestUrl = "https://api.github.com/search/repositories?q=" + keyword + "+language:" + language + "&sort=stars&order=desc";

                // Make the AJAX request to the GitHub Search API
                // Note that for unauthenticated requests like this, GitHub API allows you to make up to 10 requests per minute.
                $.ajax({
                    url: requestUrl,
                    dataType: "json",
                    success: function (data) {
                        // Write the repo info to the active sheet
                        writeRepoInfo(data);
                    },
                    failure: function (error) {
                        var err = "Error calling GitHUB API: " + error;
                        app.showNotification(JSON.stringify(err));
                        console.log(JSON.stringify(err));
                    }
                });

            });
        })
		.catch(function (error) {
		    // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
		    app.showNotification("Error: " + error);
		    console.log("Error: " + error);
		    if (error instanceof OfficeExtension.Error) {
		        console.log("Debug info: " + JSON.stringify(error.debugInfo));
		    }
		});
    }


    // Write the repo info to the active sheet
    function writeRepoInfo(repos) {

        // Run a batch operation against the Excel object model
        Excel.run(function (ctx) {

            // Create a proxy object for the active sheet
            var sheet = ctx.workbook.worksheets.getActiveWorksheet();


            // Create a proxy for the tables rows 
            var table = ctx.workbook.tables.getItem('reposTable');


            // Queue a command to get the newly added table 
            table.getHeaderRowRange().values = [["NAME", "FULL NAME", "URL", "DESCRIPTION", "FORKS_COUNT", "STAR_GAZERS_COUNT", "WATCHERS_COUNT"]];


            // Create a proxy object for the table rows 
            var tableRows = table.rows;
            var items = repos.items;

            for (var i in items) {
                // Queue commands to add some sample rows to the course table 
                tableRows.add(null, [[items[i].name, items[i].full_name, items[i].url, items[i].description, items[i].forks_count, items[i].stargazers_count, items[i].watchers_count]]);
            }

            //Run the queued-up commands, and return a promise to indicate task completion
            return ctx.sync();

        })
		.catch(function (error) {
		    // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
		    app.showNotification("Error: " + error);
		    console.log("Error: " + error);
		    if (error instanceof OfficeExtension.Error) {
		        console.log("Debug info: " + JSON.stringify(error.debugInfo));
		    }
		});
    }
})();

/* 
Excel-Add-in-JS-ExternalDataGitHub, https://github.com/OfficeDev/Excel-Add-in-JS-ExternalDataGitHub

Copyright (c) Microsoft Corporation

All rights reserved.

MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
*/