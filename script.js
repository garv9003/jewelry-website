// ===================================================
// PRODUCTS DATA
// ===================================================
const PRODUCTS = [
	{ id:1,  name:"Emerald1",                price:47887,  originalPrice:null,   category:"gemstones", gem:"emerald",    badge:"Best Seller", image:"images/products/e1.jpg",    carat:"4.30 CT",  cut:"Octagon",        origin:"Colombia",   treatment:"Minor Oil", certified:true,  section:"bestseller", description:"A stunning vivid green Colombian emerald in classic octagon cut. Ideal for custom ring settings or pendants. Comes with a gemological certificate." },
	{ id:2,  name:"Emerald 2",         price:229764, originalPrice:260000, category:"gemstones", gem:"sapphire",   badge:"Popular",     image:"images/products/e2.jpg", carat:"5.55 CT",  cut:"Octagon",        origin:"Sri Lanka",  treatment:"Heat",      certified:true,  section:"bestseller", description:"Magnificent canary yellow sapphire from Sri Lanka with exceptional clarity and brilliance. Perfect for Jyotish use as Pukhraj or fine jewellery." },
	{ id:3,  name:"Emerald 3",             price:66946,  originalPrice:null,   category:"gemstones", gem:"emerald",    badge:"Pair",        image:"images/products/e3.png",   carat:"7.15 CT",  cut:"Square Octagon", origin:"Zambia",     treatment:"None",      certified:true,  section:"bestseller", description:"Matched pair of Zambian emeralds with superb colour consistency — ideal for earring sets." },
	{ id:4,  name:"Emerald 4",                       price:89500,  originalPrice:105000, category:"gemstones", gem:"ruby",       badge:"Sale",        image:"images/products/e4.png",           carat:"3.20 CT",  cut:"Oval",           origin:"Mozambique", treatment:"Heat",      certified:true,  section:"bestseller", description:"Vivid red Mozambique ruby with excellent saturation. A rare find at this carat weight." },
	{ id:5,  name:"Yellow Sapphire Octagon 9.52 CT",         price:325635, originalPrice:null,   category:"gemstones", gem:"sapphire",   badge:"New",         image:"images/products/e5.png",   carat:"9.52 CT",  cut:"Octagon",        origin:"Sri Lanka",  treatment:"Heat",      certified:true,  section:"newarrival", description:"An extraordinary large Ceylon yellow sapphire with near-flawless clarity and vivid canary hue." },
	{ id:6,  name:"Emerald Heart & Diamond Bracelet",         price:373522, originalPrice:null,   category:"jewellery", gem:"emerald",    badge:"New",         image:"images/products/e6.png",       carat:null,       cut:null,             origin:null,         treatment:null,        certified:false, section:"newarrival", description:"Exquisite 18k gold bracelet set with heart-shaped emeralds and round brilliant diamonds." },
	{ id:7,  name:"Green Tourmaline Necklace",                price:134085, originalPrice:null,   category:"jewellery", gem:"tourmaline", badge:"New",         image:"images/products/e7.png",       carat:null,       cut:null,             origin:"Brazil",     treatment:null,        certified:false, section:"newarrival", description:"Striking contemporary necklace featuring a large green tourmaline pendant on a fine gold chain." },
	{ id:8,  name:"Tanzanite 8.48 CT Heart Shape",            price:138873, originalPrice:null,   category:"gemstones", gem:"tanzanite",  badge:"New",         image:"images/products/e8.png",      carat:"8.48 CT",  cut:"Heart",          origin:"Tanzania",   treatment:"Heat",      certified:true,  section:"newarrival", description:"A velvety blue-violet tanzanite in a romantic heart silhouette. Perfect centrepiece for a bespoke ring." },
	{ id:9,  name:"Diamond Ring 2.10 CT",                     price:450000, originalPrice:510000, category:"jewellery", gem:"diamond",    badge:"Sale",        image:"images/products/e9.png",   carat:"2.10 CT",  cut:"Round Brilliant",origin:null,         treatment:"None",      certified:true,  section:"newarrival", description:"Classic solitaire diamond ring in 18k white gold. GIA certified." },
	{ id:10, name:"Colombian Emerald 6.80 CT",                price:78400,  originalPrice:null,   category:"gemstones", gem:"emerald",    badge:null,          image:"images/products/e10.png",    carat:"6.80 CT",  cut:"Cushion",        origin:"Colombia",   treatment:"Minor Oil", certified:true,  section:"newarrival", description:"Premium Colombian emerald with rich vivid green colour and minor clarity enhancement." },
	{ id:11, name:"Blue Sapphire Oval 4.10 CT",               price:310000, originalPrice:null,   category:"gemstones", gem:"sapphire",   badge:null,          image:"images/products/e11.avif",  carat:"4.10 CT",  cut:"Oval",           origin:"Sri Lanka",  treatment:"Heat",      certified:true,  section:"newarrival", description:"Rich royal blue Ceylon sapphire with outstanding saturation. Ideal for engagement rings." },
	{ id:12, name:"Pearl Multi-Strand Necklace",              price:56000,  originalPrice:null,   category:"jewellery", gem:"pearl",      badge:null,          image:"images/products/e12.avif", carat:null,       cut:null,             origin:"Hyderabad",  treatment:null,        certified:false, section:"newarrival", description:"Luxurious multi-strand cultured pearl necklace with a gold clasp. Timeless elegance." },
];

const INSTAGRAM_URL = 'https://www.instagram.com/durgesh_jewels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

const INSTAGRAM_POSTS = [
	{
		title: 'The beauty of Emerald',
		text: 'Dm for more details. #emerald #jewelry #goldjewellery',
		image: 'images/insta1.png',
		url: 'https://www.instagram.com/durgesh_jewels/reel/DYAo6veTxJ0/',
		label: 'Reel'
	},
	{
		title: 'Look at this',
		text: 'Another fantastic piece of natural emerald. Dm for order.',
		image: 'images/insta2.png',
		url: 'https://www.instagram.com/durgesh_jewels/reel/DXtXHQAkSU2/',
		label: 'Reel'
	},
	{
		title: 'New stock available',
		text: '3-5 mm size pan (pear shaped) with emerald stock now available.',
		image: 'images/insta3.png',
		url: 'https://www.instagram.com/durgesh_jewels/reel/DXq7GGykdQ-/',
		label: 'Reel'
	},
	{
		title: 'Emerald malaa',
		text: 'The beauty of emerald. Dm for order.',
		image: 'images/insta4.png',
		url: 'https://www.instagram.com/durgesh_jewels/reel/DXocAdkkcpK/',
		label: 'Reel'
	},
];

// ===================================================
// HELPERS
// ===================================================
function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

const GEM_SWATCHES = {
	emerald: ['#0d3d1a', '#1a6632'],
	sapphire: ['#0d1a3d', '#1a2d66'],
	ruby: ['#3d0d0d', '#661a1a'],
	tanzanite: ['#1a0d3d', '#2d1a66'],
	tourmaline: ['#1a3d1a', '#2d5c2d'],
	diamond: ['#2a2a2a', '#4a4a4a'],
	pearl: ['#3d3020', '#6b5535'],
	default: ['#2a1f10', '#4a3520'],
};

function placeholderSvg(title, subtitle, swatch) {
	const escapeXml = (value) => String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
	const safeTitle = escapeXml(title);
	const safeSubtitle = escapeXml(subtitle);
	const svg = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-label="${safeTitle}">
			<defs>
				<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="${swatch[0]}"/>
					<stop offset="100%" stop-color="${swatch[1]}"/>
				</linearGradient>
				<radialGradient id="glow" cx="50%" cy="42%" r="55%">
					<stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
					<stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
				</radialGradient>
			</defs>
			<rect width="800" height="800" fill="url(#bg)"/>
			<circle cx="610" cy="200" r="220" fill="url(#glow)"/>
			<circle cx="180" cy="620" r="260" fill="rgba(255,255,255,0.06)"/>
			<path d="M400 178 L525 280 L490 446 L400 560 L310 446 L275 280 Z" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.33)" stroke-width="4"/>
			<path d="M400 178 L400 560" stroke="rgba(255,255,255,0.28)" stroke-width="3"/>
			<path d="M275 280 L525 280" stroke="rgba(255,255,255,0.22)" stroke-width="3"/>
			<text x="64" y="610" fill="#ffffff" font-size="44" font-family="Georgia, serif" letter-spacing="1">${safeTitle}</text>
			<text x="64" y="660" fill="rgba(255,255,255,0.72)" font-size="18" font-family="Arial, sans-serif" letter-spacing="4">${safeSubtitle}</text>
		</svg>`;
	return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildCard(p) {
	const swatch = GEM_SWATCHES[p.gem] || GEM_SWATCHES.default;
	const fallback = placeholderSvg(p.name, (p.gem || 'jewellery').toUpperCase(), swatch);
	return `
		<div class="product-card" onclick="openModal(${p.id})">
			<div class="p-img">
				<img
    src="${p.image}"
    alt="${p.name}"
    loading="lazy"
    decoding="async"
    onerror="this.src='${fallback}'"
/>
				${p.badge ? `<span class="p-badge">${p.badge}</span>` : ''}
				<div class="p-overlay">
	<button title="View Details" onclick="event.stopPropagation(); openModal(${p.id})">
		<i class="far fa-eye"></i>
	</button>

	<button
	title="WhatsApp Inquiry"
	onclick="event.stopPropagation(); window.open('https://wa.me/916375253841?text=Hello%20Durgesh%20Jewels,%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}.%20Please%20share%20more%20details.','_blank');"
>
	<i class="fab fa-whatsapp"></i>
</button>
</div>
			</div>
			<div class="p-info">
				<div class="p-name">${p.name}</div>
				<div class="p-price">${fmt(p.price)}${p.originalPrice ? `<span class="orig">${fmt(p.originalPrice)}</span>` : ''}</div>
				<div class="p-meta">
					${p.carat ? `<span class="p-chip">${p.carat}</span>` : ''}
					${p.origin ? `<span class="p-chip">${p.origin}</span>` : ''}
					<span class="p-chip">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
				</div>
			</div>
		</div>`;
}

function buildInstagramCard(post) {
	const bgStyle = `
		background-image:url('${post.image}');
		background-size:cover;
		background-position:center;
	`;

	return `
		<a class="instagram-card" href="${post.url}" target="_blank" rel="noopener noreferrer">
			<div class="instagram-bg" style="${bgStyle}"></div>
			<div class="instagram-badge">
				<i class="fab fa-instagram"></i>
				<span>${post.label}</span>
			</div>
			<div class="instagram-content">
				<div class="instagram-title">${post.title}</div>
				<div class="instagram-text">${post.text}</div>
				<div class="instagram-link">
					View Post <i class="fas fa-arrow-right"></i>
				</div>
			</div>
		</a>`;
}

// ===================================================
// RENDER PRODUCTS
// ===================================================
function renderGrid(containerId, products) {
	const el = document.getElementById(containerId);
	if (!el) return;
	el.innerHTML = products.map(buildCard).join('');
}

function initProducts() {
	renderGrid('home-best', PRODUCTS.filter(p => p.section === 'bestseller'));
	const instagramEl = document.getElementById('home-new');
	if (instagramEl) instagramEl.innerHTML = INSTAGRAM_POSTS.map(buildInstagramCard).join('');
	renderGrid('shop-grid', PRODUCTS);
}

// ===================================================
// FILTER (shop page)
// ===================================================
function filterProducts(f, btn) {
	document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
	btn.classList.add('active');
	const filtered = f === 'all' ? PRODUCTS
		: PRODUCTS.filter(p => p.category === f || p.gem === f);
	renderGrid('shop-grid', filtered);
}

// ===================================================
// MODAL
// ===================================================
function openModal(id) {
	const p = PRODUCTS.find(x => x.id === id);
	if (!p) return;
	const swatch = GEM_SWATCHES[p.gem] || GEM_SWATCHES.default;
	const fallback = placeholderSvg(p.name, (p.gem || 'jewellery').toUpperCase(), swatch);

	const imgEl = document.getElementById('modal-img');
	imgEl.src = p.image;
imgEl.onerror = () => {
    imgEl.src = fallback;
};
	imgEl.alt = p.name;
	imgEl.style.display = 'block';
	imgEl.dataset.source = p.image;

	document.getElementById('modal-badge').innerHTML = p.badge ? `<span class="modal-badge">${p.badge}</span>` : '';
	document.getElementById('modal-name').textContent = p.name;
	document.getElementById('modal-price').innerHTML = fmt(p.price) + (p.originalPrice ? `<span class="orig">${fmt(p.originalPrice)}</span>` : '');
	document.getElementById('modal-desc').textContent = p.description;
	document.getElementById('modal-whatsapp-btn').onclick = function () {
	window.open(
		`https://wa.me/916375253841?text=Hello Durgesh Jewels,%0A%0AI am interested in:%20${encodeURIComponent(p.name)}%0A%0APlease share more details.`,
		'_blank'
	);
};

	const specs = [];
	if (p.carat)     specs.push(['Carat Weight', p.carat]);
	if (p.cut)       specs.push(['Cut / Shape', p.cut]);
	if (p.gem)       specs.push(['Gemstone', p.gem.charAt(0).toUpperCase() + p.gem.slice(1)]);
	if (p.origin)    specs.push(['Origin', p.origin]);
	if (p.treatment) specs.push(['Treatment', p.treatment]);
	specs.push(['Certified', p.certified ? '✓ Yes' : 'No']);
	specs.push(['Category', p.category.charAt(0).toUpperCase() + p.category.slice(1)]);

	document.getElementById('modal-specs').innerHTML = specs.map(([k,v]) =>
		`<div class="spec-row"><span class="spec-k">${k}</span><span class="spec-v">${v}</span></div>`
	).join('');

	document.getElementById('modalOverlay').classList.add('open');
	document.body.style.overflow = 'hidden';
}

function closeModal(e) {
	if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}
function closeModalBtn() {
	document.getElementById('modalOverlay').classList.remove('open');
	document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalBtn(); });

function addToCart()     { closeModalBtn(); showToast('Added to cart!'); }
function addToWishlist() { closeModalBtn(); showToast('Added to wishlist!'); }

// ===================================================
// NAVIGATION (single-page)
// ===================================================
function navigate(page, filter) {
	document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
	document.querySelectorAll('.nav ul li a').forEach(a => a.classList.remove('active'));
	const pg = document.getElementById('page-' + page);
	if (pg) pg.classList.add('active');
	const navLink = document.getElementById('nav-' + page);
	if (navLink) navLink.classList.add('active');
	window.scrollTo({ top: 0, behavior: 'smooth' });
	document.getElementById('navList').classList.remove('open');

	if (page === 'shop' && filter) {
		setTimeout(() => {
			const btn = [...document.querySelectorAll('.filter-btn')].find(b => b.textContent.toLowerCase() === filter.toLowerCase());
			if (btn) filterProducts(filter, btn);
		}, 50);
	}
}

function toggleMenu() {
	document.getElementById('navList').classList.toggle('open');
}

// ===================================================
// TOAST
// ===================================================
function showToast(msg) {
	const t = document.getElementById('toast');
	t.textContent = msg;
	t.classList.add('show');
	setTimeout(() => t.classList.remove('show'), 2500);
}

// ===================================================
// CONTACT FORM
// ===================================================
function submitContact() {
	const fname = document.getElementById('cf-fname').value.trim();
	const email  = document.getElementById('cf-email').value.trim();
	const msg    = document.getElementById('cf-message').value.trim();
	if (!fname || !email || !msg) { showToast('Please fill in all required fields.'); return; }
	document.getElementById('contactSuccess').classList.add('show');
	document.getElementById('cf-fname').value = '';
	document.getElementById('cf-lname').value = '';
	document.getElementById('cf-email').value = '';
	document.getElementById('cf-phone').value = '';
	document.getElementById('cf-subject').value = '';
	document.getElementById('cf-message').value = '';
	setTimeout(() => document.getElementById('contactSuccess').classList.remove('show'), 5000);
}

// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('yr').textContent = new Date().getFullYear();
	document.getElementById('nav-home').classList.add('active');
	initProducts();
});
