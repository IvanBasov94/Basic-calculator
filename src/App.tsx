import React, { useState } from "react";

const App: React.FC = () => {

   const [calc, setCalc] = useState<string>('');
   const [result, setResult] = useState<string>('');

   const ops: string[] = ['/', '*', '+', '-', '.'];

   const updateCalc = (value: string) => {
      if (
         (ops.includes(value) && calc === '') ||
         (ops.includes(value) && ops.includes(calc.slice(-1)))
      ) {
         return;
      };

      setCalc(calc + value);

      if (!ops.includes(value)) {
         setResult(eval(calc + value).toString());
      };
   };

   const createDigits = () => {
      const digits = [];

      for (let i: number = 1; i < 10; i++) {
         digits.push(
            <button onClick={() =>
               updateCalc(i.toString())} key={i}>
               {i}
            </button>
         );
      };

      return digits;
   };

   const calculate = () => {
      setCalc(eval(calc).toString());
   };

   const deleteLast = () => {
      if (calc === '') {
         return;
      };

      const value = calc.slice(0, -1);

      setCalc(value);
   };

   const deleteAll = () => {
      setResult('');
      setCalc('');
   };

   const deleteCalc = () => {
      setCalc('');
   };

   const changeSign = () => {
      let _calc: string;

      if (calc > '0') {
         _calc = (-Number(calc)).toString();
      } else {
         _calc = Math.abs(Number(calc)).toString();
      };
      setCalc(_calc);
      setResult(_calc);
   };

   const calculateSQR = () => {
      const _calc: string = (Number(calc) ** 2).toString();
      setCalc(_calc);
      setResult(_calc);
   };

   const calculateSQRT = () => {
      const _calc: string = (Number(calc) ** 0.5).toString();
      setCalc(_calc);
      setResult(_calc);
   };

   const calculateHyperbola = () => {
      const _calc: string = (1 / Number(calc)).toString();
      setCalc(_calc);
      setResult(_calc);
   };

   return (
      <div className="app">
         <div className="calculator">
            <div className="display">
               {result ? <span>({result})</span> : ''} {calc || '0'}
            </div>
            <div className="operators">
               <button onClick={() => updateCalc('-')}>-</button>
               <button onClick={() => updateCalc('+')}>+</button>
               <button onClick={() => updateCalc('*')}>*</button>
               <button onClick={calculate}>=</button>
               <button onClick={calculateSQR}>x<sup>2</sup></button>
               <button onClick={calculateSQRT}>x<sup>1/2</sup></button>
               <button onClick={calculateHyperbola}>1/x</button>
               <button onClick={() => updateCalc('/')}>/</button>
               <button onClick={deleteCalc}>CE</button>
               <button onClick={deleteAll}>C</button>
               <button onClick={deleteLast}>
                  <img
                     width={20}
                     height={20}
                     src="https://cdn-icons-png.flaticon.com/512/159/159805.png"
                  />
               </button>
            </div>
            <div className="digits">
               {createDigits()}
               <button onClick={changeSign}>+/-</button>
               <button onClick={() => updateCalc('0')}>0</button>
               <button onClick={() => updateCalc('.')}>.</button>
            </div>
         </div>
      </div>
   );
}



export default App;
