<script lang="ts">
    import { fade } from "svelte/transition";
    import { Full } from "../../../../constant/UiConstant";
    import { goto } from "$app/navigation";

    // Mock Data berdasarkan Struct Go 'Pengguna'
    const user = {
        id_user: 452,
        username: "hafidz_al",
        nama: "Hafidz Al-Faruq",
        email: "hafidz.faruq@gmail.com",
        status: "Online",
        created_at: "2025-06-12T00:00:00Z"
    };

    // State untuk interaksi Svelte 5 Runes
    let isMuted = $state(false);
    let y = $state(0);
    let progress = $state(0);

    function toggleNotif() {
        isMuted = !isMuted;
    }

    function updateProgress() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const totalScroll = documentHeight - windowHeight;

        progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
    }

    $effect(() => {
        updateProgress();
    });
</script>

<svelte:window bind:scrollY={y} onscroll={updateProgress} />

<header class="bg-white border-b border-zinc-200 selection:bg-slate-900 selection:text-white sticky top-0 z-40 font-sans">
    
    <!-- TOP BAR: Brand Watermark & Scroll Progress -->
    <div class="{Full} px-6 py-1.5 flex items-center justify-between text-zinc-400 text-[10px] tracking-wider relative border-b border-zinc-100 font-mono">
        <div class="flex items-center gap-2 select-none">
            <!-- Icon User / Akun Minimalis SVG -->
            <svg class="w-3.5 h-3.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="font-bold tracking-widest text-slate-900 uppercase">BURUNG.COM</span>
            <span class="text-zinc-300">/</span>
            <span class="text-zinc-500 font-normal">PORTAL AKUN</span>
        </div>

        <div class="flex gap-3 items-center">
            <span class="text-[9px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded-xs">
                UID: #{user.id_user}
            </span>
            <button type="button" class="cursor-pointer hover:text-slate-900 transition px-1 py-0.5 rounded-xs" title="Opsi Akun">
                •••
            </button>
        </div>

        <!-- Scroll Progress Bar Indicator -->
        <div 
            class="absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-75 ease-out" 
            style="width: {progress}%"
        ></div>
    </div>  

    <!-- MAIN HEADER CONTENT: Layout Asimetris / Berbeda dari Seller & Kurir -->
    <section class="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-4 gap-4 min-h-[5.5rem]">
        
        <!-- BAGIAN KIRI: Navigasi Kembali & Profil Ringkas Pengguna -->
        <div class="flex items-center gap-4 w-full md:w-auto">
            <button 
                onclick={() => goto("/home")}
                type="button" 
                aria-label="Kembali"
                class="p-2 text-zinc-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition duration-200 cursor-pointer shrink-0"
            >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>

            <!-- Foto Avatar & Informasi Utama -->
            <div class="flex items-center gap-3">
               <div class="group relative overflow-visible w-12 h-12 rounded-full bg-zinc-50 border shrink-0 border-zinc-200">
                    <div class="w-full h-full rounded-full overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
                            alt={user.nama} 
                            class="w-full h-full object-cover transition duration-500 group-hover:scale-105 z-10" 
                        />
                    </div>
                    
                    <span 
                        class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white z-40 
                        {user.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-400'}"
                        title="Status: {user.status}"
                    >
                        {#if user.status === 'Online'}
                            <span class="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                        {/if}
                    </span>
                </div>

                <div class="flex flex-col justify-center min-w-0">
                    <div class="flex items-center gap-1.5 truncate">
                        <h1 class="text-sm font-bold text-slate-900 truncate tracking-tight">
                            {user.nama}
                        </h1>
                        <span class="text-[9px] font-mono bg-zinc-100 text-slate-700 px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 font-medium border border-zinc-200">
                            Personal
                        </span>
                    </div>
                    <span class="text-xs text-zinc-500 font-mono truncate">
                        @{user.username} • <span class="text-zinc-400">{user.email}</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- BAGIAN KANAN: Informasi Cepat & Tombol Kontrol Akun -->
        <div class="flex items-center justify-end gap-3 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-zinc-100">
            
            <!-- Quick Info Badge (Member Since) -->
        <div class="hidden lg:flex flex-col text-right font-mono pr-4 border-r border-zinc-200">
            <span class="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Status Keanggotaan</span>
            <div class="flex items-center justify-end gap-1.5 mt-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span class="text-[11px] font-bold text-slate-900 tracking-tight">Verified Member</span>
            </div>
            <span class="text-[9px] text-zinc-400 mt-0.5">Sejak {user.created_at}</span>
        </div>
            <!-- Mute / Unmute Notif Button -->
           

         
        </div>

    </section>
</header>