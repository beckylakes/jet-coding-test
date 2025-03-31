# JET Early Careers Software Engineering Program - Coding Assignment

## Summary
A responsive web application that displays 10 restaurants based on user's postcode input, showing all required data points (name, cuisines, rating, and address).

*Built with scalability, efficiency and best practices in mind.*

[![Live Demo](https://img.shields.io/badge/Live_Demo-Available-success)](https://jet-coding-test.vercel.app/)

## Brief Implementation
- ✅ Displays all 4 required data points (name, cuisines, rating, address)  
- ✅ Limits to first 10 restaurants  
- ✅ README includes complete project instructions  
- ✅ Documents all assumptions made and things that were unclear  
- ✅ Lists retrospective improvements and improvements I would implement  
- ✅ GitHub repository with full commit history

## Features
- Postcode-based restaurant search
- Clean, responsive card layout
- Displays all required restaurant data:
  - Name
  - Cuisine types
  - Rating
  - Address
- Input validation
- Mobile-friendly design
- Unit and Integration tests


## Technology Stack
| Technology      | Version   | Purpose                          | Key Benefits                          |
|-----------------|-----------|----------------------------------|---------------------------------------|
| **JavaScript**      | -      | Coding Language                   | Native to Browsers, Fullstack Capability, Strong Community Support          |
| **Next.js**     | 15.0.0    | React Framework                  | SSR, File-system API Routes  |
| **Tailwind CSS**| ^3.0      | Styling                         | Utility Classes, Responsive Design      |
| **React**       | ^19.0.0   | UI Components                   | Reusable Components, State Control                   |
| **query-string**| ^9.1.1    | URL Parameter Handling          | Parsing/stringifying for Dynamic URLs           |
| **Vercel**      | -         | Deployment                      | Native hosting for Next.js                |
| **ESLint**      | ^9.0      | Code Linting                    | Enforces code consistency             |


## How to run the project
### Prerequisites 
To run this project locally, please ensure you have the following installed:
* Node.js (minimum version: 18.18.0)

### Installation
1. Clone this repository:
```bash
git clone https://github.com/beckylakes/jet-coding-test
```
2. Navigate to the project directory:
```bash
cd jet-coding-test
```
3. Install dependencies:
```bash
npm install
```
4. Run the project locally:
```bash
npm run dev
```
*This will start your local development server, and can be accessed via your browser at http://localhost:3000/*.

5. Run tests using:
```bash
npm run test
```

6. Create a '.env' file with the following:
```bash
JET_API=http://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/
```
*Based on best practices, this has been extracted into a .env file for security despite being a public API*

## Project Timeline - Overview
* **Day 1**: Requirements analysis, research, wireframing, user stories, initial project setup
* **Day 2**: Core functionality implementation for MVP
* **Day 3+**: Styling, optimising code, debugging, writing tests & editing README

## Planning
Please refer to my files "Planning for JET" and "wireframe" to see more on my planning roadmap, otherwise view git history to view my iterative improvements.
### MVP User Stories:
* As a user, when I input my postcode I am shown a list of restaurants with correlating information for that postcode
* As a user, when I input an invalid postcode I am shown no correlating results/restaurants
* As a user, when I don't input any postcode I am shown no new results/restaurants


## Assumptions / Unclear Points
* **Data Consistency**: Assumed API responses to contain array of objects with consistent fields:
    - { name: String, cuisines: Array, rating.starRating: Number, address: { firstLine: String, city: String } }
* **Default Location**: Used "EC4M7RF" to fetch data (can immediately be replaced upon user input) on first load to:
  - Show users UI on first load
  - Test API connection during development
* **Error Handling**: Did not differentiate between invalid / valid postcodes with no restaurants
    - Handled empty arrays as "no results" case
* **Data Display**: Displayed ratings as decimal number with star (or "No rating" if new restaurant), and limited cuisines to first 2 items to:
  - Avoid irrelevant cuisine names such as "Low Delivery Fee"
  - Achieve visual consistency on each card
* **Input Handling**: Handled postcode inputs with and without spaces (e.g. "EC4M7RF" or "EC4M 7RF"), blocked special characters or emojis and empty inputs
* **Performance**: Assumed that load times under 3 seconds are acceptable for users
* **Browsers**: Assumed that interface can run on modern browsers (Chrome, Firefox, Safari)

### Unclear Requirements
* No requirements outlined for:
  - Writing tests
  - API failure handling
  - Empty result handling:
    - Added basic component to show empty result array
  - Loading:
    - No loading indicators in MVP or caching
  - Pagination: specification did not indicate if "show 10 restaurants" meant:
    - Only display 10 results from API
    - Using pagination, display 10 results per page
  - Using component libraries


## Areas for Improvement
### Improvements upon retrospection
* Implement TDD through unit, integration and E2E testing
* Utilise TypeScript for better data typing and control
* Change homepage to just SearchBar, where user must input their postcode to reduce unnecessary calls to API
* Use component libraries to be more time efficient

### Future scope improvements
* **Enhance Functionality and UI**:
  - Auto-detect with geolocation API to suggest nearby restaurants to user on page load (note: considerations for user security/privacy)
  - Sort and filter options (e.g. by rating, by cuisine, by name etc.)
  - Add loading spinner/skeletons during API data fetching
  - Add Restaurant detail pages
  - Add dark mode toggle
  - Add hamburger menu for mobile devices
  - User login/signup functionality
  - Results pagination
  - Migrate to TypeScript
  - Component testing on front-end

* **Improve Accessibility**:
  - Keyboard navigation support (e.g. submit button for SearchBar, 'Back to Top' button)
  - ARIA labels for screen readers

## Testing / Quality Checks
* Implemented unit and integration testing using Jest and Supertest, making mock functions to test data and reduce calls to API.
* Utilised tools such as Insomnia, DevTools and manual testing to check for bugs and edge cases such as:
    - Invalid postcodes
    - Invalid characters
    - Postcodes with no restaurants (e.g. "ZE2")