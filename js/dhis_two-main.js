(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.mybehavior = {
        attach: function (context, settings) {
console.log('running noiw');
            var base = "https://play.dhis2.org/demo/";
            var username = "admin";
            var password = "district";

            $.ajax({
                url: base + "dhis-web-commons-security/login.action",
                type: 'POST',
                crossDomain: true,
                contentType: 'application/x-www-form-urlencoded',
                dataType: "text",
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                     'Authorization': 'Basic ' + btoa('admin:district')
                },
                error: function() { console.log('Failed!'); },
                //success: setLinks
                success: function () {
                    console.log('I was able to log in::::')
                }
            });


            function setLinks() {

                // Referring to an existing chart through the id parameter, render to "chart1" div

                DHIS.getChart({ url: base, el: "chart1", id: "R0DVGvXDUNP" });

                // Full chart configuration, render to "chart2" div

                DHIS.getChart({
                    url: base,
                    el: "chart2",
                    type: "stackedBar",
                    columns: [ // Chart series
                        {dimension: "de", items: [{id: "YtbsuPPo010"}, {id: "l6byfWFUGaP"}]}
                    ],
                    rows: [ // Chart categories
                        {dimension: "pe", items: [{id: "LAST_12_MONTHS"}]}
                    ],
                    filters: [
                        {dimension: "ou", items: [{id: "USER_ORGUNIT"}]}
                    ],
                    // All following options are optional
                    showData: false,
                    targetLineValue: 70,
                    baseLineValue: 20,
                    showTrendLine: true,
                    hideLegend: true,
                    title: "My chart title",
                    domainAxisTitle: "Periods",
                    rangeAxisTitle: "Percent"
                });
            }

        }
    };

})(jQuery, Drupal, drupalSettings);