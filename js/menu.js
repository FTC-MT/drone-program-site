/* The site header and main menu, shared by every page.
   To add, remove, rename, or reorder a menu item, edit the MENU list below.
   Each page has an empty <header id="site-header"> with this script right after it,
   so the menu is filled in before the page is shown. */
(function () {
  var MENU = [
    ["index.html", "Home"],
    ["course.html", "Course"],
    ["contest.html", "Contest"],
    ["lab.html", "Drone Lab"],
    ["register.html", "Register"]
  ];

  var header = document.getElementById("site-header");
  if (!header) return;

  // The current page's file name; the site root counts as index.html.
  var page = window.location.pathname.split("/").pop() || "index.html";

  var links = MENU.map(function (item) {
    var current = item[0] === page ? ' aria-current="page"' : "";
    return '<a href="' + item[0] + '"' + current + ">" + item[1] + "</a>";
  }).join("\n      ");

  header.innerHTML =
    '<div class="container">' +
      '<a class="brand" href="index.html">Fei Tian College Northern Campus ' +
        '<span><span class="sep">· </span>Drone Program</span></a>' +
      '<nav class="nav" aria-label="Main">' + links + "</nav>" +
    "</div>";
})();
