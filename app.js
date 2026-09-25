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
  const title = v === "overview" ? "V&V Overview" : v === "products" ? "Products" : v === "fieldIssues" ? "Field Issues" : v === "rnd" ? "R&D" : v === "nit" ? "NIT" : v.charAt(0).toUpperCase() + v.slice(1);
  $("breadcrumb").textContent = `Dashboard / ${title}`; $("pageTitle").textContent = title;
  if (v === "products") renderProductsPage();
  if (v === "sourcing") renderModuleLanding("sourcing", "Sourcing");
  if (v === "fieldIssues") renderModuleLanding("fieldIssues", "Field Issues");
  if (v === "quality") renderModuleLanding("quality", "Quality");
  if (v === "rnd") renderModuleLanding("rnd", "R&D");
  if (v === "nit") renderModuleLanding("nit", "NIT");
});
$("backToOverview").onclick = () => { selectedProduct = null; showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview" };
$("productsBackToOverview").onclick = () => { showView("overview"); $("breadcrumb").textContent = "Dashboard / Overview"; $("pageTitle").textContent = "V&V Overview" };
$("resetBtn").onclick = () => location.reload();
renderOverview();
