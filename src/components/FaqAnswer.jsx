export function FaqAnswer({ blocks }) {
  return (
    <div className="mt-3 flex flex-col gap-3 text-ink-600">
      {blocks.map((block, index) =>
        typeof block === 'string' ? (
          <p key={index}>{block}</p>
        ) : (
          <ul key={index} className="flex flex-col gap-2">
            {block.list.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gold"
                />
                {item}
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}
