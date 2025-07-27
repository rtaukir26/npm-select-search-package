# react-select-search-sm

A lightweight and customizable React dropdown component with support for:

- ✅ Single and Multi Select modes
- 🔍 Searchable options
- ✨ Clean and flexible UI

---

## Demo

![Demo](./src/assets/selectSearchDemo.gif)

## Installation

```bash
npm install react-select-search-sm
```

## Import CSS

To apply the default styles, import the CSS file in your root component or wherever appropriate:

```bash
import "react-select-search-sm/dist/index.css";
```

## Usage in ReactJs

```bash
import React, { useState } from "react";
import SelectSearch from "react-select-search-sm";
import "react-select-search-sm/dist/index.css";

const options = [
{ name: "Option A", value: "A" },
{ name: "Option B", value: "B" },
];

function App() {
const [selected, setSelected] = useState([]);

return (
<SelectSearch
options={options}
selectedOption={selected}
setSelectedOption={setSelected}
multi={false} // true -- for multi select
label="Select item"
searchPlaceholder="Search"
handleChange=null
/>
);
}

export default App;

```

## Props

| Prop                | Type       | Default           | Description                                                   |
| ------------------- | ---------- | ----------------- | ------------------------------------------------------------- |
| `options`           | `array`    | `[]`              | List of options (each with `name` and `value` keys)           |
| `selectedOption`    | `array`    | `[]`              | Currently selected option(s)                                  |
| `setSelectedOption` | `function` | `() => {}`        | Setter to update selected option(s)                           |
| `multi`             | `boolean`  | `false`           | Enables multi-select mode if `true`, single-select if `false` |
| `label`             | `string`   | `"Select"`        | Placeholder label shown when nothing is selected              |
| `searchPlaceholder` | `string`   | `"search.."`      | Placeholder inside the search input                           |
| `notFound`          | `string`   | `"No data found"` | Text shown when no options match the search term              |
| `handleChange`      | `function` | `null`            | Optional callback triggered when selection changes            |
