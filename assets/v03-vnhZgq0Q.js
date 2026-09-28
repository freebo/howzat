var Ie=Object.defineProperty;var Oe=(n,e,t)=>e in n?Ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var y=(n,e,t)=>Oe(n,typeof e!="symbol"?e+"":e,t);import{f as Ce,q as Le,t as Ne,a as Pe,b as We,s as De}from"./beefys-illustrated-v02-BJ9QZcp0.js";import{m as ve,a as qe}from"./mike-walk-normal-atlas-DhIZxhQJ.js";import{j as He}from"./jb-seated-CrMGP9nC.js";import{S as w}from"./rng-VQFrfh1t.js";const Je="/howzat/assets/riverside-seats-hud-v035-BFzXbhql.png",Ge="/howzat/assets/twelfth-man-v034-BtFJCro5.png",Ke="/howzat/assets/fine-leg-toilets-v034-hFhDT5xF.png",Ye="/howzat/assets/howzat-start-v031-DlSvW_eW.png",Ue="/howzat/assets/mike-walk-BClmFMer.png",ze="/howzat/assets/older-woman-BG-1pgs4.png",Ve="/howzat/assets/striped-shirt-man-C9eI7FhY.png",_e="/howzat/assets/cricket-cap-woman-B7BUt9tc.png",Qe="/howzat/assets/panama-man-CTHFEkDw.png",Ze="/howzat/assets/retro-jacket-man-DTgNPNfp.png",Xe="/howzat/assets/flat-cap-man-DfrCwmtQ.png",et="/howzat/assets/rain-jacket-woman-Bwv6rJpV.png",tt="/howzat/assets/red-sweater-woman-iAsD1fTm.png",nt=.03,Z=.006,at=2e-4,it=568,rt=.045,st=.789,ot=it*rt*st,lt=["STONE COLD SOBER","LOOSENED UP","MERRY","WOBBLY","LEATHERED"],ct=[.018,.035,.055,.08],dt=[.014,.031,.051,.076];function X(n,e,t,a,i=1){const r=28*(1+n.foodBuffer*.8),s=n.unabsorbedGrams*(1-Math.exp(-e/r));n.unabsorbedGrams=Math.max(0,n.unabsorbedGrams-s),n.bodyGrams+=s;const o=nt*i*a*t*10*e/60,l=Math.min(n.bodyGrams,o);n.eliminatedGrams+=l,n.bodyGrams=Math.max(0,n.bodyGrams-l),n.foodBuffer=Math.max(0,n.foodBuffer-e/150)}function ee(n,e){let t=((n|0)^(e==="mike"?1831565813:461845907))>>>0;return t||(t=1),t^=t<<13,t^=t>>>17,t^=t<<5,.95+(t>>>0)/4294967296*.095}function te(n){n.waterRelief=Math.min(Z,n.waterRelief+Z)}function ne(n,e){n.waterRelief=Math.max(0,n.waterRelief-at*e)}function ut(n,e){return Math.max(0,n-e)}function ae(n,e,t){return n.bodyGrams/(t*e*10)}function ht(n,e){const t=ot*Math.max(0,e);n.unabsorbedGrams+=t,n.ingestedGrams+=t}function ie(n,e){let t=n;for(;t<4&&e>=ct[t];)t++;for(;t>0&&e<dt[t-1];)t--;return t}function Te(n){return lt[n]}function mt(n){return n>=3}const C=`# HOWZAT player roster

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
`,D=["England","Australia","India","New Zealand","Pakistan","South Africa","Sri Lanka","West Indies","Bangladesh","Afghanistan","Ireland","Zimbabwe"];function bt(n){return n==="Opening batter"?"opener":n==="Wicketkeeper-batter"?"keeper":n==="Seam all-rounder"?"seam-allrounder":n==="Spin all-rounder"?"spin-allrounder":n.includes("spinner")||n.includes("spin")||n.includes("Slow left-arm")?"spin":n.includes("bowler")||n.includes("fast")?"pace":"batter"}function re(n){let e=2166136261;for(const t of n)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function pt(n,e,t){const a=bt(t),i=re(`${n}:${e}`)%13,r={opener:76,batter:74,keeper:69,"seam-allrounder":62,"spin-allrounder":62,pace:28,spin:31},s={opener:18,batter:20,keeper:8,"seam-allrounder":67,"spin-allrounder":68,pace:78,spin:77},o={opener:1,batter:4,keeper:5,"seam-allrounder":6,"spin-allrounder":6,pace:9,spin:8},l=/Joe Route|Pat Cumin|Virat Koala|Jasprit Bumrah|Kagiso Raba|Rashid Can|Mitchell Santner/.test(e)?7:0;return{name:e,nation:n,sourceRole:t,role:a,batting:Math.min(94,r[a]+i-6+(a==="pace"||a==="spin"?0:l)),bowling:Math.min(94,s[a]+i-6+(a==="pace"||a==="spin"?l:0)),battingPosition:o[a]+re(e)%3}}const gt=Object.fromEntries(D.map(n=>{const e=`
${n}

Player	Role
`,t=C.indexOf(e);if(t<0)throw new Error(`Roster heading missing: ${n}`);const a=D.map(r=>C.indexOf(`
${r}

Player	Role
`,t+e.length)).filter(r=>r>t).sort((r,s)=>r-s)[0]??C.length,i=C.slice(t+e.length,a).trim().split(`
`).filter(r=>r.includes("	"));return[n,i.map(r=>{const[s,o]=r.split("	");return pt(n,s.trim(),o.trim())})]}));function ft(n,e){const t=[...n];for(let a=t.length-1;a>0;a--){const i=Math.floor(e.next()*(a+1));[t[a],t[i]]=[t[i],t[a]]}return t}function kt(n,e,t,a){return ft(n,t).map(i=>({player:i,selectionForm:a(i)+t.next()*24})).sort((i,r)=>r.selectionForm-i.selectionForm).slice(0,e).map(i=>i.player)}function se(n,e){const t=gt[n],a=[],i=(r,s,o)=>{const l=t.filter(h=>r.includes(h.role)&&!a.includes(h));a.push(...kt(l,s,e,o))};return i(["opener"],2,r=>r.batting),i(["keeper"],1,r=>r.batting),i(["batter"],2,r=>r.batting),i(["seam-allrounder"],1,r=>r.batting+r.bowling),i(["spin-allrounder"],1,r=>r.batting+r.bowling),i(["pace"],3,r=>r.bowling),i(["spin"],1,r=>r.bowling),a.sort((r,s)=>r.battingPosition-s.battingPosition||s.batting-r.batting)}function yt(n){const e=D.filter(t=>t!=="England");return e[Math.floor(n.next()*e.length)]}const wt={quiet:["You can hear one man unwrapping a sandwich three rows back.","This over has all the urgency of a parish meeting.","Somewhere, a statistician is enjoying this.","Proper cricket. Nothing happening, beautifully."],"good-bowling":["That over came with a padlock.","Properly squeezed them there.","He’s making the bat look decorative.","I could watch that line all afternoon."],"bad-bowling":["That over cost more than your last round.","At least the boundary rope’s getting exercise.","One imagines the captain has some notes.","A generous over. Charitable, even."],accelerating:["They’ve found another gear. Possibly ours.","This is moving rather quickly now.","The fielders are developing a thousand-yard stare.","Every ball suddenly has somewhere urgent to be."],partnership:["These two have settled in. That worries me if they’re theirs.","That stand’s building quietly.","They’ve started running like they’ve met before.","Nobody say partnership. Oh."],"near-milestone":["He’s close now. Don’t jinx it.","A few more and the bat goes up.","You can feel everyone doing the arithmetic.","One tidy shot would do it."],"high-rrr":["That rate has become deeply unfriendly.","Boundaries now. Singles have missed their chance.","The asking rate is asking rather a lot.","Someone needs to introduce the ball to the rope."],sober:["You’re still remarkably composed for a day at the cricket.","A clear head. Suspicious at this hour.","You’ve been nursing that decision for ages.","Not every over requires a pint. Allegedly."],leaving:["I’ll mind the seats. You mind the queue.","Go on. I’ll tell you what you missed.","I’ll guard the view. Bring back something useful.","Don’t let the concourse swallow you."],returning:["There you are. Still two seats, somehow.","Welcome back. You timed that almost well.","The cricket continued in your absence. Rude of it.","Back already? The queue must be behaving."],"england-boundary":["Lovely. Didn’t even need to run.","Threaded it. Like he meant the exact gap.","Four more. Even the bloke with the drum saw that."],"opponent-boundary":["That gap was visible from the burger queue.","We appear to be fielding in another county.","Bit generous. Very hospitable."],"england-wicket":["Oh, for God’s sake.","That was avoidable in several different ways.","He’ll be replaying that one in the bath."],"opponent-wicket":["YES! Never doubted him.","That’s done wonders for the atmosphere.","Send another one out. We’re ready now."],six:["SIX! That’s somebody else’s problem in the car park.","That may have landed in tomorrow.","Magnificent. Completely unnecessary. Perfect."],milestone:["Raise the bat. Pretend this was always under control.","That deserves applause and possibly another round.","Proper innings, that. Put it in the book."],collapse:["This has become a group project with no supervision.","Three wickets in a hurry. Somebody fetch the brakes.","Nobody move. Movement appears to cause wickets.","The scorebook can barely keep up with these exits."],"chase-ahead":["Rate’s comfortable. That makes me nervous.","Plenty in hand. Famous last words.","This is almost suspiciously manageable."],"chase-behind":["Required rate is developing opinions.","We need boundaries now, not good intentions.","Someone should tell them the target is today."],"close-finish":["Nobody breathe. Especially you.","This is why we stayed. Also because the gates are that way.","Every ball matters now. Deeply inconvenient."],drinks:["Eight minutes. Enough time to make one poor decision.","The players get drinks delivered. Luxury.","Quick break. The queues have sensed weakness."],interval:["Thirty minutes. The concourse has declared war.","Interesting total. Pint?","Halfway. How are you feeling about every decision so far?"],hungry:["You’re looking at Beefy’s again.","That scoreboard is starting to resemble a menu.","Get food before you start eating the programme."],toilet:["Yes, go. Please go.","Fine Leg. Immediately. This is not tactical advice.","You’re sitting like a man with a deadline."],merry:["You’ve become very supportive of mid-on.","Everything is funnier at this precise level.","Steady. We have several overs and dignity remaining."],wobbly:["Perhaps water next.","The ground is level. That movement is all you.","Use the handrail. It has no opinion of you."],spending:["Your wallet has had a difficult spell.","At this rate, the free bet is doing heavy emotional work.","Maybe let the next round belong to destiny."],bar:["I’ll guard this patch of carpet.","We came for cricket and found logistics.","The queue is moving. Spiritually."],food:["Beefy’s: where patience meets onions.","That smells better than it has any right to.","If it takes eight minutes, it counts as dining."],"mike-round":["Cheers. Mine next, once these have disappeared.","Two each? Ambitious. I respect the paperwork.","Your round officially entered into evidence."],"jb-round":["My round. I have witnesses.","I said I’d get them. Mark the date.","Financial responsibility has briefly changed hands."],"round-thanks":["You’re a gentleman.","About bloody time.","Lovely. What did I miss?","Good man.","Perfect timing.","Two for me? I take back most of what I said.","That’s service. I shall remember it at my round.","Cheers, Mike. You’ve rescued this over."],"round-thanks-one":["Perfect. One pint, correctly allocated.","Good man. That should see me through an over or two.","Lovely. Mine, singular, and very welcome.","Cheers, Mike. Sensible quantities briefly prevail."],"round-thanks-two":["Two for me? I take back most of what I said.","That is a properly organised round.","Excellent. One now, one for future JB.","A pair each. Ambitious and correct."],"jb-round-delivered":["My round has arrived. Standards are recovering.","There we are. A man of action, eventually.","Excellent. I was just about to praise your initiative.","Cheers, Mike. I shall pretend I expected this.","Two pints delivered. The partnership survives another over."],missed:["You missed a wicket. Excellent timing.","Lovely shot while you were away. Obviously.","The match waited until you left to become interesting."],"missed-wicket":["You missed a wicket. Excellent timing.","Wicket while you were away. I gave it the full appeal.","One gone. Your timing remains exceptional.","They lost a batter and you lost the view."],"missed-boundary":["Lovely boundary while you were away. Obviously.","You missed a clean strike beyond the field.","A boundary while you were gone. Clean as you like.","The crowd enjoyed a boundary on your behalf."],"missed-mixed":["Wicket and boundaries while you were away. Busy little trip.","You missed enough action for a highlights package.","The match became interesting the moment you left.","Runs, a wicket, noise. Standard punishment for leaving."],"both-missed":["I missed it too. Outstanding work from both of us.","Apparently something happened. We remain uninformed.","A roar, no witnesses, and two excellent excuses."],win:["YES! Never in doubt.","A famous victory, witnessed in strategically selected portions.","England win. Your decisions are retrospectively sound."],loss:["Well. Pub?","A long day, a short post-match analysis.","We gave them every chance, including all the ones they needed."],"toilet-venue":["A surprisingly successful trip to Fine Leg.","Facilities: visited. Dignity: broadly intact.","Right. Back before something happens."]},vt={quiet:["This spell is moving at the speed of committee minutes.","Even the pigeons have stopped pretending to watch."],"good-bowling":["Six balls, no gifts. Beautifully mean.","That is a corridor nobody wants to walk down."],"bad-bowling":["The field is decorative at this point.","Another loose one. The rope sends its thanks."],accelerating:["The scoreboard has started jogging.","They are taking the quiet overs personally."],partnership:["This pair are becoming furniture.","We may need a new idea and possibly a new ball."],"near-milestone":["Everyone knows the number. Nobody say it.","He is one decent swing from the applause."],"high-rrr":["The calculator has become openly hostile.","We need fours, sixes and a minor administrative miracle."],sober:["Remarkably clear-eyed. Are you feeling all right?","You can still pronounce every fielder. Impressive."],leaving:["Bring yourself back as well as the drinks.","I will preserve your seat and edit the highlights."],returning:["You made it back before the next crisis.","Sit down. I have a concise and biased report."],"england-boundary":["That will do nicely. More of the uncomplicated stuff.","Pierced the field like it owed him money."],"opponent-boundary":["We did not need to offer that much width.","Four. Very sporting of us."],"england-wicket":["That has spoiled a perfectly good afternoon.","Straight back to the pavilion. No forwarding address."],"opponent-wicket":["Beautiful. Fold the scoreboard one place to the left.","That is the noise we came for."],six:["That cleared everyone, including good sense.","Somebody check the river."],milestone:["Well batted. Properly earned.","Acknowledge the crowd and avoid doing anything silly next ball."],collapse:["This innings has misplaced its structural support.","Another one? They are leaving in groups now."],"chase-ahead":["No panic required. I distrust that.","The equation is friendly, which feels temporary."],"chase-behind":["We are borrowing runs from overs we do not have.","Time for somebody to become heroic."],"close-finish":["My pint is shaking and I am blaming the match.","One clean over. That is all I ask."],drinks:["Players hydrated. Spectators released into the wild.","Eight minutes of organised concourse panic."],interval:["Thirty minutes to review the score and misuse the facilities.","Half a match down. How many decisions left?"],hungry:["You have started tracking the burger queue between balls.","Food now, before mustard becomes a tactical obsession."],toilet:["This is your body declaring an innings break.","Fine Leg is no longer optional."],merry:["You are applauding defensive singles now.","Excellent level: cheerful, coherent, slightly louder."],wobbly:["Both feet on the same plan, please.","Your balance has begun freelancing."],spending:["The receipts are developing an innings of their own.","Your bank account has gone defensive."],bar:["The taps are closer than they looked from the seats.","A strong venue, weakened only by everyone else wanting beer."],food:["The smell has done most of the selling.","That queue had better end in something with onions."],"mike-round":["A fine contribution to bilateral relations.","Your round. Recorded permanently in oral history."],"jb-round":["Stand aside. Fiscal leadership has arrived.","My turn. Try not to look so surprised."],"round-thanks":["Much appreciated. Your reputation improves.","A successful delivery, unlike several we have watched."],"jb-round-delivered":["Lovely. I can resume being generous with advice.","Good timing. I was about to start a formal inquiry."],"both-missed":["The roar reached us. The explanation did not.","Neither of us saw it, so our accounts will be equally confident."],win:["That will look excellent in the memory after editing.","Victory. We contributed atmosphere and queue data."],loss:["We shall remember the good overs selectively.","Defeat. At least the post-match analysis has a bar."]};function Tt(n,e,t){const a=[...wt[n],...vt[n]??[]],i=a.filter(s=>!t.includes(s)),r=i.length?i:a;return r[Math.floor(e.next()*r.length)]}const St=["Miserable","Grumbling","Flat","Content","Having a day","Absolutely flying"],I=(n,e,t)=>Math.max(e,Math.min(t,n));function At(n){let e=60;for(const a of[n.thirst,n.hunger,n.bladder])a<35?e+=Math.min(2,(35-a)*.08):a>55&&(e-=(a-55)*.25);n.bac>=.015&&n.bac<.045?e+=8:n.bac>=.045&&n.bac<.065?e+=3:n.bac>=.065&&(e-=10+Math.min(8,(n.bac-.065)*180)),n.sobrietyBand===3&&(e-=4),n.sobrietyBand>=4&&(e-=10),e+=n.withJB?7:-6,e+=I((n.jbMood-55)*.08,-4,4),n.awayFromSeats&&(e-=6),n.queued&&(e-=3);let t=0;for(const a of n.recentEvents)if(!(!a.importance||n.minute-a.minute>18)){if(!a.mikeSaw){t-=1.5;continue}if(a.kind==="wicket")t+=a.team==="England"?-3:4;else if(a.kind==="four"||a.kind==="six"){const i=a.kind==="six"?3:2;t+=a.team==="England"?i:-i}}return I(e+I(t,-10,12),5,100)}function Mt(n,e,t){return t>0?I(n+(e-n)*(1-Math.exp(-t/18)),0,100):I(n,0,100)}const Bt=[26,46,64,80,94],xt=[20,40,58,73,87];function Rt(n,e){let t=n;for(;t<5&&e>=Bt[t];)t++;for(;t>0&&e<xt[t-1];)t--;return t}function Se(n){return St[n]}const jt={seats:"Riverside seats",bar:"The Twelfth Man",food:"Beefy’s Burgers",toilet:"Fine Leg Toilets"},oe={"pint-1":6.2,"pint-2":12.4,"pint-4":24.8,water:2.5,burger:7.5,toilet:0,"jb-round":0},E={bar:1.25,food:1.7,toilet:1.1},$t=[17,34],Et=.7,q=["seats","bar","food","toilet"],$=n=>`${Math.floor(n/6)}.${n%6}`,Ft=n=>{const e=660+Math.floor(n);return`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},T=n=>jt[n],le=(n,e)=>n!==e&&q.includes(n)&&q.includes(e),P=(n,e)=>e>0?n*6/e:n>0?1/0:0;function j(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,e>>>0||1}function v(n){return Math.max(0,Math.min(100,n))}function ce(){return{bodyGrams:0,unabsorbedGrams:0,foodBuffer:0,ingestedGrams:0,eliminatedGrams:0}}class It{constructor(e=30326){y(this,"state");y(this,"rng");y(this,"matchRng");y(this,"worldRng");y(this,"dialogueRng");y(this,"betRng");y(this,"jbChoiceRng");y(this,"carry",0);y(this,"nextBallAt",.8);y(this,"eventId",0);y(this,"queuePersonId",0);this.rng=new w(j(e)),this.matchRng=new w(e^20903),this.worldRng=new w(e^32586),this.dialogueRng=new w(e^11217),this.betRng=new w(j(e^27623)),this.jbChoiceRng=new w(j(e^13481)),this.state=this.fresh(e)}fresh(e){const t=yt(this.rng),a=se("England",this.rng),i=se(t,this.rng),r=this.rng.next()<.5?"England":t,s=this.rng.next()<.5?"England":t,o=r===s?"bat":"field",l=r==="England"?t:"England";return{phase:"title",seed:e,minute:0,opponent:t,englandXI:a,opponentXI:i,battingFirst:r,tossWinner:s,tossDecision:o,inningsIndex:0,innings:[this.newInnings(r,r==="England"?a:i,l==="England"?a:i),this.newInnings(l,l==="England"?a:i,r==="England"?a:i)],break:null,result:"",winner:null,events:[],latest:null,queues:{bar:this.newQueue(2),food:this.newQueue(3),toilet:this.newQueue(1)},mike:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,drinking:0,alcohol:ce(),sobrietyBand:0,recoveryFactor:ee(e,"mike"),waterRelief:0,thirst:20,hunger:22,bladder:14,mood:70,moodBand:3,totalSpend:0,waters:0,burgers:0,toilets:0},jb:{place:"seats",travelling:null,activity:null,heldPints:0,carriedPints:0,drinking:0,alcohol:ce(),sobrietyBand:0,recoveryFactor:ee(e,"jb"),waterRelief:0,mood:72,thirst:20,bladder:14,totalSpend:0,waters:0,independentTrip:!1,roundTrip:!1,roundSize:2,barChoice:null,barTripPurpose:null,tripNote:null,returnAt:0,lastTalk:-99},roundOwner:"mike",mikeBet:null,jbBet:null,notice:"Riverside is filling up. England are in town.",speech:"International cricket and a whole day to make questionable decisions.",speechUntil:20,speed:1,crowd:"settled",lastReturnEvent:0,nextJBRoundAt:0,dialogueHistory:[],lastDialogueAt:-99,experience:{togetherMinutes:0,sociableMinutes:0,uncomfortableMinutes:0,peakBac:0}}}newQueue(e){return{patrons:Array.from({length:e},()=>this.nextPatron()),carry:0,serving:[]}}newInnings(e,t,a){const i=[...a].sort((s,o)=>o.bowling-s.bowling).slice(0,5),r={};for(const s of i)r[s.name]={player:s,runs:0,balls:0,wickets:0};return{team:e,xi:t,batting:t.map(s=>({player:s,runs:0,balls:0,out:!1})),bowling:r,runs:0,wickets:0,balls:0,striker:0,nonStriker:1,nextBatter:2,currentBowler:i[0].name,lastOver:-1,drinksTaken:[]}}reset(e=this.state.seed){this.rng=new w(j(e)),this.matchRng=new w(e^20903),this.worldRng=new w(e^32586),this.dialogueRng=new w(e^11217),this.betRng=new w(j(e^27623)),this.jbChoiceRng=new w(j(e^13481)),this.carry=0,this.nextBallAt=.8,this.eventId=0,this.queuePersonId=0,this.state=this.fresh(e)}showOpponent(){this.state.phase==="title"&&(this.state.phase="opponent")}showBet(){this.state.phase==="opponent"&&(this.state.phase="bet")}placeBet(e){const t=this.state;if(t.phase!=="bet")return;t.mikeBet={pick:e,stake:10,won:null,payout:0};const a=["England",t.opponent,"England 250+"],i=a[Math.floor(this.betRng.next()*a.length)];t.jbBet={pick:i,stake:10,won:null,payout:0},t.speech=i===e?"Same bet. That feels less reassuring than it should.":`I’m on ${i}. One of us gets to be unbearable.`,t.phase="teams"}showToss(){this.state.phase==="teams"&&(this.state.phase="toss")}startMatch(){const e=this.state;e.phase==="toss"&&(e.phase="match",e.minute=0,this.nextBallAt=.8,e.notice=`${e.battingFirst} take guard. First ball at 11:00.`,e.speech=e.battingFirst==="England"?"Good start. Nobody’s done anything stupid yet.":"Right. Early wicket, then we can discuss refreshments.",e.speechUntil=8)}advance(e){const t=this.state;if(t.phase==="match")for(this.carry+=Math.max(0,e)*t.speed*.28;this.carry+1e-9>=.1&&t.phase==="match";)this.carry-=.1,Math.abs(this.carry)<1e-9&&(this.carry=0),this.step(.1)}advanceMinutes(e){let t=Math.max(0,e);for(;t>=.1&&this.state.phase==="match";)this.step(.1),t-=.1;t>1e-8&&this.state.phase==="match"&&this.step(t)}step(e){const t=this.state,a=Math.floor(t.minute);t.minute+=e,this.updateBodies(e),this.updateTravel(e),this.transferRoundDrinks(),this.updateActivity(e),this.updateQueues(e),Math.floor(t.minute)!==a&&(this.queueArrivals(),this.updateJB(),this.maybeAmbientDialogue()),t.break?(t.break.left-=e,t.break.left<=0&&this.endBreak()):t.minute>=this.nextBallAt&&(this.bowl(),this.nextBallAt=t.minute+Et)}updateBodies(e){var l;const t=this.state,a=this.consume(t.mike,e),i=this.consume(t.jb,e);X(t.mike.alcohol,e,85,.68,t.mike.recoveryFactor),X(t.jb.alcohol,e,78,.68,t.jb.recoveryFactor),ne(t.mike,e),ne(t.jb,e);const r=this.effectiveBac("mike");t.mike.sobrietyBand=ie(t.mike.sobrietyBand,r),t.jb.sobrietyBand=ie(t.jb.sobrietyBand,this.effectiveBac("jb")),t.mike.thirst=v(t.mike.thirst+e*(.19+r*.5)-a*20),t.mike.hunger=v(t.mike.hunger+e*.21),t.mike.bladder=v(t.mike.bladder+e*.13+a*26);const s=this.effectiveBac("jb");t.jb.thirst=v(t.jb.thirst+e*(.19+s*.5)-i*20),t.jb.bladder=v(t.jb.bladder+e*.13+i*26);const o=t.mike.place===t.jb.place&&!t.mike.travelling&&!t.jb.travelling;t.mike.mood=Mt(t.mike.mood,At({minute:t.minute,thirst:t.mike.thirst,hunger:t.mike.hunger,bladder:t.mike.bladder,bac:r,sobrietyBand:t.mike.sobrietyBand,withJB:o,jbMood:t.jb.mood,awayFromSeats:t.mike.place!=="seats"||!!t.mike.travelling,queued:((l=t.mike.activity)==null?void 0:l.kind)==="queued",recentEvents:t.events}),e),t.mike.moodBand=Rt(t.mike.moodBand,t.mike.mood),o&&(t.experience.togetherMinutes+=e),o&&r>=.015&&r<.06&&(t.experience.sociableMinutes+=e),(t.mike.thirst>75||t.mike.hunger>78||t.mike.bladder>78)&&(t.experience.uncomfortableMinutes+=e),t.experience.peakBac=Math.max(t.experience.peakBac,r)}consume(e,t){if(e.drinking<=0&&e.heldPints>0&&(e.heldPints--,e.drinking=1),e.drinking<=0)return 0;const a=Math.min(e.drinking,t/28);return e.drinking-=a,ht(e.alcohol,a),a}updateTravel(e){const t=this.state;t.jb.travelling&&(t.jb.travelling.left-=e,t.jb.travelling.left<=0&&(t.jb.place=t.jb.travelling.to,t.jb.travelling=null,t.jb.independentTrip&&t.jb.place==="seats"&&(t.jb.independentTrip=!1,this.transferRoundDrinks()))),t.mike.travelling&&(t.mike.travelling.left-=e,t.mike.travelling.left<=0&&(t.mike.place=t.mike.travelling.to,t.mike.travelling=null,t.notice=`Mike arrives at ${T(t.mike.place)}.`,t.mike.place==="seats"&&!this.transferRoundDrinks()&&this.returnComment(),t.mike.place==="toilet"&&this.joinQueue("toilet")))}updateActivity(e){const t=this.state.mike.activity;t&&t.kind!=="queued"&&(t.left-=e,t.kind==="eating"&&(this.state.mike.hunger=v(this.state.mike.hunger-e*5.8),this.state.mike.alcohol.foodBuffer=Math.min(1,this.state.mike.alcohol.foodBuffer+e/t.total)),t.left<=0&&this.finishActivity(t));const a=this.state.jb.activity;a&&a.kind==="service"&&(a.left-=e,a.left<=0&&this.finishJBActivity(a))}updateQueues(e){for(const t of["bar","food","toilet"]){const a=this.state.queues[t];if(a.serving=a.serving.flatMap(i=>{const r=i.left-e;return r>1e-8?[{...i,left:r}]:[]}),this.ensureQueueNPC(a),!a.patrons.length){a.carry=0;continue}for(a.carry+=e;a.carry>=E[t]&&a.patrons.length;){a.carry-=E[t];const i=a.patrons.shift();if(i==="mike"&&this.beginService(t),i==="jb"&&this.beginJBService(t),i!=null&&i.startsWith("fan-")){const r=E[t]*1.35;a.serving.push({patron:i,left:r,total:r})}}this.ensureQueueNPC(a)}}ensureQueueNPC(e){!(e.patrons.some(a=>a.startsWith("fan-"))||e.serving.some(a=>a.patron.startsWith("fan-")))&&e.patrons.length+e.serving.length<12&&e.patrons.push(this.nextPatron())}queueArrivals(){const e=this.state,t=e.break?e.break.kind==="innings"?.78:.58:.26;for(const a of["bar","food","toilet"]){const i=a==="bar"?1:a==="toilet"?.82:.7,r=e.queues[a];r.patrons.length+r.serving.length<12&&this.worldRng.next()<t*i&&r.patrons.push(this.nextPatron()),this.ensureQueueNPC(r)}}updateJB(){const e=this.state;if(!e.jb.activity){if(e.roundOwner==="jb"&&e.mike.place==="seats"&&!e.mike.travelling&&e.jb.place==="seats"&&!e.jb.travelling&&!e.break&&e.minute>=e.nextJBRoundAt&&e.mike.heldPints+e.mike.drinking+e.mike.carriedPints+e.jb.heldPints+e.jb.drinking+e.jb.carriedPints<.01){e.jb.barChoice=this.chooseJBBarChoice(),e.jb.barTripPurpose="round",e.jb.tripNote=null,e.jb.roundSize=e.jb.barChoice==="pint-4"?4:2,this.sendJB("bar"),e.jb.independentTrip=!0,e.jb.roundTrip=!0,e.jb.returnAt=1/0;return}if(!this.letJBBuyRound()){if(e.jb.independentTrip&&!e.jb.travelling&&e.minute>=e.jb.returnAt&&e.jb.place!=="seats"){this.sendJB("seats");return}if(e.jb.place==="seats"&&e.mike.place==="seats"&&!e.mike.travelling&&!e.jb.travelling&&!e.jb.independentTrip&&!e.break&&!e.mike.carriedPints&&!e.jb.carriedPints&&this.worldRng.next()<.008){const t=e.jb.heldPints+e.jb.drinking>.01;if(e.jb.alcohol.bodyGrams<=18&&t)return;const a=e.jb.alcohol.bodyGrams>18?"toilet":"bar";e.jb.tripNote=null,a==="bar"&&(e.jb.barChoice=this.chooseJBBarChoice(),e.jb.barTripPurpose="solo"),this.sendJB(a),e.jb.independentTrip=!0,e.jb.returnAt=e.minute+10}}}}chooseJBBarChoice(){const e=this.state.jb,t=e.sobrietyBand===1?.18:e.sobrietyBand===2?.26:e.sobrietyBand>=3?.36:0,a=Math.min(.76,.12+t+(e.thirst>=70?.22:0)+(e.bladder>=70?.18:0));if(this.jbChoiceRng.next()<a)return"water";const i=.18+(e.thirst>=60?.15:0)+(e.barTripPurpose==="round"&&this.state.mike.thirst>=60?.15:0);return this.jbChoiceRng.next()<i?"pint-4":"pint-2"}nextPatron(){return`fan-${++this.queuePersonId}`}travel(e,t=!1){const a=this.state,i=a.mike;if(a.phase!=="match"||i.travelling||i.activity||!le(i.place,e))return!1;const r=i.place,s=r==="seats"||e==="seats"?4:6;return i.travelling={from:r,to:e,left:s,total:s},t&&a.jb.place===r&&!a.jb.travelling&&!a.jb.activity&&(a.jb.travelling={from:r,to:e,left:s,total:s}),a.notice=`Mike heads for ${T(e)}. Play continues.`,r==="seats"&&a.jb.place==="seats"&&!t&&this.say("leaving",5),!0}sendJB(e){const t=this.state.jb;if(t.place===e||t.travelling||t.activity)return;const a=t.place,i=a==="seats"||e==="seats"?4:6;t.travelling={from:a,to:e,left:i,total:i}}joinQueue(e){const t=this.state,a=e.startsWith("pint")||e==="water"?"bar":e==="burger"?"food":"toilet";return t.phase!=="match"||t.mike.place!==a||t.mike.travelling||t.mike.activity?!1:(e==="pint-2"||e==="pint-4")&&!this.sharedRoundAvailability().allowed?(t.notice=this.sharedRoundAvailability().reason,!1):(t.mike.activity={kind:"queued",facility:a,purchase:e,left:0,total:0},t.queues[a].patrons.push("mike"),t.notice=`Mike joins the back: ${this.queueAhead()} ${this.queueAhead()===1?"person":"people"} ahead.`,!0)}beginService(e){const t=this.state.mike.activity;if(!t||t.kind!=="queued"||t.facility!==e)return;const a=e==="bar"?2:e==="food"?2.5:2;t.kind="service",t.left=a,t.total=a,this.state.notice=e==="toilet"?"Mike reaches the front. Sweet relief awaits.":"Mike reaches the counter."}beginJBService(e){const t=this.state.jb.activity;!t||t.kind!=="queued"||t.facility!==e||(t.kind="service",t.left=2,t.total=2,this.state.notice=`JB reaches the bar for ${this.jbChoiceLabel()}.`)}jbChoiceLabel(){const e=this.state.jb.barChoice;return e==="water"?"one water":e?`${Number(e.slice(-1))} pints`:"his order"}finishJBActivity(e){const t=this.state,a=t.jb,i=a.barChoice;if(a.activity=null,e.facility!=="bar"||!i){this.cancelJBBarOrder("JB’s order was cancelled before purchase. Nothing was charged.",!1);return}if(a.totalSpend+=oe[i],i==="water")a.waters++,a.thirst=v(a.thirst-38),a.bladder=v(a.bladder+8),te(a),a.barTripPurpose==="round"&&(t.roundOwner="mike",t.nextJBRoundAt=t.minute+45),t.notice="JB takes a water. His alcohol load is unchanged, but he feels a little steadier.";else{const r=Number(i.slice(-1));if(a.barTripPurpose==="round"){const s=r/2;a.heldPints+=s,a.carriedPints+=s,t.roundOwner="mike",t.nextJBRoundAt=t.minute+45,t.notice=`JB buys ${r} pints for the pair and heads back.`}else a.heldPints+=r,t.notice=`JB buys ${r} pints for himself and heads back.`}a.roundTrip=!1,a.independentTrip=!0,a.returnAt=t.minute,a.barChoice=null,a.barTripPurpose=null,this.sendJB("seats")}finishActivity(e){const t=this.state,a=t.mike;if(e.kind==="eating"){a.activity=null,t.notice="Burger demolished. No medical conclusions drawn.";return}const i=e.purchase;if(a.totalSpend+=oe[i],i==="jb-round")a.heldPints++,t.jb.heldPints++,t.roundOwner="mike",t.notice="JB gets his round in. Miracles happen.",t.speech="Your round next. I have witnesses.",t.speechUntil=t.minute+8;else if(i.startsWith("pint")){const r=Number(i.slice(-1)),s=r===4?2:1;a.heldPints+=s,r>=2&&(a.carriedPints+=r-s),t.jb.mood=v(t.jb.mood+4),r>=2&&(t.roundOwner="jb",t.nextJBRoundAt=t.minute+45),t.notice=`${r} ${r===1?"pint":"pints"} collected. They’ll be drunk over time.`}else if(i==="water")a.waters++,a.thirst=v(a.thirst-38),a.bladder=v(a.bladder+8),te(a),t.notice="Water helps Mike feel a little steadier; alcohol still takes time to clear.";else if(i==="burger"){a.burgers++,a.activity={kind:"eating",facility:"food",purchase:i,left:8,total:8},t.notice="Mike starts eating. This takes a while.";return}else a.toilets++,a.bladder=v(a.bladder-86),t.notice="Relief. The day can continue.";a.activity=null}letJBBuyRound(){const e=this.state;return e.phase!=="match"||e.jb.place!=="bar"||e.jb.travelling||e.jb.activity||!e.jb.barChoice?!1:(e.jb.independentTrip=!1,e.jb.returnAt=0,e.jb.activity={kind:"queued",facility:"bar",purchase:"jb-round",left:0,total:0},e.queues.bar.patrons.push("jb"),e.notice=`JB joins the back for ${this.jbChoiceLabel()}: ${this.jbQueueAhead()} ahead.`,this.say("jb-round"),!0)}cancelJBBarOrder(e,t){var s;const a=this.state,i=a.jb,r=i.activity;if((r==null?void 0:r.kind)==="queued"){const o=a.queues[r.facility],l=o.patrons.indexOf("jb");l>=0&&o.patrons.splice(l,1)}i.activity=null,i.barChoice=null,i.barTripPurpose=null,i.roundTrip=!1,i.independentTrip=!1,i.returnAt=0,i.tripNote=e,t?(i.travelling=null,i.place="seats"):((s=i.travelling)==null?void 0:s.to)==="bar"?i.travelling=null:i.place!=="seats"&&this.sendJB("seats"),a.notice=e}transferRoundDrinks(){const e=this.state;if(e.mike.place!=="seats"||e.jb.place!=="seats"||e.mike.travelling||e.jb.travelling)return!1;const t=e.mike.carriedPints;let a=!1;if(t&&(e.jb.heldPints+=t,e.mike.carriedPints=0,a=!0,this.say(t>=2?"round-thanks-two":"round-thanks-one",8)),e.jb.carriedPints){const i=e.jb.carriedPints;e.mike.heldPints+=i,e.jb.carriedPints=0,a=!0,e.notice=`JB hands Mike ${i} ${i===1?"pint":"pints"} from his round.`,this.say("jb-round-delivered",8)}return a}jbQueueAhead(){const e=this.state.jb.activity;return!e||e.kind!=="queued"?0:Math.max(0,this.state.queues[e.facility].patrons.indexOf("jb"))}estimatedTripMinutes(e){const t=this.state.mike.place;if(!le(t,e))return 0;const a=t==="seats"||e==="seats"?4:6;return e==="seats"?a:a+this.estimatedQueueWait(e)+(e==="food"?10.5:2)}estimatedOutingMinutes(e){const t=this.estimatedTripMinutes(e);return this.state.mike.place==="seats"&&e!=="seats"?t+4:t}estimatedQueueWait(e){const t=this.state.queues[e];return Math.max(0,t.patrons.length*E[e]-t.carry)}queuePopulation(e){const t=this.state.queues[e];return t.patrons.length+t.serving.length}queueAhead(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons.indexOf("mike");return Math.max(0,t)}queueBehind(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility].patrons,a=t.indexOf("mike");return a<0?0:t.length-a-1}queueWaitMinutes(){const e=this.state.mike.activity;if(!e||e.kind!=="queued")return 0;const t=this.state.queues[e.facility],a=t.patrons.indexOf("mike");return a<0?0:Math.max(0,(a+1)*E[e.facility]-t.carry)}sharedRoundAvailability(){const e=this.state,t=e.mike;return e.roundOwner!=="mike"?{allowed:!1,reason:"JB has the next round."}:t.heldPints+t.drinking+t.carriedPints>.01?{allowed:!1,reason:"Finish or deliver the current pints first."}:{allowed:!0,reason:"Mike’s round: choose one or two pints each."}}chooseBowler(e){const t=Math.floor(e.balls/6),a=Object.values(e.bowling);return t!==e.lastOver&&(e.lastOver=t,e.currentBowler=a[t%a.length].player.name),e.bowling[e.currentBowler]}bowl(){const e=this.state,t=e.innings[e.inningsIndex];if(this.isInningsComplete(t)){this.finishInnings();return}const a=t.batting[t.striker],i=this.chooseBowler(t),r=(a.player.batting-i.player.bowling)/300,s=this.matchRng.next();let o="dot",l=0;const h=.031-r*.025;s<h?o="wicket":s<.455-r?o="dot":s<.755-r*.25?(o="run",l=1):s<.83?(o="run",l=2):s<.842?(o="run",l=3):s<.965+r*.3?(o="four",l=4):(o="six",l=6);const g=a.runs;t.balls++,a.balls++,i.balls++,i.runs+=l,t.runs+=l,a.runs+=l,o==="wicket"?(a.out=!0,t.wickets++,i.wickets++,t.wickets<10&&(t.striker=t.nextBatter,t.nextBatter++)):l%2===1&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]),t.balls%6===0&&([t.striker,t.nonStriker]=[t.nonStriker,t.striker]);const S=this.atSeats(e.mike),x=this.atSeats(e.jb),f=o==="wicket"?`${a.player.name} is OUT to ${i.player.name}!`:o==="six"?`${a.player.name} launches SIX!`:o==="four"?`${a.player.name} cracks FOUR.`:l?`${a.player.name} takes ${l}.`:`${i.player.name} beats the bat.`,k=[50,100,150,200].find(A=>g<A&&a.runs>=A),m=this.isInningsComplete(t)&&e.inningsIndex===1?6:k?4:o==="wicket"?3:o==="four"||o==="six"?1:0,p={id:++this.eventId,minute:e.minute,innings:e.inningsIndex+1,over:$(t.balls),team:t.team,kind:o,runs:l,batter:a.player.name,bowler:i.player.name,text:k?`${f} ${a.player.name} reaches ${k}.`:f,mikeSaw:S,jbSaw:x,importance:m};if(e.events.push(p),e.latest=p,o==="wicket"||o==="four"||o==="six"||k?this.react(p,k):t.balls%6===0&&S&&(e.notice=`End ${$(t.balls)} · ${t.team} ${t.runs}/${t.wickets}.`),this.isInningsComplete(t)){this.finishInnings();return}$t.includes(t.balls/6)&&!t.drinksTaken.includes(t.balls/6)&&(t.drinksTaken.push(t.balls/6),this.startBreak("drinks",8,`Drinks break after ${t.balls/6} overs`))}atSeats(e){return e.place==="seats"&&!e.travelling}isInningsComplete(e){return e.balls>=300||e.wickets>=10||this.state.inningsIndex===1&&e.runs>this.state.innings[0].runs}react(e,t){const a=this.state,i=e.team==="England";a.crowd=e.kind==="wicket"?i?"groan":"roar":i?"roar":"ripple",a.notice=e.mikeSaw?e.text:"A roar tumbles around Riverside. Mike did not see why.",e.mikeSaw&&e.jbSaw&&a.mike.place===a.jb.place&&a.minute-a.lastDialogueAt>=3&&this.say(t?"milestone":e.kind==="wicket"?i?"england-wicket":"opponent-wicket":e.kind==="six"?"six":i?"england-boundary":"opponent-boundary",5)}startBreak(e,t,a){const i=this.state;i.break={kind:e,left:t,total:t,label:a},i.crowd="break",i.notice=`${a}. The cricket clock is paused; the concourse is not.`,this.say(e==="innings"?"interval":"drinks",8);const r=e==="innings"?{bar:7,food:6,toilet:6}:{bar:5,food:3,toilet:6};for(const s of["bar","food","toilet"])for(let o=0;o<r[s]&&i.queues[s].patrons.length+i.queues[s].serving.length<12;o++)i.queues[s].patrons.push(this.nextPatron())}endBreak(){var a;const e=this.state,t=(a=e.break)==null?void 0:a.kind;e.break=null,this.nextBallAt=e.minute+.8,e.crowd="settled",e.notice=t==="innings"?`The chase begins. ${e.innings[1].team} need ${e.innings[0].runs+1}.`:"Drinks over. Players return to their marks."}finishInnings(){const e=this.state,t=e.innings[0];this.settleAvailableBets(),e.inningsIndex===0?(e.inningsIndex=1,this.startBreak("innings",30,`Innings interval · ${t.team} ${t.runs}/${t.wickets}`),e.speech="Interesting total. Pint?",e.speechUntil=e.minute+10):this.finishMatch()}finishMatch(){const e=this.state,t=e.innings[0],a=e.innings[1];e.jb.barChoice&&e.jb.barTripPurpose&&this.cancelJBBarOrder("JB’s bar order was cancelled at full time. Nothing was charged.",!0),a.runs>t.runs?(e.winner=a.team,e.result=`${a.team} win by ${10-a.wickets} wickets.`):t.runs>a.runs?(e.winner=t.team,e.result=`${t.team} win by ${t.runs-a.runs} runs.`):(e.winner="Tie",e.result=`A tie: both sides finish on ${t.runs}.`),this.settleAvailableBets(),e.phase="result",e.break=null,e.notice=e.result,this.say(e.winner==="England"?"win":"loss",1/0)}settleAvailableBets(){var t,a;const e=this.state;if(((t=e.mikeBet)==null?void 0:t.won)===null)if(e.mikeBet.pick==="England 250+"){const i=e.innings.find(r=>r.team==="England");this.isInningsComplete(i)&&(e.mikeBet.won=i.runs>=250,e.mikeBet.payout=e.mikeBet.won?25:0)}else e.winner&&(e.mikeBet.won=e.mikeBet.pick===e.winner,e.mikeBet.payout=e.mikeBet.won?20:0);if(((a=e.jbBet)==null?void 0:a.won)===null)if(e.jbBet.pick==="England 250+"){const i=e.innings.find(r=>r.team==="England");this.isInningsComplete(i)&&(e.jbBet.won=i.runs>=250,e.jbBet.payout=e.jbBet.won?25:0)}else e.winner&&(e.jbBet.won=e.jbBet.pick===e.winner,e.jbBet.payout=e.jbBet.won?20:0)}returnComment(){const e=this.state;if(!this.atSeats(e.jb))return;const t=e.events.filter(o=>o.id>e.lastReturnEvent&&!o.mikeSaw),a=t.filter(o=>o.jbSaw&&["wicket","four","six"].includes(o.kind)),i=t.filter(o=>!o.jbSaw&&["wicket","four","six"].includes(o.kind));e.lastReturnEvent=this.eventId;const r=a.filter(o=>o.kind==="wicket").length,s=a.filter(o=>o.kind==="four"||o.kind==="six").length;this.say(r&&s?"missed-mixed":r?"missed-wicket":s?"missed-boundary":i.length?"both-missed":"returning",8)}talk(){const e=this.state,t=e.mike.place===e.jb.place&&!e.mike.travelling&&!e.jb.travelling;return e.phase!=="match"||!t||e.mike.activity||e.jb.activity?!1:(this.say(this.contextualDialogue(),8),e.jb.lastTalk=e.minute,!0)}contextualDialogue(){const e=this.state,t=e.innings[e.inningsIndex];if(e.break)return e.break.kind==="innings"?"interval":"drinks";if(e.mike.place==="bar")return"bar";if(e.mike.place==="food")return"food";if(e.mike.place==="toilet")return e.mike.bladder>60?"toilet":"toilet-venue";if(e.inningsIndex===1){const r=Math.max(0,e.innings[0].runs+1-t.runs),s=300-t.balls;if(r<=30&&s<=36)return"close-finish";if(P(r,s)>9)return"high-rrr"}const a=[t.batting[t.striker],t.batting[t.nonStriker]];if(a.some(r=>[50,100,150].some(s=>r.runs>=s-6&&r.runs<s)))return"near-milestone";if(e.mike.bladder>72)return"toilet";if(e.mike.hunger>70)return"hungry";if(e.mike.totalSpend>38)return"spending";if(e.mike.sobrietyBand>=3)return"wobbly";if(e.mike.sobrietyBand>=2)return"merry";const i=e.events.filter(r=>r.innings===e.inningsIndex+1&&r.jbSaw&&e.minute-r.minute<=12).slice(-6);if(i.length===6&&i[5].minute-i[0].minute<7){const r=i.reduce((s,o)=>s+o.runs,0);if(r>=18)return"accelerating";if(r>=12)return"bad-bowling";if(r<=2)return"good-bowling"}if(e.events.filter(r=>r.innings===e.inningsIndex+1&&r.kind==="wicket"&&e.minute-r.minute<22).length>=3)return"collapse";if(a.every(r=>r.runs>=30))return"partnership";if(e.inningsIndex===1){const r=Math.max(0,e.innings[0].runs+1-t.runs),s=300-t.balls;return P(r,s)>7?"chase-behind":"chase-ahead"}return e.mike.sobrietyBand===0&&e.minute>75?"sober":"quiet"}maybeAmbientDialogue(){const e=this.state;e.minute-e.lastDialogueAt<14||e.mike.place!==e.jb.place||e.mike.travelling||e.jb.travelling||e.mike.activity||this.dialogueRng.next()<.18&&this.say(this.contextualDialogue(),7)}say(e,t=8){const a=this.state,i=Tt(e,this.dialogueRng,a.dialogueHistory.slice(-12));a.speech=i,a.speechUntil=t===1/0?1/0:a.minute+t,a.lastDialogueAt=a.minute,a.dialogueHistory.push(i),a.dialogueHistory.length>20&&a.dialogueHistory.shift()}setSpeed(e){this.state.speed=e}bacForMike(){return ae(this.state.mike.alcohol,85,.68)}bacForJB(){return ae(this.state.jb.alcohol,78,.68)}effectiveBac(e){const t=this.state[e],a=e==="mike"?this.bacForMike():this.bacForJB();return ut(a,t.waterRelief)}sobriety(e){return Te(this.state[e].sobrietyBand)}drunkGait(e="mike"){return mt(this.state[e].sobrietyBand)}needLabel(e,t,a,i,r){return e<25?t:e<50?a:e<75?i:e<90?r:"Emergency"}moodLabel(){return Se(this.state.mike.moodBand)}dayScore(){var k,b;const e=this.state,t=e.events.reduce((m,p)=>m+p.importance,0),a=e.events.filter(m=>m.mikeSaw).reduce((m,p)=>m+p.importance,0),i=t?a/t:0,r=(k=e.mikeBet)!=null&&k.won?30:-5,s=Math.round(i*95),o=Math.min(48,e.experience.togetherMinutes*.035+e.experience.sociableMinutes*.12),l=Math.min(45,e.experience.uncomfortableMinutes*.08),h=Math.max(0,e.mike.totalSpend-36),g=Math.pow(h,1.18)*.55,S=Math.max(0,e.experience.peakBac-.075)*650,x=(e.mike.mood-50)*.28;return{total:Math.max(0,Math.round(100+s+o+r+x-l-g-S)),reasons:[`${Math.round(i*100)}% of key cricket witnessed`,`${Math.round(e.experience.togetherMinutes)} minutes with JB`,(b=e.mikeBet)!=null&&b.won?"Free bet came in":"Free bet went west",`£${e.mike.totalSpend.toFixed(2)} spent`,`${Math.round(e.experience.uncomfortableMinutes)} uncomfortable minutes`,`${this.moodLabel()} at the close`]}}scoreboard(){const e=this.state,t=e.innings[e.inningsIndex],a=t.batting[t.striker],i=t.batting[t.nonStriker],r=t.bowling[t.currentBowler],s=t.balls/6,o=e.inningsIndex===1?e.innings[0].runs+1:null,l=o===null?null:Math.max(0,o-t.runs),h=o===null?null:Math.max(0,300-t.balls);return{team:t.team,runs:t.runs,wickets:t.wickets,overs:$(t.balls),striker:(a==null?void 0:a.player.name)??"—",strikerRuns:(a==null?void 0:a.runs)??0,nonStriker:(i==null?void 0:i.player.name)??"—",nonStrikerRuns:(i==null?void 0:i.runs)??0,bowler:(r==null?void 0:r.player.name)??"—",bowlerFigures:r?`${$(r.balls)}–${r.runs}–${r.wickets}`:"—",currentRunRate:s>0?t.runs/s:0,target:o,need:l,ballsRemaining:h,requiredRunRate:l===null||h===null?null:P(l,h)}}}const Ae="howzat-v031-high-scores";function Ot(n){return n>=230?"Riverside Legend":n>=190?"Proper Day Out":n>=150?"Useful Knock":"Long Day in the Field"}function Me(n){try{const e=JSON.parse(n.getItem(Ae)??"[]");return Array.isArray(e)?e.filter(t=>{if(!t||typeof t!="object")return!1;const a=t;return a.player==="MIKE"&&Number.isFinite(a.score)&&typeof a.opponent=="string"&&typeof a.result=="string"&&Number.isInteger(a.sequence)&&typeof a.title=="string"}).sort((t,a)=>a.score-t.score||a.sequence-t.sequence).slice(0,10):[]}catch{return[]}}function Ct(n,e){const t={...e,player:"MIKE",title:Ot(e.score)},a=Me(n).filter(r=>r.sequence!==e.sequence);a.push(t),a.sort((r,s)=>s.score-r.score||s.sequence-r.sequence);const i=a.slice(0,10);try{n.setItem(Ae,JSON.stringify(i))}catch{}return i}const Be="23fd099";function xe(n){return Te(n).toLowerCase().replace(/\b\w/g,e=>e.toUpperCase())}function Lt(n){const e=n.mike,t=(r,s,o)=>({name:r,label:o[s<25?0:s<50?1:s<75?2:s<90?3:4],value:Math.round(s),tone:s>=75?"urgent":s>=50?"watch":"calm"}),a=[t("Thirst",e.thirst,["Fresh","Fine","Thirsty","Parched","Desperate"]),t("Hunger",e.hunger,["Full","Fine","Peckish","Hungry","Starving"]),t("Bladder",e.bladder,["Empty","Fine","Aware","Need a wee","Desperate"])],i=a.reduce((r,s)=>s.value>r.value?s:r);return{sobriety:{name:"Sobriety",label:xe(e.sobrietyBand),value:Math.round(e.sobrietyBand/4*100),tone:e.sobrietyBand>=3?"urgent":e.sobrietyBand===2?"watch":"calm"},sobrietyBand:e.sobrietyBand,mood:Se(e.moodBand),needs:a,priority:e.sobrietyBand>=3?"SOBRIETY":i.value>=75?i.name.toUpperCase():null,drinking:Math.max(0,Math.min(1,e.drinking)),reserve:e.heldPints,forJB:e.carriedPints,spent:`£${e.totalSpend.toFixed(2)}`,round:n.roundOwner}}function Nt(n){const e=n.jb;return{sobriety:{label:xe(e.sobrietyBand),band:e.sobrietyBand,tone:e.sobrietyBand>=3?"urgent":e.sobrietyBand===2?"watch":"calm"},drinking:Math.max(0,Math.min(1,e.drinking)),reserve:e.heldPints,forMike:e.carriedPints,total:e.drinking+e.heldPints+e.carriedPints}}function Pt(n,e){const t=Math.max(n/1589,e/990),a=(n-1589*t)/2,i=(e-990*t)/2;return{left:a+627*t,top:i+374*t,width:340*t,height:98*t}}function Re(n,e){var r;if(((r=n.break)==null?void 0:r.kind)==="innings"){const s=n.innings[0],o=n.innings[1];return{stage:"interval",team:s.team,runs:s.runs,wickets:s.wickets,overs:`${Math.floor(s.balls/6)}.${s.balls%6}`,currentRunRate:s.balls>0?s.runs/(s.balls/6):0,interval:!0,batters:[],bowler:null,chase:{need:s.runs+1,balls:300,target:s.runs+1,requiredRunRate:(s.runs+1)/50},nextTeam:o.team,result:null,inningsSummary:null}}const t=n.innings[0],a=n.innings[1],i=`${t.team} ${t.runs}/${t.wickets} · ${a.team} ${a.runs}/${a.wickets}`;return{stage:n.phase==="result"?"result":e.target===null?"first-innings":"chase",team:e.team,runs:e.runs,wickets:e.wickets,overs:e.overs,currentRunRate:e.currentRunRate,interval:!1,batters:n.phase==="result"?[]:[{name:e.striker,runs:e.strikerRuns,striker:!0},{name:e.nonStriker,runs:e.nonStrikerRuns,striker:!1}],bowler:n.phase==="result"?null:{name:e.bowler,figures:e.bowlerFigures},chase:e.target===null?null:{need:e.need,balls:e.ballsRemaining,target:e.target,requiredRunRate:e.requiredRunRate},nextTeam:null,result:n.phase==="result"?n.result:null,inningsSummary:n.phase==="result"?i:null}}function de(n,e=16){const t=n.trim().split(/\s+/),a=t.length>1?t[t.length-1]:n;return a.length<=e?a:`${a.slice(0,e-1)}…`}function Wt(n){return n.phase==="result"?`result:${n.result}`:n.break?`break:${n.break.kind}:${n.break.label}:${Math.ceil(n.break.left)}`:n.latest?`event:${n.latest.id}`:`phase:${n.phase}`}const ue={dot:["No run. The score has chosen continuity.","A dot. Nothing to trouble the arithmetic.","No addition this time.","The total stays where it is.","A dot ball. Briefly, everyone agrees on zero.","No run from that delivery.","One ball spent, nothing added.","A quiet entry in the scorebook.","The scoreboard gets a moment to itself.","No run. The suspense remains fully funded.","A dot joins the collection.","Nothing added. There is still cricket to be done.","The total holds.","No run. An economical little sentence.","A dot ball, with all the usual punctuation.","The score declines to elaborate.","No change to the total.","A ball passes without a contribution.","No run. The numbers remain on familiar terms.","The batting side gets nothing from that one.","Another delivery accounted for. No runs.","A dot. The scorebook can be quite terse.","Nothing to add on this occasion.","No run. Progress takes a short leave.","The total is unmoved.","A dot ball. Not every paragraph needs a flourish.","No runs available in the official account.","That one brings no addition.","The scoreboard maintains its position.","Zero from the delivery.","A dot. Small mark, perfectly clear meaning.","No run. Patience has entered the conversation.","The total remains exactly as advertised.","Nothing scored from that ball.","A delivery for the dots column.","No run. The bowler has defended the arithmetic.","The score stays put for a ball.","A dot ball closes that particular discussion.","No addition. The innings continues.","A dot. Cricket permits these quieter opinions."],single:["One run. A modest but useful contribution.","A single added.","The total moves on by one.","One more for the batting side.","A single. Progress in its smallest positive form.","One run from the delivery.","The score edges upwards.","A single keeps the numbers moving.","One added. No ceremony required.","A run for the collection.","The total is one better off.","A single. Small print still counts.","One run, duly entered.","The innings gains another run.","A single brings a little movement to the score.","One more. These things accumulate.","A run added to the account.","Just the one this time.","A single. Quite enough for one sentence.","The score advances by a solitary run.","One run. The total accepts all donations.","A single goes into the book.","One added to the day’s work.","A run is a run. This is one.","A single. No need to round it up.","The batting side adds one.","One more towards a larger number.","A single, with no further arithmetic.","The total gets a small amendment.","One run. Modest ambitions, properly realised. The fielder may recover shortly."],two:["Two runs added.","A pair for the total.","Two more for the batting side.","The score moves on by two.","Two runs. A useful little instalment.","A couple goes into the book.","Two from that delivery.","The total is two better off.","Two runs, neatly accounted for.","A pair of runs joins the collection.","Two added. The arithmetic remains friendly.","A couple more for the innings.","Two runs. Twice the pleasure of one.","The batting side collects two.","A two-run contribution.","Two more. A small number with good intentions.","The score gains a couple.","Two runs enter the account.","A pair added without any rounding.","Two. The scorebook is quite definite.","A couple keeps the total moving.","Two runs for the day’s work.","The innings advances by two.","Two added. Respectable work for a small integer; both batters made it back.","A couple more on the board."],three:["Three runs added.","Three more for the batting side.","The total advances by three.","Three from that delivery.","A useful three goes into the book.","Three runs. The middle ground has its merits.","The score is three better off.","Three added to the account. The fielder has earned a sit down.","A three-run contribution to the innings.","Three more. A pleasantly substantial odd number.","The batting side collects three.","Three runs join the total.","Three. No rounding up to four.","The innings gains another three.","Three runs, all of them welcome. A brief athletics meeting in the middle."],four:["Four runs!","A boundary added to the total.","Four more for the batting side.","The score moves on in a larger step.","Four. That improves the look of the account.","A boundary goes into the book.","Four runs from that delivery.","The total is four better off.","Four added. A useful contribution.","A boundary. The arithmetic perks up.","Four more on the board.","The innings receives a four-run boost.","Four. A number with excellent timing.","A boundary for the batting side.","Four runs join the collection.","The score gains four in one delivery. The fielders were only decorative there.","Four added to the day’s work.","A boundary. Brief enough to enjoy twice.","Four runs, officially and emphatically.","A welcome four for the total. The rope did all the fielding.","The batting side collects a boundary.","Four. A little less patience required.","A boundary brings the score along.","Four. The fielding effort was mostly scenic.","That delivery produces four.","A four-run entry in the scorebook.","Four. A substantial answer to one ball.","Another four runs for the innings.","A boundary makes its contribution.","Four runs. No small change this time.","The total takes a four-run step.","Four added, with some satisfaction. The chase has started to look less theoretical.","A boundary. Cricket can be wonderfully concise.","Four more to put beside the name.","Four runs. That part needs no explanation."],six:["Six runs!","A maximum goes into the book.","Six more for the batting side.","The total makes a sizeable leap.","Six. The larger number was selected.","A six-run addition to the innings.","Six from that delivery.","The score is six better off.","A maximum. A rather firm contribution.","Six runs join the total.","Six more on the board.","A six. No room for a larger boundary.","The innings gains a maximum.","Six added to the account.","Six runs. A delivery with a substantial receipt.","The batting side collects six.","A maximum brightens the scorebook.","Six. The total has noticed.","Six runs from one ball.","A six-run step forward.","Six more. Difficult to call that modest.","A maximum for the batting side.","Six added. Quite a lot for one line.","The score moves on by six.","Six runs, with no discount applied.","A six makes its presence felt.","The innings has another six to its name.","Six. A wonderfully uncomplicated outcome. The ball has acquired a new postcode.","A maximum added to the day’s work.","Six runs. The full boundary allowance; the nearest fielder may write a report."],wicket:["Wicket!","A wicket falls.","The fielding side has a breakthrough.","An innings ends for the batter.","A wicket changes the picture.","The batting side loses a wicket.","A breakthrough goes into the book.","Wicket. A significant change of circumstances.","One more in the wickets column.","The fielding side has its reward.","A wicket interrupts the batting plans.","That is the end of this batter’s innings.","A wicket. The scorebook changes tone.","The batting side has a departure to record.","Wicket. Cricket exercises its editorial powers.","A breakthrough for the fielding side.","A wicket falls; the situation shifts.","The wickets column gets an unwelcome addition.","Wicket. The innings has a new complication.","The batter’s contribution is complete. His afternoon has been administratively concluded.","A wicket brings that innings to a close.","The fielding side adds a wicket to its account.","Wicket. A rather final piece of punctuation.","A dismissal is recorded. Someone has to explain the walk back.","A wicket. There is some recalculating to do."]},Dt={dot:{kind:"dot"},single:{kind:"run",runs:1},two:{kind:"run",runs:2},three:{kind:"run",runs:3},four:{kind:"four"},six:{kind:"six"},wicket:{kind:"wicket"}},qt=Object.keys(ue).flatMap(n=>ue[n].map((e,t)=>({id:`${n}-${String(t+1).padStart(3,"0")}`,category:n,text:e,when:Dt[n]}))),Ht=[{id:"milestone-001",category:"batter-milestone",when:"batter-milestone",text:"{batter} reaches the {mark} milestone."},{id:"milestone-002",category:"batter-milestone",when:"batter-milestone",text:"{mark} reached by {batter}. Substantial work."},{id:"milestone-003",category:"batter-milestone",when:"batter-milestone",text:"The {mark} milestone for {batter}. Worth a moment."},{id:"milestone-004",category:"batter-milestone",when:"batter-milestone",text:"{batter} reaches {mark}. The arithmetic looks rather good."},{id:"milestone-005",category:"batter-milestone",when:"batter-milestone",text:"{mark} up for {batter}. A number worth keeping."},{id:"milestone-006",category:"batter-milestone",when:"batter-milestone",text:"{batter}: the {mark} milestone reached. Nicely accumulated."},{id:"completed-over-001",category:"completed-over",when:"completed-over",text:"Over complete. {score}/{wickets} after {over}."},{id:"completed-over-002",category:"completed-over",when:"completed-over",text:"{over} overs done: {score}/{wickets}."},{id:"completed-over-003",category:"completed-over",when:"completed-over",text:"{score}/{wickets} after {over}. A convenient place for punctuation."},{id:"completed-over-004",category:"completed-over",when:"completed-over",text:"End of the over: {score}/{wickets}. The account is current."},{id:"completed-over-005",category:"completed-over",when:"completed-over",text:"That completes the over. The total stands at {score}/{wickets}."},{id:"completed-over-006",category:"completed-over",when:"completed-over",text:"{over} overs completed, {score}/{wickets} recorded. All duly entered."},{id:"chase-pressure-001",category:"late-chase-pressure",when:"late-chase-pressure",text:"{need} needed. Balls left: {balls}."},{id:"chase-pressure-002",category:"late-chase-pressure",when:"late-chase-pressure",text:"Target {target}. Still needed: {need}. Balls remaining: {balls}."},{id:"chase-pressure-003",category:"late-chase-pressure",when:"late-chase-pressure",text:"{need} required; balls left: {balls}. The equation is quite specific."},{id:"chase-pressure-004",category:"late-chase-pressure",when:"late-chase-pressure",text:"Needed: {need}. Balls remaining: {balls}. Arithmetic with consequences."},{id:"chase-pressure-005",category:"late-chase-pressure",when:"late-chase-pressure",text:"The target remains {target}; another {need} needed. Balls left: {balls}."},{id:"chase-pressure-006",category:"late-chase-pressure",when:"late-chase-pressure",text:"{need} needed, with {balls} deliveries available. A precise request."}];function je(n,e,t){if(!e.mikeSaw)return null;if(n==="batter-milestone"){const l=[50,100,150,200].find(h=>e.text.endsWith(` ${e.batter} reaches ${h}.`));return l===void 0?null:{batter:e.batter,mark:l}}const a=t.innings[e.innings-1];if(!a||$(a.balls)!==e.over)return null;if(n==="completed-over")return/^[1-9]\d*\.0$/.test(e.over)?{score:a.runs,wickets:a.wickets,over:e.over}:null;if(t.phase!=="match"||t.inningsIndex!==1||e.innings!==2||a.wickets>=10)return null;const i=t.innings[0];if(!i)return null;const r=i.runs+1,s=Math.max(0,r-a.runs),o=Math.max(0,300-a.balls);return r<=0||s<=0||o<=0||!(o<=18||s<=12)?null:{need:s,balls:o,target:r}}function Jt(n,e){return n.replace(/\{(\w+)\}/g,(t,a)=>String(e[a]??""))}function $e(n){return typeof n=="string"?n?[n]:[]:n}function Gt(n,e,t=""){const a=$e(t),i=["batter-milestone","late-chase-pressure","completed-over"];for(const r of i){if(!je(r,n,e))continue;const s=Ht.filter(l=>l.category===r),o=(n.id*2246822519>>>0)%s.length;for(let l=0;l<s.length;l++){const h=s[(o+l)%s.length];if(!a.includes(h.id))return h}return s[o]}return null}function Kt(n){return n.kind==="run"?n.runs===1?"single":n.runs===2?"two":"three":n.kind}function Yt(n,e=""){const t=$e(e),a=Kt(n),i=qt.filter(s=>s.category===a),r=(n.id*2654435761>>>0)%i.length;for(let s=0;s<i.length;s++){const o=i[(r+s)%i.length];if(!t.includes(o.id))return o}return i[r]}function he(n,e=""){if(!n.mikeSaw)return{templateId:null,text:"The crowd reacts while Mike is away from the seats. He missed that ball."};const t=Yt(n,e),a=/reaches (50|100|150|200)\./.exec(n.text);return{templateId:t.id,text:a?`${t.text} ${n.batter} reaches ${a[1]}.`:t.text}}function Ut(n,e,t=""){if(!n.mikeSaw)return he(n,t);const a=Gt(n,e,t);return a?{templateId:a.id,text:Jt(a.text,je(a.category,n,e))}:he(n,t)}const me=[{key:"older-woman",male:!1},{key:"striped-shirt-man",male:!0},{key:"cricket-cap-woman",male:!1},{key:"panama-man",male:!0},{key:"retro-jacket-man",male:!0},{key:"flat-cap-man",male:!0},{key:"rain-jacket-woman",male:!1},{key:"red-sweater-woman",male:!1}];function zt(n){return n==="toilet"?me.filter(e=>e.male):me}const be=91,Vt=7;function pe(n,e){let t=0;for(let a=0;a<n.length;a++)t=Math.imul(t,31)+n.charCodeAt(a)|0;return Math.abs(t)%Math.max(1,e)}function _t(n,e,t=[]){const a=n.indexOf("mike"),i=n.length<=13?Vt:(be-7)/Math.max(1,n.length-1),r=n.map((s,o)=>({id:s,relation:s==="mike"?"mike":a<0?"waiting":o<a?"ahead":"behind",x:be-o*i,castIndex:pe(s,e)}));return t.forEach((s,o)=>r.push({id:s,relation:"serving",x:98-o*5,castIndex:pe(s,e)})),{figures:r,ahead:a<0?0:a,behind:a<0?0:n.length-a-1}}function Qt(n,e){return`${n} ahead · wait ~${Math.ceil(e)}m`}const Ee=()=>crypto.getRandomValues(new Uint32Array(1))[0],d=new It(Ee()),K=document.querySelector("#app"),Zt={seats:Je,bar:Ge,food:Ce,toilet:Ke},ge={seats:De,bar:We,food:Pe,toilet:Ne},Xt={"older-woman":ze,"striped-shirt-man":Ve,"cricket-cap-woman":_e,"panama-man":Qe,"retro-jacket-man":Ze,"flat-cap-man":Xe,"rain-jacket-woman":et,"red-sweater-woman":tt};let W="",fe="",ke="",L="",H="",F=[],J=null,G=Me(localStorage);K.innerHTML=`<div class="v03">
  <header class="topbar">
    <div class="brand">HOWZAT<span>!</span><small>v0.36 · ODI DAY OUT · ${Be}</small></div>
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
    <div id="reaction" class="reaction"></div>
    <div id="scene-name" class="scene-name"></div>
    <div id="screen" class="screen"></div>
  </main>
  <section class="control-deck">
    <aside class="status-card">
      <div class="mike-card-head">
        <div class="mike-portrait-shell"><img id="mike-portrait" src="${ve}" alt="Mike"></div>
        <div class="mike-character"><div class="status-title"><b>MIKE</b><span id="mike-spend"></span></div><strong id="mike-condition"></strong><span id="mike-mood"></span></div>
      </div>
      <div id="needs" class="needs"></div>
      <div id="mike-drinks" class="pint-shelf" aria-label="Mike’s drink shelf"></div>
    </aside>
    <section class="match-panel">
      <div id="scoreboard" class="scoreboard" aria-live="polite"></div>
      <div class="commentary"><small>FROM THE GROUND</small><p id="commentary-text" aria-live="polite">The teams are making their way out.</p></div>
      <nav id="actions" class="actions" aria-label="Match day actions"></nav>
    </section>
    <aside class="jb-card">
      <div class="jb-person">
        <img id="jb-portrait" class="jb-portrait" src="${He}" alt="JB">
        <div class="jb-details"><b>JB</b><strong id="jb-condition"></strong><span id="jb-place"></span><small id="jb-state"></small></div>
      </div>
      <div id="jb-pints" class="jb-pint-shelf" aria-label="JB’s drink shelf"></div>
      <p id="speech" class="speech-bubble"></p>
    </aside>
  </section>
  <footer class="ticker"><span id="notice"></span><div id="speeds"></div></footer>
</div>`;const c=n=>document.getElementById(n),u=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),M=(n,e,t="",a=!1)=>`<button data-action="${e}" ${a?"disabled":""}><b>${n}</b>${t?`<small>${t}</small>`:""}</button>`,B=(n,e,t,a="",i=!1)=>`<button data-action="${t}" ${i?"disabled":""}><b><i aria-hidden="true">${n}</i>${e}</b>${a?`<small>${a}</small>`:""}</button>`,en=n=>({opener:"OPEN",batter:"BAT",keeper:"WK","seam-allrounder":"SEAM AR","spin-allrounder":"SPIN AR",pace:"PACE",spin:"SPIN"})[n.role];function ye(n){return n.map((e,t)=>`<li><span>${t+1}</span><b>${u(e.name)}</b><small>${en(e)} · BAT ${e.batting}${e.bowling>50?` · BOWL ${e.bowling}`:""}</small></li>`).join("")}function tn(){var e,t;const n=d.state;if(n.phase==="title")return`<article class="title-card"><p class="eyebrow">A VERY ENGLISH DAY OUT</p><h1>HOWZAT<span>!</span></h1><h2>v0.36 · International Edition</h2><p>One ODI. Two mates. Three facilities. Far too many decisions.</p>${M("ENTER RIVERSIDE","opponent","England await today’s visitors")}<small class="start-build">v0.36 · ${Be}</small></article>`;if(n.phase==="opponent")return`<article class="setup-card arrival-card"><p class="eyebrow">WELCOME TO RIVERSIDE</p><div class="match-ticket"><small>TODAY’S INTERNATIONAL</small><h2>ENGLAND <span>v</span> ${u(n.opponent.toUpperCase())}</h2><p>50 overs a side · gates open 10:45 · first ball 11:00</p><b>MIKE + JB · TWO SEATS · ONE QUESTIONABLE PLAN</b></div>${M("PICK THE FREE BET","bet","No stake. Plenty of bragging rights.")}</article>`;if(n.phase==="bet")return`<article class="setup-card bet-card"><p class="eyebrow">COMPLIMENTARY £10 BET</p><h2>Pick your trouble</h2><p>One free flutter for the day. Mike’s wallet remains untouched.</p><div class="choice-row">${M("ENGLAND TO WIN","pick-england")}${M(`${n.opponent.toUpperCase()} TO WIN`,"pick-opponent")}${M("ENGLAND 250+","pick-250")}</div></article>`;if(n.phase==="teams")return`<article class="teams-card"><p class="eyebrow">CONFIRMED XIs</p><div class="jb-bet-reveal"><small>JB’S FREE BET</small><b>${u(((e=n.jbBet)==null?void 0:e.pick)??"—")}</b><span>£10 free bet · chosen independently</span></div><div class="teams-continue">${M("GO TO THE TOSS","toss","Exactly one keeper · six bowling options")}</div><div class="team-columns"><section><h2>ENGLAND</h2><ol>${ye(n.englandXI)}</ol></section><section><h2>${u(n.opponent.toUpperCase())}</h2><ol>${ye(n.opponentXI)}</ol></section></div></article>`;if(n.phase==="toss")return`<article class="setup-card toss-card"><p class="eyebrow">OUT AT THE SQUARE</p><div class="toss-party"><span>ENG</span><div class="coin" aria-label="coin toss">£</div><span>${u(n.opponent.slice(0,3).toUpperCase())}</span></div><div class="toss-reveal"><h2>${u(n.tossWinner.toUpperCase())} WIN THE TOSS</h2><p>They choose to <b>${n.tossDecision.toUpperCase()}</b>. ${u(n.battingFirst)} will bat first.</p>${M("FIRST BALL","start","Take your Riverside seat")}</div></article>`;if(n.phase==="result"){const a=d.dayScore(),i=(s,o)=>o?`${s}: ${u(o.pick)} · ${o.won?`£${o.payout} return`:"lost"}`:"",r=G.map((s,o)=>`<tr class="${s.sequence===n.seed?"current":""}"><td>${o+1}</td><td>${s.player}</td><td>${s.score}</td><td>${u(s.title)}</td><td>v ${u(s.opponent)}</td></tr>`).join("");return`<article class="result-card"><p class="eyebrow">STUMPS AT RIVERSIDE</p><h2>${u(n.result)}</h2><div class="innings-summary">${n.innings.map(s=>`<div><b>${u(s.team)}</b><strong>${s.runs}/${s.wickets}</strong><span>${$(s.balls)} overs</span></div>`).join("")}</div><div class="bet-result">${i("Mike",n.mikeBet)}<br>${i("JB",n.jbBet)}</div><div class="day-score"><small>MIKE’S DAY OUT SCORE</small><strong>${a.total}</strong><em>${u(((t=G.find(s=>s.sequence===n.seed))==null?void 0:t.title)??"")}</em></div><ul class="reasons">${a.reasons.map(s=>`<li>${u(s)}</li>`).join("")}</ul>${M("PLAY ANOTHER ODI","reset","New opponent · new seed")}<p class="jb-final">JB: “${u(n.speech)}”</p><table class="high-scores"><caption>RIVERSIDE HONOURS BOARD</caption><tbody>${r}</tbody></table></article>`}return""}function nn(){const n=d.state.mike;return n.travelling?n.travelling.left<n.travelling.total/2?n.travelling.to:n.travelling.from:n.place}function an(){var A,O,U,z,V,_,Q;const n=d.state,e=n.mike,t=!!e.travelling||!!e.activity;if(c("journey").classList.toggle("hidden",!t),!t)return;const a=((A=e.activity)==null?void 0:A.kind)==="queued",i=((O=e.activity)==null?void 0:O.kind)==="service",r=((U=e.activity)==null?void 0:U.kind)==="eating",s=((z=e.travelling)==null?void 0:z.from)??e.place,o=((V=e.travelling)==null?void 0:V.to)??e.place,l=c("from-pic"),h=c("to-pic");l.src=a||i?Le:ge[s],h.src=ge[o],c("from-label").textContent=e.travelling?T(s):a?"BACK OF QUEUE":i?"COUNTER":"BEEFY’S",c("to-label").textContent=T(o);const g=c("mike-moving"),S=c("mike-moving-img"),x=e.travelling?1-e.travelling.left/e.travelling.total:e.activity?1-e.activity.left/Math.max(1,e.activity.total):0,f=(_=e.activity)==null?void 0:_.facility,k=f?zt(f):[],b=f&&(a||i)?_t(n.queues[f].patrons,k.length,n.queues[f].serving.map(R=>R.patron)):null,m=(b==null?void 0:b.ahead)??0,p=((Q=b==null?void 0:b.figures.find(R=>R.relation==="mike"))==null?void 0:Q.x)??96;g.classList.toggle("standing",!e.travelling),g.classList.toggle("drunk",!!e.travelling&&d.drunkGait()),g.style.left=e.travelling?`${12+x*76}%`:a?`${p}%`:i?"96%":"82%",S.src=e.travelling?d.drunkGait()?Ue:qe:ve,rn((b==null?void 0:b.figures.filter(R=>R.relation!=="mike"))??[],k.map(R=>Xt[R.key])),c("journey-title").textContent=e.travelling?"MIKE ON THE MOVE":a?"MIKE IN THE QUEUE":r?"MIKE IS EATING":"MIKE AT THE FRONT",c("journey-count").textContent=e.travelling?`${Math.ceil(e.travelling.left)} min walk`:a?Qt(m,d.queueWaitMinutes()):`${Math.ceil(e.activity.left)} min`}function rn(n,e){const t=c("route-fans"),a=new Set(n.map(i=>i.id));t.querySelectorAll("img[data-patron]").forEach(i=>{a.has(i.dataset.patron)||i.classList.contains("leaving")||(i.classList.add("leaving"),i.style.left="98%",window.setTimeout(()=>i.remove(),320))});for(const i of n){let r=t.querySelector(`img[data-patron="${CSS.escape(i.id)}"]`);r||(r=document.createElement("img"),r.dataset.patron=i.id,t.append(r)),r.src=e[i.castIndex],r.className=`queue-${i.relation}`,r.alt=i.relation==="serving"?"spectator being served":i.relation==="behind"?"spectator behind Mike":i.relation==="ahead"?"spectator ahead of Mike":"spectator waiting in queue",r.style.left=`${i.x}%`}}function sn(){const n=d.state,e=Lt(n),t=Nt(n);c("mike-spend").textContent=`Spent ${e.spent}`,c("mike-condition").textContent=e.sobriety.label,c("mike-mood").textContent=e.mood;const a=c("needs").closest(".status-card");a.className=`status-card mike-card sobriety-${e.sobrietyBand}${e.priority?" has-priority":""}`;const i=c("mike-portrait");i.dataset.band=String(e.sobrietyBand),i.alt=`Mike, ${e.sobriety.label.toLowerCase()}`;const r={THIRST:"💧",HUNGER:"🍔",BLADDER:"🚽"},s=(m,p,A,O)=>`<div class="need-card ${O} ${e.priority===m.toUpperCase()?"priority":""}" role="meter" aria-label="${m}: ${u(p)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${A}"><i aria-hidden="true">${r[m.toUpperCase()]}</i><div class="need-info"><div class="need-heading"><span>${m}</span><b>${A}</b></div><strong>${u(p)}</strong><span class="need-meter"><i style="width:${A}%"></i></span></div></div>`,o=(m,p="")=>`<i class="pint-glass ${p}" aria-hidden="true"><em style="height:${Math.round(m*100)}%"></em></i>`,l=(m,p="")=>m?`<span class="stock-glasses" aria-hidden="true">${Array.from({length:Math.min(2,m)},()=>o(1,p)).join("")}</span><b>×${m}</b>`:'<b class="empty-stock">EMPTY</b>';c("needs").innerHTML=`<div class="need-list">${e.needs.map(m=>s(m.name,m.label,m.value,m.tone)).join("")}</div>`,c("mike-drinks").innerHTML=`<div><span>Drinking</span><figure aria-label="${e.drinking>.001?"Pint in hand":"No pint in hand"}">${e.drinking>.001?o(e.drinking):'<b class="empty-stock">EMPTY</b>'}</figure></div><div><span>Reserve</span><figure aria-label="${e.reserve} reserve pints">${l(e.reserve)}</figure></div><div class="jb-stock"><span>For JB</span><figure aria-label="${e.forJB} pints for JB">${l(e.forJB,"for-jb")}</figure></div><small class="round-owner"><span>Next round</span><b>${e.round==="mike"?"Mike":"JB"}</b></small>`,c("jb-place").textContent=n.jb.travelling?`walking to ${T(n.jb.travelling.to)}`:T(n.jb.place),c("jb-condition").textContent=t.sobriety.label,c("jb-condition").className=`sobriety-tone-${t.sobriety.tone} sobriety-band-${t.sobriety.band}`;const h=c("jb-portrait");h.dataset.band=String(t.sobriety.band),h.alt=`JB, ${t.sobriety.label.toLowerCase()}`;const g=n.jb.barChoice==="pint-4"?24.8:n.jb.barChoice==="pint-2"?12.4:n.jb.barChoice==="water"?2.5:0,S=n.jb.barChoice==="water"?"one water":n.jb.barChoice?`${n.jb.barChoice.slice(-1)} pints`:"his round",x=n.jb.tripNote??`Next round: ${n.roundOwner==="jb"?"JB":"Mike"}`;c("jb-state").textContent=n.jb.activity?`${n.jb.activity.kind==="queued"?`${d.jbQueueAhead()} ahead · ${S}`:`Buying ${S}`} · £${g.toFixed(2)}`:x,c("jb-pints").innerHTML=`<div aria-label="JB currently drinking ${t.drinking>.001?"one pint":"no pint"}"><span>Drinking</span><figure>${t.drinking>.001?o(t.drinking):'<b class="empty-stock">EMPTY</b>'}</figure></div><div aria-label="JB reserve ${t.reserve} pints"><span>Reserve</span><figure>${l(t.reserve)}</figure></div><div aria-label="JB carrying ${t.forMike} pints for Mike"><span>For Mike</span><figure>${l(t.forMike,"for-jb")}</figure></div>`;const f=n.mike.place===n.jb.place&&!n.mike.travelling&&!n.jb.travelling;c("speech").closest(".jb-card").classList.toggle("away",!f);const b=c("speech");b.textContent=f&&n.minute<=n.speechUntil?n.speech:"",b.classList.toggle("hidden",!b.textContent)}function N(n){return d.state,q.filter(e=>e!==n).map(e=>{const t=e==="bar"?"TWELFTH MAN":e==="food"?"BEEFY’S":e==="toilet"?"FINE LEG TOILETS":"BACK TO SEATS",a=e==="bar"?"🍺":e==="food"?"🍔":e==="toilet"?"🚻":"🏟",i=Math.ceil(d.estimatedTripMinutes(e)),r=n==="seats"&&e!=="seats"?Math.ceil(d.estimatedOutingMinutes(e)):i,s=e==="seats"?0:d.queuePopulation(e),o=e==="seats"?0:Math.ceil(d.estimatedQueueWait(e)),h=e==="seats"?`~${i}m walk`:n==="seats"?`${s} ${s===1?"person":"people"} at venue · queue wait ~${o}m · time away ~${r}m`:`At venue ${s} · next trip ~${i}m`;return B(a,t,e,h)}).join("")}function on(){const n=d.state,e=n.mike;if(n.phase!=="match"){c("actions").innerHTML="";return}let t="";if(e.travelling)t=`<div class="busy-copy"><b>Walking to ${T(e.travelling.to)}</b><span>Cricket and queues keep moving.</span></div>`;else if(e.activity)t=`<div class="busy-copy"><b>${e.activity.kind==="queued"?`${d.queueAhead()} ahead at ${T(e.activity.facility)}`:e.activity.kind==="eating"?"Eating the burger":"At the front"}</b><span>${e.activity.kind==="queued"?"New arrivals join behind Mike.":`${Math.ceil(e.activity.left)} match minutes remaining.`}</span></div>`;else if(e.place==="seats")t=[N("seats"),n.roundOwner==="mike"?B("🍻","GO FOR THE ROUND","bar","Mike goes alone"):"",B("💬","TALK TO JB","talk","Have a word",n.jb.place!=="seats")].join("");else if(e.place==="bar"){const a=d.sharedRoundAvailability();t=[B("🍺","2 PINTS","buy-pint-2",a.allowed?"£12.40 · one each":a.reason,!a.allowed),B("🍺🍺","4 PINTS","buy-pint-4",a.allowed?"£24.80 · two each":a.reason,!a.allowed),B("💧","1 WATER","buy-water","£2.50"),N("bar")].join("")}else e.place==="food"?t=B("🍔","BEEFY’S BURGER","buy-burger","£7.50 · takes 8 min")+N("food"):t='<div class="busy-copy"><b>Visit complete</b><span>Choose where Mike goes next.</span></div>'+N("toilet");e.place!=="seats"&&!e.travelling&&!e.activity&&n.jb.place===e.place&&!n.jb.travelling&&!n.jb.activity&&(t+=B("💬","TALK TO JB","talk","Have a word")),t!==fe&&(c("actions").innerHTML=t,fe=t)}function ln(){var s,o,l,h;const n=d.state;if(c("fixture").textContent=`ENG v ${n.opponent.toUpperCase()}`,n.phase!=="match"&&n.phase!=="result"){c("top-status").textContent="RIVERSIDE",L&&(c("scoreboard").innerHTML="",L=""),c("clock").textContent="10:45",c("period").textContent="GATES OPEN";return}const e=d.scoreboard(),t=Re(n,e),a=t.stage==="interval"?"INTERVAL":t.stage==="result"?"FINAL":t.stage==="chase"?"CHASE":"INNINGS 1";c("top-status").textContent=a,c("clock").textContent=Ft(n.minute),c("period").textContent=n.phase==="result"?"RESULT":n.break?n.break.label.toUpperCase():a;const i=t.stage==="interval"?`<div class="board-detail interval-detail"><b>INTERVAL · TARGET ${t.chase.target}</b><span>${u(t.nextTeam)} chase · ${Math.ceil(((s=n.break)==null?void 0:s.left)??0)} min</span></div>`:t.stage==="result"?`<div class="board-detail result-detail"><b>${u(t.result??"Full time")}</b><span>${u(t.inningsSummary??"")}</span></div>`:t.stage==="chase"?`<div class="board-detail chase-detail"><b>NEED ${t.chase.need} FROM ${t.chase.balls}</b><span>TARGET ${t.chase.target} · RRR ${((o=t.chase.requiredRunRate)==null?void 0:o.toFixed(2))??"—"} · CRR ${t.currentRunRate.toFixed(2)}</span></div>`:`<div class="board-detail first-detail"><span class="board-batters">${t.batters.map(g=>`${g.striker?"▶ ":""}${u(de(g.name))} ${g.runs}`).join(" · ")}</span><span class="board-bowler">${u(de(((l=t.bowler)==null?void 0:l.name)??"—"))} ${u(((h=t.bowler)==null?void 0:h.figures)??"")} · CRR ${t.currentRunRate.toFixed(2)}</span></div>`,r=`<div class="scoreboard-face" data-stage="${t.stage}" aria-label="Riverside scoreboard: ${u(t.team)} ${t.runs} for ${t.wickets}, ${u(t.overs)} overs"><div class="scoreboard-heading"><b>RIVERSIDE · ${u(t.team.toUpperCase())}</b><span>${a}</span></div><div class="scoreboard-score"><strong>${t.runs}</strong><i>/</i><strong>${t.wickets}</strong><em>${t.overs} OV</em></div>${i}</div>`;r!==L&&(c("scoreboard").innerHTML=r,L=r)}function cn(){var a;const n=d.state,e=n.latest,t=Wt(n);if(t!==H)if(H=t,n.phase==="result"){const i=Re(n,d.scoreboard());c("commentary-text").textContent=`${n.result} · ${i.inningsSummary??""}`}else if(((a=n.break)==null?void 0:a.kind)==="innings"){const i=n.innings[0];c("commentary-text").textContent=`Innings break. ${i.team} made ${i.runs}/${i.wickets}; ${n.innings[1].team} need ${i.runs+1}.`}else if(n.break)c("commentary-text").textContent=`${n.break.label}. ${Math.ceil(n.break.left)} minutes.`;else if(e){const i=Ut(e,n,F);c("commentary-text").textContent=i.text,i.templateId&&(F.push(i.templateId),F.length>10&&F.shift())}else c("commentary-text").textContent=n.notice}function Y(){const n=d.state,e=nn();if(n.phase==="result"&&J!==n.seed){const r=d.dayScore();G=Ct(localStorage,{score:r.total,opponent:n.opponent,result:n.result,sequence:n.seed}),J=n.seed,W=""}ln(),cn(),an(),sn(),on(),K.firstElementChild.classList.toggle("prematch",!["match","result"].includes(n.phase)),c("painting").style.backgroundImage=`url("${Zt[e]}")`,c("painting").className=`painting ${e}`,c("scene-name").textContent=n.mike.travelling?`ON THE WAY TO ${T(n.mike.travelling.to)}`:T(dn()).toUpperCase();const a=n.phase==="match"?"":tn();if(a!==W&&(c("screen").innerHTML=a,W=a),c("screen").classList.toggle("open",n.phase!=="match"),c("screen").classList.toggle("start-screen",n.phase==="title"),c("screen").style.backgroundImage=n.phase==="title"?`url("${Ye}")`:"",n.phase==="title"){const r=c("screen").querySelector(".title-card button");if(r){const s=Pt(c("screen").clientWidth,c("screen").clientHeight);Object.assign(r.style,{left:`${s.left}px`,top:`${s.top}px`,width:`${s.width}px`,height:`${s.height}px`});const o=s.width/340,l=c("screen").querySelector(".title-card h2");l&&Object.assign(l.style,{left:`${s.left-48*o}px`,top:`${s.top-97*o}px`,width:`${436*o}px`,height:`${47*o}px`,fontSize:`${37*o}px`})}}c("notice").textContent=n.break?`${n.notice} ${Math.ceil(n.break.left)} min left.`:n.notice,c("reaction").textContent=n.latest&&n.minute-n.latest.minute<2&&["wicket","four","six"].includes(n.latest.kind)?n.latest.kind==="wicket"?"HOWZAT!":n.latest.kind.toUpperCase():"";const i=[1,4,12].map(r=>`<button data-speed="${r}" class="${n.speed===r?"active":""}">${r}×</button>`).join("");i!==ke&&(c("speeds").innerHTML=i,ke=i)}function dn(){return d.state.mike.place}K.addEventListener("click",n=>{const e=n.target.closest("button");if(!e)return;const t=e.dataset.action,a=e.dataset.speed;a&&d.setSpeed(Number(a)),t==="opponent"&&d.showOpponent(),t==="bet"&&d.showBet(),t==="pick-england"&&d.placeBet("England"),t==="pick-opponent"&&d.placeBet(d.state.opponent),t==="pick-250"&&d.placeBet("England 250+"),t==="toss"&&d.showToss(),t==="start"&&d.startMatch(),t==="reset"&&(d.reset(Ee()),J=null,F=[],H=""),(t==="bar"||t==="food"||t==="toilet"||t==="seats")&&d.travel(t),t==="bar-jb"&&d.travel("bar",!0),t==="seats-jb"&&d.travel("seats",!0),t==="talk"&&d.talk(),t!=null&&t.startsWith("buy-")&&d.joinQueue(t.slice(4)),Y()});let we=performance.now();function Fe(n){const e=Math.min(250,n-we)/1e3;we=n,d.advance(e),Y(),requestAnimationFrame(Fe)}Y();requestAnimationFrame(Fe);
