  var spec2 = "js/visualization.vg.json";
  vegaEmbed('#employment_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);