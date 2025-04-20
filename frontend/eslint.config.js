import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    /* ----‑‑‑‑‑‑‑‑ PLUGINS ‑‑‑‑‑‑‑‑‑---- */
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    /* ----‑‑‑‑‑‑‑‑ SETTINGS ‑‑‑‑‑‑‑‑‑---- */
    // Gives the plugin information about the React version
    settings: {
      react: { version: "detect" }, // auto‑detect from package.json :contentReference[oaicite:1]{index=1}
    },

    /* ----‑‑‑‑‑‑‑‑ RULES ‑‑‑‑‑‑‑‑‑‑‑‑---- */
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      /* ⬇️  ОВЕРРАЙДИ  ⬇️ */
      "react/react-in-jsx-scope": "off", // Disables deprecated React import validation  (import React from "react")
      "react/jsx-uses-react": "off", // більше не потрібне
      "react/prop-types": "off", // вимкнути перевірку PropTypes
      // (або лишіть увімкненою і пропишіть PropTypes, якщо хочете)

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];
