// Stroke icons used across the site. They inherit colour from `currentColor`.

function StrokeIcon({ children, strokeWidth = 2, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  )
}

export function CheckIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </StrokeIcon>
  )
}

export function MenuIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </StrokeIcon>
  )
}

export function CloseIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </StrokeIcon>
  )
}

export function CapIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </StrokeIcon>
  )
}

export function BuildingIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </StrokeIcon>
  )
}

export function WalletIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h3" />
    </StrokeIcon>
  )
}

export function StarIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </StrokeIcon>
  )
}

export function TargetIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </StrokeIcon>
  )
}

export function CalendarIcon(props) {
  return (
    <StrokeIcon strokeWidth={1.8} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </StrokeIcon>
  )
}

export function ChatIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.4A9 9 0 1 1 21 12Z" />
    </StrokeIcon>
  )
}

export function MailIcon(props) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </StrokeIcon>
  )
}

export function FacebookIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2Z" />
    </StrokeIcon>
  )
}

export function LinkIcon(props) {
  return (
    <StrokeIcon {...props}>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </StrokeIcon>
  )
}
