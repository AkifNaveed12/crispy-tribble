# CrispyTribble

A modern recipe discovery web application built with React and Tailwind CSS. CrispyTribble allows users to search for recipes, explore detailed recipe information, and save their favorite recipes.

## Features

- Search recipes by ingredient or dish name
- Browse recipe search results
- View detailed recipe information
- Display recipe ingredients, publisher, and cooking information
- Add and remove recipes from favorites
- Dedicated favorites page
- Responsive design for desktop and mobile
- Clean and minimal user interface
- Client-side routing with React Router
- Recipe data powered by the Forkify API

## Demo



https://github.com/user-attachments/assets/3ff68061-163f-4f79-bd33-e1ec9787ad24



## Live web link
https://crispytribble.vercel.app/

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Router

### API

- Forkify API

## Project Structure

```text
crispyTribble/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── navbar/
│   │       └── Navbar.jsx
│   ├── context/
│   │   └── context.jsx
│   ├── pages/
│   │   ├── details/
│   │   │   └── Details.jsx
│   │   ├── favorites/
│   │   │   └── Favorites.jsx
│   │   └── home/
│   │       └── Home.jsx
│   ├── recipe-list/
│   │   └── RecipeItem.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/AkifNaveed12/crispy-tribble.git
```

Navigate to the project directory:

```bash
cd crispy-tribble
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Application Flow

### 1. Search

Users enter an ingredient or dish name into the search bar.

### 2. Fetch Recipes

The application sends the search query to the Forkify API and retrieves matching recipes.

### 3. Browse Results

The returned recipes are displayed as responsive recipe cards containing the recipe image, publisher, title, and recipe details link.

### 4. View Recipe Details

Users can open an individual recipe to view its detailed information and ingredients.

### 5. Manage Favorites

Users can add recipes to their favorites and remove them when no longer needed.

## State Management

The application uses the React Context API to manage shared application state.

The global context handles:

- Search query
- Recipe results
- Loading state
- Recipe details
- Favorites
- Search submission
- Adding and removing favorites

## API Integration

CrispyTribble uses the Forkify API to retrieve recipe data.

### Recipe Search

```text
GET https://forkify-api.jonas.io/api/v2/recipes?search={query}
```

### Recipe Details

```text
GET https://forkify-api.jonas.io/api/v2/recipes/{id}
```

The API provides information such as:

- Recipe title
- Publisher
- Recipe image
- Ingredients
- Cooking time
- Servings
- Recipe source

## React Concepts Demonstrated

This project demonstrates practical React development concepts including:

### React Hooks

- `useState`
- `useEffect`
- `useContext`

### Component Architecture

The application is divided into reusable components and pages for:

- Navigation
- Recipe cards
- Home page
- Recipe details
- Favorites

### Routing

React Router is used for client-side navigation and dynamic recipe detail routes.

### API Handling

The application uses the Fetch API with asynchronous JavaScript to retrieve recipe data.

### Conditional Rendering

Different UI states are rendered based on:

- Loading state
- Search results
- Empty results
- Favorite recipes

## Responsive Design

The interface is built with Tailwind CSS and adapts to different screen sizes, including:

- Desktop
- Tablet
- Mobile

## Future Improvements

### Persistence

- Store favorites using `localStorage`

### User Experience

- Add improved loading states
- Add API error handling
- Add search debouncing
- Add recipe categories and filters

### Functionality

- Add pagination or load-more functionality
- Add recipe sharing
- Add more detailed recipe information

### Production

- Improve accessibility
- Optimize images and performance
- Deploy the production build

## License

This project was developed for learning and portfolio purposes.
