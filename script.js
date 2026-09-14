document.addEventListener('DOMContentLoaded', () => {
    // 1. PADAJÍCÍ SNĚHOVÉ VLOČKY
    createSnowflakes(30);

    // 2. KOUZLO S MYŠÍ - SLEDOVÁNÍ KURZORU (SNĚHOVÉ/LEDOWÉ JISKRY)
    let lastSparkleTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkleTime > 60) {
            createCursorSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    });

    document.addEventListener('click', (e) => {
        for (let i = 0; i < 6; i++) {
            createCursorSparkle(e.clientX + (Math.random() * 40 - 20), e.clientY + (Math.random() * 40 - 20));
        }
    });

    // 3. AUDIO SYNTHESIZER (WEB AUDIO API - LEDOVÉ A KŘIŠŤÁLOVÉ ZVUKY)
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

    // Přehrávání zvuků ze zvukového panelu
    const soundButtons = document.querySelectorAll('.sound-btn');
    soundButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const soundType = e.currentTarget.getAttribute('data-sound');
            playIceSound(soundType);
        });
    });

    function playIceSound(type) {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        if (type === 'ice-sparkle') {
            // Rychlá arpeggia vysoko tónovaných arpeggií
            const freqs = [1046.50, 1318.51, 1567.98, 2093.00, 2637.02]; // C6, E6, G6, C7, E7
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
            // Mrazivá šumová vlnka
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
            // Křišťálové zvonění
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
            // Hluboký dón se stoupajícím ledovým akordem
            const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C4, E4, G4, C5, E5, G5
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
    }

    // 4. LEDOVÝ HUDEBNÍ PŘEHRÁVAČ
    const playBtn = document.getElementById('btn-play-theme');
    const playerStatus = document.getElementById('player-status');
    const visualizer = document.querySelector('.visualizer-bars');
    let isPlayingTheme = false;
    let themeInterval = null;

    playBtn.addEventListener('click', () => {
        const ctx = getAudioContext();
        if (!isPlayingTheme) {
            isPlayingTheme = true;
            playBtn.textContent = '⏸ Pozastavit melodii';
            playerStatus.textContent = 'Přehrává se... ❄️';
            visualizer.classList.add('playing');

            // Hraj melodické tóny v smyčce
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
            playBtn.textContent = '▶ Přehrát ledovou melodii';
            playerStatus.textContent = 'Zastaveno';
            visualizer.classList.remove('playing');
            if (themeInterval) clearInterval(themeInterval);
        }
    });

    // 5. INTERAKTIVNÍ TLAČÍTKA "PŘIDAT DO PŘÁTEL" A "POSLAT KOUZLO"
    const btnAddFriend = document.getElementById('btn-add-friend');
    const btnCastSpell = document.getElementById('btn-cast-spell');
    const friendCountSpan = document.getElementById('friend-count');

    btnAddFriend.addEventListener('click', () => {
        let currentCount = parseInt(friendCountSpan.textContent, 10);
        friendCountSpan.textContent = currentCount + 1;
        playIceSound('crystal-chime');
        alert('🎉 Byla jsi přidána do přátel Elzy! Arendelle děkuje!');
    });

    btnCastSpell.addEventListener('click', () => {
        playIceSound('frost-wave');
        playIceSound('ice-sparkle');
        // Vytvoř sérii vloček na obrazovce
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createCursorSparkle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 50);
        }
    });

    // 6. PRÁCE S KOMENTÁŘI
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');
    const commentsCountSpan = document.getElementById('comments-count');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const authorInput = document.getElementById('comment-author');
        const textInput = document.getElementById('comment-text');

        const author = authorInput.value.trim();
        const text = textInput.value.trim();

        if (author && text) {
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            commentItem.innerHTML = `
                <div class="comment-avatar">❄️</div>
                <div class="comment-content">
                    <strong>${escapeHTML(author)}</strong> <span class="comment-date">Právě teď</span>
                    <p>${escapeHTML(text)}</p>
                </div>
            `;

            commentsList.prepend(commentItem);

            let count = parseInt(commentsCountSpan.textContent, 10);
            commentsCountSpan.textContent = count + 1;

            authorInput.value = '';
            textInput.value = '';

            playIceSound('ice-sparkle');
        }
    });

    // Pomocné funkce
    function createSnowflakes(count) {
        const snowContainer = document.getElementById('snow-container');
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
