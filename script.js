document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA PŘÁTEL (TOP 8) S REALNÝMI FOTKAMI A MYSPACE INFORMACEMI
    const friendsData = [
        {
            id: 'anna',
            name: 'Královna Anna z Arendelle',
            role: 'Milovaná sestra & Královna Arendelle 👑',
            status: 'Vždycky s tebou, Elzo! A nezapomeň na čokoládu! 🍫❤️',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
            bio: 'Jsem Anna, královna Arendelle, snoubenka Kristoffa a největší fanynka své sestry Elzy. Miluji rodinná dobrodružství, vřelá objetí a čokoládu!',
            interests: 'Čokoláda, deskové hry s Olafem, rodinné oslavy na zámku, jízda na koni po fjordech.',
            quote: 'Některé věci se nikdy nemění... jako naše sesterství! 💖'
        },
        {
            id: 'olaf',
            name: 'Olaf',
            role: 'Oživlý Sněhulák & Milovník vřelých objetí ☃️',
            status: 'Mám rád vřelá objetí! A taky léto! ☀️❄️',
            avatar: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
            bio: 'Stvořen Elzinou magií! Miluji léto, pampelišky, filozofické otázky o životě a hlavně vřelá objetí.',
            interests: 'Sněhová lízátka, čtení knih, obdivování květin, vědecká fakta o vodě.',
            quote: 'Za některé lidi stojí za to se rozpustit! ❄️❤️'
        },
        {
            id: 'kristoff',
            name: 'Kristoff Bjorgman',
            role: 'Oficiální Arendellský Dodavatel Ledu 🧊',
            status: 'Sven je lepší než všichni lidé... kromě Anny! 🦌',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
            bio: 'Horal, milovník ledu, nejlepší přítel Svena a oddaný partner Anny. Žiju v Severních horách a stavím ledové zásoby.',
            interests: 'Krmení Svena mrkví, kytarová tvorba v horách, příprava na extrémní otužování, záchranné výpravy.',
            quote: 'Sobi jsou lepší než lidé... Sven, co myslíš? 🦌'
        },
        {
            id: 'sven',
            name: 'Sven',
            role: 'Věrný Sob & Znalec Mrkví 🥕',
            status: 'Chrum chrum... (Dej mi mrkev!) 🥕',
            avatar: 'https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?w=500',
            bio: 'Nejvěrnější sob v celém Arendelle. Rozumím Kristoffovi bez slov a zbožňuji křupavoučkou mrkev.',
            interests: 'Běhání ve sněhu, okusování mrkví, zachraňování přátel v tísni.',
            quote: 'Nhhhrrr... (Kristoff za mě mluví pravdu!) 🥕'
        },
        {
            id: 'nokk',
            name: 'Nokk',
            role: 'Mystický Vodní Duch 🐴🌊',
            status: 'Strážce vodních hlubin Ahtohallan 🌊✨',
            avatar: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500',
            bio: 'Mystický vodní kůň, strážce moří a řek Kouzelného lesa. Pouze Elza si dokázala získat mou důvěru.',
            interests: 'Cválání po mořské hladině, ochrana Ahtohallanu, surfování na ledových vlnách.',
            quote: '*Mrazivé zaržání a šumění divoké vody* 🌊❄️'
        },
        {
            id: 'bruni',
            name: 'Bruni',
            role: 'Ohnivý Duch Kouzelného Lesa 🦎🔥',
            status: 'Miluji ledové vločky od Elzy! 🔥❄️',
            avatar: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=500',
            bio: 'Malinký mlok plný ohnivé energie. Když mě něco nadchne, vzplanu, ale Elziny vločky mě vždycky příjemně zchladí!',
            interests: 'Jedení mrazivých sněhových vloček, vytváření modrých plamínků, spánek na Elzině dlani.',
            quote: '*Spořádá ledovou vločku a spokojeně zčervená* 🔥'
        },
        {
            id: 'marshmallow',
            name: 'Marshmallow',
            role: 'Strážce Ledového Paláce 🧊🏰',
            status: 'PALÁC JE ČISTÝ! VÍTÁM ELZU! ❄️',
            avatar: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500',
            bio: 'Obří sněhový obr vytvořený Elzou pro ochranu Severních hor. Dnes nosím tiáru a hlídám klid v paláci.',
            interests: 'Hlídání ledového paláce, nosení malé korunky, tiché pozorování sněžení.',
            quote: 'AŽ NAHORU! VÍTÁME NÁVŠTĚVY! 🧊👑'
        },
        {
            id: 'oaken',
            name: 'Oaken',
            role: 'Majitel Chaty a Sauny "U Wandering Oaken" 🏕️',
            status: 'Ahoj! Velký letní výprodej! 🌿♨️',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
            bio: 'Obchodník s nejlepší saunou a horským vybavením. Nabízím zimní zásoby, teplý čaj a sauna sirup!',
            interests: 'Prodej saunových lístků, příprava horkých koupelí, rodinné hostiny v chatě.',
            quote: 'Ahoj! Yoo-hoo! Lute-fisk a sauna pro každého! ♨️'
        }
    ];

    // 2. RENDEROVÁNÍ TOP 8 PŘÁTEL DO GRIDU
    const friendsGrid = document.getElementById('friends-grid');
    if (friendsGrid) {
        friendsGrid.innerHTML = '';
        friendsData.forEach(friend => {
            const card = document.createElement('div');
            card.className = 'friend-story-card';
            card.setAttribute('data-friend-id', friend.id);
            card.innerHTML = `
                <div class="friend-avatar-ring">
                    <img src="${friend.avatar}" alt="${friend.name}">
                </div>
                <span class="friend-name-label">${friend.name.split(' ')[0]}</span>
            `;
            friendsGrid.appendChild(card);
        });
    }

    // 3. KOMENTÁŘE S REÁLNÝMI FOTKAMI POSTAV
    const initialComments = [
        {
            author: 'Královna Anna',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
            date: 'Dnes 14:20',
            text: 'Elzo! Nezapomeň, že dnes večer máme rodinnou deskovou hru v paláci! Olaf slíbil, že se nepokusí sníst figurky! 😂❤️'
        },
        {
            author: 'Olaf',
            avatar: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
            date: 'Dnes 12:05',
            text: 'Mám rád vřelá objetí! A taky ledové lízátko, které jsi mi udělala! Děkuju Elzo! ☃️❄️'
        }
    ];

    const commentsList = document.getElementById('comments-list');
    function renderComments() {
        if (!commentsList) return;
        commentsList.innerHTML = '';
        initialComments.forEach(c => {
            const item = document.createElement('div');
            item.className = 'comment-item';
            item.innerHTML = `
                <img src="${c.avatar}" alt="${c.author}" class="comment-avatar-img">
                <div class="comment-content">
                    <div class="comment-header">
                        <strong>${escapeHTML(c.author)}</strong>
                        <span class="comment-date">${c.date}</span>
                    </div>
                    <p>${escapeHTML(c.text)}</p>
                </div>
            `;
            commentsList.appendChild(item);
        });
    }
    renderComments();

    // 4. PREPÍNÁNÍ ZÁLOŽEK (TABS)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetEl = document.getElementById(targetTab);
            if (targetEl) targetEl.classList.add('active');
        });
    });

    // 5. DETAILNÍ MODÁLNÍ OKNO PRO PŘÁTELE (ROZKLIKNUTÍ PŘÁTEL)
    const friendModal = document.getElementById('friend-modal');
    const closeFriendModal = document.getElementById('close-friend-modal');
    const btnFriendWave = document.getElementById('btn-friend-wave');

    document.querySelectorAll('.friend-story-card').forEach(card => {
        card.addEventListener('click', () => {
            const friendId = card.getAttribute('data-friend-id');
            const friend = friendsData.find(f => f.id === friendId);
            if (friend) {
                openFriendModal(friend);
            }
        });
    });

    function openFriendModal(friend) {
        document.getElementById('modal-friend-avatar').src = friend.avatar;
        document.getElementById('modal-friend-name').textContent = friend.name;
        document.getElementById('modal-friend-role').textContent = friend.role;
        document.getElementById('modal-friend-status').textContent = `"${friend.status}"`;
        document.getElementById('modal-friend-bio').textContent = friend.bio;
        document.getElementById('modal-friend-interests').textContent = friend.interests;
        document.getElementById('modal-friend-quote').textContent = `"${friend.quote}"`;

        friendModal.classList.remove('hidden');
        playIceSound('crystal-chime');
    }

    if (closeFriendModal) {
        closeFriendModal.addEventListener('click', () => {
            friendModal.classList.add('hidden');
        });
    }

    if (btnFriendWave) {
        btnFriendWave.addEventListener('click', () => {
            const name = document.getElementById('modal-friend-name').textContent;
            playIceSound('ice-sparkle');
            alert(`👋 Poslala jsi přátelské zamávání pro ${name}! ❄️`);
        });
    }

    // 6. HIGHLIGHTS / STORY MODAL (RECEPTY, SNOWBOARD, OTUŽOVÁNÍ, MUSIC, SOUNDS)
    const storyModal = document.getElementById('story-modal');
    const closeStoryModal = document.getElementById('close-story-modal');
    const storyTitle = document.getElementById('story-modal-title');
    const storyIcon = document.getElementById('story-modal-icon');
    const storyContent = document.getElementById('story-modal-content');

    const storyDataMap = {
        recipes: {
            title: 'Ledové Recepty do Školy 🍦🎒',
            icon: '🍦',
            content: `
                <div class="story-detail-box">
                    <h3>1. Mrazivé Ovocné Nanuky "Arendelle Sparkle" 🍓❄️</h3>
                    <p><strong>Ingredience:</strong> Čerstvé jahody, borůvky, kokosová voda, kapka citrónové šťávy a ledový sirup.</p>
                    <p><strong>Postup:</strong> Smíchej ovoce s kokosovou vodou, nalij do formiček na nanuky a dej na 3 hodiny zmrazit do Severních hor (nebo mrazáku!). Výborná svačina do školy full of vitaminů!</p>
                </div>
                <div class="story-detail-box">
                    <h3>2. Ledová Mléčná Tříšť "Olafovo Objetí" 🍌🥛</h3>
                    <p><strong>Ingredience:</strong> Mražený banán, vanilkový jogurt, trocha mléka a špetka skořice.</p>
                    <p><strong>Postup:</strong> Rozmixuj v mixéru dohladka. Získáš osvěžující, výživný nápoj, který tě nabije energií na celý školní den!</p>
                </div>
                <div class="story-detail-box">
                    <h3>3. Křišťálové Mentolové Bonbóny 💎🍬</h3>
                    <p><strong>Ingredience:</strong> Máta, med, citrón a trochu čisté pramenité vody.</p>
                    <p><strong>Postup:</strong> Vychutnej si osvěžující mentolové bonbóny vyrobené s kapkou ledového kouzla.</p>
                </div>
            `
        },
        snowboard: {
            title: 'Triky na Snowboardu v Severních Horách 🏂🏔️',
            icon: '🏂',
            content: `
                <div class="story-detail-box">
                    <h3>1. Základní Skok & Tail Grab ❄️</h3>
                    <p>Při najetí na skok pokrč kolena, odraz se z hrany a ve vzduchu chytni zadní část boardu (Tail Grab). Držení rovnováhy pomáhá mrazivý vítr!</p>
                </div>
                <div class="story-detail-box">
                    <h3>2. Frosty 180° Spin 🔄</h3>
                    <p>Při odrazu ze sněhové muldy otoč ramena ve směru rotace. Dopadni na zadní hranu a plynule pokračuj v jízdě ze svahu Arendelle!</p>
                </div>
                <div class="story-detail-box">
                    <h3>3. Ice Slide na Ledové Kolejnici 🛹🧊</h3>
                    <p>Vytvoř si vlastní ledovou rail kolejničku pomocí magických vloček a projijď ji v perfekt balanced rovnováze.</p>
                </div>
            `
        },
        coldwater: {
            title: 'Příručka k Otužování & Zimnímu Plavání 🧊🏊‍♀️',
            icon: '🧊',
            content: `
                <div class="story-detail-box">
                    <h3>1. Příprava & Správné Dýchání 🫁</h3>
                    <p>Před vstupem do ledové vody fjordu se uklidni. Zhluboka dýchej – 4 sekundy nádech, 4 sekundy výdech. Chlad je tvůj přítel!</p>
                </div>
                <div class="story-detail-box">
                    <h3>2. První Ponoření ve Fjordu 🌊</h3>
                    <p>Vstupuj do vody pomalu a plynule. Nikdy neskákej po hlavě! Vydrž zpočátku 1 až 2 minuty. Cítíš, jak tě ledová voda naplňuje energií?</p>
                </div>
                <div class="story-detail-box">
                    <h3>3. Zahřátí Po Otužování 🔥☕</h3>
                    <p>Po výstupu z vody se osuš, oblékni si teplý svetr od Anny, dej si horké kakao se skořicí a lehce se pohybuj.</p>
                </div>
            `
        }
    };

    document.querySelectorAll('.highlight-item').forEach(item => {
        item.addEventListener('click', () => {
            const storyType = item.getAttribute('data-story');

            if (storyType === 'music') {
                document.getElementById('music-modal').classList.remove('hidden');
                playIceSound('crystal-chime');
                return;
            }

            if (storyType === 'sounds') {
                document.getElementById('soundboard-modal').classList.remove('hidden');
                playIceSound('ice-sparkle');
                return;
            }

            const data = storyDataMap[storyType];
            if (data) {
                storyTitle.textContent = data.title;
                storyIcon.textContent = data.icon;
                storyContent.innerHTML = data.content;
                storyModal.classList.remove('hidden');
                playIceSound('crystal-chime');
            }
        });
    });

    if (closeStoryModal) {
        closeStoryModal.addEventListener('click', () => {
            storyModal.classList.add('hidden');
        });
    }

    // 7. ZAVÍRÁNÍ PŘEHRÁVAČE A SOUNDBOARD MODÁLŮ
    const musicModal = document.getElementById('music-modal');
    const closeMusicModal = document.getElementById('close-music-modal');
    const soundboardModal = document.getElementById('soundboard-modal');
    const closeSoundboardModal = document.getElementById('close-soundboard-modal');

    document.getElementById('btn-open-music')?.addEventListener('click', () => {
        musicModal.classList.remove('hidden');
    });
    document.getElementById('btn-open-soundboard')?.addEventListener('click', () => {
        soundboardModal.classList.remove('hidden');
    });

    if (closeMusicModal) closeMusicModal.addEventListener('click', () => musicModal.classList.add('hidden'));
    if (closeSoundboardModal) closeSoundboardModal.addEventListener('click', () => soundboardModal.classList.add('hidden'));

    // Zavírání kliknutím mimo okno modalů
    window.addEventListener('click', (e) => {
        if (e.target === friendModal) friendModal.classList.add('hidden');
        if (e.target === storyModal) storyModal.classList.add('hidden');
        if (e.target === musicModal) musicModal.classList.add('hidden');
        if (e.target === soundboardModal) soundboardModal.classList.add('hidden');
    });

    // 8. TLAČÍTKA LIKE A INTERAKCE PŘÍSPĚVKŮ
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            const card = btn.closest('.ig-post-card');
            const likeCountEl = card.querySelector('.like-count');
            let count = parseInt(likeCountEl.textContent.replace(/\s+/g, '').replace(',', ''), 10);

            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#ef4444';
                likeCountEl.textContent = (count + 1).toLocaleString('cs-CZ');
                playIceSound('crystal-chime');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = '';
                likeCountEl.textContent = (count - 1).toLocaleString('cs-CZ');
            }
        });
    });

    // 9. FORMULÁŘ PRO KOMENTÁŘE
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const authorInput = document.getElementById('comment-author');
            const textInput = document.getElementById('comment-text');

            const author = authorInput.value.trim();
            const text = textInput.value.trim();

            if (author && text) {
                initialComments.unshift({
                    author: author,
                    avatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500',
                    date: 'Právě teď',
                    text: text
                });

                renderComments();

                const commentsCountSpan = document.getElementById('comments-count');
                if (commentsCountSpan) {
                    commentsCountSpan.textContent = initialComments.length;
                }

                authorInput.value = '';
                textInput.value = '';

                playIceSound('ice-sparkle');
                alert('✨ Tůj vzkaz byl úspěšně doručen Elze do Arendelle!');
            }
        });
    }

    // 10. INTERAKTIVNÍ TLAČÍTKA "PŘIDAT DO PŘÁTEL" A "POSLAT KOUZLO"
    const btnAddFriend = document.getElementById('btn-add-friend');
    const btnCastSpell = document.getElementById('btn-cast-spell');
    const btnCastSpellNav = document.getElementById('btn-cast-spell-nav');
    const friendCountSpan = document.getElementById('friend-count');

    if (btnAddFriend) {
        btnAddFriend.addEventListener('click', () => {
            let currentCount = parseInt(friendCountSpan.textContent, 10);
            friendCountSpan.textContent = currentCount + 1;
            playIceSound('crystal-chime');
            alert('🎉 Byla jsi přidána do přátel Elzy! Arendelle tě vítá s otevřenou náručí!');
        });
    }

    function triggerMagicSpell() {
        playIceSound('frost-wave');
        playIceSound('ice-sparkle');
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createCursorSparkle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 40);
        }
    }

    if (btnCastSpell) btnCastSpell.addEventListener('click', triggerMagicSpell);
    if (btnCastSpellNav) btnCastSpellNav.addEventListener('click', triggerMagicSpell);

    // 11. AUDIO SYNTHESIZER (WEB AUDIO API)
    let audioCtx = null;

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    const soundButtons = document.querySelectorAll('.sound-btn');
    soundButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const soundType = e.currentTarget.getAttribute('data-sound');
            playIceSound(soundType);
        });
    });

    function playIceSound(type) {
        try {
            const ctx = getAudioContext();
            const now = ctx.currentTime;

            if (type === 'ice-sparkle') {
                const freqs = [1046.50, 1318.51, 1567.98, 2093.00, 2637.02];
                freqs.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.06);
                    gain.gain.setValueAtTime(0.15, now + idx * 0.06);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + idx * 0.06);
                    osc.stop(now + idx * 0.06 + 0.35);
                });
            } else if (type === 'frost-wave') {
                const bufferSize = ctx.sampleRate * 0.6;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;

                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.setValueAtTime(1200, now);
                filter.frequency.exponentialRampToValueAtTime(3500, now + 0.5);

                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);
                noise.start(now);
            } else if (type === 'crystal-chime') {
                [1760, 2217.46, 2637.02].forEach((freq) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.85);
                });
            } else if (type === 'ice-palace') {
                const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.1);
                    gain.gain.setValueAtTime(0.12, now + i * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.1);
                    osc.stop(now + i * 0.1 + 0.65);
                });
            }
        } catch (err) {
            console.log('Audio playback prevented by browser audio context policy.', err);
        }
    }

    // 12. PREHRÁVAČ MELODIE
    const playBtn = document.getElementById('btn-play-theme');
    const playerStatus = document.getElementById('player-status');
    const visualizer = document.querySelector('.visualizer-bars');
    let isPlayingTheme = false;
    let themeInterval = null;

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const ctx = getAudioContext();
            if (!isPlayingTheme) {
                isPlayingTheme = true;
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pozastavit melodii';
                if (playerStatus) playerStatus.textContent = 'Přehrává se... ❄️';
                if (visualizer) visualizer.classList.add('playing');

                const melodyNotes = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 392.00];
                let noteIdx = 0;

                themeInterval = setInterval(() => {
                    if (!isPlayingTheme) return;
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(melodyNotes[noteIdx], ctx.currentTime);
                    gain.gain.setValueAtTime(0.08, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.45);

                    noteIdx = (noteIdx + 1) % melodyNotes.length;
                }, 500);

            } else {
                isPlayingTheme = false;
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Přehrát ledovou melodii';
                if (playerStatus) playerStatus.textContent = 'Zastaveno';
                if (visualizer) visualizer.classList.remove('playing');
                if (themeInterval) clearInterval(themeInterval);
            }
        });
    }

    // 13. PADAJÍCÍ SNĚHOVÉ VLOČKY A KURZOROVÝ TŘPYT
    createSnowflakes(35);

    let lastSparkleTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkleTime > 70) {
            createCursorSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            for (let i = 0; i < 5; i++) {
                createCursorSparkle(e.clientX + (Math.random() * 40 - 20), e.clientY + (Math.random() * 40 - 20));
            }
        }
    });

    function createSnowflakes(count) {
        const snowContainer = document.getElementById('snow-container');
        if (!snowContainer) return;
        const symbols = ['❄', '❅', '❆', '✨'];

        for (let i = 0; i < count; i++) {
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            flake.style.left = Math.random() * 100 + 'vw';
            flake.style.animationDuration = (Math.random() * 5 + 5) + 's';
            flake.style.animationDelay = (Math.random() * 5) + 's';
            flake.style.fontSize = (Math.random() * 10 + 12) + 'px';
            flake.style.opacity = Math.random() * 0.7 + 0.3;
            snowContainer.appendChild(flake);
        }
    }

    function createCursorSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';
        const symbols = ['✨', '❄️', '💎', '💫'];
        sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g,
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});
