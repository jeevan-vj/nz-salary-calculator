# Tax Rates Update - 2025/2026 Tax Year

## Update Date
January 7, 2026

## Summary
All tax calculations have been updated to reflect the latest IRD (Inland Revenue Department) rates effective from **1 April 2025** for the 2025-2026 tax year.

---

## Updated Tax Brackets

### Primary Income Tax Rates (from 1 April 2025)

| Income Range | Tax Rate | Tax on Bracket |
|--------------|----------|----------------|
| $0 - $15,600 | 10.5% | Up to $1,638 |
| $15,601 - $53,500 | 17.5% | Up to $6,632.50 |
| $53,501 - $78,100 | 30% | Up to $7,380 |
| $78,101 - $180,000 | 33% | Up to $33,627 |
| $180,001+ | 39% | - |

**Note:** These are simplified rates compared to the transitional rates that were in effect from 1 April 2024 to 31 March 2025.

---

## Secondary Tax Codes and Rates

For individuals with multiple income sources:

| Total Income Range | Tax Code | Rate |
|-------------------|----------|------|
| $0 - $15,600 | SB | 10.5% |
| $15,601 - $53,500 | S | 17.5% |
| $53,501 - $78,100 | SH | 30% |
| $78,101 - $180,000 | ST | 33% |
| $180,001+ | SA/STC | 39% |

---

## Other Deductions

### ACC Earners Levy (2025-26)
- **Rate:** $1.67 per $100 of liable earnings (1.67%)
- **Applied to:** All salary and wage earners

### Student Loan Repayment (2025-26)
- **Threshold:** $24,128 per year
- **Repayment Rate:** 12% of income above the threshold
- **How it works:** Only pay 12% on earnings above $24,128

### KiwiSaver
- **Default Rate:** 3%
- **Available Rates:** 3%, 4%, 6%, 8%, or 10%
- Employer contribution minimum: 3%

---

## Changes Made

### Files Updated

#### 1. `/paye-calculator/app/utils/taxCalculator.ts`
- ✅ Updated tax brackets to 1 April 2025 rates
- ✅ Confirmed ACC levy rate at 1.67%
- ✅ Confirmed student loan threshold at $24,128
- ✅ Updated comments to reflect 2025-26 tax year

#### 2. `/paye-calculator/app/utils/multipleIncomeTaxCalculator.ts`
- ✅ Updated primary income tax brackets
- ✅ Updated secondary income tax thresholds
- ✅ Fixed ACC levy rate (was incorrectly 1.39%, now 1.67%)
- ✅ Updated student loan threshold (was $20,280, now $24,128)
- ✅ Corrected bracket calculations (e.g., second bracket is $37,900 not $34,000)

---

## Key Corrections in Multiple Income Calculator

### Previous Issues (Pre-2025 Rates)
❌ First bracket: $0-$14,000 at 10.5%
❌ Second bracket: $14,001-$48,000 at 17.5%
❌ Third bracket: $48,001-$70,000 at 30%
❌ Fourth bracket: $70,001-$180,000 at 33%
❌ ACC Rate: 1.39%
❌ Student Loan Threshold: $20,280

### Current Rates (2025-26)
✅ First bracket: $0-$15,600 at 10.5%
✅ Second bracket: $15,601-$53,500 at 17.5%
✅ Third bracket: $53,501-$78,100 at 30%
✅ Fourth bracket: $78,101-$180,000 at 33%
✅ ACC Rate: 1.67%
✅ Student Loan Threshold: $24,128

---

## Verification

All unit tests passed successfully after the updates:
- ✅ Income calculations under $15,600
- ✅ Income calculations between $15,600 and $53,500
- ✅ Student loan threshold and calculations
- ✅ KiwiSaver rate variations
- ✅ Periodic breakdowns (weekly, fortnightly, monthly)
- ✅ High income tax brackets
- ✅ Multiple income sources

---

## Sources

- [IRD Tax Rates for Individuals](https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals)
- [IRD Student Loans](https://www.ird.govt.nz/student-loans)
- Tax rates effective from 1 April 2025

---

## Next Review Date

The tax rates should be reviewed again before **1 April 2026** for any new changes announced in the New Zealand Budget.

---

## Testing Recommendations

Before deploying to production, please test the following scenarios:

1. **Low income (under $15,600):** Verify 10.5% tax rate
2. **Middle income ($40,000-$60,000):** Verify progressive rates
3. **High income ($100,000+):** Verify all brackets apply correctly
4. **Student loan:** Verify $24,128 threshold and 12% repayment
5. **Multiple income sources:** Verify secondary tax rates apply correctly
6. **ACC levy:** Verify 1.67% is applied to all incomes
7. **KiwiSaver:** Verify rates from 3%-10% work correctly

---

*Document created: January 7, 2026*
