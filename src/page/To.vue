<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-200 to-blue-500 flex items-center justify-center p-4">
        <div class="card w-full max-w-5xl bg-white shadow-xl border border-gray-300 p-6 md:p-8 rounded-xl space-y-6" data-aos="fade-up">
            <!-- Header -->
            <div class="text-center space-y-4" data-aos="fade-down">
                <h1 class="text-6xl font-bold text-blue-800">Undangan Wisuda 😊</h1>
                <p class="text-2xl text-gray-700">Politeknik Negeri Ambon</p>
            </div>

            <!-- Konten Utama -->
            <div class="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0">
                <!-- Gambar -->
                <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8" data-aos="zoom-in">
                    <img :src="foto" alt="Foto Wisuda"
                        class="w-64 h-80 rounded-lg shadow-lg object-cover border-4 border-indigo-700" />
                </div>

                <!-- Data Wisuda -->
                <div class="flex-grow text-center md:text-left space-y-4">
                    <p class="text-3xl font-bold">Dengan hormat 😊,</p>
                    <p class="text-base text-gray-600">
                        Kami mengundang Anda untuk menghadiri acara <span class="font-semibold">{{ acara }}</span> yang
                        diselenggarakan oleh <span class="font-semibold">{{ penyelenggara }}</span>.
                    </p>
                    <div class="rounded-lg bg-gray-100 shadow p-6 space-y-4" data-aos="fade-up">
                        <div>
                            <p class="text-sm text-gray-500">Nama Tamu:</p>
                            <p class="text-lg font-semibold text-gray-800">{{ nama }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Tanggal:</p>
                            <p class="text-lg font-semibold text-gray-800">{{ tanggal }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Waktu:</p>
                            <p class="text-lg font-semibold text-gray-800">{{ waktu }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="divider mt-8" data-aos="fade-up">Lokasi Acara</div>

            <!-- Peta Google Maps -->
            <div class="w-full h-96" data-aos="zoom-in">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.54987808926893!2d128.27738860091785!3d-3.612832889667739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6cedb2bf5f3f2b%3A0x3e82961c9b2a530d!2sHOREB%20PULSA!5e1!3m2!1sid!2sid!4v1735269941051!5m2!1sid!2sid"
                    style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    class="w-full h-full rounded-lg shadow-lg"></iframe>
            </div>

            <!-- Info Tambahan -->
            <div class="card bg-gray-50 p-6 rounded-lg shadow mt-6" data-aos="fade-up">
                <h2 class="card-title text-2xl font-semibold mb-4">Informasi Tambahan</h2>
                <ul class="list-disc list-inside text-gray-700">
                    <li>Harap membawa undangan ini pada saat menghadiri acara.</li>
                    <li>Pakaian formal dan sopan 😊.</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
import foto from '../assets/foto.jpg';

import { useRoute } from "vue-router";
const route = useRoute();
const nama = route.params.nama;
const acara = 'Wisuda Politeknik Negeri Ambon';
const tanggal = '28 Desember 2024';
const waktu = '15:00 WIT';
const lokasi = 'Waitatiri';
const penyelenggara = 'Politeknik Negeri Ambon';
</script>

<style scoped>
.divider {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: #4a5568;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>