// Renders **bold** markers in FAQ text
function RichText({ text }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-forest-900">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export function FaqAnswer({ blocks }) {
  return (
    <div className="mt-3 flex flex-col gap-3 text-ink-600">
      {blocks.map((block, index) =>
        typeof block === 'string' ? (
          <p key={index}>
            <RichText text={block} />
          </p>
        ) : (
          <ul key={index} className="flex flex-col gap-2">
            {block.list.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gold"
                />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}
