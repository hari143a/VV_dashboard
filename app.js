const areaData = {
  sourcing: [
    {
      name: "Mono Cell Solar Panel", status: "In Validation", description: "Validation of sourced solar panel for electrical, environmental and performance requirements.", tests: 150, executed: 45, pass: 40, fail: 5, blocked: 0, cases: [
        ["SP-001", "Electrical", "Open-circuit voltage verification", "PASS", "High"], ["SP-002", "Electrical", "Output under rated illumination", "PASS", "High"], ["SP-003", "Environmental", "Outdoor temperature exposure", "FAIL", "Medium"], ["SP-004", "Mechanical", "Mounting integrity", "PASS", "Medium"]]
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
      name: "IP Rating Test", status: "In Validation", description: "Engineering validation of IP rating compliance.", tests: 140, executed: 70, pass: 65, fail: 5, blocked: 0, cases: [
        ["IP-001", "Environmental", "Water ingress test", "PASS", "High"], ["IP-002", "Environmental", "Dust ingress test", "FAIL", "High"], ["IP-003", "Mechanical", "Seal integrity", "NOT EXECUTED", "Medium"]]
    },
    {
      name: "Hopper Top & Bottom Lid", status: "In Validation", description: "Engineering validation of Hopper Top & Bottom Lid mechanics and fitment.", tests: 164, executed: 123, pass: 118, fail: 5, blocked: 0, cases: [
        ["HL-001", "Mechanical", "Lid fitment", "PASS", "High"], ["HL-002", "Functional", "Opening and closing mechanism", "FAIL", "High"], ["HL-003", "Reliability", "Hinge durability", "NOT EXECUTED", "Medium"]]
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
    id: "pm250-max", name: "PM 250 Max", status: "In Validation", description: "Validation program for PM 250 Max feeding platform and associated controls.", tests: 250, executed: 50, pass: 42, fail: 8, blocked: 0, categories: [{ name: "Functional", pass: 94, fail: 1 }, { name: "Performance", pass: 88, fail: 2 }, { name: "Safety", pass: 100, fail: 0 }, { name: "Reliability", pass: 84, fail: 2 }, { name: "Serviceability", pass: 90, fail: 0 }], cases: [
      ["PM-001", "Functional", "Power-on sequence", "Controller", "PASS", "High", "Venkatesh"], ["PM-002", "Performance", "Feed rate accuracy", "Dispenser", "PASS", "High", "Akash"], ["PM-003", "Safety", "Emergency stop", "Safety", "PASS", "High", "Kiran"], ["PM-004", "Reliability", "Extended dispensing cycle", "Dispenser", "FAIL", "High", "Akash"], ["PM-005", "Performance", "Motor current profile", "Motor", "FAIL", "Medium", "Venkatesh"]]
  },
  {
    id: "nursery-feeder", name: "Nursery Feeder", status: "In Validation", description: "Nursery Feeder validation covering movement, feeding, safety, reliability and serviceability.", tests: 180, executed: 54, pass: 48, fail: 6, blocked: 0, categories: [{ name: "Functional", pass: 95, fail: 2 }, { name: "Performance", pass: 87, fail: 3 }, { name: "Safety", pass: 100, fail: 0 }, { name: "Reliability", pass: 82, fail: 2 }, { name: "Serviceability", pass: 91, fail: 0 }], cases: [
      ["NF-001", "Safety", "Emergency stop operation", "Safety", "PASS", "High", "Venkatesh"], ["NF-002", "Movement", "Forward travel consistency", "Mover", "PASS", "High", "Akash"], ["NF-003", "Performance", "Travel time consistency", "Performance", "PASS", "Medium", "Kiran"], ["NF-004", "Feeding", "Feed dispensing while stationary", "Dispenser", "FAIL", "High", "Venkatesh"]]
  },
  {
    id: "fish-feeder", name: "Fish Feeder", status: "Open", description: "Validation dashboard for Fish Feeder monitoring and pond data workflows.", tests: 130, executed: 0, pass: 0, fail: 0, blocked: 0, categories: [{ name: "Functional", pass: 0, fail: 0 }, { name: "Performance", pass: 0, fail: 0 }, { name: "Safety", pass: 0, fail: 0 }, { name: "Reliability", pass: 0, fail: 0 }, { name: "Data", pass: 0, fail: 0 }], cases: [
      ["FF-001", "Functional", "Sensor data acquisition", "Sensors", "NOT EXECUTED", "High", "Akash"], ["FF-002", "Data", "Timestamp verification", "Cloud", "NOT EXECUTED", "High", "Venkatesh"], ["FF-003", "Performance", "Data sync latency", "Cloud", "NOT EXECUTED", "Medium", "Kiran"]]
  }
];



const $ = id => document.getElementById(id), pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const kpi = (l, v, n = "") => { const icons = { "Validation Items": "▤", "Test Cases": "☷", "Executed": "▶", "Passed": "✓", "Failed": "×", "Blocked": "!", "Overall Pass Rate": "◔", "Total Test Cases": "☷", "Pass Rate": "◔" }; const tone = { "Passed": "green", "Failed": "red", "Executed": "cyan", "Validation Items": "blue", "Test Cases": "green", "Overall Pass Rate": "blue", "Blocked": "purple", "Total Test Cases": "green", "Pass Rate": "blue" }; return `<div class="kpi"><div class="kpi-icon ${tone[l] || "blue"}">${icons[l] || "•"}</div><div class="kpi-content"><div class="kpi-label">${l}</div><div class="kpi-value">${v}</div><div class="kpi-note">${n}</div></div></div>` };
const badge = s => `<span class="status status-${s.replaceAll(" ", "-")}">${s}</span>`;

function metrics(item) {
  const cases = item.cases || [];
  const tests = item.tests ?? cases.length;
  const executed = item.executed ?? cases.filter(c => c[3] && c[3] !== "NOT EXECUTED").length;
  const pass = item.pass ?? cases.filter(c => c[3] === "PASS").length;
  const fail = item.fail ?? cases.filter(c => c[3] === "FAIL").length;
  return { tests, executed, pass, fail, blocked: item.blocked || 0, progress: pct(executed, tests), passRate: pct(pass, executed) };
}
function allItems() {
  return [
    ...products.map(p => ({ area: "Products", id: p.id, name: p.name, status: p.status, cases: p.cases, tests: p.tests, executed: p.executed, pass: p.pass, fail: p.fail, blocked: p.blocked })),
    ...Object.entries(areaData).flatMap(([area, items]) => items.map((x, i) => ({ ...x, area: area === "fieldIssues" ? "Field Issues" : area === "rnd" ? "R&D" : area[0].toUpperCase() + area.slice(1), id: `${area}-${i}` })))
  ];
}
function overall() {
  return allItems().reduce((a, x) => { const m = metrics(x); a.items++; a.tests += m.tests; a.executed += m.executed; a.pass += m.pass; a.fail += m.fail; a.blocked += m.blocked; return a }, { items: 0, tests: 0, executed: 0, pass: 0, fail: 0, blocked: 0 });
}
function renderOverview() {
  const s = overall();
  $("overviewKpis").innerHTML = [
    kpi("Validation Items", s.items, "All areas"),
    kpi("Test Cases", s.tests, "Across portfolio"),
    kpi("Executed", s.executed, `${pct(s.executed, s.tests)}% execution`),
    kpi("Passed", s.pass, "Executed tests"),
    kpi("Failed", s.fail, "Requires attention")
  ].join("");

  renderAreaTable("productsTable", products, "productCount", "Products", true);
  renderAreaTable("sourcingTable", areaData.sourcing, "sourcingCount", "Sourcing", true);
  renderAreaTable("fieldIssuesTable", areaData.fieldIssues, "fieldIssuesCount", "Field Issues", true);
  renderAreaTable("qualityTable", areaData.quality, "qualityCount", "Quality", true);
  renderAreaTable("rndTable", areaData.rnd, "rndCount", "R&D", true);
  renderAreaTable("nitTable", areaData.nit, "nitCount", "NIT", true);
  renderPortfolioCharts();
}

function renderProductsPage() {
  $("productsPageCount").textContent = `${products.length} products`;
  $("productsPageTable").innerHTML = products.map((x, i) => {
    const m = metrics(x);
    return `<tr><td><button class="product-link" data-product="${x.id}">${x.name}</button></td><td>${m.tests}</td><td>${m.executed}</td><td>${m.pass}</td><td>${m.fail}</td><td><div class="progress-track"><div class="progress-fill" style="width:${m.progress}%"></div></div><span class="progress-text">${m.progress}%</span></td><td>${badge(x.status)}</td></tr>`;
  }).join("");
  $("productsPageTable").querySelectorAll(".product-link").forEach(b => b.onclick = () => showProduct(b.dataset.product));
}

function renderAreaTable(id, items, countId, label, clickable) {
  let total = items.length, open = 0, inProgress = 0, complete = 0, rejects = 0;
  items.forEach(x => {
    let s = (x.status || "").toLowerCase();
    if (s.includes("open")) open++;
    else if (s.includes("progress") || s.includes("in validation")) inProgress++;
    else if (s.includes("complete")) complete++;
    else if (s.includes("reject")) rejects++;
  });

  $(countId).innerHTML = `<span style="font-size:12px; color:#6b7280; font-weight:normal;">Total: <strong style="color:#111827">${total}</strong> &nbsp;|&nbsp; Open: <strong style="color:#111827">${open}</strong> &nbsp;|&nbsp; In Progress: <strong style="color:#1769e0">${inProgress}</strong> &nbsp;|&nbsp; Complete: <strong style="color:var(--success)">${complete}</strong> &nbsp;|&nbsp; Rejects: <strong style="color:var(--danger)">${rejects}</strong></span>`;
  $(id).innerHTML = items.map((x, i) => {
    const m = metrics(x);
    const detailId = label === "Products" ? x.id : `${label}-${i}`;
    return `<tr><td>${clickable ? `<button class="product-link" data-area="${label}" data-index="${i}" data-id="${detailId}">${x.name}</button>` : `<strong>${x.name}</strong>`}</td><td>${m.tests}</td><td>${m.executed}</td><td>${m.pass}</td><td>${m.fail}</td><td><div class="progress-track"><div class="progress-fill" style="width:${m.progress}%"></div></div><span class="progress-text">${m.progress}%</span></td><td>${badge(x.status)}</td></tr>`;
  }).join("");
  $(id).querySelectorAll(".product-link").forEach(btn => btn.onclick = () => {
    if (btn.dataset.area === "Products") showProduct(btn.dataset.id);
    else showAreaItem(btn.dataset.area, +btn.dataset.index);
  });
}
function renderPortfolioCharts() {
  const s = overall();
  if (window.statusChart) statusChart.destroy();
  statusChart = new Chart($("portfolioStatusChart"), { type: "doughnut", data: { labels: ["Passed", "Failed", "Not Executed"], datasets: [{ data: [s.pass, s.fail, s.tests - s.executed] }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } } });
}
let selectedProduct = null, categoryChart;
function showProduct(id) {
  const p = products.find(x => x.id === id); if (!p) return;
  showDetail(p, "Products", p.name);
}
function showAreaItem(area, index) {
  const map = { "Sourcing": "sourcing", "Field Issues": "fieldIssues", "Quality": "quality", "R&D": "rnd", "NIT": "nit" };
  const item = areaData[map[area]][index]; if (!item) return;
  showDetail(item, area, item.name);
}
function showDetail(item, area, name) {
  selectedProduct = item; showView("product");
  const viewMap = { "Products": "products", "Sourcing": "sourcing", "Field Issues": "fieldIssues", "Quality": "quality", "R&D": "rnd", "NIT": "nit" };
  $("backToParent").textContent = `← Back to ${area}`;
  $("backToParent").onclick = () => { const v = viewMap[area]; if (v) document.querySelector(`.nav-item[data-view="${v}"]`)?.click(); };
  $("breadcrumb").textContent = `Dashboard / ${area} / ${name}`; $("pageTitle").textContent = name;
  if ($("productTitle")) $("productTitle").textContent = name; $("productDescription").textContent = item.description || "Validation item and associated test cases.";
  $("productStatus").textContent = item.status || "In Validation";
  const m = metrics(item);
  $("productKpis").innerHTML = [kpi("Total Test Cases", m.tests, "Planned"), kpi("Executed", m.executed, `${m.progress}% execution`), kpi("Passed", m.pass, "Executed"), kpi("Failed", m.fail, "Attention"), kpi("Blocked", m.blocked, "Blocked")].join("");
  const getColor = (v) => v <= 20 ? "var(--danger)" : v <= 79 ? "#f97316" : "var(--success)";
  $("executionPercent").textContent = m.progress + "%"; $("executionBar").style.width = m.progress + "%";
  $("executionBar").style.background = getColor(m.progress);
  renderFailuresFromCases(item); setupFiltersForItem(item); renderCases(item.cases || []);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderFailuresFromCases(item) {
  const cases = item.cases || [], map = {};
  cases.filter(c => c[3] === "FAIL").forEach(c => map[c[1]] = (map[c[1]] || 0) + 1);
  const entries = Object.entries(map), max = Math.max(...entries.map(x => x[1]), 1);
  $("failureList").innerHTML = entries.length ? entries.map(([name, n]) => `<div class="failure-item"><div class="failure-name">${name}</div><div class="failure-count">${n}</div><div class="failure-bar"><span style="width:${n / max * 100}%"></span></div></div>`).join("") : `<div class="small">No failures recorded.</div>`;
}
function setupFiltersForItem(item) {
  const cases = item.cases || [];
  $("categoryFilter").innerHTML = '<option value="">All Categories</option>' + [...new Set(cases.map(c => c[1]))].map(x => `<option>${x}</option>`).join("");
  $("statusFilter").innerHTML = '<option value="">All Statuses</option>' + [...new Set(cases.map(c => c[3] || c[4]))].map(x => `<option>${x}</option>`).join("");
  $("priorityFilter").innerHTML = '<option value="">All Priorities</option>' + [...new Set(cases.map(c => c[4] || c[5]))].map(x => `<option>${x}</option>`).join("");
  ["testSearch", "categoryFilter", "statusFilter", "priorityFilter"].forEach(id => $(id).oninput = filterCases);
  $("testSearch").value = ""; $("categoryFilter").value = ""; $("statusFilter").value = ""; $("priorityFilter").value = "";
}
function filterCases() {
  if (!selectedProduct) return;
  const cases = selectedProduct.cases || [], q = $("testSearch").value.toLowerCase(), cat = $("categoryFilter").value, st = $("statusFilter").value, pri = $("priorityFilter").value;
  renderCases(cases.filter(c => {
    const status = c[3] || c[4], priority = c[4] || c[5];
    return (!q || c.join(" ").toLowerCase().includes(q)) && (!cat || c[1] === cat) && (!st || status === st) && (!pri || priority === pri);
  }));
}
function renderCases(cases) {
  $("resultCount").textContent = `${cases.length} test case${cases.length !== 1 ? "s" : ""}`;
  $("testCaseTable").innerHTML = cases.length ? cases.map(c => {
    const isArea = c.length <= 5, status = c[3] || c[4], priority = c[4] || c[5], module = isArea ? "—" : c[3], tester = isArea ? "—" : c[6];
    return `<tr><td><strong>${c[0]}</strong></td><td>${c[1]}</td><td>${c[2]}</td><td>${module}</td><td>${badge(status)}</td><td>${priority}</td><td>${tester}</td></tr>`;
  }).join("") : `<tr><td colspan="7" style="text-align:center;color:#6b7280;padding:30px">No matching test cases.</td></tr>`;
}
function showView(v) {
  document.querySelectorAll(".view").forEach(x => x.classList.remove("active"));
  const el = $(v + "View");
  if (el) el.classList.add("active");
  document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x.dataset.view === v));
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
document.querySelectorAll(".nav-item").forEach(btn => btn.onclick = () => {
  const v = btn.dataset.view; showView(v);
  const title = v === "overview" ? "V&V Overview" : v === "products" ? "Products" : v === "fieldIssues" ? "Field Issues" : v === "rnd" ? "R&D" : v === "nit" ? "NIT" : v === "partQualification" ? "Part Qualification" : v.charAt(0).toUpperCase() + v.slice(1);
  $("breadcrumb").textContent = `Dashboard / ${title}`; $("pageTitle").textContent = title;
  if (v === "products") renderProductsPage();
  if (v === "sourcing") renderModuleLanding("sourcing", "Sourcing");
  if (v === "fieldIssues") renderModuleLanding("fieldIssues", "Field Issues");
  if (v === "quality") renderModuleLanding("quality", "Quality");
  if (v === "rnd") renderModuleLanding("rnd", "R&D");
  if (v === "nit") renderModuleLanding("nit", "NIT");
  if (v === "partQualification") renderPartQualificationPage();
});

const projectsConfig = {
  fishFeeder: { id: "fishFeeder", name: "Fish Feeder 2026", file: "excel files/Part_Qualification_FF_Tracker_2026.xlsx", sheet: "FF_2026" },
  nurseryFeeder: { id: "nurseryFeeder", name: "Nursery Feeder 2026", file: "excel files/Part_Qualification_NF_Tracker_2026.xlsx", sheet: "NF_2026" }
};

let loadedProjectsData = {};
let currentSelectedProject = null;
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
  for(let i=0; i<parts.length; i++) {
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
                        if (i < rows.length - 1 && (!rows[i+1] || !rows[i+1][cStage])) break;
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
                const dataRow = rows[i+1];
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
    });
  });

  // Setup auto-refresh every 60 seconds (non-blocking)
  if (!autoRefreshTimer) {
    autoRefreshTimer = setInterval(() => {
      ['fishFeeder', 'nurseryFeeder'].forEach(key => {
        loadExcelProject(key, true).then(() => {
          refreshActivePQView();
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
                    <option value="fishFeeder">Fish Feeder 2026</option>
                    <option value="nurseryFeeder">Nursery Feeder 2026</option>
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

window.openProjectDetail = function (projectKey) {
  currentSelectedProject = projectKey;
  renderPQDetailView(projectKey);
};

function renderPQDetailView(projectKey) {
  const v = $("partQualificationView");
  const pd = loadedProjectsData[projectKey];
  if (!pd) return;

  let html = `
        <div class="page-intro" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
                <h2>${pd.config.name} — Part Qualification</h2>
                <p>Readiness Stage Progress from ${pd.config.sheet}</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <select id="topProjectDropdownDetail" onchange="handleTopDropdown(this.value)" style="padding:8px 12px; border-radius:6px; border:1px solid var(--border); background:#fff; font-weight:500;">
                    <option value="">Select Project</option>
                    <option value="fishFeeder" ${projectKey === 'fishFeeder' ? 'selected' : ''}>Fish Feeder 2026</option>
                    <option value="nurseryFeeder" ${projectKey === 'nurseryFeeder' ? 'selected' : ''}>Nursery Feeder 2026</option>
                </select>
            </div>
        </div>
        
        <style>
          .pq-dashboard-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 24px;
            align-items: start;
          }
        </style>

        <div class="pq-dashboard-grid">
            <div class="panel" style="margin-bottom:0; height:100%;">
                <div class="panel-header"><div><h3>READINESS STAGE PROGRESS</h3></div></div>
                <div class="table-scroll">
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
            </div>

            ${renderMaturityProgressTable(pd.maturityTable)}
        </div>
        
        <div class="part-details-selector">
            <strong style="color: #10243f;">Part Details:</strong>
            <select id="partSelect" onchange="renderPartDetails(this.value)">
                <option value="">Select a part...</option>
                ${pd.parts.map(p => {
    const disp = p.partDesc && p.partDesc !== '-' ? p.partDesc : p.partNumber;
    return `<option value="${p.id}">${disp}</option>`;
  }).join("")}
            </select>
        </div>
        <div id="partDetailsContainer" style="padding: 40px; text-align: center; color: #6b7280; background: #fff; border-radius: 12px; border: 1px solid var(--border);">
            Please select a part from the dropdown to view its details.
        </div>
    `;

    v.innerHTML = html;
}

function renderMaturityProgressTable(maturityTable) {
    if (!maturityTable || maturityTable.length === 0) {
        return `<div class="panel" style="margin-bottom:0; height:100%; display:flex; align-items:center; justify-content:center; color:#6b7280; padding:40px;">No Maturity Data Found</div>`;
    }

    let html = `
        <div class="panel" style="margin-bottom:0; height: 100%;">
            <div class="panel-header"><div><h3 style="text-transform: uppercase;">PARTS BY FUNCTION & CATEGORY — MATURITY PROGRESS</h3></div></div>
            <div class="table-scroll">
                <table>
                    <thead>
                        <tr>
                            <th style="text-align:left;">Group</th>
                            <th style="text-align:center;">&ge;90% Maturity</th>
                            <th style="text-align:center;">Total</th>
                            <th style="text-align:center;">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    maturityTable.forEach(row => {
        const isMainGroup = ["ALL PARTS", "MECH", "HW", "FUNCTION NOT SPECIFIED"].includes(row.group.toUpperCase()) || (!row.group.includes("-") && row.group.toUpperCase() === row.group);
        const trStyle = isMainGroup ? `background:#f9fafb; font-weight:600; color:#111827;` : ``;
        const tdPadding = isMainGroup ? `padding-left:16px;` : `padding-left:32px; color:#4b5563;`;

        html += `
            <tr style="${trStyle}">
                <td style="${tdPadding}">${row.group}</td>
                <td style="text-align:center;">${row.maturity}</td>
                <td style="text-align:center;">${row.total}</td>
                <td style="text-align:center; font-weight:500; color:#1769e0;">${row.progress}</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return html;
}

window.renderPartDetails = function (id) {
  const container = $("partDetailsContainer");
  if (!id || !currentSelectedProject) {
    container.innerHTML = `Please select a part from the dropdown to view its details.`;
    container.style.padding = "40px";
    container.style.textAlign = "center";
    container.style.background = "#fff";
    container.style.border = "1px solid var(--border)";
    return;
  }

  const pd = loadedProjectsData[currentSelectedProject];
  const data = pd.partMap[id.toString()];
  if (!data) return;

  container.style.padding = "0";
  container.style.textAlign = "left";
  container.style.background = "transparent";
  container.style.border = "none";

  container.innerHTML = `
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
$("resetBtn").onclick = () => location.reload();
renderOverview();
