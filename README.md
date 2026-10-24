# Troop Mess — Camp Meal Planner

A meal planning tool for the scout-appointed Grubmaster for a camping trip. It holds the
recipes, scales them to the number of scouts being fed, builds the shopping list, prints
the cook cards, and lays out a duty roster.

One self-contained HTML file. No install, no account, no internet needed once you have it.

---

## Why this exists

First, this is — and hopefully always will be — a work in progress. It was conceptualized
and made a ticket item for my Wood Badge Adult Leadership Course, 15-415-25.

As an adult leader for several Scout troops over the years, I've noticed a common theme in
Scout meal planning: what's quickest and uses the fewest dishes to wash. These are not bad
goals when meal planning, but the result usually ends up being Bubba Burgers for dinner on
Saturday night and Pop-Tarts for breakfast on Sunday morning. Contrast this with the adult
leaders who take it as a challenge to make good, cheap food.

The original idea was to have a cookbook of sorts to help scouts plan their meals, the
required shopping list, and the resulting duty roster. This is nothing new — in fact, I
came across one such cookbook while helping clean up an old storage area. Many of those
recipes made it into this application (tip of the cap to Linda Kolb, and Tom Howard).

The problem with the cookbook idea is that it takes up space. Given that many troops these
days are essentially being gifted a place to meet that does not necessarily come with
storage for cookbooks, or much of anything else, I thought a digital option would be
great.

"Yeah, an app!" The only problem is I don't know how to code. But this is the modern age,
and coding is intuitive, right? So, with my apologies to real coders everywhere, this is
what I came up with.

---

## How it works

Mostly, it is pretty obvious. A bunch of recipes, and a tool to add more.

**The Trip.** Enter the number of scouts and leaders if they are being cooked for — both
start at zero, because patrols usually cook for scouts alone. Pick the type of camping,
which is really the type of cooking. Pick which meals you are doing. There are five carve-outs:
nut allergy, vegetarian, pork free, vegan, and gluten free.

**The Menu.** Recipes are generated and grouped by meal, in the order the weekend happens
— cracker barrel Friday night, then Saturday breakfast, lunch and dinner, then Sunday
breakfast. Each heading shows how many you have chosen against how many are available, so
what still needs covering is on the screen rather than in your head. Select the ones you
want.

**The List.** A shopping list, sorted by store department and scaled to the number of
servings actually needed, with a cost estimate and total food weight. Cooking instructions
are provided for every recipe you picked, including Dutch oven coal counts.

**Roster.** The duty roster. Type the patrol's names and the app suggests a fair rotation (everyone cooks, everyone cleans, water always in pairs); tap any name to change it. Leave the names empty for a blank grid to fill in by hand. Names stay with the trip and travel on the share link.

**Share a menu without a server.** The List has a *Share this menu* button. On a phone it
opens the normal share sheet — Messages, email, whatever you use — and sends a link with
the entire plan packed inside it. Whoever taps it gets their own copy of the app opened on
your shopping list: same head count, same cooking style, same recipes. It is a snapshot
rather than live collaboration, so later changes do not follow, but it means the plan
survives the grubmaster coming down with flu on the Friday. Nothing is uploaded anywhere;
the plan travels inside the link and nowhere else.

**Your own recipes.** Recipes added on the Add tab are saved on that phone and survive
updates. The **Share** button next to each one sends a link that adds it to anyone's
Troop Mess with one tap; send it to the keeper to get it into the master copy.

**Visit counter.** Opens with signal are counted at troopmess.goatcounter.com (installed
app or browser). No cookies, no names, nothing personal; skipped with no signal.

**On iPhone, install it.** Safari clears a website's saved data if the site isn't opened
for seven days, so a plan kept only in Safari can vanish between the meeting and the
campout. The home-screen app is exempt. Install it once and plans stay put. The
home-screen app also keeps its own copy, separate from Safari; to load a shared menu
into it, use **Have a shared menu link?** on The Trip.

**It remembers where you left off.** Plan at Thursday's meeting, close the app, open it at
camp with no signal — the head count, the cooking style and every recipe you picked are
still there. A "Start a new trip" button on The Trip clears it when you want a fresh
start, and it takes two taps so nobody wipes a menu by accident. When the app has
restored a plan it says what it brought back — "Carried over: 8 scouts · car camping · 4
recipes chosen" — and drops that line the moment you change anything, because from then
on it is your plan, not last month's. Printing is still the
most reliable thing at a campsite, and a phone battery is the one thing paper doesn't
have.

**Add.** Type in your own recipes one at a time, or paste in a batch. Then download the
app again with your recipes baked into it.

---

## What's in it

**148 recipes.** Thirty-five came from the troop cookbook found in that storage area.
Eighteen more came from the Cub Grub Cookbook used in Baloo training, adapted for
Troop-age scouts. The rest cover the gaps those had — backpacking, no-cook, breakfasts
and desserts — plus recipes sent in by the troop.

**Five ways of cooking:** car camping, Dutch oven, backpacking (freezer bag), no-cook, and
high adventure — plus a tick box to exclude Dutch oven recipes entirely, for the trip
where nobody wants to haul cast iron. One hundred and fourteen of the recipes need no Dutch oven.

**Five meals:** breakfast, lunch, dinner, dessert, and cracker barrel.

**Scaling that knows the pot doesn't grow.** If eight scouts need 1.75 times a recipe
written for a 10-inch Dutch oven, the app says so, names the oven size that will hold it,
looks up the correct coal count for that oven at the same temperature, and tells you to
add time and check the center. Scaling the food without scaling the cookware is how a
patrol ends up with a raw middle.

**The coals, and the time they really cost.** A Dutch oven does not cook slowly — a
thirty-minute bake takes thirty minutes. What costs the time is the charcoal, which needs
thirty to forty-five minutes to ash over before you can use it. At dinner nobody notices.
At breakfast it decides whether the meal happens. So any recipe that needs a Dutch oven
and is on the menu for breakfast or cracker barrel carries a warning, on screen and on the
printed card: light the coals first, put it on the duty roster the night before, and think
twice about it on a Sunday with camp to strike.

**The coal chart, built in.** The app works out what temperature a recipe's coal count
represents, so it can hold that temperature in a different sized oven. The full chart
prints with the packet whenever a Dutch oven recipe is on the menu.

**Buddy pairs on the roster.** Two name lines per job, because scouts work in pairs and
nobody walks to the water spigot alone.

**A weekend that looks like a weekend.** Friday arrival, water and cracker barrel.
Saturday breakfast, lunch, dinner. Sunday breakfast and break camp.

**Lunch either way.** Saturday lunch is often built after breakfast and carried, because
the patrol is out at an activity — there are fifteen no-cook lunches for exactly that. But
plenty of trips have the patrol in camp at midday, so there are twenty-three cooked lunches for
car camping as well, from grilled cheese and tomato soup to Dutch oven pizza.

**Amounts you can actually measure.** Scaling a recipe produces awkward numbers, so the
app snaps them to real spoon and cup increments and prints fractions — 2⅔ cups of baking
mix, ¼ tsp of pepper — promoting 8 tbsp to ½ cup where that reads better.

**Measuring without utensils.** Camp boxes lose measuring spoons. Cook cards show hand
equivalents for dry ingredients — "0.22 tsp black pepper (2 pinches)", half a cup as one
open fistful — and camp-cup equivalents for liquid. The full reference card prints with
the packet.

**Safe temperatures on every cook card.** The app knows what is in each recipe, so it
prints only the temperatures that recipe needs — 160°F for the ground beef, 165°F for the
finished casserole, 145°F and a three-minute rest for pork chops. The full chart prints
with the packet. You cannot tell doneness by looking, so pack a thermometer.

**Make-ahead and food safety built in.** Recipes that should have meat cooked at home say
so. Sack lunches carry the real rule: perishable fillings are unsafe after two hours above
40°F, one hour above 90°F — so freeze the sandwiches the night before, or use the
shelf-stable version.

**Something for everyone, in one pot where possible.** Fifteen recipes are vegan and
twelve of those are also gluten free, covering every meal and every way of cooking —
Dutch oven, skillet, freezer bag and nothing at all. Forty-six recipes in total are
gluten free. The three-bean chili feeds a whole patrol regardless of who is avoiding
what, which beats cooking two dinners.

**Thrift, measured.** Every recipe shows its cost per serving, and anything at or under
$2.25 gets a Thrifty badge. Campfire popcorn comes out at 17 cents.

**Printing.** The whole packet — shopping list and every cook card, one recipe per page —
prints or saves as a PDF, for a campsite with no signal.

**Store finder.** Enter a zip code and it opens your maps app with grocery stores,
supercenters, warehouse clubs, dollar stores or camp supplies already searched. No account
and no cost, at any number of users.

**Works at camp with no signal.** Installed to a home screen, the whole app is cached on
the phone — no network needed to open it or use it. Printing is still there for anyone who
would rather carry paper, or whose battery is the thing that runs out.

---

## Using it

It lives on the web at **https://lukewarmly.github.io/Troop-Mess/** — tap the link and it
opens. Nothing to download, nothing to install, works on any phone or computer.

**Put it on your phone for camp.** The first time you open it with signal, tap *Install*
(Android) or Share → *Add to Home Screen* (iPhone). After that it opens from a home-screen
icon and runs with no signal at all — recipes, scaling, coal counts, shopping list and
roster, all of it. That is the version to have in your pocket at a campsite with no bars.

You can also download `index.html` and open it straight from a folder, if you would rather
keep your own copy. Note that Android has no reliable way to open a downloaded HTML file in
a browser, so the link is the better route on a phone.

---

## Still to come

- **Prices by store.** The store finder points you at nearby stores, but it does not yet
  compare what things cost at each one. That is the original goal — helping scouts be
  thrifty by shopping where the ingredients are cheapest — and it needs a paid data
  source, so it is a question of whether the cost is worth it.
- **More no-cook dinners.** Cold soaking a full dinner is genuinely limited, and that
  category is thin.
- **More recipes from the cookbook** as they're added.
- Prices in the app are rough national averages, not quotes. Treat the totals as a budget.
- Dietary filters check ingredients, not manufacturing lines. For a real allergy, confirm
  labels at the store. This matters most for two of them. **Gluten free** cannot know
  whether a product was made on shared equipment, which is the thing that actually catches
  people with coeliac disease — oats are flagged as gluten here for exactly that reason,
  even though the grain itself has none. **Vegan** cannot see milk solids in a cake mix or
  a seasoning packet, which vary by brand. Both filters get you to a short, sensible
  shopping list. The label still has to be read in the aisle.

---

Built for a Wood Badge ticket, and a tribute to every scout handed the grubmaster job on a
Tuesday and having to shop by Thursday.
