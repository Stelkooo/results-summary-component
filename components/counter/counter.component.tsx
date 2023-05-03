import { useEffect, useRef } from 'react';
import { AnimationPlaybackControls, animate } from 'framer-motion';

type Props = {
  from: number;
  to: number;
};

export default function Counter({ from, to }: Props) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    let controls: AnimationPlaybackControls;

    if (node) {
      controls = animate(from, to, {
        delay: 0.25,
        duration: 1,
        ease: 'easeInOut',
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
    }

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}
