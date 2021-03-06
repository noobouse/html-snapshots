#!/usr/bin/env node

var path = require("path");

var ss = require("../../../lib/html-snapshots");
var result = ss.run({
  input: "sitemap",
  source: path.join(__dirname, "sitemap.xml"),
  //protocol: "http",
  hostname: "northstar.local",
  outputDirClean: true,
  outputDir: "./tmp/snapshots",
  outputPath: {
    "http://northstar.local/services/faq?arg=one": "services/faq/arg/one"
  },
  selector: "#dynamic-content"//,
  //timeout: function(url) { return 5000; },
  //selector: "#dynamic-content",
  //timeout: 5000,
  //checkInterval: 250,
  //snapshotScript: "../lib/phantom/snapshotSingle.js",
  //phantomjs: "phantomjs"
});
