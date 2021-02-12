import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vuetify, {
    VRow,
    VCol,
    VTextField,
    VTooltip,
    VCheckbox,
    VSelect,
} from 'vuetify/lib';
import { Ripple, Intersect, Touch, Resize } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
    components: { VRow, VTooltip, VCol, VTextField, VCheckbox, VSelect },
    directives: { Ripple, Intersect, Touch, Resize },
});

const opts = {
    breakpoint: {
        mobileBreakpoint: 'sm' // This is equivalent to a value of 960
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#041637',
                secondary: '#0177FB',
                accent: '#82B1FF',
                error: '#ff4444',
                info: '#33b5e5',
                success: '#00C851',
                warning: '#ffbb33',
                subTextColor: '#B3B9C2',
                mainTextColor: '#041637',
                background: '#FAFAFB',
                justWhite: '#ffffff',
                "cardColor": '#ffffff',
                msgReciverColor: '#EEEEEF',

            },
            dark: {
                primary: '#ffffff',
                secondary: '#0177FB',
                accent: '#82B1FF',
                error: '#ff4444',
                info: '#33b5e5',
                success: '#00C851',
                warning: '#ffbb33',
                subTextColor: '#B3B9C2',
                mainTextColor: '#ffffff',
                background: '#292930',
                justWhite: '#ffffff',
                "cardColor": '#242731',
                msgReciverColor: '#EEEEEF',


            }

        }

    },
    options: {
        customProperties: true
    },
    icons: {
        iconfont: 'fa',
    },
    // rtl: localStorage.getItem('lang') !== null ? localStorage.getItem('lang') == 'en' ? false : true : false,
};

export default new Vuetify(opts);
