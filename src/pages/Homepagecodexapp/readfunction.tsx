import React from 'react';

const ReadFunctions = ({ didFileContent }) => {
  // Assume didFileContent is a string containing the content of the .did file

  // Parse the .did file content to extract read functions
  const extractReadFunctions = (didContent) => {
    const readFunctionRegex = /\b(\w+)\s*:\s*\(\s*\)\s*->\s*\(([^)]*)\)\s*query\s*;/g;
    const matches = [...didContent.matchAll(readFunctionRegex)];
  
    const readFunctions = matches.map(match => ({
      name: match[1].trim(),
      returnType: match[2].trim(),
    }));
  
    return readFunctions;
  };

  const readFunctions = extractReadFunctions(didFileContent);

  return (
    <div>
      <h2>Read Functions</h2>
      <ul>
        {readFunctions.map((func, index) => (
          <li key={index}>
            Returns: {func.returnType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadFunctions;
