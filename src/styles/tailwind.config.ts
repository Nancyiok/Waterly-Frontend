export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-dark": "#25537A",
                primary: "#4A9BD1",
                "primary-light": "#74B4DE",
                "primary-soft": "#A9D4EC",
                "primary-foam": "#E8F4FB",
                accent: "#00AEC0",
                "accent-dark": "#077C8B",
                "neutral-50": "#F4F7F9",
                "neutral-100": "#E8EDF1",
                "neutral-300": "#C4CDD5",
                "neutral-500": "#7B8794",
                "neutral-900": "#2D3B45",
                success: "#3DBE8B",
                "success-light": "#E6F7F0",
                warning: "#E8A94A",
                "warning-light": "#FDF4E3",
                danger: "#D9695F",
                "danger-light": "#FBEAE8",
            },
            boxShadow: {
                "panel-hover":
                    "0 2px 4px -2px rgb(37 83 122 / 0.08), 0 8px 20px -4px rgb(37 83 122 / 0.14)",
            },
            backgroundImage: {
                "sky-gradient":
                    "linear-gradient(90deg, #4A9BD1 0%, #74B4DE 100%)",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
};