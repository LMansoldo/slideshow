function css(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
}
const COLORS = {
    get primary() {
        return {
            50: css('--primary-50'),
            100: css('--primary-100'),
            200: css('--primary-200'),
            300: css('--primary-300'),
            400: css('--primary-400'),
            500: css('--primary-500'),
            600: css('--primary-600'),
            700: css('--primary-700'),
            800: css('--primary-800'),
            900: css('--primary-900'),
        };
    },
    get secondary() {
        return {
            50: css('--secondary-50'),
            100: css('--secondary-100'),
            200: css('--secondary-200'),
            300: css('--secondary-300'),
            400: css('--secondary-400'),
            500: css('--secondary-500'),
            600: css('--secondary-600'),
            700: css('--secondary-700'),
            800: css('--secondary-800'),
            900: css('--secondary-900'),
        };
    },
    get additional() {
        return {
            50: css('--additional-50'),
            100: css('--additional-100'),
            200: css('--additional-200'),
            300: css('--additional-300'),
            400: css('--additional-400'),
            500: css('--additional-500'),
            600: css('--additional-600'),
            700: css('--additional-700'),
            800: css('--additional-800'),
            900: css('--additional-900'),
        };
    },
    get error() {
        return {
            50: css('--error-50'),
            100: css('--error-100'),
            200: css('--error-200'),
            300: css('--error-300'),
            400: css('--error-400'),
            500: css('--error-500'),
            600: css('--error-600'),
            700: css('--error-700'),
            800: css('--error-800'),
            900: css('--error-900'),
        };
    },
    get danger() {
        return {
            50: css('--danger-50'),
            100: css('--danger-100'),
            200: css('--danger-200'),
            300: css('--danger-300'),
            400: css('--danger-400'),
            500: css('--danger-500'),
            600: css('--danger-600'),
            700: css('--danger-700'),
            800: css('--danger-800'),
            900: css('--danger-900'),
        };
    },
    get warning() {
        return {
            50: css('--warning-50'),
            100: css('--warning-100'),
            200: css('--warning-200'),
            300: css('--warning-300'),
            400: css('--warning-400'),
            500: css('--warning-500'),
            600: css('--warning-600'),
            700: css('--warning-700'),
            800: css('--warning-800'),
            900: css('--warning-900'),
        };
    }
};
export default COLORS;
