# Guide to addin new components to the liberary

0. Create the component inside `./src/lib/components`.
1. Add component reference to the `package.json` under `"exports"`:
   ```json
   "ComponentName.svelte": "./dist/components/ComponentName.svelte"
   ```
   Note that the ref points to the end location inside the `dist` folder.
2. Import and re-export the component inside `./src/lib/index.ts`.
3. Run `npm run package` to re-build the component library.
4. Bump-up the version inside `package.json`.
5. Run `npm publish` to publish the package to npm.

[Read More](https://kit.svelte.dev/docs/packaging) in the official docs.
