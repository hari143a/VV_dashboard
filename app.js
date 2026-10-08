const areaData = {
  sourcing: [
    {
      name: "Sirius - Mono", status: "In Validation", description: "Sourcing validation for Sirius - Mono.", tests: 20, executed: 4, pass: 0, fail: 0, blocked: 0, cases: []
    },
    {
      name: "Ananya - Mono", status: "In Validation", description: "Sourcing validation for Ananya - Mono.", tests: 18, executed: 3, pass: 0, fail: 0, blocked: 0, cases: []
    }
  ],
  fieldIssues: [
    {
      name: "Aero Wing Disk", status: "Open", description: "Field issue validation covering corrective action effectiveness and repeatability.", tests: 112, executed: 0, pass: 0, fail: 0, blocked: 0, cases: [
        ["AWD-001", "Inspection", "Visual condition verification", "NOT EXECUTED", "High"], ["AWD-002", "Functional", "Disk operation after corrective action", "NOT EXECUTED", "High"], ["AWD-003", "Reliability", "Repeated operation verification", "NOT EXECUTED", "Medium"]]
    }
  ],
  quality: [
    {
      name: "PM250 Conduit Cable", status: "In Validation", description: "Quality verification of PM250 conduit cable assembly and installation condition.", tests: 180, executed: 54, pass: 50, fail: 4, blocked: 0, cases: [
        ["QC-001", "Inspection", "Cable routing inspection", "PASS", "High"], ["QC-002", "Mechanical", "Bend and strain verification", "PASS", "Medium"], ["QC-003", "Electrical", "Continuity verification", "PASS", "High"], ["QC-004", "Environmental", "Protection / sealing verification", "FAIL", "High"]]
    }
  ],
  rnd: [
    {
      name: "Lump Cutter Andon Lights", status: "Validation Complete", description: "Engineering validation of Lump Cutter Andon Lights.", tests: 210, executed: 210, pass: 208, fail: 2, blocked: 0, cases: [
        ["LC-001", "Functional", "Light operation verification", "PASS", "High"], ["LC-002", "Electrical", "Power consumption", "PASS", "Medium"], ["LC-003", "Safety", "Visibility at distance", "PASS", "High"]]
    },
    {
      name: "Hopper Top & Bottom Lid", status: "In Validation", description: "Engineering validation of Hopper Top & Bottom Lid mechanics and fitment.", tests: 164, executed: 123, pass: 118, fail: 5, blocked: 0, cases: [
        ["HL-001", "Mechanical", "Lid fitment", "PASS", "High"], ["HL-002", "Functional", "Opening and closing mechanism", "FAIL", "High"], ["HL-003", "Reliability", "Hinge durability", "NOT EXECUTED", "Medium"]]
    }
  ],
  thirdParty: [
    {
      name: "IP Rating Test", status: "In Validation", description: "Third-party validation of IP rating compliance.", tests: 140, executed: 70, pass: 65, fail: 5, blocked: 0, cases: [
        ["IP-001", "Environmental", "Water ingress test", "PASS", "High"], ["IP-002", "Environmental", "Dust ingress test", "FAIL", "High"], ["IP-003", "Mechanical", "Seal integrity", "NOT EXECUTED", "Medium"]]
    }
  ],
  nit: [
    {
      name: "Motor Test Bench", status: "In Validation", description: "Validation of Motor Test Bench.", tests: 135, executed: 54, pass: 50, fail: 4, blocked: 0, cases: [
        ["MTB-001", "Functional", "Motor operation", "PASS", "High"], ["MTB-002", "Electrical", "Power consumption", "PASS", "Medium"], ["MTB-003", "Safety", "Emergency stop", "FAIL", "High"]]
    },
    {
      name: "Environment Testing", status: "In Validation", description: "Validation of Environment Testing.", tests: 125, executed: 50, pass: 48, fail: 2, blocked: 0, cases: [
        ["ET-001", "Environmental", "Temperature test", "PASS", "High"], ["ET-002", "Environmental", "Humidity test", "FAIL", "High"], ["ET-003", "Environmental", "Vibration test", "NOT EXECUTED", "Medium"]]
    }
  ]
};

const products = [
  {
    id: "pm250-max", name: "PM 250 Max", status: "In Validation", description: "Validation program for PM 250 Max feeding platform and associated controls.", tests: 0, executed: 0, pass: 0, fail: 0, blocked: 0, cases: []
  },
  {
    id: "nursery-feeder", name: "Nursery Feeder", status: "In Validation", description: "Nursery Feeder validation covering movement, feeding, safety, reliability and serviceability.", tests: 0, executed: 0, pass: 0, fail: 0, blocked: 0, cases: []
  },
  {
    id: "fish-feeder", name: "Fish Feeder", status: "Open", description: "Validation dashboard for Fish Feeder monitoring and pond data workflows.", tests: 0, executed: 0, pass: 0, fail: 0, blocked: 0, cases: []
  }
];



const $ = id => document.getElementById(id), pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const kpi = (l, v, n = "") => { const icons = { "Validation Items": "▤", "Test Cases": "☷", "Executed": "▶", "Passed": "✓", "Failed": "×", "Overall Pass Rate": "◔", "Total Test Cases": "☷", "Pass Rate": "◔", "Total": "▤", "Open": "☷", "In Progress": '<svg class="progress-status-icon" viewBox="0 0 24 24" aria-hidden="true"><path class="progress-status-track" d="M3 12h18"/><path class="progress-status-line" d="M3 12h18"/></svg>', "Parked": "Ⅱ", "Completed": "✓", "Rejected": "×", "Blocked": "!" }; const tone = { "Passed": "green", "Failed": "red", "Executed": "cyan", "Validation Items": "blue", "Test Cases": "green", "Overall Pass Rate": "blue", "Blocked": "purple", "Total Test Cases": "green", "Pass Rate": "blue", "Total": "blue", "Open": "gray", "In Progress": "blue", "Parked": "purple", "Completed": "green", "Rejected": "red" }; return `<div class="kpi"><div class="kpi-icon ${tone[l] || "blue"}">${icons[l] || "•"}</div><div class="kpi-content"><div class="kpi-label">${l}</div><div class="kpi-value">${v}</div>${n ? `<div class="kpi-note">${n}</div>` : ""}</div></div>` };
const badge = s => {
  const label = String(s ?? "");
  const statusClass = label.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `<span class="status status-${statusClass}">${escapeHtml(label)}</span>`;
};

let nurseryFeederWorkbookPromise = null;
let nurseryFeederWorkbookState = "loading";
let nurseryFeederWorkbookError = "";
let pm250WorkbookPromise = null;
let pm250WorkbookState = "loading";
let pm250WorkbookError = "";
let fishFeederWorkbookPromise = null;
let fishFeederWorkbookState = "loading";
let fishFeederWorkbookError = "";

function testCaseFields(testCase) {
  if (testCase.length <= 5) {
    return {
      id: testCase[0],
      category: testCase[1],
      scenario: testCase[2],
      module: "—",
      status: testCase[3] || "NOT EXECUTED",
      priority: testCase[4] || "—",
      tester: "—",
      searchText: testCase.join(" ")
    };
  }
  return {
    id: testCase[0],
    category: testCase[1],
    scenario: testCase[2],
    module: testCase[3],
    status: testCase[4] || "NOT EXECUTED",
    priority: testCase[5] || "—",
    tester: testCase[6] || "—",
    searchText: testCase.join(" ")
  };
}

function isCountedAsExecuted(status) {
  const value = String(status || "").trim().toUpperCase();
  return value !== "" && !["NOT EXECUTED", "NOT RUN", "BLOCKED"].includes(value);
}

function sheetCategoryName(sheetName) {
  const cleaned = sheetName
    .replace(/_test_cases?$/i, "")
    .replace(/_test$/i, "")
    .replace(/_/g, " ")
    .trim()
    .replace(/\b\w/g, letter => letter.toUpperCase());
  const labels = {
    "Basic Functional": "Basic Functionality",
    "Ecudor Schedule": "Ecuador Schedule",
    "Mechnical": "Mechanical"
  };
  return labels[cleaned] || cleaned;
}

function parseTestCaseWorkbook(workbook, excludedSheets = [], requiredSheetSuffix = "", includedSheets = [], options = {}) {
  const excluded = new Set(excludedSheets.map(name => name.trim().toLowerCase()));
  const included = new Set(includedSheets.map(name => name.trim().toLowerCase()));
  const sheets = workbook.SheetNames.filter(name => {
    const normalizedName = name.trim().toLowerCase();
    return !excluded.has(normalizedName)
      && (!requiredSheetSuffix || normalizedName.endsWith(requiredSheetSuffix.toLowerCase()) || included.has(normalizedName));
  });
  const cases = [];
  const seenCaseIds = new Set();
  const normalizeHeader = value => String(value).trim().toLowerCase().replace(/[^a-z0-9]/g, "");

  sheets.forEach(sheetName => {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
      defval: "",
      blankrows: false
    });
    const headerRowIndex = rows.findIndex(row => row.some(value => ["tcid", "testcaseid"].includes(normalizeHeader(value))));
    if (headerRowIndex < 0) throw new Error(`The "${sheetName}" sheet is missing a test case ID header.`);

    const headers = rows[headerRowIndex].map(normalizeHeader);
    const column = (...names) => {
      for (const name of names) {
        const index = headers.indexOf(normalizeHeader(name));
        if (index >= 0) return index;
      }
      return -1;
    };
    const tcIdColumn = column("TC ID", "Test Case ID");
    if (tcIdColumn < 0) throw new Error(`The "${sheetName}" sheet is missing a test case ID header.`);
    const categoryColumn = column("Category");
    const sheetCategory = sheetCategoryName(sheetName);
    rows.slice(headerRowIndex + 1).forEach(row => {
      const id = String(row[tcIdColumn] ?? "").trim();
      if (!id) return;
      const normalizedId = id.toUpperCase();
      if (options.deduplicateCaseIds && seenCaseIds.has(normalizedId)) return;
      seenCaseIds.add(normalizedId);

      const value = (...names) => {
        const index = column(...names);
        return index < 0 ? "" : String(row[index] ?? "").trim();
      };
      const category = options.useRowCategory && categoryColumn >= 0 ? value("Category") || sheetCategory : sheetCategory;
      const status = value("Status").toUpperCase() || "NOT EXECUTED";
      cases.push([
        id,
        category,
        value("Test Scenario"),
        value("Test Place", "Place of testing"),
        status,
        value("Priority"),
        value("Tester", "Tester's name"),
        ...row.map(cell => String(cell ?? "").trim())
      ]);
    });
  });

  if (!sheets.length) throw new Error("The workbook does not contain any test-category sheets.");
  if (!cases.length) throw new Error("No test cases with a TC ID were found in the workbook.");
  return cases;
}

async function loadNurseryFeederWorkbook() {
  if (nurseryFeederWorkbookPromise) return nurseryFeederWorkbookPromise;

  nurseryFeederWorkbookPromise = (async () => {
    try {
      if (typeof XLSX === "undefined") throw new Error("The Excel workbook reader is unavailable.");

      const response = await fetch("excel files/Verifications & validations/Products/Nursery_Feeder_Test_Cases.xlsx");
      if (!response.ok) throw new Error(`Workbook request failed with HTTP ${response.status}.`);

      const workbook = XLSX.read(await response.arrayBuffer(), { type: "array" });
      const cases = parseTestCaseWorkbook(workbook, [], "_test_cases", ["Basic_Functional_test"]);

      const nurseryFeeder = products.find(product => product.id === "nursery-feeder");
      nurseryFeeder.cases = cases;
      nurseryFeeder.tests = cases.length;
      nurseryFeeder.executed = cases.filter(testCase => isCountedAsExecuted(testCaseFields(testCase).status)).length;
      nurseryFeeder.pass = cases.filter(testCase => ["PASS", "PASSED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      nurseryFeeder.fail = cases.filter(testCase => ["FAIL", "FAILED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      nurseryFeeder.blocked = cases.filter(testCase => testCaseFields(testCase).status.toUpperCase() === "BLOCKED").length;
      nurseryFeederWorkbookState = "loaded";
      refreshNurseryFeederViews(nurseryFeeder);
    } catch (error) {
      nurseryFeederWorkbookState = "error";
      nurseryFeederWorkbookError = error.message;
      console.error("Unable to load Nursery Feeder test cases from Nursery_Feeder_Test_Cases.xlsx.", error);
      refreshNurseryFeederViews(products.find(product => product.id === "nursery-feeder"));
    }
  })();

  return nurseryFeederWorkbookPromise;
}

async function loadPM250Workbook() {
  if (pm250WorkbookPromise) return pm250WorkbookPromise;

  pm250WorkbookPromise = (async () => {
    try {
      if (typeof XLSX === "undefined") throw new Error("The Excel workbook reader is unavailable.");

      const response = await fetch("excel files/Verifications & validations/Products/PM250_Max_Test_Cases.xlsx");
      if (!response.ok) throw new Error(`Workbook request failed with HTTP ${response.status}.`);

      const workbook = XLSX.read(await response.arrayBuffer(), { type: "array" });
      const cases = parseTestCaseWorkbook(workbook);
      const pm250 = products.find(product => product.id === "pm250-max");
      pm250.cases = cases;
      pm250.tests = cases.length;
      pm250.executed = cases.filter(testCase => isCountedAsExecuted(testCaseFields(testCase).status)).length;
      pm250.pass = cases.filter(testCase => ["PASS", "PASSED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      pm250.fail = cases.filter(testCase => ["FAIL", "FAILED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      pm250.blocked = cases.filter(testCase => testCaseFields(testCase).status.toUpperCase() === "BLOCKED").length;
      pm250WorkbookState = "loaded";
      refreshPM250Views(pm250);
    } catch (error) {
      pm250WorkbookState = "error";
      pm250WorkbookError = error.message;
      console.error("Unable to load PM 250 Max test cases from its workbook.", error);
      refreshPM250Views(products.find(product => product.id === "pm250-max"));
    }
  })();

  return pm250WorkbookPromise;
}

async function loadFishFeederWorkbook() {
  if (fishFeederWorkbookPromise) return fishFeederWorkbookPromise;

  fishFeederWorkbookPromise = (async () => {
    try {
      if (typeof XLSX === "undefined") throw new Error("The Excel workbook reader is unavailable.");

      const response = await fetch("excel files/Verifications & validations/Products/Fish_Feeder_Test_Cases.xlsx");
      if (!response.ok) throw new Error(`Workbook request failed with HTTP ${response.status}.`);

      const workbook = XLSX.read(await response.arrayBuffer(), { type: "array" });
      const cases = parseTestCaseWorkbook(workbook, ["Tests_Info", "defect tracker"], "", [], {
        deduplicateCaseIds: true
      });
      const fishFeeder = products.find(product => product.id === "fish-feeder");
      fishFeeder.cases = cases;
      fishFeeder.tests = cases.length;
      fishFeeder.executed = cases.filter(testCase => isCountedAsExecuted(testCaseFields(testCase).status)).length;
      fishFeeder.pass = cases.filter(testCase => ["PASS", "PASSED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      fishFeeder.fail = cases.filter(testCase => ["FAIL", "FAILED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
      fishFeeder.blocked = cases.filter(testCase => testCaseFields(testCase).status.toUpperCase() === "BLOCKED").length;
      fishFeederWorkbookState = "loaded";
      refreshFishFeederViews(fishFeeder);
    } catch (error) {
      fishFeederWorkbookState = "error";
      fishFeederWorkbookError = error.message;
      console.error("Unable to load Fish Feeder test cases from Fish_Feeder_Test_Cases.xlsx.", error);
      refreshFishFeederViews(products.find(product => product.id === "fish-feeder"));
    }
  })();

  return fishFeederWorkbookPromise;
}

function refreshPM250Views(pm250) {
  renderValidationPortfolioKpis();
  renderExpandableList(products, "productsExpandableList", null, "productsStatusSummary");
  renderPortfolioCharts();
  if ($("productsView")?.classList.contains("active")) renderProductsPage();
  if (selectedProduct === pm250 && $("productView")?.classList.contains("active")) {
    renderProductValidationData(pm250);
  }
}

function refreshNurseryFeederViews(nurseryFeeder) {
  renderValidationPortfolioKpis();
  renderExpandableList(products, "productsExpandableList", null, "productsStatusSummary");
  renderPortfolioCharts();
  if ($("productsView")?.classList.contains("active")) renderProductsPage();
  if (selectedProduct === nurseryFeeder && $("productView")?.classList.contains("active")) {
    renderProductValidationData(nurseryFeeder);
  }
}

function refreshFishFeederViews(fishFeeder) {
  renderValidationPortfolioKpis();
  renderExpandableList(products, "productsExpandableList", null, "productsStatusSummary");
  renderPortfolioCharts();
  if ($("productsView")?.classList.contains("active")) renderProductsPage();
  if (selectedProduct === fishFeeder && $("productView")?.classList.contains("active")) {
    renderProductValidationData(fishFeeder);
  }
}

function metrics(item) {
  const cases = item.cases || [];
  const tests = item.tests ?? cases.length;
  const executed = item.executed ?? cases.filter(testCase => isCountedAsExecuted(testCaseFields(testCase).status)).length;
  const pass = item.pass ?? cases.filter(testCase => ["PASS", "PASSED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
  const fail = item.fail ?? cases.filter(testCase => ["FAIL", "FAILED"].includes(testCaseFields(testCase).status.toUpperCase())).length;
  const blocked = item.blocked ?? cases.filter(testCase => testCaseFields(testCase).status.toUpperCase() === "BLOCKED").length;
  return { tests, executed, pass, fail, blocked, progress: pct(executed, tests), passRate: pct(pass, executed) };
}
function allItems() {
  return [
    ...products.map(p => ({ area: "Products", id: p.id, name: p.name, status: p.status, cases: p.cases, tests: p.tests, executed: p.executed, pass: p.pass, fail: p.fail, blocked: p.blocked })),
    ...Object.entries(areaData).flatMap(([area, items]) => items.map((x, i) => ({ ...x, area: area === "fieldIssues" ? "Field Issues" : area === "rnd" ? "R&D" : area === "thirdParty" ? "3rd Party" : area[0].toUpperCase() + area.slice(1), id: `${area}-${i}` })))
  ];
}
function overall() {
  return allItems().reduce((a, x) => { const m = metrics(x); a.items++; a.tests += m.tests; a.executed += m.executed; a.pass += m.pass; a.fail += m.fail; a.blocked += m.blocked; return a }, { items: 0, tests: 0, executed: 0, pass: 0, fail: 0, blocked: 0 });
}
function renderOverview() {
  renderValidationPortfolioKpis();
  renderExpandableList(products, "productsExpandableList", null, "productsStatusSummary");
  [
    "productsSectionToggle",
    "sourcingSectionToggle",
    "fieldIssuesSectionToggle",
    "qualitySectionToggle",
    "rndSectionToggle",
    "thirdPartySectionToggle",
    "nitSectionToggle",
    "peProjectSectionToggle",
    "factoryHandoverPortfolioToggle"
  ].forEach(bindSectionAccordion);
  renderExpandableList(areaData.sourcing, "sourcingExpandableList", null, "sourcingStatusSummary");
  renderExpandableList(areaData.fieldIssues, "fieldIssuesExpandableList", null, "fieldIssuesStatusSummary");
  renderExpandableList(areaData.quality, "qualityExpandableList", null, "qualityStatusSummary");
  renderExpandableList(areaData.rnd, "rndExpandableList", null, "rndStatusSummary");
  renderExpandableList(areaData.thirdParty, "thirdPartyExpandableList", null, "thirdPartyStatusSummary");
  renderExpandableList(areaData.nit, "nitExpandableList", null, "nitStatusSummary");
  renderFactoryHandoverPortfolioTable();
  renderPortfolioCharts();
  // Auto-load ALL Excel projects from projectsConfig so PE chart renders on the overview page.
  // Adding a new project to projectsConfig is all that's needed — it loads automatically here.
  Object.keys(projectsConfig).forEach(key => {
    loadExcelProject(key).then(() => {
      renderPEOverviewChart();
      renderPEPortfolioTable();
    });
  });
}

function renderValidationPortfolioKpis() {
  const kpiContainer = $("validationPortfolioKpis");
  if (!kpiContainer) return;

  const items = allItems();
  const summary = items.reduce((counts, item) => {
    const status = (item.status || "").toLowerCase();
    counts.total++;
    if (status.includes("open")) counts.open++;
    else if (status.includes("progress") || status.includes("in validation")) counts.inProgress++;
    else if (status.includes("park")) counts.parked++;
    else if (status.includes("complete")) counts.completed++;
    else if (status.includes("reject")) counts.rejected++;
    return counts;
  }, { total: 0, open: 0, inProgress: 0, parked: 0, completed: 0, rejected: 0 });

  kpiContainer.innerHTML = [
    kpi("Total", summary.total),
    kpi("Open", summary.open),
    kpi("In Progress", summary.inProgress),
    kpi("Parked", summary.parked),
    kpi("Completed", summary.completed),
    kpi("Rejected", summary.rejected)
  ].join("");
}

function bindSectionAccordion(toggleId) {
  const toggle = $(toggleId);
  if (!toggle) return;

  toggle.onclick = () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    if (expanded) {
      const view = toggle.closest(".view");
      view?.querySelectorAll('.section-accordion-toggle[aria-expanded="true"]').forEach(openToggle => {
        if (openToggle === toggle) return;
        openToggle.setAttribute("aria-expanded", "false");
        openToggle.closest(".panel")?.classList.remove("is-expanded");
      });
    }
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.closest(".panel").classList.toggle("is-expanded", expanded);
  };
}

function renderProductsPage() {
  $("productsPageCount").textContent = `${products.length} products`;
  const tableBody = $("productsPageTable");
  tableBody.innerHTML = products.map(x => {
    const m = metrics(x);
    return `<tr class="product-table-row" data-product="${x.id}"><td><button class="product-link" type="button">${x.name}</button></td><td>${m.tests}</td><td>${m.executed}</td><td>${m.pass}</td><td>${m.fail}</td><td><div class="progress-track"><div class="progress-fill" style="width:${m.progress}%"></div></div><span class="progress-text">${m.progress}%</span></td><td>${badge(x.status)}</td></tr>`;
  }).join("");
  tableBody.querySelectorAll(".product-table-row").forEach(row => {
    row.addEventListener("click", () => showProduct(row.dataset.product));
  });
}

function renderExpandableList(items, containerId, countId, summaryId = null) {
  let total = items.length, open = 0, inProgress = 0, parked = 0, complete = 0, rejects = 0;
  items.forEach(x => {
    let s = (x.status || "").toLowerCase();
    if (s.includes("open")) open++;
    else if (s.includes("progress") || s.includes("in validation")) inProgress++;
    else if (s.includes("park")) parked++;
    else if (s.includes("complete")) complete++;
    else if (s.includes("reject")) rejects++;
  });

  if (countId && $(countId)) {
    $(countId).innerHTML = `<span style="font-size:12px; color:#6b7280; font-weight:normal;">Total: <strong style="color:#111827">${total}</strong> &nbsp;|&nbsp; Open: <strong style="color:#111827">${open}</strong> &nbsp;|&nbsp; In Progress: <strong style="color:#1769e0">${inProgress}</strong> &nbsp;|&nbsp; Parked: <strong style="color:#7656ad">${parked}</strong> &nbsp;|&nbsp; Completed: <strong style="color:var(--success)">${complete}</strong> &nbsp;|&nbsp; Rejected: <strong style="color:var(--danger)">${rejects}</strong></span>`;
  }

  const summaryEl = summaryId ? $(summaryId) : null;
  if (summaryEl) {
    summaryEl.innerHTML = `<table class="status-summary-table" aria-label="Status summary">
      <thead><tr><th scope="col">Total</th><th class="status-summary-open" scope="col">Open</th><th class="status-summary-progress" scope="col">In Progress</th><th class="status-summary-parked" scope="col">Parked</th><th class="status-summary-completed" scope="col">Completed</th><th class="status-summary-rejected" scope="col">Rejected</th></tr></thead>
      <tbody><tr><td>${total}</td><td class="status-summary-open">${open}</td><td class="status-summary-progress">${inProgress}</td><td class="status-summary-parked">${parked}</td><td class="status-summary-completed">${complete}</td><td class="status-summary-rejected">${rejects}</td></tr></tbody>
    </table>`;
  }

  const listEl = $(containerId);
  if (!listEl) return;
  
  const getBadgeClass = (s) => {
    s = s.toLowerCase();
    if (s.includes("progress") || s.includes("validation")) return "in-validation";
    if (s.includes("complete") || s.includes("pass")) return "completed";
    if (s.includes("reject") || s.includes("fail")) return "rejected";
    return "open";
  };

  if (summaryId) {
    const isProductsList = containerId === "productsExpandableList";
    const portfolioAreas = {
      sourcingExpandableList: "Sourcing",
      fieldIssuesExpandableList: "Field Issues",
      qualityExpandableList: "Quality",
      rndExpandableList: "R&D",
      thirdPartyExpandableList: "3rd Party",
      nitExpandableList: "NIT"
    };
    const itemArea = portfolioAreas[containerId];
    listEl.innerHTML = `<table class="portfolio-items-table${isProductsList ? " products-data-table" : ""}">
      <thead>
        <tr>
          <th scope="col">${isProductsList ? "Product" : "Item"}</th>
          <th scope="col">Total TC</th>
          <th scope="col">Executed</th>
          <th scope="col">Pass</th>
          <th scope="col">Fail</th>
          <th scope="col">Progress</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((x, index) => {
      const m = metrics(x);
      const itemName = isProductsList || itemArea
        ? `<button class="product-link" type="button" data-item-index="${index}"${isProductsList ? ` data-product="${x.id}"` : ""}>${x.name}</button>`
        : x.name;
      return `<tr>
          <td class="portfolio-item-name">${itemName}</td>
          <td>${m.tests}</td>
          <td>${m.executed}</td>
          <td>${m.pass}</td>
          <td>${m.fail}</td>
          <td>
            <div class="products-data-progress">
              <div class="progress-track-modern"><div class="progress-fill-modern" style="width:${m.progress}%"></div></div>
              <span class="progress-text-modern">${m.progress}%</span>
            </div>
          </td>
          <td><span class="status-badge ${getBadgeClass(x.status)}">${x.status}</span></td>
        </tr>`;
    }).join("")}
      </tbody>
    </table>`;
    if (isProductsList || itemArea) {
      listEl.querySelectorAll(".product-link").forEach(button => {
        button.addEventListener("click", () => {
          if (isProductsList) showProduct(button.dataset.product, true);
          else showAreaItem(itemArea, Number(button.dataset.itemIndex), true);
        });
      });
    }
    return;
  }
  
  listEl.innerHTML = items.map((x, i) => {
    const m = metrics(x);
    const badgeClass = getBadgeClass(x.status);
    return `<div class="expandable-item" id="exp-item-${containerId}-${i}">
      <div class="expandable-header" onclick="toggleExpand('${containerId}', ${i})">
        <span class="expandable-icon">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
        ${x.name}
      </div>
      <div class="expandable-content">
        <div class="expandable-content-inner">
          <table class="expandable-table">
            <thead>
              <tr>
                <th style="width:14%">Total TC</th>
                <th style="width:14%">Executed</th>
                <th style="width:14%">Pass</th>
                <th style="width:14%">Fail</th>
                <th style="width:25%">Progress</th>
                <th style="width:19%">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${m.tests}</td>
                <td>${m.executed}</td>
                <td>${m.pass}</td>
                <td>${m.fail}</td>
                <td>
                  <div class="progress-container">
                    <div class="progress-track-modern"><div class="progress-fill-modern" style="width:${m.progress}%"></div></div>
                    <span class="progress-text-modern">${m.progress}%</span>
                  </div>
                </td>
                <td><span class="status-badge ${badgeClass}">${x.status}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
  }).join("");
}

window.toggleExpand = function(containerId, index) {
  const allItems = document.querySelectorAll('#' + containerId + ' .expandable-item');
  allItems.forEach((item, i) => {
    if (i === index) {
      item.classList.toggle('expanded');
    } else {
      item.classList.remove('expanded');
    }
  });
};

function renderPortfolioCharts() {
  const items = allItems();
  let open = 0, inProgress = 0, complete = 0, rejects = 0;
  items.forEach(x => {
    let st = (x.status || "").toLowerCase();
    if (st.includes("open")) open++;
    else if (st.includes("progress") || st.includes("in validation")) inProgress++;
    else if (st.includes("complete")) complete++;
    else if (st.includes("reject")) rejects++;
  });

  if (window.statusChart) statusChart.destroy();
  statusChart = new Chart($("portfolioStatusChart"), { 
    type: "doughnut", 
    data: { 
      labels: ["Open", "In Progress", "Completed", "Rejected"], 
      datasets: [{ 
        data: [open, inProgress, complete, rejects],
        backgroundColor: ["#6b7280", "#3b82f6", "#10b981", "#ef4444"]
      }] 
    }, 
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } } 
  });
}
window.peStatusChart = null;
function renderPEOverviewChart() {
  // Auto-detect ALL projects from projectsConfig — adding a new project is enough
  const projectKeys = Object.keys(projectsConfig);
  const anyLoaded = projectKeys.some(k => loadedProjectsData[k]);

  if (!anyLoaded) return;

  const loader = $("peLoadingIndicator");
  if (loader) loader.style.display = "none";

  // Update subtitle dynamically with all project names
  const peSubtitle = $("peSubtitle");
  if (peSubtitle) {
    const names = projectKeys.map(k => projectsConfig[k].name).join(' & ');
    peSubtitle.textContent = `Part Qualification & Factory Handover status.`;
  }

  const stages = {
    "Not Started": 0,
    "Design Readiness": 0,
    "Part Qualification": 0,
    "Sourcing Readiness": 0,
    "Supplier Qualification": 0,
    "Sample / Lot Procurement": 0,
    "Factory Handover": 0
  };

  // Gather parts from ALL loaded projects automatically
  const allParts = projectKeys.flatMap(k => (loadedProjectsData[k]?.parts || []));

  allParts.forEach(p => {
    if (p.currentStage && stages[p.currentStage] !== undefined) {
      stages[p.currentStage]++;
    }
  });

  const labels = Object.keys(stages);
  const data = Object.values(stages);

  if (window.peStatusChart) window.peStatusChart.destroy();
  window.peStatusChart = new Chart($("peStatusChart"), {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#e5e7eb", // Not Started
          "#fcd34d", // Design
          "#fb923c", // Part Qual
          "#60a5fa", // Sourcing
          "#818cf8", // Supplier Qual
          "#c084fc", // Sample
          "#34d399"  // Factory Handover
        ]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 10 }, padding: 10 } } } }
  });
}
function renderPEPortfolioTable() {
  const projectKeys = Object.keys(projectsConfig);
  const listEl = $("peProjectExpandableList");
  const summaryEl = $("peProjectStatusSummary");
  if (!listEl) return;

  const loaded = projectKeys.filter(k => loadedProjectsData[k] && !loadedProjectsData[k].error);
  if (loaded.length === 0) return;

  // Pre-compute project-level stats so they serve both the summary AND the accordion rows
  const projectStats = loaded.map(key => {
    const pd = loadedProjectsData[key];
    const parts = pd.parts || [];
    const total   = parts.length;
    const design  = parts.filter(p => p.designDone).length;
    const pq      = parts.filter(p => p.pqDone).length;
    const src     = parts.filter(p => p.srcDone).length;
    const sq      = parts.filter(p => p.sqDone).length;
    const samp    = parts.filter(p => p.sampDone).length;
    const fac     = parts.filter(p => p.facDone).length;
    const progress = total > 0 ? Math.round((design + pq + src + sq + samp + fac) / (total * 6) * 100) : 0;
    return { key, pd, total, design, pq, src, sq, samp, fac, progress };
  });

  // Classify each project for the status summary
  let openCount = 0, inProgressCount = 0, parkedCount = 0, completedCount = 0, rejectedCount = 0;
  projectStats.forEach(({ progress }) => {
    if (progress === 100)   completedCount++;
    else if (progress > 0)  inProgressCount++;
    else                    openCount++;
    // Future: increment rejectedCount when a rejected field is available in the data
  });

  if (summaryEl) {
    summaryEl.innerHTML = `<table class="status-summary-table" aria-label="Part Qualification project status summary">
      <thead><tr><th scope="col">Total</th><th class="status-summary-open" scope="col">Open</th><th class="status-summary-progress" scope="col">In Progress</th><th class="status-summary-parked" scope="col">Parked</th><th class="status-summary-completed" scope="col">Completed</th><th class="status-summary-rejected" scope="col">Rejected</th></tr></thead>
      <tbody><tr><td>${loaded.length}</td><td class="status-summary-open">${openCount}</td><td class="status-summary-progress">${inProgressCount}</td><td class="status-summary-parked">${parkedCount}</td><td class="status-summary-completed">${completedCount}</td><td class="status-summary-rejected">${rejectedCount}</td></tr></tbody>
    </table>`;
  }

  listEl.innerHTML = `<table class="portfolio-items-table pe-projects-table">
    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col">Total Parts</th>
        <th scope="col">Design</th>
        <th scope="col">Part Qual.</th>
        <th scope="col">Sourcing</th>
        <th scope="col">Supplier Qual.</th>
        <th scope="col">Sample</th>
        <th scope="col">Factory Handover</th>
        <th scope="col">Progress</th>
      </tr>
    </thead>
    <tbody>
      ${projectStats.map(({ key, pd, total, design, pq, src, sq, samp, fac, progress }) => `<tr>
        <td class="portfolio-item-name"><button class="product-link pe-project-link" type="button" data-project-key="${key}">${pd.config.name}</button></td>
        <td>${total}</td>
        <td>${design}</td>
        <td>${pq}</td>
        <td>${src}</td>
        <td>${sq}</td>
        <td>${samp}</td>
        <td>${fac}</td>
        <td><div class="products-data-progress">
          <div class="progress-track-modern"><div class="progress-fill-modern" style="width:${progress}%"></div></div>
          <span class="progress-text-modern">${progress}%</span>
        </div></td>
      </tr>`).join("")}
    </tbody>
  </table>`;
  listEl.querySelectorAll(".pe-project-link").forEach(button => {
    button.addEventListener("click", () => openPortfolioProjectDetail(button.dataset.projectKey));
  });
}
let selectedProduct = null, categoryChart;
function showProduct(id, returnToPortfolio = false) {
  const p = products.find(x => x.id === id); if (!p) return;
  showDetail(p, "Products", p.name, returnToPortfolio);
}
function showAreaItem(area, index, returnToPortfolio = false) {
  const map = { "Sourcing": "sourcing", "Field Issues": "fieldIssues", "Quality": "quality", "R&D": "rnd", "3rd Party": "thirdParty", "NIT": "nit" };
  const item = areaData[map[area]][index]; if (!item) return;
  showDetail(item, area, item.name, returnToPortfolio);
}
function showDetail(item, area, name, returnToPortfolio = false) {
  selectedProduct = item; showView("product");
  const viewMap = { "Products": "products", "Sourcing": "sourcing", "Field Issues": "fieldIssues", "Quality": "quality", "R&D": "rnd", "3rd Party": "thirdParty", "NIT": "nit" };
  $("backToParent").textContent = returnToPortfolio ? "← Back to Validation Portfolio" : `← Back to ${area}`;
  $("backToParent").onclick = () => {
    if (returnToPortfolio) {
      showView("validationPortfolio");
      $("breadcrumb").textContent = "Dashboard / Validation Portfolio";
      $("pageTitle").textContent = "Validation Portfolio";
      return;
    }
    const v = viewMap[area];
    if (v) document.querySelector(`.nav-item[data-view="${v}"]`)?.click();
  };
  $("breadcrumb").textContent = `Dashboard / ${area} / ${name}`; $("pageTitle").textContent = name;
  $("productTitle").textContent = name;
  $("productStatus").textContent = item.status || "In Validation";
  renderProductValidationData(item);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProductValidationData(item) {
  const m = metrics(item);
  $("productKpis").innerHTML = [kpi("Total Test Cases", m.tests, "Planned"), kpi("Executed", m.executed, `${m.progress}% execution`), kpi("Passed", m.pass, "Executed"), kpi("Failed", m.fail, "Attention"), kpi("Blocked", m.blocked, "Blocked")].join("");
  const getColor = (v) => v <= 20 ? "var(--danger)" : v <= 79 ? "#f97316" : "var(--success)";
  $("executionPercent").textContent = m.progress + "%"; $("executionBar").style.width = m.progress + "%";
  $("executionBar").style.background = getColor(m.progress);
  setupFiltersForItem(item); renderCases(item.cases || []);
}
function setupFiltersForItem(item) {
  const cases = item.cases || [];
  $("categoryFilter").innerHTML = '<option value="">All Categories</option>' + [...new Set(cases.map(testCase => testCaseFields(testCase).category))].map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  $("statusFilter").innerHTML = '<option value="">All Statuses</option>' + [...new Set(cases.map(testCase => testCaseFields(testCase).status))].map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  $("priorityFilter").innerHTML = '<option value="">All Priorities</option>' + [...new Set(cases.map(testCase => testCaseFields(testCase).priority))].map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  ["testSearch", "categoryFilter", "statusFilter", "priorityFilter"].forEach(id => $(id).oninput = filterCases);
  $("testSearch").value = ""; $("categoryFilter").value = ""; $("statusFilter").value = ""; $("priorityFilter").value = "";
}
function filterCases() {
  if (!selectedProduct) return;
  const cases = selectedProduct.cases || [], q = $("testSearch").value.toLowerCase(), cat = $("categoryFilter").value, st = $("statusFilter").value, pri = $("priorityFilter").value;
  const filteredCases = cases.filter(testCase => {
    const fields = testCaseFields(testCase);
    return (!q || fields.searchText.toLowerCase().includes(q)) && (!cat || fields.category === cat) && (!st || fields.status === st) && (!pri || fields.priority === pri);
  });
  const workbookState = selectedProduct.id === "pm250-max" ? pm250WorkbookState
    : selectedProduct.id === "nursery-feeder" ? nurseryFeederWorkbookState
      : selectedProduct.id === "fish-feeder" ? fishFeederWorkbookState : "";
  if (workbookState === "loaded") {
    renderProductTestCaseTable(filteredCases);
    $("resultCount").textContent = filteredCases.length === cases.length
      ? `${cases.length} test cases`
      : `${filteredCases.length} of ${cases.length} test cases`;
    return;
  }
  renderCases(filteredCases);
}
function renderCases(cases) {
  const isWorkbookProduct = ["pm250-max", "nursery-feeder", "fish-feeder"].includes(selectedProduct?.id);
  $("testCaseFilters").hidden = false;
  $("testCaseTableContainer").hidden = false;
  $("pm250CategoryChartPanel").hidden = !isWorkbookProduct;
  $("testCasesDescription").textContent = isWorkbookProduct
    ? `Search and filter test cases from the ${selectedProduct.name} workbook.`
    : "Search and filter the selected validation repository.";
  if (isWorkbookProduct) {
    const workbookState = selectedProduct.id === "pm250-max" ? pm250WorkbookState
      : selectedProduct.id === "nursery-feeder" ? nurseryFeederWorkbookState : fishFeederWorkbookState;
    const workbookError = selectedProduct.id === "pm250-max" ? pm250WorkbookError
      : selectedProduct.id === "nursery-feeder" ? nurseryFeederWorkbookError : fishFeederWorkbookError;
    const workbookName = selectedProduct.id === "pm250-max" ? "PM250_Max_Test_Cases.xlsx"
      : selectedProduct.id === "nursery-feeder" ? "Nursery_Feeder_Test_Cases.xlsx" : "Fish_Feeder_Test_Cases.xlsx";
    if (workbookState !== "loaded") {
      const loading = workbookState === "loading";
      $("resultCount").textContent = loading ? "Loading workbook…" : "Workbook unavailable";
      $("pm250CategoryLegend").textContent = loading
        ? `Loading test cases from ${workbookName}…`
        : `Unable to load ${workbookName}: ${workbookError}`;
      $("testCaseTable").innerHTML = `<tr><td colspan="7" style="text-align:center;color:#6b7280;padding:30px">${loading ? "Loading test cases…" : `Unable to load test cases: ${escapeHtml(workbookError)}`}</td></tr>`;
      if (categoryChart) {
        categoryChart.destroy();
        categoryChart = null;
      }
      return;
    }
    renderProductCategoryChart(selectedProduct.cases || []);
    renderProductTestCaseTable(cases);
    return;
  }
  if (categoryChart) {
    categoryChart.destroy();
    categoryChart = null;
  }
  $("resultCount").textContent = `${cases.length} test case${cases.length !== 1 ? "s" : ""}`;
  $("testCaseTable").innerHTML = cases.length ? cases.map(testCase => {
    const fields = testCaseFields(testCase);
    return `<tr><td><strong>${escapeHtml(fields.id)}</strong></td><td>${escapeHtml(fields.category)}</td><td>${escapeHtml(fields.scenario)}</td><td>${escapeHtml(fields.module)}</td><td>${badge(fields.status)}</td><td>${escapeHtml(fields.priority)}</td><td>${escapeHtml(fields.tester)}</td></tr>`;
  }).join("") : `<tr><td colspan="7" style="text-align:center;color:#6b7280;padding:30px">No matching test cases.</td></tr>`;
}

function renderProductTestCaseTable(cases) {
  $("testCaseTable").innerHTML = cases.length ? cases.map(testCase => {
    const fields = testCaseFields(testCase);
    return `<tr><td><strong>${escapeHtml(fields.id)}</strong></td><td>${escapeHtml(fields.category)}</td><td>${escapeHtml(fields.scenario)}</td><td>${escapeHtml(fields.module)}</td><td>${badge(fields.status)}</td><td>${escapeHtml(fields.priority)}</td><td>${escapeHtml(fields.tester)}</td></tr>`;
  }).join("") : `<tr><td colspan="7" style="text-align:center;color:#6b7280;padding:30px">No matching test cases.</td></tr>`;
}

function renderProductCategoryChart(cases) {
  const categoryColors = ["#2563eb", "#14b8a6", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#84cc16", "#ef4444", "#6366f1", "#0f766e"];
  const categoryColor = index => categoryColors[index] || `hsl(${(index * 137.508) % 360} 68% 44%)`;
  const summaries = new Map();
  cases.forEach(testCase => {
    const fields = testCaseFields(testCase);
    if (!summaries.has(fields.category)) summaries.set(fields.category, { total: 0, executed: 0, pass: 0, fail: 0 });
    const summary = summaries.get(fields.category);
    summary.total++;
    if (isCountedAsExecuted(fields.status)) summary.executed++;
    if (["PASS", "PASSED"].includes(fields.status.toUpperCase())) summary.pass++;
    else if (["FAIL", "FAILED"].includes(fields.status.toUpperCase())) summary.fail++;
  });

  const categories = [...summaries.entries()];
  $("resultCount").textContent = `${cases.length} test cases`;
  $("pm250CategoryLegend").innerHTML = `
    <div class="pm250-category-legend-header" aria-hidden="true">
      <span></span><span>CATEGORY</span><span>TOTAL</span><span>PASS</span><span>FAIL</span><span>PROGRESS</span>
    </div>
    ${categories.map(([category, summary], index) => `
    <div class="pm250-category-legend-item">
      <span class="pm250-category-swatch" style="--category-color:${categoryColor(index)}"></span>
      <span class="pm250-category-name">${escapeHtml(category)}</span>
      <span class="pm250-category-count" aria-label="${summary.total} total test cases">${summary.total}</span>
      <span class="pm250-category-status pass">${summary.pass} PASS</span>
      <span class="pm250-category-status fail">${summary.fail} FAIL</span>
      <span class="pm250-category-progress" aria-label="${pct(summary.executed, summary.total)}% executed">
        <span class="pm250-category-progress-track" role="progressbar" aria-valuenow="${pct(summary.executed, summary.total)}" aria-valuemin="0" aria-valuemax="100" aria-label="${escapeHtml(category)} progress">
          <span class="pm250-category-progress-fill" style="width:${pct(summary.executed, summary.total)}%"></span>
        </span>
        <span class="pm250-category-progress-label">${pct(summary.executed, summary.total)}%</span>
      </span>
    </div>`).join("")}`;

  if (categoryChart) categoryChart.destroy();
  const canvas = $("pm250CategoryChart");
  if (typeof Chart === "undefined") {
    $("pm250CategoryLegend").insertAdjacentHTML("beforebegin", '<p class="small">The category chart is unavailable because the chart library did not load.</p>');
    return;
  }
  canvas.setAttribute("aria-label", `${selectedProduct.name} test case counts by category`);
  categoryChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: categories.map(([category]) => category),
      datasets: [{
        data: categories.map(([, summary]) => summary.total),
        backgroundColor: categories.map((_, index) => categoryColor(index)),
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => ` ${context.label}: ${context.raw} test case${context.raw === 1 ? "" : "s"}`,
            afterLabel: context => {
              const summary = categories[context.dataIndex][1];
              return [`PASS: ${summary.pass}`, `FAIL: ${summary.fail}`];
            }
          }
        }
      }
    }
  });
}

function showView(v) {
  document.querySelectorAll(".view").forEach(x => x.classList.remove("active"));
  const el = $(v + "View");
  if (el) el.classList.add("active");
  const activeNavView = ["validationPortfolio", "productPortfolio"].includes(v) ? "overview" : v;
  document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x.dataset.view === activeNavView));
}
function renderModuleLanding(areaKey, title) {
  const items = areaData[areaKey], viewId = areaKey === "fieldIssues" ? "fieldIssues" : areaKey;
  const v = $(viewId + "View");
  v.innerHTML = `<div class="page-intro"><div><h2>${title}</h2><p>Validation items and test-case status.</p></div><button type="button" class="back-link btn-back-overview">Back to Overview →</button></div><div class="panel"><div class="table-scroll"><table><thead><tr><th>Item</th><th>Total TC</th><th>Executed</th><th>Pass</th><th>Fail</th><th>Progress</th><th>Status</th></tr></thead><tbody>${items.map((x, i) => { const m = metrics(x); return `<tr><td><button class="product-link" data-index="${i}">${x.name}</button></td><td>${m.tests}</td><td>${m.executed}</td><td>${m.pass}</td><td>${m.fail}</td><td><div class="progress-track"><div class="progress-fill" style="width:${m.progress}%"></div></div><span class="progress-text">${m.progress}%</span></td><td>${badge(x.status)}</td></tr>` }).join("")}</tbody></table></div></div>`;
  v.querySelectorAll(".product-link").forEach(b => b.onclick = () => showAreaItem(title, +b.dataset.index));
  const backBtn = v.querySelector(".btn-back-overview");
  if (backBtn) {
    backBtn.onclick = () => { showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview"; };
  }
}

const factoryHandoverProjects = [
  { name: "Lean PM125V3 Wi-Fi", progress: 90 },
  { name: "Fish Feeder", progress: 0 },
  { name: "Nursery Feeder", progress: 0 }
];

function renderFactoryHandoverPortfolioTable() {
  const summaryEl = $("factoryHandoverPortfolioStatusSummary");
  const tableEl = $("factoryHandoverPortfolioTable");
  if (!summaryEl || !tableEl) return;

  const summary = factoryHandoverProjects.reduce((counts, project) => {
    counts.total++;
    if (project.progress === 100) counts.completed++;
    else if (project.progress > 0) counts.inProgress++;
    else counts.open++;
    return counts;
  }, { total: 0, open: 0, inProgress: 0, parked: 0, completed: 0, rejected: 0 });

  summaryEl.innerHTML = `<table class="status-summary-table" aria-label="Factory Handover project status summary">
    <thead><tr><th scope="col">Total</th><th class="status-summary-open" scope="col">Open</th><th class="status-summary-progress" scope="col">In Progress</th><th class="status-summary-parked" scope="col">Parked</th><th class="status-summary-completed" scope="col">Completed</th><th class="status-summary-rejected" scope="col">Rejected</th></tr></thead>
    <tbody><tr><td>${summary.total}</td><td class="status-summary-open">${summary.open}</td><td class="status-summary-progress">${summary.inProgress}</td><td class="status-summary-parked">${summary.parked}</td><td class="status-summary-completed">${summary.completed}</td><td class="status-summary-rejected">${summary.rejected}</td></tr></tbody>
  </table>`;

  tableEl.innerHTML = `<table class="portfolio-items-table factory-handover-projects-table">
    <thead><tr><th scope="col">Project</th><th scope="col">Overall Progress</th></tr></thead>
    <tbody>${factoryHandoverProjects.map(({ name, progress }) => `<tr>
      <td class="portfolio-item-name">${name}</td>
      <td><div class="products-data-progress">
        <div class="progress-track-modern"><div class="progress-fill-modern" style="width:${progress}%"></div></div>
        <span class="progress-text-modern">${progress}%</span>
      </div></td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function renderFactoryHandoverPage() {
  const view = $("factoryHandoverView");
  if (!view) return;
  $("breadcrumb").textContent = "Dashboard / Factory Handover";
  $("pageTitle").textContent = "Factory Handover";

  view.innerHTML = `
    <div class="page-intro factory-handover-page-intro">
      <div>
        <h2>Factory Handover</h2>
        <p>Factory handover progress by project.</p>
      </div>
    </div>
    <div class="two-column factory-handover-projects">
      ${factoryHandoverProjects.map(({ name, progress }) => `
        <article class="panel project-card factory-handover-card">
          <div class="panel-header">
            <div>
              <h3>${name}</h3>
              <p>Click to view factory handover details</p>
            </div>
          </div>
          <div class="factory-handover-progress">
            <div class="factory-handover-progress-label">
              <span>Overall Progress</span>
              <strong>${progress}%</strong>
            </div>
            <div class="progress-track" role="progressbar" aria-label="${name} factory handover progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>
        </article>
      `).join("")}
    </div>`;
}

window.handleFactoryHandoverProject = function (projectName) {
  if (projectName) openFactoryHandoverDetails(projectName);
};

window.openFactoryHandoverDetails = function (projectName) {
  const view = $("factoryHandoverView");
  if (!view) return;

  view.innerHTML = `
    <div class="page-intro">
      <div>
        <h2>${projectName}</h2>
        <p>Factory Handover Details</p>
      </div>
      <button type="button" class="back-link" onclick="renderFactoryHandoverPage()">← Back to Factory Handover</button>
    </div>
    <div class="factory-handover-empty-details" aria-label="${projectName} Factory Handover details"></div>`;
  $("breadcrumb").textContent = `Dashboard / Factory Handover / ${projectName}`;
  $("pageTitle").textContent = projectName;
}

document.querySelectorAll(".nav-item").forEach(btn => btn.onclick = () => {
  const v = btn.dataset.view; showView(v);
  const title = v === "overview" ? "V&V Overview" : v === "products" ? "Products" : v === "fieldIssues" ? "Field Issues" : v === "rnd" ? "R&D" : v === "thirdParty" ? "3rd Party" : v === "nit" ? "NIT" : v === "partQualification" ? "Part Qualification" : v.charAt(0).toUpperCase() + v.slice(1);
  $("breadcrumb").textContent = `Dashboard / ${title}`; $("pageTitle").textContent = title;
  if (v === "products") renderProductsPage();
  if (v === "sourcing") renderModuleLanding("sourcing", "Sourcing");
  if (v === "fieldIssues") renderModuleLanding("fieldIssues", "Field Issues");
  if (v === "quality") renderModuleLanding("quality", "Quality");
  if (v === "rnd") renderModuleLanding("rnd", "R&D");
  if (v === "thirdParty") renderModuleLanding("thirdParty", "3rd Party");
  if (v === "nit") renderModuleLanding("nit", "NIT");
  if (v === "factoryHandover") renderFactoryHandoverPage();
  if (v === "partQualification") {
    partQualificationReturnToPortfolio = false;
    renderPartQualificationPage();
  }
});

const projectsConfig = {
  fishFeeder: { id: "fishFeeder", name: "Fish Feeder", file: "excel files/Product engineer/Part_Qualification_FF_Tracker_2026.xlsx", sheet: "FF_2026" },
  nurseryFeeder: { id: "nurseryFeeder", name: "Nursery Feeder", file: "excel files/Product engineer/Part_Qualification_NF_Tracker_2026.xlsx", sheet: "NF_2026" }
};

let loadedProjectsData = {};
let currentSelectedProject = null;
let partQualificationReturnToPortfolio = false;
let autoRefreshTimer = null;
let isFirstLoad = true;

async function loadExcelProject(projectKey, forceRefresh = false) {
  const config = projectsConfig[projectKey];
  try {
    // If we have cached data and not forcing refresh, don't fetch again
    if (loadedProjectsData[projectKey] && !forceRefresh) {
      return;
    }

    console.time(`${config.name} Fetch`);
    // Use conditional requests to avoid downloading if unchanged
    const fetchOptions = {
      method: 'GET',
      headers: {}
    };

    // If we have a stored last-modified for this project, add it
    if (loadedProjectsData[projectKey] && loadedProjectsData[projectKey].lastModified) {
      fetchOptions.headers['If-Modified-Since'] = loadedProjectsData[projectKey].lastModified;
    }

    // Use cache-busting to bypass browser cache ONLY on forceRefresh
    const url = forceRefresh ? `${config.file}?t=${Date.now()}` : config.file;
    const res = await fetch(url, fetchOptions);

    if (res.status === 304) {
      // Not modified, keep existing cache
      console.timeEnd(`${config.name} Fetch`);
      return;
    }

    if (!res.ok) throw new Error("Network response was not ok");

    const lastModified = res.headers.get('Last-Modified');
    const arrayBuffer = await res.arrayBuffer();
    console.timeEnd(`${config.name} Fetch`);

    console.time(`${config.name} XLSX Parse`);
    // Dense mode improves memory and parsing speed
    const workbook = XLSX.read(arrayBuffer, { type: 'array', dense: true });
    const sheet = workbook.Sheets[config.sheet];
    if (!sheet) throw new Error(`Sheet ${config.sheet} not found`);
    console.timeEnd(`${config.name} XLSX Parse`);

    console.time(`${config.name} Data Processing`);
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    const parsedData = parseTrackerSheet(rows, config);

    // Parse maturity data from all sheets
    parsedData.maturityTable = parseMaturityTable(workbook);

    // Extract exact readiness summary from sheets instead of relying solely on JS calculation
    const exactSummary = parseReadinessTable(workbook);
    if (exactSummary && exactSummary.length > 0) {
      parsedData.summary = exactSummary;
    }

    // Extract exact overall stats (Tracked Parts, Overall Progress)
    parsedData.stats = parseOverallStats(workbook);

    parsedData.lastModified = lastModified || new Date().toUTCString();

    loadedProjectsData[projectKey] = parsedData;
    console.timeEnd(`${config.name} Data Processing`);

    // Print total for user observation
    console.log(`${config.name} loaded successfully.`);
  } catch (e) {
    console.error("Error loading Excel for", config.name, e);
    // Only set fallback if we have no existing cache
    if (!loadedProjectsData[projectKey]) {
      loadedProjectsData[projectKey] = { config, parts: [], summary: getEmptySummary(), error: true };
    }
  }
}

function getEmptySummary() {
  return [
    { stage: "Design Readiness", completed: 0, total: 0 },
    { stage: "Part Qualification", completed: 0, total: 0 },
    { stage: "Sourcing Readiness", completed: 0, total: 0 },
    { stage: "Supplier Qualification", completed: 0, total: 0 },
    { stage: "Sample / Lot Procurement", completed: 0, total: 0 },
    { stage: "Factory Handover", completed: 0, total: 0 }
  ];
}

function parseTrackerSheet(rows, config) {
  if (rows.length < 2) return { config, parts: [], summary: getEmptySummary() };
  const headers = rows[1].map(h => String(h).trim().toLowerCase());

  // Find column indices robustly
  const colIndex = (searchStrs) => {
    for (let str of searchStrs) {
      const idx = headers.findIndex(h => h.includes(str.toLowerCase()));
      if (idx !== -1) return idx;
    }
    return -1;
  };

  const map = {
    partNum: colIndex(["part number"]),
    partDesc: colIndex(["part discription", "part description", "description"]),
    partType: colIndex(["part type"]),
    peKickOff: colIndex(["pe kick-off", "kick off"]),
    bomRev: colIndex(["bom rev"]),
    rev: colIndex(["rev. no", "rev no"]),
    qty: colIndex(["qty", "quantity"]),

    // Design
    designPlan: colIndex(["design readiness planned"]),
    designAct: colIndex(["design readiness actual"]),
    designMat: colIndex(["maturity %", "maturity"]),
    designDoc: colIndex(["doc. rec'd", "doc rec"]),

    // PQ
    pqPlan: colIndex(["pe verif. planned"]),
    pqAct: colIndex(["pe verif. actual"]),
    pqReady: colIndex(["ready for pq"]),
    pqDraw: colIndex(["drawing / spec to scm"]),
    pqTarget: colIndex(["sourcing target date"]),
    pqRem: colIndex(["comments/ remarks", "remarks"]), // First remarks after PQ

    // Sourcing
    srcDraw: colIndex(["drawing / spec to vendors"]),
    srcIdPlan: colIndex(["vendors identification planned"]),
    srcIdAct: colIndex(["vendors identification actual"]),
    srcRfq: colIndex(["rfq released"]),
    srcTech: colIndex(["technical queries closure"]),
    srcQuote: colIndex(["quotations received"]),
    srcFinal: colIndex(["vendor finalization", "vendor final"]),
    srcSize: colIndex(["sample size", "sample  size"]),
    srcLeadType: colIndex(["lead time type"]),
    srcLeadConf: colIndex(["lead time confirmation actual"]),
    srcPo: colIndex(["release of po", "po release"]),
    srcRem: colIndex(["remarks/ comments"]),

    // Supplier Qual
    sqVisit: colIndex(["vendor visit required"]),
    sqPpap: colIndex(["ppap/fai", "ppap"]),
    sqSamp: colIndex(["sample approval"]),
    sqQual: colIndex(["quality & mf agreements", "quality agreements"]),
    sqRem: headers.indexOf("remarks/ comments", colIndex(["quality & mf agreements"]) + 1),

    // Sample
    sampDisp: colIndex(["samplet dispatch", "sample dispatch"]),
    sampRec: colIndex(["sample receipt", "sample  receipt"]),
    sampQa: colIndex(["qa (cft)", "qa "]),
    sampDes: colIndex(["distpacth sample to design", "dispatch sample"]),
    sampRem: headers.indexOf("remarks/ comments", colIndex(["distpacth sample to design"]) + 1),

    // Factory
    facFit: colIndex(["check form & fit"]),
    facTest: colIndex(["testing"]),
    facIss: colIndex(["open issues"]),
    facDes: colIndex(["design changes"]),
    facBom: colIndex(["bom revision updates"]),
    facReq: colIndex(["part qualification required"]),
    facApp: colIndex(["part approval", " part approval"]),
    facRem: headers.indexOf("remarks/ comments", colIndex(["part approval"]) + 1)
  };

  const parts = [];
  let summary = getEmptySummary();

  const isValidVal = (val) => val && String(val).trim() !== "" && String(val).trim() !== "-" && String(val).trim().toLowerCase() !== "tba";

  for (let i = 2; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    const partNum = row[map.partNum];
    const partDesc = row[map.partDesc];
    // Valid part if it has a description or number
    if (!isValidVal(partNum) && !isValidVal(partDesc)) continue;

    const safeGet = (idx) => (idx !== -1 && row[idx] !== undefined) ? String(row[idx]) : "-";

    const isDesignDone = isValidVal(row[map.designAct]);
    const isPqDone = isValidVal(row[map.pqAct]) || String(row[map.pqReady]).toLowerCase() === 'yes';
    const isSrcDone = isValidVal(row[map.srcFinal]) || isValidVal(row[map.srcPo]);
    const isSqDone = isValidVal(row[map.sqVisit]) || isValidVal(row[map.sqPpap]) || isValidVal(row[map.sqSamp]) || isValidVal(row[map.sqQual]);
    const isSampDone = isValidVal(row[map.sampDisp]) || isValidVal(row[map.sampRec]) || isValidVal(row[map.sampQa]);
    const isFacDone = isValidVal(row[map.facFit]) || isValidVal(row[map.facTest]) || isValidVal(row[map.facApp]);

    const partObj = {
      id: i,
      partNumber: safeGet(map.partNum),
      partDesc: safeGet(map.partDesc),
      partType: safeGet(map.partType),
      peKickOff: formatExcelDate(row[map.peKickOff]),
      bomRev: safeGet(map.bomRev),
      rev: safeGet(map.rev),
      qty: safeGet(map.qty),

      designDone: isDesignDone,
      pqDone: isPqDone,
      srcDone: isSrcDone,
      sqDone: isSqDone,
      sampDone: isSampDone,
      facDone: isFacDone,

      cards: [
        {
          title: "01. Design Readiness", status: isDesignDone ? "Complete" : "Pending", statusClass: isDesignDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "Planned:", v: formatExcelDate(row[map.designPlan]) }, { l: "Actual:", v: formatExcelDate(row[map.designAct]) }, { l: "Maturity %:", v: safeGet(map.designMat) }, { l: "Doc Rec'd:", v: safeGet(map.designDoc) }]
        },
        {
          title: "02. Part Qual. Readiness", status: isPqDone ? "Complete" : "Pending", statusClass: isPqDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "PE Verif. Planned:", v: formatExcelDate(row[map.pqPlan]) }, { l: "PE Verif. Actual:", v: formatExcelDate(row[map.pqAct]) }, { l: "Ready for PQ:", v: safeGet(map.pqReady) }, { l: "Drawing to SCM:", v: formatExcelDate(row[map.pqDraw]) }, { l: "Target Date:", v: formatExcelDate(row[map.pqTarget]) }],
          remarks: safeGet(map.pqRem)
        },
        {
          title: "03. Sourcing Readiness", status: isSrcDone ? "Complete" : "Pending", statusClass: isSrcDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "Drawing to Vendors:", v: formatExcelDate(row[map.srcDraw]) }, { l: "Vendor ID Planned:", v: formatExcelDate(row[map.srcIdPlan]) }, { l: "Vendor ID Actual:", v: formatExcelDate(row[map.srcIdAct]) }, { l: "RFQ Released:", v: formatExcelDate(row[map.srcRfq]) }, { l: "Tech Queries Closure:", v: formatExcelDate(row[map.srcTech]) }, { l: "Quotes Received:", v: formatExcelDate(row[map.srcQuote]) }, { l: "Vendor Finalization:", v: formatExcelDate(row[map.srcFinal]) }, { l: "Sample Size:", v: safeGet(map.srcSize) }, { l: "Lead Time Type:", v: safeGet(map.srcLeadType) }, { l: "Lead Time Conf.:", v: formatExcelDate(row[map.srcLeadConf]) }, { l: "PO Release:", v: formatExcelDate(row[map.srcPo]) }],
          remarks: safeGet(map.srcRem)
        },
        {
          title: "04. Supplier Qualification", status: isSqDone ? "Complete" : "Pending", statusClass: isSqDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "Vendor Visit Req:", v: safeGet(map.sqVisit) }, { l: "PPAP/FAI:", v: safeGet(map.sqPpap) }, { l: "Sample Approval:", v: formatExcelDate(row[map.sqSamp]) }, { l: "Quality/MF Agreements:", v: safeGet(map.sqQual) }],
          remarks: (map.sqRem !== -1) ? safeGet(map.sqRem) : "-"
        },
        {
          title: "05. Sample / Lot Procurement", status: isSampDone ? "Complete" : "Pending", statusClass: isSampDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "Sample Dispatch:", v: formatExcelDate(row[map.sampDisp]) }, { l: "Sample Receipt:", v: formatExcelDate(row[map.sampRec]) }, { l: "QA (CFT):", v: safeGet(map.sampQa) }, { l: "Dispatch to Design:", v: formatExcelDate(row[map.sampDes]) }],
          remarks: (map.sampRem !== -1) ? safeGet(map.sampRem) : "-"
        },
        {
          title: "06. Factory Handover", status: isFacDone ? "Complete" : "Pending", statusClass: isFacDone ? "badge-complete" : "badge-pending",
          fields: [{ l: "Check Form & Fit:", v: safeGet(map.facFit) }, { l: "Testing:", v: safeGet(map.facTest) }, { l: "Open Issues:", v: safeGet(map.facIss) }, { l: "Design Changes:", v: safeGet(map.facDes) }, { l: "BOM Rev Updates:", v: safeGet(map.facBom) }, { l: "Part Qual Req:", v: safeGet(map.facReq) }, { l: "Part Approval:", v: safeGet(map.facApp) }],
          remarks: (map.facRem !== -1) ? safeGet(map.facRem) : "-"
        }
      ]
    };

    // Determine current stage & readiness
    let curStage = "Not Started";
    let readi = "0%";
    if (isFacDone) { curStage = "Factory Handover"; readi = "100%"; }
    else if (isSampDone) { curStage = "Sample / Lot Procurement"; readi = "83%"; }
    else if (isSqDone) { curStage = "Supplier Qualification"; readi = "66%"; }
    else if (isSrcDone) { curStage = "Sourcing Readiness"; readi = "50%"; }
    else if (isPqDone) { curStage = "Part Qualification"; readi = "33%"; }
    else if (isDesignDone) { curStage = "Design Readiness"; readi = "16%"; }

    partObj.currentStage = curStage;
    partObj.readiness = readi;

    parts.push(partObj);

    summary[0].total++; summary[1].total++; summary[2].total++;
    summary[3].total++; summary[4].total++; summary[5].total++;
    if (isDesignDone) summary[0].completed++;
    if (isPqDone) summary[1].completed++;
    if (isSrcDone) summary[2].completed++;
    if (isSqDone) summary[3].completed++;
    if (isSampDone) summary[4].completed++;
    if (isFacDone) summary[5].completed++;
  }

  // Pre-compute O(1) lookup map
  const partMap = {};
  for (let i = 0; i < parts.length; i++) {
    partMap[parts[i].id.toString()] = parts[i];
  }

  return { config, parts, partMap, summary };
}

function parseMaturityTable(workbook) {
  const maturityTable = [];
  let found = false;

  console.log(`[Maturity Parser] Searching workbook...`);
  console.log(`[Maturity Parser] Sheets: ${workbook.SheetNames.join(', ')}`);

  for (let sheetName of workbook.SheetNames) {
    if (found) break;
    console.log(`[Maturity Parser] Checking sheet: ${sheetName}`);
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

    const matTitleIdx = rows.findIndex(r => r && r.some(c => {
      const txt = String(c).toUpperCase();
      return txt.includes("MATURITY PROGRESS") || txt.includes("PARTS BY FUNCTION");
    }));

    if (matTitleIdx !== -1) {
      console.log(`[Maturity Parser] Candidate maturity section found at row ${matTitleIdx} in sheet '${sheetName}'`);
      found = true;
      let headerIdx = -1;
      for (let i = matTitleIdx; i < Math.min(matTitleIdx + 15, rows.length); i++) {
        if (rows[i] && rows[i].some(c => {
          const t = String(c).trim().toUpperCase();
          return t === "GROUP" || t === "CATEGORY";
        })) {
          headerIdx = i;
          break;
        }
      }

      if (headerIdx !== -1) {
        console.log(`[Maturity Parser] Header row: ${headerIdx}`);
        const hdrs = rows[headerIdx].map(h => String(h).trim().toUpperCase());
        const cGrp = hdrs.findIndex(h => h === "GROUP" || h === "CATEGORY");
        const cMat = hdrs.findIndex(h => h.includes("90%"));
        const cTot = hdrs.findIndex(h => h === "TOTAL" || h.includes("TOTAL"));
        const cProg = hdrs.findIndex(h => h === "PROGRESS" || h.includes("PROGRESS") || h === "%");

        let rowCount = 0;
        for (let i = headerIdx + 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r) continue;

          const groupRaw = r[cGrp];
          if (groupRaw === undefined || groupRaw === null || String(groupRaw).trim() === "") {
            // Stop if we hit 2 consecutive empty groups
            if (i < rows.length - 1) {
              const nextRow = rows[i + 1];
              if (!nextRow || nextRow[cGrp] === undefined || nextRow[cGrp] === null || String(nextRow[cGrp]).trim() === "") {
                break;
              }
            } else {
              break;
            }
            continue;
          }

          const grpName = String(groupRaw).trim();
          const upperGrp = grpName.toUpperCase();
          if (upperGrp === "PART NUMBER" || upperGrp === "S.NO" || upperGrp.includes("PRIORITY ACTIONS") || upperGrp.startsWith("PRIORITY")) break;

          const m = cMat !== -1 && r[cMat] !== undefined && r[cMat] !== "" ? String(r[cMat]) : "-";
          const t = cTot !== -1 && r[cTot] !== undefined && r[cTot] !== "" ? String(r[cTot]) : "-";
          let pRaw = cProg !== -1 && r[cProg] !== undefined && r[cProg] !== "" ? r[cProg] : "-";

          let p = pRaw;

          if ((pRaw === "-" || pRaw === "") && m !== "-" && t !== "-") {
            const mNum = parseFloat(m);
            const tNum = parseFloat(t);
            if (!isNaN(mNum) && !isNaN(tNum) && tNum > 0) {
              p = Math.round((mNum / tNum) * 100) + "%";
            }
          } else if (typeof pRaw === 'number') {
            p = Math.round(pRaw * 100) + "%";
          } else if (typeof pRaw === 'string' && !pRaw.includes('%') && pRaw !== '-') {
            const num = parseFloat(pRaw);
            if (!isNaN(num) && num <= 1) {
              p = Math.round(num * 100) + "%";
            }
          }

          maturityTable.push({
            group: grpName,
            maturity: m,
            total: t,
            progress: p
          });
          rowCount++;
        }
        console.log(`[Maturity Parser] Data rows: ${rowCount}`);
      } else {
        console.warn(`[Maturity Parser] Could not find header row after title in sheet '${sheetName}'.`);
      }
    }
  }

  if (!found) {
    console.warn(`[Maturity Parser] Could not find section title in any sheet.`);
  }

  return maturityTable;
}

function parseReadinessTable(workbook) {
  let summary = [];
  let found = false;
  for (let sheetName of workbook.SheetNames) {
    if (found) break;
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

    const titleIdx = rows.findIndex(r => r && r.some(c => String(c).toUpperCase().includes("READINESS STAGE PROGRESS")));
    if (titleIdx !== -1) {
      found = true;
      let headerIdx = -1;
      for (let i = titleIdx; i < Math.min(titleIdx + 5, rows.length); i++) {
        if (rows[i] && rows[i].some(c => String(c).toUpperCase().trim() === "READINESS STAGE" || String(c).toUpperCase().trim() === "COMPLETED")) {
          headerIdx = i;
          break;
        }
      }
      if (headerIdx !== -1) {
        const hdrs = rows[headerIdx].map(h => String(h).toUpperCase().trim());
        const cStage = hdrs.findIndex(h => h.includes("STAGE"));
        const cComp = hdrs.findIndex(h => h === "COMPLETED");
        const cTot = hdrs.findIndex(h => h === "TOTAL");

        for (let i = headerIdx + 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r) continue;

          const stageRaw = r[cStage];
          if (stageRaw === undefined || stageRaw === null || String(stageRaw).trim() === "") {
            if (i < rows.length - 1 && (!rows[i + 1] || !rows[i + 1][cStage])) break;
            continue;
          }

          const stage = String(stageRaw).trim();
          if (stage.toUpperCase().includes("PARTS BY FUNCTION") || stage.toUpperCase().includes("MATURITY") || stage.toUpperCase() === "GROUP") break;

          const comp = r[cComp] !== undefined ? r[cComp] : 0;
          const tot = r[cTot] !== undefined ? r[cTot] : 0;

          summary.push({
            stage: stage,
            completed: parseInt(comp) || 0,
            total: parseInt(tot) || 0
          });
        }
      }
    }
  }
  return summary;
}

function parseOverallStats(workbook) {
  let stats = { totalParts: null, overallProgress: null };
  for (let sheetName of workbook.SheetNames) {
    if (stats.totalParts !== null) break;
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

    for (let i = 0; i < Math.min(30, rows.length); i++) {
      const r = rows[i];
      if (!r) continue;

      const cOv = r.findIndex(c => String(c).toUpperCase().trim() === "OVERALL PROGRESS");
      const cTr = r.findIndex(c => String(c).toUpperCase().trim() === "TRACKED PARTS");

      if (cOv !== -1 && cTr !== -1 && i + 1 < rows.length) {
        const dataRow = rows[i + 1];
        let prog = dataRow[cOv];
        let tot = dataRow[cTr];

        if (typeof prog === 'number') {
          stats.overallProgress = Math.round(prog * 100);
        } else if (typeof prog === 'string' && !prog.includes('%') && prog !== '') {
          const num = parseFloat(prog);
          if (!isNaN(num) && num <= 1) stats.overallProgress = Math.round(num * 100);
        }

        if (typeof tot === 'number') {
          stats.totalParts = tot;
        } else if (typeof tot === 'string' && tot !== '') {
          const num = parseInt(tot, 10);
          if (!isNaN(num)) stats.totalParts = num;
        }
        break;
      }
    }
  }
  return stats;
}

function formatExcelDate(val) {
  if (!val || String(val).trim() === "" || String(val).trim() === "-") return "-";
  if (!isNaN(val) && typeof val === 'number') {
    const d = new Date((val - (25567 + 2)) * 86400 * 1000); // Excel date to JS date
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  }
  return String(val);
}

async function initPartQualification(forceRefresh = false) {
  if (isFirstLoad) {
    isFirstLoad = false;
  }

  // Independent loading and updating
  ['fishFeeder', 'nurseryFeeder'].forEach(key => {
    loadExcelProject(key, forceRefresh).then(() => {
      refreshActivePQView();
      if (typeof renderPEOverviewChart === 'function') renderPEOverviewChart();
    });
  });

  // Setup auto-refresh every 60 seconds (non-blocking)
  if (!autoRefreshTimer) {
    autoRefreshTimer = setInterval(() => {
      ['fishFeeder', 'nurseryFeeder'].forEach(key => {
        loadExcelProject(key, true).then(() => {
          refreshActivePQView();
          if (typeof renderPEOverviewChart === 'function') renderPEOverviewChart();
        });
      });
    }, 60000);
  }
}

function refreshActivePQView() {
  const v = $("partQualificationView");
  if (!v || !v.classList.contains("active")) return;

  if (currentSelectedProject) {
    renderPQDetailView(currentSelectedProject);
    const partSelect = $("partSelect");
    if (partSelect && partSelect.value) renderPartDetails(partSelect.value);
  } else {
    renderPQMainView();
  }
}

function renderPQMainView() {
  if (window.readinessStageChart) {
    window.readinessStageChart.destroy();
    window.readinessStageChart = null;
  }
  if (window.maturityGroupCharts) {
    window.maturityGroupCharts.forEach(chart => chart.destroy());
    window.maturityGroupCharts = [];
  }

  currentSelectedProject = null;
  const v = $("partQualificationView");
  if (!v.classList.contains("active")) return;

  let html = `
        <div class="page-intro" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
                <h2>Part Qualification</h2>
                <p>Select a project to view readiness stage progress.</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <select id="topProjectDropdown" onchange="handleTopDropdown(this.value)" style="padding:8px 12px; border-radius:6px; border:1px solid var(--border); background:#fff; font-weight:500;">
                    <option value="">Select Project</option>
                    <option value="fishFeeder">Fish Feeder</option>
                    <option value="nurseryFeeder">Nursery Feeder</option>
                </select>
            </div>
        </div>
        
        <div class="two-column" style="margin-top:20px;">
    `;

  ['fishFeeder', 'nurseryFeeder'].forEach(key => {
    const config = projectsConfig[key];
    const pd = loadedProjectsData[key];

    if (!pd) {
      // Loading state
      html += `
            <div class="panel project-card">
                <div class="panel-header">
                    <div>
                        <h3 style="color:#1769e0; font-size:18px;">${config.name}</h3>
                        <p style="margin-top:5px;">Loading data...</p>
                    </div>
                </div>
                <div style="padding:20px 24px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <span style="color:#6b7280;">Total Parts</span>
                        <strong style="color:#111827; font-size:16px;">Loading...</strong>
                    </div>
                    <div class="progress-track" style="height:6px; margin-bottom:20px; background:#e5e7eb;"></div>
                </div>
            </div>
      `;
      return;
    }

    if (pd.error) {
      // Error state
      html += `
            <div class="panel project-card">
                <div class="panel-header">
                    <div>
                        <h3 style="color:#1769e0; font-size:18px;">${config.name}</h3>
                        <p style="margin-top:5px; color:var(--danger);">Error loading data</p>
                    </div>
                </div>
                <div style="padding:20px 24px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <span style="color:#6b7280;">Status</span>
                        <strong style="color:var(--danger); font-size:16px;">Failed</strong>
                    </div>
                </div>
            </div>
       `;
      return;
    }

    const total = (pd.stats && pd.stats.totalParts !== null) ? pd.stats.totalParts : pd.parts.length;
    let ovrPct = 0;

    if (pd.stats && pd.stats.overallProgress !== null) {
      ovrPct = pd.stats.overallProgress;
    } else if (total > 0) {
      let totalStages = total * 6;
      let compStages = pd.summary.reduce((a, b) => a + b.completed, 0);
      ovrPct = Math.round((compStages / totalStages) * 100);
    }

    html += `
            <div class="panel project-card" style="cursor:pointer; transition:transform 0.2s;" onclick="openProjectDetail('${key}')" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                <div class="panel-header">
                    <div>
                        <h3 style="color:#1769e0; font-size:18px;">${config.name}</h3>
                        <p style="margin-top:5px;">Click to view detailed part qualification data</p>
                    </div>
                </div>
                <div style="padding:20px 24px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <span style="color:#6b7280;">Total Parts</span>
                        <strong style="color:#111827; font-size:16px;">${total}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                        <span style="color:#6b7280;">Overall Progress</span>
                        <strong style="color:#1769e0; font-size:16px;">${ovrPct}%</strong>
                    </div>
                    <div class="progress-track" style="height:6px; margin-bottom:20px;">
                        <div class="progress-fill" style="width:${ovrPct}%;"></div>
                    </div>
                    <div style="text-align:right; color:#1769e0; font-weight:500; font-size:13px;">View Details →</div>
                </div>
            </div>
        `;
  });

  html += `</div>`;

  // Add small updated text
  html += `<div style="text-align:right; margin-top:20px; font-size:11px; color:#9ca3af;">Data updates automatically every 60s in the background</div>`;

  v.innerHTML = html;

  const backBtn = v.querySelector(".btn-back-overview");
  if (backBtn) {
    backBtn.onclick = () => { showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview"; };
  }
}

window.handleTopDropdown = function (val) {
  if (val) {
    openProjectDetail(val);
  } else {
    renderPQMainView();
  }
};

let currentlyOpenPartId = null;

window.openProjectDetail = function (projectKey) {
  currentSelectedProject = projectKey;
  currentlyOpenPartId = null;
  renderPQDetailView(projectKey);
};

function openPortfolioProjectDetail(projectKey) {
  partQualificationReturnToPortfolio = true;
  showView("partQualification");
  $("breadcrumb").textContent = `Dashboard / Product Portfolio / ${projectsConfig[projectKey].name}`;
  $("pageTitle").textContent = projectsConfig[projectKey].name;
  openProjectDetail(projectKey);
}

function renderPQDetailView(projectKey) {
  const v = $("partQualificationView");
  const pd = loadedProjectsData[projectKey];
  if (!pd) return;
  if (window.readinessStageChart) {
    window.readinessStageChart.destroy();
    window.readinessStageChart = null;
  }

  let html = `
        <div class="page-intro" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
                <h2>${pd.config.name} — Part Qualification</h2>
                <p>Readiness Stage Progress from ${pd.config.sheet}</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                ${partQualificationReturnToPortfolio ? '<button type="button" class="back-link" id="pqBackToProductPortfolio">← Back to Product Portfolio</button>' : ''}
                <select id="topProjectDropdownDetail" onchange="handleTopDropdown(this.value)" style="padding:8px 12px; border-radius:6px; border:1px solid var(--border); background:#fff; font-weight:500;">
                    <option value="">Select Project</option>
                    <option value="fishFeeder" ${projectKey === 'fishFeeder' ? 'selected' : ''}>Fish Feeder</option>
                    <option value="nurseryFeeder" ${projectKey === 'nurseryFeeder' ? 'selected' : ''}>Nursery Feeder</option>
                </select>
            </div>
        </div>
        
        <div class="pq-dashboard-grid">
            <section class="panel readiness-dashboard">
                <div class="panel-header"><div><h3>READINESS STAGE PROGRESS</h3></div></div>
                <div class="readiness-dashboard-columns">
                  <div class="readiness-stage-table-wrap">
                    <table>
                        <thead><tr><th>Readiness Stage</th><th>Completed</th><th>Total</th><th>Progress</th></tr></thead>
                        <tbody>
                            ${pd.summary.map(row => {
    const pct = row.total ? Math.round((row.completed / row.total) * 100) : 0;
    return `<tr><td><strong>${row.stage}</strong></td><td>${row.completed}</td><td>${row.total}</td><td><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><span class="progress-text">${pct}%</span></td></tr>`;
  }).join("")}
                        </tbody>
                    </table>
                  </div>
                  <div class="readiness-distribution">
                    <h4>Readiness Stage Distribution</h4>
                    <div class="readiness-chart-wrap">
                      <canvas id="readinessStageChart" aria-label="Readiness Stage Distribution doughnut chart"></canvas>
                    </div>
                  </div>
                </div>
            </section>

            ${renderMaturityProgressTable(pd.maturityTable)}
        </div>
        
        <div class="part-details-accordion" style="margin-top: 30px;">
            <h3 style="color:#10243f; margin-bottom:15px; font-size:18px;">Part Details List</h3>
            <div id="partAccordionList" style="display:flex; flex-direction:column; gap:10px;">
                ${pd.parts.map(p => {
    const disp = p.partDesc && p.partDesc !== '-' ? p.partDesc : p.partNumber;
    return `
                    <div class="part-accordion-item" style="border: 1px solid var(--border); border-radius: 8px; background: #fff; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                        <div class="part-accordion-header" id="part-header-${p.id}" onclick="togglePartDetails(${p.id})" style="padding: 16px 20px; cursor: pointer; background: #f9fafb; font-weight: 600; color: #111827; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;">
                            <span>${p.partNumber} - ${disp}</span>
                            <span id="part-icon-${p.id}" style="color: #6b7280; font-size: 12px;">▼</span>
                        </div>
                        <div id="part-content-${p.id}" style="display: none; padding: 24px; border-top: 1px solid var(--border);"></div>
                    </div>
                    `;
  }).join("")}
            </div>
        </div>
    `;

  v.innerHTML = html;
  const portfolioBackButton = $("pqBackToProductPortfolio");
  if (portfolioBackButton) {
    portfolioBackButton.onclick = () => {
      partQualificationReturnToPortfolio = false;
      showView("productPortfolio");
      $("breadcrumb").textContent = "Dashboard / Product Portfolio";
      $("pageTitle").textContent = "Product Portfolio";
    };
  }
  renderMaturityGroupCharts(pd.maturityTable || []);
  const readinessStageColors = {
    "Design Readiness": "#fcd34d",
    "Part Qualification": "#fb923c",
    "Sourcing Readiness": "#60a5fa",
    "Supplier Qualification": "#818cf8",
    "Sample / Lot Procurement": "#c084fc",
    "Factory Handover": "#34d399"
  };
  const readinessTotal = pd.summary.reduce((total, row) => total + row.completed, 0);
  window.readinessStageChart = new Chart($("readinessStageChart"), {
    type: "doughnut",
    data: {
      labels: pd.summary.map(row => row.stage),
      datasets: [{
        data: pd.summary.map(row => row.completed),
        backgroundColor: pd.summary.map(row => readinessStageColors[row.stage] || "#94a3b8"),
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "64%",
      plugins: {
        legend: {
          position: "bottom",
          labels: { boxWidth: 11, boxHeight: 11, padding: 10, font: { size: 10 } }
        },
        tooltip: {
          callbacks: {
            label: context => {
              const value = Number(context.raw) || 0;
              const percentage = readinessTotal ? Math.round(value / readinessTotal * 100) : 0;
              return `${context.label}: ${value} completed (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function getMaturityGroupData(maturityTable) {
  const groupNames = ["ALL PARTS", "MECH", "HW", "FUNCTION NOT SPECIFIED"];
  const characteristicNames = [
    "NEW - CRITICAL",
    "NEW - REGULAR",
    "CARRYOVER - CRITICAL",
    "CARRYOVER - REGULAR",
    "NOT SPECIFIED"
  ];
  const groupRows = groupNames
    .map(name => ({ name, index: maturityTable.findIndex(row => row.group.trim().toUpperCase() === name) }))
    .filter(group => group.index !== -1);

  const toCount = value => {
    const count = Number.parseFloat(String(value).replace(/,/g, ""));
    return Number.isFinite(count) ? count : 0;
  };

  return groupRows.map(group => {
    const nextGroupIndex = groupRows
      .filter(candidate => candidate.index > group.index)
      .reduce((nextIndex, candidate) => Math.min(nextIndex, candidate.index), maturityTable.length);
    const summary = maturityTable[group.index];
    const characteristics = maturityTable
      .slice(group.index + 1, nextGroupIndex)
      .filter(row => characteristicNames.includes(row.group.trim().toUpperCase()));
    const characteristicsByName = new Map(characteristics.map(row => [row.group.trim().toUpperCase(), row]));

    return {
      name: group.name,
      summary,
      mature: toCount(summary.maturity),
      total: toCount(summary.total),
      characteristics: characteristicNames.map(name => characteristicsByName.get(name) || {
        group: name.split(" ").map(word => word[0] + word.slice(1).toLowerCase()).join(" "),
        maturity: "—",
        total: "—",
        progress: "—"
      }),
      hasData: toCount(summary.maturity) > 0 || toCount(summary.total) > 0
    };
  });
}

function renderMaturityProgressTable(maturityTable) {
  if (window.maturityGroupCharts) {
    window.maturityGroupCharts.forEach(chart => chart.destroy());
  }
  window.maturityGroupCharts = [];

  if (!maturityTable || maturityTable.length === 0) {
    return `<div class="panel" style="margin-bottom:0; height:100%; display:flex; align-items:center; justify-content:center; color:#6b7280; padding:40px;">No Maturity Data Found</div>`;
  }

  const groups = getMaturityGroupData(maturityTable);
  const chartGroups = groups.filter(group => ["ALL PARTS", "MECH", "HW"].includes(group.name) && group.hasData);
  const functionNotSpecified = groups.find(group => group.name === "FUNCTION NOT SPECIFIED" && group.hasData);
  const groupCards = chartGroups.map((group, index) => {
    const chartId = `maturityGroupChart${index}`;
    const progress = group.total ? Math.round(group.mature / group.total * 100) : 0;
    return `<section class="maturity-group-card">
        <h4 class="maturity-group-title">${group.name}</h4>
        <div class="maturity-group-layout">
          <div class="maturity-characteristic-table">
            <table>
              <thead><tr><th>Characteristic</th><th>≥90% Maturity</th><th>Total</th><th>Progress</th></tr></thead>
              <tbody>
                ${group.characteristics.map(row => `<tr>
                  <td>${row.group}</td>
                  <td>${row.maturity}</td>
                  <td>${row.total}</td>
                  <td>${row.progress}</td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
          <div class="maturity-donut-panel">
            <div class="maturity-donut-wrap">
              <canvas id="${chartId}" aria-label="${group.name} maturity distribution doughnut chart"></canvas>
              <div class="maturity-donut-center"><strong>${progress}%</strong><span>Maturity</span></div>
            </div>
            <p class="maturity-donut-value">${group.mature} / ${group.total} at ≥90% maturity</p>
            <div class="maturity-chart-legend">
              <span><i class="maturity-legend-complete"></i>≥90% Maturity</span>
              <span><i class="maturity-legend-remaining"></i>Below 90%</span>
            </div>
          </div>
        </div>
      </section>`;
  }).join("");

  const functionNotSpecifiedHtml = functionNotSpecified
    ? `<div class="maturity-unspecified-summary"><strong>FUNCTION NOT SPECIFIED</strong><span>${functionNotSpecified.mature} of ${functionNotSpecified.total} at ≥90% maturity</span><span>${functionNotSpecified.summary.progress}</span></div>`
    : "";

  return `
        <section class="maturity-dashboard">
          <div class="panel-header maturity-dashboard-title"><div><h3>PARTS BY FUNCTION &amp; CATEGORY — MATURITY PROGRESS</h3></div></div>
          <div class="maturity-group-list">
            ${groupCards || `<div class="panel maturity-no-data">No group maturity data available.</div>`}
            ${functionNotSpecifiedHtml}
          </div>
        </section>
    `;
}

function renderMaturityGroupCharts(maturityTable) {
  const groups = getMaturityGroupData(maturityTable)
    .filter(group => ["ALL PARTS", "MECH", "HW"].includes(group.name) && group.hasData);

  window.maturityGroupCharts = groups.map((group, index) => {
    const belowNinety = Math.max(group.total - group.mature, 0);
    const canvas = $(`maturityGroupChart${index}`);
    if (!canvas) throw new Error(`Missing maturity chart canvas for ${group.name}.`);

    return new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: ["≥90% Maturity", "Below 90%"],
        datasets: [{
          data: [group.mature, belowNinety],
          backgroundColor: ["#1769e0", "#e5eef2"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: context => `${context.label}: ${context.raw}`
            }
          }
        }
      }
    });
  });
}

window.togglePartDetails = function (id) {
  if (!id || !currentSelectedProject) return;

  // If clicking the currently open one, close it
  if (currentlyOpenPartId === id) {
    document.getElementById(`part-content-${id}`).style.display = 'none';
    document.getElementById(`part-icon-${id}`).textContent = '▼';
    document.getElementById(`part-header-${id}`).style.background = '#f9fafb';
    currentlyOpenPartId = null;
    return;
  }

  // Close previously open one
  if (currentlyOpenPartId !== null) {
    const prevContent = document.getElementById(`part-content-${currentlyOpenPartId}`);
    if (prevContent) {
      prevContent.style.display = 'none';
      prevContent.innerHTML = ''; // free memory
      document.getElementById(`part-icon-${currentlyOpenPartId}`).textContent = '▼';
      document.getElementById(`part-header-${currentlyOpenPartId}`).style.background = '#f9fafb';
    }
  }

  const pd = loadedProjectsData[currentSelectedProject];
  const data = pd.partMap[id.toString()];
  if (!data) return;

  // Generate HTML for details
  let detailsHTML = `
        <div class="table-scroll" style="margin-bottom: 24px; border-radius: 8px; border: 1px solid var(--border); background: #fff;">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="background: #f9fafb; font-size: 11px; color: #6b7280; text-transform: uppercase;">
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">PART NUMBER</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">PART TYPE</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">PE KICK-OFF</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">BOM REV</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">REV</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">QTY</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">CURRENT STAGE</th>
                        <th style="padding: 12px 16px; border-bottom: 1px solid var(--border); font-weight: 600;">READINESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-size: 14px; font-weight: 500; color: #111827;">
                        <td style="padding: 12px 16px;">${data.partNumber}</td>
                        <td style="padding: 12px 16px;">${data.partType}</td>
                        <td style="padding: 12px 16px;">${data.peKickOff}</td>
                        <td style="padding: 12px 16px;">${data.bomRev}</td>
                        <td style="padding: 12px 16px;">${data.rev}</td>
                        <td style="padding: 12px 16px;">${data.qty}</td>
                        <td style="padding: 12px 16px; color: #1769e0;">${data.currentStage}</td>
                        <td style="padding: 12px 16px; color: #1769e0;">${data.readiness}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="part-cards-grid">
            ${data.cards.map(c => `
                <div class="part-card">
                    <div class="part-card-header">
                        <span class="part-card-title">${c.title}</span>
                        <span class="${c.statusClass}">${c.status}</span>
                    </div>
                    ${c.variance && c.variance !== '-' ? `<div class="variance-badge">${c.variance}</div>` : ''}
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                        ${c.fields.map(f => `<div style="font-size: 11px;"><span style="color:#71839d">${f.l}</span> <strong style="color:#10243f">${f.v}</strong></div>`).join("")}
                    </div>
                    ${c.remarks && c.remarks !== '-' ? `<div class="part-card-remarks">Remarks: <strong>${c.remarks}</strong></div>` : ''}
                </div>
            `).join("")}
        </div>
    `;

  currentlyOpenPartId = id;
  const contentDiv = document.getElementById(`part-content-${id}`);
  contentDiv.innerHTML = detailsHTML;
  contentDiv.style.display = 'block';
  document.getElementById(`part-icon-${id}`).textContent = '▲';
  document.getElementById(`part-header-${id}`).style.background = '#eff6ff';
};

function renderPartQualificationPage() {
  // Always render immediately using whatever is in cache
  if (currentSelectedProject) {
    renderPQDetailView(currentSelectedProject);
  } else {
    renderPQMainView();
  }
  // Then initiate a background load/refresh if necessary
  initPartQualification(false);
}

$("backToOverview").onclick = () => { selectedProduct = null; showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview" };
$("productsBackToOverview").onclick = () => { showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview" };
$("validationPortfolioBackToOverview").onclick = () => {
  showView("overview");
  $("breadcrumb").textContent = "Dashboard / Overview";
  $("pageTitle").textContent = "V&V Overview";
};
$("productPortfolioBackToOverview").onclick = () => {
  showView("overview");
  $("breadcrumb").textContent = "Dashboard / Overview";
  $("pageTitle").textContent = "V&V Overview";
};
$("resetBtn").onclick = () => location.reload();
document.querySelectorAll(".overview-navigation-card").forEach(card => {
  const navigateToPortfolio = () => {
    const destinationView = card.dataset.destinationView;
    const titles = {
      validationPortfolio: "Validation Portfolio",
      productPortfolio: "Product Portfolio"
    };
    if (!titles[destinationView]) return;

    showView(destinationView);
    $("breadcrumb").textContent = `Dashboard / ${titles[destinationView]}`;
    $("pageTitle").textContent = titles[destinationView];
    window.scrollTo(0, 0);
  };

  card.onclick = navigateToPortfolio;
  card.onkeydown = event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToPortfolio();
    }
  };
});
renderOverview();
loadNurseryFeederWorkbook();
loadPM250Workbook();
loadFishFeederWorkbook();
