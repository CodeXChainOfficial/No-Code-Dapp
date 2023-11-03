
import React from 'react';

const ContractDescription = () => {
    return (
        <div style={containerStyle}>
        <section style={sectionStyle}>
        <h3 style={h3color}>Contract Information:</h3>
        <ul>
          <li>
            <strong>Module:</strong> <code>token.mo</code>
          </li>
          <li>
            <strong>Copyright:</strong> 2023 CodeX
          </li>
          <li>
            <strong>License:</strong> Apache 2.0 with LLVM Exception
          </li>
          <li>
            <strong>Maintainer:</strong> CodeX Team
          </li>
          <li>
            <strong>Stability:</strong> Experimental
          </li>
        </ul>
      </section>
      <section style={sectionStyle}>
        <h3 style={h3color}>Functionality:</h3>
        <p>
          The contract allows users to transfer, mint, burn tokens, approve token transfers, and manage allowances. It provides extensive query functions for retrieving information about the token, including metadata, balances, allowances, and transaction history. The contract also includes optional interfaces for updating token settings and additional query functions.
        </p>
        <p>
          This token contract is designed to be modular, adhering to best practices for token standards, and is prepared for potential upgrades with pre and post-upgrade functions.
        </p>
      </section>
      <section style={sectionStyle}>
        <h3 style={h3color}>Token Contract:</h3>
        <p>
          The contract is an actor class named <code style={codestyle}>Token</code>. It represents a fungible token adhering to the DFinance Token (DIP20) standard. Here are its main components:
        </p>

        <ol>
          <li>
            <h3 style={h3color}>Metadata:</h3>
            <ul>
              <li>
                <code style={codestyle}>Metadata</code>: Information about the token, including <code>logo</code>, <code>name</code>, <code>symbol</code>, <code>decimals</code>, <code>totalSupply</code>, <code>owner</code>, and <code>fee</code>.
              </li>
            </ul>
          </li>
          <li>
            <h3 style={h3color}>Transaction Receipts:</h3>
            <ul>
              <li>
                <code style={codestyle}>TxReceipt</code>: A type representing the result of a transaction, including success (<code>#Ok</code>) or various error conditions (<code>#Err</code>).
              </li>
            </ul>
          </li>
          <li>
            <h3 style={h3color}>State Variables:</h3>
            <ul>
              <li>
                <code style={codestyle}>owner_</code>, <code style={codestyle}>logo_</code>, <code style={codestyle}>name_</code>, <code style={codestyle}>decimals_</code>, <code style={codestyle}>symbol_</code>, <code style={codestyle}>totalSupply_</code>: Stable state variables representing the owner, logo, name, decimals, symbol, and total supply of the token.
              </li>
              <li>
                <code style={codestyle}>blackhole</code>: A stable variable representing a designated blackhole account.
              </li>
              <li>
                <code style={codestyle}>feeTo</code>: The account to which fees are directed.
              </li>
              <li>
                <code style={codestyle}>fee</code>: A fee associated with transactions.
              </li>
              <li>
                <code style={codestyle}>balanceEntries</code>: Stable variable storing account balances.
              </li>
              <li>
                <code style={codestyle}>allowanceEntries</code>: Stable variable storing allowances granted by token holders.
              </li>
              <li>
                <code style={codestyle}>balances</code>: A <code style={codestyle}>HashMap</code> storing account balances.
              </li>
              <li>
                <code style={codestyle}>allowances</code>: A nested <code style={codestyle}>HashMap</code> storing allowances.
              </li>
              <li>
                <code style={codestyle}>genesis</code>: A stable variable representing the initial transaction (minting) of the token.
              </li>
              <li>
                <code style={codestyle}>txcounter</code>: A counter for transaction history.
              </li>
            </ul>
          </li>
          <li>
            <h3 style={h3color}>Functions:</h3>
            <ul>
              <li>
                <code style={codestyle}>transfer</code>, <code style={codestyle}>transferFrom</code>, <code style={codestyle}>approve</code>: Functions for transferring tokens, approving transfers, and managing allowances.
              </li>
              <li>
                <code style={codestyle}>mint</code>, <code style={codestyle}>burn</code>: Functions for minting and burning tokens.
              </li>
              <li>
                <code style={codestyle}>logo</code>, <code style={codestyle}>name</code>, <code style={codestyle}>symbol</code>, <code style={codestyle}>decimals</code>, <code style={codestyle}>totalSupply</code>, <code style={codestyle}>getTokenFee</code>, <code style={codestyle}>balanceOf</code>, <code style={codestyle}>allowance</code>, <code style={codestyle}>getMetadata</code>, <code style={codestyle}>historySize</code>: Query functions to retrieve information about the token.
              </li>
              <li>
                <code style={codestyle}>setName</code>, <code style={codestyle}>setLogo</code>, <code style={codestyle}>setFeeTo</code>, <code style={codestyle}>setFee</code>, <code style={codestyle}>setOwner</code>: Functions to update token metadata and settings.
              </li>
              <li>
                <code style={codestyle}>getTokenInfo</code>, <code style={codestyle}>getHolders</code>, <code style={codestyle}>getAllowanceSize</code>, <code style={codestyle}>getUserApprovals</code>: Additional query functions for token information.
              </li>
            </ul>
          </li>
          <li>
            <h3 style={h3color}>Upgrade Functions:</h3>
            <ul>
              <li>
                <code style={codestyle}>preupgrade</code>: A system function executed before an upgrade to store state variables.
              </li>
              <li>
                <code style={codestyle}>postupgrade</code>: A system function executed after an upgrade to restore state variables.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3color}>Optional Interfaces:</h3>
        <ul>
          <li>
            <code style={codestyle}>setName</code>, <code style={codestyle}>setLogo</code>, <code style={codestyle}>setFeeTo</code>, <code style={codestyle}>setFee</code>,

 <code style={codestyle}>setOwner</code>: Functions to update token metadata and settings.
          </li>
          <li>
            <code style={codestyle}>getUserTransactionsAmount</code>, <code style={codestyle}>getUserTransactions</code>: Interfaces for user transactions.
          </li>
          <li>
            <code style={codestyle}>getTokenInfo</code>, <code style={codestyle}>getHolders</code>, <code style={codestyle}>getUserApprovals</code>: Additional interfaces for token information.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3color}>Upgrade Functions:</h3>
        <ul>
          <li>
            <code style={codestyle}>preupgrade</code>: Captures the state of the contract before an upgrade.
          </li>
          <li>
            <code style={codestyle}>postupgrade</code>: Restores the state of the contract after an upgrade.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3color}>Additional Notes:</h3>
        <ul>
          <li>The contract uses a <code style={codestyle}>Cap</code> capability for handling events.</li>
          <li>The <code style={codestyle}>ExperimentalCycles</code> module is used to track cycles.</li>
          <li>Various utility functions (<code style={codestyle}>_chargeFee</code>, <code style={codestyle}>_transfer</code>, <code style={codestyle}>_balanceOf</code>, <code style={codestyle}>_allowance</code>, <code style={codestyle}>u64</code>) for internal operations.</li>
          <li>The contract adheres to the DIP20 standard, providing basic token functionalities.</li>
        </ul>
      </section>

  
    </div>
  );
}; 
const containerStyle = {
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };
  
  const sectionStyle = {
    marginBottom: '20px',
  };

  const codestyle = {
  color: '#ffa756',
  };

  const h3color = {
    color: '#45f3ff',
    fontsize: '24px',
    marginTop: '25px',
    marginBottom: '15px',

    };


export default ContractDescription;
