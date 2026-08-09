# Luxx — React Version

This is your original `luxx-frontend` HTML/CSS/JS site converted to React (Vite), with the same look, pages, and behaviour.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

## What changed (structure only, not behaviour)

- **Pages → React components**, routed with `react-router-dom` instead of separate `.html` files:
  - `index.html` → `src/pages/Home.jsx`
  - `shop.html` + `shop.js` → `src/pages/Shop.jsx`
  - `cart.html` → `src/pages/Cart.jsx`
  - `checkout.html` + `checkout.js` → `src/pages/Checkout.jsx`
  - `footer.html` → `src/components/Footer.jsx` (used on every page)
- **CSS is unchanged**, just split per page in `src/styles/` (`style.css`, `shop.css`, `cart.css`, `checkout.css`, `footer.css`) and imported by the matching component. The `<style>` blocks that used to live inline in `cart.html`/`checkout.html`/`footer.html` were pulled into their own files.
  - Because all pages now live in one app instead of separate HTML documents, a couple of `body { ... }` rules were rescoped to a page wrapper class (`.home-page`, `.shop-page`, `.cart-page`, `.checkout-page`) so they don't leak into each other. Visually identical.
- **Images/video**: still referenced the same way, just served from `public/assets/` (Vite serves `public/` at the site root, so `assets/xyz.jpg` paths still work).
- **Cart logic** (localStorage add/remove/quantity), **checkout flow** (billing form -> payment method modal -> payment form modal -> simulate payment), and the **shop product fetch** (`http://localhost:3000/api/products...`, `http://localhost:3000/api/orders`) are all preserved exactly as they were — same URLs, same localStorage keys, same behavior. You'll still need your Node backend running on port 3000 for the shop/checkout API calls to work.
- Note: `assets/image48.jpeg` (used for the "cocktails" card on the homepage) was already missing from the original assets folder — that's a pre-existing gap, not something introduced in this conversion.

## Deploying

Since routing is now client-side (`react-router-dom`), if you deploy this as a static site, configure your host to redirect all paths to `index.html` (e.g. Vercel/Netlify SPA fallback), otherwise refreshing `/shop` or `/cart` directly will 404.
