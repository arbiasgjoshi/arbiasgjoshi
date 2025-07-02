declare module 'framer-motion' {
  import * as React from 'react'

  export interface AnimationProps {
    initial?: any
    animate?: any
    exit?: any
    transition?: any
    variants?: any
    whileHover?: any
    whileTap?: any
  }

  export type MotionProps = AnimationProps & React.HTMLAttributes<HTMLElement>

  export type MotionComponent<P = {}> = React.ComponentType<P & MotionProps>

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<JSX.IntrinsicElements[K]>
  }
} 