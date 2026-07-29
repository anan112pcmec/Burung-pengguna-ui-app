<script lang="ts">
    import { Full } from "../../../../constant/UiConstant";
</script>

<!-- 64100593 -->

<section id="otp-validation" class="{Full} fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/20 backdrop-blur-xs">
    <div class="w-full max-w-sm border border-zinc-950/10 bg-white p-6 mt-[3rem] sm:p-8 rounded-sm space-y-4 shadow-xl">
        
        <!-- Header -->
        <div class="border-b border-zinc-950/10 pb-2 grid grid-cols-[80%_20%]">
           <div> <span class="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase block">
                SECURITY CHECK
            </span>
            <h1 class="text-lg font-bold tracking-tight text-slate-950 mt-0.5">
                VERIFIKASI OTP
            </h1></div>
           <div class=" pl-10"> 
                <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path opacity="0.4" d="M2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906ZM8.78362 10.7354L10.9388 12.8906L8.78362 15.0458C8.49073 15.3387 8.49073 15.8136 8.78362 16.1065C9.07652 16.3994 9.55139 16.3994 9.84428 16.1065L11.9995 13.9513L14.1546 16.1064C14.4475 16.3993 14.9224 16.3993 15.2153 16.1064C15.5082 15.8135 15.5082 15.3387 15.2153 15.0458L13.0602 12.8906L15.2153 10.7355C15.5082 10.4426 15.5082 9.96771 15.2153 9.67482C14.9224 9.38192 14.4475 9.38192 14.1546 9.67482L11.9995 11.83L9.84428 9.67475C9.55139 9.38186 9.07652 9.38186 8.78362 9.67475C8.49073 9.96764 8.49073 10.4425 8.78362 10.7354Z" fill="#343C54"/><path d="M8.78363 9.67475C8.49074 9.96764 8.49074 10.4425 8.78363 10.7354L10.9389 12.8906L8.78363 15.0458C8.49074 15.3387 8.49074 15.8136 8.78363 16.1065C9.07653 16.3994 9.5514 16.3994 9.84429 16.1065L11.9995 13.9513L14.1547 16.1064C14.4476 16.3993 14.9224 16.3993 15.2153 16.1064C15.5082 15.8135 15.5082 15.3387 15.2153 15.0458L13.0602 12.8906L15.2153 10.7355C15.5082 10.4426 15.5082 9.96771 15.2153 9.67482C14.9224 9.38192 14.4476 9.38192 14.1547 9.67482L11.9995 11.83L9.84429 9.67475C9.5514 9.38185 9.07653 9.38185 8.78363 9.67475Z" fill="#343C54"/></svg>
           </div>
        </div>

        <!-- Description -->
        <p class="text-xs text-zinc-500 leading-relaxed">
            Masukkan 6 digit kode verifikasi yang telah dikirimkan ke email atau perangkat terdaftar Anda.
        </p>

        <!-- OTP Input Fields -->
        <div class="flex items-center justify-between gap-2 pt-1">
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
            <input 
                type="text" 
                maxlength="1" 
                class="w-10 h-12 text-center bg-zinc-50 border border-zinc-950/10 rounded-2xs text-base font-bold text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white transition"
            />
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
            <button 
                type="button" 
                class="w-full h-10 bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 border border-slate-950 rounded-2xs transition cursor-pointer flex items-center justify-center gap-2"
            >
                <span>VERIFIKASI</span>
                <span>&rarr;</span>
            </button>
        </div>

        <!-- Resend Link -->
        <div class="border-t border-zinc-950/10 pt-4 text-center text-[11px]">
            <span class="text-zinc-500">Tidak menerima kode?</span>
            <a href="#resend" class="font-bold text-slate-950 hover:underline ml-1">
                KIRIM ULANG
            </a>
        </div>

    </div>
</section>