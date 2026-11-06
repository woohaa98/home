/* =============================================================
   Therapy Resources · page logic (no dependencies, no tracking)
   Nothing a visitor types or clicks is stored or sent anywhere.
   ============================================================= */
(function () {
  "use strict";
  var LIB = window.RESOURCE_LIBRARY;
  var params = new URLSearchParams(location.search);
  var PREVIEW = params.has("preview");

  var ICON = {
    pdf: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m0 0L5 7m3 3l3-3M3 12.5h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    print: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 6V2.5h7V6M4.5 11H3a1 1 0 01-1-1V7a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1h-1.5M4.5 9.5h7v4h-7z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    back: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    view: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function visible(r) { return r.status === "published" || (PREVIEW && r.status === "review"); }
  function cat(id) { return LIB.categories.find(function (c) { return c.id === id; }); }
  function q(p) { return PREVIEW ? p + (p.indexOf("?") > -1 ? "&" : "?") + "preview" : p; }

  document.querySelectorAll("[data-disclaimer]").forEach(function (el) { el.textContent = LIB.disclaimer; });
  if (PREVIEW) {
    var b = document.getElementById("preview-banner");
    if (b) b.hidden = false;
  }

  /* -----------------------------------------------------------
     Landing page
     ----------------------------------------------------------- */
  var listRoot = document.getElementById("library");
  if (listRoot) {
    var items = LIB.resources.filter(visible);
    var activeCat = "all";
    var input = document.getElementById("search");
    var count = document.getElementById("result-count");
    var filters = document.getElementById("filters");

    filters.innerHTML = '<button type="button" class="chip" data-cat="all" aria-pressed="true">All topics</button>' +
      LIB.categories.map(function (c) {
        return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="false">' + esc(c.title) + "</button>";
      }).join("");

    function card(r) {
      var c = cat(r.category);
      return '<li class="card" data-tone="' + c.tone + '">' +
        (r.status === "review" ? '<span class="badge badge-review">In review</span>' : "") +
        '<div class="card-thumb" aria-hidden="true"><img src="' + r.diagram + '" alt="" loading="lazy" width="640" height="320"></div>' +
        '<p class="card-tag">' + esc(c.title) + "</p>" +
        '<h3><a href="' + q("resource.html?id=" + r.id) + '">' + esc(r.title) + "</a></h3>" +
        '<p class="desc">' + esc(r.description) + "</p>" +
        '<div class="card-actions">' +
          '<a class="btn btn-primary" href="' + q("resource.html?id=" + r.id) + '" aria-label="View resource: ' + esc(r.title) + '">View Resource ' + ICON.view + "</a>" +
          '<a class="btn btn-secondary" href="pdf/' + r.id + '.pdf" download aria-label="Download PDF: ' + esc(r.title) + '">' + ICON.pdf + " PDF</a>" +
        "</div></li>";
    }

    function haystack(r) {
      return [r.title, r.description, r.framework, cat(r.category).title].concat(r.tags || []).join(" ").toLowerCase();
    }

    function render() {
      var term = input.value.trim().toLowerCase();
      var words = term.split(/\s+/).filter(Boolean);
      var shown = 0;
      var html = LIB.categories.map(function (c) {
        if (activeCat !== "all" && activeCat !== c.id) return "";
        var inCat = items.filter(function (r) { return r.category === c.id; });
        var matches = inCat.filter(function (r) {
          var h = haystack(r);
          return words.every(function (w) { return h.indexOf(w) > -1; });
        });
        shown += matches.length;
        if (words.length && !matches.length) return "";
        var body = matches.length
          ? '<ul class="cards">' + matches.map(card).join("") + "</ul>"
          : '<p class="in-development">Resources for this topic are in development.</p>';
        return '<section class="category" data-tone="' + c.tone + '" aria-labelledby="cat-' + c.id + '">' +
          '<div class="category-head"><span class="category-letter" aria-hidden="true">' + c.letter + '</span><h2 id="cat-' + c.id + '">' + esc(c.title) + "</h2></div>" +
          '<p class="category-blurb">' + esc(c.blurb) + "</p>" + body + "</section>";
      }).join("");
      if (words.length && !shown) {
        html = '<p class="no-results">No resources match “' + esc(term) + '” yet. Try a broader word, like “anxiety” or “couples.”</p>';
      }
      listRoot.innerHTML = html;
      count.textContent = words.length || activeCat !== "all"
        ? shown + (shown === 1 ? " resource" : " resources") + (words.length ? " found" : " in this category")
        : items.length + (items.length === 1 ? " resource" : " resources") + " available";
    }

    input.addEventListener("input", render);
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      activeCat = btn.dataset.cat;
      filters.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      render();
    });
    if (params.get("topic")) { input.value = params.get("topic"); }
    render();
  }

  /* -----------------------------------------------------------
     Resource page
     ----------------------------------------------------------- */
  var sheet = document.getElementById("sheet");
  if (sheet) {
    var id = params.get("id");
    var r = LIB.resources.find(function (x) { return x.id === id; });
    var back = document.getElementById("back-link");
    if (back) back.href = q("./");

    if (!r || !visible(r)) {
      document.title = "Resource not found · Therapy Resources";
      sheet.outerHTML = '<div class="not-found"><h1 style="font-family:var(--serif);font-weight:400">This resource isn\'t available yet.</h1><p><a href="' + q("./") + '">Browse all therapy resources</a></p></div>';
      document.querySelectorAll(".toolbar .actions").forEach(function (a) { a.hidden = true; });
      return;
    }

    var c = cat(r.category);
    document.title = r.title + " · Therapy Resources · Woohee (Elise) Kwak";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", r.description);
    sheet.dataset.tone = c.tone;

    var pdf = document.getElementById("pdf-link");
    pdf.href = "pdf/" + r.id + ".pdf";
    pdf.setAttribute("download", r.id + ".pdf");
    document.getElementById("print-btn").addEventListener("click", function () { window.print(); });

    function block(n, cls, title, inner) {
      return '<section class="block ' + cls + '" aria-labelledby="h-' + cls + '"><h2 id="h-' + cls + '"><span class="num" aria-hidden="true">' + n + "</span>" + title + "</h2>" + inner + "</section>";
    }
    var note = r.note ? '<p class="note' + (r.note.tone ? " " + r.note.tone : "") + '"><strong>' + esc(r.note.label) + (/[?.!]$/.test(r.note.label) ? "" : ".") + "</strong> " + esc(r.note.text) + "</p>" : "";

    sheet.innerHTML =
      '<header class="sheet-head"><div><p class="eyebrow">' + c.letter + " · " + esc(c.title) + "</p><h1>" + esc(r.title) + "</h1></div>" +
        '<p class="framework">' + esc(r.framework) + "</p></header>" +
      block(1, "what", "What is it?", "<p>" + esc(r.what) + "</p>") +
      block(2, "how", "How does it work?",
        '<figure class="figure"><div class="diagram" id="diagram"><img src="' + r.diagram + '" alt="' + esc(r.diagramAlt) + '" width="640" height="360"></div>' +
        "<figcaption>" + esc(r.diagramCaption) + "</figcaption></figure>") +
      block(3, "why", "Why does it happen?", r.why.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + note) +
      block(4, "help", "What can help?", '<ul class="helps">' + r.help.map(function (h) {
        return "<li><strong>" + esc(h.title) + "</strong><span>" + esc(h.text) + "</span></li>";
      }).join("") + "</ul>") +
      '<div class="pair">' +
        '<section class="reflect" aria-labelledby="h-reflect"><div class="block" style="margin:0"><h2 id="h-reflect"><span class="num" aria-hidden="true">5</span>Reflection question</h2></div><p>' + esc(r.reflection) + "</p></section>" +
        '<section class="takeaway" aria-labelledby="h-take"><div class="block" style="margin:0"><h2 id="h-take"><span class="num" aria-hidden="true">6</span>Key takeaway</h2></div><p>' + esc(r.takeaway) + "</p></section>" +
      "</div>" +
      block(7, "refs", "References", "<ol>" + r.references.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>") +
      '<footer class="sheet-foot"><p>' + esc(LIB.disclaimer) + "</p><p>Woohee (Elise) Kwak · wooheekwak.me/resources</p></footer>" +
      '<p class="review-meta">Last reviewed ' + esc(r.lastReviewed) + (r.status === "review" ? " · Draft in review" : "") + "</p>";

    /* Inline the SVG so it uses the page fonts and scales crisply.
       Falls back to the <img> already in place if this fails. */
    var holder = document.getElementById("diagram");
    if (window.fetch && location.protocol !== "file:") {
      fetch(r.diagram).then(function (res) { return res.ok ? res.text() : Promise.reject(); }).then(function (svgText) {
        holder.innerHTML = svgText;
        var svg = holder.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", r.diagramAlt);
        svg.removeAttribute("width"); svg.removeAttribute("height");
        document.documentElement.dataset.diagramReady = "1";
      }).catch(function () { document.documentElement.dataset.diagramReady = "1"; });
    } else {
      document.documentElement.dataset.diagramReady = "1";
    }
  }
})();
