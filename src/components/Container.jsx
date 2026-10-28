import { forwardRef } from 'react'
import clsx from 'clsx'

export const Container = forwardRef(function Container(
  { as: Component = 'div', size = 'default', className, ...props },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={clsx(
        'mx-auto w-full px-4 sm:px-6',
        size === 'narrow' ? 'max-w-[880px]' : 'max-w-[1200px]',
        className,
      )}
      {...props}
    />
  )
})
