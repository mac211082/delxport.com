# DELxPort — "Just Live Trade"

Static export-trade website (6 pages + images). No build step.

## Pages
- index.html — hub / homepage
- delxport-rice.html, delxport-pulses.html, delxport-spices.html,
  delxport-groceries.html, delxport-hotels.html — product desks
- img/ — product photography

## Deploy (Netlify via GitHub)
1. Push this folder to a new GitHub repo.
2. Netlify → Add new site → Import an existing project → GitHub → pick the repo.
3. Build command: (leave blank). Publish directory: `.`
4. Deploy. Then add the custom domain (delxport.com) under Domain settings.

Publish directory and clean-URL redirects are pre-set in netlify.toml.
