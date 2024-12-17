# Full Stack Airbnb Clone with Next.js 14 App Router: React, Tailwind, Prisma, MongoDB, NextAuth

<img width="1665" alt="Screenshot 2024-12-17 at 15 04 11" src="https://github.com/user-attachments/assets/716ef426-fa91-4a47-9929-24f57f5b8974" />

Features:

- Tailwind design
- Tailwind animations and effects
- Responsive layout
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
  - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- URL filters
  - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results

### Cloning the repository

```shell
git clone https://github.com/jgbharris/jgbharris-airbnb-clone
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
