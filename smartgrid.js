var smartgrid = require("smart-grid");

var settings = {
  outputStyle: "scss",
  /* less || scss || sass || styl */
  columns: 12,
  /* number of grid columns */
  offset: "30px",
  /* gutter width px || % || rem */
  mobileFirst: false,
  /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: "1280px",
    /* max-width оn very large screen */
    fields: "30px" /* side fields */,
  },
  breakPoints: {
    notebookLg: {
      width: "1600px",
      /* -> @media (max-width: 1100px) */
    },
    notebook: {
      width: "1440px",
      /* -> @media (max-width: 1100px) */
    },
    xxl: {
      width: "1280px",
      /* -> @media (max-width: 1100px) */
    },
    xl: {
      width: "1220px",
      /* -> @media (max-width: 1100px) */
    },
    lg: {
      width: "1100px",
      /* -> @media (max-width: 1100px) */
    },
    md: {
      width: "992px",
    },
    sm: {
      width: "767px",
      fields:
        "15px" /* set fields only if you want to change container.fields */,
    },
    xs: {
      width: "360px",
    },
    /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
  },
};

smartgrid("./src/assets/scss/utils", settings);
