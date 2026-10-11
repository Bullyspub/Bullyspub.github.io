BULLY'S PUB & GRILL — WEBSITE REDESIGN
=======================================

WHAT'S IN THIS FOLDER
---------------------
index.html    Home page (looping hero video, hours + happy hour, sports packages,
              featured food, about section, call-to-action)
menu.html     Pub & Grub menu with category filters
sports.html   Game day page featuring the TV packages
visit.html    Address, full hours, happy hour, contact, embedded map
styles.css    All styling (one file, responsive, dark pub theme)
script.js     Mobile menu, sticky header, scroll reveals, menu filters, video handling
assets/       Logo, hero video + poster, food and pub photography, favicon


HOW TO PREVIEW
--------------
Double-click index.html. Everything runs locally except the Google Map
and the web fonts, which need an internet connection.


HOW TO PUBLISH
--------------
Netlify (easiest): go to app.netlify.com/drop and drag this whole folder in.
GitHub Pages: push the folder contents to a repo, then enable Pages on the
main branch. Either way, point bullyspub.com at the new host when ready.


THE LOGO
--------
assets/bullys-bull.png is the original Bully's bull mascot, cut out from the
sign artwork, cleaned up and saved with a transparent background so it works
on any color. assets/bullys-bull-sm.png is a smaller version for the header
and footer, and assets/favicon.png is the browser tab icon. The "BULLY'S /
Pub & Grill" wordmark is built with live web type (Anton + Yellowtail), so it
stays sharp at any size and can be restyled in CSS.


THE HERO VIDEO
--------------
assets/bullys-hero.mp4 is a silent 14-second loop that autoplays in the
background of the home page, with assets/bullys-hero-poster.jpg showing on
slow connections or if autoplay is blocked. To swap in real footage of the
pub, replace the MP4 with your own clip (keep it silent, 10-20 seconds,
1280x720 or 1920x1080, and under about 5 MB) and update the poster image.


BEFORE THIS GOES LIVE — PLEASE VERIFY WITH THE OWNER
-----------------------------------------------------
1. Menu items. The menu lists dishes Bully's is known for, with no prices,
   so nothing goes stale. Confirm the lineup and add current pricing.
2. Photography. All food and interior images here are placeholders. Replace
   them with real photos of Bully's food, the bar and the patio - that single
   change will do more for the site than anything else.
3. Hours. The site shows Mon-Sun 12:00PM-2:00AM and happy hour 4-7 daily, to
   match the pub's own signage. Some third-party listings show earlier
   closing times on weeknights, so confirm what's current.
4. Sports packages. MLB Extra Innings, NFL Sunday Ticket, NHL Center Ice and
   the DIRECTV Sports Pack are presented as text, not league logos, which
   avoids trademark issues. If the pub drops or adds a package, edit the
   cards in index.html and sports.html.
5. Social links. The Facebook link points to facebook.com/bullys.pub and the
   Instagram link is a placeholder - update it or remove the icon.
6. Logo rights. Get the owner's OK to use and refine the bull mascot artwork.


QUICK EDITS
-----------
Phone number:  search for 8432724123 and (843) 272-4123
Address:       search for 4868 Highway
Hours:         the ".strip" section on each page, plus the hours table in visit.html
Colors:        the ":root" block at the top of styles.css
