# EFUI with tailwindcss

## How can we consume a component library made using tailwindcss in a app not using tailwindcss?

The library will need to work kind of how bootstrap does, where we need to import a css file from the library, and then use it in the root of the app. Our component library styling becomes class based instead of CSS in JS.

so for example inside of \_app.tsx we would have something like this:

```tsx
import "efui/dist/index.css"
```

and then now the styles we defined in the library will apply to our components.

No need to install tailwindcss in the app, as we're just consuming the css file that tailwind generates for us.

Styling can be done through styled-components, or just using the class names that tailwind generates. tw-merge (used in the component library) helps with making these overrides possible

```tsx
import styled from "styled-components"
import { Button } from "efui"

const StyledButton = styled(Button)`
  background-color: red;
`

...
<Button className="bg-brand-primary-500">button</Button>
<StyledButton>button</StyledButton>
...
```

For an app that does you tailwind, we can give them a tailwind plugin to use or just a config to copy

## How does theming work?

### In the component library

We can define themes in the tailwind config, and those styles will becomes available in the generated css file. Each group of stylings will be available under a class name that includes the theme name.

For creating themes in tailwind, we can utilize [tw-colors](https://github.com/L-Blondy/tw-colors) to create different theme names, and give each a group of colors to include. The library will then generate the classes and css variables for us.

- config: [tailwind.config.js](https://github.com/ikusner13/tailwind-component-library/blob/main/packages/library/tailwind.config.ts)
- generated css: [dist/index.css](https://github.com/ikusner13/tailwind-component-library/blob/793e9fda36e185373b7f8c80143c252f3681bacc/packages/library/dist/index.css#L544)

If we want theme to expand beyond colors, we can use [tailwindcss-themer](https://github.com/RyanClementsHax/tailwindcss-themer) to create styles beyond colors in each theme

### In the app

We can define the theme name on the body tag, and then the styles will be applied to the components.

```html
<body class="theme-erena-light" data-theme="erena-light">
  <div id="__next"></div>
</body>
```

What I think would be the preferred way is to use [next-themes](https://github.com/pacocoursey/next-themes#differing-dom-attribute-and-theme-name). This helps with SSR, local storage, theme specific pages, and system preferences

```tsx
import { ThemeProvider } from "next-themes"

...
  return (
    <ThemeProvider
      defaultTheme="erena-light"
      themes={["erena-light", "erena-dark", "sidekick-light", "sidekick-dark"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
...
```

For FE using styled-components, we'll need to pass a theme object to the provider that matches what the class is, Similar to what we're doing now. This theme object needs to be made sure to be in sync with the `data-theme` applied on the body

## Things to note

- On FE the classes coming from tailwind clash with the classes from bootstrap. the bootstrap classes have `!important` on all of them pretty much, so it is currently a pain. bootstrap needs to be removed anyways

- all possible theme styles will be included with the css for every app. It's possible the unused themes can be shaken out by Next, but not certain

## Dev Resources

- [postcss](https://github.com/postcss/postcss-cli)
- [tsup](https://tsup.egoist.dev/#usage)
- [tw-colors](https://github.com/L-Blondy/tw-colors)
- [tailwindcss-themer](https://github.com/RyanClementsHax/tailwindcss-themer)
- [next-themes](https://github.com/pacocoursey/next-themes#differing-dom-attribute-and-theme-name)
- [tw-merge](https://github.com/dcastil/tailwind-merge)
- [class-variance-authority](https://github.com/joe-bell/cva)
- [shadcn UI](https://ui.shadcn.com/)
- [Chimera UI](https://www.chimera-ui.com/docs/introduction)
