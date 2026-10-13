/**
 * WANDI STUDIO — INTERACTIVE CLIENT SCRIPT & PLAYABLE SANDBOX
 * Powered by 1Die High-Concurrency Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    const DISCORD_INVITE_URL = 'http://dsc.gg/fivemfinder';

    // -------------------------------------------------------------------------
    // 1. PRODUCTS DATA CATALOG (1DIE SERIES ENTERPRISE ARCHITECTURE)
    // -------------------------------------------------------------------------
    const products = [
        {
            id: '1die-billing',
            category: 'store',
            accent: '#10B981',
            icon: 'fa-solid fa-qrcode',
            badge: 'Paling Diminati',
            title: '1Die Auto-Billing & QRIS Engine',
            desc: 'Sistem kasir bot terotomatisasi penuh 24/7 untuk monetisasi server Anda! Menjual Paket VIP/Donasi FiveM, Koin Game, Role Discord, VPN, maupun file digital dengan verifikasi mutasi QRIS instan tanpa cek manual.',
            features: [
                'Integrasi Dynamic QRIS Settlement Gateway (Semua e-Wallet & Mobile Banking)',
                'Instant Settlement Verification dalam 5-15 detik dengan webhook terenkripsi',
                'Automated Fulfillment: Auto-assign Role Discord, aktivasi in-game, atau kirim file ke DM',
                'Dukungan multi-tier produk: Paket VIP Donatur, Koin FiveM, Lisensi Script, dan Layanan VPN',
                'Pencatatan mutasi transaksi terpadu, audit saldo, dan laporan omzet real-time'
            ],
            tech: ['1Die Asynchronous Microservice', 'Realtime QRIS Gateway', 'Embedded WAL Storage', 'Discord API v14'],
            price: 'Rate by PM',
            commands: ['/beli', '/cekstatus', '/riwayat', '/admin-omzet', '/admin-tambahproduk'],
            details: 'Otomatisasi penuh untuk toko digital dan server FiveM Anda. Anda tidak perlu lagi terjaga di tengah malam hanya untuk memeriksa bukti transfer palsu. Sistem kasir 1Die menangani transaksi secara mandiri, akurat, dan tanpa jeda.'
        },
        {
            id: '1die-cybershield',
            category: 'security',
            accent: '#EF4444',
            icon: 'fa-solid fa-shield-virus',
            badge: 'Cyber Defense',
            title: '1Die CyberShield Defense System',
            desc: 'Sistem pertahanan keamanan server Discord tingkat lanjut yang otomatis mendeteksi dan memusnahkan link phishing (Nitro palsu, Steam login jebakan, grabber token), serta mengisolasi akun penipu dalam 0.08 detik.',
            features: [
                'Heuristic Threat Detection: Menganalisis pola domain berbahaya dan manipulasi karakter URL',
                'Sub-Second Deletion Engine: Memusnahkan pesan jebakan dalam 0.08 detik sebelum diklik member',
                'Automated Quarantine Protocol: Memberikan sanksi timeout 24 jam dan isolasi role pelaku',
                'Anti-Raid Mass Join Protection: Mencegah serangan bot spam massal dan filter invite liar',
                'Comprehensive Incident Audit Log: Riwayat forensik ancaman terkirim otomatis ke channel admin'
            ],
            tech: ['Heuristic Threat Engine', 'Multi-Layer Pattern Inspection', 'Threat Intelligence DB', 'Zero-Latency Hook'],
            price: 'Rate by PM',
            commands: ['/shield-status', '/whitelist-domain', '/blacklist-domain', '/quarantine-list', '/threat-logs'],
            details: 'Melindungi reputasi server FiveM dan komunitas Anda dari komplotan penipu siber yang kerap menyebarkan link jebakan pembajak akun Discord.'
        },
        {
            id: '1die-whatsapp',
            category: 'monitoring',
            accent: '#25D366',
            icon: 'fa-brands fa-whatsapp',
            badge: 'WhatsApp Sync',
            title: '1Die WhatsApp Dispatcher & Ticket SLA',
            desc: 'Sistem monitoring tiket Discord terintegrasi jembatan komunikasi multi-protokol ke nomor WhatsApp Owner & Admin. Pantau aduan warga dan kinerja respon staf tanpa harus membuka PC seharian.',
            features: [
                'Multi-Protocol Socket Dispatcher: Meneruskan tiket urgent langsung ke nomor WhatsApp Owner',
                'Escalation Threshold Alert: Peringatan otomatis jika tiket penting belum direspon lebih dari X menit',
                'SLA Response Time Tracking: Mengukur secara akurat waktu respon pertama dan durasi kerja staf',
                'Automated Daily Performance Digest: Rekapitulasi efisiensi staf tiket terkirim rapi ke WhatsApp',
                'Post-Resolution Feedback Loop: Pencatatan rating kepuasan bintang (1-5) dan audit kepuasan warga'
            ],
            tech: ['Multi-Protocol WA Socket Bridge', 'Discord Interaction Pipeline', 'SLA Analytics Engine', 'Fault-Tolerant Queue'],
            price: 'Rate by PM',
            commands: ['!wa connect', '!wa status', '!wa test', '/ticket-sla', '/admin-report'],
            details: 'Sangat cocok untuk Owner server FiveM yang memiliki kesibukan kerja di luar. Setiap ada laporan masalah penting dari warga, WhatsApp HP Anda langsung berdering.'
        },
        {
            id: '1die-attendance',
            category: 'fivem',
            accent: '#00F0FF',
            icon: 'fa-solid fa-people-group',
            badge: 'Best Seller FiveM',
            title: '1Die Attendance Core & Gang Role Claim',
            desc: 'Sistem absensi otomatis 7 sesi jadwal malam via Live FiveM REST API, verifikasi password gang ber-cooldown anti-bruteforce, dan laporan rekap visual harian/bulanan dengan tombol interaktif.',
            features: [
                'Credentialed Role Assignment: Verifikasi password gang dengan auto-rename format in-game',
                'Automated 7-Session Scraping Pipeline: Sinkronisasi data live pemain FiveM (19:05 - 01:05 WIB)',
                'Interactive Visual Embed Pagination: Laporan rekap harian & bulanan navigasi tombol mulus',
                'Midnight Transition & Catch-Up Engine: Penanganan pergantian tanggal dan auto-recovery jika VPS lag',
                'Zero-Corruption Embedded Storage: Transaksi data kilat tanpa membebani resource server game'
            ],
            tech: ['FiveM Protocol Scraping Pipeline', 'Embedded WAL Storage', 'State Recovery Engine', 'Anti-Bruteforce Cooldown'],
            price: 'Rate by PM',
            commands: ['/setup-claim', '/setpassword', '/rekap-hari', '/rekap-bulan', '/set-target'],
            details: 'Telah teruji di berbagai server FiveM roleplay aktif. Mengontrol disiplin kehadiran anggota gang dan fraksi secara otomatis tanpa repot rekap manual.'
        },
        {
            id: '1die-ticket',
            category: 'ticket',
            accent: '#5865F2',
            icon: 'fa-solid fa-ticket-simple',
            badge: 'Enterprise Tier',
            title: '1Die Enterprise Ticket System',
            desc: 'Bot tiket korporat setara Ticket Tool Premium dengan dukungan mode Forum Thread & Channel, modal kuesioner sebelum buka tiket, generator transkrip HTML interaktif, dan feedback rating kepuasan.',
            features: [
                'Hybrid Architecture: Mendukung Private Channel maupun Forum Thread sesuai kebutuhan',
                'Standalone HTML Transcript Generator: Arsip visual mandiri lengkap dengan attachment file/gambar',
                'Pre-Ticket Intake Modal: Mengumpulkan informasi keluhan warga sebelum channel tiket dibuat',
                'Staff Performance Analytics: Pembagian penanganan tiket per departemen dan pencatatan riwayat',
                'Anti-Spam Ticket Flood Protection: Pembatasan pembuatan tiket aktif per member secara dinamis'
            ],
            tech: ['HTML Visual Rendering Engine', 'Discord Modal Forms API', 'Department Routing Logic', 'WAL Storage'],
            price: 'Rate by PM',
            commands: ['/ticket setup', '/ticket close', '/ticket transcript', '/ticket add', '/ticket stats'],
            details: 'Menjaga profesionalisme layanan server Anda dengan arsip pembicaraan yang dapat ditinjau kapan saja dalam bentuk tampilan Discord interaktif.'
        },
        {
            id: '1die-rpg',
            category: 'games',
            accent: '#F43F5E',
            icon: 'fa-solid fa-dragon',
            badge: 'Community Engagement',
            title: '1Die Dungeon Raid — Interactive Mini RPG',
            desc: 'Tingkatkan keaktifan chat Discord Anda dengan bot Mini RPG interaktif! Menampilkan pertarungan dungeon turn-based, leveling karakter, dan boss raid bersama.',
            features: [
                'Turn-Based Combat State Machine: Pertarungan dungeon real-time berbasis tombol interaktif',
                'Attribute Progression System: Kustomisasi atribut ATK, DEF, HP, dan Critical Rate',
                'Loot RNG & Equipment Inventory: Drop persenjataan langka dan pasar barter item',
                'Collaborative World Boss Raid: Event gabungan seluruh member menumbangkan boss besar',
                'Competitive Global Leaderboard: Peringkat petualang terkuat untuk memacu interaksi komunitas'
            ],
            tech: ['Asynchronous Combat Engine', 'Dynamic State Storage', 'Dynamic Canvas Render', 'Component V2 API'],
            price: 'Rate by PM',
            commands: ['/start', '/profile', '/dungeon', '/raid', '/inventory', '/leaderboard'],
            details: 'Terbukti efektif membangkitkan suasana obrolan Discord yang sepi menjadi ramai dan kompetitif.'
        },
        {
            id: '1die-bespoke',
            category: 'fivem',
            accent: '#8B5CF6',
            icon: 'fa-solid fa-code-merge',
            badge: 'Bespoke Integration',
            title: '1Die Bespoke FiveM & Discord Custom Engine',
            desc: 'Punya kebutuhan khusus yang belum ada di pasaran? Kami bangun bot kustom dari nol yang terhubung langsung dengan core script FiveM server Anda (ESX / QBCore / Qbox).',
            features: [
                'Bi-Directional Database Synchronization: Menghubungkan MySQL/oxmysql FiveM ke Discord',
                'Ingame Event Auditing Pipeline: Log bansos, killfeed, job transfer, dan admin punishment',
                'Automated Whitelist Verification: Sinkronisasi izin bermain berbasis kepemilikan role Discord',
                'Custom White-Label Branding: Avatar, persona, nama bot, dan antarmuka disesuaikan penuh',
                'Full Lifetime Source Code & Deployment Guidance: Kendali penuh tanpa ketergantungan sewa'
            ],
            tech: ['Lua FiveM Core Engine', 'Asynchronous Node.js Pipeline', 'Relational SQL Bridge', 'Discord Gateway v14'],
            price: 'Rate by PM (Sesuai Spek)',
            commands: ['Sesuai Permintaan Klien', 'Unlimited Scope'],
            details: 'Dikerjakan langsung oleh Wandi (FiveM Developer) dengan arsitektur kode bersih, terstruktur, hemat memori, dan mudah dipelihara jangka panjang.'
        }
    ];

    // -------------------------------------------------------------------------
    // 2. RENDER PRODUCTS TO DOM
    // -------------------------------------------------------------------------
    const productsGrid = document.getElementById('products-grid');

    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';
        const filtered = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.setProperty('--card-accent', p.accent);

            card.innerHTML = `
                <div>
                    <div class="card-top">
                        <div class="card-icon-wrap">
                            <i class="${p.icon}"></i>
                        </div>
                        <span class="card-badge">${p.badge}</span>
                    </div>

                    <h3 class="card-title">${p.title}</h3>
                    <p class="card-desc">${p.desc}</p>

                    <ul class="card-features-list">
                        ${p.features.slice(0, 3).map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
                    </ul>

                    <div class="card-tech-stack">
                        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-price-info">
                        <span class="price-label">Tarif Pembuatan</span>
                        <span class="price-value">${p.price}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-secondary btn-details" data-id="${p.id}">
                            <i class="fa-solid fa-circle-info"></i> Detail
                        </button>
                        <a href="${DISCORD_INVITE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-details">
                            <i class="fa-brands fa-discord"></i> Pesan
                        </a>
                    </div>
                </div>
            `;

            productsGrid.appendChild(card);
        });

        attachCardEvents();
    }

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // -------------------------------------------------------------------------
    // 3. PRODUCT MODAL DIALOG WITH VPS NOTICE
    // -------------------------------------------------------------------------
    const modalBackdrop = document.getElementById('product-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalContentBody = document.getElementById('modal-content-body');

    function openProductModal(productId) {
        const p = products.find(item => item.id === productId);
        if (!p) return;

        modalContentBody.innerHTML = `
            <div class="modal-header-section">
                <div class="modal-icon-badge" style="border-color: ${p.accent}">
                    <i class="${p.icon}" style="color: ${p.accent}"></i>
                </div>
                <div>
                    <span class="card-badge" style="color: ${p.accent}">${p.badge}</span>
                    <h2 class="modal-bot-title">${p.title}</h2>
                </div>
            </div>

            <p class="modal-full-desc">${p.details}</p>

            <h4 class="modal-section-h4"><i class="fa-solid fa-check-double"></i> Kapabilitas & Fitur Utama</h4>
            <ul class="card-features-list">
                ${p.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
            </ul>

            <h4 class="modal-section-h4"><i class="fa-solid fa-terminal"></i> Contoh Perintah (Slash Commands)</h4>
            <div class="card-tech-stack">
                ${p.commands.map(cmd => `<span class="tech-tag">${cmd}</span>`).join('')}
            </div>

            <h4 class="modal-section-h4"><i class="fa-solid fa-microchip"></i> Arsitektur Rekayasa Sistem</h4>
            <div class="modal-spec-grid">
                <div class="modal-spec-item">
                    <div class="spec-title">Arsitektur Runtime</div>
                    <div class="spec-desc">${p.tech[0]}</div>
                </div>
                <div class="modal-spec-item">
                    <div class="spec-title">Storage & State Engine</div>
                    <div class="spec-desc">${p.tech[2]}</div>
                </div>
                <div class="modal-spec-item">
                    <div class="spec-title">Tingkat Kompatibilitas</div>
                    <div class="spec-desc">Linux VPS / Windows RDP / Container</div>
                </div>
                <div class="modal-spec-item">
                    <div class="spec-title">Kepemilikan Kode</div>
                    <div class="spec-desc">100% Full Source Code (No Encrypted Locks)</div>
                </div>
            </div>

            <div class="modal-vps-reminder">
                <i class="fa-solid fa-server"></i>
                <span><strong>Penting:</strong> Tarif pembuatan belum termasuk sewa VPS (estimasi Rp 150.000 — Rp 200.000/bln agar bot aktif 24 jam). Instalasi kami dampingi gratis sampai online!</span>
            </div>

            <div class="modal-cta-box">
                <div>
                    <span class="price-label">Tarif Pembuatan</span>
                    <div class="price-value" style="font-size: 1.35rem">${p.price}</div>
                </div>
                <a href="${DISCORD_INVITE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-discord btn-lg">
                    <i class="fa-brands fa-discord"></i> Konsultasi via Server Discord
                </a>
            </div>
        `;

        modalBackdrop.classList.add('open');
        modalBackdrop.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modalBackdrop.classList.remove('open');
        modalBackdrop.setAttribute('aria-hidden', 'true');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) closeModal();
    });

    function attachCardEvents() {
        document.querySelectorAll('.btn-details').forEach(btn => {
            if (btn.tagName.toLowerCase() === 'button') {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    openProductModal(id);
                });
            }
        });
    }

    // -------------------------------------------------------------------------
    // 4. PLAYABLE INTERACTIVE SANDBOX SIMULATOR (1DIE SERIES)
    // -------------------------------------------------------------------------
    const simContainer = document.getElementById('simulator-dynamic-content');
    const simTabBtns = document.querySelectorAll('.sim-tab-btn');

    let absensiPage = 1;
    const absensiData = [
        {
            gang: 'THE FAMILIES (GROVE)',
            total: 24,
            hadir: 19,
            sesi: '7/7 Sesi',
            status: '🔥 Kehadiran Sempurna (79%)',
            alpha: ['Budi_Santos', 'Rian_Smoke']
        },
        {
            gang: 'LOS SANTOS VAGOS',
            total: 20,
            hadir: 17,
            sesi: '7/7 Sesi',
            status: '✅ Sangat Baik (85%)',
            alpha: ['Doni_Loco']
        },
        {
            gang: 'BALLAS GANG',
            total: 22,
            hadir: 18,
            sesi: '7/7 Sesi',
            status: '🔥 Kehadiran Tinggi (81%)',
            alpha: ['Kiki_Purple', 'Alex_Shot']
        }
    ];

    // TAB 1: 1Die Auto-Billing QRIS
    function renderQRISSimulator() {
        simContainer.innerHTML = `
            <div class="discord-window">
                <div class="discord-window-header">
                    <div class="discord-window-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div class="discord-channel-info">
                        <i class="fa-solid fa-hashtag"></i>
                        <span>kasir-pembayaran-qris</span>
                    </div>
                    <div class="discord-header-badges">
                        <span class="badge-live"><i class="fa-solid fa-circle"></i> 1DIE SETTLEMENT ENGINE READY</span>
                    </div>
                </div>

                <div class="discord-chat-area" id="qris-chat-area">
                    <div class="discord-msg">
                        <div class="discord-avatar" style="background: #10B981">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div class="discord-msg-content">
                            <div class="discord-user-row">
                                <span class="discord-username">1Die Auto-Billing</span>
                                <span class="discord-bot-badge" style="background: #10B981">SETTLEMENT BOT</span>
                                <span class="discord-timestamp">Hari ini pukul 11:35</span>
                            </div>

                            <div class="discord-embed" style="--embed-border: #10B981">
                                <div class="embed-author"><i class="fa-solid fa-bolt"></i> 1DIE ARCHITECTURE • INSTANT QRIS SETTLEMENT</div>
                                <div class="embed-title">💳 Tagihan QRIS Dinamis — Pembelian Paket Otomatis</div>
                                <div class="embed-desc">Scan kode QRIS menggunakan e-Wallet (GoPay, OVO, Dana, ShopeePay) atau Mobile Banking (BCA, Mandiri, BRI). Bot memverifikasi mutasi bank otomatis tanpa perlu kirim bukti transfer manual!</div>

                                <div class="embed-fields">
                                    <div class="embed-field">
                                        <div class="field-name">Item Pembelian</div>
                                        <div class="field-val">Paket VIP Donatur FiveM (30 Hari)</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">Metode Pembayaran</div>
                                        <div class="field-val">QRIS Dinamis Realtime</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">Total Nominal</div>
                                        <div class="field-val" style="color: #10B981; font-size: 0.95rem">Rp 50.000</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">Status Mutasi</div>
                                        <div class="field-val" id="qris-status-val" style="color: #fee75c">MENUNGGU PEMBAYARAN</div>
                                    </div>
                                </div>

                                <div class="embed-footer">
                                    <span>Ref TRX: 1DIE-QRIS-20261013-0941</span>
                                    <span>Instant Fulfillment Engine 24/7</span>
                                </div>
                            </div>

                            <div class="discord-buttons-row">
                                <button class="d-btn d-btn-success" id="btn-pay-simulate">
                                    <i class="fa-solid fa-wallet"></i> Simulasikan Scan & Bayar QRIS
                                </button>
                                <button class="d-btn d-btn-secondary" id="btn-reset-qris">
                                    <i class="fa-solid fa-rotate-left"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const qrisChatArea = document.getElementById('qris-chat-area');
        const qrisStatusVal = document.getElementById('qris-status-val');
        const btnPay = document.getElementById('btn-pay-simulate');

        btnPay.addEventListener('click', () => {
            btnPay.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memeriksa Mutasi Bank QRIS...';
            btnPay.disabled = true;

            setTimeout(() => {
                qrisStatusVal.textContent = '✅ LUNAS (TERVERIFIKASI OTOMATIS)';
                qrisStatusVal.style.color = '#57f287';
                btnPay.innerHTML = '<i class="fa-solid fa-circle-check"></i> Pembayaran Selesai';

                const dmMsg = document.createElement('div');
                dmMsg.className = 'discord-msg';
                dmMsg.innerHTML = `
                    <div class="discord-avatar" style="background: #5865F2">
                        <i class="fa-solid fa-gift"></i>
                    </div>
                    <div class="discord-msg-content">
                        <div class="discord-user-row">
                            <span class="discord-username">1Die Auto Fulfillment</span>
                            <span class="discord-bot-badge">SERAH TERIMA</span>
                            <span class="discord-timestamp">Baru saja</span>
                        </div>
                        <div class="discord-embed" style="--embed-border: #5865F2">
                            <div class="embed-title" style="color: #57f287">🎉 Pembayaran Berhasil! Produk Otomatis Diberikan</div>
                            <div class="embed-desc">Terima kasih atas pembayaran Anda. Sistem bot secara otomatis telah memberikan hak akses dan produk Anda detik ini juga:</div>
                            <div class="embed-fields">
                                <div class="embed-field">
                                    <div class="field-name">Role Discord Diberikan</div>
                                    <div class="field-val" style="color: #57f287"><i class="fa-solid fa-crown"></i> @VIP Donatur FiveM</div>
                                </div>
                                <div class="embed-field">
                                    <div class="field-name">Aktivasi In-Game</div>
                                    <div class="field-val">Sinkronisasi Database Aktif</div>
                                </div>
                            </div>
                            <div class="embed-footer">
                                <span>Operasional 100% Otomatis tanpa Campur Tangan Admin</span>
                            </div>
                        </div>
                    </div>
                `;
                qrisChatArea.appendChild(dmMsg);
                qrisChatArea.scrollTop = qrisChatArea.scrollHeight;
            }, 1200);
        });

        document.getElementById('btn-reset-qris').addEventListener('click', () => {
            renderQRISSimulator();
        });
    }

    // TAB 2: 1Die CyberShield Tester
    function renderAntiphishSimulator() {
        simContainer.innerHTML = `
            <div class="discord-window">
                <div class="discord-window-header">
                    <div class="discord-window-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div class="discord-channel-info">
                        <i class="fa-solid fa-hashtag"></i>
                        <span>warga-chat-general</span>
                    </div>
                    <div class="discord-header-badges">
                        <span class="badge-live"><i class="fa-solid fa-circle"></i> 1DIE CYBERSHIELD ACTIVE</span>
                    </div>
                </div>

                <div class="discord-chat-area" id="antiphish-chat-area">
                    <div class="discord-msg">
                        <div class="discord-avatar avatar-guard">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <div class="discord-msg-content">
                            <div class="discord-user-row">
                                <span class="discord-username">1Die CyberShield</span>
                                <span class="discord-bot-badge badge-guard">DEFENSE</span>
                                <span class="discord-timestamp">Hari ini pukul 11:30</span>
                            </div>
                            <div class="discord-embed" style="--embed-border: #da373c">
                                <div class="embed-author"><i class="fa-solid fa-shield-virus"></i> 1DIE CYBERSHIELD ENGINE</div>
                                <div class="embed-title">🛡️ Sistem Proteksi Anti-Phishing Berjalan Normal</div>
                                <div class="embed-desc">Seluruh link mencurigakan (Fake Nitro, jebakan phising steam, link token grabber) akan dimusnahkan secara instan dalam 0.08 detik sebelum ada member yang menjadi korban penipuan.</div>
                                <div class="embed-footer">
                                    <span>Database: 28,400+ Domain Phishing Terdaftar</span>
                                    <span>Status Server: <strong style="color: #57f287">AMAN</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sandbox-controls">
                    <div class="sandbox-quick-actions">
                        <span class="sandbox-label"><i class="fa-solid fa-flask"></i> Uji Coba Cepat:</span>
                        <button class="quick-action-btn" id="btn-quick-normal">
                            <i class="fa-regular fa-comment"></i> Kirim Chat Normal
                        </button>
                        <button class="quick-action-btn btn-scam" id="btn-quick-scam">
                            <i class="fa-solid fa-biohazard"></i> Tes Kirim Link Phishing Nitro
                        </button>
                    </div>

                    <div class="sandbox-chat-input-row">
                        <input type="text" class="sandbox-input" id="antiphish-input" placeholder="Ketik pesan atau masukkan link untuk diuji di sini...">
                        <button class="btn btn-primary" id="btn-send-antiphish">
                            <i class="fa-solid fa-paper-plane"></i> Kirim ke Chat
                        </button>
                    </div>
                </div>
            </div>
        `;

        const chatArea = document.getElementById('antiphish-chat-area');
        const inputField = document.getElementById('antiphish-input');

        function processMessage(text) {
            if (!text.trim()) return;

            const isPhishing = /nitro|discrod|gift|claim|steamcomm|free.*rp|token.*grab/i.test(text);

            const userMsg = document.createElement('div');
            userMsg.className = 'discord-msg';
            userMsg.innerHTML = `
                <div class="discord-avatar avatar-user">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="discord-msg-content">
                    <div class="discord-user-row">
                        <span class="discord-username">Warga_UjiCoba</span>
                        <span class="discord-timestamp">Baru saja</span>
                    </div>
                    <div class="user-chat-bubble">${escapeHtml(text)}</div>
                </div>
            `;
            chatArea.appendChild(userMsg);
            chatArea.scrollTop = chatArea.scrollHeight;

            if (isPhishing) {
                setTimeout(() => {
                    userMsg.style.transition = 'opacity 0.3s, transform 0.3s';
                    userMsg.style.opacity = '0.3';
                    userMsg.style.textDecoration = 'line-through';

                    const botAlert = document.createElement('div');
                    botAlert.className = 'discord-msg';
                    botAlert.innerHTML = `
                        <div class="discord-avatar avatar-guard">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="discord-msg-content">
                            <div class="discord-user-row">
                                <span class="discord-username" style="color: #da373c">1Die CyberShield</span>
                                <span class="discord-bot-badge badge-guard">DEFENSE</span>
                                <span class="discord-timestamp">Baru saja</span>
                            </div>
                            <div class="discord-embed" style="--embed-border: #da373c">
                                <div class="embed-author"><i class="fa-solid fa-ban"></i> ANCAMAN PHISHING DINETRALISIR!</div>
                                <div class="embed-title" style="color: #f87171">🚨 Link Berbahaya Dihapus Seketika!</div>
                                <div class="embed-desc">Pesan dari <strong>@Warga_UjiCoba</strong> mengandung pola phishing terlarang. Pesan telah dimusnahkan dari channel sebelum mengelabui korban.</div>
                                <div class="embed-fields">
                                    <div class="embed-field">
                                        <div class="field-name">Target Pelanggaran</div>
                                        <div class="field-val">Phishing / Scam Link</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">Waktu Respon Bot</div>
                                        <div class="field-val" style="color: #57f287">⚡ 0.08 Detik</div>
                                    </div>
                                    <div class="embed-field full">
                                        <div class="field-name">Tindakan Hukuman</div>
                                        <div class="field-val" style="color: #fca5a5">User di-Timeout 24 Jam + Audit Log terkirim ke Admin</div>
                                    </div>
                                </div>
                                <div class="embed-footer">
                                    <span>1Die Heuristic Active Defense</span>
                                    <span>Status Server: 100% Aman</span>
                                </div>
                            </div>
                        </div>
                    `;
                    chatArea.appendChild(botAlert);
                    chatArea.scrollTop = chatArea.scrollHeight;
                }, 300);
            }

            inputField.value = '';
        }

        document.getElementById('btn-send-antiphish').addEventListener('click', () => {
            processMessage(inputField.value);
        });

        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') processMessage(inputField.value);
        });

        document.getElementById('btn-quick-normal').addEventListener('click', () => {
            processMessage('Halo bang Wandi, mau tanya seputar bot absensi FiveM.');
        });

        document.getElementById('btn-quick-scam').addEventListener('click', () => {
            processMessage('FREE DISCORD NITRO 3 BULAN! Buruan klaim gratis disini: https://discrod-nitro-gift.ru/claim');
        });
    }

    // TAB 3: 1Die WhatsApp Dispatcher Dual Screen
    function renderWAAlertSimulator() {
        simContainer.innerHTML = `
            <div class="dual-screen-wrapper">
                <div class="discord-window">
                    <div class="discord-window-header">
                        <div class="discord-window-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="discord-channel-info">
                            <i class="fa-solid fa-hashtag"></i>
                            <span>ticket-1049-laporan</span>
                        </div>
                        <div class="discord-header-badges">
                            <span class="badge-live"><i class="fa-solid fa-circle"></i> 1DIE WA DISPATCHER</span>
                        </div>
                    </div>

                    <div class="discord-chat-area" id="garuda-chat-area">
                        <div class="discord-msg">
                            <div class="discord-avatar" style="background: #00b06f">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div class="discord-msg-content">
                                <div class="discord-user-row">
                                    <span class="discord-username">1Die Dispatcher</span>
                                    <span class="discord-bot-badge badge-garuda">MONITOR</span>
                                    <span class="discord-timestamp">Hari ini pukul 11:32</span>
                                </div>
                                <div class="discord-embed" style="--embed-border: #00b06f">
                                    <div class="embed-author"><i class="fa-solid fa-ticket"></i> 1DIE TICKET SLA SYSTEM</div>
                                    <div class="embed-title">🎫 Tiket #1049 — Komplain Kendaraan Warga</div>
                                    <div class="embed-desc">Member <strong>@Budi_Warga</strong> baru saja membuka tiket bantuan. Notifikasi telah diteruskan secara realtime ke nomor WhatsApp Staff & Owner.</div>
                                    <div class="embed-fields">
                                        <div class="embed-field">
                                            <div class="field-name">Kategori Masalah</div>
                                            <div class="field-val">Bug Garasi Kota</div>
                                        </div>
                                        <div class="embed-field">
                                            <div class="field-name">Status Respon</div>
                                            <div class="field-val" id="ticket-status-val" style="color: #fee75c">Menunggu Staff</div>
                                        </div>
                                    </div>
                                    <div class="embed-footer">
                                        <span>Multi-Protocol WhatsApp Connected</span>
                                        <span>Channel: ticket-1049</span>
                                    </div>
                                </div>

                                <div class="discord-buttons-row">
                                    <button class="d-btn d-btn-success" id="btn-staff-claim">
                                        <i class="fa-solid fa-user-check"></i> Klaim & Balas Tiket
                                    </button>
                                    <button class="d-btn d-btn-danger" id="btn-ticket-close">
                                        <i class="fa-solid fa-lock"></i> Selesaikan & Tutup Tiket
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wa-phone-frame">
                    <div class="wa-status-bar">
                        <span>11:32</span>
                        <span><i class="fa-solid fa-wifi"></i> 4G <i class="fa-solid fa-battery-full"></i></span>
                    </div>

                    <div class="wa-header">
                        <div class="wa-header-avatar">
                            <i class="fa-solid fa-robot"></i>
                        </div>
                        <div class="wa-header-info">
                            <div class="wa-header-name">1Die Alert Notifier (WA)</div>
                            <div class="wa-header-status">Online • Bot Otomatis</div>
                        </div>
                    </div>

                    <div class="wa-chat-body" id="wa-chat-body">
                        <div class="wa-bubble">
                            <div class="wa-bubble-header">
                                <i class="fa-solid fa-bell"></i> NOTIFIKASI TIKET BARU
                            </div>
                            <div class="wa-bubble-content">
                                🚨 <strong>Tiket #1049 Baru Dibuka!</strong><br>
                                <strong>Pelapor:</strong> Budi_Warga<br>
                                <strong>Keluhan:</strong> Bug Garasi Kota<br>
                                <strong>Waktu Masuk:</strong> 11:32 WIB<br><br>
                                <em>Mohon staff segera memeriksa channel Discord #ticket-1049.</em>
                            </div>
                            <div class="wa-bubble-time">
                                11:32 <i class="fa-solid fa-check-double"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const waChatBody = document.getElementById('wa-chat-body');
        const ticketStatusVal = document.getElementById('ticket-status-val');
        const garudaChatArea = document.getElementById('garuda-chat-area');

        document.getElementById('btn-staff-claim').addEventListener('click', () => {
            ticketStatusVal.textContent = 'Dikelola oleh @Wandi';
            ticketStatusVal.style.color = '#57f287';

            const claimMsg = document.createElement('div');
            claimMsg.className = 'discord-msg';
            claimMsg.innerHTML = `
                <div class="discord-avatar" style="background: #5865F2">
                    <i class="fa-solid fa-user-shield"></i>
                </div>
                <div class="discord-msg-content">
                    <div class="discord-user-row">
                        <span class="discord-username">Wandi (Staff)</span>
                        <span class="discord-timestamp">Baru saja</span>
                    </div>
                    <div class="user-chat-bubble">Halo @Budi_Warga, laporan Anda sedang saya tangani sekarang.</div>
                </div>
            `;
            garudaChatArea.appendChild(claimMsg);

            const waClaim = document.createElement('div');
            waClaim.className = 'wa-bubble';
            waClaim.innerHTML = `
                <div class="wa-bubble-header">
                    <i class="fa-solid fa-user-check"></i> UPDATE RESPON STAFF
                </div>
                <div class="wa-bubble-content">
                    ✅ <strong>Tiket #1049 telah diklaim!</strong><br>
                    <strong>Staff:</strong> @Wandi<br>
                    <strong>Kecepatan Respon:</strong> 42 Detik (SLA Baik)
                </div>
                <div class="wa-bubble-time">
                    11:33 <i class="fa-solid fa-check-double"></i>
                </div>
            `;
            waChatBody.appendChild(waClaim);
            waChatBody.scrollTop = waChatBody.scrollHeight;
        });

        document.getElementById('btn-ticket-close').addEventListener('click', () => {
            const closeMsg = document.createElement('div');
            closeMsg.className = 'discord-msg';
            closeMsg.innerHTML = `
                <div class="discord-avatar" style="background: #da373c">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div class="discord-msg-content">
                    <div class="discord-user-row">
                        <span class="discord-username">1Die Dispatcher</span>
                        <span class="discord-bot-badge badge-garuda">TICKET CLOSED</span>
                        <span class="discord-timestamp">Baru saja</span>
                    </div>
                    <div class="discord-embed" style="--embed-border: #da373c">
                        <div class="embed-title">🔒 Tiket #1049 Berhasil Diselesaikan</div>
                        <div class="embed-desc">Masalah warga terselesaikan. Transkrip HTML otomatis diarsipkan dan laporan ringkasan dikirimkan ke WhatsApp Owner.</div>
                    </div>
                </div>
            `;
            garudaChatArea.appendChild(closeMsg);

            const waClose = document.createElement('div');
            waClose.className = 'wa-bubble';
            waClose.innerHTML = `
                <div class="wa-bubble-header" style="color: #53bdeb">
                    <i class="fa-solid fa-file-invoice"></i> LAPORAN TIKET SELESAI
                </div>
                <div class="wa-bubble-content">
                    📋 <strong>Tiket #1049 Selesai & Ditutup</strong><br>
                    <strong>Durasi Pengerjaan:</strong> 3 Menit 15 Detik<br>
                    <strong>Rating Warga:</strong> ⭐⭐⭐⭐⭐ (5/5 Bintang)<br>
                    <strong>Transkrip:</strong> HTML Log tersimpan
                </div>
                <div class="wa-bubble-time">
                    11:34 <i class="fa-solid fa-check-double"></i>
                </div>
            `;
            waChatBody.appendChild(waClose);
            waChatBody.scrollTop = waChatBody.scrollHeight;
        });
    }

    // TAB 4: 1Die Attendance Core
    function renderAbsensiSimulator() {
        const currentData = absensiData[absensiPage - 1];

        simContainer.innerHTML = `
            <div class="discord-window">
                <div class="discord-window-header">
                    <div class="discord-window-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div class="discord-channel-info">
                        <i class="fa-solid fa-hashtag"></i>
                        <span>rekap-absensi-gang</span>
                    </div>
                    <div class="discord-header-badges">
                        <span class="badge-live"><i class="fa-solid fa-circle"></i> 1DIE PROTOCOL SYNC</span>
                    </div>
                </div>

                <div class="discord-chat-area" id="absensi-chat-area">
                    <div class="discord-msg">
                        <div class="discord-avatar" style="background: #00F0FF; color: #0a0b10">
                            <i class="fa-solid fa-file-lines"></i>
                        </div>
                        <div class="discord-msg-content">
                            <div class="discord-user-row">
                                <span class="discord-username">1Die Attendance Core</span>
                                <span class="discord-bot-badge">BOT</span>
                                <span class="discord-timestamp" id="absensi-timestamp">Hari ini pukul 01:05 WIB</span>
                            </div>

                            <div class="discord-embed" style="--embed-border: #00F0FF">
                                <div class="embed-author"><i class="fa-solid fa-car"></i> 1DIE ENGINE • FIVEM ATTENDANCE REPORT</div>
                                <div class="embed-title">📊 Laporan Absensi Harian: ${currentData.gang}</div>
                                <div class="embed-desc">Rekapitulasi kehadiran pemain in-game GTA V FiveM untuk sesi malam ini. Seluruh data diverifikasi langsung melalui FiveM Server Protocol Pipeline.</div>

                                <div class="embed-fields">
                                    <div class="embed-field">
                                        <div class="field-name">👥 Total Anggota Gang</div>
                                        <div class="field-val">${currentData.total} Member Terdaftar</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">🔥 Kehadiran Sempurna</div>
                                        <div class="field-val" style="color: #57f287">${currentData.hadir} Member (${Math.round((currentData.hadir / currentData.total) * 100)}%)</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">⏱️ Status Sesi Terlaksana</div>
                                        <div class="field-val">${currentData.sesi}</div>
                                    </div>
                                    <div class="embed-field">
                                        <div class="field-name">⚠️ Member Alpha (Tidak Hadir)</div>
                                        <div class="field-val" style="color: #fca5a5">${currentData.alpha.join(', ')}</div>
                                    </div>
                                    <div class="embed-field full">
                                        <div class="field-name">🕒 Jadwal Sesi Malam (WIB)</div>
                                        <div class="field-val">19:05 • 20:05 • 21:05 • 22:05 • 23:05 • 00:05 • 01:05</div>
                                    </div>
                                </div>

                                <div class="embed-footer">
                                    <span>Halaman ${absensiPage} dari ${absensiData.length} Fraksi</span>
                                    <span>1Die WAL Engine • Zero Corrupt</span>
                                </div>
                            </div>

                            <div class="discord-buttons-row">
                                <button class="d-btn d-btn-secondary" id="btn-absensi-prev">
                                    <i class="fa-solid fa-chevron-left"></i> Prev Gang
                                </button>
                                <button class="d-btn d-btn-primary" id="btn-absensi-next">
                                    Next Gang <i class="fa-solid fa-chevron-right"></i>
                                </button>
                                <button class="d-btn d-btn-success" id="btn-absensi-refresh">
                                    <i class="fa-solid fa-rotate"></i> Refresh API
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('btn-absensi-prev').addEventListener('click', () => {
            absensiPage = absensiPage > 1 ? absensiPage - 1 : absensiData.length;
            renderAbsensiSimulator();
        });

        document.getElementById('btn-absensi-next').addEventListener('click', () => {
            absensiPage = absensiPage < absensiData.length ? absensiPage + 1 : 1;
            renderAbsensiSimulator();
        });

        document.getElementById('btn-absensi-refresh').addEventListener('click', (e) => {
            const btn = e.currentTarget;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menghubungkan Protocol...';
            setTimeout(() => {
                renderAbsensiSimulator();
            }, 700);
        });
    }

    // Switch Sandbox Tabs
    function switchSimulatorTab(tabKey) {
        simTabBtns.forEach(btn => {
            if (btn.getAttribute('data-sim') === tabKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (tabKey === 'qrispay') renderQRISSimulator();
        else if (tabKey === 'antiphish') renderAntiphishSimulator();
        else if (tabKey === 'waalert') renderWAAlertSimulator();
        else if (tabKey === 'absensi') renderAbsensiSimulator();
    }

    simTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchSimulatorTab(btn.getAttribute('data-sim'));
        });
    });

    // -------------------------------------------------------------------------
    // 5. FAQ ACCORDION
    // -------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // -------------------------------------------------------------------------
    // 6. MOBILE NAVIGATION TOGGLE
    // -------------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // 7. BACK TO TOP BUTTON
    const btnBackToTop = document.getElementById('btn-back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnBackToTop.classList.add('show');
        } else {
            btnBackToTop.classList.remove('show');
        }
    });

    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 8. INTERACTIVE TIME & COST SAVER CALCULATOR
    const calcSlider = document.getElementById('calc-range-slider');
    const calcDisplay = document.getElementById('calc-slider-display');
    const calcHours = document.getElementById('calc-hours-saved');
    const calcCost = document.getElementById('calc-cost-saved');

    if (calcSlider) {
        calcSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value, 10);
            calcDisplay.textContent = `${val} Sesi / Transaksi`;
            
            // Dynamic formula
            const hours = Math.round(val * 3);
            const cost = val * 100000;
            
            calcHours.textContent = `${hours} Jam`;
            calcCost.textContent = `Rp ${cost.toLocaleString('id-ID')}+`;
        });
    }

    // Utility: Escape HTML
    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Initial render
    renderProducts('all');
    switchSimulatorTab('qrispay');
});
