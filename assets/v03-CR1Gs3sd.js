var ie=Object.defineProperty;var re=(a,e,t)=>e in a?ie(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var k=(a,e,t)=>re(a,typeof e!="symbol"?e+"":e,t);import{f as se,a as oe,c as le,q as de,t as ce,d as ue,b as he,s as pe,e as be,g as me,h as ge,i as fe,j as ke}from"./beefys-illustrated-v02-CLK4gv-s.js";import{a as ye,m as we}from"./mike-walk-normal-atlas-DhIZxhQJ.js";import{S}from"./rng-VQFrfh1t.js";const Se="/howzat/assets/fine-leg-toilets-v031-KbD_GBiY.png",ve="/howzat/assets/howzat-start-v031-DlSvW_eW.png",Me="/howzat/assets/mike-walk-BClmFMer.png",Ae=568,Te=.045,Be=.789,Re=Ae*Te*Be,Fe=["Relatively sober","Sociable","Merry","Wobbly","Properly pickled"],Le=[.018,.035,.055,.08],Ie=[.014,.031,.051,.076];function N(a,e,t,n){const i=28*(1+a.foodBuffer*.8),r=a.unabsorbedGrams*(1-Math.exp(-e/i));a.unabsorbedGrams=Math.max(0,a.unabsorbedGrams-r),a.bodyGrams+=r;const s=.015*n*t*10*e/60;a.bodyGrams=Math.max(0,a.bodyGrams-s),a.foodBuffer=Math.max(0,a.foodBuffer-e/150)}function L(a,e,t){return a.bodyGrams/(t*e*10)}function je(a,e){a.unabsorbedGrams+=Re*Math.max(0,e)}function C(a,e){let t=a;for(;t<4&&e>=Le[t];)t++;for(;t>0&&e<Ie[t-1];)t--;return t}function Ee(a){return Fe[a]}function $e(a){return a>=3}const I=`# HOWZAT player roster

Source roster supplied for future player-name presentation and team selection. It contains 12 nations with 30 comic player names each. Keep ability ratings and batting positions in separate game data when the match model starts using this roster.

## Role codes

\`BAT-OPEN\`, \`BAT-TOP\`, \`BAT-MID\`, \`WK-BAT\`, \`AR-SEAM\`, \`AR-SPIN\`, \`BOWL-FAST\`, \`BOWL-LFM\`, \`BOWL-OFF\`, \`BOWL-LEG\`, \`BOWL-SLA\`, \`BOWL-CHINAMAN\`, \`BOWL-MYSTERY\`.

## Roster

England

Player	Role
Harry Cover	Opening batter
Willow Root	Opening batter
Zak Crawfish	Top-order batter
Joe Route	Top-order batter
Ollie Dope	Middle-order batter
Dan Lawless	Middle-order batter
Jamie Smiff	Wicketkeeper-batter
Jonny Barelystow	Wicketkeeper-batter
Phil Salty	Wicketkeeper-batter
Ben Stoked	Seam all-rounder
Moeen Alley	Spin all-rounder
Liam Livingroom	Spin all-rounder
Chris Wokes	Seam all-rounder
Sam Currant	Seam all-rounder
Rehan Ah-Med	Spin all-rounder
Gus Atkinson-Diet	Fast bowler
Jofra Archerfish	Fast bowler
Mark Would	Fast bowler
Brydon Carseat	Fast bowler
Olly Stonewall	Fast bowler
Josh Tongue-Tied	Fast bowler
Matthew Potts-N-Pans	Fast bowler
Saqib Mahmoodoo	Fast bowler
Adil Rash	Leg-spinner
Jack Leech	Slow left-arm
Shoaib Bash-It	Off-spinner
Tom Hartley-Pool	Slow left-arm
Reece Toppley	Left-arm fast
Luke Woodwork	Left-arm fast
Tom Banton-Rouge	Middle-order batter

Australia

Player	Role
Usman Khawaja-Mate	Opening batter
David Warned	Opening batter
Matt Shortbread	Opening batter
Marnus Labuschagne-And-Chips	Top-order batter
Steve Smudge	Top-order batter
Travis Headache	Top-order batter
Jake Fraser-McBurger	Top-order batter
Josh Inglish	Wicketkeeper-batter
Alex Carry	Wicketkeeper-batter
Matthew Wader	Wicketkeeper-batter
Mitchell Marshmallow	Seam all-rounder
Glenn Maxed-Out	Spin all-rounder
Cameron Greenish	Seam all-rounder
Marcus Stoined	Seam all-rounder
Aaron Hardly	Seam all-rounder
Beau Webbed-Feet	Spin all-rounder
Pat Cumin	Fast bowler
Mitchell Starfish	Left-arm fast
Josh Hazelwoodwork	Fast bowler
Scott Boland-Sauce	Fast bowler
Jhye Richardson-Road	Fast bowler
Lance Morris-Dancer	Fast bowler
Sean Abbotts	Fast bowler
Nathan Ellis-Island	Fast bowler
Adam Zampa-Dampa	Leg-spinner
Nathan Lyon-Bar	Off-spinner
Todd Murphy’s	Off-spinner
Matthew Kuhnemann-And-Sons	Slow left-arm
Spencer Johnson’s	Left-arm fast
Xavier Barlett	Fast bowler

India

Player	Role
Rohit Sharma-Llama	Opening batter
Yashasvi Jaiswallop	Opening batter
Shubman Gilligan	Top-order batter
Virat Koala	Top-order batter
Shreyas Iyer-Crossing	Middle-order batter
Sarfaraz Khan-Do	Middle-order batter
Rinku Singh-Song	Middle-order batter
Rishabh Pantaloons	Wicketkeeper-batter
KL Rahul-Over	Wicketkeeper-batter
Sanju Samsung	Wicketkeeper-batter
Hardik Pandya-Business	Seam all-rounder
Ravindra Jade-Ja	Spin all-rounder
Axar Patel-Cake	Spin all-rounder
Washington Sundial	Spin all-rounder
Nitish Kumar Ready	Seam all-rounder
Shivam Dubious	Seam all-rounder
Jasprit Bumrah-Claat	Fast bowler
Mohammed Siraj-U-Like	Fast bowler
Mohammed Shami-Kebab	Fast bowler
Akash Deep-Fried	Fast bowler
Arshdeep Singalong	Left-arm fast
Prasidh Krish-Nah	Fast bowler
Mukesh Kumar-At-Me	Fast bowler
Harshit Rana-Away	Fast bowler
Kuldeep Yadav-Yadav-Doo	Left-arm wrist-spin
Ravi Bish-Noi	Leg-spinner
Varun Chakravar-Tea	Mystery spinner
Yuzvendra Chahal-Lenge	Leg-spinner
Khaleel Ahmed-And-Chips	Left-arm fast
Avesh Khan-Opener	Fast bowler

New Zealand

Player	Role
Tom Latham-Up	Opening batter
Devon Con-Way	Opening batter
Will Youngish	Top-order batter
Kane Will-I-Am-Son	Top-order batter
Daryl Mitchellin-Man	Middle-order batter
Henry Nicholls-And-Dimes	Middle-order batter
Mark Chapman-Stick	Middle-order batter
Tom Blundell-Bus	Wicketkeeper-batter
Tim Seifert-First	Wicketkeeper-batter
Glenn Phillips-Head	Wicketkeeper-batter
Rachin Ravin-Dra	Spin all-rounder
Mitchell Santner-Claus	Spin all-rounder
Michael Brace-Well	Spin all-rounder
Jimmy Neesham-Park	Seam all-rounder
Nathan Smithereens	Seam all-rounder
Dean Foxcroft-Law	Spin all-rounder
Matt Henry-Vacuum	Fast bowler
Lockie Ferguson-Tractor	Fast bowler
Will O’Rourke-And-Roll	Fast bowler
Kyle Jamieson-Toast	Fast bowler
Tim Southee-Fried	Fast bowler
Ben Sears-Roebuck	Fast bowler
Jacob Duffy-Duck	Fast bowler
Adam Milne-Again	Fast bowler
Ajaz Patel-Shop	Slow left-arm
Ish Sodhi-Pop	Leg-spinner
Cole McConchie-Crisps	Spin all-rounder
William Somerville-House	Off-spinner
Ben Listerine	Left-arm fast
Blair Tickner-Tape	Fast bowler

Pakistan

Player	Role
Abdullah Shafique-Up	Opening batter
Imam-ul-Haq-A-Lot	Opening batter
Saim Ayub-There	Opening batter
Babar A-Zam	Top-order batter
Saud Shakeel-Rattle	Middle-order batter
Shan Masood-And-Chips	Top-order batter
Fakhar Zaman-Ia	Top-order batter
Mohammad Riz-Wan	Wicketkeeper-batter
Sarfaraz Ah-Med	Wicketkeeper-batter
Usman Khan-Do	Wicketkeeper-batter
Salman Ali Agha-Do	Spin all-rounder
Shadab Khan-Artist	Spin all-rounder
Mohammad Nawaz-Here	Spin all-rounder
Aamer Jamal-Sandwich	Seam all-rounder
Faheem Ash-Raff	Seam all-rounder
Iftikhar Ahmed-It	Spin all-rounder
Shaheen Shah Afraidy	Left-arm fast
Naseem Shah-Lot	Fast bowler
Haris Rauf-And-Ready	Fast bowler
Mohammad Abbas-Cab	Fast bowler
Hasan Ali-Gator	Fast bowler
Mohammad Ali-Bi	Fast bowler
Mir Hamza-Dance	Left-arm fast
Ihsanullah-Vista	Fast bowler
Abrar Ahmed-You	Leg-spinner
Noman Ali-En	Slow left-arm
Sajid Khan-Opener	Off-spinner
Usama Mir-Or	Leg-spinner
Zaman Khan-Do-It	Fast bowler
Mohammad Wasim-Jnr-Mint	Fast bowler

South Africa

Player	Role
Aiden Mark-Ram	Opening batter
Tony de Zorzi-Doors	Opening batter
Ryan Rickel-Ton	Opening batter
Temba Bavuma-Bee	Top-order batter
David Bedding-Ham	Middle-order batter
Tristan Stubbs-Toe	Middle-order batter
Rassie van der Dussen-Bin	Middle-order batter
Kyle Verreynne-Or-Shine	Wicketkeeper-batter
Heinrich Klaasen-Door	Wicketkeeper-batter
Quinton de Sock	Wicketkeeper-batter
Marco Jansen-Button	Seam all-rounder
Wiaan Mulder-Wine	Seam all-rounder
Andile Phehlukwayo-Through	Seam all-rounder
Corbin Bosch-Washer	Seam all-rounder
George Linde-Dance	Spin all-rounder
Kagiso Raba-Dabba-Doo	Fast bowler
Anrich Nor-Jay	Fast bowler
Lungi Ngidi-Down	Fast bowler
Gerald Coetzee-Bear	Fast bowler
Nandre Burger-And-Fries	Left-arm fast
Dane Paterson-Tan	Fast bowler
Lutho Sipamla-Lot	Fast bowler
Kwena Maphaka-Napkin	Left-arm fast
Keshav Maharaj-Ah	Slow left-arm
Tabraiz Sham-See	Left-arm wrist-spin
Senuran Muthusamy-Street	Spin all-rounder
Bjorn Fortuin-Cookie	Slow left-arm
Ottneil Baartman-Simpson	Fast bowler
Duan Jansen-Button	Left-arm fast
Reeza Hendricks-Gin	Opening batter

Sri Lanka

Player	Role
Pathum Nissanka-Tanka	Opening batter
Dimuth Karunarat-Neigh	Opening batter
Avishka Fernando-Alonso	Opening batter
Kusal Mendis-Order	Top-order batter
Dinesh Chandimal-Tea	Middle-order batter
Angelo Mathews-And-Spencer	Middle-order batter
Kamindu Mendis-Cus	Spin all-rounder
Kusal Perera-Sauce	Wicketkeeper-batter
Sadeera Samarawick-Rama	Wicketkeeper-batter
Niroshan Dickwella-Well	Wicketkeeper-batter
Dhananjaya de Silva-Lining	Spin all-rounder
Wanindu Has-A-Ranga	Spin all-rounder
Dunith Wellalage-Lager	Spin all-rounder
Chamika Karunarat-Nay	Seam all-rounder
Dasun Shanaka-Laka	Seam all-rounder
Ramesh Mendis-Cus	Spin all-rounder
Asitha Fernando-Torres	Fast bowler
Lahiru Kumara-Sutra	Fast bowler
Dushmantha Chameera-Mirror	Fast bowler
Kasun Rajitha-Bhoy	Fast bowler
Matheesha Pathirana-Run	Fast bowler
Dilshan Madushanka-Plank	Left-arm fast
Vishwa Fernando-Alonso	Left-arm fast
Prabath Jayasuriya-Lanka	Slow left-arm
Maheesh Theekshana-Lot	Mystery spinner
Jeffrey Vandersay-What	Leg-spinner
Akila Dananjaya-Vu	Off-spinner
Lakshan Sandakan-Do	Left-arm wrist-spin
Binura Fernando-Columbo	Left-arm fast
Nuwan Thushara-Bout	Fast bowler

West Indies

Player	Role
Kraigg Brathwaite-And-See	Opening batter
Tagenarine Chander-Paul	Opening batter
Evin Lewis-Hamilton	Opening batter
Shai Hope-So	Top-order batter
Alick Athanaze-Beans	Middle-order batter
Keacy Carty-On	Middle-order batter
Shimron Hetmyer-Later	Middle-order batter
Joshua Da Silva-Lining	Wicketkeeper-batter
Nicholas Poor-An	Wicketkeeper-batter
Shane Dowrich-Tea	Wicketkeeper-batter
Jason Holder-Up	Seam all-rounder
Roston Chase-Me	Spin all-rounder
Romario Shepherd’s-Pie	Seam all-rounder
Andre Rust-Sell	Seam all-rounder
Kyle Mayers-And-Co	Seam all-rounder
Sherfane Rutherford-Bohr	Seam all-rounder
Alzarri Joseph-Coat	Fast bowler
Shamar Joseph-And-His-Coat	Fast bowler
Kemar Roach-Coach	Fast bowler
Jayden Seales-The-Deal	Fast bowler
Oshane Thomas-Tank	Fast bowler
Obed McCoy-Toy	Left-arm fast
Gudakesh Motie-Vation	Slow left-arm
Akeal Hose-In	Slow left-arm
Hayden Walsh-Jnr-Cycle	Leg-spinner
Kevin Sinclair-C5	Off-spinner
Jomel Warrican-Opener	Slow left-arm
Anderson Phillip-Screwdriver	Fast bowler
Matthew Forde-Focus	Fast bowler
Shannon Gabriel-Angel	Fast bowler

Bangladesh

Player	Role
Tamim Iq-Ball	Opening batter
Najmul Hossain Shanto-Claus	Top-order batter
Litton Das-Boot	Opening batter
Mominul Haque-Eye	Top-order batter
Towhid Hridoy-Ride	Middle-order batter
Mahmudul Hasan Joy-Rider	Middle-order batter
Mushfiqur Rahim-Stein	Wicketkeeper-batter
Jaker Ali-Gator	Wicketkeeper-batter
Nurul Hasan-Do	Wicketkeeper-batter
Parvez Hossain Emon-And-On	Wicketkeeper-batter
Shakib Al Has-An-Idea	Spin all-rounder
Mehidy Hasan Miraz-Matazz	Spin all-rounder
Mahmudullah-Land	Spin all-rounder
Soumya Sarkar-Saurus	Seam all-rounder
Mahedi Hasan-Bean	Spin all-rounder
Afif Hossain-Bolt	Spin all-rounder
Taskin Ahmed-For-It	Fast bowler
Mustafizur Rahman-Noodles	Left-arm fast
Nahid Rana-Long	Fast bowler
Shoriful Islam-A-Badger	Left-arm fast
Hasan Mahmud-And-Sons	Fast bowler
Tanzim Hasan Sakib-Bag	Fast bowler
Ebadot Hossain-Bolt	Fast bowler
Khaled Ahmed-It	Fast bowler
Taijul Islam-A-Badger	Slow left-arm
Nasum Ahmed-You	Slow left-arm
Rishad Hossain-Pipe	Leg-spinner
Nayeem Hasan-Do	Off-spinner
Rubel Hossain-Bolt	Fast bowler
Abu Jayed-Z	Fast bowler

Afghanistan

Player	Role
Ibrahim Zadraught	Opening batter
Rahmanullah Gurbaz-Lightyear	Wicketkeeper-batter
Sediqullah Atal-Cost	Opening batter
Hashmatullah Shahidi-Dah	Middle-order batter
Rahmat Shah-Lot	Top-order batter
Najibullah Zadraught	Middle-order batter
Ikram Alikhil-Bill	Wicketkeeper-batter
Mohammad Ishaq-Sack	Wicketkeeper-batter
Afsar Zazai-Zoom	Wicketkeeper-batter
Darwish Rasooli-Veg	Middle-order batter
Mohammad Nabi-Wan-Kenobi	Spin all-rounder
Azmatullah Omarzai-Lot	Seam all-rounder
Gulbadin Naib-Our	Seam all-rounder
Karim Janat-Home	Seam all-rounder
Nangeyalia Kharote-Toast	Spin all-rounder
Sharafuddin Ashraf-Tray	Spin all-rounder
Rashid Can	Leg-spinner
Mujeeb Ur Rahman-And-Robin	Mystery spinner
Noor Ahmad-You	Left-arm wrist-spin
Fazalhaq Farooqi-Duck	Left-arm fast
Naveen-ul-Haq-Saw	Fast bowler
Fareed Ahmad-Mate	Left-arm fast
Allah Ghazanfar-Away	Mystery spinner
Qais Ahmad-You	Leg-spinner
Zahir Khan-Do	Left-arm wrist-spin
Nijat Masood-And-Peas	Fast bowler
Bilal Sami-Davis-Jnr	Fast bowler
Yamin Ahmadzai-What	Fast bowler
Salim Safi-Way	Fast bowler
Wafadar Momand-Pop	Fast bowler

Ireland

Player	Role
Paul Stirling-Job	Opening batter
Andrew Balbirnie-Sanders	Top-order batter
Harry Tector-Set	Middle-order batter
Curtis Campher-Van	Seam all-rounder
Lorcan Tucker-Bag	Wicketkeeper-batter
Stephen Doheny-Do	Wicketkeeper-batter
Neil Rock-And-Roll	Wicketkeeper-batter
Ross Adair-Do	Opening batter
James McCollum-Pillar	Opening batter
Peter Moor-Please	Top-order batter
George Dockrell-Roll	Spin all-rounder
Gareth Delany-Lama	Spin all-rounder
Mark Adair-Do	Seam all-rounder
Andy McBrine-Shrimp	Spin all-rounder
Fionn Hand-Solo	Seam all-rounder
Simi Singh-Song	Spin all-rounder
Josh Little-Bit	Left-arm fast
Barry McCarthy-And-Stone	Fast bowler
Craig Youngish	Fast bowler
Graham Hume-Along	Fast bowler
Matthew Foster-Home	Fast bowler
Thomas Mayes-Well	Fast bowler
Ben White-Wine	Leg-spinner
Theo van Woerkom-From-Home	Slow left-arm
Mike Frosties	Spin bowler
David Delany-Lama	Fast bowler
Olly Riley-Quite	Fast bowler
Liam McCarthyism	Fast bowler
Jordan Neill-Before	Seam all-rounder
Morgan Topping-Out	Middle-order batter

Zimbabwe

Player	Role
Brian Bennett-And-Hedges	Opening batter
Ben Curran-Bun	Opening batter
Craig Ervine-Magic	Top-order batter
Sean Williams-Sonoma	Spin all-rounder
Sikandar Raza-Matazz	Spin all-rounder
Dion Myers-Rum	Middle-order batter
Joylord Gumbie-Bear	Wicketkeeper-batter
Clive Madande-Up	Wicketkeeper-batter
Tadiwanashe Marumani-Pedi	Wicketkeeper-batter
Brendan Taylor-Made	Wicketkeeper-batter
Wessly Madhevere-End	Spin all-rounder
Ryan Burl-Ives	Spin all-rounder
Tony Munyonga-Round	Spin all-rounder
Luke Jongwe-Home	Seam all-rounder
Donald Tiripano-Grigio	Seam all-rounder
Chamu Chibhabha-Tea	Seam all-rounder
Blessing Muzarabani-Split	Fast bowler
Richard Ngarava-Tie	Left-arm fast
Tendai Chatara-Box	Fast bowler
Trevor Gwandu-Lot	Fast bowler
Victor Nyauchi-Mama	Fast bowler
Brad Evans-Above	Fast bowler
Tanaka Chivanga-Round	Fast bowler
Newman Nyamhuri-Up	Fast bowler
Wellington Masakadza-Thing	Slow left-arm
Brandon Mavuta-Vista	Leg-spinner
Tafadzwa Kamungozi-Berry	Leg-spinner
Ainsley Ndlovu-Actually	Slow left-arm
Tinashe Kamunhukamwe-Home	Opening batter
Milton Shumba-Wumba	Middle-order batter

There are a few here I particularly want to see on the scoreboard: Marnus Labuschagne-And-Chips, Kagiso Raba-Dabba-Doo, Mohammad Nabi-Wan-Kenobi, Nandre Burger-And-Fries, and the magnificent Mitchell Santner-Claus.

For the actual game data, I’d have Codex add ability ratings and batting position separately from role. That way Joe Route can genuinely be a star player, Pat Cumin a dangerous bowler, etc., while the comedy name doesn’t make the underlying cricket simulation silly. 
`,$=["England","Australia","India","New Zealand","Pakistan","South Africa","Sri Lanka","West Indies","Bangladesh","Afghanistan","Ireland","Zimbabwe"];function Oe(a){return a==="Opening batter"?"opener":a==="Wicketkeeper-batter"?"keeper":a==="Seam all-rounder"?"seam-allrounder":a==="Spin all-rounder"?"spin-allrounder":a.includes("spinner")||a.includes("spin")||a.includes("Slow left-arm")?"spin":a.includes("bowler")||a.includes("fast")?"pace":"batter"}function H(a){let e=2166136261;for(const t of a)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function xe(a,e,t){const n=Oe(t),i=H(`${a}:${e}`)%13,r={opener:76,batter:74,keeper:69,"seam-allrounder":62,"spin-allrounder":62,pace:28,spin:31},s={opener:18,batter:20,keeper:8,"seam-allrounder":67,"spin-allrounder":68,pace:78,spin:77},o={opener:1,batter:4,keeper:5,"seam-allrounder":6,"spin-allrounder":6,pace:9,spin:8},c=/Joe Route|Pat Cumin|Virat Koala|Jasprit Bumrah|Kagiso Raba|Rashid Can|Mitchell Santner/.test(e)?7:0;return{name:e,nation:a,sourceRole:t,role:n,batting:Math.min(94,r[n]+i-6+(n==="pace"||n==="spin"?0:c)),bowling:Math.min(94,s[n]+i-6+(n==="pace"||n==="spin"?c:0)),battingPosition:o[n]+H(e)%3}}const Pe=Object.fromEntries($.map(a=>{const e=`
${a}

Player	Role
`,t=I.indexOf(e);if(t<0)throw new Error(`Roster heading missing: ${a}`);const n=$.map(r=>I.indexOf(`
${r}

Player	Role
`,t+e.length)).filter(r=>r>t).sort((r,s)=>r-s)[0]??I.length,i=I.slice(t+e.length,n).trim().split(`
`).filter(r=>r.includes("	"));return[a,i.map(r=>{const[s,o]=r.split("	");return xe(a,s.trim(),o.trim())})]}));function We(a,e){const t=[...a];for(let n=t.length-1;n>0;n--){const i=Math.floor(e.next()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t}function De(a,e,t,n){return We(a,t).map(i=>({player:i,selectionForm:n(i)+t.next()*9})).sort((i,r)=>r.selectionForm-i.selectionForm).slice(0,e).map(i=>i.player)}function q(a,e){const t=Pe[a],n=[],i=(r,s,o)=>{const c=t.filter(p=>r.includes(p.role)&&!n.includes(p));n.push(...De(c,s,e,o))};return i(["opener"],2,r=>r.batting),i(["keeper"],1,r=>r.batting),i(["batter"],2,r=>r.batting),i(["seam-allrounder"],1,r=>r.batting+r.bowling),i(["spin-allrounder"],1,r=>r.batting+r.bowling),i(["pace"],3,r=>r.bowling),i(["spin"],1,r=>r.bowling),n.sort((r,s)=>r.battingPosition-s.battingPosition||s.batting-r.batting)}function Ne(a){const e=$.filter(t=>t!=="England");return e[Math.floor(a.next()*e.length)]}const J={quiet:["You can hear one man unwrapping a sandwich three rows back.","This over has all the urgency of a parish meeting.","Somewhere, a statistician is enjoying this.","Proper cricket. Nothing happening, beautifully."],"england-boundary":["Lovely. Didn’t even need to run.","Threaded it. Like he meant the exact gap.","Four more. Even the bloke with the drum saw that."],"opponent-boundary":["That gap was visible from the burger queue.","We appear to be fielding in another county.","Bit generous. Very hospitable."],"england-wicket":["Oh, for God’s sake.","That was avoidable in several different ways.","He’ll be replaying that one in the bath."],"opponent-wicket":["YES! Never doubted him.","That’s done wonders for the atmosphere.","Send another one out. We’re ready now."],six:["SIX! That’s somebody else’s problem in the car park.","That may have landed in tomorrow.","Magnificent. Completely unnecessary. Perfect."],milestone:["Raise the bat. Pretend this was always under control.","That deserves applause and possibly another round.","Proper innings, that. Put it in the book."],collapse:["This has become a group project with no supervision.","We’ve lost the plot and two wickets.","Nobody move. Movement appears to cause wickets."],"chase-ahead":["Rate’s comfortable. That makes me nervous.","Plenty in hand. Famous last words.","This is almost suspiciously manageable."],"chase-behind":["Required rate is developing opinions.","We need boundaries now, not good intentions.","Someone should tell them the target is today."],"close-finish":["Nobody breathe. Especially you.","This is why we stayed. Also because the gates are that way.","Every ball matters now. Deeply inconvenient."],drinks:["Eight minutes. Enough time to make one poor decision.","The players get drinks delivered. Luxury.","Quick break. The queues have sensed weakness."],interval:["Thirty minutes. The concourse has declared war.","Interesting total. Pint?","Halfway. How are you feeling about every decision so far?"],hungry:["You’re looking at Beefy’s again.","That scoreboard is starting to resemble a menu.","Get food before you start eating the programme."],toilet:["Yes, go. Please go.","Fine Leg. Immediately. This is not tactical advice.","You’re sitting like a man with a deadline."],merry:["You’ve become very supportive of mid-on.","Everything is funnier at this precise level.","Steady. We have several overs and dignity remaining."],wobbly:["Perhaps water next.","The ground is level. That movement is all you.","Use the handrail. It has no opinion of you."],spending:["Your wallet has had a difficult spell.","At this rate, the free bet is doing heavy emotional work.","Maybe let the next round belong to destiny."],bar:["I’ll guard this patch of carpet.","We came for cricket and found logistics.","The queue is moving. Spiritually."],food:["Beefy’s: where patience meets onions.","That smells better than it has any right to.","If it takes eight minutes, it counts as dining."],"mike-round":["Cheers. Mine next, once these have disappeared.","Two each? Ambitious. I respect the paperwork.","Your round officially entered into evidence."],"jb-round":["My round. I have witnesses.","I said I’d get them. Mark the date.","Financial responsibility has briefly changed hands."],missed:["You missed a wicket. Excellent timing.","Lovely shot while you were away. Obviously.","The match waited until you left to become interesting."],"both-missed":["I missed it too. Outstanding work from both of us.","Apparently something happened. We remain uninformed.","A roar, no witnesses, and two excellent excuses."],win:["YES! Never in doubt.","A famous victory, witnessed in strategically selected portions.","England win. Your decisions are retrospectively sound."],loss:["Well. Pub?","A long day, a short post-match analysis.","We gave them every chance, including all the ones they needed."]};function Ce(a,e,t){const n=J[a].filter(r=>!t.includes(r)),i=n.length?n:J[a];return i[Math.floor(e.next()*i.length)]}const He={seats:"Riverside seats",bar:"The Twelfth Man",food:"Beefy’s Burgers",toilet:"Fine Leg Toilets"},qe={"pint-1":6.2,"pint-2":12.4,"pint-4":24.8,water:2.5,burger:7.5,toilet:0,"jb-round":0},j={bar:1.25,food:1.7,toilet:1.1},Je=[17,34],Ke=.7,O=["seats","bar","food","toilet"],F=a=>`${Math.floor(a/6)}.${a%6}`,Ge=a=>{const e=660+Math.floor(a);return`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},y=a=>He[a],K=(a,e)=>a!==e&&O.includes(a)&&O.includes(e),G=(a,e)=>e>0?a*6/e:a>0?1/0:0;function U(a){let e=a|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,e>>>0||1}function b(a){return Math.max(0,Math.min(100,a))}function Y(){return{bodyGrams:0,unabsorbedGrams:0,foodBuffer:0}}class Ue{constructor(e=30326){k(this,"state");k(this,"rng");k(this,"matchRng");k(this,"worldRng");k(this,"dialogueRng");k(this,"carry",0);k(this,"nextBallAt",.8);k(this,"eventId",0);k(this,"queuePersonId",0);this.rng=new S(U(e)),this.matchRng=new S(e^20903),this.worldRng=new S(e^32586),this.dialogueRng=new S(e^11217),this.state=this.fresh(e)}fresh(e){const t=Ne(this.rng),n=q("England",this.rng),i=q(t,this.rng),r=this.rng.next()<.5?"England":t,s=this.rng.next()<.5?"England":t,o=r===s?"bat":"field",c=r==="England"?t:"England";return{phase:"title",seed:e,minute:0,opponent:t,englandXI:n,opponentXI:i,battingFirst:r,tossWinner:s,tossDecision:o,inningsIndex:0,innings:[this.newInnings(r,r==="England"?n:i,c==="England"?n:i),this.newInnings(c,c==="England"?n:i,r==="England"?n:i)],break:null,result:"",winner:null,events:[],latest:null,queues:{bar:this.newQueue(2),food:this.newQueue(3),toilet:this.newQueue(1)},mike:{place:"seats",travelling:null,activity:null,heldPints:0,drinking:0,alcohol:Y(),sobrietyBand:0,thirst:20,hunger:22,bladder:14,mood:70,totalSpend:0,waters:0,burgers:0,toilets:0},jb:{place:"seats",travelling:null,activity:null,heldPints:0,drinking:0,alcohol:Y(),sobrietyBand:0,mood:72,independentTrip:!1,returnAt:0,lastTalk:-99},roundOwner:"mike",mikeBet:null,jbBet:null,notice:"Riverside is filling up. England are in town.",speech:"International cricket and a whole day to make questionable decisions.",speechUntil:20,speed:1,crowd:"settled",lastReturnEvent:0,nextJBRoundAt:0,dialogueHistory:[],lastDialogueAt:-99,experience:{togetherMinutes:0,sociableMinutes:0,uncomfortableMinutes:0,peakBac:0}}}newQueue(e){return{patrons:Array.from({length:e},()=>this.nextPatron()),carry:0}}newInnings(e,t,n){const i=[...n].sort((s,o)=>o.bowling-s.bowling).slice(0,5),r={};for(const s of i)r[s.name]={player:s,runs:0,balls:0,wickets:0};return{team:e,xi:t,batting:t.map(s=>({player:s,runs:0,balls:0,out:!1})),bowling:r,runs:0,wickets:0,balls:0,striker:0,nonStriker:1,nextBatter:2,currentBowler:i[0].name,lastOver:-1,drinksTaken:[]}}reset(e=this.state.seed){this.rng=new S(U(e)),this.matchRng=new S(e^20903),this.worldRng=new S(e^32586),this.dialogueRng=new S(e^11217),this.carry=0,this.nextBallAt=.8,this.eventId=0,this.queuePersonId=0,this.state=this.fresh(e)}showOpponent(){this.state.phase==="title"&&(this.state.phase="opponent")}showBet(){this.state.phase==="opponent"&&(this.state.phase="bet")}placeBet(e){const t=this.state;if(t.phase!=="bet")return;t.mikeBet={pick:e,stake:10,won:null,payout:0};const n=this.rng.next()<.6?"England":t.opponent;t.jbBet={pick:n,stake:10,won:null,payout:0},t.speech=n===e?"Same bet. That feels less reassuring than it should.":`I’m on ${n}. One of us gets to be unbearable.`,t.phase="teams"}showToss(){this.state.phase==="teams"&&(this.state.phase="toss")}startMatch(){const e=this.state;e.phase==="toss"&&(e.phase="match",e.minute=0,this.nextBallAt=.8,e.notice=`${e.battingFirst} take guard. First ball at 11:00.`,e.speech=e.battingFirst==="England"?"Good start. Nobody’s done anything stupid yet.":"Right. Early wicket, then we can discuss refreshments.",e.speechUntil=8)}advance(e){const t=this.state;if(t.phase==="match")for(this.carry+=Math.max(0,e)*t.speed*.28;this.carry+1e-9>=.1&&t.phase==="match";)this.carry-=.1,Math.abs(this.carry)<1e-9&&(this.carry=0),this.step(.1)}advanceMinutes(e){let t=Math.max(0,e);for(;t>=.1&&this.state.phase==="match";)this.step(.1),t-=.1;t>1e-8&&this.state.phase==="match"&&this.step(t)}step(e){const t=this.state,n=Math.floor(t.minute);t.minute+=e,this.updateBodies(e),this.updateTravel(e),this.updateActivity(e),this.updateQueues(e),Math.floor(t.minute)!==n&&(this.queueArrivals(),this.updateJB(),this.maybeAmbientDialogue()),t.break?(t.break.left-=e,t.break.left<=0&&this.endBreak()):t.minute>=this.nextBallAt&&(this.bowl(),this.nextBallAt=t.minute+Ke)}updateBodies(e){const t=this.state,n=this.consume(t.mike,e);this.consume(t.jb,e),N(t.mike.alcohol,e,85,.68),N(t.jb.alcohol,e,78,.68);const i=L(t.mike.alcohol,85,.68);t.mike.sobrietyBand=C(t.mike.sobrietyBand,i),t.jb.sobrietyBand=C(t.jb.sobrietyBand,L(t.jb.alcohol,78,.68)),t.mike.thirst=b(t.mike.thirst+e*(.19+i*.5)-n*20),t.mike.hunger=b(t.mike.hunger+e*.21),t.mike.bladder=b(t.mike.bladder+e*.13+n*26);const r=Math.max(0,t.mike.thirst-72)+Math.max(0,t.mike.hunger-76)+Math.max(0,t.mike.bladder-74),s=i>=.015&&i<.06?.025:0;t.mike.mood=b(t.mike.mood+e*s-e*r*.0017),t.mike.place===t.jb.place&&!t.mike.travelling&&!t.jb.travelling&&(t.experience.togetherMinutes+=e),t.mike.place===t.jb.place&&!t.mike.travelling&&!t.jb.travelling&&i>=.015&&i<.06&&(t.experience.sociableMinutes+=e),(t.mike.thirst>75||t.mike.hunger>78||t.mike.bladder>78)&&(t.experience.uncomfortableMinutes+=e),t.experience.peakBac=Math.max(t.experience.peakBac,i)}consume(e,t){if(e.drinking<=0&&e.heldPints>0&&(e.heldPints--,e.drinking=1),e.drinking<=0)return 0;const n=Math.min(e.drinking,t/28);return e.drinking-=n,je(e.alcohol,n),n}updateTravel(e){const t=this.state;t.jb.travelling&&(t.jb.travelling.left-=e,t.jb.travelling.left<=0&&(t.jb.place=t.jb.travelling.to,t.jb.travelling=null)),t.mike.travelling&&(t.mike.travelling.left-=e,t.mike.travelling.left<=0&&(t.mike.place=t.mike.travelling.to,t.mike.travelling=null,t.notice=`Mike arrives at ${y(t.mike.place)}.`,t.mike.place==="seats"&&this.returnComment(),t.mike.place==="toilet"&&this.joinQueue("toilet")))}updateActivity(e){const t=this.state.mike.activity;t&&t.kind!=="queued"&&(t.left-=e,t.kind==="eating"&&(this.state.mike.hunger=b(this.state.mike.hunger-e*5.8),this.state.mike.alcohol.foodBuffer=Math.min(1,this.state.mike.alcohol.foodBuffer+e/t.total)),t.left<=0&&this.finishActivity(t));const n=this.state.jb.activity;n&&n.kind==="service"&&(n.left-=e,n.left<=0&&(this.state.mike.heldPints++,this.state.jb.heldPints++,this.state.roundOwner="mike",this.state.jb.activity=null,this.state.notice="JB returns from the counter with his round. Miracles happen.",this.say("jb-round")))}updateQueues(e){for(const t of["bar","food","toilet"]){const n=this.state.queues[t];if(!n.patrons.length){n.carry=0;continue}for(n.carry+=e;n.carry>=j[t]&&n.patrons.length;){n.carry-=j[t];const i=n.patrons.shift();i==="mike"&&this.beginService(t),i==="jb"&&this.beginJBService(t)}}}queueArrivals(){const e=this.state,t=e.break?e.break.kind==="innings"?.78:.58:.11;for(const n of["bar","food","toilet"]){const i=n==="bar"?1:n==="toilet"?.82:.7;e.queues[n].patrons.length<11&&this.worldRng.next()<t*i&&e.queues[n].patrons.push(this.nextPatron())}}updateJB(){const e=this.state;if(!e.jb.activity&&!this.letJBBuyRound()){if(e.jb.independentTrip&&!e.jb.travelling&&e.minute>=e.jb.returnAt){this.sendJB("seats"),e.jb.independentTrip=!1;return}if(e.jb.place==="seats"&&!e.jb.travelling&&!e.jb.independentTrip&&!e.break&&this.worldRng.next()<.008){const t=e.jb.alcohol.bodyGrams>18?"toilet":"bar";this.sendJB(t),e.jb.independentTrip=!0,e.jb.returnAt=e.minute+10}}}nextPatron(){return`fan-${++this.queuePersonId}`}travel(e,t=!1){const n=this.state,i=n.mike;if(n.phase!=="match"||i.travelling||i.activity||!K(i.place,e))return!1;const r=i.place,s=r==="seats"||e==="seats"?4:6;return i.travelling={from:r,to:e,left:s,total:s},t&&n.jb.place===r&&!n.jb.travelling&&!n.jb.activity&&(n.jb.travelling={from:r,to:e,left:s,total:s}),n.notice=`Mike heads for ${y(e)}. Play continues.`,r==="seats"&&n.jb.place==="seats"&&!t&&(n.speech="I’ll keep an eye on things.",n.speechUntil=n.minute+5),!0}sendJB(e){const t=this.state.jb;if(t.place===e||t.travelling||t.activity)return;const n=t.place,i=n==="seats"||e==="seats"?4:6;t.travelling={from:n,to:e,left:i,total:i}}joinQueue(e){const t=this.state,n=e.startsWith("pint")||e==="water"?"bar":e==="burger"?"food":"toilet";return t.phase!=="match"||t.mike.place!==n||t.mike.travelling||t.mike.activity||(e==="pint-2"||e==="pint-4")&&(t.jb.place!=="bar"||t.jb.travelling||t.jb.activity)?!1:((e==="pint-2"||e==="pint-4")&&(t.jb.independentTrip=!1,t.jb.returnAt=0),t.mike.activity={kind:"queued",facility:n,purchase:e,left:0,total:0},t.queues[n].patrons.push("mike"),t.notice=`Mike joins the back: ${this.queueAhead()} ${this.queueAhead()===1?"person":"people"} ahead.`,!0)}beginService(e){const t=this.state.mike.activity;if(!t||t.kind!=="queued"||t.facility!==e)return;const n=e==="bar"?2:e==="food"?2.5:2;t.kind="service",t.left=n,t.total=n,this.state.notice=e==="toilet"?"Mike reaches the front. Sweet relief awaits.":"Mike reaches the counter."}beginJBService(e){const t=this.state.jb.activity;!t||t.kind!=="queued"||t.facility!==e||(t.kind="service",t.left=2,t.total=2,this.state.notice="JB reaches the bar. His wallet is finally exposed to daylight.")}finishActivity(e){const t=this.state,n=t.mike;if(e.kind==="eating"){n.activity=null,t.notice="Burger demolished. No medical conclusions drawn.";return}const i=e.purchase;if(n.totalSpend+=qe[i],i==="jb-round")n.heldPints++,t.jb.heldPints++,t.roundOwner="mike",t.notice="JB gets his round in. Miracles happen.",t.speech="Your round next. I have witnesses.",t.speechUntil=t.minute+8;else if(i.startsWith("pint")){const r=Number(i.slice(-1)),s=r===4?2:1;n.heldPints+=s,r>=2&&(t.jb.heldPints+=r-s),n.mood=b(n.mood+(t.roundOwner==="mike"?5:2)),t.jb.mood=b(t.jb.mood+4),r>=2&&(t.roundOwner="jb",t.nextJBRoundAt=t.minute+45,this.say("mike-round")),t.notice=`${r} ${r===1?"pint":"pints"} collected. They’ll be drunk over time.`}else if(i==="water")n.waters++,n.thirst=b(n.thirst-38),n.bladder=b(n.bladder+8),t.notice="Water acquired. Alcohol remains exactly where it was.";else if(i==="burger"){n.burgers++,n.activity={kind:"eating",facility:"food",purchase:i,left:8,total:8},t.notice="Mike starts eating. This takes a while.";return}else n.toilets++,n.bladder=b(n.bladder-86),n.mood=b(n.mood+4),t.notice="Relief. The day can continue.";n.activity=null}letJBBuyRound(){const e=this.state,t=e.mike.heldPints+e.mike.drinking,n=e.jb.heldPints+e.jb.drinking;return e.phase!=="match"||e.mike.place!=="bar"||e.jb.place!=="bar"||e.mike.travelling||e.jb.travelling||e.mike.activity||e.jb.activity||e.roundOwner!=="jb"||e.minute<e.nextJBRoundAt||t>.01||n>.01?!1:(e.jb.independentTrip=!1,e.jb.returnAt=0,e.jb.activity={kind:"queued",facility:"bar",purchase:"jb-round",left:0,total:0},e.queues.bar.patrons.push("jb"),e.notice=`JB joins the back for his round: ${this.jbQueueAhead()} ahead.`,this.say("jb-round"),!0)}jbQueueAhead(){const e=this.state.jb.activity;return!e||e.kind!=="queued"?0:Math.max(0,this.state.queues[e.facility].patrons.indexOf("jb"))}estimatedTripMinutes(e){const t=this.state.mike.place;if(!K(t,e))return 0;const n=t==="seats"||e==="seats"?4:6;return e==="seats"?n:n+this.state.queues[e].patrons.length*j[e]+(e==="food"?10.5:2)}queueAhead(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons.indexOf("mike");return Math.max(0,t)}chooseBowler(e){const t=Math.floor(e.balls/6),n=Object.values(e.bowling);return t!==e.lastOver&&(e.lastOver=t,e.currentBowler=n[t%n.length].player.name),e.bowling[e.currentBowler]}bowl(){const e=this.state,t=e.innings[e.inningsIndex];if(this.isInningsComplete(t)){this.finishInnings();return}const n=t.batting[t.striker],i=this.chooseBowler(t),r=(n.player.batting-i.player.bowling)/300,s=this.matchRng.next();let o="dot",c=0;const p=.031-r*.025;s<p?o="wicket":s<.455-r?o="dot":s<.755-r*.25?(o="run",c=1):s<.83?(o="run",c=2):s<.842?(o="run",c=3):s<.965+r*.3?(o="four",c=4):(o="six",c=6);const v=n.runs;t.balls++,n.balls++,i.balls++,i.runs+=c,t.runs+=c,n.runs+=c,o==="wicket"?(n.out=!0,t.wickets++,i.wickets++,t.wickets<10&&(t.striker=t.nextBatter,t.nextBatter++)):c%2===1&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]),t.balls%6===0&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]);const M=this.atSeats(e.mike),T=this.atSeats(e.jb),w=o==="wicket"?`${n.player.name} is OUT to ${i.player.name}!`:o==="six"?`${n.player.name} launches SIX!`:o==="four"?`${n.player.name} cracks FOUR.`:c?`${n.player.name} takes ${c}.`:`${i.player.name} beats the bat.`,m=[50,100,150,200].find(B=>v<B&&n.runs>=B),g=this.isInningsComplete(t)&&e.inningsIndex===1?6:m?4:o==="wicket"?3:o==="four"||o==="six"?1:0,f={id:++this.eventId,minute:e.minute,innings:e.inningsIndex+1,over:F(t.balls),team:t.team,kind:o,runs:c,batter:n.player.name,bowler:i.player.name,text:m?`${w} ${n.player.name} reaches ${m}.`:w,mikeSaw:M,jbSaw:T,importance:g};if(e.events.push(f),e.latest=f,o==="wicket"||o==="four"||o==="six"||m?this.react(f,m):t.balls%6===0&&M&&(e.notice=`End ${F(t.balls)} · ${t.team} ${t.runs}/${t.wickets}.`),this.isInningsComplete(t)){this.finishInnings();return}Je.includes(t.balls/6)&&!t.drinksTaken.includes(t.balls/6)&&(t.drinksTaken.push(t.balls/6),this.startBreak("drinks",8,`Drinks break after ${t.balls/6} overs`))}atSeats(e){return e.place==="seats"&&!e.travelling}isInningsComplete(e){return e.balls>=300||e.wickets>=10||this.state.inningsIndex===1&&e.runs>this.state.innings[0].runs}react(e,t){const n=this.state,i=e.team==="England";n.crowd=e.kind==="wicket"?i?"groan":"roar":i?"roar":"ripple",n.notice=e.mikeSaw?e.text:"A roar tumbles around Riverside. Mike did not see why.",e.mikeSaw&&(n.mike.mood=b(n.mike.mood+(e.kind==="wicket"&&i?-3:3))),e.mikeSaw&&e.jbSaw&&n.mike.place===n.jb.place&&this.say(t?"milestone":e.kind==="wicket"?i?"england-wicket":"opponent-wicket":e.kind==="six"?"six":i?"england-boundary":"opponent-boundary",5)}startBreak(e,t,n){const i=this.state;i.break={kind:e,left:t,total:t,label:n},i.crowd="break",i.notice=`${n}. The cricket clock is paused; the concourse is not.`,this.say(e==="innings"?"interval":"drinks",8);const r=e==="innings"?{bar:7,food:6,toilet:6}:{bar:5,food:3,toilet:6};for(const s of["bar","food","toilet"])for(let o=0;o<r[s]&&i.queues[s].patrons.length<12;o++)i.queues[s].patrons.push(this.nextPatron())}endBreak(){var n;const e=this.state,t=(n=e.break)==null?void 0:n.kind;e.break=null,this.nextBallAt=e.minute+.8,e.crowd="settled",e.notice=t==="innings"?`The chase begins. ${e.innings[1].team} need ${e.innings[0].runs+1}.`:"Drinks over. Players return to their marks."}finishInnings(){const e=this.state,t=e.innings[0];this.settleAvailableBets(),e.inningsIndex===0?(e.inningsIndex=1,this.startBreak("innings",30,`Innings interval · ${t.team} ${t.runs}/${t.wickets}`),e.speech="Interesting total. Pint?",e.speechUntil=e.minute+10):this.finishMatch()}finishMatch(){const e=this.state,t=e.innings[0],n=e.innings[1];n.runs>t.runs?(e.winner=n.team,e.result=`${n.team} win by ${10-n.wickets} wickets.`):t.runs>n.runs?(e.winner=t.team,e.result=`${t.team} win by ${t.runs-n.runs} runs.`):(e.winner="Tie",e.result=`A tie: both sides finish on ${t.runs}.`),this.settleAvailableBets(),e.phase="result",e.break=null,e.notice=e.result,this.say(e.winner==="England"?"win":"loss",1/0)}settleAvailableBets(){var t,n;const e=this.state;if(((t=e.mikeBet)==null?void 0:t.won)===null)if(e.mikeBet.pick==="England 250+"){const i=e.innings.find(r=>r.team==="England");this.isInningsComplete(i)&&(e.mikeBet.won=i.runs>=250,e.mikeBet.payout=e.mikeBet.won?25:0)}else e.winner&&(e.mikeBet.won=e.mikeBet.pick===e.winner,e.mikeBet.payout=e.mikeBet.won?20:0);((n=e.jbBet)==null?void 0:n.won)===null&&e.winner&&(e.jbBet.won=e.jbBet.pick===e.winner,e.jbBet.payout=e.jbBet.won?20:0)}returnComment(){const e=this.state;if(!this.atSeats(e.jb))return;const t=e.events.filter(s=>s.id>e.lastReturnEvent&&!s.mikeSaw),n=t.filter(s=>s.jbSaw);e.lastReturnEvent=this.eventId;const i=n.filter(s=>s.kind==="wicket").length,r=n.filter(s=>s.kind==="four"||s.kind==="six").length;this.say(i||r?"missed":t.length?"both-missed":"quiet",8)}talk(){const e=this.state;return e.phase!=="match"||!this.atSeats(e.mike)||!this.atSeats(e.jb)||e.mike.activity?!1:(this.say(this.contextualDialogue(),8),e.jb.lastTalk=e.minute,!0)}contextualDialogue(){const e=this.state,t=e.innings[e.inningsIndex];if(e.mike.bladder>72)return"toilet";if(e.mike.hunger>70)return"hungry";if(e.mike.totalSpend>38)return"spending";if(e.mike.sobrietyBand>=3)return"wobbly";if(e.mike.sobrietyBand>=2)return"merry";if(e.inningsIndex===1){const n=Math.max(0,e.innings[0].runs+1-t.runs),i=300-t.balls;return n<=30&&i<=36?"close-finish":G(n,i)>7?"chase-behind":"chase-ahead"}return e.mike.place==="bar"?"bar":e.mike.place==="food"?"food":"quiet"}maybeAmbientDialogue(){const e=this.state;e.minute-e.lastDialogueAt<14||e.mike.place!==e.jb.place||e.mike.travelling||e.jb.travelling||e.mike.activity||this.dialogueRng.next()<.18&&this.say(this.contextualDialogue(),7)}say(e,t=8){const n=this.state,i=Ce(e,this.dialogueRng,n.dialogueHistory.slice(-12));n.speech=i,n.speechUntil=t===1/0?1/0:n.minute+t,n.lastDialogueAt=n.minute,n.dialogueHistory.push(i),n.dialogueHistory.length>20&&n.dialogueHistory.shift()}setSpeed(e){this.state.speed=e}bacForMike(){return L(this.state.mike.alcohol,85,.68)}bacForJB(){return L(this.state.jb.alcohol,78,.68)}sobriety(e){return Ee(this.state[e].sobrietyBand)}drunkGait(e="mike"){return $e(this.state[e].sobrietyBand)}needLabel(e,t,n,i,r){return e<25?t:e<50?n:e<75?i:e<90?r:"Emergency"}moodLabel(){const e=this.state.mike.mood;return e<25?"Miserable":e<45?"Grumbling":e<68?"Content":e<86?"Having a day":"Absolutely flying"}dayScore(){var m,A;const e=this.state,t=e.events.reduce((g,f)=>g+f.importance,0),n=e.events.filter(g=>g.mikeSaw).reduce((g,f)=>g+f.importance,0),i=t?n/t:0,r=(m=e.mikeBet)!=null&&m.won?30:-5,s=Math.round(i*95),o=Math.min(48,e.experience.togetherMinutes*.035+e.experience.sociableMinutes*.12),c=Math.min(45,e.experience.uncomfortableMinutes*.08),p=Math.max(0,e.mike.totalSpend-36),v=Math.pow(p,1.18)*.55,M=Math.max(0,e.experience.peakBac-.075)*650,T=(e.mike.mood-50)*.28;return{total:Math.max(0,Math.round(100+s+o+r+T-c-v-M)),reasons:[`${Math.round(i*100)}% of key cricket witnessed`,`${Math.round(e.experience.togetherMinutes)} minutes with JB`,(A=e.mikeBet)!=null&&A.won?"Free bet came in":"Free bet went west",`£${e.mike.totalSpend.toFixed(2)} spent`,`${Math.round(e.experience.uncomfortableMinutes)} uncomfortable minutes`,`${this.moodLabel()} at the close`]}}scoreboard(){const e=this.state,t=e.innings[e.inningsIndex],n=t.batting[t.striker],i=t.batting[t.nonStriker],r=t.bowling[t.currentBowler],s=t.balls/6,o=e.inningsIndex===1?e.innings[0].runs+1:null,c=o===null?null:Math.max(0,o-t.runs),p=o===null?null:Math.max(0,300-t.balls);return{team:t.team,runs:t.runs,wickets:t.wickets,overs:F(t.balls),striker:(n==null?void 0:n.player.name)??"—",strikerRuns:(n==null?void 0:n.runs)??0,nonStriker:(i==null?void 0:i.player.name)??"—",nonStrikerRuns:(i==null?void 0:i.runs)??0,bowler:(r==null?void 0:r.player.name)??"—",bowlerFigures:r?`${F(r.balls)}–${r.runs}–${r.wickets}`:"—",currentRunRate:s>0?t.runs/s:0,target:o,need:c,ballsRemaining:p,requiredRunRate:c===null||p===null?null:G(c,p)}}}const ee="howzat-v031-high-scores";function Ye(a){return a>=230?"Riverside Legend":a>=190?"Proper Day Out":a>=150?"Useful Knock":"Long Day in the Field"}function te(a){try{const e=JSON.parse(a.getItem(ee)??"[]");return Array.isArray(e)?e.filter(t=>{if(!t||typeof t!="object")return!1;const n=t;return n.player==="MIKE"&&Number.isFinite(n.score)&&typeof n.opponent=="string"&&typeof n.result=="string"&&Number.isInteger(n.sequence)&&typeof n.title=="string"}).sort((t,n)=>n.score-t.score||n.sequence-t.sequence).slice(0,10):[]}catch{return[]}}function ze(a,e){const t={...e,player:"MIKE",title:Ye(e.score)},n=te(a).filter(r=>r.sequence!==e.sequence);n.push(t),n.sort((r,s)=>s.score-r.score||s.sequence-r.sequence);const i=n.slice(0,10);try{a.setItem(ee,JSON.stringify(i))}catch{}return i}const Ve="011ab2a",l=new Ue,ne=document.querySelector("#app"),Ze={seats:le,bar:oe,food:se,toilet:Se},z={seats:pe,bar:he,food:ue,toilet:ce},V=[be,me,ge,fe,ke];let E="",Z="",_="",x=null,P=te(localStorage);ne.innerHTML=`<div class="v03">
  <header class="topbar">
    <div class="brand">HOWZAT<span>!</span><small>v0.31 · ODI DAY OUT · ${Ve}</small></div>
    <div class="top-fixture"><b id="fixture">ENGLAND ODI DAY</b><span id="top-status">RIVERSIDE</span></div>
    <div class="clock"><strong id="clock">10:45</strong><span id="period">GATES OPEN</span></div>
  </header>
  <section id="journey" class="journey hidden">
    <span id="journey-title" class="journey-title"></span>
    <figure><img id="from-pic" alt=""><figcaption id="from-label"></figcaption></figure>
    <div class="route"><div id="route-fans"></div><div id="mike-moving"><img id="mike-moving-img" alt="Mike"></div></div>
    <figure><img id="to-pic" alt=""><figcaption id="to-label"></figcaption></figure>
    <strong id="journey-count"></strong>
  </section>
  <main class="playfield">
    <div id="painting" class="painting"></div>
    <div id="stadium-board" class="stadium-board"></div>
    <div id="reaction" class="reaction"></div>
    <div id="scene-name" class="scene-name"></div>
    <div id="screen" class="screen"></div>
  </main>
  <section class="control-deck">
    <aside class="status-card">
      <div class="status-title"><b>MIKE</b></div>
      <div id="needs" class="needs"></div>
    </aside>
    <nav id="actions" class="actions"></nav>
    <aside class="jb-card"><div><b>JB</b><span id="jb-place"></span><small id="jb-state"></small></div><p id="speech"></p></aside>
  </section>
  <footer class="ticker"><span id="notice"></span><div id="speeds"></div></footer>
</div>`;const d=a=>document.getElementById(a),u=a=>a.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),h=(a,e,t="",n=!1)=>`<button data-action="${e}" ${n?"disabled":""}><b>${a}</b>${t?`<small>${t}</small>`:""}</button>`,_e=a=>({opener:"OPEN",batter:"BAT",keeper:"WK","seam-allrounder":"SEAM AR","spin-allrounder":"SPIN AR",pace:"PACE",spin:"SPIN"})[a.role];function Q(a){return a.map((e,t)=>`<li><span>${t+1}</span><b>${u(e.name)}</b><small>${_e(e)} · BAT ${e.batting}${e.bowling>50?` · BOWL ${e.bowling}`:""}</small></li>`).join("")}function Qe(){var e;const a=l.state;if(a.phase==="title")return`<article class="title-card"><p class="eyebrow">A VERY ENGLISH DAY OUT</p><h1>HOWZAT<span>!</span></h1><h2>v0.31 · International Edition</h2><p>One ODI. Two mates. Three facilities. Far too many decisions.</p>${h("ENTER RIVERSIDE","opponent","England await today’s visitors")}</article>`;if(a.phase==="opponent")return`<article class="setup-card"><p class="eyebrow">TODAY AT RIVERSIDE</p><h2>ENGLAND <span>v</span> ${u(a.opponent.toUpperCase())}</h2><p>Fifty overs a side · first ball 11:00</p><div class="versus"><strong>🏴</strong><i>ODI</i><strong>🏏</strong></div>${h("FREE BETS","bet","No stake. Plenty of bragging rights.")}</article>`;if(a.phase==="bet")return`<article class="setup-card"><p class="eyebrow">COMPLIMENTARY £10 BET</p><h2>Pick your trouble</h2><p>Promotional stake only. It never touches Mike’s spending.</p><div class="choice-row">${h("ENGLAND TO WIN","pick-england")}${h(`${a.opponent.toUpperCase()} TO WIN`,"pick-opponent")}${h("ENGLAND 250+","pick-250")}</div></article>`;if(a.phase==="teams")return`<article class="teams-card"><p class="eyebrow">CONFIRMED XIs</p><div class="teams-continue">${h("GO TO THE TOSS","toss","Exactly one keeper · six bowling options")}</div><div class="team-columns"><section><h2>ENGLAND</h2><ol>${Q(a.englandXI)}</ol></section><section><h2>${u(a.opponent.toUpperCase())}</h2><ol>${Q(a.opponentXI)}</ol></section></div></article>`;if(a.phase==="toss")return`<article class="setup-card toss-card"><p class="eyebrow">THE TOSS</p><div class="coin">£</div><h2>${u(a.tossWinner.toUpperCase())} WIN</h2><p>They choose to <b>${a.tossDecision.toUpperCase()}</b>. ${u(a.battingFirst)} will bat first.</p>${h("FIRST BALL","start","Take your Riverside seat")}</article>`;if(a.phase==="result"){const t=l.dayScore(),n=(r,s)=>s?`${r}: ${u(s.pick)} · ${s.won?`£${s.payout} return`:"lost"}`:"",i=P.map((r,s)=>`<tr class="${r.sequence===a.seed?"current":""}"><td>${s+1}</td><td>${r.player}</td><td>${r.score}</td><td>${u(r.title)}</td><td>v ${u(r.opponent)}</td></tr>`).join("");return`<article class="result-card"><p class="eyebrow">STUMPS AT RIVERSIDE</p><h2>${u(a.result)}</h2><div class="innings-summary">${a.innings.map(r=>`<div><b>${u(r.team)}</b><strong>${r.runs}/${r.wickets}</strong><span>${F(r.balls)} overs</span></div>`).join("")}</div><div class="bet-result">${n("Mike",a.mikeBet)}<br>${n("JB",a.jbBet)}</div><div class="day-score"><small>MIKE’S DAY OUT SCORE</small><strong>${t.total}</strong><em>${u(((e=P.find(r=>r.sequence===a.seed))==null?void 0:e.title)??"")}</em></div><ul class="reasons">${t.reasons.map(r=>`<li>${u(r)}</li>`).join("")}</ul>${h("PLAY ANOTHER ODI","reset","New opponent · new seed")}<p class="jb-final">JB: “${u(a.speech)}”</p><table class="high-scores"><caption>RIVERSIDE HONOURS BOARD</caption><tbody>${i}</tbody></table></article>`}return""}function Xe(){const a=l.state.mike;return a.travelling?a.travelling.left<a.travelling.total/2?a.travelling.to:a.travelling.from:a.place}function et(){var m,A,g,f,B;const e=l.state.mike,t=!!e.travelling||!!e.activity;if(d("journey").classList.toggle("hidden",!t),!t)return;const n=((m=e.activity)==null?void 0:m.kind)==="queued",i=((A=e.activity)==null?void 0:A.kind)==="service",r=((g=e.activity)==null?void 0:g.kind)==="eating",s=((f=e.travelling)==null?void 0:f.from)??e.place,o=((B=e.travelling)==null?void 0:B.to)??e.place,c=d("from-pic"),p=d("to-pic");c.src=n||i?de:z[s],p.src=z[o],d("from-label").textContent=e.travelling?y(s):n?"BACK OF QUEUE":i?"COUNTER":"BEEFY’S",d("to-label").textContent=y(o);const v=d("mike-moving"),M=d("mike-moving-img"),T=e.travelling?1-e.travelling.left/e.travelling.total:e.activity?1-e.activity.left/Math.max(1,e.activity.total):0,w=l.queueAhead();v.classList.toggle("standing",!e.travelling),v.classList.toggle("drunk",!!e.travelling&&l.drunkGait()),v.style.left=e.travelling?`${12+T*76}%`:n?`${Math.max(8,82-w*11)}%`:"82%",M.src=e.travelling?l.drunkGait()?Me:ye:we,d("route-fans").innerHTML=n?Array.from({length:w},(rt,D)=>`<img src="${V[D%V.length]}" style="left:${82-(w-1-D)*Math.min(11,66/Math.max(1,w))}%" alt="spectator ahead">`).join(""):"",d("journey-title").textContent=e.travelling?"MIKE ON THE MOVE":n?"MIKE IN THE QUEUE":r?"MIKE IS EATING":"MIKE AT THE FRONT",d("journey-count").textContent=e.travelling?`${Math.ceil(e.travelling.left)} min walk`:n?`${w} ahead`:`${Math.ceil(e.activity.left)} min`}function tt(){const a=l.state,e=a.mike,t=[["SOBRIETY",0,l.sobriety("mike")],["THIRST",e.thirst,l.needLabel(e.thirst,"Fresh","Dry","Thirsty","Parched")],["HUNGER",e.hunger,l.needLabel(e.hunger,"Fed","Peckish","Hungry","Ravenous")],["BLADDER",e.bladder,l.needLabel(e.bladder,"Fine","Aware","Urgent","Desperate")],["MOOD",e.mood,l.moodLabel()],["SPENT",0,`£${e.totalSpend.toFixed(2)}`],["DRINKS",0,`${e.heldPints+(e.drinking>0?1:0)} carried`]];d("needs").innerHTML=t.map(([n,i,r])=>`<div class="status-row ${i?"":"semantic-only"}"><span>${n}</span>${i?`<i><em style="width:${i}%;--level:${i}"></em></i>`:"<i></i>"}<b>${u(r)}</b></div>`).join(""),d("jb-place").textContent=a.jb.travelling?`walking to ${y(a.jb.travelling.to)}`:y(a.jb.place),d("jb-state").textContent=a.jb.activity?`${a.jb.activity.kind==="queued"?`${l.jbQueueAhead()} ahead for his round`:"buying his round"} · Mike pays £0`:`${l.sobriety("jb")} · ${a.jb.heldPints+(a.jb.drinking>0?1:0)} drinks held`,d("speech").textContent=a.mike.place===a.jb.place&&!a.mike.travelling&&!a.jb.travelling&&a.minute<=a.speechUntil?a.speech:a.mike.place===a.jb.place&&!a.mike.travelling&&!a.jb.travelling?"Watching the day together.":"JB is elsewhere."}function R(a){const e=l.state;return O.filter(t=>t!==a).map(t=>{const n=t==="bar"?"TWELFTH MAN":t==="food"?"BEEFY’S":t==="toilet"?"FINE LEG":"RIVERSIDE SEATS",i=Math.ceil(l.estimatedTripMinutes(t));return h(n,t,t==="seats"?`~${i} min walk`:`${e.queues[t].patrons.length} queued · ~${i} min`)}).join("")}function nt(){const a=l.state,e=a.mike;if(a.phase!=="match"){d("actions").innerHTML="";return}let t="";e.travelling?t=`<div class="busy-copy"><b>Walking to ${y(e.travelling.to)}</b><span>Cricket and queues keep moving.</span></div>`:e.activity?t=`<div class="busy-copy"><b>${e.activity.kind==="queued"?`${l.queueAhead()} ahead at ${y(e.activity.facility)}`:e.activity.kind==="eating"?"Eating the burger":"At the front"}</b><span>${e.activity.kind==="queued"?"New arrivals join behind Mike.":`${Math.ceil(e.activity.left)} match minutes remaining.`}</span></div>`:e.place==="seats"?t=[R("seats"),h("BAR WITH JB","bar-jb","Walk together for a shared round",a.jb.place!=="seats"),h("TALK TO JB","talk","State-aware banter",a.jb.place!=="seats")].join(""):e.place==="bar"?t=a.jb.place==="bar"&&!a.jb.travelling&&!a.jb.activity?[h("2 PINTS","buy-pint-2","£12.40 · one each"),h("4 PINTS","buy-pint-4","£24.80 · two each"),R("bar"),h("SEATS WITH JB","seats-jb","Walk back together")].join(""):[h("1 PINT","buy-pint-1","£6.20"),h("WATER","buy-water","£2.50"),R("bar")].join(""):e.place==="food"?t=h("BEEFY’S BURGER","buy-burger","£7.50 · takes 8 min")+R("food"):t='<div class="busy-copy"><b>Visit complete</b><span>Choose where Mike goes next.</span></div>'+R("toilet"),t!==Z&&(d("actions").innerHTML=t,Z=t)}function at(){const a=l.state;if(d("fixture").textContent=`ENG v ${a.opponent.toUpperCase()}`,a.phase!=="match"&&a.phase!=="result"){d("top-status").textContent="PRE-MATCH",d("stadium-board").innerHTML="",d("clock").textContent="10:45",d("period").textContent="GATES OPEN";return}const e=l.scoreboard();d("top-status").textContent=a.phase==="result"?"FINAL":`${e.team.toUpperCase()} ${e.runs}/${e.wickets}`,d("clock").textContent=Ge(a.minute),d("period").textContent=a.phase==="result"?"RESULT":a.break?a.break.label.toUpperCase():`INNINGS ${a.inningsIndex+1}`;const t=e.target===null?"":`<div class="board-chase"><span>TARGET <b>${e.target}</b></span><span>NEED <b>${e.need}</b></span><span>BALLS <b>${e.ballsRemaining}</b></span><span>RRR <b>${Number.isFinite(e.requiredRunRate)?e.requiredRunRate.toFixed(2):"∞"}</b></span></div>`;d("stadium-board").innerHTML=`<div class="board-heading"><b>RIVERSIDE</b><span>${u(e.team.toUpperCase())}</span></div><div class="board-score"><strong>${e.runs}</strong><i>/</i><strong>${e.wickets}</strong><em>${e.overs} OV</em></div><div class="board-players"><span>BAT ${u(e.striker)} <b>${e.strikerRuns}*</b></span><span>${u(e.nonStriker)} <b>${e.nonStrikerRuns}</b></span><span>BOWL ${u(e.bowler)} <b>${e.bowlerFigures}</b></span></div><div class="board-rates"><span>CRR <b>${e.currentRunRate.toFixed(2)}</b></span></div>${t}`}function W(){const a=l.state,e=Xe();if(a.phase==="result"&&x!==a.seed){const i=l.dayScore();P=ze(localStorage,{score:i.total,opponent:a.opponent,result:a.result,sequence:a.seed}),x=a.seed,E=""}at(),et(),tt(),nt(),d("painting").style.backgroundImage=`url("${Ze[e]}")`,d("painting").className=`painting ${e}`,d("scene-name").textContent=a.mike.travelling?`ON THE WAY TO ${y(a.mike.travelling.to)}`:y(it()).toUpperCase();const t=a.phase==="match"?"":Qe();t!==E&&(d("screen").innerHTML=t,E=t),d("screen").classList.toggle("open",a.phase!=="match"),d("screen").classList.toggle("start-screen",a.phase==="title"),d("screen").style.backgroundImage=a.phase==="title"?`url("${ve}")`:"",d("notice").textContent=a.break?`${a.notice} ${Math.ceil(a.break.left)} min left.`:a.notice,d("reaction").textContent=a.latest&&a.minute-a.latest.minute<2&&["wicket","four","six"].includes(a.latest.kind)?a.latest.kind==="wicket"?"HOWZAT!":a.latest.kind.toUpperCase():"";const n=[1,4,12].map(i=>`<button data-speed="${i}" class="${a.speed===i?"active":""}">${i}×</button>`).join("");n!==_&&(d("speeds").innerHTML=n,_=n)}function it(){return l.state.mike.place}ne.addEventListener("click",a=>{const e=a.target.closest("button");if(!e)return;const t=e.dataset.action,n=e.dataset.speed;n&&l.setSpeed(Number(n)),t==="opponent"&&l.showOpponent(),t==="bet"&&l.showBet(),t==="pick-england"&&l.placeBet("England"),t==="pick-opponent"&&l.placeBet(l.state.opponent),t==="pick-250"&&l.placeBet("England 250+"),t==="toss"&&l.showToss(),t==="start"&&l.startMatch(),t==="reset"&&(l.reset(l.state.seed+1),x=null),(t==="bar"||t==="food"||t==="toilet"||t==="seats")&&l.travel(t),t==="bar-jb"&&l.travel("bar",!0),t==="seats-jb"&&l.travel("seats",!0),t==="talk"&&l.talk(),t!=null&&t.startsWith("buy-")&&l.joinQueue(t.slice(4)),W()});let X=performance.now();function ae(a){const e=Math.min(250,a-X)/1e3;X=a,l.advance(e),W(),requestAnimationFrame(ae)}W();requestAnimationFrame(ae);
