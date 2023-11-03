// ContractInfoModal.js
import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import ContractDescription from './icp20contractdescription';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ReadFunctions from './readfunction';

const ContractInfoModal = ({ contractInfo, isOpen, onRequestClose }) => {
  const [selectedTab, setSelectedTab] = useState('contractExplanation');
  const modalStyle: Styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 50, 0.15)',
      backdropFilter: 'blur(12px)',
    },
    content: {
      margin: 'auto',
      background: 'rgba(0, 0, 50, 0.45)',
      border: '2px solid lightblue',
      borderRadius: '8px',
      padding: '20px',
      color: 'white',
      fontSize: '24px',
      gap: '30px',
      marginTop: '20px',
      top: '50px',
      maxHeight: '80%',
    },
  };
  const [didFileContent, setDidFileContent] = useState('');

  useEffect(() => {
    const didFilePath = './mydid.did';
    console.log(didFilePath);
    // Fetch the content of the file
    fetch(didFilePath)
      .then(response => response.text())
      .then(data => setDidFileContent(data) )
      .catch(error => console.error('Error fetching file:', error));
  }, []);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContractExplanation = () => {
    return (
      <div>
        <ContractDescription ></ContractDescription>

        </div>
    );
  };

  const renderReadFunction = () => {
    // Extracted information about read functions
    const readFunctions = [
      {
        name: 'balanceOf',
        description: 'Retrieves the balance of a specified account.',
        exampleUsage: `
        let balance = await myToken.balanceOf(principal);
        `,
        expectedOutput: 'balance contains the token balance of the specified account.',
      },
      {
        name: 'allowance',
        description: 'Retrieves the allowance granted from owner to spender.',
        exampleUsage: `
        let allowance = await myToken.allowance(ownerPrincipal, spenderPrincipal);
        `,
        expectedOutput: 'allowance contains the granted allowance.',
      },
      {
        name: 'getMetadata',
        description: 'Retrieves metadata information about the token.',
        exampleUsage: `
        let metadata = await myToken.getMetadata();
        `,
        expectedOutput: 'metadata contains information such as logo, name, symbol, decimals, total supply, owner, and fee.',
      },
      {
        name: 'historySize',
        description: 'Retrieves the size of the transaction history.',
        exampleUsage: `
        let historySize = await myToken.historySize();
        `,
        expectedOutput: 'historySize contains the number of transactions.',
      },
      {
        name: 'getHolders',
        description: 'Retrieves a list of token holders with their balances, sorted by balance.',
        exampleUsage: `
        let holders = await myToken.getHolders(0, 10);
        `,
        expectedOutput: 'holders contains an array of tuples with Principal and corresponding token balances.',
      },
    ];
  
    return (
        <div>
          <h2 style={h2color}>Read Functions</h2>
          {readFunctions.map((func) => (
            <div key={func.name}>
            <h3 style={h3color}>{func.name}</h3>
            <p>{func.description}</p>
            <pre>
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {func.exampleUsage}
              </SyntaxHighlighter>
            </pre>
            <p><strong>Expected Output:</strong> {func.expectedOutput}</p>
          </div>
          ))}
        </div>
      );
    };
  
  const renderWriteFunction = () => {
    // Extracted information about write functions
    const writeFunctions = [
      {
        name: 'transfer',
        description: 'Transfers tokens from the caller\'s account to the specified account.',
        exampleUsage: `
        let receipt = await myToken.transfer(toPrincipal, amount);
        `,
        expectedOutput: 'receipt contains the transaction receipt.',
      },
      {
        name: 'transferFrom',
        description: 'Transfers tokens from one account to another on behalf of the caller.',
        exampleUsage: `
        let receipt = await myToken.transferFrom(fromPrincipal, toPrincipal, amount);
        `,
        expectedOutput: 'receipt contains the transaction receipt.',
      },
      {
        name: 'approve',
        description: 'Approves the spender to withdraw a specified amount of tokens.',
        exampleUsage: `
        let receipt = await myToken.approve(spenderPrincipal, allowanceAmount);
        `,
        expectedOutput: 'receipt contains the transaction receipt.',
      },
      {
        name: 'mint',
        description: 'Mints new tokens and adds them to the specified account.',
        exampleUsage: `
        let receipt = await myToken.mint(toPrincipal, mintAmount);
        `,
        expectedOutput: 'receipt contains the transaction receipt.',
      },
      {
        name: 'burn',
        description: 'Removes a specified amount of tokens from circulation.',
        exampleUsage: `
        let receipt = await myToken.burn(burnAmount);
        `,
        expectedOutput: 'receipt contains the transaction receipt.',
      },
    ];
  
    return (
      <div>
        <h2 style={h2color}>Write Functions</h2>
        {writeFunctions.map((func) => (
          <div key={func.name}>
            <h3 style={h3color}>{func.name}</h3>
            <p>{func.description}</p>
            <pre>
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {func.exampleUsage}
              </SyntaxHighlighter>
            </pre>
            <p><strong>Expected Output:</strong> {func.expectedOutput}</p>
          </div>
        ))}
      </div>
    );
  };
  
  const renderEventFunction = () => {
    // Extracted information about event functions
    const eventFunctions = [
      {
        name: 'addRecord',
        description: 'Adds a transaction record to the contract.',
        exampleUsage: `
        await myToken.addRecord(callerPrincipal, "transfer", [
          ("to", #Principal(toPrincipal)),
          ("value", #U64(u64(value))),
          ("fee", #U64(u64(fee)))
        ]);
        `,
        expectedOutput: 'Adds a transaction record for a specific operation.',
      },
    ];
  
   return (
      <div>
        <h2 style={h2color}>Event Functions</h2>
        {eventFunctions.map((func) => (
          <div key={func.name}>
            <h3 style={h3color}>{func.name}</h3>
            <p>{func.description}</p>
            <pre>
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {func.exampleUsage}
              </SyntaxHighlighter>
            </pre>
            <p><strong>Expected Output:</strong> {func.expectedOutput}</p>
          </div>
        ))}
      </div>
    );
  };
  

  const renderContent = () => {
    switch (selectedTab) {
      case 'contractExplanation':
        return renderContractExplanation();
      case 'readFunction':
        return renderReadFunction();
      case 'writeFunction':
        return renderWriteFunction();
      case 'eventFunction':
        return renderEventFunction();
      default:
        return null;
    }
  };

  const [activeTab, setActiveTab] = useState('contractExplanation');


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}         style={modalStyle}
    >
     <div >
      <div style={buttonContainerStyle}>
      <button style={selectedTab === 'contractExplanation' ? activeButtonStyle : buttonStyle} onClick={() => handleTabClick('contractExplanation')}>
  Contract Explanation
</button>
<button style={selectedTab === 'readFunction' ? activeButtonStyle : buttonStyle} onClick={() => handleTabClick('readFunction')}>
  Read Function
</button>
<button style={selectedTab === 'writeFunction' ? activeButtonStyle : buttonStyle} onClick={() => handleTabClick('writeFunction')}>
  Write Function
</button>
<button style={selectedTab === 'eventFunction' ? activeButtonStyle : buttonStyle} onClick={() => handleTabClick('eventFunction')}>
  Event Function
</button>
      </div>
      {renderContent()}
      <button style={closeButtonStyle} onClick={onRequestClose}>
        Close
      </button>
    </div>
    </Modal>
  );
};


const codestyle = {
    color: '#ffa756',
    };
  
    const h3color = {
      color: '#45f3ff',
      };

      const h2color = {
        color: 'white',
        fontSize: '24px',
        marginBottom: '20px',


        
        };

  
  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };
  
  
  const functionContainerStyle = {
    marginBottom: '20px',
    padding: '15px',
    borderRadius: '8px',
  };
  const closeButtonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',

  };
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#3498db',
    padding: '10px 20px',
    margin: '0 10px',
    border: '2px solid #3498db',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s',
  };
  
  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2980b9',
    color: '#fff',
    borderColor: '#2980b9',
  };
  
  // Add a hover effect
  const hoverButtonStyle = {
    ...buttonStyle,
    ':hover': {
      backgroundColor: '#3498db',
      borderColor: '#2980b9',
    },
  };
export default ContractInfoModal;
