# Promo Code — Test Cases

## Test Cases

### TC-1: Apply a valid promo code above the minimum
- **Pyramid level:** E2E
- **Techniques:** Equivalence Partitioning, Boundary Value Analysis, Decision Table
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$100.00` (above minimum).
  2. Type `SAVE10` into `promo-input`.
  3. Click `promo-apply`.
- **Expected result:** The subtotal is reduced by 10% ($10.00 discount). The `promo-message` confirms the discount.
- **Parameters:** `{ subtotal: 100.00, expectedDiscount: 10.00, code: "SAVE10" }`

### TC-2: Apply a valid promo code at the minimum boundary
- **Pyramid level:** E2E
- **Techniques:** Boundary Value Analysis
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$50.00` (exactly at minimum).
  2. Type `SAVE10` into `promo-input`.
  3. Click `promo-apply`.
- **Expected result:** The subtotal is reduced by 10% ($5.00 discount). The `promo-message` confirms the discount.
- **Parameters:** `{ subtotal: 50.00, expectedDiscount: 5.00, code: "SAVE10" }`

### TC-3: Apply a valid promo code below the minimum
- **Pyramid level:** E2E
- **Techniques:** Equivalence Partitioning, Boundary Value Analysis, Decision Table
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$49.99` (below minimum).
  2. Type `SAVE10` into `promo-input`.
  3. Click `promo-apply`.
- **Expected result:** The `promo-message` displays "Minimum order of $50 required."
- **Parameters:** `{ subtotal: 49.99, code: "SAVE10", expectedMessage: "Minimum order of $50 required." }`

### TC-4: Apply an invalid promo code (expired or unknown)
- **Pyramid level:** E2E
- **Techniques:** Equivalence Partitioning, Decision Table
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$100.00`.
  2. Type the invalid code into `promo-input`.
  3. Click `promo-apply`.
- **Expected result:** The `promo-message` displays "This promo code is not valid."
- **Parameter rows:**
  - `{ code: "SAVE10OLD", reason: "expired" }`
  - `{ code: "FOOBAR", reason: "unknown" }`

### TC-5: Apply an empty promo code
- **Pyramid level:** E2E
- **Techniques:** Equivalence Partitioning
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$100.00`.
  2. Leave `promo-input` empty.
  3. Click `promo-apply`.
- **Expected result:** The `promo-message` displays "Enter a promo code."

### TC-6: Replace an active promo code with a second code
- **Pyramid level:** E2E
- **Techniques:** —
- **Locators:** `[data-qa="promo-input"]`, `[data-qa="promo-apply"]`, `[data-qa="promo-message"]`
- **Steps:**
  1. Navigate to checkout with an order subtotal of `$100.00`.
  2. Type `SAVE10` into `promo-input` and click `promo-apply` — confirm discount is applied.
  3. Clear `promo-input`, type `SAVE10OLD`, and click `promo-apply`.
- **Expected result:** The original 10% discount is removed. The `promo-message` displays "This promo code is not valid." Only one code/discount is active at a time.
- **Parameters:** `{ firstCode: "SAVE10", secondCode: "SAVE10OLD", subtotal: 100.00 }`

---

## Coverage Checklist

| # | Rule (condition → outcome) | Covered by | Rationale |
|---|---|---|---|
| 1 | `SAVE10` & subtotal ≥ $50 → 10% off subtotal | TC-1, TC-2 | Tests above boundary and at exact boundary |
| 2 | `SAVE10` & subtotal < $50 → "Minimum order of $50 required." | TC-3 | Tests below minimum boundary |
| 3 | `SAVE10OLD` (expired) → "This promo code is not valid." | TC-4 (row 1) | Parameterised row for expired code |
| 4 | `FOOBAR` (unknown) → "This promo code is not valid." | TC-4 (row 2) | Parameterised row for unknown code |
| 5 | Empty code → "Enter a promo code." | TC-5 | Empty-string input |
| 6 | Second code replaces first; only one discount active | TC-6 | Sequential application of two codes |
