import React from 'react';
import './App.css';
import ProfitAndLoss from './financials.json';
import Summary from './summary.json';
import KeyRatios from './key-ratios.json';
import CurrentDividends from './current-dividend.json'


const keyRatioSummaryProfitablity = KeyRatios.Profitability;
const keyRatioSummaryFundamentals = KeyRatios.Fundamental;
const keyRatioSummaryPrice = KeyRatios.Price;
const ratioData = Summary.summary.ratio;
const keyRatioSummaryGrowth = KeyRatios.Growth;
const keyRatioSummaryDividends = KeyRatios.Dividends;
const CurrentDividendsSummary = CurrentDividends;
const ValuationRatiosSummary = KeyRatios['Valuation Ratio']

const annualsProfitAndLoss = ProfitAndLoss.financials.annuals;
const quarterlyProfitAndLoss = ProfitAndLoss.financials.quarterly;
const fiscalYearAnnual = annualsProfitAndLoss['Fiscal Year'];
const fiscalYearQuarter = quarterlyProfitAndLoss['Fiscal Year'];




const fundsMetrics = [
  'Total Liabilities',
  'Total Current Liabilities',
  'Total Equity',
  'Total Assets',
  'Other Current Assets',
  'Total Current Assets'
];

const cashFlowMetrics = [
  'Net Income From Continuing Operations',
  'Cash Flow from Operations',
  'Cash Flow from Investing',
  'Cash Flow from Financing',
  'Beginning Cash Position',
  'Effect of Exchange Rate Changes',
  'Net Change in Cash',
  'Ending Cash Position',
  'Capital Expenditure',
  'Free Cash Flow'
];

const keyRatiosMetrics = [
  'PE Ratio',
  'PE Ratio without NRI',
  'Price-to-Owner-Earnings',
  'PB Ratio',
  'Price-to-Tangible-Book',
  'Price-to-Free-Cash-Flow',
  'Price-to-Operating-Cash-Flow',
  'Dividend Yield %',
  'FCF Yield %'
];

const financialMetrics = [
  'Fiscal Year',  
  'Revenue',
  'Cost of Goods Sold',
  'Gross Profit',
  'Operating Income',
  'Pretax Income',
  'Preferred Dividends',
  'EPS (Basic)',
  'EPS (Diluted)',
  'EBIT',
  'Depreciation, Depletion and Amortization',
  'EBITDA'
];

const financialStrengthMetrics = [
  'Cash to Debt',
  'Equity to Asset',
  'Debt-to-Equity',
  'Debt-to-Ebitda',
  'Interest Coverage',
  'WACC %',
  'ROIC %'
]

const ProfitabilityRankMetrics = [
  'Gross Margin %', //key ratios
  'Operating Margin %', //key ratios
  'Net Margin %', //From key ratios
  'FCF Margin %', //key ratios
  'ROE %', //Key Ratio
  'ROA %', //Key ratios
  'ROIC %', //key ratios
  'ROC (Joel Greenblatt) %', //key ratios
  'ROCE (%)', //financials
  'Years of Profitability over Past 10-Year' //summary
]

const MomentumRankMetrics = [
  '5-Day RSI',
  '9-Day RSI',
  '14-Day RSI',
  '6-1 Month Momentum %',
  '12-1 Month Momentum %'
]

const GrowthRankMetrics = [
  '3-Year Revenue Growth Rate (Per Share)',
  '3-Year EBITDA Growth Rate (Per Share)',
  '3-Year EPS without NRI Growth Rate',
  '3-Year FCF Growth Rate (Per Share)',
  'Future 3-5Y EPS without NRI Growth Rate',
  'Future 3-5Y Total Revenue Growth Rate'
]

const DividendandBuyBackMetrics = [
  'Dividend Yield %', //Dividend-yield
  'Dividend Payout Ratio', //Dividends
  '3-Year Dividend Growth Rate (Per Share)', //Growth
  'Forward Dividend Yield %', //Dividends
  '3-Year Share Buyback Ratio', //Fundamentals
  'Shareholder Yield %' //Fundamentals
]

const LiquidityRatioMetrics = [
  'Current Ratio',
  'Quick Ratio',
  'Cash Ratio',
  'Days Inventory',
  'Days Sales Outstanding',
  'Days Payable'
]

const GFValueRankMetrics = [
  'PE Ratio',
  'Forward PE Ratio',
  'PE Ratio without NRI',
  'Shiller PE Ratio',
  'Price-to-Owner-Earnings',
  'PEG Ratio',
  'PS Ratio',
  'PB Ratio',
  'Price-to-Tangible-Book',
  'Price-to-Free-Cash-Flow',
  'Price-to-Operating-Cash-Flow',
  'EV-to-EBIT',
  'EV-to-Forward-EBIT',
  'EV-to-EBITDA',
  'EV-to-Forward-Revenue',
  'EV-to-FCF',
  'Price-to-Projected-FCF',
  'Price-to-Median-PS-Value',
  'Price-to-Graham-Number',
  'Earnings Yield (Greenblatt)%',
  'FCF Yield %',
  'Forward Rate of Return (Yacktman) %'
]

function TableRows({ data, label }) {
  return (
    <tbody>
      <tr>
        <td>{label}</td>
        {data.map((amount, index) => (
          <td key={index}>{amount}</td>
        ))}
      </tr>
    </tbody>
  );
}

// function renderObjectTableRow({ data, label }) {
//   if (Array.isArray(data)) {
//     return (
//       <tr>
//         <td>{label}</td>
//         {data.map((amount, index) => (
//           <td key={index}>{amount}</td>
//         ))}
//       </tr>
//     );
//   } 
//   else if ( data && Object.keys(data).length) {
//     console.log(data)
//     // return Object.keys(data).map((key, index) => (
//     //   <tr key={index}>
//     //     <td>{key}</td>
//     //     <td>{data[key]}</td>
//     //   </tr>
//     // ));
//   }
//   else {
//     return null;
//   }
// }

//1
function renderSummary({ label})
{
    
    console.log(Object.keys(ratioData))
    if(ratioData && Object.keys(ratioData).length)
    { return Object.keys(ratioData).map(key => {
        if(key==label)
        { return(
          <tr >
          <td>{label}</td>  
          <td>{ratioData[key].value}</td>
          </tr>
        )  
        }
      })
    }

    if (keyRatioSummaryFundamentals && Object.keys(keyRatioSummaryFundamentals).length) {
      for (let key of Object.keys(keyRatioSummaryFundamentals)) {
        if (key === label) {
          return (
            <tr key={key}>
              <td>{label}</td>
              <td>{keyRatioSummaryFundamentals[key]}</td> {/* Access the value corresponding to the key */}
            </tr>
          );
        }
      }
    }
      return null; 
}

function RatiosSummary({ label }) {
if (keyRatioSummaryProfitablity && Object.keys(keyRatioSummaryProfitablity).length) {
  for (let key of Object.keys(keyRatioSummaryProfitablity)) {
    if (key === label) {
      return (
        <tr key={key}>
          <td>{label}</td>
          <td>{keyRatioSummaryProfitablity[key]}</td> {/* Access the value corresponding to the key */}
        </tr>
      );
    }
  }
}



//2
if (keyRatioSummaryFundamentals && Object.keys(keyRatioSummaryFundamentals).length) {
  for (let key of Object.keys(keyRatioSummaryFundamentals)) {
    if (key === label) {
      return (
        <tr key={key}>
          <td>{label}</td>
          <td>{keyRatioSummaryFundamentals[key]}</td> {/* Access the value corresponding to the key */}
        </tr>
      );
    }
  }

  
}

if(ratioData && Object.keys(ratioData).length)
{ return Object.keys(ratioData).map(key => {
    if(key==label)
    { return(
      <tr >
      <td>{label}</td>  
      <td>{ratioData[key].value}</td>
      </tr>
    )  
    }
  })
}
  return null; // Return null if keyRatioSummaryProfitablity is empty or not available
}

//3
function PriceRatiosSummary({ label }) {
  if (keyRatioSummaryPrice && Object.keys(keyRatioSummaryPrice).length) {
    for (let key of Object.keys(keyRatioSummaryPrice)) {
      if (key === label) {
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryPrice[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }
  
  if (keyRatioSummaryPrice && Object.keys(keyRatioSummaryPrice).length) {
    for (let key of Object.keys(keyRatioSummaryPrice)) {
      if (key === label) {
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryPrice[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }

  if(ratioData && Object.keys(ratioData).length)
    { return Object.keys(ratioData).map(key => {
        if(key==label)
        { return(
          <tr >
          <td>{label}</td>  
          <td>{ratioData[key].value}</td>
          </tr>
        )  
        }
      })
    }

    return null; // Return null if keyRatioSummaryProfitablity is empty or not available
  }

//4
function growthRatiosSummary({ label }) {
  console.log("Key Ratio Summary Growth:", keyRatioSummaryGrowth);
  console.log("Label:", label);

  if (keyRatioSummaryGrowth && Object.keys(keyRatioSummaryGrowth).length) {
    for (let key of Object.keys(keyRatioSummaryGrowth)) {
      console.log("Key in Growth Summary:", key);
      if (key === label) {
        console.log("Matching Key Found:", key);
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryGrowth[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }
  return null;
}

//5
function DividendSummary({ label }) {
  if (keyRatioSummaryFundamentals && Object.keys(keyRatioSummaryFundamentals).length) {
    for (let key of Object.keys(keyRatioSummaryFundamentals)) {
      if (key === label) {
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryFundamentals[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }
  
  if (keyRatioSummaryGrowth && Object.keys(keyRatioSummaryGrowth).length) {
    for (let key of Object.keys(keyRatioSummaryGrowth)) {
      console.log("Key in Growth Summary:", key);
      if (key === label) {
        console.log("Matching Key Found:", key);
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryGrowth[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }

  if (CurrentDividendsSummary && Object.keys(CurrentDividendsSummary).length) {
    for (let key of Object.keys(CurrentDividendsSummary)) {
      console.log("Key in Growth Summary:", key);
      if (key === label) {
        console.log("Matching Key Found:", key);
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{CurrentDividendsSummary[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }

  if (keyRatioSummaryDividends && Object.keys(keyRatioSummaryDividends).length) {
    for (let key of Object.keys(keyRatioSummaryDividends)) {
      console.log("Key in Growth Summary:", key);
      if (key === label) {
        console.log("Matching Key Found:", key);
        return (
          <tr key={key}>
            <td>{label}</td>
            <td>{keyRatioSummaryDividends[key]}</td> {/* Access the value corresponding to the key */}
          </tr>
        );
      }
    }
  }

    return null; // Return null if keyRatioSummaryProfitablity is empty or not available
  }

  //6
  function LiquidityRatioSummary({ label }) {
    if (keyRatioSummaryFundamentals && Object.keys(keyRatioSummaryFundamentals).length) {
      for (let key of Object.keys(keyRatioSummaryFundamentals)) {
        if (key === label) {
          return (
            <tr key={key}>
              <td>{label}</td>
              <td>{keyRatioSummaryFundamentals[key]}</td> {/* Access the value corresponding to the key */}
            </tr>
          );
        }
      }
    }
  }

  //7
  function GFValueSummary({ label }) {
  
    if (ValuationRatiosSummary && Object.keys(ValuationRatiosSummary).length) {
      for (let key of Object.keys(ValuationRatiosSummary)) {
        if (key === label) {
          return (
            <tr key={key}>
              <td>{label}</td>
              <td>{ValuationRatiosSummary[key]}</td> {/* Access the value corresponding to the key */}
            </tr>
          );
        }
      }
    }
    return null;
  }
 







function App() {
  return (
    <div className='App'>
      <div className='Table'>
        <h1>Profit and Loss (Annually)</h1>
        <table>
          <TableRows label="Fiscal Year" data={fiscalYearAnnual
        } />
          {financialMetrics.slice(1).map((metric, index) => (
            <TableRows key={index} label={metric} data={annualsProfitAndLoss.income_statement[metric]} />
          ))}
        </table>

        <h1>Profit and Loss (Quarterly)</h1>
        <table>
          <TableRows label="Fiscal Year" data={fiscalYearQuarter
        } />
          {financialMetrics.slice(1).map((metric, index) => (
            <TableRows key={index} label={metric} data={quarterlyProfitAndLoss.income_statement[metric]} />
          ))}
        </table>
      </div>

      <div className='Table'>
        <h1>Source and Application of Funds (Annually)</h1>
        <table>
          {fundsMetrics.map((metric,index) => (
            <TableRows key={index} label={metric} data={annualsProfitAndLoss.balance_sheet[metric]} />
          ))}
        </table>

        <h1>Source and Application of Funds (Quarterly)</h1>
        <table>

          {fundsMetrics.map((metric, index) => (
            <TableRows key={index} label={metric} data={quarterlyProfitAndLoss.balance_sheet[metric]} />
          ))}
        </table>
      </div>

      <div className='Table'>
        <h1>Cash Flow (Annually)</h1>
        <table>

          {cashFlowMetrics.map((metric,index) => (
            <TableRows key={index} label={metric} data={annualsProfitAndLoss.cashflow_statement[metric]} />
          ))}
        </table>

        <h1>Cash Flow (Quarterly)</h1>
        <table>

          {cashFlowMetrics.map((metric,index) => (
            <TableRows key={index} label={metric} data={quarterlyProfitAndLoss.cashflow_statement[metric]} />
          ))}
        </table>
      </div>

      <div className='Table'>
        <h1>Key Ratios (Annually)</h1>
        <table>
          {keyRatiosMetrics.map((metric,index) => (
            <TableRows key={index} label={metric} data={annualsProfitAndLoss.valuation_ratios[metric]} />
          ))}
        </table>

        <h1>Key Ratios (Quarterly)</h1>
        <table>
          {keyRatiosMetrics.slice(1).map((metric,index) => (
            <TableRows key={index} label={metric} data={quarterlyProfitAndLoss.valuation_ratios[metric]} />
          ))}
        </table>
      </div>

      <div className='Table'>
        <h1>Financial Strength</h1>
        <table>
          {financialStrengthMetrics.map((metric, index) => (
            renderSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>Profitability Rank</h1>
        <table>
          {ProfitabilityRankMetrics.map((metric, index) => (
            RatiosSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>Momentum Rank Metrics</h1>
        <table>
          {MomentumRankMetrics.map((metric, index) => (
            PriceRatiosSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>Growth Rank</h1>
        <table>
          {GrowthRankMetrics.map((metric, index) => (
            growthRatiosSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>Dividend Buyback</h1>
        <table>
          {DividendandBuyBackMetrics.map((metric, index) => (
            DividendSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>Liquidity Ratio</h1>
        <table>
          {LiquidityRatioMetrics.map((metric, index) => (
            LiquidityRatioSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>

      <div className='Table'>
        <h1>GF Value Rank</h1>
        <table>
          {GFValueRankMetrics.map((metric, index) => (
            GFValueSummary({ label: metric, key: index })
          ))}
        </table> 
      </div>



    </div>
  );
}

export default App;