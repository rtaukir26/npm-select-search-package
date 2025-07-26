# react-select-search-sm

A lightweight and customizable React dropdown component with support for:

- ✅ Single and Multi Select modes
- 🔍 Searchable options
- ✨ Clean and flexible UI

---

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
/>
);
}

export default App;

```

## Props

| Prop                | Type       | Default     | Description                                  |
| ------------------- | ---------- | ----------- | -------------------------------------------- |
| `options`           | `array`    | `[]`        | List of options with `name` and `value` keys |
| `selectedOption`    | `array`    | `[]`        | Currently selected options                   |
| `setSelectedOption` | `function` | `() => {}`  | Setter to update selected option(s)          |
| `multi`             | `boolean`  | `false`     | Enable multi-select mode                     |
| `onChange`          | `function` | `undefined` | Optional callback when selection changes     |
