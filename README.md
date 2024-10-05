# Fancy Counter

- Setup `jsconfig.json` and `vite.config.js` files to use _absolute_ paths instead of _relative_ paths
- Create `deploy_production.yml` GitHub Actions workflow to deploy the changes to GitHub Pages
- Create a counter application to manually increase or decrease the count using the plus and minus buttons respectively
- Press the `Space` key to also increase the count
- Upper limit for count has been set to _100_ and lower limit has been set to _0_
- Add responsiveness to every section for desktop, tablet, and mobile devices

## Notes

- To deploy the application using GitHub Pages, an [official guide](https://vite.dev/guide/static-deploy#github-pages) has been made available to us by Vite, which has been configured using this [GitHub Action](https://github.com/actions/configure-pages?tab=readme-ov-file) specifically from this [starter workflow](https://github.com/actions/starter-workflows/blob/main/pages/static.yml) for static content
