import { registerRoute as workbox_routing_registerRoute } from "/opt/cmc/node_modules/workbox-routing/registerRoute.mjs";
import { ExpirationPlugin as workbox_expiration_ExpirationPlugin } from "/opt/cmc/node_modules/workbox-expiration/ExpirationPlugin.mjs";
import { StaleWhileRevalidate as workbox_strategies_StaleWhileRevalidate } from "/opt/cmc/node_modules/workbox-strategies/StaleWhileRevalidate.mjs";
import { clientsClaim as workbox_core_clientsClaim } from "/opt/cmc/node_modules/workbox-core/clientsClaim.mjs";
import { precacheAndRoute as workbox_precaching_precacheAndRoute } from "/opt/cmc/node_modules/workbox-precaching/precacheAndRoute.mjs";
import { cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches } from "/opt/cmc/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs";
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts();

self.skipWaiting();

workbox_core_clientsClaim();

/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute(
  [
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.account-modal.788397fc94ebda5e.js",
      revision: "788397fc94ebda5e",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.crypto-chart.83c902e9b72f571d.js",
      revision: "83c902e9b72f571d",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.dynamic-logo.f207ef2a696e3ee7.js",
      revision: "f207ef2a696e3ee7",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.livechat.59379c8d32ab02e0.js",
      revision: "59379c8d32ab02e0",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.login.391e579227125fcb.js",
      revision: "391e579227125fcb",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.setting-profile.ab43794983c937ec.js",
      revision: "ab43794983c937ec",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.side-notification.56d9e7e2b95bb8dc.js",
      revision: "56d9e7e2b95bb8dc",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.signup.8fd3ef229dfb2664.js",
      revision: "8fd3ef229dfb2664",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.user-guide.0c52920bf4d6254d.js",
      revision: "0c52920bf4d6254d",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.voteResultModal.f7b714d536072c66.js",
      revision: "f7b714d536072c66",
    },
    {
      url: "https://s2.coinmarketcap.com/cmc/_next/static/chunks/precache.wallet-login.eb0866f0c0518e9e.js",
      revision: "eb0866f0c0518e9e",
    },
  ],
  {
    ignoreURLParametersMatching: [],
  }
);
workbox_precaching_cleanupOutdatedCaches();

workbox_routing_registerRoute(
  ({ url }) => {
    return /(lite-list)\.(?:json)$/i.test(url.href);
  },
  new workbox_strategies_StaleWhileRevalidate({
    cacheName: "static-json-assets",
    plugins: [
      new workbox_expiration_ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 300,
      }),
    ],
  }),
  "GET"
);
