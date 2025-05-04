const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

// Full currency list with country names
const currencyNames = {
  "AFN": "Afghanistan (AFN)",
  "ALL": "Albania (ALL)",
  "AMD": "Armenia (AMD)",
  "ANG": "Netherlands Antilles (ANG)",
  "AOA": "Angola (AOA)",
  "ARS": "Argentina (ARS)",
  "AUD": "Australia (AUD)",
  "AWG": "Aruba (AWG)",
  "AZN": "Azerbaijan (AZN)",
  "BAM": "Bosnia & Herzegovina (BAM)",
  "BBD": "Barbados (BBD)",
  "BDT": "Bangladesh (BDT)",
  "BGN": "Bulgaria (BGN)",
  "BIF": "Burundi (BIF)",
  "BMD": "Bermuda (BMD)",
  "BND": "Brunei (BND)",
  "BOB": "Bolivia (BOB)",
  "BRL": "Brazil (BRL)",
  "BSD": "Bahamas (BSD)",
  "BTN": "Bhutan (BTN)",
  "BWP": "Botswana (BWP)",
  "BYN": "Belarus (BYN)",
  "BZD": "Belize (BZD)",
  "CAD": "Canada (CAD)",
  "CDF": "Congo (CDF)",
  "CHF": "Switzerland (CHF)",
  "CLP": "Chile (CLP)",
  "CNY": "China (CNY)",
  "COP": "Colombia (COP)",
  "CRC": "Costa Rica (CRC)",
  "CUP": "Cuba (CUP)",
  "CVE": "Cape Verde (CVE)",
  "CZK": "Czech Republic (CZK)",
  "DJF": "Djibouti (DJF)",
  "DKK": "Denmark (DKK)",
  "DOP": "Dominican Republic (DOP)",
  "DZD": "Algeria (DZD)",
  "EGP": "Egypt (EGP)",
  "ERN": "Eritrea (ERN)",
  "ETB": "Ethiopia (ETB)",
  "EUR": "European Union (EUR)",
  "FJD": "Fiji (FJD)",
  "FKP": "Falkland Islands (FKP)",
  "FOK": "Faroe Islands (FOK)",
  "GBP": "United Kingdom (GBP)",
  "GEL": "Georgia (GEL)",
  "GGP": "Guernsey (GGP)",
  "GIP": "Gibraltar (GIP)",
  "GMD": "Gambia (GMD)",
  "GNF": "Guinea (GNF)",
  "GTQ": "Guatemala (GTQ)",
  "GYD": "Guyana (GYD)",
  "HKD": "Hong Kong (HKD)",
  "HNL": "Honduras (HNL)",
  "HRK": "Croatia (HRK)",
  "HTG": "Haiti (HTG)",
  "HUF": "Hungary (HUF)",
  "IDR": "Indonesia (IDR)",
  "ILS": "Israel (ILS)",
  "IMP": "Isle of Man (IMP)",
  "INR": "India (INR)",
  "IQD": "Iraq (IQD)",
  "IRR": "Iran (IRR)",
  "ISK": "Iceland (ISK)",
  "JEP": "Jersey (JEP)",
  "JMD": "Jamaica (JMD)",
  "JPY": "Japan (JPY)",
  "KES": "Kenya (KES)",
  "KGS": "Kyrgyzstan (KGS)",
  "KHR": "Cambodia (KHR)",
  "KID": "Kiribati (KID)",
  "KMF": "Comoros (KMF)",
  "KRW": "South Korea (KRW)",
  "KWD": "Kuwait (KWD)",
  "KYD": "Cayman Islands (KYD)",
  "KZT": "Kazakhstan (KZT)",
  "LAK": "Laos (LAK)",
  "LBP": "Lebanon (LBP)",
  "LKR": "Sri Lanka (LKR)",
  "LRD": "Liberia (LRD)",
  "LSL": "Lesotho (LSL)",
  "LYD": "Libya (LYD)",
  "MAD": "Morocco (MAD)",
  "MDL": "Moldova (MDL)",
  "MGA": "Madagascar (MGA)",
  "MKD": "North Macedonia (MKD)",
  "MMK": "Myanmar (MMK)",
  "MNT": "Mongolia (MNT)",
  "MOP": "Macau (MOP)",
  "MRU": "Mauritania (MRU)",
  "MUR": "Mauritius (MUR)",
  "MVR": "Maldives (MVR)",
  "MWK": "Malawi (MWK)",
  "MXN": "Mexico (MXN)",
  "MYR": "Malaysia (MYR)",
  "MZN": "Mozambique (MZN)",
  "NAD": "Namibia (NAD)",
  "NGN": "Nigeria (NGN)",
  "NIO": "Nicaragua (NIO)",
  "NOK": "Norway (NOK)",
  "NPR": "Nepal (NPR)",
  "NZD": "New Zealand (NZD)",
  "OMR": "Oman (OMR)",
  "PAB": "Panama (PAB)",
  "PEN": "Peru (PEN)",
  "PGK": "Papua New Guinea (PGK)",
  "PHP": "Philippines (PHP)",
  "PKR": "Pakistan (PKR)",
  "PLN": "Poland (PLN)",
  "PYG": "Paraguay (PYG)",
  "QAR": "Qatar (QAR)",
  "RON": "Romania (RON)",
  "RSD": "Serbia (RSD)",
  "RUB": "Russia (RUB)",
  "RWF": "Rwanda (RWF)",
  "SAR": "Saudi Arabia (SAR)",
  "SBD": "Solomon Islands (SBD)",
  "SCR": "Seychelles (SCR)",
  "SDG": "Sudan (SDG)",
  "SGD": "Singapore (SGD)",
  "SHP": "Saint Helena (SHP)",
  "SLE": "Sierra Leone (SLE)",
  "SOS": "Somalia (SOS)",
  "SRD": "Suriname (SRD)",
  "SSP": "South Sudan (SSP)",
  "STN": "São Tomé & Príncipe (STN)",
  "SYP": "Syria (SYP)",
  "SZL": "Eswatini (SZL)",
  "THB": "Thailand (THB)",
  "TJS": "Tajikistan (TJS)",
  "TMT": "Turkmenistan (TMT)",
  "TND": "Tunisia (TND)",
  "TOP": "Tonga (TOP)",
  "TRY": "Turkey (TRY)",
  "TTD": "Trinidad & Tobago (TTD)",
  "TVD": "Tuvalu (TVD)",
  "TWD": "Taiwan (TWD)",
  "TZS": "Tanzania (TZS)",
  "UAH": "Ukraine (UAH)",
  "UGX": "Uganda (UGX)",
  "USD": "United States (USD)",
  "UYU": "Uruguay (UYU)",
  "UZS": "Uzbekistan (UZS)",
  "VES": "Venezuela (VES)",
  "VND": "Vietnam (VND)",
  "VUV": "Vanuatu (VUV)",
  "WST": "Samoa (WST)",
  "XAF": "Central Africa (XAF)",
  "XCD": "East Caribbean (XCD)",
  "XOF": "West Africa (XOF)",
  "XPF": "French Polynesia (XPF)",
  "ZMW": "Zambia (ZMW)",
  "ZWL": "Zimbabwe (ZWL)"
};

// Fetch currency rates and populate dropdowns
async function loadCurrencies() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currencyRates = data.rates;
    
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    
    Object.keys(currencyRates).forEach(currency => {
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");
      
      let currencyLabel = currencyNames[currency] || `${currency} (Unknown Country)`;
      
      option1.value = option2.value = currency;
      option1.textContent = option2.textContent = currencyLabel;
      
      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });
    
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  } catch (error) {
    console.error("Error fetching currency data:", error);
    alert("Failed to load currency data. Please check your internet connection.");
  }
}

// Convert currency
async function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  
  if (amount === "" || amount <= 0) {
    alert("Enter a valid amount");
    return;
  }
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currencyRates = data.rates;
    
    let convertedAmount = (amount / currencyRates[fromCurrency]) * currencyRates[toCurrency];
    document.getElementById("result").textContent =
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } catch (error) {
    console.error("Error converting currency:", error);
    alert("Conversion failed. Try again later.");
  }
}

// Load currencies on page load
window.onload = loadCurrencies;