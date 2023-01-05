'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4462b95e84068e9749cafadb56cb2a2a",
"/": "4462b95e84068e9749cafadb56cb2a2a",
"main.dart.js": "7bb4c8e04a3da79cbfa0c4a1cf318397",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "0aa5bc3b274ad3d2bb70bff678ec818e",
".git/objects/61/c7eaba01913c97681ea08bbac73d412ffffcb4": "bc3f039f7ec84e95ef6c0991ccbdca3e",
".git/objects/61/26a28ff7dc47b85fbabcbe76186399b3bdb629": "d5627ad4c0ee456f28272b061925153d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/32/20d95cd013a59da6029131f93b346bb9b8b3bb": "c3093d87d7e2b37faa06b2927c340c48",
".git/objects/32/924401710926c1d99619ed6a75a25c38b838c2": "06959fc7066788271a2fd68058ac538a",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/58/6e0f21dcec6fd2b6a3b3b6c0d3110586e683f6": "e668240b8c9fe09aeac7eb9c4d848337",
".git/objects/94/6780cc943d2935cab914dffc067fa1f7c8f358": "463308d5e1581d323af3bbe5b1c21376",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/5a/ac941597e4438920365a7de433bbc9f2446585": "3ec16cb0e9b69c54cee926c25413b666",
".git/objects/a4/3f7c35d2c8ecd6bac251921d4de1914a966207": "893cd7b2f9c098d52c40e59ae4df2abb",
".git/objects/b5/bf67fdba496622265c0873a7faa179d7e1c783": "cb54ee5dcf6aa22e8374f8acf9000f84",
".git/objects/d9/d4f8db19f1b4f83246676d421ab42bbae30cd7": "c6536d24e7fe2e240c9c12641f9b6ac3",
".git/objects/be/5c52b67cb4bde195b8634ce18510bd0936fec3": "56040c7b4e2d25c08628fe09f615edad",
".git/objects/df/db7722a0e37d3c359940bda92d8735a1150f47": "eea63e151bace631802fa0674ceb5498",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/1687036d92229f0d93d8147ade572abc5756ed": "08d7f23ddddc3d316740f4efedde9f5f",
".git/objects/c7/57673d7749fe4e1d129aa17e6a41ac83f91de8": "12f37375a3535e120046d74cd7b2363d",
".git/objects/c0/6ed765b862dab9c602b62170e15036c8dc6e51": "7e801b32adaa8387a2887207e72bac77",
".git/objects/fe/75f59279b42d4ce1abe76e1363ee5c7986389c": "9e685fd26c1dfe3b28d5325c0a5a3d10",
".git/objects/fe/29c1c59033b5be198cfd3033db7bed39e70ce7": "749a8b26487e44831283af4f497f278e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/ea8e2821a6359bfffd3ddbbc39827f7659094c": "2ab7139061514f26337832cec068ab4c",
".git/objects/fb/bf588c0c74c2facc8f2574ba1a7bdf2a8a01c8": "b2170934f072d04afcc2a87f0b5c7464",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/437a94eb5e2aa69d1a1b62c1c3eae02bbb8e59": "902ee80b5830e552adec95bf846d5f34",
".git/objects/16/a767dddc4722d6febf59ff76712c093392c128": "6ef6e5bb7116976d5f4331a52f159d6d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/1fc0a9464b09459ada1f36f51a66f44b0c28af": "72fbcac7d6dd6b62236f595bbe7262f1",
".git/objects/07/d5ee0bbf9a51a1e51da9e7e1358d05709b1f38": "b2bc7e4de779ca0ad1bfebe18e33ae1c",
".git/objects/5c/c0c274380b3c89865a6aae373c4fceb29952ae": "487a668104c1639f4adae1530d1441f5",
".git/objects/98/5d547bdcb9383a50b65046c97b9e39aff75966": "8d73a6354dba6a3f5fb9908ee9ff7c34",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/adb55751d355a4d9dd4064bb56adc5d7760473": "91b070aa3e32906a9482dbfb95d847d8",
".git/objects/37/bd8345bf29b581b2695818bbd6bf9e098c9d00": "c31f5625f8dd818868b91223fbf25ba1",
".git/objects/01/55ed6246ffb71e96001cfb0d17dad358699284": "ca720e234c5468e547f76f13fce156f2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/90/915692a6133a95674ed529c452500b161b4619": "8a40f863edee575183c679a4aadec564",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/b1/3ac2125e800a2970acb8e6cbaa8443f69a2ed7": "419c3f30b9382f4f1f3e4f13b8456687",
".git/objects/dd/abeb803430f30ec55d9d511ce8fb390a5194dc": "fad16932a818f3a7e8133b006e1c575d",
".git/objects/dd/fe1cfed12b7feca35551dbccc32f0120a83e63": "1647d8511e561df35e98dfb4ee62120a",
".git/objects/a9/5c1c18f4ba3b152ecf28ae9c86b84e3e3f8e93": "4da4940272eab78ca96acd4ff1b199e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/945caa6682a9f0fe9b71b31e85ecbd7950e3c3": "35d3729c5332c2342485834847d0d73e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/2919f58efcadc8d3df22ce41bba935bae336d1": "32cabe3217879eaff8857088c41f5428",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/11e8b067d5857f5001d4516193c24c02bd1056": "cf6eaec88e7d465a9bc41939853d58e2",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/ce/16d89da29e18999329310fd7bd5541e69b2b94": "a7851727e1b5b034abcfc02f46bdc953",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/37e68f40dd3b2ddbda33c14e40ae53ea07abd7": "e1de6372774306302c7644df09833753",
".git/objects/48/5a97f1a94aeccbaff07ef4ea7d79d88e305594": "be3d215739a34c932218173b03f0116f",
".git/objects/23/f0bb2f46df87ebd863ee78573d234023683c3e": "3bbf4b668e05c59f287d0d403fe6d11f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/25/4d3f00aee3db992669c693449b1de7774867d9": "5b3bd2486d5d892768fb921bc89a1042",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32cf73cfd2d0b658529122ab3ccf1da7",
".git/logs/refs/heads/main": "32cf73cfd2d0b658529122ab3ccf1da7",
".git/logs/refs/remotes/origin/main": "c93c02275997b5ce961c8405c3a7714f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f5616c97a8d6ed2ade27089a03690488",
".git/refs/remotes/origin/main": "f5616c97a8d6ed2ade27089a03690488",
".git/index": "7dfb6af500ceda23f08cc5f0f5eda435",
".git/COMMIT_EDITMSG": "c594009eaee67257cf04e72a7574eb6b",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "1486a9e364456f15bfd6767f3d7cf24c",
"assets/NOTICES": "f67768c8a821c1f899dafa4135a71f43",
"assets/FontManifest.json": "5862b0cdc2459711b5d75c43a8736739",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "5a678a85b205a701686654fb79efbfae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Mockup.png": "a2e9dd7bb5df159a87450de0b48c6998",
"assets/assets/images/supervisor.png": "9469d776c73b19b60a60de9c8dbeea96",
"assets/assets/images/test3.png": "07da3fe6e1d1132adf2c50ba49e8a66c",
"assets/assets/images/dp.JPG": "336b6742a37cc46f815a1a51cb5fb9ed",
"assets/assets/images/bg.jpeg": "3dbf6b4ee439a2de7750249fada707c8",
"assets/assets/fonts/LexendDeca-Light.ttf": "013ac3be0b6d56a84f1312211288fe9e",
"assets/assets/fonts/LexendDeca-Bold.ttf": "419050ff841bb5ff5c9f41e3ee7ebc8b",
"assets/assets/fonts/LexendDeca-Medium.ttf": "142fc585b5cfbcb3b5b41fb0e89a347e",
"assets/assets/fonts/LexendDeca-Regular.ttf": "47e7cf64af81a528d189b300dfe60c30",
"assets/assets/fonts/LexendDeca-Black.ttf": "ce070dffa7defdb6d0a4d036dcf82186",
"assets/assets/fonts/LexendDeca-Thin.ttf": "628bb2be70c8475e8b222779f16bbb79",
"assets/assets/fonts/LexendDeca-ExtraLight.ttf": "c07305cbae727cb3e3a0160c58ec866c",
"assets/assets/fonts/LexendDeca-SemiBold.ttf": "4e35c5c5270efa6aed1b719e6708ac24",
"assets/assets/fonts/LexendDeca-ExtraBold.ttf": "55ff2e44a959bda2278ecb2d381c1758",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
