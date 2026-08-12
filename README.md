# Cardio Risk Compass

Cardio Risk Compass is a browser-based research prototype for auditing clinical risk-model performance and fairness across patient populations.

It accepts patient-level CSV files, calculates deterministic subgroup metrics, presents paper-inspired comparisons, explains potential reliability and fairness concerns in clear language, and suggests mitigation experiments.

## CSV format

The application expects one binary observed-outcome column (`0` or `1`), one predicted-probability column (between `0` and `1`), and one or more population columns such as sex, age band, race, or pre-existing disease. A reproducible synthetic cardiovascular dataset is loaded automatically.

## Metrics

- Area under the ROC curve (AUC / concordance)
- Sensitivity and specificity at a configurable threshold
- Predicted-positive rate and statistical parity gap
- Brier score
- Observed-to-expected event ratio
- Subgroup sample size and event prevalence

## Scientific foundation

Kartoun U, Khurshid S, Kwon BC, et al. Prediction performance and fairness heterogeneity in cardiovascular risk models. *Scientific Reports*. 2022;12:12542. https://doi.org/10.1038/s41598-022-16615-3

## Important limitations

This is an evaluation and governance prototype, not a medical device. Metrics are screening signals that require clinical, statistical, and legal review. Group differences do not by themselves establish unlawful bias or justify patient-level treatment decisions.

## Local development

```bash
npm install
npm run dev
```

Copyright DBbun LLC. A public-use license will be selected before release.
