new Vue({
    el: '#app',
    data: {
        name: '',
        level: '',
        digimons: [],
        allDigimons: []
    },
    methods: {
        getDigimonByName: function() {
            this.digimons = this.allDigimons.filter(digimon => digimon.name.toLowerCase().includes(this.name.toLowerCase()));
        },
        getDigimonByLevel: function() {
            fetch(`https://digimon-api.vercel.app/api/digimon/level/${this.level}`)
                .then(response => response.json())
                .then(data => {
                    this.digimons = data;
                })
                .catch(err => console.error(err));
        },
        getAllDigimon: function() {
            fetch('https://digimon-api.vercel.app/api/digimon')
                .then(response => response.json())
                .then(data => {
                    this.allDigimons = data;
                })
                .catch(err => console.error(err));
        }
    },
    created: function() {
        this.getAllDigimon();
    }
});
