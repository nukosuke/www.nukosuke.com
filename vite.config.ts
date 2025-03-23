import { paraglide } from '@inlang/paraglide-sveltekit/vite'
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),enhancedImages(), sveltekit()],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
