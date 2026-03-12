## Food Ordering Application 🍜

A modern React Native food ordering application built with Expo, TypeScript, and Jotai.
Hatari allows users to browse food categories, explore menus, and order delicious meals with a smooth mobile experience.

This project focuses on clean UI, performance, and scalable architecture for both iOS and Android.

## 👤 Created by

**Rishik Roy**

LinkedIn : https://www.linkedin.com/in/rishik-roy-7828093ab/

## ✨ Features

- 🍔 Browse food categories (Chinese, Indian, Tandoor, Top Rated)
- 🥗 Veg / Non-Veg toggle filter
- 🛒 Add items to cart
- 🔢 Dynamic cart quantity management
- 📦 Order summary with GST & packing charges
- ⭐ Food ratings & reviews
- 📱 Smooth responsive UI
- 🎨 Modern card-based food layout
- ⚡ Fast performance using Expo

## 📱 Screens

- Home / Menu screen
- Food item cards
- Category tabs
- Veg / Non-Veg toggle
- Cart screen
- Address bottom sheet

```

| Technology                | Purpose                 |
| ------------------------- | ----------------------- |
| React Native              | Mobile app framework    |
| Expo                      | Development environment |
| TypeScript                | Type safety             |
| Expo Router               | Navigation              |
| Jotai                     | Global state management |
| Tailwind / NativeWind     | Styling                 |
| React Native Tab View     | Category tabs           |
| Gorhom Bottom Sheet       | Address modal           |
| Expo Vector Icons         | Icons                   |

```

## File Sttucture
```
Hatari
│
├── app                # Expo Router screens
│
├── components         # Reusable UI components
│   ├── Card
│   ├── Toggle
│   ├── Modal
│   └── Stack
│
├── src
│   └── Store          # Jotai atoms
│
├── utils              # Helper functions
│
└── assets             # Images & icons
```

## 📦 Environment

- Make sure you have installed:
- Node.js
- Bun
- Expo CLI
- Android Studio / Xcode (optional)


📜 License
This project is licensed under the MIT License.


⭐ If you like this project, consider starring the repository!


## Install dependencies (Bun recomended)
```
bun i
```
## Update to latest version and dependencies
```
bun expo install --fix
```
## Start the Expo development server with a clean cache
```
bun start -c
```
