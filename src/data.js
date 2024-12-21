const gamesData = [
    {
        title: `Dredge`,
        score: 5,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `An inoffensively boring game. Part fishing & part Resident Evil 4 Attach Case Tetris game. Could've been a pretty good cosmic horror game but it was far too on the nose. A lot of crabs!`,
        imgLoc: `/img/Dredge.jpg`
    },
    {
        title: `Dave the Diver`,
        score: 5,
        year: 2023,
        beaten: 1,
        lastPlayed: 2024,
        comment: `A game that started strong but dived (ha) into frustration with annoying mechanics added every hour! Great animations and sprite work though. Bosses were awful. Music was solid and the match minigame was fun.`,
        imgLoc: `/img/Dave the Diver.jpg`
    },
    {
        title: `Astro Bot`,
        score: 9,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Some kino levels like Downsize Surprise, Luna Sola, Trunk of Funk. Great music and remixes. Bit too much fanservice. Why did this game need the Golden Gate Bridge! Delightful physics playground. Glad someone remembers Bloodborne.`,
        imgLoc: `/img/Astro Bot.jpg`
    },
    {
        title: `Brotato`,
        score: 6,
        year: 2022,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Fun on the Steam Deck but the secrets are lacking compared to something like Vampire Survivors, can see why it's cheap. Too RNG for my liking too but the build variety is nice.`,
        imgLoc: `/img/Brotato.jpg`
    },
    {
        title: `Pokemon Leaf Green`,
        score: 6,
        year: 2004,
        beaten: 1,
        lastPlayed: 2024,
        comment: `The GBA sound is ass. My friend chose my 6 party members and I stuck to it, Slowbro was a bro whereas Beedrill was a sore needle. I had forgotten how high the trainer density was back then but it was a welcome challenge.`,
        imgLoc: `/img/Pokemon Leaf Green.jpg`
    },
    {
        title: `Octopath Traveler 2`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Being able to remove the DOF, and other post-processing by editing an ini file was great. Partitio was a delight as was Ochette. Good chapter variety. Still suffers the same issues as the first game. Incredible music.`,
        imgLoc: `/img/Octopath Traveler 2.jpg`
    },
    {
        title: `Thank Goodness You're Here`,
        score: 8,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `An actual funny game. A really great ending. Jolly voice acting. Gags evolve and get better. Naughtier than expected as I did see a penis and the few swears that are there seemed unnecessary. Heavily repeats environments.`,
        imgLoc: `/img/Thank Goodness You're Here.jpg`
    },
    {
        title: `Armored Core VI`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Great scale and mech customisation but a bit too safe where I felt almost no desire to modify my mech 20% into the game. Loved Rusty and his theme tune. Wish I could pause cutscenes as my bladder could not handle it.`,
        imgLoc: `/img/Armored Core VI.jpg`
    },
    {
        title: `Rise of the Ronin`,
        score: 7,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `I find this games combat incredibly messy but once you nail down a bosses moveset, it becomes smoothly satisfying. Which is good because you fight every enemy about 5 times. Wonderful setting, beautiful armour, great waifus. Plot was hard as hell to follow but great to live in. 100 cats to collect!`,
        imgLoc: `/img/Rise of the Ronin.jpg`
    },
    {
        title: `Elden Ring: Shadow of the Erdtree`,
        score: 6,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `The most multi-layered world From has made and it's gorgeous with great boss music too. But fuck me, the bosses are awful. Especially the finale. A lot of asset reuse and empty environments. Loved Midra's Manse, excellent atmosphere in Abyssal Woods and Igon's VO killed it.`,
        imgLoc: `/img/Elden Ring Shadow of the Erdtree.jpg`
    },
    {
        title: `Spider-Man 2`,
        score: 6,
        year: 2023,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Insomniac truly make some ugly ass character models. A good sidequest involving pigeons which felt the most Spider-Man. Main story sucked. Great bugs like character models glowing like the sun. Thanks Japan for letting me get it for a tenner. MJ and a Stun Gun is stronger than Spider-Man, why!?`,
        imgLoc: `/img/Spider-Man 2.jpg`
    },
    {
        title: `Dragon's Dogma 2`,
        score: 7,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `A sequel that still feels unfinished, though exploring in NG+ was a delight. Almost feels like a remake. Enjoyed exploring the world with my 8ft wife and constantly getting ridiculed for having only female pawns.`,
        imgLoc: `/img/Dragons Dogma 2.jpg`
    },
    {
        title: `Persona 3 Reload`,
        score: 8,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `A high quality remake. This might be my favourite Persona though a few of the beginning social links are wank. Great presentation, ending, soundtrack and style. The style was a bit Persona 5 but in blue. Koromaru is best dog.`,
        imgLoc: `/img/Persona 3 Reload.jpg`
    },
    {
        title: `Tiny Tina's Wonderlands`,
        score: 3,
        year: 2022,
        beaten: 1,
        lastPlayed: 2024,
        comment: `I have nothing posititve to say about this. Often I rolled a "20" on these dice rolls for loot and I picked up none of it; very insulting. Why use D&D as a setting if you just have all the same guns from BL1-3, why!?`,
        imgLoc: `/img/Tiny Tina's Wonderlands.jpg`
    },
    {
        title: `Gitaroo Man`,
        score: 8,
        year: 2001,
        beaten: 1,
        lastPlayed: 2024,
        comment: `One of the hardest but funniest games I have ever played. Great soundtrack. Iffy analogue stick controls but maybe that's an emulation/skill problem. Wonderful music, short and sweet. One of the best romance sections of any game and incredibly hype.`,
        imgLoc: `/img/Gitaroo Man.jpg`
    },
    {
        title: `Like a Dragon Infinite Wealth`,
        score: 8,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Felt like a vacation in Hawaii and I even took 140+ selfies. Ichiban's plot was kinda boring and felt like just an excuse to have Yakuza shenanigans in Hawaii. Incredible mini-games. RGG asset reuse is second to none. Wonderful Kiyru moments honouring past games.`,
        imgLoc: `/img/Like a Dragon Infinite Wealth.jpg`
    },
    {
        title: `The Legend of Dragoon`,
        score: 7,
        year: 1999,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Beautiful towns and art. Quite funny/annoying to watch long animations play out only to miss. The worst translation with a nun named Wink. Combat system needed a bit more but at least it kept you engaged. `,
        imgLoc: `/img/The Legend of Dragoon.jpg`
    },
    {
        title: `Resident Evil 5`,
        score: 4,
        year: 2009,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Maybe the worst RE game but I have not played 6... yet. Doesn't start off strong and still gets worse. Mad Max costume was worth the extra 50p. Even the boulder punching scene glitches out.`,
        imgLoc: `/img/Resident Evil 5.jpg`
    },
    {
        title: `Like a Dragon Gaiden: The Man Who Erased His Name`,
        score: 6,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `What a long stupid title. The ending made me very sad and the quest where you just hang out with the boys was great. Plot was very betrayal heavy and I got a bit fed up of it.`,
        imgLoc: `/img/Like a Dragon Gaiden The Man Who Erased His Name.jpg`
    },
    {
        title: `Cyberpunk 2077: Phantom Liberty`,
        score: 6,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `I got a new GPU and revisited thanks to the 2.0 patch. It still kinda sucks! Idris Elba and Keanu Reeves are bad VA. The MSQ was mostly just listening to people with very few "spy thriller" moments. I experienced a sandstorm which was cool.`,
        imgLoc: `/img/Cyberpunk 2077 Phantom Liberty.jpg`
    },
    {
        title: `The Talos Principle 2`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `One of the most beautiful games I have played. I think as a whole, everything is weaker than the first. Didn't like the crew aspect, too much chatter. Difficulty never evolves, was too basic even at the very end but still enjoyed puzzle solving.`,
        imgLoc: `/img/The Talos Principle 2.jpg`
    },
    {
        title: `Baldur's Gate 3`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A 3 month journey. It's incredibly ambitious but too buggy for me to rate higher. I found the main story elements to be kind of boring and combat can be repetitive but the adventure is worth it. Loved some of the locations and depth of the world.`,
        imgLoc: `/img/Baldur's Gate 3.jpg`
    },
    {
        title: `Redfall`,
        score: 3,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A game so bad it makes me think I rate Borderlands too low. The final Raven skill tanks my FPS. Awful loot system with the worst level scaling. The dumbest AI. Talkative protag who kept being mean to his incredibly useful Raven. The Redfall town was nice though. Too many god damn notes.`,
        imgLoc: `/img/Redfall.jpg`
    },
    {
        title: `Shadow Gambit`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Quite buggy! Puzzle solving moments are almost gone due to the freeform character selection but some of their skills and designs are creative. Good synergy, and plenty of content but the islands are very boring. An ending that goes on far too long. Side characters are not used enough in the main plot.`,
        imgLoc: `/img/Shadow Gambit.jpg`
    },
    {
        title: `Resident Evil Village`,
        score: 5,
        year: 2021,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Shocked at how boring and "small" it felt. Almost felt like a boss rush after Castle Dimitrescu. Very few original ideas and the first person gimmicks already wore thin back in RE7. The factory level looked beautiful and ray tracing performance was a delight.`,
        imgLoc: `/img/Resident Evil Village.jpg`
    },
    {
        title: `Elden Ring`,
        score: 8,
        year: 2022,
        beaten: `5+`,
        lastPlayed: 2024,
        comment: `One of the best worlds I've adventured in but the boss fights mechnically are too similar and very annoying. Needs to go back to Demon's Souls originiality. I was in constant awe of the environments but wanted it over with well before the end.`,
        imgLoc: `/img/Elden Ring.jpg`
    },
    {
        title: `Yakuza: Like a Dragon`,
        score: 8,
        year: 2020,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A beat em up dev turned RPG dev and somehow made one of the best JRPGs of the last 10 years. A great game to explore in first person. Excellent enemy designs and humour. Fantastic ending. Takes a bit too long to get going and some plot points are incredibly dumb.`,
        imgLoc: `/img/Yakuza Like a Dragon.jpg`
    },
    {
        title: `Final Fantasy XVI`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A few 10/10 moments surrounded by many 5/10 moments. Boss spectacles like the Titan and Bahamut fight are incredible. Music is great. The game is very ugly and grey, motion blur out the ass, boring mandatory fetch quests.`,
        imgLoc: `/img/Final Fantasy XVI.jpg`
    },
    {
        title: `Pokemon Scarlet & Violet`,
        score: 7,
        year: 2022,
        beaten: 2,
        lastPlayed: 2022,
        comment: `Strong character development, neat final fight gimmick, great exploration and fair difficulty. Performance issues are aplenty and the new Pokemon designs as a whole are weak but I loved the world. Praise Larry, the best Gym Leader!`,
        imgLoc: `/img/Pokemon Scarlet & Violet.jpg`
    },
    {
        title: `It Takes Two`,
        score: 9,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Josef Fares might be one of the best directors who can drastically change the tone of each of his games. A wonderful creative and colourful co-op experience with plenty of side activities to do but a rather weak ending.`,
        imgLoc: `/img/It Takes Two.jpg`
    },
    {
        title: `The Crew`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2016,
        comment: `A Ubisoft formula wrapped around a thin racing game. I remember 1 race lasting like 15 minutes that was full of diverse terrain, with a long tunnel where you came out into a completely different environment.`,
        imgLoc: `/img/The Crew.jpg`
    },
    {
        title: `Grim Dawn`,
        score: 8,
        year: 2016,
        beaten: `5+`,
        lastPlayed: 2024,
        comment: `The APRG that feels "most right" to me even if a bit slow. Excellent lore, dark tone, wonderful Dual-class system, active modding community, build variety. It was a great Birthday gift with 1700+ hours spent.`,
        imgLoc: `/img/Grim Dawn.jpg`
    },
    {
        title: `Pokemon Black 2 & White 2`,
        score: 8,
        year: 2012,
        beaten: 3,
        lastPlayed: 2022,
        comment: `The most packed Pokemon game. Retreading past areas was a bit of a chore but plenty of changes were made to the environments. Absurd amount of side content, the ties to N were great. A shame the online died so quickly. I wish the "third" versions of each Gen were this good.`,
        imgLoc: `/img/Pokemon Black 2 & White 2.jpg`
    },
    {
        title: `Valkyria Chronicles`,
        score: 8,
        year: 2008,
        beaten: 2,
        lastPlayed: 2014,
        comment: `Possibly the first SRPG I ever played. Loved the main crew with their drama and character arcs. Isn't too anime. Huge battlefields. An incredible art style SEGA have done nothing with. A shame the ranking system is flawed. VEGETABLES!`,
        imgLoc: `/img/Valkyria Chronicles.jpg`
    },
    {
        title: `Dynasty Warriors 3`,
        score: 7,
        year: 2001,
        beaten: "5+",
        lastPlayed: 2004,
        comment: `Childhood favourite I refuse to play again cos I know it won't be great. Fell in love with Guan Yu. I enjoy the bad dub. I printed a Neoseeker guide to get the 4th weapon for every character and had the second player stand still. I remember staying up till 6am one day.`,
        imgLoc: `/img/Dynasty Warriors 3.jpg`
    },
    {
        title: `Bloodborne`,
        score: 10,
        year: 2015,
        beaten: `5+`,
        lastPlayed: 2024,
        comment: `I wish Sony remembered Bloodborne exists. A game that deserves a better framerate and visual boost. Weapon transformations are sick. The blood vial system is disappointing. My first playthrough ruined by a memory leak bug. One of the best ever DLCs. Incredible story.`,
        imgLoc: `/img/Bloodborne.jpg`
    },
    {
        title: `The Talos Principle`,
        score: 8,
        year: 2014,
        beaten: 2,
        lastPlayed: 2023,
        comment: `A ridiculous divergence of Croteams usual work and they nailed it. Weird ass philosophical game with puzzles that are a bit too easy but it makes up for it in how complex some of the secrets are to find.`,
        imgLoc: `/img/The Talos Principle.jpg`
    },
    {
        title: `Dark Cloud`,
        score: 9,
        year: 2000,
        beaten: 1,
        lastPlayed: 2014,
        comment: `One of the most cosiest JRPGs you will ever play. A great combination of dungeon crawling and town building. Enough freedom to let you develop how the town looks to your liking and not as feature-creep as the sequel. Building a Sun God Mech was the coolest thing!`,
        imgLoc: `/img/Dark Cloud.jpg`
    },
    {
        title: `Castlevania: Symphony of the Night`,
        score: 8,
        year: 1997,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game that looks incredible and plays very well. Some crazy drop rates and secrets that are mandatory to progress. A great twist that sadly I knew about due to playing it 22 years after it released. Emulation was not the best. Charming voice acting. A bit too easy.`,
        imgLoc: `/img/Castlevania Symphony of the Night.jpg`
    },
    {
        title: `Chrono Trigger`,
        score: 8,
        year: 1995,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A great JRPG with wonderful Mitsuda music. Incredibly complex for a 1995 game with how the time travel affects chests. A prison break out sequence that only lasts 30 minutes! Great side stories to flesh out the characters too.`,
        imgLoc: `/img/Chrono Trigger.jpg`
    },
    {
        title: `Resident Evil 4`,
        score: 9,
        year: 2005,
        beaten: 2,
        lastPlayed: 2022,
        comment: `A friend lent me the PS2 version and I couldn't get into it. Now I love the game! The starting village is iconic, Leon's quips are on-point, you can Suplex and Haymaker dudes. Like a lot of RE games, it gets worse as it goes on. "Your right hand comes off?"`,
        imgLoc: `/img/Resident Evil 4.jpg`
    },
    {
        title: `Wo Long: Fallen Dynasty`,
        score: 6,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A game simplified to parrying and became stale. A really good Lu Bu boss. My friend had constant server issues so we rarely did co-op. Felt low budget compared to Nioh 2 and the loot was even more frustrating. Really cool to see Dynasty Warriors characters in a different game.`,
        imgLoc: `/img/Wo Long.jpg`
    },
    {
        title: `Paper Mario`,
        score: 7,
        year: 2000,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A downgrade in some ways from Super Mario RPG but the companions were great, especially Parakarry: "Another letter duly delivered, a postman's job is never done." I finished it 7 minutes before the new year started and it's a great memory of the credits + fireworks with them going off in real life.`,
        imgLoc: `/img/Paper Mario.jpg`
    },
    {
        title: `Hi-Fi Rush`,
        score: 8,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A game plucked right out of a Dreamcast. Beautiful art style, great physical comedy, good ending, the weirdest references to Twin Peaks and Xenogears, unlockable outfits and wonderful music too. A lot of neat hidden mechanics to avoid the annoyances. Wish it had a lock-on.`,
        imgLoc: `/img/Hi-Fi Rush.jpg`
    },
    {
        title: `Metroid Prime Remastered`,
        score: 8,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A really great game where the screenshot button is more helpful than a map. Finding secrets is very satisfying, backtracking can be brutal. Incredibly cool how enemies react to your different beams. Modern controls make it tolerable at last. Great storytelling, loved scanning.`,
        imgLoc: `/img/Metroid Prime Remastered.jpg`
    },
    // {
    //     title: `Hitman World of Assassination`,
    //     score: 8,
    //     year: 2023,
    //     beaten: 1,
    //     lastPlayed: 2023,
    //     comment: `An incredible free update to an already great game with a fantastic rogue like element that should be implemented for IOI's 007 game. A really shitty common bug though of obnoxious lighting that basically forces you to restart the game or suffer with blindness.`,
    //     imgLoc: `/img/Hitman World of Assassination.jpg`
    // },
    {
        title: `Theatrhythm Final Bar Line`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Wonderful send off to Theatrhythm and a tribute to Final Fantasy but it's a shame iconic songs are locked behind DLC purchase crap. Too many XIV songs and a lot of them suck. Great credit sequence, remixes and new arrangements.`,
        imgLoc: `/img/Theatrhythm Final Bar Line.jpg`
    },
    {
        title: `Xenoblade Chronicles 3: Future Redeemed`,
        score: 7,
        year: 2023,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Rex has become a daddy figure. Satisfying end even if I wish Alvis was more involved. Fun optional bosses, fast levelling. Environments still suffer like the base game. Great to get the Xenogears singer back for the ending credits.`,
        imgLoc: `/img/Xenoblade Chronicles 3 Future Redeemed.jpg`
    },
    {
        title: `Monster Hunter Rise: Sunbreak`,
        score: 8,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `An excellent addition to a fantastic MonHun game. The new sub-species are disappointing but the roster as a whole is great with some classic monsters returning. HH got a boost! And most of all, AI partners make this my favourite MonHun. Dame Luchika is insane.`,
        imgLoc: `/img/Monster Hunter Rise Sunbreak.jpg`
    },
    {
        title: `Xenoblade Chronicles 3`,
        score: 7,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Great themes for a game to focus on and well explored by it's good main cast. Saddened by lack of party change compared to past games. Incredible handheld performance. Great music. The locations were too similar, and the explanation was half assed. Chain attacks were a downgrade.`,
        imgLoc: `/img/Xenoblade Chronicles 3.jpg`
    },
    {
        title: `Bayonetta 3`,
        score: 7,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Bonkers sequel that never starts, it just goes. Some insane moments like the entire musical bit. Too many chapters, and an ending that was so up/down but ended on a down. Great music but dull colours and the remnants of an open world idea are easily visible.`,
        imgLoc: `/img/Bayonetta 3.jpg`
    },
    {
        title: `Nobody Saves the World`,
        score: 7,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Wonderful art with good scale and exploration. Dungeon gimmicks are often irritating and prevent growth though each class is quite unique but some very under developed. Excellent music. co-op not saving locally sucked.`,
        imgLoc: `/img/Nobody Saves The World.jpg`
    },
    {
        title: `Pokemon Legends Arceus`,
        score: 6,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Starts off strong that ends up having typical field areas with barely a difference other than a colour swap. Upgrading the settlement was the best part with people scared of Pokemon, but the main story ending resorted to traditional Pokemon garbage. Great ideas to improve on.`,
        imgLoc: `/img/Pokemon Legends Arceus.jpg`
    },
    {
        title: `Kirby and the Forgotten Land`,
        score: 6,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Platformers need more worlds like Amusement Park, not fire/ice/water themes. Not a lot of abilities and focused on combat over puzzles but upgrades can be neat like the homing bombs. The 3D is a bit of a shame as barely any camera control. Great ending.`,
        imgLoc: `/img/Kirby and the Forgotten Land.jpg`
    },
    {
        title: `TMNT Shredders Revenge`,
        score: 6,
        year: 2022,
        beaten: 1,
        lastPlayed: 2022,
        comment: `My favourite beat em up since I hate that genre. Good art style, short enough for a fun 2 hour session. Really fun blending of enemies into the background but needed more level variety and less auto scrollers`,
        imgLoc: `/img/TMNT Shredders Revenge.jpg`
    },
    {
        title: `Lost Ark`,
        score: 2,
        year: 2022,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Proof some game developers are sadists. Constant padding, progress bars, awful dialogue, waifu bait characters. Turns out the game is currently not finishable after wasting 300 hours. Just an absolute grind with no hook to it aside from good hit impact in combat and Chaos Dungeons were fun.`,
        imgLoc: `/img/Lost Ark.jpg`
    },
    {
        title: `Toem`,
        score: 7,
        year: 2021,
        beaten: 3,
        lastPlayed: 2023,
        comment: `Cute art style and character designs, funny writing without going too dumb. Great photography mechanics and good puzzles to solve. Ending didn't have the budget they tried to go for but the journey was very well worth it. Real-time clock tower!`,
        imgLoc: `/img/Toem.jpg`
    },
    {
        title: `Psychonauts 2`,
        score: 8,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Really creative and colourful worlds that all seem to drag on a tiny bit too long and consisted of too many cutscenes with fetching items. However, the music is incredible, art direction has made Psychonauts weird world come to life. Bosses not so good.`,
        imgLoc: `/img/Psychonauts 2.jpg`
    },
    {
        title: `Monster Hunter Stories 2`,
        score: 7,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Significant improvement from the first. Egg hunting is fun and plentiful, great combat system with major weapon additions and a co-op buddy, though too many bow users. Decent challenge but a bit too RNG. Also bummed about some monsters not being tameable.`,
        imgLoc: `/img/Monster Hunter Stories 2.jpg`
    },
    {
        title: `Hitman Season 3`,
        score: 8,
        year: 2021,
        beaten: 2,
        lastPlayed: 2023,
        comment: `What a step up in terms of objective variety. It embraced the fun element which made this game seem more 'canonical'. Solving a murder mystery while going to murder, hunting hitmen hunting you, and even a train mission!`,
        imgLoc: `/img/Hitman Season 3.jpg`
    },
    {
        title: `Monster Hunter Rise`,
        score: 8,
        year: 2021,
        beaten: 2,
        lastPlayed: 2022,
        comment: `Monster Hunter goes full Japan mode and it's great. The new monsters are the best set so far but I still miss many older ones not seen in a long time like Qurupeco.`,
        imgLoc: `/img/Monster Hunter Rise.jpg`
    },
    {
        title: `Metroid Dread`,
        score: 8,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Having no nostalgia for Super, and no other experience, I had a good old time. The robots were annoying and I spend too much time looking at the map but simply controlling Samus feels great. Walking into bosses arse does far too much damage.`,
        imgLoc: `/img/Metroid Dread.jpg`
    },
    {
        title: `Super Mario 3D World Bowsers Fury`,
        score: 7,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `The speed boost to the base game makes a lot of difference but the levels now feel really short. Bowsers Fury was somewhat great but felt tied down to the 3D World engine.`,
        imgLoc: `/img/Super Mario 3D World Bowsers Fury.jpg`
    },
    {
        title: `Ratchet & Clank: A Rift Apart`,
        score: 7,
        year: 2021,
        beaten: 1,
        lastPlayed: 2023,
        comment: `A very safe Ratchet game. Rivet sucks for just being another Ratchet instead of giving her a unique personality. Big Head Mode is of course a delight, very particle heavy which looked great and some planets were beautiful.`,
        imgLoc: `/img/Ratchet and Clank A Rift Apart.jpg`
    },
    {
        title: `Shin Megami Tensei V`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `5 years it took since the reveal, and this is both the best and worst SMT I have played. Great visual design for UE, best exploration, great music but no real standouts. Story and characters are awful and going back to the Nocturne storytelling was bad.`,
        imgLoc: `/img/Shin Megami Tensei V.jpg`
    },
    {
        title: `Liblade`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A fun short game with neat bosses. Music was forgettable and some of the platform sections were kinda crappy with assets looking out of place. Real good final boss that was like a low budget Metroid Dread.`,
        imgLoc: `/img/Liblade.jpg`
    },
    {
        title: `Forza Horizon 5`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `I actually got the boxart car in a spin, sold it for 3 million then bought the 5 million castle. Rated FH3 too high as this is better, sorta. Sea of Thieves horn saved it, wish I got Banjo Kazooie horn.`,
        imgLoc: `/img/Forza Horizon 5.jpg`
    },
    {
        title: `Unpacking`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A cute game with nice pixel art. Who knew how simple it is to get a house with 2 bathrooms after leaving your parents house 3 years prior. Not enough to disect a worthwhile story but Godzilla blu-rays was cool.`,
        imgLoc: `/img/Unpacking.jpg`
    },
    {
        title: `Death's Door`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Some of the best music of the year but a game that has no identity. Too close to the Zelda formula with environments that look too similar. Great and poor bosses. Umbrella weapon is dope and has some good secrets.`,
        imgLoc: `/img/Death's Door.jpg`
    },
    {
        title: `Shadow Tactics: Aiko's Choice`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Nice to see love for this game but the expansion didn't improve in the areas Desperados 3 did. A story that didn't need to be told but the coastline level was wonderful and still solid designs all around.`,
        imgLoc: `/img/Shadow Tactics Aiko's Choice.jpg`
    },
    {
        title: `Pokemon Brilliant Diamond & Shining Pearl`,
        score: 6,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `I got my first caught wild shiny within 5 hours of gametime. One was waifu bait and the other was Haunter which was cool. Elite 4 wrecked my ass but I abused battle items on Pengum which is something I've never done before.`,
        imgLoc: `/img/Pokemon Brilliant Diamond & Shining Pearl.jpg`
    },
    {
        title: `Guardians of the Galaxy`,
        score: 5,
        year: 2021,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Beautiful sci-fi environments and creatures, but constant dialogue annoyed me to death. Though the narative was pretty strong with good build up. Combat was messy but music mixing was great and sometimes flowed together very well. Crashes and bugs too.`,
        imgLoc: `/img/Guardians of the Galaxy.jpg`
    },
    {
        title: `Life is Strange True Colors`,
        score: 5,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `The chapter 3 LARP section was really good but the game could have been a good detective investigation mystery game but ended up being quite placid. Really dumb super power that was under utilized with shoddy writing.`,
        imgLoc: `/img/Life is Strange True Colors.jpg`
    },
    {
        title: `Kena Bridge of Spirits`,
        score: 5,
        year: 2021,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Act 2 is where the game shines yet it felt so short in comparison to the other areas. It had a clear objective and you could see your surroundings not filled by trees. Many boss fights didn't have designs that stood out but some were fun and surprisingly hard. The parry is the absolute worst combined with slow camera speed and poor FOV.`,
        imgLoc: `/img/Kena Bridge of Spirits.jpg`
    },
    {
        title: `Diablo 2 Resurrected`,
        score: 5,
        year: 2021,
        beaten: 2,
        lastPlayed: 2023,
        comment: `I played a Holy Fire paladin and got absolutely screwed over towards the end of the game. Maybe it's a good thing D3 casualised everything. I still think loot space is wank but the environments are nice.`,
        imgLoc: `/img/Diablo 2 Resurrected.jpg`
    },
    {
        title: `New Pokemon Snap`,
        score: 4,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `I didn't have any nostalgia for the first entry and was still disappointed. I guess I envisioned a snappy arcade photography game but the pace drags and rewards you for taking bad photos due to an odd * star rating just to flesh out an area that feels initially empty.`,
        imgLoc: `/img/New Pokemon Snap.jpg`
    },
    {
        title: `D&D Dark Alliance`,
        score: 4,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Archer was overpowered. Played with a buddy. Dumb AI that was easy exploitable. Loot was awful and looked generic with no special set looks. Repetitive enemy designs that were both common and boss fights. Jank collision detection yet the most fun I've had being an archer.`,
        imgLoc: `/img/D&D Dark Alliance.jpg`
    },
    {
        title: `Luna's Fishing Garden`,
        score: 4,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Initially cute but that does wear off eventually and only leaves behind a game that very quickly just plays itself. Nice art but not very well animated and isn't enough fish or trees to make each of the mechanics have enough depth.`,
        imgLoc: `/img/Luna's Fishing Garden.jpg`
    },
    {
        title: `Balan Wonderworld`,
        score: 2,
        year: 2021,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Painful. So bad it almost seems self sabotaging by spiteful developers as there is clear creative direction and good character designs but why would you make a 3D platformer, take away the ability to jump, but make jumping MANDATORY at times.`,
        imgLoc: `/img/Balan Wonderworld.jpg`
    },
    {
        title: `Hades`,
        score: 8,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A fun game I played while exercising as a run through was about 40ish minutes. I probably didn't appreciate the music enough as I always had something like Taskmaster on in the background.`,
        imgLoc: `/img/Hades.jpg`
    },
    {
        title: `Nioh 2`,
        score: 8,
        year: 2020,
        beaten: 2,
        lastPlayed: 2021,
        comment: `The new Yokai designs are great. It was fun watching my buddy die 100 times to a boss that was already nerfed. The DLC adds a female Vergil character so that fight is automatically a 10.`,
        imgLoc: `/img/Nioh 2.jpg`
    },
    {
        title: `Wasteland 3`,
        score: 8,
        year: 2020,
        beaten: 2,
        lastPlayed: 2022,
        comment: `Played with a buddy which was a co-op nightmare due to the amount of bugs and not quicksaving when we disconnected. Great covers of classic songs with really neat features for a CRPG not seen in other games.`,
        imgLoc: `/img/Wasteland 3.jpg`
    },
    {
        title: `Astro's Playroom`,
        score: 8,
        year: 2020,
        beaten: 1,
        lastPlayed: 2023,
        comment: `The best PS5 exclusive. and it's free. Dualsense is used very well. Some of the transformations I do not like and it is very similar to the VR game.`,
        imgLoc: `/img/Astro's Playroom.jpg`
    },
    {
        title: `Xenoblade Chronicles: Definitive Edition`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `The levels feel very wide and flat but I blame the Wii for that. Still, it's got such good music and the QoL related to quests is a 10. I got filtered and turned on casual mode after taking a 1 year break mid-way through.`,
        imgLoc: `/img/Xenoblade Chronicles DE.jpg`
    },
    {
        title: `Desperados 3`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A game so similar to Shadow Tactics, I wish I took a longer break. That said, the more local setting made levels much more free and enjoyable, but I did not enjoy the characters as much. Both excellent games I wish I was better at.`,
        imgLoc: `/img/Desperados 3.jpg`
    },
    {
        title: `Dreams`,
        score: 7,
        year: 2020,
        beaten: 2,
        lastPlayed: 2023,
        comment: `Media Molecule proves once again they are the best first party Sony developer. Alex Evans has left now which saddens me but Dreams is incredible at simplifying game development for all users. The most fun I've had in my job.`,
        imgLoc: `/img/Dreams.jpg`
    },
    {
        title: `Deep Rock Galactic`,
        score: 8,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Played with a couple of buds and had a rocking good time but it can get a bit repetitive heading towards the promotion rank but multiplayer communication is very well implemented.`,
        imgLoc: `/img/Deep Rock Galactic.jpg`
    },
    {
        title: `The Last of Us 2`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Half the game is flashbacks. I liked Abby as a new protagonist but it was weird to have a second encounter, felt like it should have ended earlier. Some well designed combat encounters but the infected seemed to almost not exist.`,
        imgLoc: `/img/The Last of Us 2.jpg`
    },
    {
        title: `Demon's Souls Remake`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Yay, I love playing PS+ to play this game online when the original did not. Shame about the lack of new features. Armour set additions are nice though. Penetrators Sword is ruined. Still hate the art direction and music. But it is still Demon's Souls.`,
        imgLoc: `/img/Demon's Souls Remake.jpg`
    },
    {
        title: `One Piece Pirate Warriors 4`,
        score: 7,
        year: 2020,
        beaten: 2,
        lastPlayed: 2022,
        comment: `The style types for characters is a great addition and the roster has a good mix of unique playstyles. The story is awful but could have ended worse, online issues frequent. Bege is the best. Good difficulty".`,
        imgLoc: `/img/One Piece Pirate Warriors 4.jpg`
    },
    {
        title: `Persona 5 Royal`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `It didn't feel too bad playing what is essentially the same game again. The third semester was an excellent piece of content with a great villain who had a worthy cause.`,
        imgLoc: `/img/Persona 5 Royal.jpg`
    },
    {
        title: `Pokemon Mystery Dungeon DX`,
        score: 7,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Dropped it a bit way in, turns out the 20? symbols on the main menu for bosses/legendaries, only 6 are filled in before credits. Went back, and it's pretty good. The fugitive scene is the most emotional Pokemon has been.`,
        imgLoc: `/img/Pokemon Mystery Dungeon DX.jpg`
    },
    {
        title: `Resident Evil 3 Remake`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2022,
        comment: `The gore is a significant drop-off and the general zombies were boring but the Nemesis fights were pretty good. Racoon City was a delight to explore with great advertisements. Voice acting quality was off.`,
        imgLoc: `/img/Resident Evil 3 Remake.jpg`
    },
    {
        title: `Sackboy: A Big Adventure`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Co-op levels are really great but it's a shame about the lag. An accolades button still exists that does nothing. Great amount of costumes, even a Toem one. Last level was bullshit. Bosses kinda boring, and the length wore out it's welcome.`,
        imgLoc: `/img/Sackboy A Big Adventure.jpg`
    },
    {
        title: `Spider-Man: Miles Morales`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2023,
        comment: `It's fine I guess. Feels like a typical open world clutter and lacks the emotional impact of the first game. Where did the electric powers come from. Still enjoyed zipping around and the fast pace. Bosses face was missing during the finale.`,
        imgLoc: `/img/Spider-Man Miles Morales.jpg`
    },
    {
        title: `Animal Crossing New Horizons`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `It's frustrating that a game based on a virtual island with many villagers couldn't bother to animate them doing anything on said island and forcing me to do all the slow tedious work. There was also a dog called Mac who I bullied as he gifted me a tombstone and haunted my dreams.`,
        imgLoc: `/img/Animal Crossing New Horizons.jpg`
    },
    {
        title: `Bugsnax`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A small charming game but the environments are disappointing. The ending felt a bit naff but the characters were very likable and not obnoxious. Not a lot of variety in Snax and later on it got more annoying than fun to catch them.`,
        imgLoc: `/img/Bugsnax.jpg`
    },
    {
        title: `Cyberpunk 2077`,
        score: 6,
        year: 2020,
        beaten: 2,
        lastPlayed: 2023,
        comment: `A somewhat waste of a game set in 2077 with barely any interesting cyberpunk activities to do. Adam Smasher still dies in about 20 seconds. Immersion breaking bugs still persist and quest blockers. Happier with the Sun ending this time around.`,
        imgLoc: `/img/Cyberpunk 2077.jpg`
    },
    {
        title: `Ghost of Tsushima`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `More Ass Creed in Japan than I expected. Quite bummed by the wind design not replacing constant opening the map. Very basic combat with little enemy variety. Good post-game support and a Bloodborne outfit.`,
        imgLoc: `/img/Ghost of Tsushima.jpg`
    },
    {
        title: `Final Fantasy VII Remake`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A mixed bag that had excellent combat and the faithful adaptions of the original are handled well such as the boss fights and music. Though Nomura needs to have some restraint and I don't trust where the game will go.`,
        imgLoc: `/img/Final Fantasy VII Remake.jpg`
    },
    {
        title: `Destroy All Humans (Remake)`,
        score: 6,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Has some charm and didn't feel too dated. Humour was thankfully before the LEET internet timeframe. Really enjoyed Mr Crypto voice actor. The anal probe gun was not as fun as you hope.`,
        imgLoc: `/img/Destroy All Humans.jpg`
    },
    {
        title: `Minecraft Dungeons`,
        score: 5,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A cooperative dumbed down ARPG experience that while not insultingly bad, just didn't have any stand out moments.`,
        imgLoc: `/img/Minecraft Dungeons.jpg`
    },
    {
        title: `Apple Slash`,
        score: 5,
        year: 2020,
        beaten: 1,
        lastPlayed: 2022,
        comment: `A one man effort can't excuse this game lasting 30 minutes. Very basic, nice animation and hit feedback. Constant camera shake was an eye-sore. Rough translation.`,
        imgLoc: `/img/Apple Slash.jpg`
    },
    {
        title: `Tokyo Mirage Sessions (#FE)`,
        score: 4,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `What was supposed to be a Fire Emblem x Shin Megami Tensei game became a game built around cute girls singing but at least it had a fun combat system.`,
        imgLoc: `/img/Tokyo Mirage Sessions.jpg`
    },
    {
        title: `The Avengers`,
        score: 3,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `DO YOU ENJOY FIGHTING ROBOTS!? YOU SHOULD! A tedious action game where nothing feels quite right. Heavy grind, poor UI and crap equipment power level. Black Widow shooting the final boss reminded me of DMC2.`,
        imgLoc: `/img/The Avengers.jpg`
    },
    {
        title: `Fifa 21`,
        score: 2,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `I can't believe they charge £40+ for this game when the Ultimate Team stuff doesn't even carry over to the next game. Went from Tranmere to Bournemouth to Liverpool in 1 year and now I don't start cos Liverpool bought Ramos.`,
        imgLoc: `/img/Fifa 20.jpg`
    },
    {
        title: `Fairy Tail RPG`,
        score: 2,
        year: 2020,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Played to feel suffering because I played a bunch of good games at the time. Crashed when loading constantly, so long. Played it before going to bed and dreaded sleeping.`,
        imgLoc: `/img/Fairy Tail RPG.jpg`
    },
    {
        title: `Sekiro`,
        score: 8,
        year: 2019,
        beaten: `5+`,
        lastPlayed: 2021,
        comment: `Congrats to Miyazaki on a GOTY award! I streamed this for friends and think it negatively affected my enjoyment. Ruthless at times and beautiful at others. Constantly item pop ups are irritating and limit it to an 8.`,
        imgLoc: `/img/Sekiro.jpg`
    },
    {
        title: `Resident Evil 2 Remake`,
        score: 8,
        year: 2019,
        beaten: 2,
        lastPlayed: 2020,
        comment: `My first RE game I finished and I had a blast even if I thought some parts were dumb. It set the redemption arc for Capcom into high gear and Mr. X makes the game fantastic.`,
        imgLoc: `/img/Resident Evil 2 Remake.jpg`
    },
    {
        title: `Monster Hunter World Iceborne`,
        score: 8,
        year: 2019,
        beaten: 2,
        lastPlayed: 2020,
        comment: `Mon Hun World fleshed out to be the bst it can be. The claw makes the game somehow less fun by making it mandatory to level the playing field with a monster. Capcom is back to being one of the best in the biz.`,
        imgLoc: `/img/Monster Hunter World Iceborne.jpg`
    },
    {
        title: `Luigi's Mansion 3`,
        score: 8,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `One of my favourite Switch games that had so much creativity in each room of the hotel but felt the need to pad it out. I'm glad Nintendo now owns Next Level Games as they deserve to keep making great games.`,
        imgLoc: `/img/Luigi's Mansion 3.jpg`
    },
    {
        title: `The Legend of Zelda Link's Awakening DX`,
        score: 8,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Never played the original but this is probably my favourite traditional Zelda game even if I don't remember the dungeons. It's NPCs were charming and the game had a dreamlike atmosphere like we see in Demon's Souls.`,
        imgLoc: `/img/The Legend of Zelda Link's Awakening.jpg`
    },
    {
        title: `Ace Combat 7`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `First time playing a flight sim(ish) game and I had fun primarily due to the fantastic sound design and visuals but parts did drag.`,
        imgLoc: `/img/Ace Combat 7.jpg`
    },
    {
        title: `Beat Saber`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A simple idea executed very well; at least on PC where you could get custom songs. Main soundtrack is quite crap and reminds me why I hate PSVR but I do love it when that one song goes: We're playin, we're playin, we're playin BEAT SABER!`,
        imgLoc: `/img/Beat Saber.jpg`
    },
    {
        title: `Star Wars Jedi Fallen Order`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Excellent level design surrounded by things that feel cellotaped together and somehow functions with Unreal Engine issues propping up constantly. Force powers were very basic but BD-1 is a great addition to the legendary Droid characters in Star Wars.`,
        imgLoc: `/img/Star Wars Jedi Fallen Order.jpg`
    },
    {
        title: `Yoshi's Crafted World`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Starts off quite bad, but improves significantly. Post-start world themes are unique and aren't packed with levels to drag on. A great art style and fun bosses and funny cutscenes due to mean dialogue choices. Great Shy Guy designs.`,
        imgLoc: `/img/Yoshi's Crafted World.jpg`
    },
    {
        title: `Super Mario Maker 2`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I made a Bloodborne-inspired level and uploaded it but no one played it. Felt like a waste of time. Still a charming game with new Koji Kondo music but the UI didn't transfer well form the Wii U era.`,
        imgLoc: `/img/Super Mario Maker 2.jpg`
    },
    {
        title: `Marvel Ultimate Alliance 3`,
        score: 7,
        year: 2019,
        beaten: 2,
        lastPlayed: 2020,
        comment: `Better than all the MCU films combined, actually I do like Iron Man 1. Such a large roster with some unknown characters that got as much care as the main ones. A great love letter to Marvel.`,
        imgLoc: `/img/Marvel Ultimate Alliance 3.jpg`
    },
    {
        title: `A Short Hike`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A cute charming game with a sweet story and an even sweeter protagonist. Not sure why the bird has a climbing ability though.`,
        imgLoc: `/img/A Short Hike.jpg`
    },
    {
        title: `Katana Zero`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game I wish I was better at but still found myself enjoying the music and style. Quite similar to Hotline Miami in vibes but slower while being punishing.`,
        imgLoc: `/img/Katana Zero.jpg`
    },
    {
        title: `Fire Emblem: Three Houses`,
        score: 7,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `BERNIE! BERNIE! BERNIE! The school setting does get boring and each of the houses first half being the same missions does suck when replaying, but before release I had not much hope for this. Why did I doubt Intelligent Systems.`,
        imgLoc: `/img/Fire Emblem Three Houses.jpg`
    },
    {
        title: `Devil May Cry 5`,
        score: 7,
        year: 2019,
        beaten: 3,
        lastPlayed: 2021,
        comment: `Waited so long for this and it didn't live up to hype. I streamed my first playthrough like with Sekiro which probably affected my enjoyment but I am happy to see Nero dethrone Dante.`,
        imgLoc: `/img/Devil May Cry 5.jpg`
    },
    {
        title: `The Outer Worlds`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game that promised so much yet felt like it was stuck in the past living off Fallout New Vegas' fame. While it had some incredible designs I did fall off fast.`,
        imgLoc: `/img/The Outer Worlds.jpg`
    },
    {
        title: `Gears 5`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `This game starts off incredibly well with it's horror setting but quickly turns into padded crap inspired by other wide linear games. Some set pieces in levels such as the rotating mechanical arm was really cool though.`,
        imgLoc: `/img/Gears 5.jpg`
    },
    {
        title: `Fifa 20`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Felt the football fever what with Liverpool doing well and while this game can be fun, it's online systems that promote gambling make me hate it due to it being such a focus.`,
        imgLoc: `/img/Fifa 20.jpg`
    },
    {
        title: `Dragon Quest Builders 2`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A massive disappointment compared to the first but I got to build some fun things like a Pokeball forest. I also played it on the switch for cosy lying in bed and yet it still disappointed me.`,
        imgLoc: `/img/Dragon Quest Builders 2.jpg`
    },
    {
        title: `Crackdown 3`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `It finally came out and it was alright. I like Terry Crews so that helped playing it a little bit. But I like jumping around for orbs.`,
        imgLoc: `/img/Crackdown 3.jpg`
    },
    {
        title: `Astral Chain`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Platinum Games made a Jojo's Bizarre Adventure game and it should be good, and it is mostly. But having all the fights happen in the red dimension made it visually boring when the cyberpunk world aesthetic is really pretty.`,
        imgLoc: `/img/Astral Chain.jpg`
    },
    {
        title: `Metal Wolf Chaos XD`,
        score: 6,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A birthday present which is always appreciated and I had a good time thanks to the funny bad voice acting and amount of explosions but the mission structure was very basic.`,
        imgLoc: `/img/Metal Wolf Chaos XD.jpg`
    },
    {
        title: `Slay the Spire`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A basic addictive card game that started the card rougelike genre but awful story and art kept me from coming back once I made it to the heart.`,
        imgLoc: `/img/Slay the Spire.jpg`
    },
    {
        title: `Monster Sanctuary`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game that got worse as it went on. While it had cute monster designs, the difficulty meant you had to have a strict selection to make it past bosses that I never wanted to use.`,
        imgLoc: `/img/Monster Sanctuary.jpg`
    },
    {
        title: `Darksiders Genesis`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2021,
        comment: `The levels got better as it went on but the builds being based off rare creature dropped really sucked but some of the abilities you naturally get were rad. Some iffy collision and odd occlusion prioritising was dumb.`,
        imgLoc: `/img/Darksiders Genesis.jpg`
    },
    {
        title: `Sayonara Wild Hearts`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Short game, but with great music and visual style. I played it on a Switch handheld and could barely make anything out which probably made me think less of it.`,
        imgLoc: `/img/Sayonara Wild Hearts.jpg`
    },
    {
        title: `Puzzle Quest: The Legend Returns`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2019,
        comment: `An addictive puzzle game that somehow ran like garbage on the Switch. A new one has just been announced but it's free2play so I don't expect much.`,
        imgLoc: `/img/Puzzle Quest The Legend Returns.jpg`
    },
    {
        title: `Code Vein`,
        score: 5,
        year: 2019,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Awful and comical level design of dumb shortcuts and levers that activate ladders in opposite parts of the map and constant ambushes. Good upgrade system that From could learn a thing from. Cute characters and neat magic system too.`,
        imgLoc: `/img/Code Vein.jpg`
    },
    {
        title: `Pokemon Sword & Shield`,
        score: 5,
        year: 2019,
        beaten: 3,
        lastPlayed: 2020,
        comment: `An awful story, bad post-game, heavy emphasis of online elements due to Pokemon Go popularity, but this gen introduced Mr. Rime, Falinks, Toxtricity, Clobbopus, Sirfetch'd, Appletun and Kingler with a beard, so it's not all bad.`,
        imgLoc: `/img/Pokemon Sword & Shield.jpg`
    },
    {
        title: `Remnant from the Ashes`,
        score: 4,
        year: 2019,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A unique third person shooter which has some Dark Souls influence. I don't think it works but I also did take a 3 month break between sessions with a buddy.`,
        imgLoc: `/img/Remnant from the Ashes.jpg`
    },
    {
        title: `Borderlands 3`,
        score: 4,
        year: 2019,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Initially my favourite BL game, but the bugs at the end forcing me to replay a section twice soured me a lot. Great looking environments and fun guns like a shotgun that fired sawblades. Characters never shut up but less Tina and Claptrap, nice!`,
        imgLoc: `/img/Borderlands 3.jpg`
    },
    {
        title: `Astrobot Rescue Mission`,
        score: 9,
        year: 2018,
        beaten: 2,
        lastPlayed: 2021,
        comment: `An incredible platformer made even better by being in VR. It had great boss fights and serves as an excellent starting point for VR due to the fixed camera, fluid movement, and fun environmental screen gimmicks.`,
        imgLoc: `/img/Astrobot Rescue Mission.jpg`
    },
    {
        title: `Red Dead Redemption 2`,
        score: 8,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `An incredibly beautiful open world that wasn't as fun to be in as you would want a cowboy simulator to be. Arthurt Morgan is Rockstars best protagonist.`,
        imgLoc: `/img/Red Dead Redemption 2.jpg`
    },
    {
        title: `Monster Hunter World`,
        score: 8,
        year: 2018,
        beaten: 2,
        lastPlayed: 2019,
        comment: `It was nice to finally play Monster Hunter on something other than a small screen for the first time since 3U on the Wii U but the monster roster was too small to keep me playing for a long time but Monster Hunter finally acheived mainstream success.`,
        imgLoc: `/img/Monster Hunter World.jpg`
    },
    {
        title: `God of War (2018)`,
        score: 8,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `One of the best reboots but the stupid camera being stuck to the back of Kratos really took away the impact of scale the PS2 games provided, that and the bosses sucked. The majority of Alfheim sucked too.`,
        imgLoc: `/img/God of War.jpg`
    },
    {
        title: `Yoku's Island Express`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `An interesting blend of of Metoridvania and Pinball that was pulled off pretty well. It also had some incredible character designs but I did not enjoy getting around sometimes.`,
        imgLoc: `/img/Yoku's Island Express.jpg`
    },
    {
        title: `Warioware Gold`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `My first and only Warioware game. It was quite funny and the side characters were all great but it's not the type of game I love with it's mini-game design.`,
        imgLoc: `/img/Warioware Gold.jpg`
    },
    {
        title: `Spider-Man`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Once again, Insomniac create an excellent movement system and finally given the budget and an IP for success. It was pleasently short and had an emotional story that honestly left me feeling quite sad at the end, something those crap Marvel films can learn.`,
        imgLoc: `/img/Spider-Man.jpg`
    },
    {
        title: `Super Smash Bros Ultimate`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Never a big Smash fan but the World of Light was enjoyable as a single player mode and getting every single character back was an astonishing feat and deserves a reward for something.`,
        imgLoc: `/img/Super Smash Bros Ultimate.jpg`
    },
    {
        title: `Shadow of the Colossus (Remake)`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A game I look back on fondly but didn't like playing. A truly unique open world game that was more ambitious on the PS2 than it is now but the soundtrack is still one of the best as is the ending.`,
        imgLoc: `/img/Shadow of the Colossus.jpg`
    },
    {
        title: `Hitman Season 2`,
        score: 7,
        year: 2018,
        beaten: 2,
        lastPlayed: 2023,
        comment: `The episodic element is gone but the awful online element still persists. An enjoyable last level in the suburbs but can't remember much else!.`,
        imgLoc: `/img/Hitman Season 2.jpg`
    },
    {
        title: `Octopath Traveler`,
        score: 7,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Underrated soundtrack of 2018 and while it went for a certain visual element, the amount of bloom, depth of field and vignette shaders ruined the overall look but it had Alfyn who did 9999 damage despite being a doctor.`,
        imgLoc: `/img/Octopath Traveller.jpg`
    },
    {
        title: `Supraland`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A game I received for free and it was charming with fun puzzle and clever solutions but the meme references and nods to Donald Trump really annoyed me.`,
        imgLoc: `/img/Supraland.jpg`
    },
    {
        title: `Thronebreaker: The Witcher Tales`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2023,
        comment: `Some great puzzles, beautiful vistas but kinda gross art style. Movement was clunk. Tried it's best to not be Gwent. Combined storytelling with cards well enough, too many betrayals in the story but had a dog called Knickers.`,
        imgLoc: `/img/Thronebreaker The Witcher Tales.jpg`
    },
    {
        title: `Life is Strange 2`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2022,
        comment: `We inserted every American stereotype in this game to express our hatred for Trump, is what I expect went through the mind of the devs. Neat idea to not give you the powers but a character you watch over but my actions never really felt changed much.`,
        imgLoc: `/img/Life is Strange 2.jpg`
    },
    {
        title: `Kirby Star Allies`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A basic Kirby game with a crazy final boss like many of them but it's central gimmick was not as creative as the robot in Robobot.`,
        imgLoc: `/img/Kirby Star Allies.jpg`
    },
    {
        title: `Warriors Orochi 4`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Once again my Musou addiction brings me to another, and this one is pretty good. I spent far too much time playing as Magoichi Saika.`,
        imgLoc: `/img/Warriors Orochi 4.jpg`
    },
    {
        title: `Tetris Effect`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Played in VR and it was too expensive! But none the less it was a fun VR and Tetris experience on some levels but some levels also had awful music and distracting visual effects.`,
        imgLoc: `/img/Tetris Effect.jpg`
    },
    {
        title: `Hyrule Warriors: Definitive Edition`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A really good musou game with so much content and a solid difficulty level on hard, but the loot system with weapon stats is still unecessary for such a long game.`,
        imgLoc: `/img/Hyrule Warriors.jpg`
    },
    {
        title: `Xenoblade Chronicles 2: Torna The Golden Country`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2019,
        comment: `An expansion with a new combat system is great to see but forcing someone to do side quest to advance the main plot is a big no no. The combat music goes full Jazz and it's incredible.`,
        imgLoc: `/img/Xenoblade Chronicles 2 Torna.jpg`
    },
    {
        title: `A Way Out`,
        score: 6,
        year: 2018,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A serious co-op game with an ending that was funnier than it should be but there's nothing else quite like it and I'm glad EA supported Josef Fares' ideas as Brothers was also real good.`,
        imgLoc: `/img/A Way Out.jpg`
    },
    {
        title: `Valkyria Chronicles 4`,
        score: 5,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `One of my major disappointments after waiting so long for a proper VC sequel and I think that's because the main cast were incredibly tropey, dumb and the main character had no qualities other than some magic weather prediction.`,
        imgLoc: `/img/Valkyria Chronicles 4.jpg`
    },
    {
        title: `Spyro 1 (Remake)`,
        score: 5,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Never played Spyro before and it was okay. Very basic but the new model for Spyro is an incredible faithful recreation but the levels were too basic for a modern 3D platformer".`,
        imgLoc: `/img/Spyro Reignited 1.jpg`
    },
    {
        title: `Moss`,
        score: 5,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A game I heard such good things about but couldn't feel the same once I finished it. It's storybook presentation was cute as were the visuals and characters but it was far too basic compared to other VR games.`,
        imgLoc: `/img/Moss.jpg`
    },
    {
        title: `Digimon Story: Cyber Sleuth - Hackers Memory`,
        score: 5,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Almost a carbon copy of the first game but the CGI scenes looked incredible. I am happy to support Digimon but it did feel like an overpriced expansion and the new combat mode really wasn't good.`,
        imgLoc: `/img/Digimon Cyber Sleuth 2.jpg`
    },
    {
        title: `Pokemon Let's Go Pikachu & Eevee`,
        score: 4,
        year: 2018,
        beaten: 2,
        lastPlayed: 2019,
        comment: `More gen 1 pandering from Gamefreak with even more Pokemon Go mechanics implemented. It was fun to adventure Gen I again with a good art style compared to Sword/Shield but being able to freely explore and do gyms in a different order was great.`,
        imgLoc: `/img/Pokemon Let's Go Pikachu & Eevee.jpg`
    },
    {
        title: `Ni No Kuni 2`,
        score: 4,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Why they turned a Pokemon game into a Tales of I do not know, and the lack of Studio Ghibli scenes was upsetting. Overall it just felt low budget and the seige combat mode was a bore.`,
        imgLoc: `/img/Ni No Kuni 2.jpg`
    },
    {
        title: `Deracine`,
        score: 4,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `I love From Soft but this game made me feel nothing, but the hints at possible future From Software games in the 3D models was fun to engage with in the community.`,
        imgLoc: `/img/Deracine.jpg`
    },
    {
        title: `Monster Prom`,
        score: 3,
        year: 2018,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Received as a gag gift, short and simple but it has the voice acting of YouTuber Egoraptor.`,
        imgLoc: `/img/Monster Prom.jpg`
    },
    {
        title: `Planescape Torment: Enhanced Edition`,
        score: 9,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Know that this is a classic. Know that it has a great setting, writing and characters with an incredibly fleshed out protagonist. Know that I will probably replay it in the future and that I will never play a game with a unique setting as this.`,
        imgLoc: `/img/Planescape Torment.jpg`
    },
    {
        title: `Divinity Original Sin 2`,
        score: 9,
        year: 2017,
        beaten: `5+`,
        lastPlayed: 2022,
        comment: `Act 2 and the Rivellon theme combined is an incredible moment to experience for the first time. Great co-op and almost infinite replayability. Wish the UI was clearer. Still discovering new things but can feel too long.`,
        imgLoc: `/img/Divinity Original Sin 2.jpg`
    },
    {
        title: `The Legend of Zelda Breath of the Wild`,
        score: 9,
        year: 2017,
        beaten: 3,
        lastPlayed: 2021,
        comment: `A game where the magic still shined into my third playthrough and the first time I truly enjoyed a Zelda game.`,
        imgLoc: `/img/The Legend of Zelda Breath of the Wild.jpg`
    },
    {
        title: `Nier Automata`,
        score: 9,
        year: 2017,
        beaten: 2,
        lastPlayed: 2017,
        comment: `From the games announcement of Platinum making it I knew this was gonna be a 10 and it delivered. Incredible music, philosophical gibberish, cute androids. The amusement park area really sticks in my memory as something you would see in Kingdom Hearts.`,
        imgLoc: `/img/Nier Automata.jpg`
    },
    {
        title: `Yakuza Kiwami 2`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I don't remember much other than fighting Ryuji and a bunch of diaper wearing gangsters. Honestly it was a blast. Should not have played this and Kiwami 1 in the same year.`,
        imgLoc: `/img/Yakuza Kiwami 2.jpg`
    },
    {
        title: `Persona 5`,
        score: 8,
        year: 2016,
        beaten: 2,
        lastPlayed: 2018,
        comment: `Looking back, I rate this too high but the acid jazz soundtrack, gorgeous and snappy UI combined with fantastic demon designs, I couldn't resist scoring it high. The dungeons are mostly bad but still an upgrade and I was happy to see the return of Demon Negotiation. Haru is best girl.`,
        imgLoc: `/img/Persona 5.jpg`
    },
    {
        title: `A Hat in Time`,
        score: 8,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game full of naughty words like PECK. A really great controlling 3D platformer with such varied worlds, fun levels and great music. More importantly though it had humour and even had a terrifying level.`,
        imgLoc: `/img/A Hat in Time.jpg`
    },
    {
        title: `Nioh`,
        score: 8,
        year: 2017,
        beaten: 3,
        lastPlayed: 2021,
        comment: `A game I enjoyed more in the beta but people complained it was too hard and made the AI less aggressive. Definitely the best 'Souls-like' out there even if the developers action heavy history doesn't sometimes fit the slower pace here.`,
        imgLoc: `/img/Nioh.jpg`
    },
    {
        title: `What Remains of Edith Finch`,
        score: 8,
        year: 2017,
        beaten: 2,
        lastPlayed: 2022,
        comment: `An excellent 'walking sim' with a level that I think is up there with the best in the biz. A really unique game that I try and urge everyone to play.`,
        imgLoc: `/img/What Remains of Edith Finch.jpg`
    },
    {
        title: `Hollow Knight`,
        score: 8,
        year: 2017,
        beaten: 3,
        lastPlayed: 2023,
        comment: `I've never been big into Metroid or Castlevania world structure but Hollow Knight is finally where it clicked. Some beautiful environments if a bit drab in colour, great NPCs and music. It also had Hornet yelling "GIT GUD"!`,
        imgLoc: `/img/Hollow Knight.jpg`
    },
    {
        title: `Super Mario Odyssey`,
        score: 8,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A Mario game with a Dark Souls looking level. While I did remember having a blast, I can't help but look back and think how small many of the worlds felt, and Moons were too plentiful to come by they didn't feel earned. Excellent bosses though thanks to great hit impact feedback.`,
        imgLoc: `/img/Super Mario Odyssey.jpg`
    },
    {
        title: `Shin Megami Tensei Strange Journey Redux`,
        score: 8,
        year: 2017,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Currently my favourite SMT game. Great alignment systems in terms of gameplay, branching paths and characters. Switches it up well from other games. So much side content and a good UI. Great soundtrack.`,
        imgLoc: `/img/Shin Megami Tensei Strange Journey.jpg`
    },
    {
        title: `Dragon Quest XI`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I walked 5 miles to Bromborough to get this game from ASDA but I don't know why, I will admit that Sylvando is one of the best party members in DQ history but it is a slow burn to get your first 4 party members.`,
        imgLoc: `/img/Dragon Quest XI.jpg`
    },
    {
        title: `Hellblade`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2020,
        comment: `"A fantastic headphone experience but everything else kind of dulled, especially the performance of Senua which was often quite unintentionally comical.`,
        imgLoc: `/img/Hellblade.jpg`
    },
    {
        title: `Statik`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A simple VR game with a low price point. It's puzzles were designed and the creepy atmosphere made for a unique experience. The design of the character models was something that sticks in my mind more than the puzzles.`,
        imgLoc: `/img/Statik.jpg`
    },
    {
        title: `Cuphead`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A hard game, almost too hard but I did like the art style a lot that kept me going. It's also been nice to see the hidden secrets come out over time that the devs didn't need to implement.`,
        imgLoc: `/img/Cuphead.jpg`
    },
    {
        title: `Vanquish`,
        score: 6,
        year: 2010,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I had been asking for this game to come to PC for such a long time and SEGA finally delivered. A tense difficult final boss but some parts do lull despite being what is essentially a 3D arcade shooter.`,
        imgLoc: `/img/Vanquish.jpg`
    },
    {
        title: `Horizon Zero Dawn`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Finally Guerilla got to make something other than Killzone and they nailed it, almost. They resorted to traditional open world elements like towers that make poor use of an excellent mech design that would be great to fight.`,
        imgLoc: `/img/Horizon Zero Dawn.jpg`
    },
    {
        title: `Xenoblade Chronicles 2`,
        score: 7,
        year: 2017,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Somehow released in December 2017 despite me saying it will be delayed but it did need more time in the oven. Regardless that music is super underappreciated and patches did come out to fix a lot of minor issues.`,
        imgLoc: `/img/Xenoblade Chronicles 2.jpg`
    },
    {
        title: `Final Fantasy XII (Zodiac Age)`,
        score: 6,
        year: 2017,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Fifteen year closure. Balthier is a great character, a shame about Vaan and Penelo being main characters. The game mostly played itself, very archaic by design but sometimes offered greatness. So close to being a great JRPG.`,
        imgLoc: `/img/Final Fantasy XII.jpg`
    },
    {
        title: `Splatoon 2`,
        score: 6,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I played one online game, won, topped my teams leaderboard and then never touched it again. The single player campaign was fun enough but it did feel like more of the same.`,
        imgLoc: `/img/Splatoon 2.jpg`
    },
    {
        title: `Mario + Rabbids Kingdom Battle`,
        score: 6,
        year: 2017,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Weird absurd crossover that somehow works. Quite difficult. Weird bugs due to Snowdrop engine not being made for something like the switch such as models flickering in and out constantly. Great opera concert scene.`,
        imgLoc: `/img/Mario + Rabbids Kingdom Battle.jpg`
    },
    {
        title: `Samurai Warriors 4-II`,
        score: 6,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Crossing it off the musou list, I think I saw this real cheap for PS4 in GAME and I quite like supporting Tecmo Koei but I don't really remember much.`,
        imgLoc: `/img/Samurai Warriors 4 II.jpg`
    },
    {
        title: `Resident Evil 7`,
        score: 6,
        year: 2017,
        beaten: 2,
        lastPlayed: 2020,
        comment: `My first mainstream experience of VR and it made me feel sick but there's nothing else quite like it and it's a shame it's exclusive to PSVR. Incredible 3D audio made it genuinely terrifying in the house but the later areas suck butt.`,
        imgLoc: `/img/Resident Evil 7.jpg`
    },
    {
        title: `The Evil Within 2`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Played while watching Huber and Bosman play through it and the open rural areas sucked for survival horror, too much running around. The photography elements were rad but they stopped mid-way through. No iconic boss designs like the first game.`,
        imgLoc: `/img/The Evil Within 2.jpg`
    },
    {
        title: `Finding Paradise`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A sweet tale about a guy who wishes moments of his life had been just a little bit more perfect that descends into stupidity as it goes on.`,
        imgLoc: `/img/Finding Paradise.jpg`
    },
    {
        title: `Warriors All Stars`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A collection of characters appear in a Musou game and yet the roster still disappoints, but it did give love to the Wii game Odama so it has to get praise for that.`,
        imgLoc: `/img/Warriors All Stars.jpg`
    },
    {
        title: `Troll and I`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Lost a bet so I had to play this and stream this. Encountered a bug that forced me to redo 75% of the game and yet I would play it again in a heartbeat. I don't know why.`,
        imgLoc: `/img/Troll and I.jpg`
    },
    {
        title: `Rime`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Sony showed this off so long ago but dropped it, and now I don't remember anything about it other than that, but hey I gave it a 5 so I must have liked and disliked parts of it.`,
        imgLoc: `/img/Rime.jpg`
    },
    {
        title: `South Park: The Fractured but Whole`,
        score: 5,
        year: 2017,
        beaten: 1,
        lastPlayed: 2022,
        comment: `A bit too much fart humour for me, but some good humour without being too pop culture. Though the popular culture stuff like Pokemon Go do sucks. Has a great "You Died" song.`,
        imgLoc: `/img/South Park The Fractured but Whole.jpg`
    },
    {
        title: `Inside`,
        score: 4,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Some people claimed this as their Game of the Year which is fine but when the gameplay has you only walking at one speed, it causes no tension as you either make it or don't, it requires no reaction on your end to survive.`,
        imgLoc: `/img/Inside.jpg`
    },
    {
        title: `Pokemon Ultra Sun & Ultra Moon`,
        score: 4,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game that adds so little it is almost absurd to me it cost the same as the first. While it speeds up the start, I cant remember a single damn thing about it.`,
        imgLoc: `/img/Pokemon Ultra Moon & Ultra Sun.jpg`
    },
    {
        title: `Vikings Wolves of Midgard`,
        score: 3,
        year: 2017,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Played with my ARPG buddy and we both hated it, it's online issues were plentiful and got too hard at times, I believe we had to finish it solo due to issues but I can't remember.`,
        imgLoc: `/img/Vikings Wolves of Midgard.jpg`
    },
    {
        title: `Destiny 2`,
        score: 3,
        year: 2017,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Played with a buddy, and it's ridiculous the reward for finishing the game is a vehicle, something you get so early on in the first game. An absolute awful game and somehow gotten worse when it went free2play.`,
        imgLoc: `/img/Destiny 2.jpg`
    },
    {
        title: `Gravity Rush 2`,
        score: 3,
        year: 2017,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A game I really enjoyed exploring in but then when I decided to carry on with the story, I hated how cliche the mission types were and how unfun they made gravity powers in your missions.`,
        imgLoc: `/img/Gravity Rush 2.jpg`
    },
    {
        title: `Kirby Battle Royale`,
        score: 2,
        year: 2017,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I used to think Kirby never had a bad game but now I disagree as this was ultimate filler. Kirby excels in platforming, not the simple combat so it seems so odd to make a game based on combat.`,
        imgLoc: `/img/Kirby Battle Royale.jpg`
    },
    {
        title: `Kirby Planet Robobot`,
        score: 9,
        year: 2016,
        beaten: 2,
        lastPlayed: 2021,
        comment: `Great gimmick to a franchise that is repeatedly about gimmicks. Good 3D visuals. Great final boss and good puzzles for the collectibles. Was underrated, now considered top-tier.`,
        imgLoc: `/img/Kirby Planet Robobot.jpg`
    },
    {
        title: `Shin Megami Tensei IV: Apocalypse`,
        score: 8,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A better balanced sequel to SMT IV but includes too much Persona influence in regards to the character friendships. I still loved smirking and siding with my demon buddy Dagda and his lovely Scottish accent.`,
        imgLoc: `/img/Shin Megami Tensei IV Apocalypse.jpg`
    },
    {
        title: `Dragon Quest Builders`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `A surprisingly great combo of Dragon Quest and Minecraft makes a charming adventure. Really dug the main story but burnt out after.`,
        imgLoc: `/img/Dragon Quest Builders.jpg`
    },
    {
        title: `Rez Infinite (VR)`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A trippy VR experience even if short. I think I am quite biased towards VR in general but the scale of the final area was ridiculous.`,
        imgLoc: `/img/Rez Infinite.jpg`
    },
    {
        title: `Titanfall 2`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A creatively designed first person shooter is something I haven't experienced in a long time. Many of the levels were fun and BT was a great robot buddy. Short and sweet.`,
        imgLoc: `/img/Titanfall 2.jpg`
    },
    {
        title: `Hitman`,
        score: 7,
        year: 2016,
        beaten: 2,
        lastPlayed: 2023,
        comment: `The episodic element really suits the style of Hitman but the online only requirement is so unnecessary. While these games are meant to be replayed heavily, I felt little desire to but still was enjoyable to flush peoples heads in the toilet.`,
        imgLoc: `/img/Hitman.jpg`
    },
    {
        title: `Shadow Tactics: Blades of the Shogun`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A new genre for me what often did feel overwhelming with some missions taking over 2 hours but if you pace yourself, it's a wonderful experience.`,
        imgLoc: `/img/Shadow Tactics.jpg`
    },
    {
        title: `Furi`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A friend bought this for me and while the inbetween combat bits are boring, each boss being so unique set to music by Danger and Carpenter Brut made the fights exciting.`,
        imgLoc: `/img/Furi.jpg`
    },
    {
        title: `Yakuza Kiwami`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Playing this after 0 is a better experience but still suffers from being a remake of the first ever Yakuza game. A boss fight that was 2 breakdancers really ruined my day.`,
        imgLoc: `/img/Yakuza Kiwami.jpg`
    },
    {
        title: `Forza Horizon 3`,
        score: 7,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `An okay racer that isn't Burnout. Not arcadey enough, cars too heavy and no sense of speed. And the slot machines make earning new cars a luck shot, not something that rewards skill.`,
        imgLoc: `/img/Forza Horizon 3.jpg`
    },
    {
        title: `Dark Souls III`,
        score: 6,
        year: 2016,
        beaten: `5+`,
        lastPlayed: 2021,
        comment: `I beat this and no one believed me on the ending I got, so I beat it again and got the ending again and uploaded it this time and was still the first to upload it. Boring game though!`,
        imgLoc: `/img/Dark Souls III.jpg`
    },
    {
        title: `Shadow Warrior 2`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Played with a bud and spent most of the time in the arcade area listening to music from Hotline Miami. The enemy designs were boring and the loot seemed unecessary but it played well and movement was fast.`,
        imgLoc: `/img/Shadow Warrior 2.jpg`
    },
    {
        title: `Digimon Story: Cyber Sleuth`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Very text heavy with a bad story yet I fell in love with Digimon again for the first time in years. Great designs. I had a mecha-wasp with hundreds of guns attached to it.`,
        imgLoc: `/img/Digimon Cyber Sleuth.jpg`
    },
    {
        title: `Abzu`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game so much like Journey it did feel a bit of a copy but now underwater. I remember the visual elements not changing much as the game goes on and the music not having as much of an impact but still joyful to study the fish.`,
        imgLoc: `/img/Abzu.jpg`
    },
    {
        title: `Uncharted 4`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `No Donut Drake is a scam! The plot was retroactively ruined by Uncharted 3 and for some reason invented a brother, but it does have the best combat sequences even if there are only 3 of them.`,
        imgLoc: `/img/Uncharted 4.jpg`
    },
    {
        title: `DOOM 2016`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game that is never able to fully blend in great level design and enemy encounters and instead feels like both a 3D platformer and a wave based shooter where you are trapped in small rooms.`,
        imgLoc: `/img/DOOM 2016.jpg`
    },
    {
        title: `World of Final Fantasy`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A great spin-off and a love letter to the entirety of the FF games. While it had some gorgeous areas, the linear level design didn't let me explore at all.`,
        imgLoc: `/img/World of Final Fantasy.jpg`
    },
    {
        title: `Ratchet & Clank (Remake)`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Blimey this game was beautiful but sadly lost a lot of it's soul. Levels of the original merged as one, a lot of grind rails and Nefarious shoehorned in.`,
        imgLoc: `/img/Ratchet and Clank Remake.jpg`
    },
    {
        title: `Civilization VI`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `At launch this felt a very dumbed down version of V, and that from IV too. The art style looked very 'mobile' and I don't remember much else.`,
        imgLoc: `/img/Civilization VI.jpg`
    },
    {
        title: `Planet Coaster`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A incredibly vast sandbox creation tools with good Steam workshop support but DLC went quite insane, very slow to get something going and the management tools were lacking.`,
        imgLoc: `/img/Planet Coaster.jpg`
    },
    {
        title: `Gears of War 4`,
        score: 5,
        year: 2016,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A disatisfying ending that teased a future installment ruined the game as it was pretty okay beforehand. Some parts based around Marcus Fenix's home was great but the rest was dull.`,
        imgLoc: `/img/Gears of War 4.jpg`
    },
    {
        title: `Titan Quest Anniversary Edition`,
        score: 5,
        year: 2016,
        beaten: 3,
        lastPlayed: 2020,
        comment: `A unique setting for an ARPG but when the devs have gone on to make Grim Dawn, it does hurt coming back to dated mechanics. It has charm and with a loot mod, it's made much better.`,
        imgLoc: `/img/Titan Quest Anniversary Edition.jpg`
    },
    {
        title: `The Last Guardian`,
        score: 4,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A miserable experience that ran like garbage but the tech behind Trico is incredible even if it's frustrating to simply get anywhere in the game. The ending is also quite fantastic.`,
        imgLoc: `/img/The Last Guardian.jpg`
    },
    {
        title: `Berserk and the Band of the Hawk`,
        score: 4,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `I love the manga Berserk but this game is just trash. Why have a roster of characters if you are forced to play as Guts in about 90% of the missions but I suppose it could have been worse, somehow.`,
        imgLoc: `/img/Berserk and the Band of the Hawk.jpg`
    },
    {
        title: `Pokemon Sun & Moon`,
        score: 4,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Pokemon should never have gone 3D. The world feels tremendously small and too much of a focus on characters, and not the adventure or Pokemon and many of the new Pokemon are so cumbersome to get.`,
        imgLoc: `/img/Pokemon Sun & Moon.jpg`
    },
    {
        title: `IS Defense`,
        score: 3,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `From the developers of Hatred, comes an edgy game where you man a turret and just shoot ISIS members. It's not as bad as you expect, particle effects hurt my eyes.`,
        imgLoc: `/img/IS Defense.jpg`
    },
    {
        title: `Borderlands The Pre-Sequel`,
        score: 3,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Still torturing myself by playing BL games, this one with a buddy. 'Wooooooow, yeah!'.`,
        imgLoc: `/img/Borderlands The Pre-Sequel.jpg`
    },
    {
        title: `Final Fantasy XV`,
        score: 3,
        year: 2016,
        beaten: 2,
        lastPlayed: 2019,
        comment: `Played on console after the patches came out after they supposedly improved the game and it was just a miserable experience from start to end which required little effort in progressing as it all does it for you. Also replayed on PC for some reason...`,
        imgLoc: `/img/Final Fantasy XV.jpg`
    },
    {
        title: `Zero Time Dilemma`,
        score: 3,
        year: 2016,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Uchikoshi got a rare chance to finish his trilogy and chose to use expensive 3D models with a cheap budget. It spawned incredible memes and Carlos is delightful but it's so dumb.`,
        imgLoc: `/img/Zero Time Dilemma.jpg`
    },
    {
        title: `The Witcher 3`,
        score: 9,
        year: 2015,
        beaten: 2,
        lastPlayed: 2019,
        comment: `What a step up from Witcher 2 is such a short time that set 'next-gen' in motion. Really brought back the slavic vibe that was present in 1 in such a wide scale beautiful game. And Shani came back for the DLC.`,
        imgLoc: `/img/The Witcher 3.jpg`
    },
    {
        title: `Dragon Quest VIII (3DS)`,
        score: 8,
        year: 2015,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Finally finished a DQ game and this was charming, I especially loved the character relationships and the overworld exploration. It also had 2 hidden playable characters I never found, how foolish of me.`,
        imgLoc: `/img/Dragon Quest VIII.jpg`
    },
    {
        title: `Picross 3D: Round 2`,
        score: 8,
        year: 2015,
        beaten: 2,
        lastPlayed: 2018,
        comment: `A puzzle game I loved so much, I deleted my save to start completely over again. My activity log recorded around 250+ hours. The two colour setup was really clever and made the solutions look much better.`,
        imgLoc: `/img/Picross 3D Round 2.jpg`
    },
    {
        title: `Xenoblade Chronicles X`,
        score: 8,
        year: 2015,
        beaten: 2,
        lastPlayed: 2020,
        comment: `The game I got my Wii U for is finally here! And I loved it. In a year of open world games, X felt the most unique and embraced the sky. Many hours spent during unemployment times.`,
        imgLoc: `/img/Xenoblade Chronicles X.jpg`
    },
    {
        title: `Monster Hunter 4 Ultimate`,
        score: 8,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `Maybe my favourite Mon Hun. Great new monsters, new weapons, vertical element, mounting, all hallmarks of Mon Hun and introduced us to Queen Seltas and Tetsucabra.`,
        imgLoc: `/img/Monster Hunter 4 Ultimate.jpg`
    },
    {
        title: `Yakuza 0`,
        score: 8,
        year: 2015,
        beaten: 1,
        lastPlayed: 2017,
        comment: `My first experience of Yakuza and it was a wonderful wacky adventure if a bit too long. Some side quests were wonderful and the introduction to the second playable character is well executed which could sadden people if they enjoyed playing as Kiryu so much.`,
        imgLoc: `/img/Yakuza 0.jpg`
    },
    {
        title: `Life is Strange`,
        score: 7,
        year: 2015,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Really wonderful music with vocals and a surprisingly dark game. While I did not enjoy anything about Chloe which impacted the ending.`,
        imgLoc: `/img/Life is Strange.jpg`
    },
    {
        title: `Super Mario Maker`,
        score: 7,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `I remember being disappointed by no new story content and the rcreation tools were worse than what rom hack creators could use, but it was still great for the Wii U tablet and had a fun community.`,
        imgLoc: `/img/Super Mario Maker.jpg`
    },
    {
        title: `Transformers Devestation`,
        score: 7,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `What could have been a cheap game just cos Activision owned the license, Platinum ended up making a good quality game for old Transformers fans. Good style, music and voice lines from Megatron.`,
        imgLoc: `/img/Transformers Devestation.jpg`
    },
    {
        title: `Splatoon`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `It was weird to see Nintendo reveal a shooter where things literally die and explode in their blood. But it's technically squids and ink so it's okay. Makes me miss miiverse.`,
        imgLoc: `/img/Splatoon.jpg`
    },
    {
        title: `Dark Souls II Scholar of the First Sin`,
        score: 6,
        year: 2015,
        beaten: `5+`,
        lastPlayed: 2022,
        comment: `Scholar released right before Bloodborne and it was a nice change compared to the original but still lacked the lighting engine they showed off in their trailers.`,
        imgLoc: `/img/Dark Souls II Scholar.jpg`
    },
    {
        title: `Hotline Miami 2`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `The level with Roller Mobster is a jam, but primarily due to the music. I think the masks were worse here than the previous 1 and levels felt too similar.`,
        imgLoc: `/img/Hotline Miami 2.jpg`
    },
    {
        title: `Ori and the Blind Forest`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `I got this thanks to a Steam price glitch and I was still disappointed. It was classed as really hard but I had almost no difficult parts. Beautiful art for an indie game though.`,
        imgLoc: `/img/Ori and the Blind Forest.jpg`
    },
    {
        title: `One Piece Pirate Warriors 3`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2016,
        comment: `A slight upgrade despite the longer release, it goes back to following the One Piece story arc which I never like because it doesn't have the emotion, feels rushed and doesn't end satisfyingly since the manga is ongoing.`,
        imgLoc: `/img/One Piece Pirate Warriors 3.jpg`
    },
    {
        title: `Civilization V`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `Having only played IV and it's expansions prior, Civ V felt like a massive downgrade, and it seemed that way within the community but I think it's just a case of "the first one you played is the best".`,
        imgLoc: `/img/Civilization V.jpg`
    },
    {
        title: `Dying Light`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A great-ish co-op experience that is let down by annoying weapon durability systems and so many sewers, but drop-kicking zombies off roofs was a blast.`,
        imgLoc: `/img/Dying Light.jpg`
    },
    {
        title: `The Binding of Isaac Afterbirth`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `A pretty good roguelike but the story is almost none existant and the religion element just feels like the developer self-inserting. Some builds can be great but such little opportunity to upgrade makes the game feel slow.`,
        imgLoc: `/img/The Binding of Isaac Afterbirth.jpg`
    },
    {
        title: `Halo 5`,
        score: 6,
        year: 2015,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game hated by fans and yet moderately liked by me because I don't care for the story in Halo at the current time. Instead I remember liking the vertical design of the levels that made going through the levels fun.`,
        imgLoc: `/img/Halo 5.jpg`
    },
    {
        title: `Magicka 2`,
        score: 5,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `Played this on console so the inputs differed from the first. I remember not enjoying it as much until me and a friend got the finale and it turned into a game of FIFA.`,
        imgLoc: `/img/Magicka 2.jpg`
    },
    {
        title: `Monster Hunter Stories`,
        score: 5,
        year: 2015,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Finished after a 3 and a half year gap with the last 20% to go. Somewhat fun, often frustrating. Egg hunting was tedious due to RNG luck with Paintballs that barely worked. Great animations for a 3DS game.`,
        imgLoc: `/img/Monster Hunter Stories.jpg`
    },
    {
        title: `Undertale`,
        score: 5,
        year: 2015,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I hated the humour and characters but the combat system is quite unique for a one-man team. It also has really good music and I am quite jealous Toby Fox got to visit Sakurai's house in Japan.`,
        imgLoc: `/img/Undertale.jpg`
    },
    {
        title: `Wasteland 2`,
        score: 4,
        year: 2015,
        beaten: 1,
        lastPlayed: 2015,
        comment: `I kickstarted this game as I wanted something like old school Fallout but modern, and hated it from almost the start and rushed to a 'joke ending'. However after loving WL3 I do want to give this another go.`,
        imgLoc: `/img/Wasteland 2.jpg`
    },
    {
        title: `Tearaway Unfolded`,
        score: 4,
        year: 2015,
        beaten: 1,
        lastPlayed: 2016,
        comment: `The vita version got praise so I invested in the PS4 version and found it to be a miserable time. Too many hardware features designed for the game were not replicated well when porting over and it was far too basic.`,
        imgLoc: `/img/Tearaway Unfolded.jpg`
    },
    {
        title: `Fallout 4`,
        score: 3,
        year: 2015,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I kind of rushed through this as nothing in the first few hours hooked me but I do find it upsetting the robot didn't say your name 'Sean' because your kid is named Shaun.`,
        imgLoc: `/img/Fallout 4.jpg`
    },
    {
        title: `The Order 1886`,
        score: 2,
        year: 2015,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I went to an event back in 2015 at GAME where I got to play Bloodborne and The Order 1886, I shot 1 bullet in The Order and hated it then. 4 years later, I finally play it and hated it more.`,
        imgLoc: `/img/The Order 1886.jpg`
    },
    {
        title: `Fallout New Vegas`,
        score: 8,
        year: 2010,
        beaten: 2,
        lastPlayed: 2022,
        comment: `Played alongside a buddy to talk about it, he was really fond of the ghouls going into space sidequest. I appreciated the game more on a replay but think The Strip is quite boring, despite it being a significant landmark.`,
        imgLoc: `/img/Fallout New Vegas.jpg`
    },
    {
        title: `Theatrhythm Final Fantasy: Curtain Call`,
        score: 8,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Now that I like FF games, I discovered more tracks I liked. But this game had Nier DLC which makes it superior to almost all rhythm games. Still struggling with the arrow swipes.`,
        imgLoc: `/img/Theatrhythm Final Fantasy Curtain Call.jpg`
    },
    {
        title: `Mario Kart 8`,
        score: 7,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Including the deluxe edition I can't help but feel massively disappointed by the roster, with 1/5 of them being babies of Nintendo characters. It's also weird to have Splatoon characters but not Kirby who has a racing game! Great track designs and music though.`,
        imgLoc: `/img/Mario Kart 8 Deluxe.jpg`
    },
    {
        title: `Donkey Kong Country Tropical Freeze`,
        score: 7,
        year: 2014,
        beaten: 3,
        lastPlayed: 2018,
        comment: `A great controlling platformer and to this day, still Retro's last game after 7 years. It's a shame the 2D Mario platformers can't compete with this series anymore. David Wise brings his best music.`,
        imgLoc: `/img/Donkey Kong Country Tropical Freeze.jpg`
    },
    {
        title: `The Wolf Among Us`,
        score: 7,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Definitely enjoyed the character designs from the Fables world but the release of each chapter dragged on too long where it became apparent the story was being changed based on the fanbase accurate predictions.`,
        imgLoc: `/img/The Wolf Among Us.jpg`
    },
    {
        title: `Bayonetta 2`,
        score: 7,
        year: 2014,
        beaten: 2,
        lastPlayed: 2018,
        comment: `A solid sequel even without Kamiya. Amazon messed up so I got the bundle including Bayo 1 for no extra charge. Good Nintendo costumes and nice to have vibrant colours compared to the first.`,
        imgLoc: `/img/Bayonetta 2.jpg`
    },
    {
        title: `Captain Toad: Treasure Tracker`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Adapts a Mario Galaxy level into it's own full game with boss fights and it somehow works, despite having a platformer with no jump ability. Beautiful diorama levels but very basic.`,
        imgLoc: `/img/Captain Toad.jpg`
    },
    {
        title: `Kirby: Triple Deluxe`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Kirby once again relies on a gimmick and this is just a 3D effect with a super suck mechanic. It's really lame in that regard but level design and charm is still there. Just Planet Robobot has everything and more.`,
        imgLoc: `/img/Kirby Triple Deluxe.jpg`
    },
    {
        title: `South Park The Stick of Truth`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `The most faithful adaptation of a cartoon to a video game I have ever seen. Often feels like South Park at it's best but often seems crude for the sake of it.`,
        imgLoc: `/img/South Park The Stick of Truth.jpg`
    },
    {
        title: `Dark Souls II`,
        score: 6,
        year: 2014,
        beaten: `5+`,
        lastPlayed: 2014,
        comment: `Clearly the Miyazaki direction is lost and it's lighting engine is a massive disappointment. A lot of new ideas, some work, some don't. Went for a walk with a buddy after finishing it despite sleeping 8ish hours in a weekend. Played it at EG Expo. Great times!`,
        imgLoc: `/img/Dark Souls II.jpg`
    },
    {
        title: `Transistor`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `After Bastion, Supergiant have set their motif for their games. Interesting worlds, great visuals and stellar music from Darren Korb. Yet the story in Transistor and the gameplay did nothing for me.`,
        imgLoc: `/img/Transistor.jpg`
    },
    {
        title: `The Walking Dead Season 2`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2015,
        comment: `By now, this choice affecting your outcome wore thin as immediately in the next chapter, that choice wouldn't matter. The new cast were not as good as season 1.`,
        imgLoc: `/img/The Walking Dead Season 2.jpg`
    },
    {
        title: `Dynasty Warriors 8 Xtreme Legends`,
        score: 6,
        year: 2014,
        beaten: 2,
        lastPlayed: 2019,
        comment: `One of the most 'complete' DW games but hasn't seen much new features since 4. The game never goes on sale, and the 'complete edition' doesn't even have every piece of DLC and that annoys me.`,
        imgLoc: `/img/Dynasty Warriors 8.jpg`
    },
    {
        title: `Divinity Original Sin`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Playing this after OS2 did feel like a downgrade but the jolly specific co-op mechanics were unique and did make the playthrough fun, it's debuff system was quite RNG which is kind of annoying.`,
        imgLoc: `/img/Divinity Original Sin.jpg`
    },
    {
        title: `Strider`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Never played a Strider game before but something about this appealed to me and I had a good time. Controls were responsive but level design was very basic.`,
        imgLoc: `/img/Strider.jpg`
    },
    {
        title: `Metro Last Light Redux`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2021,
        comment: `In many ways an improvement but the amount of scripted sequences which can lead you to wasting resources was too frequent as was the narrative cliches.`,
        imgLoc: `/img/Metro Last Light Redux.jpg`
    },
    {
        title: `Pokemon Omega Ruby & Alpha Sapphire`,
        score: 6,
        year: 2014,
        beaten: 2,
        lastPlayed: 2020,
        comment: `Not as bad as I remember it as Gen 3 has some real good routes but the art design is awful and it didn't bother to include the great post-game of Emerald despite releasing 10 years later.`,
        imgLoc: `/img/Pokemon Omega Ruby & Alpha Sapphire.jpg`
    },
    {
        title: `Child of Light`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Ubi-art engine makes a name for itself here and I liked this era of Ubisoft with Valiant Hearts and what not. It was a very basic game but I did like the music and the polite vibes.`,
        imgLoc: `/img/Child of Light.jpg`
    },
    {
        title: `The Evil Within`,
        score: 5,
        year: 2014,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Chapter 9 and 10 in particular are fantastic but too many OHKO kills that don't add the right amount of tension and just frustrate. It does it's best to blind you with white flashing lights in dark scenes.`,
        imgLoc: `/img/The Evil Within.jpg`
    },
    {
        title: `Sunset Overdrive`,
        score: 5,
        year: 2014,
        beaten: 2,
        lastPlayed: 2019,
        comment: `Replayed on PC so I knew what to expect but still somewhat disappointed. I love the flow of Insomniac's games and their animation team is one of the best but the weapons and mission structure were too basic for the energy dirnk addicted setting.`,
        imgLoc: `/img/Sunset Overdrive.jpg`
    },
    {
        title: `Pokemon X & Y`,
        score: 5,
        year: 2013,
        beaten: 2,
        lastPlayed: 2020,
        comment: `A game that drags at the start then immediately rushes after your second badge. The lack of freedom in exploring a Pokemon world really bogged the game down here despite having excellent Pokemon like Clawitzer.`,
        imgLoc: `/img/Pokemon X & Y.jpg`
    },
    {
        title: `Destiny`,
        score: 4,
        year: 2014,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Played with a friend and that spider-tank boss fight from the beta still has health bloat. A disappointing game as shooting on multiple planets should be exciting but the enemy designs were boring.`,
        imgLoc: `/img/Destiny.jpg`
    },
    {
        title: `LittleBigPlanet 3`,
        score: 3,
        year: 2014,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Sumo Digital take charge of this game I played with my buddy and every level had it's own annoying gimmick that demotivated me so much to even begin enjoying a single bit of this game.`,
        imgLoc: `/img/LittleBigPlanet 3.jpg`
    },
    {
        title: `The Wonderful 101`,
        score: 9,
        year: 2014,
        beaten: 4,
        lastPlayed: 2021,
        comment: `The ending to this game absolutely blew me away. I remember telling my friend about it in town and was screaming how good it was. What a game, and to get it before US to avoid spoilders was great.`,
        imgLoc: `/img/The Wonderful 101 Remastered.jpg`
    },
    {
        title: `Metal Gear Rising`,
        score: 8,
        year: 2013,
        beaten: 4,
        lastPlayed: 2017,
        comment: `A crazy action game that is absurdly funny with the most ridiculous metal music set to insane boss fights. Sadly boss fights do all have a lull to them where action slows but the cutting up anything to tiny bits mechanic is great.`,
        imgLoc: `/img/Metal Gear Rising.jpg`
    },
    {
        title: `Brothers: A Tale of Two Sons`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Josef Fares abandons films for video games and I am super happy he did. A really fun world to be in with a very good ending. Controlling 2 people with 1 guy wasn't as complex as it could be thanks to the basic but fun puzzle designs.`,
        imgLoc: `/img/Brothers A Tale of Two Sons.jpg`
    },
    {
        title: `Sonic Racing Transformed`,
        score: 7,
        year: 2013,
        beaten: 2,
        lastPlayed: 2015,
        comment: `A solid racing game that has a better roster than MK8. Somehow TF2 and the Football Manager manager guy are playable. Great paths, music and a enthusiastic voice actor.`,
        imgLoc: `/img/Sonic Racing Transformed.jpg`
    },
    {
        title: `Super Mario 3D World`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Bought during the midnight release of the PS4 at Grainger Games (RIP). It felt like a step back from Galaxy 2 in terms of ambition but the level design was often cheeky and some boss fights were good. The ending is cool too.`,
        imgLoc: `/img/Super Mario 3D World.jpg`
    },
    {
        title: `Grand Theft Auto V`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2016,
        comment: `One of the few games on PC to blow me away visually after upgrading in 2015. The view from Franklins new house in the Bay hills area was quite breathtaking but the main missions had so much talking and travelling! The only GTA I have finished despite playing 5 others.`,
        imgLoc: `/img/Grand Theft Auto V.jpg`
    },
    {
        title: `The Last of Us`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `I didn't understand the hype as to me it felt just like another Uncharted but with zombies. I liked the clickers but the rest of the mutated were too typical. Some good action set pieces where you are in complete control.`,
        imgLoc: `/img/The Last of Us.jpg`
    },
    {
        title: `Shin Megami Tensei IV`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I remember dying so much at the start I wasn't allowed to respawn unless I had coins you earn by walking with your 3DS in sleep mode. It's such an easy game to get lost in due to the map setting but the overworld theme is a banger.`,
        imgLoc: `/img/Shin Megami Tensei IV.jpg`
    },
    {
        title: `Lego Marvel Super Heroes`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2017,
        comment: `If you want to be Iron Man, play this game. So many characters and a delightful open world to explore but the missions themselves is where I wasn't having a blast. Incredible rewards for completing side objectives such as Hulk Stan Lee.`,
        imgLoc: `/img/Lego Marvel Superheroes.jpg`
    },
    {
        title: `The Legend of Zelda The Wind Waker HD`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A really pretty game with a nice art style. While I hated the dungeons like most of the Zelda games, I did adore the mini-game guy who yells SPLOOSH and KABOOM.`,
        imgLoc: `/img/The Legend of Zelda The Wind Waker HD.jpg`
    },
    {
        title: `The Legend of Zelda Link Between Worlds`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2014,
        comment: `A typical Zelda game that changes the formula ever so slightly to let you pick where you want to explore from the start and I loved that enough to finish the game even if I don't remember anything about it.`,
        imgLoc: `/img/The Legend of Zelda Link Between Worlds.jpg`
    },
    {
        title: `One Piece: Unlimited World Red`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `I was not able to get into the Unlimited Wii games but this one did pull me in because of the strength of the villain and it wasn't on a Wii, that also helps.`,
        imgLoc: `/img/One Piece Unlimited World Red.jpg`
    },
    {
        title: `One Piece Pirate Warriors 2`,
        score: 7,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `A huge upgrade. Plenty of playable characters with unique movesets not seen in a Musou. An original story which meant there could be surprises.`,
        imgLoc: `/img/One Piece Pirate Warriors 2.jpg`
    },
    {
        title: `Gears of War Judgement`,
        score: 6,
        year: 2013,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Played with a buddy and I was surprised at how much I liked it after the misery of the other two. For a 360 game, the particle effects were quite fantastic. People Can Fly deserve a chance to make a great new IP.`,
        imgLoc: `/img/Gears of War Judgement.jpg`
    },
    {
        title: `Marlow Briggs`,
        score: 6,
        year: 2013,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A low budget action game that I played as a meme. It's surprisingly great and I remember thinking the weapons were quite unique but the puzzles all felt like filler.`,
        imgLoc: `/img/Marlow Briggs.jpg`
    },
    {
        title: `Rayman Legends`,
        score: 6,
        year: 2013,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Played with a buddy and while I do think it is better than the original due to the really neat music based levels, the actual level aesthetics is still poor compared to Rayman 1 and I don't like the side characters you can also play as.`,
        imgLoc: `/img/Rayman Legends.jpg`
    },
    {
        title: `Bioshock Infinite`,
        score: 5,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `One of the biggest divides between critic and user scores. Limiting to 2 guns felt very Call of Duty and it felt so afraid of really diving into the racism tones of the story as it stops being a factor almost immediately. One of the best jump scares.`,
        imgLoc: `/img/Bioshock Infinite.jpg`
    },
    {
        title: `The Incredible Adventures of Van Helsing`,
        score: 5,
        year: 2013,
        beaten: 2,
        lastPlayed: 2020,
        comment: `I enjoyed this a bit solo but then played it with a buddy. I had a Chicagotown pizza and it gave me food poisoning for the first ever time. I did not feel so good about the game after.`,
        imgLoc: `/img/The Incredible Adventures of Van Helsing.jpg`
    },
    {
        title: `Tomb Raider`,
        score: 5,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `A heavily scripted action adventure game that tries to be as Uncharted as possible. Brutal death animations are the only highlight I remember but everything felt too explosive to let you soak in the adventure.`,
        imgLoc: `/img/Tomb Raider.jpg`
    },
    {
        title: `Professor Layton and the Azran Legacy`,
        score: 5,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Prof Layton had to shoot down drones and fought a dude with a metal pipe. Not very gentlemanly. Had a Dark Souls walled off city area where people were cursed to an eternal sleep and had to restart the phoenix light cycle.`,
        imgLoc: `/img/Professor Layton and the Azran Legacy.jpg`
    },
    {
        title: `Saints Row IV`,
        score: 4,
        year: 2013,
        beaten: 1,
        lastPlayed: 2016,
        comment: `A bad superhero game and a worse Crackdown. Bad SR humour persists and gets too absurd to be enjoyable. The melee animations were good though.`,
        imgLoc: `/img/Saints Row IV.jpg`
    },
    {
        title: `DMC Devil May Cry`,
        score: 4,
        year: 2013,
        beaten: 2,
        lastPlayed: 2015,
        comment: `Vergil with a fedora shooting a pregnant lady with a sniper rifle with dubstep music. I hatet his game but thankfully Ninja Theory found success with Hellblade. The DE changes didn't come to PC so that sucks too.`,
        imgLoc: `/img/DMC Devil May Cry.jpg`
    },
    {
        title: `Far Cry 3: Blood Dragon`,
        score: 4,
        year: 2013,
        beaten: 1,
        lastPlayed: 2018,
        comment: `To this day the only Far Cry game I have finished because it's short, the writing peaks at the start then becomes annoying so I am glad it was short.`,
        imgLoc: `/img/Far Cry Blood Dragon.jpg`
    },
    {
        title: `Gone Home`,
        score: 4,
        year: 2013,
        beaten: 1,
        lastPlayed: 2013,
        comment: `A game that would have been better without all the dialogue spelling out what you are seeing instead of discovering it on your own. And when that's the game, I wonder why they would chose to write it out.`,
        imgLoc: `/img/Gone Home.jpg`
    },
    {
        title: `Knack`,
        score: 3,
        year: 2013,
        beaten: 1,
        lastPlayed: 2015,
        comment: `I lost a bet and the guy at CEX told me you can return games within 48 hours and get your full money back cos he had heard Knack sucks. It does suck. Why and how did this get a sequel!?.`,
        imgLoc: `/img/Knack.jpg`
    },
    {
        title: `Virtue's Last Reward`,
        score: 8,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Following on from 999, I got almost exactly what I wanted. The ending was worse for going too far on the wide scale and not keeping it contained.`,
        imgLoc: `/img/Virtues Last Reward.jpg`
    },
    {
        title: `Spelunky`,
        score: 8,
        year: 2012,
        beaten: 1,
        lastPlayed: 2015,
        comment: `Addictive roguelike and one of the few I actually like. Enough creative options to make running through a continuous learning experience. Good art, sound effects and percise controls.`,
        imgLoc: `/img/Spelunky.jpg`
    },
    {
        title: `Dragon's Dogma`,
        score: 8,
        year: 2012,
        beaten: 2,
        lastPlayed: 2016,
        comment: `Finally ported to PC and a good port too! Really fun unique classes for a JRPG and the pawn system is rad. Wish it was a bit more free when it comes to classes but the upcoming sequel could be a 10.`,
        imgLoc: `/img/Dragons Dogma.jpg`
    },
    {
        title: `Journey`,
        score: 8,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Beautiful music and scenery and creative online implemenations but I had played it solo, maybe something was lost there. The story presented is nothing meaningful and I would prefer it without cutscenes.`,
        imgLoc: `/img/Journey.jpg`
    },
    {
        title: `Monster Hunter 3 Ultimate`,
        score: 8,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Finally I have been sold on Monster Hunter and all it took was it to not be portable and not look like garbage. I fell in love with the hammer and whacking monsters' heads.`,
        imgLoc: `/img/Monster Hunter 3 Ultimate.jpg`
    },
    {
        title: `Hotline Miami`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `An arcade game where I actually tried to get a high score and even speed run it. Beastly electronic music set to retro hyper-violence. Story had a bit too much of a presence which made one level kinda suck.`,
        imgLoc: `/img/Hotline Miami.jpg`
    },
    {
        title: `Euro Truck Simulator 2`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game made by Europeans who clearly love truckin'. Don't start near Liverpool as there's not many UK roads to go through! But it's still being updated today with mod support and even online elements 9 years later. Frustrating controller issues, at least for me`,
        imgLoc: `/img/Euro Truck Simulator 2.jpg`
    },
    {
        title: `Persona 4: Golden`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `The added content is honestly quite bad and I don't like the new voice acting cast as much but Persona 4 is still a game worth playing for the mystery Scooby Doo adventure and music. Naoto is best girl.`,
        imgLoc: `/img/Persona 4 Golden.jpg`
    },
    {
        title: `New Super Mario Bros U`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Played co-op with a buddy and the mandatory tablet that 1 person had to use was an awful idea so we dropped it. However, playing Solo, the levels were so much better than the Wii and had really good ghost levels.`,
        imgLoc: `/img/New Super Mario Bros U.jpg`
    },
    {
        title: `Kid Icarus Uprising`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Hurt my wrist playing this game thanks to the dumb controls that is unfortunately still stuck to this annoying handheld. If it came to a console with an actual good input scheme, it might score higher cos it is great.`,
        imgLoc: `/img/Kid Icarus Uprising.jpg`
    },
    {
        title: `Theatrhythm Final Fantasy`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Bought this before I even liked FF game, just wanted more 3DS/DS rhythm games like Elite Beat Agents. I found many enjoyable tracks in each FF game but the input always felt iffy.`,
        imgLoc: `/img/Theatrhythm Final Fantasy.jpg`
    },
    {
        title: `Lumines Electronic Symphony`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `A wonderful Vita launch title that really made that OLED screen come to life. Really enjoyed Kaskade - 4AM track but some of the themes were an eyesore and I was very bad at it.`,
        imgLoc: `/img/Lumines Electronic Symphony.jpg`
    },
    {
        title: `Sleeping Dogs`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Imagine open world Yakuza set in China. Wei Shen is a great protag and the character dynamics made for a great story. Good combat system and somehow even had Emma Stone in the game.`,
        imgLoc: `/img/Sleeping Dogs.jpg`
    },
    {
        title: `Fire Emblem Awakening`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `My first Fire Emblem game and I was showing it to my friend in hospital at the time. Some really cool voice lines such as "Pick a god and pray!" when getting a critical hit.`,
        imgLoc: `/img/Fire Emblem Awakening.jpg`
    },
    {
        title: `The Walking Dead: Season 1`,
        score: 7,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Lee and Clem were a great duo that set in motion the man/girl duo genre we see in TLOU and Bioshock Infinite. At the time it was quite groundbreaking but people, including me, have come down on it.`,
        imgLoc: `/img/The Walking Dead.jpg`
    },
    {
        title: `Gravity Rush`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `A game that is incredibly unique in terms of it's gameplay, world and music, yet I found it quite miserable to slog through due to the camera in heavy gavity justing moments. Kat is a great protagonist.`,
        imgLoc: `/img/Gravity Rush.jpg`
    },
    {
        title: `Botanicula`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Following on from Machinarium comes a microscopic adventure with similar character designs. It is again a bit basic but has heart and good music.`,
        imgLoc: `/img/Botanicula.jpg`
    },
    {
        title: `Orcs Must Die 2`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2013,
        comment: `If you asked me to remember if I played Orcs Must Die 2, I would say no. But I have! This one had co-op which made it slightly more enjoyable. Good snappy tower defense game in third person, which was a trend back then.`,
        imgLoc: `/img/Orcs Must Die 2.jpg`
    },
    {
        title: `Tales from Space: Mutant Blobs Attack`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Charming Vita game. I remember playing it when I was getting a haircut which is an odd thing to do. Then the devs went on to make Gucaamelee and the less said, the better.`,
        imgLoc: `/img/Tales from Space Mutant Blobs Attack.jpg`
    },
    {
        title: `Spec Ops: The Line`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2013,
        comment: `A good TPS on the 360/ps3 which became quite rare due to all the shooters clones. This takes a harsher look at war but the turning point for characters is extremely obvious to you as a player yet you are forced to do it.`,
        imgLoc: `/img/Spec Ops The Line.jpg`
    },
    {
        title: `Rhythm Thief & the Emperor's Treasure`,
        score: 6,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Again I just wanted a EBA game on the 3DS. The variation of rhythm games was fun and the story had some cute elements to it, but it did feel very child-friendly and some rhythm games were quite bad.`,
        imgLoc: `/img/Rhythm Thief & the Emperor's Treasure.jpg`
    },
    {
        title: `Dust: An Elysian Tail`,
        score: 5,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Friend gifted to me and it had a move that let you rack up 99+ combos very easily and I spammed it a lot. Very furry character designs but it was decent for one of my first Metroidvanias.`,
        imgLoc: `/img/Dust An Elysian Tail.jpg`
    },
    {
        title: `Diablo 3`,
        score: 5,
        year: 2012,
        beaten: 2,
        lastPlayed: 2017,
        comment: `An awful and tedious game that is absurdly easy from the get go with little options in how you customise your character and an art style that doesn't seem fitting for the name Diablo.`,
        imgLoc: `/img/Diablo 3.jpg`
    },
    {
        title: `Dishonored`,
        score: 4,
        year: 2012,
        beaten: 1,
        lastPlayed: 2013,
        comment: `I blinked everywhere so I never got to appreciate the so called wonderful level design. Ugly art style and predictable story. I liked the steampunkish setting and designs within it.`,
        imgLoc: `/img/Dishonored.jpg`
    },
    {
        title: `Halo 4`,
        score: 4,
        year: 2012,
        beaten: 1,
        lastPlayed: 2017,
        comment: `I didn't think Halo could get worse but it does with 4. 343 took over the franchise, replaced every enemy with boring generic robots and had such a weird bug at the final QTE when playing co-op.`,
        imgLoc: `/img/Halo 4.jpg`
    },
    {
        title: `One Piece Pirate Warriors`,
        score: 4,
        year: 2012,
        beaten: 1,
        lastPlayed: 2012,
        comment: `I remember telling my friend about the teaser site that went live and he didn't believe me. We had been wanting this since N:UNS. It came out, had a small roster and followed the story but slightly changed the ending. Kind of a bummer.`,
        imgLoc: `/img/One Piece Pirate Warriors.jpg`
    },
    {
        title: `Torchlight 2`,
        score: 7,
        year: 2012,
        beaten: 3,
        lastPlayed: 2020,
        comment: `Played with a buddy and while starting off strong and having a good pet and fish system, having many skills with 2+minute cooldown really annoyed me, and levelling was slow.`,
        imgLoc: `/img/Torchlight 2.jpg`
    },
    {
        title: `Borderlands 2`,
        score: 4,
        year: 2012,
        beaten: 2,
        lastPlayed: 2019,
        comment: `I've played this game twice and each time I find a new thing to hate about it. The worst co-op experience cos you can't listen to podcasts or watch a film while suffering. The Moxxi slot machines were fun though.`,
        imgLoc: `/img/Borderlands 2.jpg`
    },
    {
        title: `Dark Souls`,
        score: 10,
        year: 2011,
        beaten: `5+`,
        lastPlayed: 2022,
        comment: `This game is something else. I love the open world design that isn't too big. The characters. Weapon variety. I could play it forever and probably still discover new things. Fantastic shortcut design that sadly waivers towards the end. God bless Miyazaki.`,
        imgLoc: `/img/Dark Souls.jpg`
    },
    {
        title: `Dead Space 2`,
        score: 9,
        year: 2011,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Incredible sequel, played Halloween 2021. Felt sad for characters like Howard Phillips and his birds. Isaac's VA is great. EA Servers ruined the balance a lot but is optional. Returning to Ishimura was handled well too.`,
        imgLoc: `/img/Dead Space 2.jpg`
    },
    {
        title: `Minecraft`,
        score: 8,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `First time I've played with multiple friends online, in a private server, and it was great. Good memories of building sand mansions (bad idea) and a Magikarp house. The hunger metre was when I fell off.`,
        imgLoc: `/img/Minecraft.jpg`
    },
    {
        title: `LittleBigPlanet 2`,
        score: 8,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `An excellent sequel that lets you create games, not just 2D platformer levels. Stephen Fry returns which is delightful. I burned out quickly because it did feel a bit too similar. Good music choices too.`,
        imgLoc: `/img/LittleBigPlanet 2.jpg`
    },
    {
        title: `Deus Ex: Human Revolution`,
        score: 8,
        year: 2011,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Adam Jensen is a great protag, wonderful ambient music that doesn't interfere with the atmosphere. So many cardboard boxes.`,
        imgLoc: `/img/Deus Ex Human Revolution.jpg`
    },
    {
        title: `Pushmo`,
        score: 8,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `You play as a sumo who pulls and pushes blocks to create a path to one of your hundreds of children. I played this a lot on the train to University and was just wonderfully charming.`,
        imgLoc: `/img/Pushmo.jpg`
    },
    {
        title: `Bastion`,
        score: 8,
        year: 2011,
        beaten: 2,
        lastPlayed: 2013,
        comment: `Supergiants first game that lifted my spirits. Great art, music and narration. Loved seeing the world float up to meet your feet and the alternative endings. The bow was real cool. Made me want to learn XNA.`,
        imgLoc: `/img/Bastion.jpg`
    },
    {
        title: `To The Moon`,
        score: 7,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `A really emotional game and by that I mean I can't remember anything about the story only the wonderful music and the fascinating premise of revisiting memories and correcting them.`,
        imgLoc: `/img/To The Moon.jpg`
    },
    {
        title: `inFamous 2`,
        score: 7,
        year: 2011,
        beaten: 2,
        lastPlayed: 2014,
        comment: `MC design was changed due to bald white men being too commonplace, which is odd. However, the new magic is really cool, and the emotional hit at the end surprised me. Sucker Punch are good devs.`,
        imgLoc: `/img/inFamous 2.jpg`
    },
    {
        title: `Super Mario 3D Land`,
        score: 7,
        year: 2011,
        beaten: 2,
        lastPlayed: 2018,
        comment: `A charming small-scale platformer but Mario runs at such a slower speed that it was hard to adapt to after playing Mario Odyssey.`,
        imgLoc: `/img/Super Mario 3D Land.jpg`
    },
    {
        title: `Magicka`,
        score: 7,
        year: 2011,
        beaten: 3,
        lastPlayed: 2016,
        comment: `A really funny game with a creative magic system. QFASA was OP and giving yourself different shield types to combat enemies was really clever.`,
        imgLoc: `/img/Magicka.jpg`
    },
    {
        title: `Bulletstorm`,
        score: 7,
        year: 2011,
        beaten: 1,
        lastPlayed: 2013,
        comment: `One of my friends favourites and I do like it too. The specific kills with names that gave a big score reminded me of signature takedowns in Burnout so that was fun to play cos you got to kick everything, sometimes into spikes.`,
        imgLoc: `/img/Bulletstorm.jpg`
    },
    {
        title: `The Witcher 2`,
        score: 6,
        year: 2011,
        beaten: 2,
        lastPlayed: 2015,
        comment: `I enjoyed this much more in my first playthrough but to have a completely different act depending on your choice is rad. It felt slow due to no sprint and camera lock on was frustrating compared to other 2011 games.`,
        imgLoc: `/img/The Witcher 2.jpg`
    },
    {
        title: `Dead Island Definitive Collection`,
        score: 6,
        year: 2016,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Played with a buddy and it was quite awful but not as bad as I expected, it got buggy in the final moments which kind of ruined the impact but I don't remember much other than "Who do you Voodoo".`,
        imgLoc: `/img/Dead Island.jpg`
    },
    {
        title: `Professor Layton and the Miracle Mask`,
        score: 6,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `The first 3DS entry and something seemed off. Perhaps the art style didn't transfer over well or by now, there was too much Layton the puzzles felt too familiar. The story had no meat as I can't remember any twist.`,
        imgLoc: `/img/Professor Layton and the Miracle Mask.jpg`
    },
    {
        title: `Kirby Return to Dreamland`,
        score: 6,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `Waddle Dee makes a name for himself being playable, now I have an amiibo of him. The gimmick isn't too exciting as it has too much of a focus on co-op. As a lot of wii games did for some reason.`,
        imgLoc: `/img/Kirby Return to Dreamland.jpg`
    },
    {
        title: `RAGE`,
        score: 6,
        year: 2011,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A mixed bag that I streamed only sometimes for a friend due to weird time zones. A unique setting that only excelled when you was visiting blood stained hospitals.`,
        imgLoc: `/img/RAGE.jpg`
    },
    {
        title: `Skyrim`,
        score: 6,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `I had no interest in the game until my Minecraft buddy kept talking it up and I fell for it. While I was immediately hooked, I hate the combat and animations in third person. Charming a mammoth to fight a mammoth was cool though, but limited to once a day.`,
        imgLoc: `/img/Skyrim.jpg`
    },
    {
        title: `Sonic Generations`,
        score: 7,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `The first Sonic game I liked as it had a good blend of old and new. Fun music and a good art style for the menus especially. Didn't make me like the old ones though.`,
        imgLoc: `/img/Sonic Generations.jpg`
    },
    {
        title: `Mario Kart 7`,
        score: 6,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `This game seemed very small in scale. However I did love this version of Rainbow Road as it not only had you travelling on Rainbows, but also past planets which looked great in 3D.`,
        imgLoc: `/img/Mario Kart 7.jpg`
    },
    {
        title: `Serious Sam 3`,
        score: 5,
        year: 2011,
        beaten: 3,
        lastPlayed: 2016,
        comment: `A disappointment for a long time Serious Sam fan but I did a 32 player co-op session which had me laughing constantly during something called SERIOUS SATURDAYS.`,
        imgLoc: `/img/Serious Sam 3.jpg`
    },
    {
        title: `Saints Row: The Third`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Kanye Wests Power is a real banger of a tune but he's done nothing good since. Much like Saints Row.`,
        imgLoc: `/img/Saints Row The Third.jpg`
    },
    {
        title: `Killzone 3`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `I think a friend lent me this because I sure as hell don't remember buying it. It was essentially the same game but with snow textures and a worse campaign.`,
        imgLoc: `/img/Killzone 3.jpg`
    },
    {
        title: `Orcs Must Die`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `I got a new PC around this time which got me into exploring indie games thanks to Totalbiscuit and some others. OMD was similar to Sanctum but I preferred the art style here and third person perspective.`,
        imgLoc: `/img/Orcs Must Die.jpg`
    },
    {
        title: `Dwarfs!?`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `I used to follow Yogscast for about 6 months, and somewhat enjoyed the Dwarfs thing which lead me to this game and I bought it. It was actually okay watching dwarfs behave like ants but the VA of the Yogscast guy was awful..`,
        imgLoc: `/img/Dwarfs.jpg`
    },
    {
        title: `Renegade Ops`,
        score: 4,
        year: 2011,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Played with a buddy, don't remember a thing!`,
        imgLoc: `/img/Renegade Ops.jpg`
    },
    {
        title: `Ni No Kuni`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `I bought a new TV for this and while it looked great and the concept was great, fighting was a miserable experience. I generally enjoyed the monster designs and the open world element. Joe Hisashi's music was also incredible.`,
        imgLoc: `/img/Ni No Kuni.jpg`
    },
    {
        title: `Gears of War 3`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Played with a buddy and while an improvement over 2 I still didn't care for the tone of the franchise now being action heavy instead of the somewhat spooky vibe of the first game.`,
        imgLoc: `/img/Gears of War 3.jpg`
    },
    {
        title: `Portal 2`,
        score: 5,
        year: 2011,
        beaten: 3,
        lastPlayed: 2019,
        comment: `Played with a buddy again and I still don't feel it. The robot designs are really great and the levels are complex but it's just dull with annoying humour. Glados turning into a potato was the OG Pickle Rick`,
        imgLoc: `/img/Portal 2.jpg`
    },
    {
        title: `Rayman Origins`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Tried solo and dropped, played with a buddy and finished it. Still don't like it as a whole, very annoying sound effects and level design doesn't vary. I enjoy the Ubi-Art engine but think it doesn't suit the vibe of Rayman. Great intro cutscene.`,
        imgLoc: `/img/Rayman Origins.jpg`
    },
    {
        title: `Trine 2`,
        score: 5,
        year: 2011,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Colourful co-op game with a bud. Being a magician was really fun to spawn ramps continously and could get friends killed. But it didn't evolve as the game went on in terms of complexity.`,
        imgLoc: `/img/Trine.jpg`
    },
    {
        title: `Uncharted 3`,
        score: 4,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `Pre-ordered and beat it in 1 night. Remember telling a Uni guy it sucked and he immediately seemed to want nothing more to do with me. Whole plot revolved around Nathan Drakes real name with no outcome.`,
        imgLoc: `/img/Uncharted 3.jpg`
    },
    {
        title: `The Last Story`,
        score: 4,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Bought due to the Xenoblade hype. It's a Wii game that is as brown and bloomy as disgusting PS3/360 games.The side stories were neat but the main story I remember being awful..`,
        imgLoc: `/img/The Last Story.jpg`
    },
    {
        title: `Duke Nukem Forever`,
        score: 3,
        year: 2011,
        beaten: 1,
        lastPlayed: 2011,
        comment: `15 years of development... Never touched a DUKE game before, but if this is how they are all like, I don't want to. Any sort of soul is lose immediately with dated humour and phoned in voice acting but drawing on the whiteboard was nice`,
        imgLoc: `/img/Duke Nukem Forever.jpg`
    },
    {
        title: `Child of Eden`,
        score: 4,
        year: 2011,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Went to Grainger Games to buy this, and the lovely chap said it required Move. I told him it didn't and he checked the box and went 'oh yeah'. Kinda wish I didn't buy it. Bored me to death but maybe it is better with Kinect.`,
        imgLoc: `/img/Child of Eden.jpg`
    },
    {
        title: `Earth Defense Force Insect Armageddon`,
        score: 2,
        year: 2011,
        beaten: 1,
        lastPlayed: 2010,
        comment: `Just an absolute misery with almost nothing fun but co-opped work fine.`,
        imgLoc: `/img/Earth Defense Force Insect Armageddon.jpg`
    },
    {
        title: `Ghost Trick`,
        score: 10,
        year: 2010,
        beaten: 4,
        lastPlayed: 2023,
        comment: `A modern classic where Shu Takumi got to break away from Ace Attorney. Incredible character animation that oozes personality, great writing and concept for a puzzle game. Great music. Missile best dog, the only thing in life is barking!`,
        imgLoc: `/img/Ghost Trick.jpg`
    },
    {
        title: `Pokemon Black & White`,
        score: 9,
        year: 2010,
        beaten: 2,
        lastPlayed: 2010,
        comment: `A high budget ending with great DS visuals and incredible music. Shame about the now dead online features. DS piracy was rampant so the leaks was very fun with Smugleaf, Wotter and Pignite.`,
        imgLoc: `/img/Pokemon Black & White.jpg`
    },
    {
        title: `Xenoblade Chronicles`,
        score: 9,
        year: 2010,
        beaten: 2,
        lastPlayed: 2013,
        comment: `What Monolith Soft accomplished on the Wii is a miracle compared to our Japanese devs were messing up on more powerful hardware. Scale, story, music, characters, and the British voice acting. It had it all.`,
        imgLoc: `/img/Xenoblade Chronicles.jpg`
    },
    {
        title: `Kirby Epic Yarn`,
        score: 8,
        year: 2010,
        beaten: 3,
        lastPlayed: 2016,
        comment: `I remember walking to Argos in Upton as it was on sale and only one in the area with a buddy. A great Christmas game and somewhat good in co-op but motion sensor was not good for it.`,
        imgLoc: `/img/Kirby Epic Yarn.jpg`
    },
    {
        title: `Alan Wake`,
        score: 8,
        year: 2010,
        beaten: 1,
        lastPlayed: 2013,
        comment: `You put the lime in the coconut and drink it all up! Fell in love with the setting which Remedy seem to nail constantly. Poets of the Fall show up and they are great, best moment of the game is that concert. Labwarrior was right!`,
        imgLoc: `/img/Alan Wake.jpg`
    },
    {
        title: `Super Mario Galaxy 2`,
        score: 8,
        year: 2010,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Yoshi returns and I don't want to say that immediately makes it better than the first but it kinda does. The boss fights were rad but the final boss fight like most Mario games, is just the same fight with Bowser again.`,
        imgLoc: `/img/Super Mario Galaxy 2.jpg`
    },
    {
        title: `Donkey Kong Country Returns`,
        score: 8,
        year: 2010,
        beaten: 2,
        lastPlayed: 2012,
        comment: `An incredible return to form for the ape. Good music and world themes but lacks the David Wise. Quite difficult. Great final secret level. Waggle to roll is annoying long term but did feel responsive.`,
        imgLoc: `/img/Donkey Kong Country Returns.jpg`
    },
    {
        title: `Nier`,
        score: 7,
        year: 2010,
        beaten: 2,
        lastPlayed: 2017,
        comment: `A unique game in the sense of story, endings, music and how much grinding you have to do. People even make images to show which ones to avoid as they offer nothing of note. Still a game I recommend to people and I hope the remaster does well.`,
        imgLoc: `/img/Nier.jpg`
    },
    {
        title: `Just Cause 2`,
        score: 7,
        year: 2010,
        beaten: 1,
        lastPlayed: 2012,
        comment: `One of the best demos available during this era. High octane explosions, really nice visuals. Wish the hook was a bit less restrictive but a PC mod does fix that. Great gas canister physics.`,
        imgLoc: `/img/Just Cause 2.jpg`
    },
    {
        title: `Red Dead Redemption`,
        score: 7,
        year: 2010,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A game I finished to simply cross off a classic, a classic I tried playing back in 2010 and hated it. I still kind of do since it does feel like an empty desert so many times but I did grow to like the characters and world.`,
        imgLoc: `/img/Red Dead Redemption.jpg`
    },
    {
        title: `VVVVVV`,
        score: 7,
        year: 2010,
        beaten: 1,
        lastPlayed: 2011,
        comment: `A platformer with a single gimmick and yet it is able to carry that well throughout the entire game. One objective has you freefalling for a long time just to do it again immediately after now falling upwards. Great soundtrack too.`,
        imgLoc: `/img/VVVVVV.jpg`
    },
    {
        title: `Costume Quest`,
        score: 7,
        year: 2010,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Halloween without the horror. A cute adventure game from Double Fine that is rare for me to say these days.`,
        imgLoc: `/img/Costume Quest.jpg`
    },
    {
        title: `Super Meat Boy`,
        score: 6,
        year: 2010,
        beaten: 1,
        lastPlayed: 2013,
        comment: `A brutal platformer that started off a trend for hardcore 2D games. I thought it's music was great but overtime it's been tarnished with re-releases that are worse in terms of art direction and music.`,
        imgLoc: `/img/Super Meat Boy.jpg`
    },
    {
        title: `Call of Duty Black Ops`,
        score: 6,
        year: 2010,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Tell me about the numbers! I applaud Treyarch for doing ambitious branching elements to the story that mostly went unnoticed but aside from that level playing 'It Aint Me' I don't remember anything.`,
        imgLoc: `/img/Call of Duty Black Ops.jpg`
    },
    {
        title: `God of War III`,
        score: 6,
        year: 2010,
        beaten: 1,
        lastPlayed: 2010,
        comment: `What a disappointment, I really expected the PS3 to boost somthing here, and while the scale was incredible with constant camera pans, I did struggle to make out what was going on at times, especially in the intro. Ending tried to be emotional but failed. Sold it to a buddy.`,
        imgLoc: `/img/God of War III.jpg`
    },
    {
        title: `Halo Reach`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Played in co-op with a bud who insisted on the hardest difficulty and I resent him for it. I remember it having a great ending but nothing else.`,
        imgLoc: `/img/Halo Reach.jpg`
    },
    {
        title: `Metro 2033`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2020,
        comment: `An experience that would be better if I hadn't been such a big fan of STALKER. Good atmosphere and even some great enemy AI that goes underappreciated.`,
        imgLoc: `/img/Metro 2033.jpg`
    },
    {
        title: `Heavy Rain`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2012,
        comment: `A good idea ruined by an awful writer. Once you know who the killer is, everything is ruined on a gameplay level. At least the memes spawned from this were good.`,
        imgLoc: `/img/Heavy Rain.jpg`
    },
    {
        title: `Atelier Totori`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2011,
        comment: `My first and only Atelier game. It had some charm but was not a fan of the character designs and story. Very slice of life. The alchemy in the game was cool but not enough to satisfy a full game.`,
        imgLoc: `/img/Atelier Totori.jpg`
    },
    {
        title: `Battlefield Bad Company 2`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2013,
        comment: `Supposedly a funny game but I can't remember anything funny or quippy about it. I remember thinking it was a very bro adventure with a cast that didn't take anything seriously. Never touched the multiplayer I assume it had.`,
        imgLoc: `/img/Battlefield Bad Company 2.jpg`
    },
    {
        title: `Kane & Lynch 2`,
        score: 4,
        year: 2010,
        beaten: 2,
        lastPlayed: 2021,
        comment: `A game that's hard to tell the tone the developers were going for. It attempts to be serious yet many moments are oddly comical due to animations and quite absurd situations. Ridiculous levels of next-gen lens flares but the film aeshetic can be nice.`,
        imgLoc: `/img/Kane & Lynch 2.jpg`
    },
    {
        title: `Limbo`,
        score: 5,
        year: 2010,
        beaten: 1,
        lastPlayed: 2012,
        comment: `The most basic platformer that I don't think would have the popularity if it wasn't for the black and white visuals. The spider was a scary moment but it's hard to think of anything else worth mentioning.`,
        imgLoc: `/img/Limbo.jpg`
    },
    {
        title: `Valkyria Chronicles II`,
        score: 2,
        year: 2010,
        beaten: 1,
        lastPlayed: 2012,
        comment: `The worst sequel to a great game since DMC2, and I blame it on the devs targeting the PSP demographic, but I don't understand why.`,
        imgLoc: `/img/Valkyria Chronicles 2.jpg`
    },
    {
        title: `Demon's Souls`,
        score: 10,
        year: 2009,
        beaten: `5+`,
        lastPlayed: 2020,
        comment: `Played at a party I attended and hated the party but loved the game. Bought it immediately after. Me and a friend mocked it when a magazine called it the next Shadow of the Colossus. Who knew it would be better.`,
        imgLoc: `/img/Demon's Souls.jpg`
    },
    {
        title: `Nine Hours, Nine Persons, Nine Doors`,
        score: 9,
        year: 2009,
        beaten: 1,
        lastPlayed: 2010,
        comment: `I had never played a visual novel game before and this blew me away in terms of weird theoretical concepts that is spoken about in the science community. It can be a bit silly but I throughouly enjoyed how dark it was.`,
        imgLoc: `/img/Nine Hours, Nine Persons, Nine Doors.jpg`
    },
    {
        title: `Ratchet & Clank A Crack in Time`,
        score: 8,
        year: 2009,
        beaten: 2,
        lastPlayed: 2009,
        comment: `Possibly my favourite Ratchet game. Really good Clank puzzles, and an emotional story with another Lombax. But the weapons felt very typical of the shooter genre such as grenades, sniper rifle, shotgun, pistol etc.`,
        imgLoc: `/img/Ratchet and Clank A Crack in Time.jpg`
    },
    {
        title: `Henry Hatsworth in the Puzzling Adventure`,
        score: 8,
        year: 2009,
        beaten: 1,
        lastPlayed: 2010,
        comment: `You haven't heard of this game but it's fantastic and deceivingly hard. Part adventure, part match puzzle in the bottom screen so great use of the DS. Great music, charm and exceedingly British with an asshole sidekick. Gold bowler hats. Until about 2012, EA offered the soundtrack free on their site.`,
        imgLoc: `/img/Henry Hatsworth in the Puzzling Adventure.jpg`
    },
    {
        title: `Bayonetta`,
        score: 7,
        year: 2009,
        beaten: 3,
        lastPlayed: 2018,
        comment: `2017 was were I started feeling better about Bayonetta as it never clicked before. It's a very desaturated game but has great combat and many collectibles. It probably has deep lore but never bothered to look into it.`,
        imgLoc: `/img/Bayonetta.jpg`
    },
    {
        title: `Pokemon Heart Gold & Soul Silver`,
        score: 7,
        year: 2009,
        beaten: 1,
        lastPlayed: 2019,
        comment: `10 years ago, this might be in my top 10 games of all time, but now I have come down a bit on it. While Gen 2 is so massive as a whole, the actual adventure in regions does feel slow to level and fast to explore. It's odd but it does have Voltorb Flip which kept me busy on the toilet.`,
        imgLoc: `/img/Pokemon Heart Gold & Soul Silver.jpg`
    },
    {
        title: `Picross 3D`,
        score: 7,
        year: 2009,
        beaten: 1,
        lastPlayed: 2011,
        comment: `Might have started my love for Sudoku and Picross. Really fun to solve but very basic.`,
        imgLoc: `/img/Picross 3D.jpg`
    },
    {
        title: `inFamous`,
        score: 7,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `An edgy game with a new superhero from the Sly devs, pretty cool to see. It looks very icky like a lot of games this gen but the magic looked real cool and the final boss was fantastic to fight and for store reasons.`,
        imgLoc: `/img/inFamous.jpg`
    },
    {
        title: `Flower`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `A breezey game that is just soothing for the soul. That is until you get to the jump scare which rivals Bioshock Infinite. Pleasant music and a good start for ThatGameCompany to go 3D, and now Sony have dropped em like all indie devs they once supported.`,
        imgLoc: `/img/Flower.jpg`
    },
    {
        title: `The Maw`,
        score: 5,
        year: 2009,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Pete Dorr's favourite game so that means it gets docked a point. A charming unique game that I remember having good animation but not much else`,
        imgLoc: `/img/The Maw.jpg`
    },
    {
        title: `Killzone 2`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `Played multiplayer a lot with Digital Spy guys but fell off the game and that forum quite quickly. The match type that rotates game modes was really clever. Movement felt very sluggish.`,
        imgLoc: `/img/Killzone 2.jpg`
    },
    {
        title: `Uncharted 2`,
        score: 6,
        year: 2009,
        beaten: 2,
        lastPlayed: 2016,
        comment: `A game I loved when it originally released but fell off here. A bit too many scripted events and too full of betrayals.`,
        imgLoc: `/img/Uncharted 2.jpg`
    },
    {
        title: `Mirror's Edge`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Really enjoyed the style of the city and parkour controls were great. Quite expensive for a short game but that Still Alive song is something I still love to this day. One of my friends favourite games. Story was boring.`,
        imgLoc: `/img/Mirror's Edge.jpg`
    },
    {
        title: `Machinarium`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2012,
        comment: `Unique art design and good character design in a real odd setting made for a good puzzle game but it did feel very obtuse due to the weird nature of the world. Charming noises.`,
        imgLoc: `/img/Machinarium.jpg`
    },
    {
        title: `The Fool's Errand`,
        score: 7,
        year: 1987,
        beaten: 1,
        lastPlayed: 2024,
        comment: `An ambitious puzzle game full of creative ideas and then epilepsy fits. Too many wordsearches that didn't amount to anything. Nice charming writing and a lovely prologue sequence with great art throughout. My dumbass misspelled Amethyst causing me to think something was wrong.`,
        imgLoc: `/img/The Fool's Errand.jpg`
    },
    {
        title: `Dead Island 2`,
        score: 6,
        year: 2023,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Suprisingly alright for a game with such long troubled development. Drop-kicking zombies, exploring rich ass homes. Kinda peaks early though, quests are a bit of a chore. Got a great sledgehammer at the end of the game.`,
        imgLoc: `/img/Dead Island 2.jpg`
    },
    {
        title: `Resident Evil 4 Remake`,
        score: 8,
        year: 2023,
        beaten: 2,
        lastPlayed: 2024,
        comment: `A game I liked so much I beat it again a week later on Hardcore. Still campy, great action and horror. Some parts are worse, some parts are better as expected. Music sucks a lot though. So many unique combat encounters. Ada's VO is quite bad!`,
        imgLoc: `/img/Resident Evil 4 Remake.jpg`
    },
    {
        title: `Yakuza 3`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2022,
        comment: `While it was nice to be back in Kamurocho, many of the plot elements felt too absurd and one chapter was 30 minutes of dialogue. The orphanage elements were great.`,
        imgLoc: `/img/Yakuza 3.jpg`
    },
    {
        title: `Yakuza 4`,
        score: 6,
        year: 2010,
        beaten: 1,
        lastPlayed: 2024,
        comment: `The panty thief scene was a great nod to Cowboy Bebop. Finally learnt who Saejima is and a scene of his was fantastic. Learned of the meme RUBBER BULLETS! Very stupid. Tanimura was boring and I hated the story structure but the ending was cool.`,
        imgLoc: `/img/Yakuza 4.jpg`
    },
    {
        title: `Metaphor ReFantazio`,
        score: 7,
        year: 2024,
        beaten: 1,
        lastPlayed: 2024,
        comment: `Eupha best girl. Bit too on the nose that repeats its main theme constantly. Enjoyed Heismay a lot. Liked the enemy designs but there was only about 10. Archetype designs were bad! Main villain was also kinda crap but glad he was present a lot. Scouse accent representin big time!`,
        imgLoc: `/img/Metaphor ReFantazio.jpg`
    },
    {
        title: `Dynasty Warriors 6 Empires`,
        score: 5,
        year: 2009,
        beaten: 1,
        lastPlayed: 2014,
        comment: `Bought this on sale in GAME for about a tenner and still wish I got more value. My first DW empires game and probably the last one I play.`,
        imgLoc: `/img/Dynasty Warriors 6 Empires.jpg`
    },
    {
        title: `Beat Hazard`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2011,
        comment: `One of the first games I bought DLC for. I liked to play new music I got for a while on this game but it didn't vary the game all that much and most of the time you were shooting at junk in space.`,
        imgLoc: `/img/Beat Hazard.jpg`
    },
    {
        title: `New Super Mario Bros Wii`,
        score: 6,
        year: 2009,
        beaten: 1,
        lastPlayed: 2010,
        comment: `Played co-op with a buddy and it was surprisingly okay. Had a really funny ending cos we died so much more than usual but the music is annoyingly awful.`,
        imgLoc: `/img/New Super Mario Bros Wii.jpg`
    },
    {
        title: `Assassin's Creed II`,
        score: 5,
        year: 2009,
        beaten: 1,
        lastPlayed: 2011,
        comment: `People were so adamant that the second was so much better, so I finally played it in 2011 and still thought it was awful. Something about the story and combat irked me but the climbing mechanics were good.`,
        imgLoc: `/img/Assassins Creed II.jpg`
    },
    {
        title: `Scribblenauts`,
        score: 5,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `A game that took the WORLD BY STORM for about a week. Had some fun primarily in learning what the game could do and having creatures fight but solving the puzzles was very simple by using the same thing repeatedly.`,
        imgLoc: `/img/Scribblenauts.jpg`
    },
    {
        title: `Call of Duty: Modern Warfare 2`,
        score: 4,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `CoD reached that point where it tried to be cool. Maps were smaller. People died faster. The blood effect looked like glitter and they stopped caring about PC players.`,
        imgLoc: `/img/Call of Duty Modern Warfare 2.jpg`
    },
    {
        title: `Borderlands`,
        score: 4,
        year: 2009,
        beaten: 1,
        lastPlayed: 2009,
        comment: `I've played this game three times and I hate it. Why have I played it three times? I don't know! I like to suffer in my misery. Why do all guns suck and barely have a difference, why is Claptrap so annoying. Wish I knew.`,
        imgLoc: `/img/Borderlands.jpg`
    },
    {
        title: `Professor Layton and the Lost Future`,
        score: 8,
        year: 2008,
        beaten: 1,
        lastPlayed: 2011,
        comment: `A fantastic send off for Layton and really didn't need more games made. Still really good puzzles but an even sadder ending. I spent about 40 minutes doing the chess horse puzzle for my friend and screamed her name to get her attention in college.`,
        imgLoc: `/img/Professor Layton and the Lost Future.jpg`
    },
    {
        title: `Viva Pinata TIP`,
        score: 8,
        year: 2008,
        beaten: 3,
        lastPlayed: 2022,
        comment: `A bit too directed with the lackitoad pinata send-off stuff but it's still great. Some wonderful new designs but the desert/arctic split was annoying to deal with. Prof Pester was obnoxious as hell too.`,
        imgLoc: `/img/Viva Pinata TIP.jpg`
    },
    {
        title: `Burnout Paradise`,
        score: 8,
        year: 2008,
        beaten: 2,
        lastPlayed: 2018,
        comment: `Free DLC, incredible drop in/out multiplayer, good community, plenty of shortcuts to find. It set the standard for open world racing while still being fast, about taking down your opponent. But with all races only having 8 finishing spots, you drove through the same areas a lot.`,
        imgLoc: `/img/Burnout Paradise.jpg`
    },
    {
        title: `LittleBigPlanet`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2008,
        comment: `Dad kindly went back into Tesco to see if they had it and they did. Think cos my friend was with me it guilt tripped him. Very fond memories of Will Smith, H4H, instant death, slapping friends and my first ever platinum.`,
        imgLoc: `/img/LittleBigPlanet.jpg`
    },
    {
        title: `Dead Space`,
        score: 8,
        year: 2008,
        beaten: 1,
        lastPlayed: 2020,
        comment: `I played this near Halloween to fit the mood. The game has fantastic UI and sound design and great weapons. Enemy designs were a bit boring though.`,
        imgLoc: `/img/Dead Space.jpg`
    },
    {
        title: `Fable 2`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2008,
        comment: `One of the most memorable co-op experiences I have ever had. I married the town crier and my friend joined my world, killed him, and left. It was small in terms of world size but I loved the interactivity and freedom.`,
        imgLoc: `/img/Fable 2.jpg`
    },
    {
        title: `Kirby Super Star Ultra`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2010,
        comment: `A good (remake) of the SNES collection. A mix-match of modes for Kirby, some fleshed out like treasure hunt, others just feel like unecessary mini-game padding. As a whole it's considered one of the best, but I find it too basic and has quite a bad art style compared to the NES games.`,
        imgLoc: `/img/Kirby Super Star Ultra.jpg`
    },
    {
        title: `Motorstorm Pacific Rift`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2008,
        comment: `Holy crap, 2 good racing games in 1 year. The music sucks ass but it had that custom music option so I got to put Yellowcard - Breathing over most of it like a chad. The nitrous sytem based on temp in the environment was rad and the track course was really sick with plenty of ramps.`,
        imgLoc: `/img/Motorstorm Pacific Rift.jpg`
    },
    {
        title: `Naruto Ultimate Ninja Storm`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2008,
        comment: `At this point I was still into Naruto and this is the only good 3D anime brawler I have seen. It's all downhill from here. Really good art style and animations.`,
        imgLoc: `/img/Naruto Ultimate Ninja Storm.jpg`
    },
    {
        title: `Metal Gear Solid 4`,
        score: 7,
        year: 2008,
        beaten: 1,
        lastPlayed: 2008,
        comment: `Having not played MGS 1-3, playing 4 was not as jarring as I expected. I traded GTA IV in for this so it cost £10. I ignored the 90 minute cutscene and story as a whole but I enjoyed the photography element, gun variety and aesthetics.`,
        imgLoc: `/img/Metal Gear Solid 4.jpg`
    },
    {
        title: `Devil May Cry 4`,
        score: 7,
        year: 2008,
        beaten: "5+",
        lastPlayed: 2018,
        comment: `A good game in some ways and bad in others, especially when backtracking as Dante, you fight each boss 3 times in one playthrough but some fights are incredible and the demo is one of my earliest Xbox 360 memories.`,
        imgLoc: `/img/Devil May Cry 4.jpg`
    },
    {
        title: `Call of Duty: World at War`,
        score: 6,
        year: 2008,
        beaten: 2,
        lastPlayed: 2008,
        comment: `People wrote this off because it was Treyarch not IW. For me, I never liked WW1-2 games as it always looks drop and the guns are boring. Friend got me a beta invite when I was asleep so that was nice.`,
        imgLoc: `/img/Call of Duty World at War.jpg`
    },
    {
        title: `Fallout 3`,
        score: 6,
        year: 2008,
        beaten: 2,
        lastPlayed: 2010,
        comment: `At launch I loved this, overtime I've come to like it less primarily because it barely works on modern OS and NV overshadows it. The world seems lacking as most of it is spent in underground subways and it's very green.`,
        imgLoc: `/img/Fallout 3.jpg`
    },
    {
        title: `God of War: Chains of Olympus`,
        score: 6,
        year: 2008,
        beaten: 1,
        lastPlayed: 2009,
        comment: `A decent downscaled God of War game that does suffer as expected for a PSP game. While it maintains the gore and fixed cameras, it lacks the scale. The story also felt too similar to past games of loss then a rise and repeat.`,
        imgLoc: `/img/God of War Chains of Olympus.jpg`
    },
    {
        title: `Army of Two`,
        score: 4,
        year: 2008,
        beaten: 1,
        lastPlayed: 2009,
        comment: `Played with a buddy and some of the co-op mechanics were pretty good but I wish it let you had more fun with it rather than only having gestures when boosting eachother. Could rip off car doors to make shields.`,
        imgLoc: `/img/Army of Two.jpg`
    },
    {
        title: `Gears of War 2`,
        score: 4,
        year: 2008,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A game that epitomises the third person shooter design of that era, with constant turret sections, ugly colour palette, regen health and grenade spam. I can't remember liking anything about it.`,
        imgLoc: `/img/Gears of War 2.jpg`
    },
    {
        title: `Call of Duty 4`,
        score: 9,
        year: 2007,
        beaten: `5+`,
        lastPlayed: 2010,
        comment: `Absorbed my life for 3 years and I refused to move onto WAW or MW2 or Blops. I wish the multiplayer was a smoother experience as PS3 owners had 'DOWNLOADING GAME SETTINGS' constantly. Some iconic single player levels too without going edgy like the next CoDs.`,
        imgLoc: `/img/Call of Duty 4.jpg`
    },
    {
        title: `The Witcher`,
        score: 8,
        year: 2007,
        beaten: 2,
        lastPlayed: 2014,
        comment: `A game I struggled to fall in love with, but when I did, I fell in love with the slavic folklore, the music,the autumn colour palette and the mini-games. I remember my dad buying me this in Tesco cos of the cool cover.`,
        imgLoc: `/img/The Witcher.jpg`
    },
    {
        title: `Bioshock`,
        score: 8,
        year: 2007,
        beaten: 2,
        lastPlayed: 2008,
        comment: `A unique setting, great enemy designs, incredible use of lighting and physics with your magic powers. The game popularised audio logs which I now hate and some parts such as the final boss are real dumb but I thought this game in 2007 was incredible.`,
        imgLoc: `/img/Bioshock.jpg`
    },
    {
        title: `Professor Layton and the Curious Village`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2009,
        comment: `Wonderful art style and excellent use of the DS screens. Was a really big franchise then kinda died off. This one is great for a first entry, with good puzzles and even post-game content. Uni professor puzzle books also contributed which I love.`,
        imgLoc: `/img/Professor Layton and the Curious Village.jpg`
    },
    {
        title: `Professor Layton and Pandora's Box`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2009,
        comment: `An amazingly quick follow up to Curious Village, and while similar, the secret ended up being something heartwarming. Series has been somewhat tainted by a flash animation my friend kept quoting.`,
        imgLoc: `/img/Professor Layton and Pandora's Box.jpg`
    },
    {
        title: `Stalker Shadow of Chernobyl`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Incredibly immersive game that I was 30 minutes away from finishing back in 2010 before messing up a quick save cos I was new to hardcore PC games. Ridiculously accurate AI but X16 lab is a haunting experience.`,
        imgLoc: `/img/Stalker Shadow of Chernobyl.jpg`
    },
    {
        title: `God of War II`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2007,
        comment: `Something in 2 didn't click like the first. I think it was all too similar or I just fell off Kratos as a character because he was just an angry boy. The scale of Gaia was absolutely incredible though.`,
        imgLoc: `/img/God of War II.jpg`
    },
    {
        title: `Team Fortress 2`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2008,
        comment: `Bought physically as I didn't know about Steam and I couldn't get into it until at some point it clicked. I think it's gotten worse as time went on but the original purity was something special. The best character models.`,
        imgLoc: `/img/Team Fortress 2.jpg`
    },
    {
        title: `Super Mario Galaxy`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2009,
        comment: `I got my Wii quite late and I was never the biggest Mario fan, so by the time I played this, I heard incredible things. And yet many levels were boring and short and made little use of the planet gravity physics.`,
        imgLoc: `/img/Super Mario Galaxy.jpg`
    },
    {
        title: `Uncharted`,
        score: 7,
        year: 2007,
        beaten: 2,
        lastPlayed: 2016,
        comment: `Originally didn't care much for it but now it's probably my favourite Uncharted. Nice singular location with variety in it's level design.`,
        imgLoc: `/img/Uncharted.jpg`
    },
    {
        title: `Hotel Dusk: Room 215`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2010,
        comment: `Played at the reverence of my friend who says this is one of his favourites. It has a wonderful rotoscope art style, music and a very hotel cabin beige look to the environments. Good mystery with solid music but some of the touch screen elements didn't work and felt unecessary like the bowling.`,
        imgLoc: `/img/Hotel Dusk.jpg`
    },
    {
        title: `Ratchet & Clank Tools of Destruction`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2008,
        comment: `My first Ratchet game, gotten with my PS3. I fell quite in love with it but compared to the newer titles, it does lack that little extra, I remember the final boss being cool.`,
        imgLoc: `/img/Ratchet and Clank Tools of Destruction.jpg`
    },
    {
        title: `Crackdown`,
        score: 6,
        year: 2007,
        beaten: 1,
        lastPlayed: 2008,
        comment: `I remember playing this and thinking the open world was rad, and it still is. Collecting orbs influenced other games like inFamous and the gang territory system was interesting.`,
        imgLoc: `/img/Crackdown.jpg`
    },
    {
        title: `Halo 3`,
        score: 5,
        year: 2007,
        beaten: 2,
        lastPlayed: 2017,
        comment: `Played with my Xbox obsessed friend and the hardest difficulty and that still irks me. I dont know what is so appealing about Halo to people but good for them I guess, it didn't do anything for me.`,
        imgLoc: `/img/Halo 3.jpg`
    },
    {
        title: `Portal`,
        score: 5,
        year: 2007,
        beaten: 1,
        lastPlayed: 2007,
        comment: `A really short game that felt more of an experiment. So short I don't think the puzzles got more complex which is one of the requirements I have for puzzle game. Found Glados more annoying than funny which no one agrees with.`,
        imgLoc: `/img/Portal.jpg`
    },
    {
        title: `Burnout Dominator`,
        score: 5,
        year: 2007,
        beaten: 1,
        lastPlayed: 2007,
        comment: `Even as a pre-teen I noticed something was off. Little did I know it was a PSP game that I was playing on a PS2. It had multiple language versions of Hey You by Avril Lavigne which was very odd.`,
        imgLoc: `/img/Burnout Dominator.jpg`
    },
    {
        title: `Assassin's Creed`,
        score: 5,
        year: 2007,
        beaten: 1,
        lastPlayed: 2007,
        comment: `"What Ass Creed was, is nothing like today. Back then it prioritised deathly blows, stealth and had ambition. Now it's tiered loot, no stealth or care in your assassinations. Yet somehow both new and old AC suck.`,
        imgLoc: `/img/Assassins Creed.jpg`
    },
    {
        title: `Timeshift`,
        score: 5,
        year: 2007,
        beaten: 2,
        lastPlayed: 2016,
        comment: `A neat idea but rather poor execution. The rain when you pause time looks great and the time mechanic does make for really good moments, but can't use them in a creative enough way to make the powers varied.`,
        imgLoc: `/img/Timeshift.jpg`
    },
    {
        title: `Victorious Boxers: Revolution`,
        score: 5,
        year: 2007,
        beaten: 1,
        lastPlayed: 2010,
        comment: `AKA: The Wii Hajime no Ippo game. It's somewhat alright since it uses the same input motion as Wii Sports boxing. A good roster for the game but I remember them not feeling all too different.`,
        imgLoc: `/img/Victorious Boxers Revolution.jpg`
    },
    {
        title: `Mass Effect`,
        score: 4,
        year: 2007,
        beaten: 1,
        lastPlayed: 2012,
        comment: `I tried to give ME a fair shot but the entire dialogue system being based on good/bad always felt too video gamey to where I could not take these characters seriously. Just look at Planescape from 1999 for quality none-judging but consequential dialogue choices.`,
        imgLoc: `/img/Mass Effect.jpg`
    },
    {
        title: `Elite Beat Agents`,
        score: 10,
        year: 2006,
        beaten: `5+`,
        lastPlayed: 2019,
        comment: `One of the absolute best DS games. A punk soundtrack with some classics on there too. Great humour and I always appreciate a game where failing is still exciting. Hate the DS stylus and the wheel spin sections though.`,
        imgLoc: `/img/Elite Beat Agents.jpg`
    },
    {
        title: `Okami`,
        score: 9,
        year: 2006,
        beaten: 2,
        lastPlayed: 2018,
        comment: `One of my absolute favourite games from one of my favourite game directors. A beautiful stylized Japanese game which started my love for Yokai. A unique combat system with a great story, funny side characters and a deeply interactive world.`,
        imgLoc: `/img/Okami HD.jpg`
    },
        {
        title: `Viva Pinata`,
        score: 8,
        year: 2006,
        beaten: 3,
        lastPlayed: 2021,
        comment: `Don't know what made me buy this but glad I did. Incredible soulful game with such odd requirements to unlock new pinatas.`,
        imgLoc: `/img/Viva Pinata.jpg`
    },
        {
        title: `Bully`,
        score: 8,
        year: 2006,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I really wish Rockstar would make smaller scale games like this as it was enjoyable to do the mini-game classes, especially English which was basically Countdow.`,
        imgLoc: `/img/Bully.jpg`
    },
        {
        title: `God Hand`,
        score: 8,
        year: 2006,
        beaten: 1,
        lastPlayed: 2012,
        comment: `A game that's too bloody hard but also incredible. Good humour, unique combat system and makes me wish Mikami would move away from horror games.`,
        imgLoc: `/img/God Hand.jpg`
    },
        {
        title: `Persona 3 FES`,
        score: 6,
        year: 2006,
        beaten: 1,
        lastPlayed: 2017,
        comment: `BABY BABY BABY BABY BABYYYY! A good game but the lack of party control can be a hindrance. One social link really stands out to me about a guy dealing with cancer while writing a childrens book about a pink elephant. Not a happy ending sadly.`,
        imgLoc: `/img/Persona 3 FES.jpg`
    },
        {
        title: `Black`,
        score: 6,
        year: 2006,
        beaten: 1,
        lastPlayed: 2010,
        comment: `Played much later but even here, Criterion makes an FPS on the PS2 with a punch. Some excellent sound design for a ps2 shooter but other than that, it was pretty ordinary.`,
        imgLoc: `/img/Black.jpg`
    },
        {
        title: `Pokemon Diamond & Pearl`,
        score: 5,
        year: 2006,
        beaten: 2,
        lastPlayed: 2012,
        comment: `A game I used to love and now kinda hate. The pokemon variety in Gen IV is abysmal with only one other fire type. Very slow with mad HM usage and not very memorable routes. The safari zone sucks too.`,
        imgLoc: `/img/Pokemon Diamond & Pearl.jpg`
    },
        {
        title: `Dead Rising`,
        score: 5,
        year: 2006,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Finished on the night of Eurovision. Starts off frustrating but once you get into the groove of understanding the UI and map, it gets better. Fun easter eggs but not a lot of useful items.`,
        imgLoc: `/img/Dead Rising.jpg`
    },
        {
        title: `Thrillville`,
        score: 5,
        year: 2006,
        beaten: 1,
        lastPlayed: 2006,
        comment: `A great title for a roller coaster game BUT, this has too much of a focus on interacting with visitors on the ground level. It had some charm for sure such as the ability to flirt with guests with pick up lines such as: 'You're all curves with no breaks.`,
        imgLoc: `/img/Thrillville.jpg`
    },
        {
        title: `Need for Speed Carbon`,
        score: 5,
        year: 2006,
        beaten: 1,
        lastPlayed: 2006,
        comment: `The only NFS game I have finished and I think I enjoyed the night time vibes a lot. It is no Burnout but then again nothing is. The maps designed for drifting were cool too.`,
        imgLoc: `/img/Need for Speed Carbon.jpg`
    },
    {
        title: `Devil May Cry 3`,
        score: 9,
        year: 2005,
        beaten: 3,
        lastPlayed: 2018,
        comment: `Hideaki Itsuno knocks it out of the park after a disappointing DMC2. Incredible combat for a PS2 game made better with the Style Switcher mod. Ruthlessly hard at times but what is the price to pay for power.`,
        imgLoc: `/img/Devil May Cry 3.jpg`
    },
    {
        title: `Ouendan`,
        score: 9,
        year: 2005,
        beaten: 1,
        lastPlayed: 2021,
        comment: `JP only but EBA is the west 'equivalent'. Some great songs like LINDA LINDA. An obese egyptian lady loses weight and then the man falls in love her won't pass today. If you failed at the Ramen song, a cat would come in and piss on the floor.`,
        imgLoc: `/img/Ouendan.jpg`
    },
    {
        title: `Rogue Galaxy`,
        score: 8,
        year: 2005,
        beaten: 1,
        lastPlayed: 2006,
        comment: `Checked IGN and saw trailers for this. With my friend at my house, asked my dad to take me to Blockbuster to get it, leaving my friend in my room alone for some reason... I remember listening to Take That - Stardust during the 100 floor dungeon. Insect and factory mini-games were so fun.`,
        imgLoc: `/img/Rogue Galaxy.jpg`
    },
    {
        title: `Civilization IV`,
        score: 8,
        year: 2005,
        beaten: 1,
        lastPlayed: 2012,
        comment: `I got very hooked into Civ IV back in 2012 and played for hours. I was very bad though. Enjoyed watching and learning from a guy doing 1 hour long videos on Deity difficulty.`,
        imgLoc: `/img/Civilization IV.jpg`
    },
    {
        title: `God of War (2005)`,
        score: 8,
        year: 2005,
        beaten: 2,
        lastPlayed: 2006,
        comment: `I played the demo that was included in a Playstation magazine and that opening boss with the Hydra showed off such tremendous scale, so I had to play it. And boy it delivered. Really brutal animations for my 12 year old innocent eyes.`,
        imgLoc: `/img/God of War 2005.jpg`
    },
    {
        title: `Psychonauts`,
        score: 7,
        year: 2005,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Buddy lost a bet so he had to play this mellow game but I freely joined in too. Then he proceeded to bugger off from online world so we didn't speak about it! Milkman is a iconic level but I preferred the board game world, that was really cool. A unique look at mental health but the resolutions were poor.`,
        imgLoc: `/img/Psychonauts.jpg`
    },
    {
        title: `Ultimate Spider-Man`,
        score: 7,
        year: 2005,
        beaten: 2,
        lastPlayed: 2006,
        comment: `This game had a great art style and one of the first open world games I remember simply enjoying moving around in. Venom was also playable which is cool and could eat children.`,
        imgLoc: `/img/Ultimate Spider-Man.jpg`
    },
    {
        title: `The Warriors`,
        score: 7,
        year: 2005,
        beaten: 1,
        lastPlayed: 2011,
        comment: `Rockstar making a movie licensed game is not something that will happen anymore and that sucks, I enjoy their smaller scale game. Finished on a co-op Saturday with my bud and a good beat em up even without seeing the movie.`,
        imgLoc: `/img/The Warriors.jpg`
    },
    {
        title: `Age of Empires III`,
        score: 6,
        year: 2005,
        beaten: 1,
        lastPlayed: 2006,
        comment: `The game on my PC at the time, did not run it well at all, and I think that affected my enjoyment of it. It also had a heavy multiplayer focus which scared me back then!.`,
        imgLoc: `/img/Age of Empires 3.jpg`
    },
    {
        title: `Dynasty Warriors 5`,
        score: 6,
        year: 2005,
        beaten: 1,
        lastPlayed: 2005,
        comment: `I loved the intro so much, and I thought with it now being 2005, the graphics would represent the opening cinematic. It did not. Still fun-ish but nothing to 3.`,
        imgLoc: `/img/Dynasty Warriors 5.jpg`
    },
    {
        title: `Burnout Revenge`,
        score: 6,
        year: 2005,
        beaten: 1,
        lastPlayed: 2005,
        comment: `Some consider this the best but to me, the car trafficking aspect ruined threats of crashing into cars and the music was a downgrade. This came to Xbox BC but 3 did not. :(.`,
        imgLoc: `/img/Burnout Revenge.jpg`
    },
    {
        title: `FATE`,
        score: 6,
        year: 2005,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A classic ARPG that is Torchlight-light. Oddly charming but very simple. Framerate plummets despite being a 15 year old game BUT I got to summon beetle to fight for me, so that was rad.`,
        imgLoc: `/img/FATE.jpg`
    },
    {
        title: `Midnight Club 3`,
        score: 5,
        year: 2005,
        beaten: 1,
        lastPlayed: 2005,
        comment: `I dont remember anything other than driving and exclusively listening to Pain by Jimmy Eat World as it was the only good song on the soundtrack. Not surprised its now dead.`,
        imgLoc: `/img/Midnight Club 3.jpg`
    },
    {
        title: `Paper Mario The Thousand-Year Door`,
        score: 9,
        year: 2004,
        beaten: 2,
        lastPlayed: 2017,
        comment: `Alas, this twilt world is too full of pain and contradiction, too full of broken dreams. A genuinely funny game but the levels do make for some slight backtracking. An excellent support cast. 'Guess again nerd!'.`,
        imgLoc: `/img/Paper Mario The Thousand-Year Door.jpg`
    },
    {
        title: `Burnout 3`,
        score: 9,
        year: 2004,
        beaten: 3,
        lastPlayed: 2023,
        comment: `The pinnacle of racing games that none others can compete. Great sense of speed, fast arcade action, edgelord soundtrack. Very nostalgic for me. Wish it came to xbox BC and not Revenge. Played it on the Steam Deck and it was great!`,
        imgLoc: `/img/Burnout 3.jpg`
    },
    {
        title: `Ratchet & Clank Up Your Arsenal`,
        score: 8,
        year: 2004,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Felt very similar to going commando which is fair since it has only been a year. Nefarious is a good villain but doesn't need to be a staple going forward. The most digusting yellow UI.`,
        imgLoc: `/img/Ratchet and Clank Up Your Arsenal.jpg`
    },
    {
        title: `World of Warcraft`,
        score: 8,
        year: 2004,
        beaten: 1,
        lastPlayed: 2007,
        comment: `Got my hunter to level 60 after TBC came out and then left after logging in and seeing my guild just vanished. Some fond memories but it needs to be put to rest.`,
        imgLoc: `/img/World of Warcraft.jpg`
    },
    {
        title: `Katamari Damacy`,
        score: 7,
        year: 2004,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Controls are somewhat horrid. Anyway, some of the best music in video game history, best credit sequence, fun gameplay if not sometimes confusing regarding the collisions. Also had a level where you gotta collect all the crabs and one that ended in 3 seconds after getting a bear.`,
        imgLoc: `/img/Katamari Damacy.jpg`
    },
    {
        title: `Van Helsing`,
        score: 7,
        year: 2004,
        beaten: 1,
        lastPlayed: 2004,
        comment: `Weird tastes back then. But! This is a Van Helsing Devil May Cry game. And that's rad! Big head cheat mode I remember. Who knew back in 2004 I would get this wonderful came called Bloodborne.`,
        imgLoc: `/img/Van Helsing.jpg`
    },
    {
        title: `Kohan 2`,
        score: 7,
        year: 2004,
        beaten: 1,
        lastPlayed: 2006,
        comment: `Kohan 2 was something I fell in love with which no one talks about to this day. I thought it was superior to AOE as it was faster paced and the special Kohan units is something we see today in MOBAs.`,
        imgLoc: `/img/Kohan 2.jpg`
    },
    {
        title: `Halo 2`,
        score: 6,
        year: 2004,
        beaten: 1,
        lastPlayed: 2017,
        comment: `At the time when playing in co-op, it was my favourite Halo game and might still be when I play it solo... eventually. Duel-weilding guns was great and the level design I remembered being good.`,
        imgLoc: `/img/Halo 2.jpg`
    },
    {
        title: `Fable Anniversary`,
        score: 6,
        year: 2014,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I remember when I jokingly spelld out 'shit' instead of 'this' and the game mocked me for it. Truly a sign of a good game and hope the new Fable has the same cozy atmosphere.`,
        imgLoc: `/img/Fable.jpg`
    },
    {
        title: `Onimusha 3`,
        score: 6,
        year: 2004,
        beaten: 2,
        lastPlayed: 2017,
        comment: `A childhood favourite that to me doesn't hold up due it's high difficulty but the motorbike jumping onto a boat cutscene is still fantastic and I hope it makes a return at some point.`,
        imgLoc: `/img/Onimusha 3.jpg`
    },
    {
        title: `Ratchet & Clank Going Commando`,
        score: 8,
        year: 2003,
        beaten: 1,
        lastPlayed: 2018,
        comment: `This is probably where the Ratchet formula gets locked and the speed gets upped a lot. Weapon levels, skill points are new and continue to modern Ratchet. Some fun levels where you fight as Godzilla sized Clank.`,
        imgLoc: `/img/Ratchet and Clank Going Commando.jpg`
    },
    {
        title: `Viewtiful Joe`,
        score: 6,
        year: 2003,
        beaten: 1,
        lastPlayed: 2011,
        comment: `Henshin a go-go baby! A game where I love the style more so than the gameplay. It was quite hard but the game made good use of the time manipulation such as slowing down the helicopters blades to lower it, and more!.`,
        imgLoc: `/img/Viewtiful Joe.jpg`
    },
    {
        title: `Dynasty Warriors 4`,
        score: 6,
        year: 2003,
        beaten: 1,
        lastPlayed: 2004,
        comment: `I remember feeling quite bummed out by 4. Its weapons started having RPG stats and the ability for all officers to weild whatever they wanted ruined their unique moveset.`,
        imgLoc: `/img/Dynasty Warriors 4.jpg`
    },
    {
        title: `Shin Megami Tensei Nocturne HD`,
        score: 5,
        year: 2020,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Finally finished thanks to remaster. These dungeons are the worst, all of them have invisible teleport traps and that's as complex as it gets. Real neat character goals though and no real villain due to you picking your own alignments.`,
        imgLoc: `/img/Shin Megami Tensei Nocturne.jpg`
    },
    {
        title: `Devil May Cry 2`,
        score: 2,
        year: 2003,
        beaten: 2,
        lastPlayed: 2018,
        comment: `It's a miracle Itsuno kept his job after this but it wasn't his fault! Some levels were so ugly it was an eyesore, the Stinger move animation is so bad, guns are overpowered and there's a boss fight that is just a helicopter you shoot at.`,
        imgLoc: `/img/Devil May Cry 2.jpg`
    },
    {
        title: `Resident Evil Remake`,
        score: 8,
        year: 2002,
        beaten: 1,
        lastPlayed: 2019,
        comment: `I love that mansion even after a 20 year gap from the original. Some stuff is a bit punishing but not impossible and the many changes of the mansion throughout kept surprising.`,
        imgLoc: `/img/Resident Evil Remake.jpg`
    },
    {
        title: `Ratchet & Clank`,
        score: 7,
        year: 2002,
        beaten: 1,
        lastPlayed: 2018,
        comment: `Never could get into the very first one, but I pulled through for E3 and fell in love with the level design, character relationships and humour. Quite sassy characters but moving around felt off, aerial enemies didn't suit their in-game lock on but still great.`,
        imgLoc: `/img/Ratchet and Clank.jpg`
    },
    {
        title: `Serious Sam The Second Encounter`,
        score: 7,
        year: 2002,
        beaten: 2,
        lastPlayed: 2019,
        comment: `A sequel rushed out within a year, and I also somehow still enjoy it a lot. The Jingle Bells Christmas music is great but feels a bit too out of place. Not many new enemy designs but still good secrets.`,
        imgLoc: `/img/Serious Sam TSE.jpg`
    },
    {
        title: `Super Mario Sunshine`,
        score: 6,
        year: 2002,
        beaten: 1,
        lastPlayed: 2017,
        comment: `The only 3D Mario platformer I hadn't played and well, I don't like it. Collision detection can be naff and fall through moving objects but the summer vibe is really nice.`,
        imgLoc: `/img/Super Mario Sunshine.jpg`
    },
    {
        title: `Kingdom Hearts`,
        score: 6,
        year: 2002,
        beaten: 1,
        lastPlayed: 2010,
        comment: `I think I hate the series more than the game. Halloween Town was very fun because of the character designs and exploring with Disney characters was neat. But everything on the Xenahort side sucks so much. I hate Nomura.`,
        imgLoc: `/img/Kingdom Hearts.jpg`
    },
    {
        title: `Pokemon Ruby & Sapphire`,
        score: 5,
        year: 2002,
        beaten: 2,
        lastPlayed: 2004,
        comment: `A miserable region to explore due to HMs and music that sounds like farts thanks to the GBA soundchip but the east side of the region is warm and tropical, and the new Pokemon are so good compared to the weak selection of Gen 2.`,
        imgLoc: `/img/Pokemon Ruby & Sapphire.jpg`
    },
    {
        title: `Dark Chronicle`,
        score: 5,
        year: 2002,
        beaten: 1,
        lastPlayed: 2022,
        comment: `A highly ambitious sequel with some charm but almost too much to do. City building was less fun, combat quite janky. Cute humour with Dr Nobb names and solid enemy designs. Photography element ends up being a chore.`,
        imgLoc: `/img/Dark Chronicle.jpg`
    },
    {
        title: `State of Emergency`,
        score: 5,
        year: 2002,
        beaten: 1,
        lastPlayed: 2003,
        comment: `It's Dead Rising with chavs. In the UK, I think the marketing mislead us to think it was by the GTA guys. Not my kind of game but I thought it had a good amount of weapons.`,
        imgLoc: `/img/State of Emergency.jpg`
    },
    {
        title: `Phoenix Wright: Ace Attorney`,
        score: 8,
        year: 2001,
        beaten: 1,
        lastPlayed: 2011,
        comment: `A really good visual novel with funny writing, great character designs and the best sound effects. It was great to figure out the inaccuracies to a persons statement, especially with the parrot. Not been able to get into the other games.`,
        imgLoc: `/img/Phoenix Wright Ace Attorney.jpg`
    },
    {
        title: `Halo`,
        score: 7,
        year: 2001,
        beaten: 2,
        lastPlayed: 2020,
        comment: `Played it solo and I was able to appreciate the game more but so many of the levels had repeated level design which in the end did bore me a lot. And the flood can bugger off even if it is a fascinating story element.`,
        imgLoc: `/img/Halo.jpg`
    },
    {
        title: `Red Faction`,
        score: 7,
        year: 2001,
        beaten: 1,
        lastPlayed: 2002,
        comment: `I mostly remember making tunnels in the multiplayer map with my brother and seeing how far we could go before it stops us. Honestly quite an incredible tech accomplishment on the PS2.`,
        imgLoc: `/img/Red Faction.jpg`
    },
    {
        title: `Serious Sam TFE`,
        score: 7,
        year: 2001,
        beaten: 2,
        lastPlayed: 2019,
        comment: `The definitive Serious Sam game what with the Dunes level. Really amazing secrets such as the developer heads in the first level which is a stand out for me. Iconic enemy designs.`,
        imgLoc: `/img/Serious Sam TFE.jpg`
    },
    {
        title: `Devil May Cry`,
        score: 6,
        year: 2001,
        beaten: 2,
        lastPlayed: 2018,
        comment: `My first Kamiya game, who knew back then he would have such a presence as his career went on. Fun but very basic compared to the modern games that diverted from the serious tone. The underwater sections also suck.`,
        imgLoc: `/img/Devil May Cry.jpg`
    },
    {
        title: `Final Fantasy X HD`,
        score: 5,
        year: 2013,
        beaten: 1,
        lastPlayed: 2020,
        comment: `A crazy foundation for a setting in an RPG and a nice turn-based combat system that does away with the ATB. Awful dungeons too. But something kept me going back and I don't know why.`,
        imgLoc: `/img/Final Fantasy X.jpg`
    },
    {
        title: `Luigi's Mansion`,
        score: 5,
        year: 2001,
        beaten: 1,
        lastPlayed: 2019,
        comment: `A short charming game but so much backtracking. The boo names were really funny such as GameBoo Advance but was very basic as a whole.`,
        imgLoc: `/img/Luigi's Mansion.jpg`
    },
    {
        title: `Ico`,
        score: 4,
        year: 2001,
        beaten: 1,
        lastPlayed: 2015,
        comment: `Does this deserve a 10 because Miyazaki would not have given us Demon's/Dark/Bloodborne? Probably. But for 2001, this game is probably special, I played it in 2015ish and hated it. Last game I got from Blockbuster. RIP.`,
        imgLoc: `/img/Ico.jpg`
    },
    {
        title: `Final Fantasy IX`,
        score: 8,
        year: 2000,
        beaten: 2,
        lastPlayed: 2020,
        comment: `A wonderful charming tale with the best music. It's full of soul and feels like the most traditional Final Fantasy game that we haven't seen since.`,
        imgLoc: `/img/Final Fantasy IX.jpg`
    },
    {
        title: `Diablo 2`,
        score: 6,
        year: 2000,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Finally crossed off a classic but some parts are a bit too outdated and found it quite ugly to play though. I can see why it popularised a genre and it's better than Diablo 3 but I hope a remake makes it more accessible.`,
        imgLoc: `/img/Diablo 2.jpg`
    },
    {
        title: `Banjo Tooie`,
        score: 4,
        year: 2000,
        beaten: 2,
        lastPlayed: 2018,
        comment: `A childhood classic that upon playing again realise it absolutely sucks. So much backtracking and padded out time due to unecessary obsfucation. I remember my brother watching me beat the final boss when I was about 8.`,
        imgLoc: `/img/Banjo Tooie.jpg`
    },
    {
        title: `Pokemon Gold & Silver`,
        score: 9,
        year: 1999,
        beaten: 3,
        lastPlayed: 2019,
        comment: `What a sequel! The second region didn't blow me away when I was a kid. Many staple features of Pokemon introduced. Day/Night, breeding, shinies. Just an absolute meaty piece of content.`,
        imgLoc: `/img/Pokemon Gold & Silver.jpg`
    },
    {
        title: `Pokemon Stadium`,
        score: 7,
        year: 1999,
        beaten: 1,
        lastPlayed: 2000,
        comment: `One of the coolest things I remember about this game is using the expansion pack thing to play Pokemon GB games on my TV and hearing the sound coming from the TV and not the Gameboy. The mini-games shined in this game such as Lickitung with great sound effects.`,
        imgLoc: `/img/Pokemon Stadium.jpg`
    },
    {
        title: `Age of Empires II`,
        score: 7,
        year: 1999,
        beaten: 1,
        lastPlayed: 2003,
        comment: `Something never clicked like the first, but it was still something I liked. I think it felt too similar but the fact the re-releases are still getting content is quite incredible.`,
        imgLoc: `/img/Age of Empires II.jpg`
    },
    {
        title: `Pokemon Pinball`,
        score: 7,
        year: 1999,
        beaten: 1,
        lastPlayed: 2000,
        comment: `The cart used an AA battery to replicate vibration sounds. I feel sorry for the parents who had to buy so many batters for the GB era. Fun Pinball game but I was never good.`,
        imgLoc: `/img/Pokemon Pinball.jpg`
    },
    {
        title: `Banjo Kazooie`,
        score: 10,
        year: 1998,
        beaten: 4,
        lastPlayed: 2018,
        comment: `One of my childhood games that still holds up to this very day. A blast from start to finish and the quiz at the end shows how proud the developers are of their level and sound design, better than Super Mario 64 for sure.`,
        imgLoc: `/img/Banjo Kazooie.jpg`
    },
    {
        title: `Half-Life`,
        score: 8,
        year: 1998,
        beaten: 1,
        lastPlayed: 2020,
        comment: `It was great to play through the game that is Valves origins and it still holds up. The chatter of the other scientists was really funny but the final areas were quite boring.`,
        imgLoc: `/img/Half-life.jpg`
    },
    {
        title: `Pokemon TCG`,
        score: 7,
        year: 1998,
        beaten: 1,
        lastPlayed: 2016,
        comment: `Played on a whim and kinda loved it. Despite the small GB screen, the interface works tremendously well for the TCG rules. The avatar sprites animate which is comical and card art is replicated well.`,
        imgLoc: `/img/Pokemon TCG.jpg`
    },
    {
        title: `Xenogears`,
        score: 7,
        year: 1998,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Played this on a PSClassic and it was a miserable experience due to constant crashes and the awful controller. None the less it has a great combat system for a PS1 RPG and some of the best Yasunori Mitsuda music.`,
        imgLoc: `/img/Xenogears.jpg`
    },
    {
        title: `The Legend of Zelda Ocarina of Time`,
        score: 6,
        year: 1998,
        beaten: 1,
        lastPlayed: 2020,
        comment: `You know, I think I just don't like old zelda that much. While the spooky elements of this game were incredible, I still found it a chore to play, primarily due to dungeons.`,
        imgLoc: `/img/The Legend of Zelda Ocarina of Time.jpg`
    },
    {
        title: `Final Fantasy VII`,
        score: 8,
        year: 1997,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Such an oddball in terms of story for Final Fantasy but it has an incredible setting, beautiful places like Cosmo Canyon and feels like a long adventure. Cid is the best version of Cid but did feel slow.`,
        imgLoc: `/img/Final Fantasy VII.jpg`
    },
    {
        title: `Age of Empires`,
        score: 7,
        year: 1997,
        beaten: 1,
        lastPlayed: 2002,
        comment: `Probably the first PC game I ever played and that may have made me like this one over the more popular sequel. Really good sound design.`,
        imgLoc: `/img/Age of Empires.jpg`
    },
    {
        title: `Goldeneye 007`,
        score: 7,
        year: 1997,
        beaten: 1,
        lastPlayed: 1999,
        comment: `Dated aiming controls but the sound effects, mission variety and multiplayer set a standard makes this game an exceptional title. Hacks have made this game playable with mouse and keyboard which really makes it hold up.`,
        imgLoc: `/img/Goldeneye 007.jpg`
    },
    {
        title: `Blast Corps`,
        score: 4,
        year: 1997,
        beaten: 1,
        lastPlayed: 2017,
        comment: `A seriously hard game I played as part of Rare Replay and egged on by a friend. It still had some elements of Rares charm and a good destruction engine for a N64 game but it is very basic.`,
        imgLoc: `/img/Blast Corps.jpg`
    },
    {
        title: `Super Mario RPG`,
        score: 9,
        year: 1996,
        beaten: 1,
        lastPlayed: 2019,
        comment: `Asked my friend what SNES game to play, he said this, had a blast, never doubted him since. Geno for Smash!.`,
        imgLoc: `/img/Super Mario RPG.jpg`
    },
    {
        title: `Pokemon Red & Blue`,
        score: 9,
        year: 1996,
        beaten: `5+`,
        lastPlayed: 2017,
        comment: `I was born in a time where I cannot remember when Pokemon didn't exist. Some parts of this game are straight up broken but each Pokemon having its own cry on a gameboy cart blows me away. Wizardry how it works.`,
        imgLoc: `/img/Pokemon Red & Blue.jpg`
    },
    {
        title: `Super Mario 64`,
        score: 8,
        year: 1996,
        beaten: 2,
        lastPlayed: 2000,
        comment: `Mario handles the transition to 3D well unlike Sonic, Pokemon and a bunch of others. The movement tech is incredible for a first go but when I replayed the All-Stars version, I came down on the world design as many felt like slapped together pieces, and not a world lived in.`,
        imgLoc: `/img/Super Mario 64.jpg`
    },
    {
        title: `Mario Kart 64`,
        score: 7,
        year: 1996,
        beaten: 1,
        lastPlayed: 1999,
        comment: `Classic kart racer with good multiplayer with buds. However, Rainbow Road is overrated! It has to be said. Once again, good sound effects and Moo Moo Farm is a banger.`,
        imgLoc: `/img/Mario Kart 64.jpg`
    },
    {
        title: `Donkey Kong Country 3`,
        score: 5,
        year: 1996,
        beaten: 1,
        lastPlayed: 2011,
        comment: `I hate Kiddy Kong, or whatever his dumb ugly name is. It's gone one step further away from Donkey Kong. I wonder if Nintendo hate Rare for making so many ugly Kongs.`,
        imgLoc: `/img/Donkey Kong Country 3.jpg`
    },
    {
        title: `Tetris Attack`,
        score: 8,
        year: 1995,
        beaten: 1,
        lastPlayed: 2018,
        comment: `I love Puzzle league and this is pretty much the first inception of it, something about the simple aesthetic compared to the cylindrical nature future games have keep it simple.`,
        imgLoc: `/img/Tetris Attack.jpg`
    },
    {
        title: `Yoshi's Island`,
        score: 8,
        year: 1995,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Wonderful art style and music but the baby throwing and crying sound were quite annoying during the harder sections. Fun mini-games such as brick-break mixed with platformer level design was really cool. Good boss designs and levels that often felt massive.`,
        imgLoc: `/img/Yoshi's Island.jpg`
    },
    {
        title: `Super Mario Picross`,
        score: 7,
        year: 1995,
        beaten: 1,
        lastPlayed: 2022,
        comment: `For the SNES, the games visuals and animations were really good. Chucked onto the SNES Online thing with no translation makes it iffy to play, clever ways to make it easier and Wario mode is a fun addition. 25x25 grids become very hard to see though.`,
        imgLoc: `/img/Super Mario Picross.jpg`
    },
    {
        title: `Donkey Kong Country 2`,
        score: 7,
        year: 1995,
        beaten: 1,
        lastPlayed: 2011,
        comment: `I weirdly prefer the first game which is an upopular opinion, but if I can't play as Donkey Kong, it aint a true Donkey Kong game! A bit too many secrets but meaty in content.`,
        imgLoc: `/img/Donkey Kong Country 2.jpg`
    },
    {
        title: `Final Fantasy VI`,
        score: 7,
        year: 1994,
        beaten: 1,
        lastPlayed: 2020,
        comment: `Cyan is one of the best FF characters and while I did enjoy it as a whole, I still never wanted to experiment with many of the 13 playable characters due to not liking the ATB system.`,
        imgLoc: `/img/Final Fantasy VI.jpg`
    },
    {
        title: `Donkey Kong Country`,
        score: 7,
        year: 1994,
        beaten: 2,
        lastPlayed: 2018,
        comment: `Played alongside this with a bud and talked about our experience. Wasn't as difficult as I remember and Elevator Antics sticks out as a favourite level but the underwater levels aren't so great.`,
        imgLoc: `/img/Donkey Kong Country.jpg`
    },
    {
        title: `Demon's Crest`,
        score: 7,
        year: 1994,
        beaten: 1,
        lastPlayed: 2018,
        comment: `A good sidescroller I played on the SNES classic that thankfully isn't as punishing as the previous Ghosts n Goblins entries, I did not get the true ending as I missed some collectibles.`,
        imgLoc: `/img/Demon's Crest.jpg`
    },
    {
        title: `Earthbound`,
        score: 6,
        year: 1994,
        beaten: 1,
        lastPlayed: 2022,
        comment: `Uniquely charming but also, quite boring due to it's combat system. Wonderful enemy variety and character personality but a lot of the music is awful to listen to but then other tracks are GOAT. Great ending and wonderful art style in towns. Beautiful SNES game.`,
        imgLoc: `/img/Earthbound.jpg`
    },
    {
        title: `Super Metroid`,
        score: 6,
        year: 1994,
        beaten: 1,
        lastPlayed: 2021,
        comment: `Great sfx, visuals and designs yet I found the game annoying to play and navigate. Jumping never felt great even with the 4 different upgrades, map never showed all doors which made backtracking annoying. Cool set piece for the final boss. Some cool mechanics like the freeze gun to make platforms out of enemies.`,
        imgLoc: `/img/Super Metroid.jpg`
    },
    {
        title: `Mega Man X`,
        score: 7,
        year: 1993,
        beaten: 1,
        lastPlayed: 2021,
        comment: `My first Mega Man game finished and probably the last, aside from Legends... eventually. A good game that's a bit too bloody hard. Really good sprite work and boss designs.`,
        imgLoc: `/img/Mega Man X.jpg`
    },
    {
        title: `Super Mario Kart`,
        score: 7,
        year: 1992,
        beaten: 1,
        lastPlayed: 1999,
        comment: `A fun game with good sound effects and even the music. It looks very basic now, and it is, but it had the soul of Mario games and fleshed out Mario side characters.`,
        imgLoc: `/img/Super Mario Kart.jpg`
    },
    {
        title: `Super Castlevania IV`,
        score: 6,
        year: 1991,
        beaten: 1,
        lastPlayed: 2021,
        comment: `A game that is more difficult than it is fun, but some levels were defnitely cool and stand out. I probably would not have finished it if I didn't look up and find the hidden items/powerups before the final boss...`,
        imgLoc: `/img/Super Castlevania IV.jpg`
    },
    {
        title: `The Legend of Zelda Link to the Past`,
        score: 6,
        year: 1991,
        beaten: 1,
        lastPlayed: 2019,
        comment: `After about 10 attempts I finally finished it. Awful overworld music but the dungeons often making use of the outside world was really cool. It's a shame this set out the blueprint for Zelda games until Breath of the Wild.`,
        imgLoc: `/img/The Legend of Zelda Link to the Past.jpg`
    },
    {
        title: `The Secret of Monkey Island`,
        score: 6,
        year: 1990,
        beaten: 1,
        lastPlayed: 2011,
        comment: `An actually funny game thanks to the witty comeback combat system as well as the ending. Good sprites, UI and puzzles for an old game. Really good dev commentary too.`,
        imgLoc: `/img/The Secret of Monkey Island.jpg`
    },
    {
        title: `Final Fantasy 1 (PSP)`,
        score: 7,
        year: 2007,
        beaten: 1,
        lastPlayed: 2013,
        comment: `I played the PSP port and that held up. It is extremely basic in the good way and played it on my Vita while watching Modern Family. Matoya's Cave music is one of my favourites still.`,
        imgLoc: `/img/Final Fantasy.jpg`
    },
    {
        title: `Dragon Quest 1 (SNES)`,
        score: 6,
        year: 1993,
        beaten: 1,
        lastPlayed: 2017,
        comment: `Played this alongside a buddy and it got very grind heavy and was kind of obtuse in design that almost felt like it required a Nintendo Power magazine but even back then DQ had charm.`,
        imgLoc: `/img/Dragon Quest.jpg`
    },
    {
        title: `Super Mario Bros`,
        score: 7,
        year: 1985,
        beaten: 1,
        lastPlayed: 2010,
        comment: `A classic for a reason but I don't think the jumping physics hold up very well. Warp pipes are a great inclusion and good secrets to be found.`,
        imgLoc: `/img/Super Mario Bros.jpg`
    },
]

gamesData.sort((a, b) => b.year - a.year);
gamesData.sort((a, b) => b.score - a.score);

export default gamesData;