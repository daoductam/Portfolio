/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "476px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Các breakpoint 'max' cũng được định nghĩa ở đây
      "2xl-mx": { max: "1535px" },
      "xl-mx": { max: "1279px" },
      "lg-mx": { max: "1023px" },
      "md-mx": { max: "767px" },
      "sm-mx": { max: "639px" },
      "xs-mx": { max: "475px" },
    },
    extend: {
      colors: {
        bgColor: "#112240", // Tên màu bạn muốn dùng cho background
        primaryColor: "#64FFDA", // Tên màu chính (ví dụ: cho text, border, icon)
        textColor: "#8892B0", // Tên màu cho văn bản
      },
    },
  },
  plugins: [],
};
