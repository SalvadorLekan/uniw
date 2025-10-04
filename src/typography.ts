import plugin from "tailwindcss/plugin.js";

const typography = plugin(({ theme, matchUtilities, addUtilities }) => {
  matchUtilities(
    {
      "text-body": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.bodyFont", "'Work Sans'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: value[2] + "em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: body,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-alt-body": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.altBodyFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: "-0.01em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: altBody,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-alt-headline": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.altHeadingFont", "'Work Sans'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: "-0.06em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: altHeadline,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-headline": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.headingFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: "-0.01em",
          fontWeight: modifier || 400,
        };
      },
    },
    {
      values: headline,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      "text-display": (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.headingFont", "'Tomato Grotesk'"),
          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: "-0.01em",
          fontWeight: modifier || 500,
        };
      },
    },
    {
      values: display,
      modifiers: theme("fontWeight"),
    }
  );

  matchUtilities(
    {
      text: (value, { modifier }) => {
        if (!Array.isArray(value)) {
          return null;
        }

        return {
          fontFamily: theme("typography.bodyFont", "'Work Sans'"),

          fontSize: value[0] + "rem",
          lineHeight: value[1].toString(),
          letterSpacing: value[2] + "em",
          fontWeight: modifier || value[3],
        };
      },
    },
    {
      values: others,
      modifiers: theme("fontWeight"),
      type: "lookup",
    }
  );

  // addUtilities({
  //   ".text-body-medium\\/semibold": {
  //     letterSpacing: "-0.02em",
  //   },
  // });

  // addUtilities({
  //   ".text-body-small\\/semibold": {
  //     letterSpacing: "-0.02em",
  //   },
  // });
});

type TypographyValues = Record<string, [fontSize: number, lineHeight: number]>;
type TypographyBodyValues = Record<string, [fontSize: number, lineHeight: number, letterSpacing: number]>;
type TypographyOthersValues = Record<
  string,
  [fontSize: number, lineHeight: number, letterSpacing: number, fontWeight: number]
>;

const body: TypographyBodyValues = {
  "button-text": [0.875, 1.1429, -0.04],
  "paragraph-large": [1, 1.5, -0.04],
  "paragraph-medium": [0.875, 1.7143, -0.04],
  large: [1, 1.5, -0.03],
  medium: [0.875, 1.4286, -0.03],
  small: [0.75, 1.3333, -0.03],
  "labels-large": [0.875, 1.4286, 0.16],
  "labels-medium": [0.75, 1.3333, 0.16],
  "labels-small": [0.625, 1.4, -0.02],
  "labels-alt-small": [0.625, 1.4, 0.16],
} as const;

const altBody: TypographyValues = {
  large: [1, 1.1875],
  "mid-weight": [0.875, 1.1429],
  small: [0.75, 1.1667],
  label: [0.625, 1.2],
  "small-label": [0.5, 1.75],
};

const headline: TypographyValues = {
  xxl: [3, 1.2083],
  "mid-xl": [2.25, 1.1667],
  xl: [2, 1.1875],
  "mid-large": [1.75, 1.2143],
  large: [1.5, 1.2083],
  mw: [1.25, 1.2],
  small: [1.125, 1.2222],
};

const altHeadline: TypographyValues = {
  xl: headline.xl,
};

const display: TypographyValues = {
  small: [3.5, 1.1964],
  md: [4, 1.2031],
  large: [4.5, 1.1944],
};

const others: TypographyOthersValues = {
  "tag-text": [0.75, 1.6667, 0.1, 500],
  small: [0.75, 1.5833, -0.04, 400],
  caption: [0.75, 1.1667, -0.03, 500],
};

export default typography;
