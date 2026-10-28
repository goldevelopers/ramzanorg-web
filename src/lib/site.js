// Site-wide settings. Update the intake details here each year.
export const site = {
  name: 'Ramzan Talent Scholarship',
  email: 'scholarship@ramzan.org.pk',
  whatsappNumber: '923316204332',
  whatsappLabel: '+92 331 6204332',
  applyUrl: 'https://apply.ramzan.org.pk/signin',
  applyHost: 'apply.ramzan.org.pk',
}

export const intake = {
  year: 2026,
  open: true,
  // ISO date of the last day applications are accepted
  deadline: '2026-12-18',
  deadlineLabel: '18 December 2026',
  deadlineShort: '18 Dec 2026',
  announcementHref:
    '/articles/applications-open-ramzan-talent-scholarship-2026',
}

export function whatsappHref(message) {
  let href = `https://wa.me/${site.whatsappNumber}`
  return message ? `${href}?text=${encodeURIComponent(message)}` : href
}
