import React from 'react'
import {calculateInvestmentResults} from '../utils/investment';

const Results = ({input}) => {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <>
    <p>Results </p>
    </>
  )
}

export default Results 