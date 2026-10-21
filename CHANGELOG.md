# Troop Mess — Camp Meal Planner

**Current version: v3.14** · Wood Badge ticket, goal 1 of 5

A single self-contained HTML file. No internet, no install, no accounts. Open it in any
browser on any device and it runs. Everything below lives inside that one file.

---

## What it does

Enter how many scouts and adults you're feeding, pick a cooking style, choose meals, and
the app scales recipes, builds one consolidated shopping list sorted by store department,
estimates cost, and calculates pack weight.

**Five cooking styles**

| Style | What it means |
|---|---|
| Car camping | Cooler and camp stove, perishables fine |
| Dutch oven | Coals and cast iron, coal counts shown |
| Backpacking | Freezer bag, boil water only |
| No-cook | Stoveless, cold soak |
| High adventure | Trek, higher calorie multiplier |

Plus an **Exclude Dutch oven recipes** tick box, which replaces the old General camping
category.

**Meals:** breakfast, lunch, dinner, dessert

**Dietary filters:** nut allergy, vegetarian, pork free — derived automatically from
ingredient flags rather than hand-labeled per recipe, so they can't drift out of sync.

---

## Recipe count: 135

| By meal | Count |
|---|---|
| Dinner | 59 |
| Lunch | 27 |
| Breakfast | 26 |
| Dessert | 19 |

35 recipes work in a Dutch oven; 74 do not need one.

---

## Version history

### v1.0
First working build. 35 troop recipes, four cooking styles, scaling, shopping list by
department, cost estimate, pack weight, animated Dutch oven coal diagrams.

Known gaps at release: backpacking and high adventure returned zero recipes; breakfast
and dessert were empty. The app said so plainly rather than pretending otherwise.

### v1.1
- Added General camping and No-cook as their own styles (six total)
- Added 34 researched recipes: freezer bag, no-cook, one-pot camp
- Added `prep` field — "Do this at home" notes, shown on recipe and cook cards
- Added automatic food safety notices: cooler packing and precooked meat for car
  camping; freezer bag water temperature warning for backpacking
- Added computed "Thrifty" badge at or under $2.25 per serving
- Cost per serving now shown on every cook card

### v1.2
- **Fixed a real scaling bug.** Individual meals — freezer bags, walking tacos, foil
  dinners, banana boats — were being scaled as though they were shared pots, producing
  nonsense like "15× batch" for a one-person meal. 32 recipes are now flagged
  `perPerson` and read "10 bags · 1.5× each": one per person, each sized to the
  hungriest scout. Adults get the same size; the small surplus beats sorting bags by
  appetite at dawn.
- Fixed cost per serving on individual meals, which had been understated by ignoring
  the appetite multiplier
- Added 14 desserts

### v1.3
- **Added a fourth tab: Add.** Build recipes inside the app — name, source, gear, time,
  shared pot or one per person, cooking styles, meals, Dutch oven coal counts, freezer
  bag water, prep-at-home note, ingredients, steps.
- **Create new ingredients** with department, purchase unit, price, weight, and dietary
  flags. New ingredients feed the filters immediately.
- **Export rebuilds the app.** "Download app + my recipes" writes a complete new HTML
  file with your additions baked in, auto-incrementing the version. Upload that to the
  project and everything persists.
- Also exports recipes alone as JSON, and imports them back
- Custom recipes carry an "Ours" badge in the browser

### v1.4
- **26 breakfast recipes**, up from 10. Mountain Man Breakfast, Dutch oven breakfast
  casserole, overnight French toast bake, biscuits and gravy, breakfast pizza, skillet
  hash and eggs, griddle French toast, breakfast tacos and quesadillas, an oatmeal bar,
  cheese grits, a bagel bar, plus freezer bag and cold-soak options.
- **10 more non-Dutch-oven dinners and lunches.** One-pot spaghetti, camp stir fry,
  sloppy joes, camp chili, tuna noodle skillet, hot dogs and beans, beef and bean
  burritos, shepherd's pie skillet, sub bar, chicken Caesar wraps. The book is now 74
  recipes that need no Dutch oven against 35 that can use one.
- **Bulk paste import.** Paste several recipes as plain text separated by `---`. The app
  matches ingredient names against its own list, handles fractions, and reports any line
  it couldn't read instead of failing silently.

### v1.5
- **Where to shop.** The List tab now takes a zip code and opens your own maps app with
  the search already typed: grocery stores, supercenters, warehouse clubs, dollar stores,
  camp supplies. The zip is remembered between visits.
- Deliberately built with map links rather than a Places API. No API key, no server, no
  per-request billing, no ceiling on users — which matters if this goes district-wide.
  The tradeoff: the app can't read store names back to sort the list by store.
- iPhone and iPad open Apple Maps; everything else opens Google Maps.

### v1.6
- **Head count now starts at zero**, for both scouts and leaders. The old defaults of 8
  and 2 were the app asserting something it had no way to know.
- **"Adults" renamed to "Leaders."** Patrols typically cook for scouts alone and leaders
  cook for themselves, so leaders often stay at zero — the option is there without being
  assumed.
- Nothing can be scaled or priced until a head count is entered; the Menu and List tabs
  say so plainly instead of computing against a made-up number.

### v1.7
- **Does it fit?** Scaling the food never scaled the pot, which was the gap most likely
  to catch a patrol at camp. Every cook card now checks the scaled batch against the
  cookware the recipe names.
- For Dutch ovens it works in quarts: if the batch outgrows the oven it was written for,
  it names the size that holds it and **recalculates the coal counts** for that diameter.
  If nothing standard holds it, it gives a batch count instead.
- For pans and skillets it flags when one won't do, because crowding a skillet steams
  food instead of browning it and leaves the middle cold.
- Scaled-up Dutch oven loads are deeper than the recipe assumed, so the advice says to
  add roughly a third to the bake time and check the center before serving.
- Per-person meals are exempt — they're assembled one at a time and have no pot limit.

### v1.8
- **Print / save as PDF.** The List tab prints a clean black-and-white packet: trip
  header, shopping list with checkboxes, then every cook card one recipe per page with
  coal counts, fit advice and full steps. App chrome drops out.
- Built for a campsite with no signal — print it, or save as PDF and keep it on a phone.

### v1.9
- **Duty roster tab.** A blank grid on the standard BSA jobs: cook, assistant cook,
  fire/stove, water, wash, rinse, sanitize — each with a one-line description of what the
  job actually is.
- Columns come from the meals chosen on The Trip; day count is adjustable to 14.
- Header lines for patrol, campout and dates, grubmaster and patrol leader.
- Deliberately blank. Who cooks is a patrol decision and a leadership exercise; the app
  prints the grid and stays out of it.
- Prints on its own, separate from the menu packet.

### v2.0
- **Buddy pairs on the duty roster.** Every job now has two name lines instead of one,
  because scouts work in pairs — and nobody walks to the water spigot alone.
- Jobs consolidated to four: Cook, Fire/Stove, Water, Cleanup. The separate Assistant
  Cook row is gone, since the second name on Cook is the assistant. Wash, rinse and
  sanitize became one Cleanup job whose description names all three pots, so the method
  survives without eating three rows.
- Four jobs x two scouts = eight names per meal, which is a full patrol.

### v2.1
- **Cracker barrel is now a meal type**, alongside breakfast, lunch, dinner and dessert.
  Ten recipes available: a cracker barrel board, campfire popcorn, hot cocoa, pigs in a
  blanket, cookies and cocoa, plus s'mores, banana boats, campfire cones, the sausage and
  cheese board and gorp, which all already fit the slot.
- **The roster understands a weekend.** It no longer assumes every day has the same
  meals. The Standard Weekend pattern lays out Friday (arrive, water run, cracker
  barrel), Saturday (breakfast, lunch, dinner) and Sunday (breakfast, break camp).
- Custom pattern is still there for longer trips or a different shape.
- Friday gets a water column even with no cooked meal, which is the point — scouts still
  need water on arrival night.

### v2.2
- **Sack lunches**, for the Saturday when the patrol is out at an activity and lunch has
  to be built after breakfast and carried. Three options: deli sandwich, PB&J, and a
  shelf-stable sausage and cheese bag.
- Each carries the real food safety guidance: perishable fillings are unsafe after two
  hours above 40F, one hour above 90F. A sandwich made at 8am and eaten at noon is past
  that. The fix is freezing the sandwiches the night before so they thaw in the pack —
  or using the shelf-stable version on a hot day.
- The shelf-stable and PB&J options survive with no cooler at all, which is the point.
- Saturday lunch on the weekend roster is now labeled "Lunch (packed)".

### v2.3
- **Nothing is preselected under "How you're cooking."** Car camping used to be chosen for
  you. The app now waits until a style is picked, same reasoning as the head count.
- **"General camping" removed.** It only ever meant "car camping without a Dutch oven,"
  which is a filter, not a category.
- **Replaced with an "Exclude Dutch oven recipes" tick box** under the cooking styles. It
  hides anything that genuinely needs cast iron and coals, but keeps the five recipes that
  offer a pan or camp stove alternative — those are still perfectly cookable without one.
- All 55 recipes from the old General camping category remain reachable under car camping;
  every one of them already carried that tag too.
- The box hides itself when Dutch oven is the chosen style, since the two contradict.

### v2.4
- **Lunch no longer assumes it is packed.** The weekend roster column is back to plain
  "Lunch" — the app had been asserting something it could not know.
- The recipes were never the problem: there are sixteen cooked car-camping lunches, six
  Dutch oven ones. Only the roster label and the wording around it were overreaching.
- The sack lunch prep notes now say what they are for — the day the patrol is out at an
  activity — and add that if you are in camp at midday, cook lunch instead.

### v2.5
- **The standard Dutch oven coal chart is now in the app**, supplied from a printed chart.
  It replaces the arithmetic v1.7 was using, which turned out to be wrong in the direction
  that matters.
- v1.7 scaled coals by oven diameter. That was right for a 10 inch to 12 inch step, but
  under-counted at larger sizes: 12 to 14 inches at 375F came out 21/10 when the chart
  says 22/12. Under-counting bottom coals means an undercooked bottom.
- The app now reads each recipe's own coal count, works out what oven temperature it
  corresponds to, and looks up the correct count for the larger oven at that same
  temperature. The advice says which temperature it is holding.
- Recipes with a simmering or frying setup rather than a baking one — Easy Taco Soup at
  11/21, the family stew at 8/7 — are recognised as such and fall back to proportional
  scaling, since the chart only covers baking.
- **Capacity correction.** The 16 inch oven was listed at 12 quarts; the chart gives 10.
  That had been making the app over-optimistic about what one oven would hold.
- **The chart prints with the packet** whenever a Dutch oven recipe is on the menu, so the
  grubmaster has it at the fire.
- Noted for honesty: the source chart's 16 inch 375F entry reads 38 total but splits
  24/13, which is 37. The split is what gets used at the fire, so the split is what the
  app keeps.

### v2.6
- **No meal is preselected either.** Dinner used to be ticked for you. Nothing on The Trip
  is now assumed: head count, cooking style and meals all start empty.
- The button at the bottom names whatever is still missing — "Add people", then "Pick a
  style", then "Pick meals" — rather than sitting greyed out with no explanation.

### v2.7
- **Safe cooking temperatures, per recipe.** Rather than printing the whole USDA chart and
  hoping someone reads it, each cook card now carries only the temperatures its own
  ingredients call for. Tater Tot Casserole says brown the beef to 160F and bring the
  casserole to 165F; pork chops say 145F and rest three minutes.
- Sixty-nine of the 117 recipes carry a temperature. The rest — desserts, freezer bag
  meals, PB&J — correctly carry none, because nothing in them is raw.
- Recipes with meat cooked at home and reheated at camp get the 165F reheat line as well
  as the raw-meat temperature, since both steps matter.
- Deli meat, summer sausage and pouched tuna are precooked, so they carry no cooking
  temperature. Getting that wrong would have taught scouts to distrust the advice.
- **The full chart prints with the packet** whenever a recipe needs it, trimmed to what a
  patrol actually cooks — no duck, goose or oysters.
- Every temperature box repeats the point the USDA chart leads with: you cannot tell by
  looking. Pink meat can be safe, brown meat can be undercooked. Pack a thermometer.

### v2.8
- **Measuring without utensils**, from a troop reference card. Camp boxes lose measuring
  spoons; hands do not get lost.
- **Cook cards now carry hand equivalents inline** where they help. Scaling a recipe
  produces amounts like "0.22 tsp black pepper", which is useless on its own — it now
  reads "0.22 tsp black pepper (2 pinches)". Half a cup is one open fistful, a tablespoon
  is the center of your palm.
- The equivalents stop where they stop being useful. Past about two cups, counting five
  fistfuls is worse than finding a measuring cup, so the app says nothing.
- **The full card prints with the packet** — dry measures by hand, and the liquid
  conversions from teaspoons up to a gallon (one large milk jug).
- It also says where precision matters: salt, spices and oil can be eyeballed; baking mix,
  flour and liquid in anything that rises or sets should be measured properly, because the
  ratio is doing the work.
- Ingredient lines now name the unit — "1.75 packets taco seasoning" rather than
  "1.75 × taco seasoning".

### v2.9
- **Fixed: hand measures were being offered for liquids.** v2.8 cheerfully suggested
  measuring milk in open fistfuls. The source chart specifies hand measures for dry
  ingredients only; applying them to anything pourable was wrong and faintly ridiculous.
- Liquids now get a camp-cup reference instead — "0.88 cup milk (about one camp cup)" —
  and liquid measured in spoons gets nothing, because there is no hand equivalent for a
  tablespoon of oil.
- The reference card now states plainly that the hand measures are for dry ingredients
  and that liquid needs a cup.
- Two cosmetic fixes on cook cards: "10 eggs eggs" now reads "10 eggs", and camp supplies
  appear by name rather than as "0.15 rolls heavy duty foil".

### v3.0
- **Quantities are kitchen fractions now, not decimals.** Scaling produced numbers like
  "2.63 cup biscuit mix" and "0.22 tsp pepper". Nobody owns a 2.63-cup measure. Amounts
  snap to what a real spoon and cup set can do and print as fractions: 2 2/3 cups, 1/4 tsp.
- The rounding is safe because the error runs the right way. Small amounts take the
  biggest percentage hit — a third more of an eighth of a teaspoon of pepper, which
  nobody can taste — while the amounts where ratio matters land almost exactly: 2.63 cups
  of baking mix becomes 2 2/3, an error of 1.4 percent.
- **Units get promoted when it reads better.** 3 tsp becomes 1 tbsp; 8 tbsp becomes
  1/2 cup. Only when the result is a measure someone actually owns — 6 tbsp stays
  6 tbsp rather than becoming 3/8 cup.
- Hand equivalents follow the promoted unit, so 1 tbsp cinnamon says "the center of your
  palm" rather than the teaspoon advice.
- The shopping list reads as fractions too.
- Grammar: "2 yellow onions" not "2 onions yellow onion"; "1/2 cup" not "1/2 cups".

### v3.14
- **The Install button now works.** It never could on the published site. The manifest
  listed two ordinary icons, icon-192.png and icon-512.png, that were never uploaded, and
  the one icon that was uploaded is marked "maskable" only. Chrome needs an ordinary icon
  of at least 144 pixels before it will install anything, so it refused — Chromium's own
  check reported "no-acceptable-icon". The manifest now points at the icon that exists,
  marked for both uses, and Chrome reports the app installable.
- This was a wrong call in v3.3's rollout: when the manifest edit went sideways, the advice
  was to leave the old manifest in place on the theory that Chrome would use whichever
  icon loaded. It does not; it needs one of the right kind.
- **The service worker's cache name moves from v3.3 to v3.14.** It had not changed since
  v3.3, which was harmless for the page itself but meant phones that already had the app
  would keep serving the old manifest from cache indefinitely. A new name makes every
  installed copy refetch everything, including the corrected manifest, on its next open
  with signal. It also stops trying to cache three icon files that do not exist.
- iPhone's home-screen icon and the browser tab icon now point at the real icon file
  instead of two that were never there, so iPhones get the Dutch oven rather than a
  screenshot of the page.
- Tested as an upgrade from the live version in the same browser: not installable before,
  installable after, offline still intact with all 148 recipes. A brand-new visitor loads
  with no errors and can install on the first visit.

### v3.13
- **The new-trip bar stopped claiming things that were not true.** It said "Carried over
  from last time" whenever a plan existed — including one you had typed in thirty seconds
  earlier, where nothing had been carried over from anywhere. Now that line appears only
  when the app genuinely restored a plan on opening, and disappears the instant you change
  anything, because at that point it is your plan rather than last month's. While you are
  building, the button sits on its own and speaks for itself.
- Shortened to "Carried over: 8 scouts · car camping · 4 recipes chosen."
- The bar itself still stays for as long as there is a plan — it is the only way to reset,
  so it does not fade. The five-second timer is on the second tap: "Tap again to clear"
  reverts to normal if you do not, so a stray tap cannot leave it armed.

### v3.12
- **"Share this menu" on The List.** Every copy of the app is separate — no server, no
  accounts — which is good for privacy and bad for handing a plan to anybody else. This
  closes that without changing the shape of the thing: the whole plan is packed into the
  link itself, about 270 characters for a five-recipe menu. On a phone the button opens
  the native share sheet; on a desktop it copies the link, and if the browser blocks even
  that it shows the link to copy by hand.
- Opening a shared link loads that plan, jumps straight to The List, saves it like any
  other plan, and strips the data out of the address bar so a refresh does not keep
  re-applying it.
- A recipe the receiving copy does not have — one the sender added themselves — is left
  out rather than breaking the menu, and the app says how many were dropped and why.
- Still a snapshot, not live collaboration. Two people cannot edit one plan. But the
  grubmaster can hand off to his assistant, which was the actual problem.
- Nothing is uploaded. The plan travels inside the link and nowhere else.

### v3.11
- **The meal plan now survives closing the app.** It never did before: head count,
  cooking style, meals and every chosen recipe lived only in memory, so a grubmaster who
  planned at Thursday's meeting and shut the tab arrived at camp with a working app and an
  empty plan. Only the zip code was being kept. Now the whole plan is saved as it is built
  and restored on open — offline included — right down to the tab you were last on.
- **"Start a new trip" button** on The Trip, shown only when there is something to clear,
  with a summary of what is being carried over: "8 scouts · car camping · 4 recipes
  chosen." It takes two taps, so a month of planning cannot be wiped by a thumb.
- Restoring drops anything the app no longer recognises — a recipe deleted in a later
  version cannot come back as a ghost in somebody's saved menu.
- All of it is wrapped in try/catch, because private windows and blocked site data make
  browser storage throw rather than simply come back empty. The app still runs if storage
  is unavailable; it just forgets, as it did before.

### v3.10
- **Dutch Oven Potato & Pepper Bake removed.** It was added in v3.8 to fill a gap, and
  Skillet Breakfast Potatoes filled the same one a version earlier with the same
  ingredients and no charcoal. Two recipes for one dish is worse than one, and the skillet
  is the better of them at breakfast. 148 recipes.
- Vegan 15, gluten free 46, both together 12. Eight recipes now carry the coal lead-time
  warning rather than nine.

### v3.9
- **Dutch oven breakfasts now warn about coal lead time instead of being forbidden.** The
  practical objection to a Dutch oven breakfast is real, but it is not the cook time —
  Mountain Man Breakfast is thirty minutes. It is the charcoal, which needs thirty to
  forty-five minutes to ash over before cooking starts. So the nine affected recipes carry
  a "Coals 45 min ahead" badge on the menu and a fuller note on the printed cook card:
  somebody is lighting a chimney at 6 for a 7am breakfast, it belongs on the duty roster
  the night before, and a skillet is the wiser call on a Sunday with camp to strike.
- The rule is computed, not typed into each recipe, so any Dutch oven breakfast added
  later inherits it. It fires only where the delay actually bites — breakfast and cracker
  barrel. Dinner and dessert have the afternoon.
- Nine of the 35 Dutch-oven-only recipes are affected. Nothing was removed or retagged.

### v3.8
- **Hard apple cider removed from the pantry.** It was an ingredient in Pork Normandy,
  which means a Scout patrol's printed shopping list could have had alcohol on it. Now
  plain apple cider, which does the same job in the pan. Swept the rest of the ingredient
  list; nothing else alcoholic in it.
- **Seven recipes added**, picked by mapping which combinations of meal and cooking style
  had nothing in them rather than by adding whatever sounded good:
  - Dutch Oven Potato & Pepper Bake — there was no vegan Dutch oven breakfast
  - Dutch Oven Baked Apples — no gluten-free Dutch oven dessert at all, vegan or not
  - Dutch Oven Spanish Rice & Beans — no vegan Dutch oven lunch
  - Backpacker Apple Cinnamon Rice — no vegan breakfast for the trail
  - Fruit & Peanut Butter Breakfast Bowl — no no-cook breakfast that was gluten free
  - Black Bean & Corn Salad — no no-cook dinner that worked for either diet
  - Hot Spiced Cider — nothing vegan for a Friday cracker barrel
- Every one of the seven comes in under $2 a serving, so all carry the Thrifty badge.
- Vegan goes from 9 recipes to 16, gluten free from 40 to 47, and both together from 6 to
  13. 149 recipes in total.
- **README figure corrected.** It claimed 81 recipes needed no Dutch oven. The real number
  by the app's own test — what you still see with "exclude Dutch oven recipes" ticked — is
  114. The old figure came from counting a different thing and had been carried forward
  for several versions.

### v3.7
- **Two new dietary filters: Vegan and Gluten free.** "Gluten free" rather than "coeliac
  compliant" — it is the wording on the packet, it is what a parent says at sign-up, and
  it covers wheat allergy and non-coeliac sensitivity too.
- **Four flagging bugs found and fixed, all of which were leaking through the Vegetarian
  filter you already shipped:** chicken stock, chicken broth, chicken bouillon and beef
  bouillon carried no meat flag; tinned and pouched tuna carried none either; chicken
  stuffing mix is made with chicken broth and fat; and Worcestershire sauce is built on
  anchovies. Any recipe using these was being offered to vegetarians. Vegetarian drops
  from 52 recipes to 55 despite six being added, because these came out.
- Marshmallows and marshmallow creme now carry a gelatin flag, and honey a honey flag.
  Both block Vegan. Neither blocks Vegetarian, which matches how most people treat them —
  a vegetarian scout toasting a marshmallow is not an edge case worth breaking.
- **Six vegan recipes added**, chosen to fill the actual gaps rather than pad the count.
  Before this, vegan breakfast, cracker barrel and backpacking were all zero, and nothing
  at all was both vegan and gluten free:
  - Three-Bean Campfire Chili — dinner, one pot the whole patrol can eat
  - Skillet Breakfast Potatoes — breakfast
  - Rice & Black Bean Bowls — lunch or dinner
  - Hummus & Dippers — no-cook lunch or cracker barrel
  - Foil Cinnamon Apples — dessert, one packet each
  - Backpacker Beans & Rice — freezer bag dinner for the trail
- Vegan now 9 recipes across every meal; vegan and gluten free together, 6. Gluten free on
  its own, 40. 142 recipes in total.

### v3.6
- **Pizza Mac & Cheese rebuilt at four boxes, serving 12.** The app snaps batches to
  quarters, so a one-box recipe can only ever produce quarter-boxes. Basing it on four
  makes every quarter-batch land on a whole number: four scouts get 2 boxes, six get 3,
  eight get 4, ten get 5. Nobody opens a box to use half of it. Three boxes would not have
  done this — a quarter of three is three-quarters of a box.
- **Dutch oven option added.** Same dish, one set of instructions covering both: boil over
  the fire with the lid off, then lift off the coals to finish, 17 on top and 8 underneath
  at 12 inches. Because the gear line offers an alternative, it still appears for patrols
  who have ticked "exclude Dutch oven recipes".
- **Turkey pepperoni is now the listed ingredient**, which makes the dish pork-free and
  means it survives the pork filter instead of being hidden from patrols who use it. A
  step notes that regular pepperoni works identically for anyone not avoiding pork.
- Still Thrifty at $1.74 a serving.

### v3.5
- **Pizza Mac & Cheese added** (troop submission). Boxed mac and cheese stirred together
  with pizza sauce, mozzarella, cheddar and pepperoni, then topped and melted under a lid
  over coals. Filed under dinner and cooked lunch for car camping. $1.32 a serving, so it
  carries the Thrifty badge. 136 recipes now.
- Added Italian seasoning to the ingredient list.
- **Two wording bugs fixed, both found while testing the new recipe:**
  - Units ending in s, x, z, ch or sh pluralised wrongly — "2½ boxs" instead of "2½
    boxes". Abbreviations like lb and tsp still correctly don't pluralise at all.
  - The boxed mac and cheese read "2½ boxs boxed mac & cheese", repeating the unit inside
    the name. Renamed to "Mac & cheese", so it now reads "2½ boxes mac & cheese".

### v3.4
- **Meal dividers made unmissable.** The hairline between meal sections was too easy to
  scroll past, which defeated the point of grouping. It is now a solid ember bar, ten
  times the weight, with the count beside it in the same colour — green once you have
  chosen something for that meal. You can tell at a glance where breakfast ends and lunch
  begins, and which meals still have nothing against them.

### v3.3
- **The menu is grouped by meal.** Recipes used to arrive as one flat list, which left the
  grubmaster holding "what do I still need to cover?" in their head while scrolling past
  every recipe looking for a breakfast. Now they sit under Breakfast, Lunch, Dinner,
  Dessert and Cracker barrel headings, in the order the weekend happens, with a line under
  each saying when that meal falls — Friday night on arrival, Saturday midday, and so on.
  Each heading carries a running count: "24 to choose from", then "2 chosen of 24" once
  you start picking, so what is still uncovered is visible rather than remembered.
  A recipe that suits more than one meal appears under each, and picking it in one place
  marks it in both.
- **Installs to a phone and works with no signal.** The app is now a Progressive Web App:
  opened once with signal, it caches itself and afterwards runs from a home-screen icon
  with the network off entirely. This makes the README's "works offline at camp" claim
  actually true rather than aspirational — previously it held only if you printed the
  packet or kept the tab open.
- Added `manifest.json`, `sw.js` and four icons alongside `index.html`.
- **Install prompt on the Trip tab.** A dismissible bar offers an Install button on
  Android and the Share → Add to Home Screen instructions on iPhone. It hides itself once
  installed, and never appears on a copy opened from a folder, where there is nothing to
  install.
- Fonts are cached on first load, so an offline copy still looks right.
- The downloaded single file is unchanged in behaviour: no service worker, no install bar,
  runs from a folder exactly as before.
- **Hosted at https://lukewarmly.github.io/Troop-Mess/** — the delivery problem that Drive
  could not solve. A link that opens the app beats a file that has to be downloaded,
  especially on Android, which cannot reliably open a local HTML file in a browser at all.

### v3.2
- **Author credit in the masthead.** Rob Newman · Troops 46/146 · Mecklenburg County
  Council · Wood Badge Eagle Patrol · 15-415-25, directly under the version line.
- **Read Me built into the app.** A collapsible "Read Me" panel at the top of The Trip
  tab carries the full README — why the app exists, how it works, what is in it, and what
  is still to come. Closed by default so it stays out of the way, and it does not print
  with the packet. Exported copies open collapsed.
- Tip of the cap now reads "Linda Kolb, and Tom Howard" — in the app and in README.md.

### v3.1
- **18 recipes added from the Cub Grub Cookbook** (Kymmer Crookston's collection, used in
  Baloo training). Adapted for Troop-age scouts: den-sized quantities scaled to patrol
  size, and coal counts, oven temperatures and food-safety steps added where the original
  left them to an adult partner's judgement — which is the real difference between a Cub
  recipe and a Troop one.
- Dutch oven: Enchilada Pie, Camp Stew, Applesauce Dump Cake (80 cents a serving).
- Camp and car: Bacon Dogs, Camp Scones, Eggs in a Frame, Foil Breakfast, Chicken & Rice
  Foil Packet, Ka-Bobs, Omelet in a Bag, Cupcake in an Orange Peel, Snake on a Stick,
  English Muffin Pizzas, Ice Cream in a Bag, Dirt Cups.
- No-cook and trail: No-Fire S'mores (for a burn ban), Trail Mix Cereal Bars, Peanut
  Butter Chocolate Crunch.
- **Six duplicates skipped**, keeping one of each: Baked Apple, Banana Boat, Pineapple
  Upside-Down Cake, Traditional Foil Dinner, Fruit Cobbler, GORP. Hobo Popcorn was skipped
  too — the original author recommends against it in her own note.
- **Roughly 35 recipes deliberately left out.** Sections 1 and 3 of that cookbook are den
  craft-food for Cub Scouts — Bugs made from dates, Edible Derby Cars, Gingerbread Houses,
  and an ice cream recipe calling for liquid nitrogen. Good Cub activities; not camp meal
  planning for a Troop.
- Two adaptations worth noting. The Chicken & Rice packet originally used raw chicken in
  foil; it now calls for chicken cooked at home, which is faster and much harder to get
  wrong. Omelet in a Bag carries the same honesty as the freezer bag meals: use a freezer
  bag not a sandwich bag, keep it off the bottom of the pot, and offer the skillet to any
  scout who would rather not cook in plastic.
- The fudge-striped shortbread cookie trick from Perfect S'mores was added as a note on
  the existing S'mores recipe rather than as a near-duplicate entry.

---

## How to keep your work

The app cannot save on its own. Nothing is stored automatically.

1. Add recipes in the **Add** tab
2. Tap **Download app + my recipes**. The app saves itself out as a new file with the
   next version number on it, your recipes included
3. Upload that file to the Claude project, replacing the previous version

The version number on the file always tells you which copy is newest. One file holds
everything — recipes, roster, the lot.

---

## Still open

- **No-cook dinner is still thin.** Cold-soak couscous salad is close to the only full
  stoveless dinner. The category needs more if it matters.
- **Grocery store lookup by zip and radius** was in the original concept, deferred at
  your call. It needs a real places API with a key, which won't run inside a plain HTML
  file. Doable if the app gets hosted.
- **Prices are rough national averages**, not quotes. Treat totals as a budget.
- **More cookbook pages** you mentioned having are not yet in.
- Dietary flags check ingredients, not manufacturing lines. Confirm labels at the store
  for a real allergy.

---

## Ticket status

All five Wood Badge ticket goals are complete. This app is goal 1; the other four were
completed separately and are not documented here.
