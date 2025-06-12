// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: "::",
    port: 8020,
    // Warm up commonly used files on server start for better performance
    warmup: {
      clientFiles: [
        "./src/components/AnimatedSection.tsx",
        "./src/components/NeuralBackground.tsx",
        "./src/components/ParticleBackground.tsx",
        "./src/pages/Index.tsx",
        "./src/lib/utils.ts"
      ]
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // Production build optimizations
  build: {
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router": ["react-router-dom"],
          "ui-vendor": ["framer-motion", "lucide-react"],
          "radix-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-tooltip"
          ]
        }
      }
    },
    // Minification settings
    minify: "esbuild",
    // Faster than terser
    // Target modern browsers for smaller bundle
    target: "es2020",
    // CSS code splitting
    cssCodeSplit: true,
    // Preload module polyfill
    modulePreload: {
      polyfill: true
    }
  },
  // Dependency optimization
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIGJhc2U6IFwiLi9cIixcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwMjAsXG4gICAgLy8gV2FybSB1cCBjb21tb25seSB1c2VkIGZpbGVzIG9uIHNlcnZlciBzdGFydCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgd2FybXVwOiB7XG4gICAgICBjbGllbnRGaWxlczogW1xuICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFNlY3Rpb24udHN4JyxcbiAgICAgICAgJy4vc3JjL2NvbXBvbmVudHMvTmV1cmFsQmFja2dyb3VuZC50c3gnLFxuICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNsZUJhY2tncm91bmQudHN4JyxcbiAgICAgICAgJy4vc3JjL3BhZ2VzL0luZGV4LnRzeCcsXG4gICAgICAgICcuL3NyYy9saWIvdXRpbHMudHMnXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgY29tcG9uZW50VGFnZ2VyKCksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIC8vIFByb2R1Y3Rpb24gYnVpbGQgb3B0aW1pemF0aW9uc1xuICBidWlsZDoge1xuICAgIC8vIEVuYWJsZSBzb3VyY2UgbWFwcyBmb3IgcHJvZHVjdGlvbiBkZWJ1Z2dpbmcgKG9wdGlvbmFsKVxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gT3B0aW1pemUgY2h1bmsgc3BsaXR0aW5nXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIE1hbnVhbCBjaHVuayBzcGxpdHRpbmcgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgICdyb3V0ZXInOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAndWktdmVuZG9yJzogWydmcmFtZXItbW90aW9uJywgJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICAgICdyYWRpeC11aSc6IFtcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJyxcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LW5hdmlnYXRpb24tbWVudScsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBNaW5pZmljYXRpb24gc2V0dGluZ3NcbiAgICBtaW5pZnk6ICdlc2J1aWxkJywgLy8gRmFzdGVyIHRoYW4gdGVyc2VyXG4gICAgLy8gVGFyZ2V0IG1vZGVybiBicm93c2VycyBmb3Igc21hbGxlciBidW5kbGVcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIC8vIENTUyBjb2RlIHNwbGl0dGluZ1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAvLyBQcmVsb2FkIG1vZHVsZSBwb2x5ZmlsbFxuICAgIG1vZHVsZVByZWxvYWQ6IHtcbiAgICAgIHBvbHlmaWxsOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBEZXBlbmRlbmN5IG9wdGltaXphdGlvblxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAncmVhY3QnLFxuICAgICAgJ3JlYWN0LWRvbScsXG4gICAgICAncmVhY3Qtcm91dGVyLWRvbScsXG4gICAgICAnZnJhbWVyLW1vdGlvbicsXG4gICAgICAnbHVjaWRlLXJlYWN0JyxcbiAgICAgICdjbHN4JyxcbiAgICAgICd0YWlsd2luZC1tZXJnZSdcbiAgICBdXG4gIH1cbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBRU4sUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUNULGdCQUFnQjtBQUFBLEVBQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFdBQVc7QUFBQTtBQUFBLElBRVgsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsUUFFTixjQUFjO0FBQUEsVUFDWixnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUNyQyxVQUFVLENBQUMsa0JBQWtCO0FBQUEsVUFDN0IsYUFBYSxDQUFDLGlCQUFpQixjQUFjO0FBQUEsVUFDN0MsWUFBWTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUE7QUFBQTtBQUFBLElBRVIsUUFBUTtBQUFBO0FBQUEsSUFFUixjQUFjO0FBQUE7QUFBQSxJQUVkLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
