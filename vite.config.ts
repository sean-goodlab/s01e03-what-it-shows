import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'node:path';
import { defineConfig } from 'vite';

const runbook = path.resolve('src/lib/layouts/runbook.svelte');

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({ strict: true }),
      extensions: ['.svelte', '.svx'],
      preprocess: [
        vitePreprocess(),
        mdsvex({
          extensions: ['.svx'],
          layoutPropForwarding: 'runes',
          layout: {
            runbook
          }
        })
      ]
    })
  ]
});
