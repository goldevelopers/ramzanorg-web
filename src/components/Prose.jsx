import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'prose text-lg leading-[1.75] prose-headings:font-display prose-headings:tracking-tight prose-h2:text-[30px] prose-h2:font-extrabold prose-h2:leading-tight prose-h3:text-xl prose-h3:font-bold prose-a:font-semibold prose-blockquote:not-italic',
      )}
      {...props}
    />
  )
}
