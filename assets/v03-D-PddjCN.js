var ce=Object.defineProperty;var ue=(a,e,t)=>e in a?ce(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var w=(a,e,t)=>ue(a,typeof e!="symbol"?e+"":e,t);import{f as he,a as me,q as be,t as pe,c as ge,b as fe,s as ke,d as ye,e as we,g as Se,h as ve,i as Me}from"./beefys-illustrated-v02-Cpd8_Fu2.js";import{m as ae,a as Te}from"./mike-walk-normal-atlas-DhIZxhQJ.js";import{j as Ae}from"./jb-seated-CrMGP9nC.js";import{S as M}from"./rng-VQFrfh1t.js";const Be="/howzat/assets/twelfth-man-v034-BtFJCro5.png",Re="/howzat/assets/fine-leg-toilets-v034-hFhDT5xF.png",Ee="/howzat/assets/howzat-start-v031-DlSvW_eW.png",Ie="/howzat/assets/mike-walk-BClmFMer.png",je=568,$e=.045,Le=.789,Oe=je*$e*Le,Fe=["Relatively sober","Sociable","Merry","Wobbly","Properly pickled"],xe=[.018,.035,.055,.08],Pe=[.014,.031,.051,.076];function G(a,e,t,n){const r=28*(1+a.foodBuffer*.8),i=a.unabsorbedGrams*(1-Math.exp(-e/r));a.unabsorbedGrams=Math.max(0,a.unabsorbedGrams-i),a.bodyGrams+=i;const s=.015*n*t*10*e/60;a.bodyGrams=Math.max(0,a.bodyGrams-s),a.foodBuffer=Math.max(0,a.foodBuffer-e/150)}function I(a,e,t){return a.bodyGrams/(t*e*10)}function Ne(a,e){a.unabsorbedGrams+=Oe*Math.max(0,e)}function K(a,e){let t=a;for(;t<4&&e>=xe[t];)t++;for(;t>0&&e<Pe[t-1];)t--;return t}function De(a){return Fe[a]}function Ce(a){return a>=3}const j=`# HOWZAT player roster

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
`,P=["England","Australia","India","New Zealand","Pakistan","South Africa","Sri Lanka","West Indies","Bangladesh","Afghanistan","Ireland","Zimbabwe"];function We(a){return a==="Opening batter"?"opener":a==="Wicketkeeper-batter"?"keeper":a==="Seam all-rounder"?"seam-allrounder":a==="Spin all-rounder"?"spin-allrounder":a.includes("spinner")||a.includes("spin")||a.includes("Slow left-arm")?"spin":a.includes("bowler")||a.includes("fast")?"pace":"batter"}function U(a){let e=2166136261;for(const t of a)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function He(a,e,t){const n=We(t),r=U(`${a}:${e}`)%13,i={opener:76,batter:74,keeper:69,"seam-allrounder":62,"spin-allrounder":62,pace:28,spin:31},s={opener:18,batter:20,keeper:8,"seam-allrounder":67,"spin-allrounder":68,pace:78,spin:77},o={opener:1,batter:4,keeper:5,"seam-allrounder":6,"spin-allrounder":6,pace:9,spin:8},d=/Joe Route|Pat Cumin|Virat Koala|Jasprit Bumrah|Kagiso Raba|Rashid Can|Mitchell Santner/.test(e)?7:0;return{name:e,nation:a,sourceRole:t,role:n,batting:Math.min(94,i[n]+r-6+(n==="pace"||n==="spin"?0:d)),bowling:Math.min(94,s[n]+r-6+(n==="pace"||n==="spin"?d:0)),battingPosition:o[n]+U(e)%3}}const qe=Object.fromEntries(P.map(a=>{const e=`
${a}

Player	Role
`,t=j.indexOf(e);if(t<0)throw new Error(`Roster heading missing: ${a}`);const n=P.map(i=>j.indexOf(`
${i}

Player	Role
`,t+e.length)).filter(i=>i>t).sort((i,s)=>i-s)[0]??j.length,r=j.slice(t+e.length,n).trim().split(`
`).filter(i=>i.includes("	"));return[a,r.map(i=>{const[s,o]=i.split("	");return He(a,s.trim(),o.trim())})]}));function Je(a,e){const t=[...a];for(let n=t.length-1;n>0;n--){const r=Math.floor(e.next()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function Ge(a,e,t,n){return Je(a,t).map(r=>({player:r,selectionForm:n(r)+t.next()*24})).sort((r,i)=>i.selectionForm-r.selectionForm).slice(0,e).map(r=>r.player)}function Y(a,e){const t=qe[a],n=[],r=(i,s,o)=>{const d=t.filter(h=>i.includes(h.role)&&!n.includes(h));n.push(...Ge(d,s,e,o))};return r(["opener"],2,i=>i.batting),r(["keeper"],1,i=>i.batting),r(["batter"],2,i=>i.batting),r(["seam-allrounder"],1,i=>i.batting+i.bowling),r(["spin-allrounder"],1,i=>i.batting+i.bowling),r(["pace"],3,i=>i.bowling),r(["spin"],1,i=>i.bowling),n.sort((i,s)=>i.battingPosition-s.battingPosition||s.batting-i.batting)}function Ke(a){const e=P.filter(t=>t!=="England");return e[Math.floor(a.next()*e.length)]}const z={quiet:["You can hear one man unwrapping a sandwich three rows back.","This over has all the urgency of a parish meeting.","Somewhere, a statistician is enjoying this.","Proper cricket. Nothing happening, beautifully."],"good-bowling":["That over came with a padlock.","Properly squeezed them there.","He’s making the bat look decorative.","I could watch that line all afternoon."],"bad-bowling":["That over cost more than your last round.","At least the boundary rope’s getting exercise.","One imagines the captain has some notes.","A generous over. Charitable, even."],accelerating:["They’ve found another gear. Possibly ours.","This is moving rather quickly now.","The fielders are developing a thousand-yard stare.","Every ball suddenly has somewhere urgent to be."],partnership:["These two have settled in. That worries me if they’re theirs.","That stand’s building quietly.","They’ve started running like they’ve met before.","Nobody say partnership. Oh."],"near-milestone":["He’s close now. Don’t jinx it.","A few more and the bat goes up.","You can feel everyone doing the arithmetic.","One tidy shot would do it."],"high-rrr":["That rate has become deeply unfriendly.","Boundaries now. Singles have missed their chance.","The asking rate is asking rather a lot.","Someone needs to introduce the ball to the rope."],sober:["You’re still remarkably composed for a day at the cricket.","A clear head. Suspicious at this hour.","You’ve been nursing that decision for ages.","Not every over requires a pint. Allegedly."],leaving:["I’ll mind the seats. You mind the queue.","Go on. I’ll tell you what you missed.","I’ll guard the view. Bring back something useful.","Don’t let the concourse swallow you."],returning:["There you are. Still two seats, somehow.","Welcome back. You timed that almost well.","The cricket continued in your absence. Rude of it.","Back already? The queue must be behaving."],"england-boundary":["Lovely. Didn’t even need to run.","Threaded it. Like he meant the exact gap.","Four more. Even the bloke with the drum saw that."],"opponent-boundary":["That gap was visible from the burger queue.","We appear to be fielding in another county.","Bit generous. Very hospitable."],"england-wicket":["Oh, for God’s sake.","That was avoidable in several different ways.","He’ll be replaying that one in the bath."],"opponent-wicket":["YES! Never doubted him.","That’s done wonders for the atmosphere.","Send another one out. We’re ready now."],six:["SIX! That’s somebody else’s problem in the car park.","That may have landed in tomorrow.","Magnificent. Completely unnecessary. Perfect."],milestone:["Raise the bat. Pretend this was always under control.","That deserves applause and possibly another round.","Proper innings, that. Put it in the book."],collapse:["This has become a group project with no supervision.","Three wickets in a hurry. Somebody fetch the brakes.","Nobody move. Movement appears to cause wickets.","The scorebook can barely keep up with these exits."],"chase-ahead":["Rate’s comfortable. That makes me nervous.","Plenty in hand. Famous last words.","This is almost suspiciously manageable."],"chase-behind":["Required rate is developing opinions.","We need boundaries now, not good intentions.","Someone should tell them the target is today."],"close-finish":["Nobody breathe. Especially you.","This is why we stayed. Also because the gates are that way.","Every ball matters now. Deeply inconvenient."],drinks:["Eight minutes. Enough time to make one poor decision.","The players get drinks delivered. Luxury.","Quick break. The queues have sensed weakness."],interval:["Thirty minutes. The concourse has declared war.","Interesting total. Pint?","Halfway. How are you feeling about every decision so far?"],hungry:["You’re looking at Beefy’s again.","That scoreboard is starting to resemble a menu.","Get food before you start eating the programme."],toilet:["Yes, go. Please go.","Fine Leg. Immediately. This is not tactical advice.","You’re sitting like a man with a deadline."],merry:["You’ve become very supportive of mid-on.","Everything is funnier at this precise level.","Steady. We have several overs and dignity remaining."],wobbly:["Perhaps water next.","The ground is level. That movement is all you.","Use the handrail. It has no opinion of you."],spending:["Your wallet has had a difficult spell.","At this rate, the free bet is doing heavy emotional work.","Maybe let the next round belong to destiny."],bar:["I’ll guard this patch of carpet.","We came for cricket and found logistics.","The queue is moving. Spiritually."],food:["Beefy’s: where patience meets onions.","That smells better than it has any right to.","If it takes eight minutes, it counts as dining."],"mike-round":["Cheers. Mine next, once these have disappeared.","Two each? Ambitious. I respect the paperwork.","Your round officially entered into evidence."],"jb-round":["My round. I have witnesses.","I said I’d get them. Mark the date.","Financial responsibility has briefly changed hands."],"round-thanks":["You’re a gentleman.","About bloody time.","Lovely. What did I miss?","Good man.","Perfect timing.","Two for me? I take back most of what I said.","That’s service. I shall remember it at my round.","Cheers, Mike. You’ve rescued this over."],missed:["You missed a wicket. Excellent timing.","Lovely shot while you were away. Obviously.","The match waited until you left to become interesting."],"both-missed":["I missed it too. Outstanding work from both of us.","Apparently something happened. We remain uninformed.","A roar, no witnesses, and two excellent excuses."],win:["YES! Never in doubt.","A famous victory, witnessed in strategically selected portions.","England win. Your decisions are retrospectively sound."],loss:["Well. Pub?","A long day, a short post-match analysis.","We gave them every chance, including all the ones they needed."]};function Ue(a,e,t){const n=z[a].filter(i=>!t.includes(i)),r=n.length?n:z[a];return r[Math.floor(e.next()*r.length)]}const Ye={seats:"Riverside seats",bar:"The Twelfth Man",food:"Beefy’s Burgers",toilet:"Fine Leg Toilets"},ze={"pint-1":6.2,"pint-2":12.4,"pint-4":24.8,water:2.5,burger:7.5,toilet:0,"jb-round":0},O={bar:1.25,food:1.7,toilet:1.1},Ve=[17,34],Qe=.7,N=["seats","bar","food","toilet"],E=a=>`${Math.floor(a/6)}.${a%6}`,Ze=a=>{const e=660+Math.floor(a);return`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},S=a=>Ye[a],V=(a,e)=>a!==e&&N.includes(a)&&N.includes(e),F=(a,e)=>e>0?a*6/e:a>0?1/0:0;function Q(a){let e=a|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,e>>>0||1}function g(a){return Math.max(0,Math.min(100,a))}function Z(){return{bodyGrams:0,unabsorbedGrams:0,foodBuffer:0}}class _e{constructor(e=30326){w(this,"state");w(this,"rng");w(this,"matchRng");w(this,"worldRng");w(this,"dialogueRng");w(this,"carry",0);w(this,"nextBallAt",.8);w(this,"eventId",0);w(this,"queuePersonId",0);this.rng=new M(Q(e)),this.matchRng=new M(e^20903),this.worldRng=new M(e^32586),this.dialogueRng=new M(e^11217),this.state=this.fresh(e)}fresh(e){const t=Ke(this.rng),n=Y("England",this.rng),r=Y(t,this.rng),i=this.rng.next()<.5?"England":t,s=this.rng.next()<.5?"England":t,o=i===s?"bat":"field",d=i==="England"?t:"England";return{phase:"title",seed:e,minute:0,opponent:t,englandXI:n,opponentXI:r,battingFirst:i,tossWinner:s,tossDecision:o,inningsIndex:0,innings:[this.newInnings(i,i==="England"?n:r,d==="England"?n:r),this.newInnings(d,d==="England"?n:r,i==="England"?n:r)],break:null,result:"",winner:null,events:[],latest:null,queues:{bar:this.newQueue(2),food:this.newQueue(3),toilet:this.newQueue(1)},mike:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,drinking:0,alcohol:Z(),sobrietyBand:0,thirst:20,hunger:22,bladder:14,mood:70,totalSpend:0,waters:0,burgers:0,toilets:0},jb:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,drinking:0,alcohol:Z(),sobrietyBand:0,mood:72,independentTrip:!1,roundTrip:!1,roundSize:2,returnAt:0,lastTalk:-99},roundOwner:"mike",mikeBet:null,jbBet:null,notice:"Riverside is filling up. England are in town.",speech:"International cricket and a whole day to make questionable decisions.",speechUntil:20,speed:1,crowd:"settled",lastReturnEvent:0,nextJBRoundAt:0,dialogueHistory:[],lastDialogueAt:-99,experience:{togetherMinutes:0,sociableMinutes:0,uncomfortableMinutes:0,peakBac:0}}}newQueue(e){return{patrons:Array.from({length:e},()=>this.nextPatron()),carry:0}}newInnings(e,t,n){const r=[...n].sort((s,o)=>o.bowling-s.bowling).slice(0,5),i={};for(const s of r)i[s.name]={player:s,runs:0,balls:0,wickets:0};return{team:e,xi:t,batting:t.map(s=>({player:s,runs:0,balls:0,out:!1})),bowling:i,runs:0,wickets:0,balls:0,striker:0,nonStriker:1,nextBatter:2,currentBowler:r[0].name,lastOver:-1,drinksTaken:[]}}reset(e=this.state.seed){this.rng=new M(Q(e)),this.matchRng=new M(e^20903),this.worldRng=new M(e^32586),this.dialogueRng=new M(e^11217),this.carry=0,this.nextBallAt=.8,this.eventId=0,this.queuePersonId=0,this.state=this.fresh(e)}showOpponent(){this.state.phase==="title"&&(this.state.phase="opponent")}showBet(){this.state.phase==="opponent"&&(this.state.phase="bet")}placeBet(e){const t=this.state;if(t.phase!=="bet")return;t.mikeBet={pick:e,stake:10,won:null,payout:0};const n=this.rng.next()<.6?"England":t.opponent;t.jbBet={pick:n,stake:10,won:null,payout:0},t.speech=n===e?"Same bet. That feels less reassuring than it should.":`I’m on ${n}. One of us gets to be unbearable.`,t.phase="teams"}showToss(){this.state.phase==="teams"&&(this.state.phase="toss")}startMatch(){const e=this.state;e.phase==="toss"&&(e.phase="match",e.minute=0,this.nextBallAt=.8,e.notice=`${e.battingFirst} take guard. First ball at 11:00.`,e.speech=e.battingFirst==="England"?"Good start. Nobody’s done anything stupid yet.":"Right. Early wicket, then we can discuss refreshments.",e.speechUntil=8)}advance(e){const t=this.state;if(t.phase==="match")for(this.carry+=Math.max(0,e)*t.speed*.28;this.carry+1e-9>=.1&&t.phase==="match";)this.carry-=.1,Math.abs(this.carry)<1e-9&&(this.carry=0),this.step(.1)}advanceMinutes(e){let t=Math.max(0,e);for(;t>=.1&&this.state.phase==="match";)this.step(.1),t-=.1;t>1e-8&&this.state.phase==="match"&&this.step(t)}step(e){const t=this.state,n=Math.floor(t.minute);t.minute+=e,this.updateBodies(e),this.updateTravel(e),this.transferRoundDrinks(),this.updateActivity(e),this.updateQueues(e),Math.floor(t.minute)!==n&&(this.queueArrivals(),this.updateJB(),this.maybeAmbientDialogue()),t.break?(t.break.left-=e,t.break.left<=0&&this.endBreak()):t.minute>=this.nextBallAt&&(this.bowl(),this.nextBallAt=t.minute+Qe)}updateBodies(e){const t=this.state,n=this.consume(t.mike,e);this.consume(t.jb,e),G(t.mike.alcohol,e,85,.68),G(t.jb.alcohol,e,78,.68);const r=I(t.mike.alcohol,85,.68);t.mike.sobrietyBand=K(t.mike.sobrietyBand,r),t.jb.sobrietyBand=K(t.jb.sobrietyBand,I(t.jb.alcohol,78,.68)),t.mike.thirst=g(t.mike.thirst+e*(.19+r*.5)-n*20),t.mike.hunger=g(t.mike.hunger+e*.21),t.mike.bladder=g(t.mike.bladder+e*.13+n*26);const i=Math.max(0,t.mike.thirst-72)+Math.max(0,t.mike.hunger-76)+Math.max(0,t.mike.bladder-74),s=r>=.015&&r<.06?.025:0;t.mike.mood=g(t.mike.mood+e*s-e*i*.0017),t.mike.place===t.jb.place&&!t.mike.travelling&&!t.jb.travelling&&(t.experience.togetherMinutes+=e),t.mike.place===t.jb.place&&!t.mike.travelling&&!t.jb.travelling&&r>=.015&&r<.06&&(t.experience.sociableMinutes+=e),(t.mike.thirst>75||t.mike.hunger>78||t.mike.bladder>78)&&(t.experience.uncomfortableMinutes+=e),t.experience.peakBac=Math.max(t.experience.peakBac,r)}consume(e,t){if(e.drinking<=0&&e.heldPints>0&&(e.heldPints--,e.drinking=1),e.drinking<=0)return 0;const n=Math.min(e.drinking,t/28);return e.drinking-=n,Ne(e.alcohol,n),n}updateTravel(e){const t=this.state;t.jb.travelling&&(t.jb.travelling.left-=e,t.jb.travelling.left<=0&&(t.jb.place=t.jb.travelling.to,t.jb.travelling=null,t.jb.independentTrip&&t.jb.place==="seats"&&(t.jb.independentTrip=!1,this.transferRoundDrinks()))),t.mike.travelling&&(t.mike.travelling.left-=e,t.mike.travelling.left<=0&&(t.mike.place=t.mike.travelling.to,t.mike.travelling=null,t.notice=`Mike arrives at ${S(t.mike.place)}.`,t.mike.place==="seats"&&!this.transferRoundDrinks()&&this.returnComment(),t.mike.place==="toilet"&&this.joinQueue("toilet")))}updateActivity(e){const t=this.state.mike.activity;t&&t.kind!=="queued"&&(t.left-=e,t.kind==="eating"&&(this.state.mike.hunger=g(this.state.mike.hunger-e*5.8),this.state.mike.alcohol.foodBuffer=Math.min(1,this.state.mike.alcohol.foodBuffer+e/t.total)),t.left<=0&&this.finishActivity(t));const n=this.state.jb.activity;if(n&&n.kind==="service"&&(n.left-=e,n.left<=0)){const r=this.state.jb.roundSize/2;this.state.jb.heldPints+=r,this.state.jb.carriedPints+=r,this.state.roundOwner="mike",this.state.jb.activity=null,this.state.jb.roundTrip=!1,this.state.jb.independentTrip=!0,this.state.jb.returnAt=this.state.minute,this.sendJB("seats"),this.state.notice="JB has the round and heads back to the seats.",this.say("jb-round")}}updateQueues(e){for(const t of["bar","food","toilet"]){const n=this.state.queues[t];if(!n.patrons.length){n.carry=0;continue}for(n.carry+=e;n.carry>=O[t]&&n.patrons.length;){n.carry-=O[t];const r=n.patrons.shift();r==="mike"&&this.beginService(t),r==="jb"&&this.beginJBService(t)}}}queueArrivals(){const e=this.state,t=e.break?e.break.kind==="innings"?.78:.58:.11;for(const n of["bar","food","toilet"]){const r=n==="bar"?1:n==="toilet"?.82:.7;e.queues[n].patrons.length<11&&this.worldRng.next()<t*r&&e.queues[n].patrons.push(this.nextPatron())}}updateJB(){const e=this.state;if(!e.jb.activity){if(e.roundOwner==="jb"&&e.mike.place==="seats"&&!e.mike.travelling&&e.jb.place==="seats"&&!e.jb.travelling&&!e.break&&e.minute>=e.nextJBRoundAt&&e.mike.heldPints+e.mike.drinking+e.mike.carriedPints+e.jb.heldPints+e.jb.drinking+e.jb.carriedPints<.01){e.jb.roundSize=e.mike.thirst>60?4:2,this.sendJB("bar"),e.jb.independentTrip=!0,e.jb.roundTrip=!0,e.jb.returnAt=1/0;return}if(!this.letJBBuyRound()){if(e.jb.independentTrip&&!e.jb.travelling&&e.minute>=e.jb.returnAt&&e.jb.place!=="seats"){this.sendJB("seats");return}if(e.jb.place==="seats"&&e.mike.place==="seats"&&!e.mike.travelling&&!e.jb.travelling&&!e.jb.independentTrip&&!e.break&&!e.mike.carriedPints&&!e.jb.carriedPints&&this.worldRng.next()<.008){const t=e.jb.alcohol.bodyGrams>18?"toilet":"bar";this.sendJB(t),e.jb.independentTrip=!0,e.jb.returnAt=e.minute+10}}}}nextPatron(){return`fan-${++this.queuePersonId}`}travel(e,t=!1){const n=this.state,r=n.mike;if(n.phase!=="match"||r.travelling||r.activity||!V(r.place,e))return!1;const i=r.place,s=i==="seats"||e==="seats"?4:6;return r.travelling={from:i,to:e,left:s,total:s},t&&n.jb.place===i&&!n.jb.travelling&&!n.jb.activity&&(n.jb.travelling={from:i,to:e,left:s,total:s}),n.notice=`Mike heads for ${S(e)}. Play continues.`,i==="seats"&&n.jb.place==="seats"&&!t&&this.say("leaving",5),!0}sendJB(e){const t=this.state.jb;if(t.place===e||t.travelling||t.activity)return;const n=t.place,r=n==="seats"||e==="seats"?4:6;t.travelling={from:n,to:e,left:r,total:r}}joinQueue(e){const t=this.state,n=e.startsWith("pint")||e==="water"?"bar":e==="burger"?"food":"toilet";return t.phase!=="match"||t.mike.place!==n||t.mike.travelling||t.mike.activity?!1:(t.mike.activity={kind:"queued",facility:n,purchase:e,left:0,total:0},t.queues[n].patrons.push("mike"),t.notice=`Mike joins the back: ${this.queueAhead()} ${this.queueAhead()===1?"person":"people"} ahead.`,!0)}beginService(e){const t=this.state.mike.activity;if(!t||t.kind!=="queued"||t.facility!==e)return;const n=e==="bar"?2:e==="food"?2.5:2;t.kind="service",t.left=n,t.total=n,this.state.notice=e==="toilet"?"Mike reaches the front. Sweet relief awaits.":"Mike reaches the counter."}beginJBService(e){const t=this.state.jb.activity;!t||t.kind!=="queued"||t.facility!==e||(t.kind="service",t.left=2,t.total=2,this.state.notice="JB reaches the bar. His wallet is finally exposed to daylight.")}finishActivity(e){const t=this.state,n=t.mike;if(e.kind==="eating"){n.activity=null,t.notice="Burger demolished. No medical conclusions drawn.";return}const r=e.purchase;if(n.totalSpend+=ze[r],r==="jb-round")n.heldPints++,t.jb.heldPints++,t.roundOwner="mike",t.notice="JB gets his round in. Miracles happen.",t.speech="Your round next. I have witnesses.",t.speechUntil=t.minute+8;else if(r.startsWith("pint")){const i=Number(r.slice(-1)),s=i===4?2:1;n.heldPints+=s,i>=2&&(n.carriedPints+=i-s),n.mood=g(n.mood+(t.roundOwner==="mike"?5:2)),t.jb.mood=g(t.jb.mood+4),i>=2&&(t.roundOwner="jb",t.nextJBRoundAt=t.minute+45),t.notice=`${i} ${i===1?"pint":"pints"} collected. They’ll be drunk over time.`}else if(r==="water")n.waters++,n.thirst=g(n.thirst-38),n.bladder=g(n.bladder+8),t.notice="Water acquired. Alcohol remains exactly where it was.";else if(r==="burger"){n.burgers++,n.activity={kind:"eating",facility:"food",purchase:r,left:8,total:8},t.notice="Mike starts eating. This takes a while.";return}else n.toilets++,n.bladder=g(n.bladder-86),n.mood=g(n.mood+4),t.notice="Relief. The day can continue.";n.activity=null}letJBBuyRound(){const e=this.state,t=e.mike.heldPints+e.mike.drinking+e.mike.carriedPints,n=e.jb.heldPints+e.jb.drinking+e.jb.carriedPints;return e.phase!=="match"||e.jb.place!=="bar"||e.jb.travelling||e.jb.activity||!e.jb.roundTrip||e.roundOwner!=="jb"||e.minute<e.nextJBRoundAt||t>.01||n>.01?!1:(e.jb.independentTrip=!1,e.jb.returnAt=0,e.jb.activity={kind:"queued",facility:"bar",purchase:"jb-round",left:0,total:0},e.queues.bar.patrons.push("jb"),e.notice=`JB joins the back for his round: ${this.jbQueueAhead()} ahead.`,this.say("jb-round"),!0)}transferRoundDrinks(){const e=this.state;if(e.mike.place!=="seats"||e.jb.place!=="seats"||e.mike.travelling||e.jb.travelling)return!1;const t=e.mike.carriedPints;let n=!1;return t&&(e.jb.heldPints+=t,e.mike.carriedPints=0,n=!0,this.say("round-thanks",8)),e.jb.carriedPints&&(e.mike.heldPints+=e.jb.carriedPints,e.jb.carriedPints=0),n}jbQueueAhead(){const e=this.state.jb.activity;return!e||e.kind!=="queued"?0:Math.max(0,this.state.queues[e.facility].patrons.indexOf("jb"))}estimatedTripMinutes(e){const t=this.state.mike.place;if(!V(t,e))return 0;const n=t==="seats"||e==="seats"?4:6;return e==="seats"?n:n+this.state.queues[e].patrons.length*O[e]+(e==="food"?10.5:2)}estimatedOutingMinutes(e){const t=this.estimatedTripMinutes(e);return this.state.mike.place==="seats"&&e!=="seats"?t+4:t}queueAhead(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons.indexOf("mike");return Math.max(0,t)}queueBehind(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons,n=t.indexOf("mike");return n<0?0:t.length-n-1}chooseBowler(e){const t=Math.floor(e.balls/6),n=Object.values(e.bowling);return t!==e.lastOver&&(e.lastOver=t,e.currentBowler=n[t%n.length].player.name),e.bowling[e.currentBowler]}bowl(){const e=this.state,t=e.innings[e.inningsIndex];if(this.isInningsComplete(t)){this.finishInnings();return}const n=t.batting[t.striker],r=this.chooseBowler(t),i=(n.player.batting-r.player.bowling)/300,s=this.matchRng.next();let o="dot",d=0;const h=.031-i*.025;s<h?o="wicket":s<.455-i?o="dot":s<.755-i*.25?(o="run",d=1):s<.83?(o="run",d=2):s<.842?(o="run",d=3):s<.965+i*.3?(o="four",d=4):(o="six",d=6);const u=n.runs;t.balls++,n.balls++,r.balls++,r.runs+=d,t.runs+=d,n.runs+=d,o==="wicket"?(n.out=!0,t.wickets++,r.wickets++,t.wickets<10&&(t.striker=t.nextBatter,t.nextBatter++)):d%2===1&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]),t.balls%6===0&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]);const p=this.atSeats(e.mike),T=this.atSeats(e.jb),v=o==="wicket"?`${n.player.name} is OUT to ${r.player.name}!`:o==="six"?`${n.player.name} launches SIX!`:o==="four"?`${n.player.name} cracks FOUR.`:d?`${n.player.name} takes ${d}.`:`${r.player.name} beats the bat.`,f=[50,100,150,200].find(B=>u<B&&n.runs>=B),k=this.isInningsComplete(t)&&e.inningsIndex===1?6:f?4:o==="wicket"?3:o==="four"||o==="six"?1:0,y={id:++this.eventId,minute:e.minute,innings:e.inningsIndex+1,over:E(t.balls),team:t.team,kind:o,runs:d,batter:n.player.name,bowler:r.player.name,text:f?`${v} ${n.player.name} reaches ${f}.`:v,mikeSaw:p,jbSaw:T,importance:k};if(e.events.push(y),e.latest=y,o==="wicket"||o==="four"||o==="six"||f?this.react(y,f):t.balls%6===0&&p&&(e.notice=`End ${E(t.balls)} · ${t.team} ${t.runs}/${t.wickets}.`),this.isInningsComplete(t)){this.finishInnings();return}Ve.includes(t.balls/6)&&!t.drinksTaken.includes(t.balls/6)&&(t.drinksTaken.push(t.balls/6),this.startBreak("drinks",8,`Drinks break after ${t.balls/6} overs`))}atSeats(e){return e.place==="seats"&&!e.travelling}isInningsComplete(e){return e.balls>=300||e.wickets>=10||this.state.inningsIndex===1&&e.runs>this.state.innings[0].runs}react(e,t){const n=this.state,r=e.team==="England";n.crowd=e.kind==="wicket"?r?"groan":"roar":r?"roar":"ripple",n.notice=e.mikeSaw?e.text:"A roar tumbles around Riverside. Mike did not see why.",e.mikeSaw&&(n.mike.mood=g(n.mike.mood+(e.kind==="wicket"&&r?-3:3))),e.mikeSaw&&e.jbSaw&&n.mike.place===n.jb.place&&this.say(t?"milestone":e.kind==="wicket"?r?"england-wicket":"opponent-wicket":e.kind==="six"?"six":r?"england-boundary":"opponent-boundary",5)}startBreak(e,t,n){const r=this.state;r.break={kind:e,left:t,total:t,label:n},r.crowd="break",r.notice=`${n}. The cricket clock is paused; the concourse is not.`,this.say(e==="innings"?"interval":"drinks",8);const i=e==="innings"?{bar:7,food:6,toilet:6}:{bar:5,food:3,toilet:6};for(const s of["bar","food","toilet"])for(let o=0;o<i[s]&&r.queues[s].patrons.length<12;o++)r.queues[s].patrons.push(this.nextPatron())}endBreak(){var n;const e=this.state,t=(n=e.break)==null?void 0:n.kind;e.break=null,this.nextBallAt=e.minute+.8,e.crowd="settled",e.notice=t==="innings"?`The chase begins. ${e.innings[1].team} need ${e.innings[0].runs+1}.`:"Drinks over. Players return to their marks."}finishInnings(){const e=this.state,t=e.innings[0];this.settleAvailableBets(),e.inningsIndex===0?(e.inningsIndex=1,this.startBreak("innings",30,`Innings interval · ${t.team} ${t.runs}/${t.wickets}`),e.speech="Interesting total. Pint?",e.speechUntil=e.minute+10):this.finishMatch()}finishMatch(){const e=this.state,t=e.innings[0],n=e.innings[1];n.runs>t.runs?(e.winner=n.team,e.result=`${n.team} win by ${10-n.wickets} wickets.`):t.runs>n.runs?(e.winner=t.team,e.result=`${t.team} win by ${t.runs-n.runs} runs.`):(e.winner="Tie",e.result=`A tie: both sides finish on ${t.runs}.`),this.settleAvailableBets(),e.phase="result",e.break=null,e.notice=e.result,this.say(e.winner==="England"?"win":"loss",1/0)}settleAvailableBets(){var t,n;const e=this.state;if(((t=e.mikeBet)==null?void 0:t.won)===null)if(e.mikeBet.pick==="England 250+"){const r=e.innings.find(i=>i.team==="England");this.isInningsComplete(r)&&(e.mikeBet.won=r.runs>=250,e.mikeBet.payout=e.mikeBet.won?25:0)}else e.winner&&(e.mikeBet.won=e.mikeBet.pick===e.winner,e.mikeBet.payout=e.mikeBet.won?20:0);((n=e.jbBet)==null?void 0:n.won)===null&&e.winner&&(e.jbBet.won=e.jbBet.pick===e.winner,e.jbBet.payout=e.jbBet.won?20:0)}returnComment(){const e=this.state;if(!this.atSeats(e.jb))return;const t=e.events.filter(s=>s.id>e.lastReturnEvent&&!s.mikeSaw),n=t.filter(s=>s.jbSaw);e.lastReturnEvent=this.eventId;const r=n.filter(s=>s.kind==="wicket").length,i=n.filter(s=>s.kind==="four"||s.kind==="six").length;this.say(r||i?"missed":t.length?"both-missed":"returning",8)}talk(){const e=this.state;return e.phase!=="match"||!this.atSeats(e.mike)||!this.atSeats(e.jb)||e.mike.activity?!1:(this.say(this.contextualDialogue(),8),e.jb.lastTalk=e.minute,!0)}contextualDialogue(){const e=this.state,t=e.innings[e.inningsIndex];if(e.break)return e.break.kind==="innings"?"interval":"drinks";if(e.inningsIndex===1){const i=Math.max(0,e.innings[0].runs+1-t.runs),s=300-t.balls;if(i<=30&&s<=36)return"close-finish";if(F(i,s)>9)return"high-rrr"}const n=[t.batting[t.striker],t.batting[t.nonStriker]];if(n.some(i=>[50,100,150].some(s=>i.runs>=s-6&&i.runs<s)))return"near-milestone";if(e.mike.bladder>72)return"toilet";if(e.mike.hunger>70)return"hungry";if(e.mike.totalSpend>38)return"spending";if(e.mike.sobrietyBand>=3)return"wobbly";if(e.mike.sobrietyBand>=2)return"merry";const r=e.events.filter(i=>i.innings===e.inningsIndex+1).slice(-6);if(r.length===6&&r[5].minute-r[0].minute<7){const i=r.reduce((s,o)=>s+o.runs,0);if(i>=18)return"accelerating";if(i>=12)return"bad-bowling";if(i<=2)return"good-bowling"}if(e.events.filter(i=>i.innings===e.inningsIndex+1&&i.kind==="wicket"&&e.minute-i.minute<22).length>=3)return"collapse";if(n.every(i=>i.runs>=30))return"partnership";if(e.inningsIndex===1){const i=Math.max(0,e.innings[0].runs+1-t.runs),s=300-t.balls;return F(i,s)>7?"chase-behind":"chase-ahead"}return e.mike.sobrietyBand===0&&e.minute>75?"sober":e.mike.place==="bar"?"bar":e.mike.place==="food"?"food":"quiet"}maybeAmbientDialogue(){const e=this.state;e.minute-e.lastDialogueAt<14||e.mike.place!==e.jb.place||e.mike.travelling||e.jb.travelling||e.mike.activity||this.dialogueRng.next()<.18&&this.say(this.contextualDialogue(),7)}say(e,t=8){const n=this.state,r=Ue(e,this.dialogueRng,n.dialogueHistory.slice(-12));n.speech=r,n.speechUntil=t===1/0?1/0:n.minute+t,n.lastDialogueAt=n.minute,n.dialogueHistory.push(r),n.dialogueHistory.length>20&&n.dialogueHistory.shift()}setSpeed(e){this.state.speed=e}bacForMike(){return I(this.state.mike.alcohol,85,.68)}bacForJB(){return I(this.state.jb.alcohol,78,.68)}sobriety(e){return De(this.state[e].sobrietyBand)}drunkGait(e="mike"){return Ce(this.state[e].sobrietyBand)}needLabel(e,t,n,r,i){return e<25?t:e<50?n:e<75?r:e<90?i:"Emergency"}moodLabel(){const e=this.state.mike.mood;return e<25?"Miserable":e<45?"Grumbling":e<68?"Content":e<86?"Having a day":"Absolutely flying"}dayScore(){var f,A;const e=this.state,t=e.events.reduce((k,y)=>k+y.importance,0),n=e.events.filter(k=>k.mikeSaw).reduce((k,y)=>k+y.importance,0),r=t?n/t:0,i=(f=e.mikeBet)!=null&&f.won?30:-5,s=Math.round(r*95),o=Math.min(48,e.experience.togetherMinutes*.035+e.experience.sociableMinutes*.12),d=Math.min(45,e.experience.uncomfortableMinutes*.08),h=Math.max(0,e.mike.totalSpend-36),u=Math.pow(h,1.18)*.55,p=Math.max(0,e.experience.peakBac-.075)*650,T=(e.mike.mood-50)*.28;return{total:Math.max(0,Math.round(100+s+o+i+T-d-u-p)),reasons:[`${Math.round(r*100)}% of key cricket witnessed`,`${Math.round(e.experience.togetherMinutes)} minutes with JB`,(A=e.mikeBet)!=null&&A.won?"Free bet came in":"Free bet went west",`£${e.mike.totalSpend.toFixed(2)} spent`,`${Math.round(e.experience.uncomfortableMinutes)} uncomfortable minutes`,`${this.moodLabel()} at the close`]}}scoreboard(){const e=this.state,t=e.innings[e.inningsIndex],n=t.batting[t.striker],r=t.batting[t.nonStriker],i=t.bowling[t.currentBowler],s=t.balls/6,o=e.inningsIndex===1?e.innings[0].runs+1:null,d=o===null?null:Math.max(0,o-t.runs),h=o===null?null:Math.max(0,300-t.balls);return{team:t.team,runs:t.runs,wickets:t.wickets,overs:E(t.balls),striker:(n==null?void 0:n.player.name)??"—",strikerRuns:(n==null?void 0:n.runs)??0,nonStriker:(r==null?void 0:r.player.name)??"—",nonStrikerRuns:(r==null?void 0:r.runs)??0,bowler:(i==null?void 0:i.player.name)??"—",bowlerFigures:i?`${E(i.balls)}–${i.runs}–${i.wickets}`:"—",currentRunRate:s>0?t.runs/s:0,target:o,need:d,ballsRemaining:h,requiredRunRate:d===null||h===null?null:F(d,h)}}}const ie="howzat-v031-high-scores";function Xe(a){return a>=230?"Riverside Legend":a>=190?"Proper Day Out":a>=150?"Useful Knock":"Long Day in the Field"}function re(a){try{const e=JSON.parse(a.getItem(ie)??"[]");return Array.isArray(e)?e.filter(t=>{if(!t||typeof t!="object")return!1;const n=t;return n.player==="MIKE"&&Number.isFinite(n.score)&&typeof n.opponent=="string"&&typeof n.result=="string"&&Number.isInteger(n.sequence)&&typeof n.title=="string"}).sort((t,n)=>n.score-t.score||n.sequence-t.sequence).slice(0,10):[]}catch{return[]}}function et(a,e){const t={...e,player:"MIKE",title:Xe(e.score)},n=re(a).filter(i=>i.sequence!==e.sequence);n.push(t),n.sort((i,s)=>s.score-i.score||s.sequence-i.sequence);const r=n.slice(0,10);try{a.setItem(ie,JSON.stringify(r))}catch{}return r}const se="2ab4539";function tt(a){const e=a.mike,t=(o,d,h)=>({name:o,label:h[d<25?0:d<50?1:d<75?2:d<90?3:4],tone:d>=75?"urgent":d>=50?"watch":"calm"}),n=["STONE COLD SOBER","LOOSENED UP","MERRY","WOBBLY","LEATHERED"],r=[t("THIRST",e.thirst,["REFRESHED","FINE","THIRSTY","PARCHED","DESPERATE"]),t("HUNGER",e.hunger,["FULL","FINE","PECKISH","HUNGRY","STARVING"]),t("BLADDER",e.bladder,["EMPTY","FINE","AWARE OF IT","NEED A WEE","DESPERATE"])],i={THIRST:e.thirst,HUNGER:e.hunger,BLADDER:e.bladder},s=r.reduce((o,d)=>i[d.name]>i[o.name]?d:o);return{sobriety:{name:"SOBRIETY",label:n[e.sobrietyBand],tone:e.sobrietyBand>=3?"urgent":e.sobrietyBand===0?"watch":"calm"},sobrietyBand:e.sobrietyBand,mood:e.mood<25?"MISERABLE":e.mood<45?"GRUMBLING":e.mood<68?"CONTENT":e.mood<86?"LOVING IT":"ABSOLUTELY FLYING",needs:r,priority:e.sobrietyBand>=3?"SOBRIETY":i[s.name]>=75?s.name:null,drinking:Math.max(0,Math.min(1,e.drinking)),reserve:e.heldPints,forJB:e.carriedPints,spent:`£${e.totalSpend.toFixed(2)}`,round:a.roundOwner}}function nt(a,e){const t=Math.max(a/1589,e/990),n=(a-1589*t)/2,r=(e-990*t)/2;return{left:n+627*t,top:r+374*t,width:340*t,height:98*t}}function at(a,e){var t;if(((t=a.break)==null?void 0:t.kind)==="innings"){const n=a.innings[0];return{team:n.team,runs:n.runs,wickets:n.wickets,overs:`${Math.floor(n.balls/6)}.${n.balls%6}`,interval:!0,batters:[],bowler:null,chase:{need:n.runs+1,balls:300,target:n.runs+1}}}return{team:e.team,runs:e.runs,wickets:e.wickets,overs:e.overs,interval:!1,batters:[{name:e.striker,runs:e.strikerRuns,striker:!0},{name:e.nonStriker,runs:e.nonStrikerRuns,striker:!1}],bowler:{name:e.bowler,figures:e.bowlerFigures},chase:e.target===null?null:{need:e.need,balls:e.ballsRemaining,target:e.target}}}function it(a,e=16){const t=a.trim().split(/\s+/),n=t.length>1?t[t.length-1]:a;return n.length<=e?n:`${n.slice(0,e-1)}…`}const oe=()=>crypto.getRandomValues(new Uint32Array(1))[0],c=new _e(oe()),W=document.querySelector("#app"),rt={seats:me,bar:Be,food:he,toilet:Re},_={seats:ke,bar:fe,food:ge,toilet:pe},$=[ye,we,Se,ve,Me];let x="",X="",ee="",D=null,C=re(localStorage);W.innerHTML=`<div class="v03">
  <header class="topbar">
    <div class="brand">HOWZAT<span>!</span><small>v0.34 · ODI DAY OUT · ${se}</small></div>
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
      <div class="mike-card-head">
        <div class="mike-portrait-shell"><img src="${ae}" alt="Mike"></div>
        <div class="mike-character"><div class="status-title"><b>MIKE</b><span id="mike-spend"></span></div><strong id="mike-condition"></strong><span id="mike-mood"></span></div>
      </div>
      <div id="needs" class="needs"></div>
    </aside>
    <nav id="actions" class="actions"></nav>
    <aside class="jb-card"><img class="jb-portrait" src="${Ae}" alt="JB"><div class="jb-details"><b>JB</b><span id="jb-place"></span><small id="jb-state"></small><p id="speech" class="speech-bubble"></p></div></aside>
  </section>
  <footer class="ticker"><span id="notice"></span><div id="speeds"></div></footer>
</div>`;const l=a=>document.getElementById(a),m=a=>a.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),b=(a,e,t="",n=!1)=>`<button data-action="${e}" ${n?"disabled":""}><b>${a}</b>${t?`<small>${t}</small>`:""}</button>`,st=a=>({opener:"OPEN",batter:"BAT",keeper:"WK","seam-allrounder":"SEAM AR","spin-allrounder":"SPIN AR",pace:"PACE",spin:"SPIN"})[a.role];function te(a){return a.map((e,t)=>`<li><span>${t+1}</span><b>${m(e.name)}</b><small>${st(e)} · BAT ${e.batting}${e.bowling>50?` · BOWL ${e.bowling}`:""}</small></li>`).join("")}function ot(){var e;const a=c.state;if(a.phase==="title")return`<article class="title-card"><p class="eyebrow">A VERY ENGLISH DAY OUT</p><h1>HOWZAT<span>!</span></h1><h2>v0.34 · International Edition</h2><p>One ODI. Two mates. Three facilities. Far too many decisions.</p>${b("ENTER RIVERSIDE","opponent","England await today’s visitors")}<small class="start-build">v0.34 · ${se}</small></article>`;if(a.phase==="opponent")return`<article class="setup-card arrival-card"><p class="eyebrow">WELCOME TO RIVERSIDE</p><div class="match-ticket"><small>TODAY’S INTERNATIONAL</small><h2>ENGLAND <span>v</span> ${m(a.opponent.toUpperCase())}</h2><p>50 overs a side · gates open 10:45 · first ball 11:00</p><b>MIKE + JB · TWO SEATS · ONE QUESTIONABLE PLAN</b></div>${b("PICK THE FREE BET","bet","No stake. Plenty of bragging rights.")}</article>`;if(a.phase==="bet")return`<article class="setup-card bet-card"><p class="eyebrow">COMPLIMENTARY £10 BET</p><h2>Pick your trouble</h2><p>One free flutter for the day. Mike’s wallet remains untouched.</p><div class="choice-row">${b("ENGLAND TO WIN","pick-england")}${b(`${a.opponent.toUpperCase()} TO WIN`,"pick-opponent")}${b("ENGLAND 250+","pick-250")}</div></article>`;if(a.phase==="teams")return`<article class="teams-card"><p class="eyebrow">CONFIRMED XIs</p><div class="teams-continue">${b("GO TO THE TOSS","toss","Exactly one keeper · six bowling options")}</div><div class="team-columns"><section><h2>ENGLAND</h2><ol>${te(a.englandXI)}</ol></section><section><h2>${m(a.opponent.toUpperCase())}</h2><ol>${te(a.opponentXI)}</ol></section></div></article>`;if(a.phase==="toss")return`<article class="setup-card toss-card"><p class="eyebrow">OUT AT THE SQUARE</p><div class="toss-party"><span>ENG</span><div class="coin" aria-label="coin toss">£</div><span>${m(a.opponent.slice(0,3).toUpperCase())}</span></div><div class="toss-reveal"><h2>${m(a.tossWinner.toUpperCase())} WIN THE TOSS</h2><p>They choose to <b>${a.tossDecision.toUpperCase()}</b>. ${m(a.battingFirst)} will bat first.</p>${b("FIRST BALL","start","Take your Riverside seat")}</div></article>`;if(a.phase==="result"){const t=c.dayScore(),n=(i,s)=>s?`${i}: ${m(s.pick)} · ${s.won?`£${s.payout} return`:"lost"}`:"",r=C.map((i,s)=>`<tr class="${i.sequence===a.seed?"current":""}"><td>${s+1}</td><td>${i.player}</td><td>${i.score}</td><td>${m(i.title)}</td><td>v ${m(i.opponent)}</td></tr>`).join("");return`<article class="result-card"><p class="eyebrow">STUMPS AT RIVERSIDE</p><h2>${m(a.result)}</h2><div class="innings-summary">${a.innings.map(i=>`<div><b>${m(i.team)}</b><strong>${i.runs}/${i.wickets}</strong><span>${E(i.balls)} overs</span></div>`).join("")}</div><div class="bet-result">${n("Mike",a.mikeBet)}<br>${n("JB",a.jbBet)}</div><div class="day-score"><small>MIKE’S DAY OUT SCORE</small><strong>${t.total}</strong><em>${m(((e=C.find(i=>i.sequence===a.seed))==null?void 0:e.title)??"")}</em></div><ul class="reasons">${t.reasons.map(i=>`<li>${m(i)}</li>`).join("")}</ul>${b("PLAY ANOTHER ODI","reset","New opponent · new seed")}<p class="jb-final">JB: “${m(a.speech)}”</p><table class="high-scores"><caption>RIVERSIDE HONOURS BOARD</caption><tbody>${r}</tbody></table></article>`}return""}function lt(){const a=c.state.mike;return a.travelling?a.travelling.left<a.travelling.total/2?a.travelling.to:a.travelling.from:a.place}function dt(){var k,y,B,q,J;const e=c.state.mike,t=!!e.travelling||!!e.activity;if(l("journey").classList.toggle("hidden",!t),!t)return;const n=((k=e.activity)==null?void 0:k.kind)==="queued",r=((y=e.activity)==null?void 0:y.kind)==="service",i=((B=e.activity)==null?void 0:B.kind)==="eating",s=((q=e.travelling)==null?void 0:q.from)??e.place,o=((J=e.travelling)==null?void 0:J.to)??e.place,d=l("from-pic"),h=l("to-pic");d.src=n||r?be:_[s],h.src=_[o],l("from-label").textContent=e.travelling?S(s):n?"BACK OF QUEUE":r?"COUNTER":"BEEFY’S",l("to-label").textContent=S(o);const u=l("mike-moving"),p=l("mike-moving-img"),T=e.travelling?1-e.travelling.left/e.travelling.total:e.activity?1-e.activity.left/Math.max(1,e.activity.total):0,v=c.queueAhead(),f=c.queueBehind(),A=Math.max(24,82-v*8);u.classList.toggle("standing",!e.travelling),u.classList.toggle("drunk",!!e.travelling&&c.drunkGait()),u.style.left=e.travelling?`${12+T*76}%`:n?`${A}%`:"82%",p.src=e.travelling?c.drunkGait()?Ie:Te:ae,l("route-fans").innerHTML=n?[...Array.from({length:Math.min(v,7)},(de,R)=>`<img src="${$[R%$.length]}" style="left:${A+(R+1)*(62/Math.max(1,Math.min(v,7)))}%" alt="spectator ahead">`),...Array.from({length:Math.min(f,5)},(de,R)=>`<img src="${$[(v+R)%$.length]}" style="left:${Math.max(3,A-(R+1)*9)}%" alt="spectator behind Mike">`)].join(""):"",l("journey-title").textContent=e.travelling?"MIKE ON THE MOVE":n?"MIKE IN THE QUEUE":i?"MIKE IS EATING":"MIKE AT THE FRONT",l("journey-count").textContent=e.travelling?`${Math.ceil(e.travelling.left)} min walk`:n?`${v} ahead · ${f} behind`:`${Math.ceil(e.activity.left)} min`}function ct(){const a=c.state,e=tt(a);l("mike-spend").textContent=`SPENT ${e.spent}`,l("mike-condition").textContent=e.sobriety.label,l("mike-mood").textContent=e.mood;const t=l("needs").closest(".status-card");t.className=`status-card sobriety-${e.sobrietyBand}${e.priority?" has-priority":""}`;const n={THIRST:"💧",HUNGER:"🍔",BLADDER:"🚽"},r=(u,p,T)=>`<div class="need-card ${T} ${e.priority===u?"priority":""}"><i>${n[u]}</i><span>${u}</span><b>${m(p)}</b></div>`,i=(u,p="")=>`<i class="pint-glass ${p}" aria-hidden="true"><em style="height:${Math.round(u*100)}%"></em></i>`,s=(u,p="")=>u?`${i(1,p)}<b>×${u}</b>`:"<strong>—</strong>";l("needs").innerHTML=`<div class="need-list">${e.needs.map(u=>r(u.name,u.label,u.tone)).join("")}</div><div class="pint-shelf"><div><span>IN HAND</span><figure>${e.drinking>.001?i(e.drinking):"<strong>—</strong>"}</figure></div><div><span>SPARE</span><figure>${s(e.reserve)}</figure></div><div class="jb-stock"><span>FOR JB</span><figure>${s(e.forJB,"for-jb")}</figure></div><small>${e.round==="mike"?"MIKE’S ROUND":"JB’S ROUND NEXT"}</small></div>`,l("jb-place").textContent=a.jb.travelling?`walking to ${S(a.jb.travelling.to)}`:S(a.jb.place),l("jb-state").textContent=a.jb.activity?`${a.jb.activity.kind==="queued"?`${c.jbQueueAhead()} ahead for his round`:"buying his round"} · Mike pays £0`:`${c.sobriety("jb")} · ${a.jb.heldPints+(a.jb.drinking>0?1:0)} drinks held${a.jb.carriedPints?` · ${a.jb.carriedPints} for Mike`:""}`;const o=a.mike.place===a.jb.place&&!a.mike.travelling&&!a.jb.travelling;l("speech").closest(".jb-card").classList.toggle("away",!o);const h=l("speech");h.textContent=o&&a.minute<=a.speechUntil?a.speech:"",h.classList.toggle("hidden",!h.textContent)}function L(a){const e=c.state;return N.filter(t=>t!==a).map(t=>{const n=t==="bar"?"TWELFTH MAN":t==="food"?"BEEFY’S":t==="toilet"?"FINE LEG TOILETS":"RIVERSIDE SEATS",r=Math.ceil(c.estimatedTripMinutes(t)),i=a==="seats"&&t!=="seats"?Math.ceil(c.estimatedOutingMinutes(t)):r;return b(n,t,t==="seats"?`~${r} min walk`:`${e.queues[t].patrons.length} queued · ~${i} min ${a==="seats"?"away":"trip"}`)}).join("")}function ut(){const a=c.state,e=a.mike;if(a.phase!=="match"){l("actions").innerHTML="";return}let t="";if(e.travelling)t=`<div class="busy-copy"><b>Walking to ${S(e.travelling.to)}</b><span>Cricket and queues keep moving.</span></div>`;else if(e.activity)t=`<div class="busy-copy"><b>${e.activity.kind==="queued"?`${c.queueAhead()} ahead at ${S(e.activity.facility)}`:e.activity.kind==="eating"?"Eating the burger":"At the front"}</b><span>${e.activity.kind==="queued"?"New arrivals join behind Mike.":`${Math.ceil(e.activity.left)} match minutes remaining.`}</span></div>`;else if(e.place==="seats")t=[L("seats"),a.roundOwner==="mike"?b("GO FOR THE ROUND","bar","Mike goes alone · JB watches"):"",b("TALK TO JB","talk","State-aware banter",a.jb.place!=="seats")].join("");else if(e.place==="bar"){const n=a.roundOwner==="mike"&&e.heldPints+e.drinking+e.carriedPints<.01;t=[n?b("2 PINTS","buy-pint-2","£12.40 · one each"):"",n?b("4 PINTS","buy-pint-4","£24.80 · two each"):"",b("1 PINT","buy-pint-1","£6.20"),b("WATER","buy-water","£2.50"),L("bar")].join("")}else e.place==="food"?t=b("BEEFY’S BURGER","buy-burger","£7.50 · takes 8 min")+L("food"):t='<div class="busy-copy"><b>Visit complete</b><span>Choose where Mike goes next.</span></div>'+L("toilet");t!==X&&(l("actions").innerHTML=t,X=t)}function ht(){const a=c.state;if(l("fixture").textContent=`ENG v ${a.opponent.toUpperCase()}`,a.phase!=="match"&&a.phase!=="result"){l("top-status").textContent="PRE-MATCH",l("stadium-board").innerHTML="",l("clock").textContent="10:45",l("period").textContent="GATES OPEN";return}const e=c.scoreboard(),t=at(a,e);l("top-status").textContent=a.phase==="result"?"FINAL":`${t.team.toUpperCase()} ${t.runs}/${t.wickets}`,l("clock").textContent=Ze(a.minute),l("period").textContent=a.phase==="result"?"RESULT":a.break?a.break.label.toUpperCase():`INNINGS ${a.inningsIndex+1}`;const n=t.interval?`<div class="board-interval">INTERVAL <b>TARGET ${t.chase.target}</b></div>`:t.chase?`<div class="board-chase"><span>NEED <b>${t.chase.need}</b></span><span>FROM <b>${t.chase.balls}</b></span></div>`:`<div class="board-players">${t.batters.map(r=>`<span>${r.striker?"▶":""}${m(it(r.name))} <b>${r.runs}</b></span>`).join("")}</div>`;l("stadium-board").innerHTML=`<div class="board-heading"><b>RIVERSIDE</b><span>${m(t.team.toUpperCase())}</span></div><div class="board-score"><strong>${t.runs}</strong><i>–</i><strong>${t.wickets}</strong><em>${t.overs} OV</em></div>${n}`}function H(){const a=c.state,e=lt();if(a.phase==="result"&&D!==a.seed){const i=c.dayScore();C=et(localStorage,{score:i.total,opponent:a.opponent,result:a.result,sequence:a.seed}),D=a.seed,x=""}ht(),dt(),ct(),ut(),W.firstElementChild.classList.toggle("prematch",!["match","result"].includes(a.phase)),l("painting").style.backgroundImage=`url("${rt[e]}")`,l("painting").className=`painting ${e}`,l("scene-name").textContent=a.mike.travelling?`ON THE WAY TO ${S(a.mike.travelling.to)}`:S(mt()).toUpperCase();const n=a.phase==="match"?"":ot();if(n!==x&&(l("screen").innerHTML=n,x=n),l("screen").classList.toggle("open",a.phase!=="match"),l("screen").classList.toggle("start-screen",a.phase==="title"),l("screen").style.backgroundImage=a.phase==="title"?`url("${Ee}")`:"",a.phase==="title"){const i=l("screen").querySelector(".title-card button");if(i){const s=nt(l("screen").clientWidth,l("screen").clientHeight);Object.assign(i.style,{left:`${s.left}px`,top:`${s.top}px`,width:`${s.width}px`,height:`${s.height}px`});const o=s.width/340,d=l("screen").querySelector(".title-card h2");d&&Object.assign(d.style,{left:`${s.left-48*o}px`,top:`${s.top-97*o}px`,width:`${436*o}px`,height:`${47*o}px`,fontSize:`${37*o}px`})}}l("notice").textContent=a.break?`${a.notice} ${Math.ceil(a.break.left)} min left.`:a.notice,l("reaction").textContent=a.latest&&a.minute-a.latest.minute<2&&["wicket","four","six"].includes(a.latest.kind)?a.latest.kind==="wicket"?"HOWZAT!":a.latest.kind.toUpperCase():"";const r=[1,4,12].map(i=>`<button data-speed="${i}" class="${a.speed===i?"active":""}">${i}×</button>`).join("");r!==ee&&(l("speeds").innerHTML=r,ee=r)}function mt(){return c.state.mike.place}W.addEventListener("click",a=>{const e=a.target.closest("button");if(!e)return;const t=e.dataset.action,n=e.dataset.speed;n&&c.setSpeed(Number(n)),t==="opponent"&&c.showOpponent(),t==="bet"&&c.showBet(),t==="pick-england"&&c.placeBet("England"),t==="pick-opponent"&&c.placeBet(c.state.opponent),t==="pick-250"&&c.placeBet("England 250+"),t==="toss"&&c.showToss(),t==="start"&&c.startMatch(),t==="reset"&&(c.reset(oe()),D=null),(t==="bar"||t==="food"||t==="toilet"||t==="seats")&&c.travel(t),t==="bar-jb"&&c.travel("bar",!0),t==="seats-jb"&&c.travel("seats",!0),t==="talk"&&c.talk(),t!=null&&t.startsWith("buy-")&&c.joinQueue(t.slice(4)),H()});let ne=performance.now();function le(a){const e=Math.min(250,a-ne)/1e3;ne=a,c.advance(e),H(),requestAnimationFrame(le)}H();requestAnimationFrame(le);
