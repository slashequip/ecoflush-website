document.addEventListener("DOMContentLoaded", function() {
    var fancyForm = new Vue({
        el: '#fancyForm',
        data: function () {
            return {
                section: 1,
                form: {
                    boiler_type: null,
                    age: null,
                    dirty_water: null,
                    cold_spots: null,
                    flushed_before: null,
                    filter: null,
                    tap: null,
                    rad_count: null,
                    name: null,
                    email: null,
                    postcode: null,
                    phone: null,
                    consent: false,
                },
                submitting: false,
                error: false,
                error_message: null,
            }
        },
        computed: {
            summary: function () {
                return `
                    <p>You have a ${this.form.age} year old ${this.form.boiler_type} boiler, ${this.filterPrefix} a filter fitted.</p>
                    <p>You currently ${this.dirtyWaterPrefix} suffer from dirty water ${this.coldSpotsWording}.</p>
                    <p>You have ${this.form.rad_count} radiators in your home and they ${this.flushedBeforePrefix} been flushed before.</p>
                    <p>There ${this.outsideTapPrefix} an outside tap for us to use.</p>
                `;
            },
            filterPrefix: function () {
                return this.form.filter ? 'with' : 'without';
            },
            dirtyWaterPrefix: function () {
                return this.form.dirty_water ? 'do' : 'do not';
            },
            coldSpotsWording: function () {
                if( this.form.dirty_water && this.form.cold_spots ) {
                    return 'and cold spots are a problem too';
                } else if ( this.form.dirty_water && !this.form.cold_spots ) {
                    return 'but cold spots are not a problem';
                } else if ( !this.form.dirty_water && this.form.cold_spots ) {
                    return 'but cold spots are a problem';
                } else if ( !this.form.dirty_water && !this.form.cold_spots ) {
                    return 'and cold spots are not a problem either';    
                }
            },
            flushedBeforePrefix: function () {
                return this.form.flushed_before ? 'have' : 'have not';
            },
            outsideTapPrefix: function () {
                return this.form.tap ? 'is' : 'is not';
            }
        },
        methods: {
            next: function () {
                this.section = this.section + 1;
            },
            prev: function () {
                this.section = this.section - 1;
            },
            setBoilerType: function (type) {
                this.form.boiler_type = type;
                this.next();
            },
            setBoilerAge: function (age) {
                this.form.age = age;
                this.next();
            },
            setDirtyWater: function (dirty) {
                this.form.dirty_water = dirty;
                this.next();
            },
            setColdSpots: function (cold) {
                this.form.cold_spots = cold;
                this.next();
            },
            setFlushedBefore: function (answer) {
                this.form.flushed_before = answer;
                this.next();
            },
            setFilter: function (answer) {
                this.form.filter = answer;
                this.next();
            },
            setTap: function (answer) {
                this.form.tap = answer;
                this.next();
            },
            setRadCount: function (count) {
                this.form.rad_count = count;
                this.next();
            },
        }
    })
});