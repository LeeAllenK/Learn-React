import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import './App.css';
// import Dev from './App';
// import Gallery from './adding-interactivity/gallery-image-update'
// import Form from './updating-objects-in-state/example'
// import Scoreboard from './updating-objects-in-state/challenges/fix-incorrect-state-update'
// import ShoppingCart from './updating-array-state/challenges/remove-item-cart'
// import List from './updating-array-state/updating-objects-inside-array'
// import Form from './managing-state/reacting-to-input-with-state'
import SyncedInputs from './managing-state/challenges/synced-inputs'
import EditProfile from './managing-state/challenges/profile-editor'
// import FeedbackForm from './managing-state/choosing-state-structure'
// import Menu from './managing-state/choosing-state-structure/avoid-duplication-in-state'
import App from './managing-state/preserving-resetting-state/practice/exFour'
// import Chat from './escape-hatches/challenges/fix-broken-chat-input'
import Toggle from './escape-hatches/challenges/fix-component-failing-to-rerender'
import Dashboard from './escape-hatches/challenges/fix-debouncing'
import Chat from './escape-hatches/challenges/read-the-latest-state'
import Counter from './custom-hooks/challenges/extract-a-useCounter-Hook'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Counter/>
  </StrictMode>
);