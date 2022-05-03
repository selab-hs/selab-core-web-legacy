import { css, Theme } from '@emotion/react';

export const GlobalStyle = (props: Theme) =>
  css`
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-color: theme('borderColor.DEFAULT', 'currentColor');
      border-style: solid;
      border-width: 0;
    }

    ::before,
    ::after {
      --tw-content: '';
    }

    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    a {
      color: inherit;
      text-decoration: inherit;
      cursor: pointer;
      outline: none;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
      font-family: theme(
        'fontFamily.mono',
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        'Liberation Mono',
        'Courier New',
        monospace
      );
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    table {
      text-indent: 0;
      border-spacing: 0;
      border-collapse: collapse;
      border-color: inherit;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      margin: 0;
      font-family: inherit;
      font-size: 100%;
      line-height: inherit;
      color: inherit;
    }

    button,
    select {
      text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      appearance: button;
      background-color: transparent;
      background-image: none;
    }

    :-moz-focusring {
      outline: auto;
    }

    :-moz-ui-invalid {
      box-shadow: none;
    }

    progress {
      vertical-align: baseline;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      appearance: textfield;
      outline-offset: -2px;
    }

    ::-webkit-search-decoration {
      appearance: none;
    }

    ::-webkit-file-upload-button {
      appearance: button;
      font: inherit;
    }

    summary {
      display: list-item;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    fieldset {
      padding: 0;
      margin: 0;
    }

    legend {
      padding: 0;
    }

    ol,
    ul,
    menu {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    textarea {
      resize: vertical;
    }

    button,
    [role='button'] {
      cursor: pointer;
    }

    :disabled {
      cursor: default;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    [hidden] {
      display: none;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      padding: 0;
      margin: 0;
      font-size: 100%;
      vertical-align: baseline;
      border: 0;
      scroll-behavior: smooth;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
      content: '';
      content: none;
    }

    button {
      padding: 0;
      overflow: visible;
      cursor: pointer;
      background: inherit;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    input:focus {
      outline: none;
    }

    textarea:focus {
      outline: none;
    }

    /* code highlight issue */
    .token.operator {
      background: transparent;
    }

    body {
      margin: 0;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
        sans-serif;
      line-height: inherit;
      color: ${props.colors.black};
      background: ${props.colors.background};
    }
  `;
