# Guide to addin new components to the liberary

0. Create the component inside `./src/lib/components`.
1. Import and re-export the component inside `./src/lib/index.ts`.
2. Run `npm run package` to re-build the component library.
3. Inside `package.json`:
   1. Bump-up the `"version"` property.
   1. Add keywords for the new component in the `"keywords"` property.
   1. Add component reference under `"exports"` property:
      ```json
      "ComponentName.svelte": "./dist/components/ComponentName.svelte"
      ```
      Note that the reference points to the end location inside the `dist` folder.
4. Run `npm publish` to publish the package to npm.

[Read More](https://kit.svelte.dev/docs/packaging) in the official docs.
