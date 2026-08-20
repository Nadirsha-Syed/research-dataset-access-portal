# SR University Research Dataset Access Repository (sru-ds)

A modern, responsive, and secure university dataset access portal for **SR University (SRU)**, inspired by the general layout and functionality of the OASIS Brain project data-access page. 

This repository provides controlled access workflows to simulated scientific and academic datasets.

## 🚀 Key Features

*   **SPA Client-Side Routing**: Navigates between sections smoothly using hash-based routing (`#home`, `#datasets`, `#access-request`, etc.), maintaining standard browser history.
*   **Search and Filter Panel**: Dynamic text filtering and category filters (Biomedical, Environmental, Social Sciences, Engineering) to query the datasets catalogue in real-time.
*   **Dataset Profiles**: Complete single-page layouts displaying dataset description, Principal Investigator (PI) detail records, metadata specs grid, file manifest checks, and citation block specs.
*   **Secure Access Request Form**: Automatically pre-selects the dataset if requested from its details page, validates user inputs, and displays a simulated confirmation receipt with a unique request ticket number.
*   **Responsive Styling**: Designed for mobile and desktop screens with a slide-down responsive navigation hamburger menu.

## 📁 File Structure

*   [`index.html`](index.html) - Structural framework, navigation menus, tab containers, modals, and SVGs.
*   [`styles.css`](styles.css) - Responsive custom theme matching brand colors (`#23468A` blue and `#D4AF37` gold) with custom typography (Inter and Outfit fonts).
*   [`app.js`](app.js) - Mock database registry, routing management, search indexing, and form validations.
*   [`logo.png`](logo.png) - Branded horizontal wordmark logo for SR University.

## 🛠️ Local Execution

Since this is a client-side Single Page Application built using standard web techniques (HTML5, CSS3, Vanilla Javascript) with no external dependencies or compile steps, you can run it directly:

1. Clone this repository:
   ```bash
   git clone https://github.com/Nadirsha-Syed/sru-ds.git
   ```
2. Open [`index.html`](index.html) directly in any modern web browser, or serve it using a lightweight local web server (e.g., Live Server, python http.server, etc.).

# research-dataset-access-portal
