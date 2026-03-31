import { forwardRef, Children, cloneElement, isValidElement } from 'react';

const Slot = forwardRef(({ children, ...props }, ref) => {
  if (Children.count(children) > 1) {
    throw new Error('Slot can only have one child');
  }

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
      ref: ref
        ? (node) => {
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
            if (typeof children.ref === 'function') {
              children.ref(node);
            } else if (children.ref) {
              children.ref.current = node;
            }
          }
        : children.ref,
    });
  }

  return null;
});

Slot.displayName = 'Slot';

export default Slot;
