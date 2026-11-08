/* CEEL Portfolio — structured content and progressive enhancement */
const PROFILE = {
  name: 'Jann Kenneth A. Pornasa',
  shortName: 'Jann Kenneth',
  title: 'IT Student · Creative Technology Builder',
  location: 'Calamba City, Laguna, Philippines',
  email: 'japornasa@ccc.edu.ph',
  cvEmail: 'Pornasajannkenneth@gmail.com',
  phone: '09061547445',
  facebook: 'https://www.facebook.com/jannkenneth.pornasa.94/',
  tagline: 'Learning by building systems, visual ideas, and useful digital experiences.',
};

const PROJECTS = [
  {
    id: 'brew-haven', title: 'Brew Haven', type: 'Web Development', category: 'Web Development', year: '2026',
    role: 'Concept designer / front-end learner', status: 'Concept study',
    image: 'images/projects/brew-haven-landing.jpg',
    gallery: ['images/projects/brew-haven-banner.jpg', 'images/projects/brew-haven-landing.jpg', 'images/projects/brew-haven-social.jpg'],
    technologies: ['HTML', 'CSS', 'Visual design'],
    summary: 'A warm visual direction for a coffee concept, including landing-page and campaign artwork.',
    overview: 'Brew Haven is a brand and web concept exploring how a small coffee idea can feel warm, memorable, and ready to share online.',
    problem: 'The concept needed a clear visual voice that could work across a landing page, a campaign banner, and social content.',
    solution: 'I explored a cohesive visual system with a friendly palette, clear hierarchy, and reusable compositions that connect the web and campaign surfaces.',
    features: ['Landing-page direction', 'Campaign banner composition', 'Social content study', 'Responsive-first layout thinking'],
    links: {},
  },
  {
    id: 'road-56', title: 'Road 56', type: 'Graphic Design', category: 'Graphic Design', year: '2026',
    role: 'Visual identity explorer', status: 'Identity concept',
    image: 'images/projects/road-56-logo.png', gallery: ['images/projects/road-56-logo.png'],
    technologies: ['Brand identity', 'Graphic design', 'Composition'],
    summary: 'A bold badge-style identity exploration with road-trip energy and a memorable mark.',
    overview: 'Road 56 is a logo exploration built around movement, direction, and the character of a road-based story.',
    problem: 'The identity needed to communicate motion and personality while staying recognizable at small sizes.',
    solution: 'I used a compact badge direction, strong contrast, and a simple central symbol so the mark can travel across different surfaces.',
    features: ['Badge-style logo direction', 'High-contrast mark', 'Scalable composition study', 'Visual identity notes'], links: {},
  },
  {
    id: 'system-interface', title: 'System interface study', type: 'Information System', category: 'Information System', year: '2026',
    role: 'System interface designer', status: 'Interface concept',
    image: 'images/projects/system-screenshot.png', gallery: ['images/projects/system-screenshot.png'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Information architecture'],
    summary: 'A first look at a digital system layout focused on clear information and simple navigation.',
    overview: 'This interface study explores a practical information system surface where users can scan content, understand status, and move to the next action.',
    problem: 'Early system concepts can become difficult to use when structure, labels, and visual priority are not considered together.',
    solution: 'I focused on a calmer layout, clear grouping, and visible navigation cues so the interface communicates its purpose at a glance.',
    features: ['Information hierarchy study', 'Dashboard-style layout', 'Navigation and status cues', 'Readable content grouping'], links: {},
  },
  {
    id: 'logo-idea', title: 'Logo idea', type: 'Graphic Design', category: 'Graphic Design', year: '2026',
    role: 'Graphic designer', status: 'Exploration', image: 'images/projects/logo-idea.jpg', gallery: ['images/projects/logo-idea.jpg'],
    technologies: ['Branding', 'Layout', 'Visual direction'],
    summary: 'An early mark exploration from the visual identity process.',
    overview: 'Logo idea is an early visual exploration showing how a simple mark can become the starting point for a broader identity.',
    problem: 'A new visual direction often starts as a loose idea that needs testing before it can become a confident system.',
    solution: 'I used composition, contrast, and repetition to explore how the mark could hold attention and suggest a point of view.',
    features: ['Early mark exploration', 'Composition testing', 'Contrast and balance study', 'Identity direction notes'], links: {},
  },
];

const CERTIFICATES = [
  { title: 'Certificate 01', image: 'images/certs/cert1.png', issuer: 'Learning milestone', year: '2026' },
  { title: 'Certificate 02', image: 'images/certs/cert2.png', issuer: 'Learning milestone', year: '2026' },
  { title: 'Certificate 03', image: 'images/certs/cert3.png', issuer: 'Learning milestone', year: '2026' },
  { title: 'Certificate 04', image: 'images/certs/cert4.png', issuer: 'Learning milestone', year: '2026' },
  { title: 'Certificate 05', image: 'images/certs/cert5.png', issuer: 'Learning milestone', year: '2026' },
  { title: 'Certificate 06', image: 'images/certs/cert6.png', issuer: 'Learning milestone', year: '2026' },
];

const SKILLS = {
  technical: [
    { title: 'Web development', text: 'Building responsive static sites and interface concepts with semantic HTML, maintainable CSS, and JavaScript.', tags: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Java development', text: 'Learning to shape practical Java programs with readable logic, reusable methods, and object-oriented thinking.', tags: ['Java', 'OOP thinking', 'Logic'] },
    { title: 'System testing', text: 'Looking for edge cases, unclear moments, and small details that make a digital system more dependable.', tags: ['Test cases', 'Debugging', 'Quality mindset'] },
    { title: 'AI prompting', text: 'Writing thoughtful instructions for AI tools, turning rough questions into useful first drafts, and iterating with care.', tags: ['AI workflows', 'Clear briefs', 'Iteration'] },
    { title: 'Visual design', text: 'Exploring composition, layout, identity, and visual systems that help an idea communicate quickly.', tags: ['Branding', 'Layout', 'Visual direction'] },
    { title: 'Animation', text: 'Using movement, timing, and transitions to give digital experiences a little more life and personality.', tags: ['Motion', 'Timing', 'Storytelling'] },
  ],
  professional: [
    { title: 'Problem solving', text: 'Breaking a task into smaller questions, testing assumptions, and choosing a clear next step.', tags: ['Structured thinking', 'Iteration'] },
    { title: 'Communication', text: 'Making ideas, questions, and progress easier for other people to understand.', tags: ['Clarity', 'Listening'] },
    { title: 'Critical thinking', text: 'Comparing options and checking details before treating an idea as finished.', tags: ['Evaluation', 'Attention to detail'] },
    { title: 'Time management', text: 'Organizing learning and project work so the important parts keep moving forward.', tags: ['Priorities', 'Consistency'] },
    { title: 'Flexibility', text: 'Staying open to feedback, new tools, and better ways to approach a problem.', tags: ['Adaptability', 'Growth mindset'] },
    { title: 'Technical documentation', text: 'Capturing decisions and instructions so a project is easier to understand and continue.', tags: ['Notes', 'Handoffs'] },
  ],
};

const ROOT = () => document.body.dataset.root || '';
const sitePath = (path) => `${ROOT()}${path}`;
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const iconArrow = '<span aria-hidden="true">↗</span>';

function setupMenu() {
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close' : 'Menu'; });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; }));
  const current = document.body.dataset.page;
  nav.querySelectorAll('[data-page-link]').forEach((link) => { if (link.dataset.pageLink === current || (current === 'project-detail' && link.dataset.pageLink === 'projects')) link.classList.add('active'); });
}

function setupTheme() {
  const button = document.querySelector('#themeToggle'); const saved = localStorage.getItem('ceel-theme');
  if (saved === 'dark') document.documentElement.dataset.theme = 'dark';
  const update = () => { const dark = document.documentElement.dataset.theme === 'dark'; if (button) { button.setAttribute('aria-pressed', String(dark)); button.innerHTML = dark ? 'Light mode <span aria-hidden="true">☼</span>' : 'Dark mode <span aria-hidden="true">◐</span>'; } };
  button?.addEventListener('click', () => { const dark = document.documentElement.dataset.theme === 'dark'; document.documentElement.dataset.theme = dark ? 'light' : 'dark'; localStorage.setItem('ceel-theme', dark ? 'light' : 'dark'); update(); }); update();
}

function buildCarousel() {
  const track = document.querySelector('#featuredTrack'); const dotsBox = document.querySelector('#carouselDots'); const caption = document.querySelector('#carouselCaption'); const count = document.querySelector('#carouselCount'); const shell = document.querySelector('#featuredCarousel');
  if (!track || !dotsBox || !shell) return;
  const items = PROJECTS.slice(0, 3); let current = 0; let timer; const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  track.innerHTML = items.map((item, index) => `<article class="carousel-slide" data-index="${index}"><a class="slide-view" href="${sitePath(`projects/${item.id}/`)}" aria-label="View ${escapeHtml(item.title)} project"><div class="slide-image"><img src="${sitePath(item.image)}" alt="${escapeHtml(item.title)} project preview" loading="${index === 0 ? 'eager' : 'lazy'}"></div><div class="slide-info"><p class="card-kicker">${escapeHtml(item.category)} · ${item.year}</p><h3>${escapeHtml(item.title)}</h3><span class="slide-arrow">↗</span></div></a></article>`).join('');
  dotsBox.innerHTML = items.map((item, index) => `<button type="button" aria-label="Go to featured item ${index + 1}: ${escapeHtml(item.title)}" data-index="${index}"></button>`).join('');
  const slides = [...track.querySelectorAll('.carousel-slide')]; const dots = [...dotsBox.querySelectorAll('button')];
  const render = () => { slides.forEach((slide, index) => { const offset = (index - current + items.length) % items.length; slide.className = 'carousel-slide'; if (offset === 0) slide.classList.add('is-active'); if (offset === 1) slide.classList.add('is-next'); if (offset === items.length - 1) slide.classList.add('is-prev'); }); dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current)); caption.textContent = `${items[current].title} · ${items[current].category}`; count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`; };
  const restart = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => { current = (current + 1) % items.length; render(); }, 5200); };
  shell.querySelector('.carousel-next')?.addEventListener('click', () => { current = (current + 1) % items.length; render(); restart(); }); shell.querySelector('.carousel-prev')?.addEventListener('click', () => { current = (current - 1 + items.length) % items.length; render(); restart(); }); dots.forEach((dot) => dot.addEventListener('click', () => { current = Number(dot.dataset.index); render(); restart(); })); shell.addEventListener('mouseenter', () => clearInterval(timer)); shell.addEventListener('mouseleave', restart); render(); restart();
}

function projectCard(project, index) {
  const availableLinks = Object.entries(project.links || {}).filter(([, url]) => url);
  return `<article class="project-card ${index === 0 ? 'project-card-featured' : ''}"><div class="project-image"><img src="${sitePath(project.image)}" alt="${escapeHtml(project.title)} project image" loading="lazy"><span class="project-index">${String(index + 1).padStart(2, '0')}</span></div><div class="project-card-copy"><div class="project-card-meta"><p class="card-kicker">${escapeHtml(project.category)} · ${project.year}</p><span class="status-chip">${escapeHtml(project.status)}</span></div><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(project.summary)}</p><div class="tag-list">${project.technologies.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="project-actions"><a class="button button-dark" href="${sitePath(`projects/${project.id}/`)}">View project ${iconArrow}</a>${availableLinks.map(([label, url]) => `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${iconArrow}</a>`).join('')}</div></div></article>`;
}

function setupProjectFilters() {
  const grid = document.querySelector('#projectGrid'); const form = document.querySelector('#projectFilters'); if (!grid) return;
  const query = document.querySelector('#projectSearch'); const category = document.querySelector('#projectCategory'); const year = document.querySelector('#projectYear'); const type = document.querySelector('#projectType'); const count = document.querySelector('#resultsCount'); const empty = document.querySelector('#projectEmpty');
  const render = () => { const needle = (query?.value || '').trim().toLowerCase(); const matches = PROJECTS.filter((project) => { const searchable = [project.title, project.summary, project.category, project.type, project.year, project.role, ...project.technologies].join(' ').toLowerCase(); return (!needle || searchable.includes(needle)) && (!category?.value || project.category === category.value) && (!year?.value || project.year === year.value) && (!type?.value || project.type === type.value); }); grid.innerHTML = matches.map((project) => projectCard(project, PROJECTS.indexOf(project))).join(''); if (count) count.textContent = `${matches.length} project${matches.length === 1 ? '' : 's'} shown`; if (empty) empty.hidden = matches.length > 0; };
  [query, category, year, type].forEach((control) => control?.addEventListener('input', render)); form?.addEventListener('reset', () => window.setTimeout(render, 0)); render();
}

function buildSkills() {
  const technical = document.querySelector('#technicalSkills'); const professional = document.querySelector('#professionalSkills');
  const render = (list) => list.map((skill, index) => `<article class="skill-card"><div class="skill-card-top"><span class="skill-number">${String(index + 1).padStart(2, '0')}</span><span class="skill-symbol" aria-hidden="true">↗</span></div><h3>${escapeHtml(skill.title)}</h3><p>${escapeHtml(skill.text)}</p><div class="tag-list">${skill.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div></article>`).join('');
  if (technical) technical.innerHTML = render(SKILLS.technical); if (professional) professional.innerHTML = render(SKILLS.professional);
}

function buildCertificates() {
  const grid = document.querySelector('#certificateGrid'); const modal = document.querySelector('#certificateModal'); if (!grid || !modal) return;
  grid.innerHTML = CERTIFICATES.map((certificate, index) => `<article class="certificate-card"><button type="button" class="certificate-open" data-index="${index}" aria-label="View ${escapeHtml(certificate.title)}"><img src="${sitePath(certificate.image)}" alt="${escapeHtml(certificate.title)}" loading="lazy"><span>View <b aria-hidden="true">↗</b></span></button><div class="certificate-copy"><p class="card-kicker">${escapeHtml(certificate.issuer)} · ${certificate.year}</p><h2>${escapeHtml(certificate.title)}</h2><a class="text-link" href="${sitePath(certificate.image)}" download="${certificate.title.toLowerCase().replace(/\s+/g, '-')}.png">Download image <span aria-hidden="true">↓</span></a></div></article>`).join('');
  const image = document.querySelector('#modalImage'); const title = document.querySelector('#modalTitle'); const download = document.querySelector('#modalDownload'); let lastTrigger;
  const close = () => { modal.hidden = true; document.body.classList.remove('modal-open'); lastTrigger?.focus(); };
  grid.addEventListener('click', (event) => { const button = event.target.closest('.certificate-open'); if (!button) return; const certificate = CERTIFICATES[Number(button.dataset.index)]; lastTrigger = button; image.src = sitePath(certificate.image); image.alt = certificate.title; title.textContent = certificate.title; download.href = sitePath(certificate.image); download.download = `${certificate.title.toLowerCase().replace(/\s+/g, '-')}.png`; modal.hidden = false; document.body.classList.add('modal-open'); document.querySelector('#modalClose')?.focus(); });
  document.querySelector('#modalClose')?.addEventListener('click', close); modal.addEventListener('click', (event) => { if (event.target === modal) close(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) close(); });
}

function buildProjectDetail() {
  const detail = document.querySelector('#projectDetail'); if (!detail) return; const project = PROJECTS.find((item) => item.id === document.body.dataset.project);
  if (!project) { detail.innerHTML = '<p class="empty-state">This project could not be found.</p>'; return; }
  document.title = `${project.title} | CEEL Portfolio`; const links = Object.entries(project.links || {}).filter(([, url]) => url).map(([label, url]) => `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${iconArrow}</a>`).join('');
  detail.innerHTML = `<section class="detail-hero container"><a class="back-link" href="${sitePath('projects.html')}">← Back to projects</a><div class="detail-heading"><div><p class="eyebrow"><span class="eyebrow-dot"></span>${escapeHtml(project.category)} · ${project.year}</p><h1>${escapeHtml(project.title)}</h1><p class="detail-lede">${escapeHtml(project.summary)}</p></div><div class="detail-meta"><span class="status-chip">${escapeHtml(project.status)}</span><span>Role · ${escapeHtml(project.role)}</span></div></div></section><section class="detail-cover container"><img src="${sitePath(project.image)}" alt="${escapeHtml(project.title)} main project image" loading="eager"></section><section class="detail-body container"><div class="detail-main"><div class="detail-block"><p class="eyebrow">Project overview</p><p class="detail-copy">${escapeHtml(project.overview)}</p></div><div class="detail-block"><div class="detail-columns"><div><p class="eyebrow">The problem</p><p>${escapeHtml(project.problem)}</p></div><div><p class="eyebrow">The solution</p><p>${escapeHtml(project.solution)}</p></div></div></div><div class="detail-block"><p class="eyebrow">Features and focus</p><ul class="feature-list">${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul></div></div><aside class="detail-aside"><div class="aside-card"><p class="card-kicker">Project facts</p><dl><div><dt>Category</dt><dd>${escapeHtml(project.category)}</dd></div><div><dt>Year</dt><dd>${escapeHtml(project.year)}</dd></div><div><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div><div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div></dl></div><div class="aside-card"><p class="card-kicker">Technologies</p><div class="tag-list">${project.technologies.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>${links ? `<div class="detail-links">${links}</div>` : '<p class="aside-note">No external project link was supplied for this study.</p>'}</div></aside></section><section class="detail-gallery container"><div class="section-heading"><div><p class="eyebrow">Screenshots</p><h2>Selected <em>frames.</em></h2></div></div><div class="gallery-grid">${project.gallery.map((image, index) => `<figure><img src="${sitePath(image)}" alt="${escapeHtml(project.title)} screenshot ${index + 1}" loading="lazy"><figcaption>${escapeHtml(project.title)} · frame ${index + 1}</figcaption></figure>`).join('')}</div></section>`;
}

function setupContact() {
  document.querySelectorAll('[data-contact-email]').forEach((node) => { node.textContent = PROFILE.email; node.href = `mailto:${PROFILE.email}`; }); document.querySelectorAll('[data-contact-phone]').forEach((node) => { node.textContent = PROFILE.phone; node.href = `tel:${PROFILE.phone}`; });
  const copyButton = document.querySelector('#copyEmail'); copyButton?.addEventListener('click', async () => { try { await navigator.clipboard.writeText(PROFILE.email); copyButton.textContent = 'Copied'; } catch { copyButton.textContent = PROFILE.email; } window.setTimeout(() => { copyButton.textContent = 'Copy email'; }, 2200); });
  const form = document.querySelector('#contactForm'); const status = document.querySelector('#formStatus');
  form?.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(form); if (data.get('website')) return; const name = String(data.get('name') || '').trim(); const email = String(data.get('email') || '').trim(); const subject = String(data.get('subject') || '').trim() || `Portfolio message from ${name}`; const message = String(data.get('message') || '').trim(); if (!name || !email || !message || !email.includes('@')) { if (status) status.textContent = 'Please complete your name, valid email, and message.'; return; } const body = `${message}\n\n— ${name}\n${email}`; if (status) status.textContent = `Opening your email app. If it does not open, email ${PROFILE.email} directly.`; window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; });
}

function setupDownloads() { document.querySelectorAll('a[download]').forEach((link) => link.addEventListener('click', () => link.setAttribute('aria-label', `${link.textContent.trim()} download started`))); }
function init() { setupMenu(); setupTheme(); setupContact(); setupDownloads(); buildCarousel(); setupProjectFilters(); buildSkills(); buildCertificates(); buildProjectDetail(); document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); }); }
document.addEventListener('DOMContentLoaded', init);
