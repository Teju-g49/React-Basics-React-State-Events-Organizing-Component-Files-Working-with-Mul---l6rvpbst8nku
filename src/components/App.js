import React from 'react'
import '../styles/App.css';
import Heading  from "./Heading";
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';
import InputQuery from './InputQuery';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;

/*

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
FAIL src/__tests__/App.test.js
  Import Individual components. 
    ✓ App module should export respective component by default (2 ms)
    ✓ Heading module should export respective component by default
    ✓ SubHeading module should export respective component by default (1 ms)
    ✓ InputQuery module should export respective component by default
    ✓ SubmitButton module should export respective component by default (1 ms)
  Render Test 
    ✕ encountered a declaration exception

  ● Render Test  › encountered a declaration exception

    ReferenceError: React is not defined

       6 | 
       7 | const App = () => {
    >  8 |   return (
         |   ^
       9 |     <div id="main">
      10 |       <Heading />
      11 |       <SubHeading />

      at App (src/components/App.js:8:3)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:14803:18)
      at mountIndeterminateComponent (node_modules/react-dom/cjs/react-dom.development.js:17482:13)
      at beginWork (node_modules/react-dom/cjs/react-dom.development.js:18596:16)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:188:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:318:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:237:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:292:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:23203:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:22157:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:22130:22)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:21756:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:21188:7)
      at updateContainer (node_modules/react-dom/cjs/react-dom.development.js:24373:3)
      at node_modules/react-dom/cjs/react-dom.development.js:24758:7
      at unbatchedUpdates (node_modules/react-dom/cjs/react-dom.development.js:21903:12)
      at legacyRenderSubtreeIntoContainer (node_modules/react-dom/cjs/react-dom.development.js:24757:5)
      at Object.render (node_modules/react-dom/cjs/react-dom.development.js:24840:10)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:487:26)
      at node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:404:37
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:21856:12)
      at Object.act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:929:14)
      at wrapAct (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:404:13)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:473:16)
      at new ReactWrapper (node_modules/enzyme/src/ReactWrapper.js:115:16)
      at mount (node_modules/enzyme/src/mount.js:10:10)
      at Suite.<anonymous> (src/__tests__/App.test.js:37:23)
      at Object.<anonymous> (src/__tests__/App.test.js:36:1)

  console.error
    Error: Uncaught [ReferenceError: React is not defined]
        at reportException (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:62:24)
        at innerInvokeEventListeners (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:333:9)
        at invokeEventListeners (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
        at HTMLUnknownElementImpl._dispatch (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
        at HTMLUnknownElementImpl.dispatchEvent (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
        at HTMLUnknownElement.dispatchEvent (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
        at Object.invokeGuardedCallbackDev (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:237:16)
        at invokeGuardedCallback (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:292:31)
        at beginWork$1 (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:23203:7)
        at performUnitOfWork (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:22157:12) ReferenceError: React is not defined
        at App (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/src/components/App.js:8:3)
        at renderWithHooks (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:14803:18)
        at mountIndeterminateComponent (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:17482:13)
        at beginWork (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:18596:16)
        at HTMLUnknownElement.callCallback (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:188:14)
        at HTMLUnknownElement.callTheUserObjectsOperation (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
        at innerInvokeEventListeners (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:318:25)
        at invokeEventListeners (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
        at HTMLUnknownElementImpl._dispatch (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
        at HTMLUnknownElementImpl.dispatchEvent (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
        at HTMLUnknownElement.dispatchEvent (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
        at Object.invokeGuardedCallbackDev (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:237:16)
        at invokeGuardedCallback (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:292:31)
        at beginWork$1 (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:23203:7)
        at performUnitOfWork (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:22157:12)
        at workLoopSync (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:22130:22)
        at performSyncWorkOnRoot (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:21756:9)
        at scheduleUpdateOnFiber (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:21188:7)
        at updateContainer (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:24373:3)
        at /drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:24758:7
        at unbatchedUpdates (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:21903:12)
        at legacyRenderSubtreeIntoContainer (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:24757:5)
        at Object.render (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:24840:10)
        at fn (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:487:26)
        at /drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:404:37
        at batchedUpdates$1 (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom.development.js:21856:12)
        at Object.act (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/react-dom/cjs/react-dom-test-utils.development.js:929:14)
        at wrapAct (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:404:13)
        at Object.render (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:473:16)
        at new ReactWrapper (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme/src/ReactWrapper.js:115:16)
        at mount (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/enzyme/src/mount.js:10:10)
        at Suite.<anonymous> (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/src/__tests__/App.test.js:37:23)
        at addSpecsToSuite (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-jasmine2/build/jasmine/Env.js:444:51)
        at Env.describe (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-jasmine2/build/jasmine/Env.js:414:11)
        at describe (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-jasmine2/build/jasmine/jasmineLight.js:88:18)
        at Object.<anonymous> (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/src/__tests__/App.test.js:36:1)
        at Runtime._execModule (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-runtime/build/index.js:1217:24)
        at Runtime._loadModule (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-runtime/build/index.js:828:12)
        at Runtime.requireModule (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-runtime/build/index.js:679:10)
        at jasmine2 (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-jasmine2/build/index.js:230:13)
        at runTestInternal (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-runner/build/runTest.js:372:22)
        at runTest (/drone/src/React-Basics-React-State-Events-Organizing-Component-Files-Working-with-Mul---l6rvpbst8nku/node_modules/jest-runner/build/runTest.js:464:34)

      at VirtualConsole.<anonymous> (node_modules/jsdom/lib/jsdom/virtual-console.js:29:45)
      at VirtualConsole.emit (node:events:513:28)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:333:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)

  console.error
    The above error occurred in the <App> component:
        in App (created by WrapperComponent)
        in WrapperComponent
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

      at logCapturedError (node_modules/react-dom/cjs/react-dom.development.js:19527:21)
      at logError (node_modules/react-dom/cjs/react-dom.development.js:19564:5)
      at update.callback (node_modules/react-dom/cjs/react-dom.development.js:20708:5)
      at callCallback (node_modules/react-dom/cjs/react-dom.development.js:12490:12)
      at commitUpdateQueue (node_modules/react-dom/cjs/react-dom.development.js:12511:9)
      at commitLifeCycles (node_modules/react-dom/cjs/react-dom.development.js:19883:11)
      at commitLayoutEffects (node_modules/react-dom/cjs/react-dom.development.js:22803:7)


*/ 