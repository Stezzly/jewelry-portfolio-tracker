
# Jewelry Portfolio Tracker

This project is a web application designed to help users track the value of their jewelry portfolio. It allows users to add individual jewelry items, specify their details (metal type, weight, gem type, weight), and dynamically calculate the total portfolio value based on current market prices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Jewelry Items:** Users can add new jewelry items to their portfolio by providing details such as:
    - Item Name
    - Metal Type (Gold, Silver)
    - Gold Karat (if applicable)
    - Metal Weight (in grams)
    - Gem Type (Diamond, Ruby, Sapphire)
    - Gem Weight (in carats)
    
- **Dynamic Value Calculation:** The application automatically calculates the value of each jewelry item based on current market prices for the specified metals and gems.

- **Market Price Updates:** Users can update the market prices for gold, silver, diamonds, rubies, and sapphires. The portfolio value is dynamically recalculated whenever market prices are updated.

- **Portfolio Overview:** The application provides a clear overview of the user's jewelry portfolio, including a list of all added items, their individual values, and the total portfolio value.

- **Responsive Design:** The application is designed to be responsive and work well on different screen sizes (desktop, tablet, mobile).

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that adds static typing to the language.
- **Tailwind CSS:** A utility-first CSS framework for rapidly styling user interfaces.
- **Lucide React:** A library of beautiful and consistent icons.
- **Vercel:** A platform for deploying and hosting web applications.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jewelry-portfolio-tracker.git
   ```
   Replace `YOUR_USERNAME` with your GitHub username.
   
2. **Navigate to the project directory:**
   ```bash
   cd jewelry-portfolio-tracker
   ```

3. **Install dependencies:**
   ```bash
   npm install   
   ```

## Usage

1. **Start the development server:**
   ```bash
   npm start     
   ```

2. **Open the application in your browser:**  
   The application will typically be available at `http://localhost:3000`.

3. **Add jewelry items:**  
   Use the "Add New Item" form to add new items to your portfolio, providing the required details.

4. **Update market prices:**  
   Modify the market prices in the designated section to see the portfolio value update dynamically.

5. **View your portfolio:**  
   The portfolio table will display all added items and their calculated values. The total portfolio value is shown at the bottom of the table.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements. 

## License

This project is licensed under the [MIT License](LICENSE). Feel free to fork and adapt it while crediting the original author.
