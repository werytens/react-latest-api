import React, { useTransition, useState, useId, useSyncExternalStore } from 'react';
import { Suspense } from 'react';
import { DataComp } from './components/DataComp';
import TabContainer from './components/TabContainer';
import { CounterComponent } from './components/CounterComponent';


function App() {
  const idOne = useId();
  const idTwo = useId();
  const idThree = useId();

  
  // flushSync


  return (
    <div className="App">
      <CounterComponent/>
      <CounterComponent/>
      <CounterComponent/>
      

      {/* {idOne} {idTwo} {idThree} */}
      {/* <TabContainer/> */}
      {/* <Suspense fallback={<p style={{background: 'red'}}>Loading, please wait...</p>}>
        <DataComp />
      </Suspense> */}
    </div>
  );
}

export default App;