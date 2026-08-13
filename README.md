# Cardio Risk Compass

Cardio Risk Compass is a browser-based research prototype for auditing clinical risk-model performance and fairness across patient populations.

**Live application:** https://dbbun.github.io/cardio-risk-compass/

It accepts patient-level CSV files, calculates deterministic subgroup metrics, presents paper-inspired comparisons, explains potential reliability and fairness concerns in clear language, and suggests mitigation experiments.

## CSV format

The application expects one binary observed-outcome column (`0` or `1`), one predicted-probability column (between `0` and `1`), and one or more population columns such as sex, age band, race, or pre-existing disease. A reproducible synthetic cardiovascular dataset with 100,000 patients is loaded automatically, with an optional one-million-patient browser demonstration. It includes paired 5-year atrial-fibrillation/CHARGE-AF and 10-year atherosclerotic-cardiovascular-disease/Pooled-Cohort-Equations demonstrations.

Users explicitly choose the privileged/reference and underprivileged/comparison populations. Directional gaps are calculated as `comparison - reference`. Attributes can include race or ethnicity, sex or gender, age, comorbidity, poverty or deprivation, geography, and native-English language status. A second attribute can be added for intersectional analysis.

## Metrics

- Area under the ROC curve (AUC / concordance)
- Sensitivity and specificity at a configurable threshold
- Predicted-positive rate and statistical parity gap
- Brier score
- Observed-to-expected event ratio
- Subgroup sample size and event prevalence
- Statistical parity, true-positive-rate, and true-negative-rate differences against a defined reference group
- False-positive-rate and false-negative-rate differences
- Positive predictive-value difference
- Disparate-impact ratio
- Equalized-odds gap
- Observed-to-expected calibration difference

Metrics are suppressed when a subgroup contains fewer than 30 records. Missing and unknown attribute values remain visible for data-quality review.

The population-profile view shows normalized histograms for numeric covariates and proportional distributions for categorical covariates and outcomes. Demonstration fields include age, BMI, blood pressure, total and HDL cholesterol, smoking, diabetes, hypertension, blood-pressure treatment, heart failure, prior myocardial infarction, language, deprivation quintile, and rural/urban location.

A tabbed workflow separates setup, population distributions, paper-style age analysis, fairness results, and recommendations. The age analysis reproduces the structure of the publication's figures across the full cohort and five age bands (45–54 through 85–90). It shows observed outcomes per 1,000 with population-size bubbles, age-specific discrimination, calibration, Brier score, and directional statistical-parity, true-positive-rate, and true-negative-rate differences. Every chart includes a plain-language interpretation and clinical-governance caution. The synthetic data also includes sex and race population fields for reference-versus-comparison audits.

The in-app CSV guide documents the minimum schema and provides a downloadable full example. A paginated data viewer lets users inspect the active CSV directly in the browser. Column names are flexible; the tool detects and offers only binary columns for the observed outcome, probability-like columns for the risk score, and categorical population fields for fairness attributes and intersections.

## Scientific foundation

Kartoun U, Khurshid S, Kwon BC, et al. Prediction performance and fairness heterogeneity in cardiovascular risk models. *Scientific Reports*. 2022;12:12542. https://doi.org/10.1038/s41598-022-16615-3

## Important limitations

This is an evaluation and governance prototype, not a medical device. Metrics are screening signals that require clinical, statistical, and legal review. Group differences do not by themselves establish unlawful bias or justify patient-level treatment decisions.

## Local development

```bash
npm install
npm run dev
```

For the static GitHub Pages build:

```bash
npm run build:pages
npm run preview:pages
```

Every push to `main` deploys the browser-only application through GitHub Actions. CSV processing and analysis remain entirely in the visitor's browser.

Copyright DBbun LLC. A public-use license will be selected before release.
