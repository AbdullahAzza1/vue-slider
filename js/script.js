const slides = [
    {
        immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
        titolo: 'Tramonto sulla spiaggia',
        descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.'
    },
    {
        immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
        titolo: 'Montagne innevate',
        descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
    },
    {
        immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
        titolo: 'Campi verdi',
        descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
    }
];

const { createApp } = Vue;

const opzioni = {
    data() {
        return {
            item: [
                {
                    titolo: 'Tramonto sulla spiaggia',
                    descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.',
                    pict: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg'
                },
                {
                    titolo: 'Montagne innevate',
                    descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.',
                    pict: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg'
                },
                {
                    titolo: 'Campi verdi',
                    descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.',
                    pict: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg'
                }
            ],
            slideNumber: 0
        }
    },
    methods: {
        back() {
            this.slideNumber--;
        },
        next() {
            this.slideNumber++;
        }
    }
}

createApp(opzioni).mount('#app')