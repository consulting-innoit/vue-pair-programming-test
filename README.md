# Vue Pair Programming Test

This project is a simple Vue.js application designed for pair programming exercises. It includes basic components and functionality to help candidates demonstrate their skills in Vue.js development.

## Project Structure

```
vue-pair-programming-test
├── src
│   ├── components
│   │   ├── HelloWorld.vue
│   │   └── Counter.vue
│   ├── App.vue
│   ├── main.js
│   └── styles
│       └── main.css
├── public
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

- **HelloWorld.vue**: A simple component that displays a greeting message.
- **Counter.vue**: A component that implements a counter with increment and decrement functionality.

## Pair Programming Exercise

### Feature 1: List + Filter
- Add a list of 5 items to the app (in `Counter.vue` or a new `TodoList.vue`).
- Add a text input to filter items as the user types.
- Add a “no results” message when the filter matches nothing.

### Feature 2: Persistence + Reset
- Store the counter value (or list state) in `localStorage` whenever it changes.
- On mount, initialize state from `localStorage` if available.
- Add a “Reset” button that clears saved state and restores defaults.

### Bonus
- Extract filter input and behavior into a reusable component (e.g., `ItemFilter.vue`).
- Add a simple test (unit or integration) validating:
  - counter increments / decrements,
  - filter updates results correctly,
  - reset works.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd vue-pair-programming-test
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

This application serves as a foundation for pair programming sessions. Candidates can be asked to modify existing components, add new features, or fix bugs as part of the exercise.

## License

This project is licensed under the MIT License.