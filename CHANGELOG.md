# Troop Mess — Camp Meal Planner

**Current version: v3.24** · Wood Badge ticket, goal 1 of 5

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

### v3.24 — 53 new recipes for the thin categories (October 24, 2026)

Recipe count 148 → 201. Aimed at the categories that had few choices, plus five of
Rob's own and nine from Fresh Off The Grid.

**Rob's recipes (Troop 46)**
- Pepper & Onion Chicken Stir Fry: canned chicken, frozen pepper and onion blend, instant
  rice, and a bottle of sauce of your choice (teriyaki, sweet & sour, General Tso or plain
  stir-fry; gluten-free bottles make the dish gluten free).
- Campfire Hot Dog Skewers: hot dogs, pineapple, red and green peppers and red onion on
  skewers, glazed with a barbecue, ketchup, soy and rice vinegar sauce.
- Walking S'mores: a snack-size cookie bag, two pieces of chocolate and two toasted
  marshmallows, eaten out of the bag with a fork.
- Camp Cornbread: cornmeal, flour, buttermilk, creamed corn, two cheeses and a jalapeño,
  baked in a 12-inch Dutch oven; the side for chili night. "Your nose is the best timer."
- Eggplant Parm Skewers: eggplant, crusty bread and cherry tomatoes on skewers, brushed
  with pesto on the grill, tossed with mozzarella cubes. Vegetarian.

**From Fresh Off The Grid (freshoffthegrid.com), credited on the cards**
- Fresh Off The Grid Chili Mac: tomato paste, chili powder, cumin, smoked paprika and
  garlic, one pot, fifteen minutes. Plant-based ground makes it vegetarian.
- One Pot Beef Stroganoff: seared strip steak, mushrooms, egg noodles and sour cream in a
  cast iron skillet.
- Camp Stove Chilaquiles: fried corn tortilla wedges in tomato sauce with eggs cooked in
  the pan. Vegetarian, gluten free; breakfast or dinner.
- Chickpea Breakfast Hash: zucchini, peppers, red onion and chickpeas with cumin and
  coriander, eggs in a well. Vegetarian, gluten free; vegan without the eggs.
- Sweet Potato Black Bean Burgers: grated sweet potato and mashed black beans bound with
  panko, pan-fried, spicy mayo and avocado on the bun. Vegetarian; per person.
- Dutch Oven Veggie Enchiladas: peppers, onion, black beans and cheese rolled in
  tortillas under enchilada sauce, coals on the lid. Vegetarian.
- Sweet Potato & Black Bean Campfire Tacos: cumin-roasted sweet potato and poblano with
  lime black beans on corn tortillas. Vegan and gluten free.
- Dutch Oven Red Beans and Rice: andouille, the trinity, Cajun seasoning, kidney beans
  and rice in one pot on the stove.
- Dutch Oven Peach Cobbler: fresh peaches under a flour, butter and sugar crumb topping,
  coals under and on the lid. The real cobbler, as against the boxed-mix Peach Dump Cake
  and the oat-topped Skillet Peach Crisp already in the book.

**Compared with what was already in the book**
- Chili Mac vs One-Pot Chili Mac: both kept. The old one is canned chili and a cheese
  packet; the Fresh Off The Grid one is from-scratch spices and tomato paste.
- Veggie Enchiladas: the Black Bean Enchiladas written for this release were nearly the
  same dish, so only the Fresh Off The Grid version was kept.
- Red Beans and Rice vs Dutch Oven Spanish Rice & Beans: different dishes (Cajun with
  andouille vs tomato-Spanish), both kept.
- Stroganoff, chilaquiles, chickpea hash, sweet potato burgers, campfire tacos: nothing
  like them before.

**No-cook dinners (2 → 10):** Chicken Caesar Pita Pockets, Mediterranean Chickpea Wraps,
Tuna & White Bean Salad with Crackers, Cold Walking Tacos, Crunchy Ramen Slaw, Hummus
Plate Dinner, Apple Chicken Salad Wraps, Big Board Dinner.

**Backpacking dinners (11 → 19), freezer bag:** Peanut Curry Couscous, Thai Peanut
Noodles, Trail Shepherd's Pie, Cheesy Broccoli Rice, Trail Tuna Mac, Chicken Teriyaki
Rice, Couscous Taco Bowl, Loaded Mashed Potato Bowl.

**Backpacking desserts and cracker barrel (7 and 5 → 11 and 7):** Trail Cheesecake Cups,
Hot Apple Crisp Cup, Chocolate Peanut Butter Pudding, Peanut Butter Pretzel Bites, Trail
Cracker Barrel.

**Dutch oven cracker barrel and lunch (2 and 8 → 6 and 14):** Pull-Apart Garlic Bread,
Dutch Oven Nachos, Dutch Oven Calzones, Dutch Oven Quesadilla Stack, Dutch Oven Pretzel
Bites, Hot Ham & Cheese Sliders.

**Vegetarian and vegan dinners (car camping 4 → 16 vegetarian, 4 → 9 vegan):**
Three-Bean Chili Mac, Chickpea & Vegetable Curry, Lentil Sloppy
Joes, Skillet Veggie Fajitas, Pesto Pasta Primavera, Dutch Oven Vegetable Lasagna, Loaded
Baked Potato Bar, and a vegan Dutch oven breakfast: Apple Cinnamon Baked Oatmeal.

**Gluten free:** Chicken Street Tacos (corn tortillas), Pepper & Onion Frittata, Taco
Rice Skillet, Cheese, Jerky & Apple Lunch, plus eleven of the recipes above.

**Pantry:** 39 new items — canned chicken, frozen pepper & onion blend, stir-fry sauce,
corn tortillas, frozen broccoli, red lentils, curry powder, basil pesto, red and green
peppers, red onion, pineapple chunks, ketchup, rice vinegar, snack-size cookie bags,
cornmeal, baking powder, jalapeño, pepper jack, buttermilk, creamed corn, eggplant, crusty
bread, block mozzarella, beef broth, tomato paste, cumin, smoked paprika, thyme, strip
steak, zucchini, coriander, sweet potatoes, poblanos, limes, avocados, andouille, Cajun seasoning, bay leaf, fresh peaches —
all flagged for the diet filters and tagged for MyPlate. 280 items.

Every new recipe was rendered at 3, 8 and 20 people and checked for text oddities, cost
per serving, diet flags and MyPlate groups. Full regression passed: data integrity,
random-menu text scan, 36 style/diet combinations, MyPlate, recipes and sharing, roster,
meal order, v3.18 and v3.19 suites, install strip, nine screen sizes, 12 px floor,
accessibility, installable, offline with 201 recipes. The menu draws 209 cards in 57 ms;
the app file is 826 KB.

Service worker cache renamed to troop-mess-v3.24.

### v3.23 — MyPlate scoring corrected after independent audit (October 24, 2026)

A second, independent reviewer checked every MyPlate tag and the counting rule against
USDA's definitions. These are the corrections.

- **Eggs counted double.** The pantry weight for an egg includes the shell, so four eggs
  in ten brownies were counting as Protein. Eggs now count at half weight. Brownies,
  pineapple upside-down cake, applesauce cake and orange-peel cupcakes no longer show
  Protein.
- **Dried fruit:** raisins and dried cranberries count double (MyPlate: ½ cup dried = 1
  cup of fruit), not triple.
- **Milk powder** is now scaled like fluid milk, so a spoon of it in hot cocoa no longer
  makes the cocoa count as Dairy. **Cheese powder** counts at its own weight.
- **Ingredients in a group add up.** Peppers plus onion together make the vegetables in
  a scramble; before, each was judged alone and both fell short. Sausage & Egg Scramble,
  Omelet in a Bag and Inside Out Chicken now show Vegetables.
- **Fruit and vegetable bar raised** from 1 oz to 1½ oz per serving (about a quarter
  cup), so a smear of pizza sauce no longer counts as a vegetable.
- **Dessert is shown but not counted.** The dessert row is greyed and marked "not
  counted"; the Whole menu row covers meals and cracker barrel. S'mores no longer give
  the menu its Grains.
- **Wording.** The check no longer calls itself "the answer" to First Class 2a. It says to
  use it to check your own answer, notes that 2a also asks how the menu meets the needs
  of the activity, and that MyPlate wants variety and half the plate as fruits and
  vegetables, which this check does not measure.
- Zip code is remembered as you type it, not only when you tap a store button.
- Typing names into a long roster (14 days, 30 names) no longer lags: the grid redraws
  after a short pause instead of on every keystroke.
- Service worker cache renamed to troop-mess-v3.23.

Checked across all 148 recipes: 21 changed grouping, all in the direction the audit
asked for. Full regression passed on the live-path copy (served under /Troop-Mess/ as
GitHub does): all twelve earlier suites, plus a tap-only walkthrough with no script
shortcuts, the v3.21 → v3.22 upgrade with a saved plan, roster and phone recipe (all
kept, old cache removed), stress (30 recipes, 30 names, 14 days, 40 rapid taps),
keyboard-only use, and service-worker scope at the live path.

### v3.22 — MyPlate (October 24, 2026)

For First Class requirement 2a ("Tell how the menu includes the foods from MyPlate or the
current USDA nutritional model") and the Cooking merit badge's MyPlate menu requirements.

- **Every ingredient has its MyPlate food group:** Fruits, Vegetables, Grains, Protein or
  Dairy, following USDA's rules. Butter, cream, cream cheese and sour cream are not Dairy;
  beans and eggs are Protein; potatoes, corn and tomato sauce are Vegetables; 100% juice
  and pie filling are Fruit; sweets, oils, spices and condiments have no group. Dried and
  powdered foods are weighted up (¼ cup raisins is ½ cup of fruit). 154 of 241 ingredients
  have a group; the rest are seasonings, fats, sweets and supplies.
- **A recipe counts toward a group only when a serving holds a real amount of it,**
  roughly a third to a half of a MyPlate serving: about ½ oz of dry grain, meat or cheese,
  ⅓ cup of milk, or a quarter cup of fruit or vegetables. A sprinkle of cheese doesn't
  make a dish Dairy. Checked across all 148 recipes.
- **A small plate on every recipe** on The Menu and on each cook card, with the groups it
  covers lit in MyPlate colours and named in words.
- **MyPlate check on The List:** a table of which groups each meal covers, plus the whole
  menu. It names anything missing from the whole menu with easy fixes ("For fruits, add
  apples, oranges, bananas or raisins on the side") and points out breakfast, lunch or
  dinner with no fruit or vegetables. It prints with the packet, in colour, so a Scout can
  hand it to the Scoutmaster for First Class 2a.
- **New ingredients** added on the Add tab can be given a MyPlate group.
- **Fixed (an older bug):** tapping a flag such as "nuts" in the new-ingredient form wiped
  the name, unit, price and weight already typed. Taps now just toggle the button.
- Printing: a section heading no longer sits alone at the bottom of a page.
- Service worker cache renamed to troop-mess-v3.22.

Full retest: MyPlate tests (cards, table, gaps, fixes, print, new-ingredient group, phone
layout); every earlier suite (recipes and sharing, lie-fi 3.2 s, v3.18, v3.19, roster,
meal order, install strip, device matrix at 9 sizes, 12 px floor, data integrity,
accessibility, counter); installable; offline with 148 recipes; no page errors.

### v3.21 — Recipes stay on the phone, recipes can be shared, visit counter (October 24, 2026)

- **Recipes you add are kept on your phone.** Until now an added recipe lasted only until
  the app was closed unless the keeper downloaded a copy. Now recipes, and any new
  ingredients they use, are saved on the phone like the trip plan. They survive closing
  the app, going offline and every update. Tested: saved, closed, reopened, offline, cache
  wiped (an update), deleted.
- **Share a recipe.** Each recipe under "Your recipes" on the Add tab has a **Share**
  button. It sends a link; whoever taps it sees the recipe and chooses **Add to my
  recipes** or **No thanks**. Send it to the keeper to get it into the master copy for
  everyone. A link opened twice says "You already have it". Links work whether the app is
  closed or already open.
- **Everything from outside is checked.** Shared recipes, imported recipe files and
  anything read back from the phone's storage go through the same check: names, steps and
  ingredients are cleaned, unknown ingredients, styles and meals are dropped, and nothing
  can reach the page as markup. Tested with deliberately hostile links.
- **Visit counter.** Each open with signal is counted at troopmess.goatcounter.com,
  marked as the installed app or a browser visit. GoatCounter uses no cookies and
  collects no personal data. It is skipped with no signal, so it never slows camp use, and
  it never counts the keeper's local test copies.
- Keeper's tools text updated: trip plans and your own recipes save themselves.
- Also: a menu link tapped while the app is already open in that tab now loads, instead
  of doing nothing.
- Service worker cache renamed to troop-mess-v3.21.

Full retest: new recipe tests (save, survive, share, receive, hostile input, tampered
storage); counter with a stand-in script, both installed and browser, and offline; every
earlier suite (lie-fi 3.2 s, v3.18, v3.19, v3.20, roster, meal order, install strip,
device matrix at 9 sizes, 12 px floor, data integrity, accessibility); installable;
offline with 148 recipes; no page errors.

### v3.20 — "Longer trip" instead of "Custom" (October 22, 2026)

Rob read "Custom · Same meals every day" as "the same food every day". It meant the same
mealtimes: each day gets a Breakfast, Lunch and Dinner column for the duty roster, while
what is cooked comes from the menu and can differ at every meal.

- The roster's second option is now **Longer trip · 1–14 days · same mealtimes each day**.
- A line under it explains that the roster assigns jobs at each mealtime and the food comes
  from the menu.
- The Standard weekend note now points to "Longer trip" instead of "Custom".
- Saved plans that used Custom open as Longer trip with nothing to redo.
- Service worker cache renamed to troop-mess-v3.20.

Considered and set aside: choosing different mealtimes for each day. The Standard weekend
already covers the common uneven shape; Rob does not expect troops to need it.

Retest: label and note on phone and laptop; roster suite (patrols of 2–12, both shapes,
saved shape restores); v3.19 suite; device matrix at 9 sizes; installable; offline.

### v3.19 — Shopping list, shared links on iPhone, phone screen space (October 22, 2026)

The second release from the diagnostic report: the rest of "Fix soon", the two iPhone
items, and four of the phone interface ideas.

- **Shopping list speaks in what you buy.** Anything over 8 tbsp shows in cups and over
  6 tsp in tablespoons, rounded up ("Peanut butter 1¾ cups", not "25 tbsp"). Cook cards
  keep exact measures. Costs still come from the exact amount.
- **Buy-size hints.** Common items say what to pick up: "Milk — buy 1 half gallon",
  "Pizza sauce — buy 5 jars (14 oz)", "Peanut butter — buy 4 jars (16 oz)". 33 items have
  package sizes; the rest show the amount only.
- **Printed shopping list packs tighter.** A store department no longer jumps whole to the
  next page; only its heading is kept with its first item.
- **Long share links get a warning.** Over 1,500 characters, the List says to send it by
  iMessage, WhatsApp or email rather than a plain text message.
- **"Have a shared menu link?" on The Trip.** Paste a link (or tap Paste to read the
  clipboard) and this copy opens that menu. This is how a shared menu gets into the
  home-screen app on iPhone, which keeps its own copy separate from Safari. When a link
  opens in Safari on an iPhone, the app now says so and points here.
- **iPhone home-screen icon** is its own 180 px file, so the Dutch oven fills the tile
  instead of sitting small in the middle. New file: apple-touch-icon.png.
- **Compact header on phones.** After the first visit, the header shrinks to one line of
  title plus the byline, so the tabs and the plan are on the first screen (header 291 px →
  123 px on a Galaxy). Tap the header to see the full title.
- **Start a new trip is one tap with Undo.** The trip clears at once and an Undo button
  stays for eight seconds. Patrol names are kept, as before.
- **Dock fits on one line** on narrow phones: "Cost" instead of "Est. cost" under 400 px,
  and the button never wraps.
- README: why to install on iPhone (Safari clears unused sites after seven days).
- Service worker cache renamed to troop-mess-v3.19; the new icon is in the offline set.

Not needed: sticky tabs (they already were).

Full retest: every v3.19 change; v3.18 suite; lie-fi against a hanging server (3.3 s);
device matrix (9 sizes, no overflow, no errors); 12 px text floor; data integrity; cook
packet scan; shopping lists at 4–20 people over 60 menus (no spoon counts over the
limits); roster suite; meal-order suite; install-strip suite; axe (no contrast or label
failures); installable; offline with 148 recipes.

### v3.18 — Camp-signal, Back button, readability (October 22, 2026)

The first release from the v3.17 diagnostic. Eleven items from the report's "Fix first"
and "Fix soon" lists, plus the iPhone safe-area fix.

- **One bar of signal no longer freezes the open.** The app gives the network three
  seconds, then shows the saved copy and keeps checking in the background. Tested
  against a server that hangs: 3.3 seconds to a working app, down from 15–25.
- **New versions show on the first open.** The open now asks the server whether the
  page changed instead of trusting the phone's own copy for up to ten minutes. This was
  why a fresh upload could still show the old version once.
- **Fonts no longer block the first paint.** With the font server unreachable, the page
  drew after 84 ms instead of 15 seconds. System fonts show until the web fonts arrive.
- **Android Back button steps through tabs** instead of closing the installed app. Back
  from the first tab still leaves, as expected.
- **Tap anywhere on a shopping row to tick it.** The small box still works; rows are a
  little taller.
- **"Bigger oven needed" reads as one sentence.** A heading style was hitting the bold
  words in the body and pushing each onto its own line.
- **Readability.** Small captions and labels have a 12 px floor on phones (were 9–11 px).
  The light grey text is darker; a lighter grey is used on dark backgrounds (tabs,
  totals, masthead); the orange accent is one step deeper. Contrast failures in the
  accessibility check went from 121 to 0.
- **Plurals:** loaves and tomatoes, not loafs and tomatos.
- **Tiny patrols:** amounts that scale below the smallest measure now read "a pinch of
  pepper" or "a little butter" instead of "0 tsp" and "0 lb". "Scaled for 1 person", not
  "1 people".
- **Smallest phones (320 px):** the coal chart and temperature table scroll inside their
  box; meal headings wrap; the roster scrolls sideways instead of pushing the page.
- **Screen readers:** the import-file control and the ingredient picker have labels.
- **Android tablets can rotate** the installed app (orientation lock removed from the
  manifest).
- **iPhone:** masthead keeps clear of the clock and notch when installed.
- Service worker cache renamed to troop-mess-v3.18.

Full retest: device matrix (9 sizes, 5 tabs, no overflow, no errors); lie-fi and font
outage; install check; offline with 148 recipes; data integrity; 36 style/diet
combinations; every recipe at 5 head counts scanned for text oddities (none remaining
except the shopping-list spoon counts, planned for v3.19); roster suite; meal-order
suite; install-strip suite; axe accessibility (0 contrast failures); upgrade from an
older cache with a saved plan.

### v3.17 — Cracker barrel first (October 22, 2026)

Rob: cracker barrel is a Friday night thing, so it should come before breakfast.

- **Cracker barrel now leads** the meal buttons on The Trip, the recipe groups on The Menu,
  and the meal picker on the Add form, followed by breakfast, lunch, dinner and dessert.
- **Cook cards on The List follow the weekend too.** They used to come out in recipe-book
  order; now each recipe sits under the earliest meal you chose that it serves, so the
  packet reads Friday night to Sunday morning.
- The Custom roster (same meals every day) keeps cracker barrel as the last column, since
  on a multi-day trip it is the evening snack.
- Service worker cache renamed to troop-mess-v3.17.

Tested: chip and menu order; five recipes picked in reverse order come out cracker barrel →
dessert; list renders; roster unchanged; installable; offline with 148 recipes; no errors.

### v3.16 — Names on the duty roster (October 22, 2026)

Rob expected the roster to fill in on the phone. It couldn't; now it can.

- **Patrol members box on the Roster tab.** One name per line, or comma-separated. Up to
  30 names, duplicates and blanks dropped. Saves as you type.
- **Fair rotation, filled automatically.** Each slot goes to whoever has done that job
  least, then whoever has worked least overall, so everyone cooks and everyone cleans.
  Checked for patrols of 2 to 12 on both the weekend and custom shapes: nobody doubled in
  a meal, totals within one of each other.
- **Water is never one person.** For a patrol too small to fill every spot, cook,
  cleanup and both water carriers are filled first; if there's only room for one on
  water, that spot goes to the next job instead.
- **Tap a name to change it.** Each slot is a picker; "—" leaves it blank. Changed slots
  get a dot. If someone ends up with two jobs in the same meal, the name turns red with a
  note.
- **Shuffle the rotation** starts over with a different fair rotation and drops the
  changes.
- **Who does what** tally under the grid: counts per job and total per scout.
- **Header fields are typeable:** patrol, campout & dates, grubmaster, patrol leader.
- **Printing** shows the names in the grid; the names box, tally, chips and pickers stay
  off the paper. With no names, it prints the blank grid as before.
- **Names save with the trip and travel on the share link.** Start a new trip keeps the
  names and patrol name and clears the rest. Names from a link are trimmed, capped, and
  HTML-escaped.
- Fixed: the Custom roster shape was not remembered between opens (it saved as "custom"
  but only "week" was accepted on load).
- Service worker cache renamed to troop-mess-v3.16.

Tested: rotation fairness 2–12 names both shapes; blank grid with no names; parsing
(commas, newlines, duplicates, HTML in a name shows as text); typing doesn't lose focus;
swap kept over reload; share link round-trip in a fresh browser; hostile link (script in
a name, 200-char name, bogus swaps) comes through harmless; print PDF checked by eye;
shuffle; new trip keeps names; offline with all 148 recipes; installable; no page errors.

### v3.15 — Install strip and download button fixes (October 21, 2026)

Found while Rob reinstalled the app on his phone.

- **"Not now" really hides the strip now.** The page's styling had been overriding the
  hidden setting, so the install strip (and the Start a new trip strip on an empty plan)
  could stay on screen after being dismissed. One style rule now makes hidden mean hidden
  everywhere.
- **The install strip comes back if someone removes the app.** v3.14 and earlier
  remembered installing forever, so after uninstalling, the strip never returned. Now only
  "Not now" is remembered, and only for two weeks. The old setting is cleared
  automatically, so leaders who hit this get the strip back with no action.
- **Clearer label.** The strip now says "Install the Troop Mess app" with an "Install
  Troop Mess app" button (iPhone: "Install Troop Mess on your iPhone"), so nobody mistakes
  it for adding recipes.
- **The big bottom button on the Add tab no longer downloads anything.** It said
  "Download" and saved a copy of the whole app, which then opened as a file with a "not
  secure" warning and couldn't be installed. It now says "See recipes" and goes to the
  menu.
- **"Save your work" renamed "Keeper's tools."** It explains that most leaders don't need
  it, the button reads "Download master copy (keeper)", and it asks for confirmation
  before downloading.
- Service worker cache renamed to troop-mess-v3.15 so installed copies update.

Tested: no installability errors; strip shows for a v3.14 user who had installed before;
Not now hides it and it returns after 14 days; install doesn't suppress it; Add-tab
button goes to the menu with no download; keeper download cancels cleanly and works on
OK; Start a new trip strip hidden on an empty plan and shown with a plan; offline load
with all 148 recipes; no page errors.

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
