'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

// A modal built on the browser's native <dialog>: it handles focus trapping,
// the Escape key and the backdrop without shipping a UI library.
export function Modal({ open, onClose, className, children, ...props }) {
  let ref = useRef(null)

  useEffect(() => {
    let dialog = ref.current
    if (!dialog) {
      return
    }
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
    if (!open) {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  useEffect(
    () => () => {
      document.documentElement.style.overflow = ''
    },
    [],
  )

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        // A click on the dialog element itself is a click on the backdrop
        if (event.target === ref.current) {
          ref.current.close()
        }
      }}
      className={clsx(
        'max-h-none border-0 bg-transparent p-0 text-ink backdrop:bg-forest-950/40 backdrop:backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </dialog>
  )
}
