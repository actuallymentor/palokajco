# Gotchas

- `docs/` is build output AND the Pages source; never hand-edit, always rebuild. `emptyOutDir` wipes it, CNAME survives only because it lives in `public/`
- CSS vars don't work in SVG presentation attrs (`stop-color="var(..)"`); use `style=`
- `overflow:hidden` on buttons clips the `::before` hit area → sheen is a background-image, not a pseudo
- `node_modules` is a mount in the container; can't rm it
- Old site's vcard (phone, city) remains in git history; user wants location not obvious
- KvK search is client-rendered + cookie wall: use Puppeteer, click "Alleen standaard cookies", type into search. drimble.nl lookups by KvK nr can resolve to the wrong company
