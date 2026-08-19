// Dataset catalog registry
const datasets = [
  {
    id: "sru-mind-01",
    name: "SRU-MIND: Longitudinal Brain MRI Study",
    shortDesc: "A multi-year neuroimaging dataset containing high-resolution T1, T2, and fMRI brain scans of subjects tracking cognitive aging.",
    fullDesc: "The SRU-MIND dataset is a longitudinal neuroimaging database designed to study structural and functional changes in the human brain during cognitive aging. Over a 5-year period, 120 participants aged 60-85 underwent annual MRI scanning sessions combined with extensive neuropsychological testing. This dataset is optimized for researchers studying Alzheimer's disease, cognitive decline, and neural network connectivity changes in older populations.",
    category: "Biomedical",
    type: "Neuroimaging (MRI)",
    size: 4613734400000, // 4.2 TB in bytes
    sizeStr: "4.2 TB",
    accessType: "Controlled",
    published: "March 15, 2025",
    pi: "Dr. Arthur Vance, Department of Cognitive Neurology",
    irbId: "IRB-2024-M304",
    citation: "Vance, A. & SRU Neuro-Collaborative. (2025). SRU-MIND: Longitudinal Neuroimaging and Cognitive Profiles of Healthy and Pathological Aging. SR University Research Repository. DOI: 10.1234/sru.neuro.2025.01",
    files: [
      { name: "sru_mind_raw_t1_t2_nifti.tar.gz", size: "1.8 TB", format: "NIfTI (.nii.gz)" },
      { name: "sru_mind_fmri_resting_state.tar.gz", size: "2.1 TB", format: "NIfTI (.nii.gz)" },
      { name: "sru_mind_demographics_neuropsych.csv", size: "320 KB", format: "CSV" },
      { name: "sru_mind_processing_pipeline_bids.zip", size: "12 GB", format: "ZIP/Scripts" }
    ],
    metadata: {
      "Study Population": "120 Subjects (58% Female, 42% Male)",
      "Age Range": "60 - 85 years (Mean: 71.4)",
      "Imaging Modalities": "3T T1-w, T2-w, rs-fMRI, DTI",
      "Format Specification": "Brain Imaging Data Structure (BIDS) standard",
      "Scanning Location": "SRU Biomedical Imaging Research Facility"
    }
  },
  {
    id: "sru-clim-02",
    name: "SRU-CLIM: Midwest Regional Climate Anomalies",
    shortDesc: "High-resolution daily grid dataset of temperature, precipitation, and soil moisture deviations across the US Midwest from 1950 to 2025.",
    fullDesc: "The SRU-CLIM dataset provides spatial-temporal grid data of surface climate indicators across nine Midwestern US states. Utilizing historical weather station arrays and satellite reconciliation, this dataset models temperature gradients, convective precipitation, and deep soil moisture anomalies. It serves as a benchmark for training machine learning models for agricultural yield prediction, flood vulnerability assessments, and climate modeling.",
    category: "Environmental",
    type: "Climate NetCDF",
    size: 1977344000000, // 1.8 TB
    sizeStr: "1.8 TB",
    accessType: "Open",
    published: "January 10, 2026",
    pi: "Prof. Elena Rostova, Institute of Atmospheric Sciences",
    irbId: "Exempt (Non-Human Subjects)",
    citation: "Rostova, E., & Miller, G. (2026). SRU-CLIM: Daily High-Resolution Gridded Meteorological Anomalies for the American Midwest (1950-2025). Earth Systems Science Archives. DOI: 10.1234/sru.climate.2026.02",
    files: [
      { name: "sru_clim_midwest_temp_daily_1950_2025.nc", size: "850 GB", format: "NetCDF (.nc)" },
      { name: "sru_clim_midwest_precip_daily_1950_2025.nc", size: "720 GB", format: "NetCDF (.nc)" },
      { name: "sru_clim_soil_moisture_indices.nc", size: "230 GB", format: "NetCDF (.nc)" },
      { name: "readme_metadata_variable_definition.pdf", size: "1.2 MB", format: "PDF" }
    ],
    metadata: {
      "Spatial Resolution": "4km x 4km grid cells",
      "Temporal Resolution": "Daily averages",
      "Temporal Coverage": "January 1, 1950 - December 31, 2025",
      "Variables Included": "Tmin, Tmax, Precip, Soil Temp (10cm), Relative Humidity",
      "Data Sources": "US NOAA GHCN stations, MODIS land surface models"
    }
  },
  {
    id: "sru-gen-03",
    name: "SRU-GEN: Pediatric Exome Sequencing Registry",
    shortDesc: "Whole-exome sequencing aligned alignments and phenotypic tags for 250 pediatric patients with rare developmental anomalies.",
    fullDesc: "The SRU-GEN registry houses whole-exome sequencing (WES) data for pediatric cohorts exhibiting idiopathic developmental delays, congenital heart defects, or neurological disorders. Developed in partnership with the SRU Medical Center, the registry includes high-quality somatic/germline BAM alignments, variant call files (VCFs), and comprehensive clinical phenotypical profiles mapped to the Human Phenotype Ontology (HPO).",
    category: "Biomedical",
    type: "Genomics",
    size: 3848240000000, // 3.5 TB
    sizeStr: "3.5 TB",
    accessType: "Controlled",
    published: "May 08, 2025",
    pi: "Dr. Raymond Chen, Department of Pediatric Genetics",
    irbId: "IRB-2024-G112",
    citation: "Chen, R., Al-Mutairi, S., & SRU Genomics Core. (2025). Exome Sequencing and Phenotypical Characterization of Rare Pediatric Syndromes. Genetics in Medicine Research. DOI: 10.1234/sru.gen.2025.03",
    files: [
      { name: "sru_gen_pediatric_cohort_variants_all.vcf.gz", size: "450 GB", format: "VCF (.vcf.gz)" },
      { name: "sru_gen_wes_alignments_bam.tar", size: "3.0 TB", format: "BAM (.bam)" },
      { name: "sru_gen_phenotype_clinical_data.xlsx", size: "1.4 MB", format: "Excel (.xlsx)" },
      { name: "sru_gen_variant_annotation_report.csv", size: "84 MB", format: "CSV" }
    ],
    metadata: {
      "Sequencing Platform": "Illumina NovaSeq 6000 (150bp paired-end)",
      "Target Coverage": "Average 100x exome coverage",
      "Cohort Size": "250 Patients + 500 Unaffected Parents (Trio format)",
      "Reference Assembly": "GRCh38 / hg38 genome build",
      "Phenotypic Terms": "Mapped using HPO (Human Phenotype Ontology)"
    }
  },
  {
    id: "sru-traffic-04",
    name: "SRU-TRAFFIC: Smart City Intersect Observations",
    shortDesc: "LiDAR records, camera object counts, and signal timing configurations from 15 major intersections in Tech City's downtown core.",
    fullDesc: "This dataset comprises traffic flow observation logs compiled over an 8-month period. Under the SRU Engineering Department's Urban Mobility initiative, 15 intersections were equipped with 3D LiDAR scanners and edge-processing cameras. The dataset contains anonymous bounding boxes for pedestrians, cyclists, and vehicle classifications, along with corresponding signal state durations and loop detector triggers.",
    category: "Engineering",
    type: "Sensor / Video",
    size: 912680000000, // 850 GB
    sizeStr: "850 GB",
    accessType: "Restricted",
    published: "November 22, 2025",
    pi: "Prof. Marcus Brody, Intelligent Transportation Systems Lab",
    irbId: "Exempt (Anonymized Public Space)",
    citation: "Brody, M. & Urban Mobility Group. (2025). High-Fidelity LiDAR and Signal Logs for Traffic Prediction in Medium-Density Downtowns. SRU Engineering Journal. DOI: 10.1234/sru.traffic.2025.04",
    files: [
      { name: "sru_traffic_lidar_pointclouds_pcd.tar", size: "620 GB", format: "PCD (.pcd)" },
      { name: "sru_traffic_camera_object_counts.csv", size: "180 GB", format: "CSV" },
      { name: "sru_traffic_signal_timing_plans.json", size: "48 GB", format: "JSON" },
      { name: "sru_traffic_calibration_matrices.yaml", size: "15 KB", format: "YAML" }
    ],
    metadata: {
      "Observation Period": "April 1, 2025 - November 30, 2025",
      "Locations": "15 Downtown Intersections, Tech City, USA",
      "Sensors": "Ouster OS1-64 LiDAR, 4K HD Cameras, Inductive Loops",
      "Anonymization": "Faces, license plates, and raw video omitted; vectors only",
      "Sample Rate": "LiDAR at 10Hz, Camera object detections at 30fps"
    }
  },
  {
    id: "sru-econ-05",
    name: "SRU-ECON: Global Supply Chain Disruptions Index",
    shortDesc: "A composite panel dataset of port delays, container freight rates, and manufacturing wait times from 2018 to 2026.",
    fullDesc: "The SRU-ECON Global Supply Chain Disruptions Index contains econometric models tracking macroeconomic indicators across major trade routes. Compiled by the SRU Department of Economics, the index aggregates daily container transit logs, port turn-around durations for 50 major hubs, Baltic Dry Index shifts, and regional Purchasing Managers' Index (PMI) delay variables to build a comprehensive panel dataset tracking economic friction.",
    category: "Social Sciences",
    type: "Macroeconomic Panel",
    size: 12880000000, // 12 GB
    sizeStr: "12 GB",
    accessType: "Open",
    published: "June 05, 2026",
    pi: "Dr. Linda Zhao, Center for Global Trade and Development",
    irbId: "Exempt (Economic Aggregates)",
    citation: "Zhao, L. (2026). SRU Global Supply Chain Disruptions Index: Panel Data on Maritime Friction and Macroeconomic Shock Transmission. SRU Economic Review. DOI: 10.1234/sru.econ.2026.05",
    files: [
      { name: "sru_econ_supply_chain_index_2018_2026.csv", size: "1.2 GB", format: "CSV" },
      { name: "sru_econ_port_delays_time_series.csv", size: "8.5 GB", format: "CSV" },
      { name: "sru_econ_freight_rates_panel.xlsx", size: "2.1 GB", format: "Excel (.xlsx)" },
      { name: "methodology_weighting_framework.pdf", size: "18 MB", format: "PDF" }
    ],
    metadata: {
      "Frequency": "Daily, weekly, and monthly aggregates",
      "Geographic Coverage": "Global (50 key ports, 18 maritime shipping channels)",
      "Time Span": "January 1, 2018 - May 31, 2026",
      "Firms Sampled": "Aggregate indexes represent 1,200+ freight forwarders",
      "Statistical Models": "Vector Autoregressions (VAR) weights applied"
    }
  },
  {
    id: "sru-eeg-06",
    name: "SRU-EEG: High-Density Sleep Registry",
    shortDesc: "64-channel sleep EEG recordings from 80 healthy and sleep-deprived subjects undergoing restorative cycles.",
    fullDesc: "The SRU-EEG sleep study provides physiological waveforms capturing sleep architecture. The dataset consists of full overnight polysomnography (PSG) captures featuring 64-channel electroencephalogram (EEG), EOG, EMG, and ECG signals. Participants completed two cycles: a normal 8-hour sleep baseline and a sleep-deprived cycle followed by daytime recovery. Ideal for researchers analyzing spindle/slow-wave dynamics, epilepsy markers, and neural restorative patterns.",
    category: "Biomedical",
    type: "EEG Waveforms",
    size: 2254800000000, // 2.1 TB
    sizeStr: "2.1 TB",
    accessType: "Restricted",
    published: "October 14, 2025",
    pi: "Dr. Raymond Vance, Sleep and Chronobiology Laboratory",
    irbId: "IRB-2024-EEG89",
    citation: "Vance, R. & Sleep Lab. (2025). SRU Sleep Registry: 64-Channel Polysomnography of Baseline and Post-Deprivation Recovery Cycles. Sleep Research Archive. DOI: 10.1234/sru.eeg.2025.06",
    files: [
      { name: "sru_eeg_raw_edf_signals.tar", size: "1.9 TB", format: "EDF (.edf)" },
      { name: "sru_eeg_visual_sleep_scores.csv", size: "240 MB", format: "CSV" },
      { name: "sru_eeg_demographics_actigraphy.xlsx", size: "15 MB", format: "Excel (.xlsx)" },
      { name: "sru_eeg_polysomnography_protocol.pdf", size: "4.5 MB", format: "PDF" }
    ],
    metadata: {
      "Signal Standard": "European Data Format (EDF)",
      "Sampling Rate": "500Hz sampling with 0.1-100Hz filter band",
      "Participants": "80 Healthy Adults (Ages 18-45, balanced gender)",
      "Electrodes": "64 EEG scalp channels placed according to 10-20 system",
      "Staging Guidelines": "Scored in 30-second epochs by certified polysomnographers"
    }
  }
];

// Client-side router based on window hash
function router() {
  const hash = window.location.hash || "#home";
  
  // Extract route and parameters
  // E.g. #dataset-detail?id=sru-mind-01 -> route: 'dataset-detail', params: { id: 'sru-mind-01' }
  const parts = hash.split("?");
  const route = parts[0];
  const params = {};
  
  if (parts[1]) {
    parts[1].split("&").forEach(param => {
      const [key, val] = param.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(val);
    });
  }

  // Define tab navigation elements
  const tabElements = document.querySelectorAll(".tab-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const heroSection = document.getElementById("heroSection");
  const statsBanner = document.getElementById("statsBanner");

  // Determine active page
  let activeRouteName = route.replace("#", "");
  
  // Check if target element exists
  const targetSection = document.getElementById(activeRouteName);
  if (!targetSection) {
    window.location.hash = "#home";
    return;
  }

  // Update tabs visibility
  tabElements.forEach(section => {
    section.classList.remove("active");
  });
  targetSection.classList.add("active");

  // Update Navbar Links
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-tab") === activeRouteName || 
       (activeRouteName === "dataset-detail" && link.getAttribute("data-tab") === "datasets")) {
      link.classList.add("active");
    }
  });

  // Adjust Hero & Stats Visibility (Only visible on Home page)
  if (activeRouteName === "home") {
    heroSection.style.display = "block";
    statsBanner.style.display = "block";
  } else {
    heroSection.style.display = "none";
    statsBanner.style.display = "none";
  }

  // Custom route rendering
  if (activeRouteName === "datasets") {
    filterAndSortDatasets();
  } else if (activeRouteName === "dataset-detail") {
    renderDatasetDetail(params.id);
  } else if (activeRouteName === "access-request") {
    // Populate requested dataset in form from URL parameters
    const dropdown = document.getElementById("formDatasetRequested");
    if (params.dataset) {
      dropdown.value = params.dataset;
    } else if (dropdown.value === "") {
      dropdown.selectedIndex = 0; // Default placeholder
    }
  }

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Search filter and sort logic for datasets grid
let currentCategory = "all";

function setupFilters() {
  const searchInput = document.getElementById("datasetSearch");
  const sortSelect = document.getElementById("datasetSort");
  const categoryContainer = document.getElementById("filterCategories");

  if (searchInput) {
    searchInput.addEventListener("input", filterAndSortDatasets);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", filterAndSortDatasets);
  }

  if (categoryContainer) {
    categoryContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        // Toggle active styling
        const buttons = categoryContainer.querySelectorAll(".filter-btn");
        buttons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        // Filter trigger
        currentCategory = e.target.getAttribute("data-category");
        filterAndSortDatasets();
      }
    });
  }
}

function filterAndSortDatasets() {
  const searchVal = document.getElementById("datasetSearch").value.toLowerCase().trim();
  const sortVal = document.getElementById("datasetSort").value;

  // 1. Filter
  let filtered = datasets.filter(data => {
    // Category match
    const categoryMatch = currentCategory === "all" || data.category === currentCategory;

    // Search query match (title, desc, type, category)
    const textMatch = !searchVal || 
                      data.name.toLowerCase().includes(searchVal) ||
                      data.shortDesc.toLowerCase().includes(searchVal) ||
                      data.type.toLowerCase().includes(searchVal) ||
                      data.category.toLowerCase().includes(searchVal);

    return categoryMatch && textMatch;
  });

  // 2. Sort
  filtered.sort((a, b) => {
    if (sortVal === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortVal === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortVal === "size-desc") {
      return b.size - a.size;
    } else if (sortVal === "size-asc") {
      return a.size - b.size;
    }
    return 0;
  });

  // 3. Render Cards
  const gridContainer = document.getElementById("datasetsGrid");
  if (!gridContainer) return;

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-datasets">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 16px;"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        <h4>No datasets found matching your search.</h4>
        <p style="margin-top: 8px;">Try clearing your query or selecting another filter category.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(data => {
    // Determine access badge styling
    let badgeClass = "badge-open";
    if (data.accessType === "Restricted") badgeClass = "badge-restricted";
    if (data.accessType === "Controlled") badgeClass = "badge-controlled";

    return `
      <div class="dataset-card">
        <div class="dataset-card-header">
          <div class="dataset-badge-row">
            <span class="badge ${badgeClass}">${data.accessType}</span>
            <span class="badge badge-type">${data.type}</span>
          </div>
          <h3 class="dataset-title">${data.name}</h3>
        </div>
        <div class="dataset-card-body">
          <p class="dataset-card-desc">${data.shortDesc}</p>
          <div class="dataset-meta-specs">
            <div class="dataset-meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>${data.sizeStr}</span>
            </div>
            <div class="dataset-meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>${data.files.length} Files</span>
            </div>
          </div>
        </div>
        <div class="dataset-card-footer">
          <a href="#dataset-detail?id=${data.id}" class="btn btn-outline btn-sm btn-full">View Dataset Details</a>
        </div>
      </div>
    `;
  }).join("");
}

// Detail page template rendering
function renderDatasetDetail(id) {
  const detailContainer = document.getElementById("detailLayout");
  if (!detailContainer) return;

  const dataset = datasets.find(data => data.id === id);
  if (!dataset) {
    window.location.hash = "#datasets";
    return;
  }

  // Access badge styles
  let badgeClass = "badge-open";
  if (dataset.accessType === "Restricted") badgeClass = "badge-restricted";
  if (dataset.accessType === "Controlled") badgeClass = "badge-controlled";

  // Create Specs List HTML
  const metadataRows = Object.entries(dataset.metadata).map(([key, val]) => `
    <tr>
      <th>${key}</th>
      <td>${val}</td>
    </tr>
  `).join("");

  // Create File List HTML
  const fileItems = dataset.files.map(file => `
    <li class="file-item">
      <span class="file-name">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        ${file.name}
      </span>
      <span class="file-size">${file.size} (${file.format})</span>
    </li>
  `).join("");

  // Create sidebar access policy list
  let accessRequirementsHTML = "";
  if (dataset.accessType === "Open") {
    accessRequirementsHTML = `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        No approval process required
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Instant file download access
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Mandatory publication citation
      </li>
    `;
  } else if (dataset.accessType === "Restricted") {
    accessRequirementsHTML = `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Institutional email validation
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Identity & department verification
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Research purpose declaration
      </li>
    `;
  } else {
    // Controlled
    accessRequirementsHTML = `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Human Subject IRB Approval
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Co-signed Data Use Agreement
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Secure server storage requirement
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Governance review (3-5 days)
      </li>
    `;
  }

  // Primary action button behavior
  let actionButtonHTML = "";
  if (dataset.accessType === "Open") {
    actionButtonHTML = `
      <button class="btn btn-primary btn-full" onclick="simulateOpenDownload('${dataset.name}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Dataset Files
      </button>
    `;
  } else {
    actionButtonHTML = `
      <a href="#access-request?dataset=${dataset.id}" class="btn btn-primary btn-full">
        Request Secure Access
      </a>
    `;
  }

  // Populate detail container markup
  detailContainer.innerHTML = `
    <div class="detail-main">
      <div class="detail-header">
        <div class="detail-badges">
          <span class="badge ${badgeClass}">${dataset.accessType} Access</span>
          <span class="badge badge-type">${dataset.type}</span>
        </div>
        <h1 class="detail-title">${dataset.name}</h1>
      </div>
      
      <h3 class="detail-sec-title">Description & Scope</h3>
      <p class="detail-desc">${dataset.fullDesc}</p>
      
      <h3 class="detail-sec-title">Dataset Profile & Metadata</h3>
      <table class="metadata-table">
        <tbody>
          <tr>
            <th>Principal Investigator</th>
            <td>${dataset.pi}</td>
          </tr>
          <tr>
            <th>IRB Clearance ID</th>
            <td>${dataset.irbId}</td>
          </tr>
          <tr>
            <th>Release Date</th>
            <td>${dataset.published}</td>
          </tr>
          <tr>
            <th>Data Capacity</th>
            <td>${dataset.sizeStr} (${dataset.size.toLocaleString()} bytes)</td>
          </tr>
          ${metadataRows}
        </tbody>
      </table>
      
      <h3 class="detail-sec-title">Manifest & Files Inventory</h3>
      <ul class="file-list">
        ${fileItems}
      </ul>
      
      <h3 class="detail-sec-title">Standard Bibliography Citation</h3>
      <div class="citation-box">${dataset.citation}</div>
    </div>
    
    <div class="detail-sidebar">
      <div class="action-card">
        <h4 class="action-card-title">Dataset Access Portal</h4>
        <ul class="action-card-list">
          ${accessRequirementsHTML}
        </ul>
        ${actionButtonHTML}
        <p style="font-size: 11px; text-align: center; color: var(--text-light); margin-top: 14px; font-style: italic;">
          By downloading or requesting data, you bind yourself to the SR University publication citation policies.
        </p>
      </div>
    </div>
  `;
}

// Simulate instant download for open datasets
window.simulateOpenDownload = function(datasetName) {
  alert(`Starting download of ${datasetName} files bundle in the background.\nSize: Estimated download progress starts shortly.`);
};

// Form field validation and simulated submission dialog
function setupFormHandler() {
  const form = document.getElementById("accessRequestForm");
  const selectDropdown = document.getElementById("formDatasetRequested");

  // 1. Populate requested dataset options dynamically in form dropdown
  if (selectDropdown) {
    // Clean existing options except the first one
    selectDropdown.innerHTML = '<option value="" disabled selected>-- Select a Dataset --</option>';
    
    datasets.forEach(data => {
      // Don't show options for 'Open' datasets in request form as they download directly
      if (data.accessType !== "Open") {
        const option = document.createElement("option");
        option.value = data.id;
        option.textContent = `${data.name} (${data.accessType})`;
        selectDropdown.appendChild(option);
      }
    });
  }

  // 2. Add validation triggers
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById("formFullName");
      const email = document.getElementById("formEmail");
      const institution = document.getElementById("formInstitution");
      const dataset = document.getElementById("formDatasetRequested");
      const purpose = document.getElementById("formPurpose");
      const intendedUse = document.getElementById("formIntendedUse");
      const agreement = document.getElementById("formAgreement");
      const submitBtn = document.getElementById("submitRequestBtn");

      let isValid = true;

      // Simple visual check helper
      const validateField = (element, condition) => {
        if (condition) {
          element.style.borderColor = "var(--border-color)";
          element.style.backgroundColor = "var(--bg-main)";
        } else {
          element.style.borderColor = "var(--danger-color)";
          element.style.backgroundColor = "#fef2f2";
          isValid = false;
        }
      };

      validateField(fullName, fullName.value.trim().length > 2);
      validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
      validateField(institution, institution.value.trim().length > 4);
      validateField(dataset, dataset.value !== "");
      validateField(purpose, purpose.value.trim().length > 4);
      validateField(intendedUse, intendedUse.value.trim().length > 20);
      
      // Agreement checkbox
      if (!agreement.checked) {
        agreement.parentElement.style.color = "var(--danger-color)";
        isValid = false;
      } else {
        agreement.parentElement.style.color = "var(--text-light)";
      }

      if (!isValid) {
        alert("Please correct the highlighted fields and agree to the terms to proceed.");
        return;
      }

      // If form is valid, trigger simulated submission
      submitBtn.disabled = true;
      submitBtn.textContent = "Processing Verification...";
      submitBtn.style.opacity = "0.7";

      setTimeout(() => {
        // Generate a random ticket number
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        document.getElementById("ticketNumber").textContent = `SRU-REQ-${randomNum}`;
        
        // Show success modal
        const modal = document.getElementById("successModal");
        modal.classList.add("active");

        // Reset form controls
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Access Request";
        submitBtn.style.opacity = "1";
      }, 1200);
    });
  }

  // Setup close modal button
  const closeModalBtn = document.getElementById("closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      const modal = document.getElementById("successModal");
      modal.classList.remove("active");
      // Redirect to datasets tab
      window.location.hash = "#datasets";
    });
  }
}

// Mobile hamburger menu navigation toggle
function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      
      // Toggle menu toggle button animation
      const spans = menuToggle.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close menu when a link is clicked
    navMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        navMenu.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }
}

// Initialize application functions on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setupFilters();
  setupFormHandler();
  setupMobileMenu();

  // Listen for hash routing
  window.addEventListener("hashchange", router);
  
  // Initial route resolve
  router();
});
