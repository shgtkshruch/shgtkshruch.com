import { css, Global } from "@emotion/react";
import { mq, theme } from "../variables";

const GlobalStyle: React.FC = () => (
  <Global
    styles={css`
      :root {
        --primary-color: ${theme.light.primaryColor};
        --bg-color: ${theme.light.bgColor};
        --accent-color: ${theme.light.accentColor};
      }
      .jp {
        font-family: "Sawarabi Gothic", "Yu Gothic", YuGothic,
          "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ",
          Meiryo, sans-serif;
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        line-height: 2.6;
        ${mq.pc} {
          font-size: 0.95rem;
        }
      }
    `}
  />
);

export default GlobalStyle;
