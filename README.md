# JET Coding Test

## MVP / Checklist ✅
* Get first 10 results of restaurants by postcode, with following info on each restaurant "card":
    - Name
    - Cuisines
    - Rating
    - Address

* README with information on:
    - how to build, compile, run project
    - any assumptions or unclear points on project
    - any improvements you would make to your solution
    - Send github link/deployed webapp URL

## Tech Stack 🤖

* **JavaScript**:
  - Runs natively in browsers, no extra compiling needed (like Python)
  - Works both on server and browser (no need to switch languages on backend and frontend, e.g., TypeScript), keeping things time efficient

* **Node.js**

* **Next.js**:
  - SSR reduces load/pressure on client-side, making it great for scalability/handling potentially large datasets
  - Helps developers: file-based routing makes it easy to know what you're affecting (i.e., just a component? An endpoint?)
  - Hot module replacement allows devs to see their changes instantly
  - Optimises web app by loading only what is needed
  - Easy deployment through Vercel
  - Using React.js would require an API layer (e.g., Express or Axios), leading to performance issues
  - Manual routing setup in React is less efficient than Next.js

* **Tailwind CSS**:
  - Fast styling, avoids extra CSS files
  - Only loads styles in use, reducing CSS bloat
  - Easy to read and makes mobile-first/desktop design consistent

* **Deploy on Vercel** - built for Next.js
