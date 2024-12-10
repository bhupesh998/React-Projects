import { memo } from 'react';
import { log } from '../../log.js';


// in the counter componet when we are incrementing or decrementing a count , the Iconbutton component was getting rerender on evry change but we can avoid it through memo as its only outputiing buttons that are not changing 
// but strangely we see that they still gets rendered because a function onclick in getting passed to it and we know that no two function object are same even with same code as they are created on every re-render and the refrences they have is diffrent each time
// so useCallback for them first and then memo will do its work
 const IconButton = memo( function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton
