# nord4tailwind
HumanReadable and robust **Nord color palette** plugin for **Tailwind CSS**

<br/>
<p align="center"><b>❄Nordify your Tailwind CSS project❄</b></p>

<p align="center">
<img src="./assets/nordifiedtailwindcss.svg" width="80%"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/light/spaced.svg?sanitize=true" width="100%"/>
</p>

<br/>

## Installation + Setup (Just 2 steps to complete!!)
1. Run `npm install git+https://git@github.com/5ei74R0/nord4tailwind.git#2ee654099da19e596b86b4c79c484193d1c9549c` in your Tailwind CSS project directory to install.

1. Then add this plugin to your `tailwind.config.js` file:

    ```js
     | module.exports = {
     |     plugins: [
    +|         require('nord4tailwind'),
     |     ],
     | }
    ```

<br/>

## Usage
Just use as a new color name in your Tailwind CSS project. They work behind the tailwindcss' prefix! (e.g., `bg-`, `text-`)

For example:

```html
<div class="bg-nord-snow-2">
    <h3 class="text-nord0">❄Nordify your Tailwind CSS project❄</h3>
    <p class="text-nord-aurora-0">text-nord-aurora-0</p>
    <p class="text-nord-frost-3">text-nord-frost-3</p>
</div>
```

<br/>

## Three types of naming rules are available

### Human-readable color name like `nord-night-0`, `nord-snow-2`, `nord-aurora-0`
We defined human-readable name for each color. It is easier to tell what color it is than the following two.

<details><summary><em>[list: click to expand]</em></summary>

<br/>

- `nord-night-0`
- `nord-night-1`
- `nord-night-2`
- `nord-night-3`
- `nord-snow-0`
- `nord-snow-1`
- `nord-snow-2`
- `nord-frost-0`
- `nord-frost-1`
- `nord-frost-2`
- `nord-frost-3`
- `nord-aurora-0`
- `nord-aurora-1`
- `nord-aurora-2`
- `nord-aurora-3`
- `nord-aurora-4`

</details><br/>

### Official color name like `nord0` (c.f., [Nord documentation](https://www.nordtheme.com/docs/colors-and-palettes))

<details><summary><em>[list: click to expand]</em></summary>

<br/>

- `nord0` 
- `nord1`
- `nord2`
- `nord3`
- `nord4`
- `nord5`
- `nord6`
- `nord7`
- `nord8`
- `nord9`
- `nord10`
- `nord11`
- `nord12`
- `nord13`
- `nord14`
- `nord15`

</details><br/>

### Tailwindcss-style color name like `nord-0`

<details><summary><em>[list: click to expand]</em></summary>

<br/>

- `nord-0`
- `nord-1`
- `nord-2`
- `nord-3`
- `nord-4`
- `nord-5`
- `nord-6`
- `nord-7`
- `nord-8`
- `nord-9`
- `nord-10`
- `nord-11`
- `nord-12`
- `nord-13`
- `nord-14`
- `nord-15`

</details><br/>

<br/>

## Color palette


### Polar Night

<br/>

<p align="center">
<img src="./assets/2E3440.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/3B4252.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/434C5E.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/4C566A.svg" width="50%"/>
</p>


### Snow Storm

<br/>

<p align="center">
<img src="./assets/D8DEE9.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/E5E9F0.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/ECEFF4.svg" width="50%"/>
</p>


### Frost

<br/>

<p align="center">
<img src="./assets/8FBCBB.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/88C0D0.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/81A1C1.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/5E81AC.svg" width="50%"/>
</p>


### Aurora

<br/>

<p align="center">
<img src="./assets/BF616A.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/D08770.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/EBCB8B.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/A3BE8C.svg" width="50%"/>
</p>

<p align="center">
<img src="./assets/B48EAD.svg" width="50%"/>
</p>

<br/>

## Nord ([c.f.](https://www.nordtheme.com/))
<p align="center">
<img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/logos/heroes/logo-typography/light/frostic/nord6/spaced.svg?sanitize=true" width="25%"/>
</p>

Nord is **a color palette inspired by the arctic north**. It's a soft, warm, and nordic take on the usual cold blues you see in most color schemes. It's **designed to be easy on the eyes**, and it's great for code editors, terminal applications, and more.

<br/>

## Tailwind CSS ([c.f.](https://tailwindcss.com/))
<p align="center">
<img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" width="25%"/><br/>
</p>
As you know, Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It's a great tool for building responsive, mobile-first projects on the web.

