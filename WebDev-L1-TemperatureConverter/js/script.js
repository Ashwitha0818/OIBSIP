/**
 * ThermaSync - Temperature Converter Logic
 * Author: Ashwitha Gupta
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM References
    const form = document.getElementById('converter-form');
    const inputTemp = document.getElementById('temp-input');
    const selectFrom = document.getElementById('unit-from');
    const selectTo = document.getElementById('unit-to');
    const errorMsg = document.getElementById('error-message');
    const resultValue = document.querySelector('.result-value');
    const resultUnit = document.querySelector('.result-unit');

    // 2. Constants for Absolute Zero validation
    const ABSOLUTE_ZERO = {
        celsius: -273.15,
        fahrenheit: -459.67,
        kelvin: 0
    };

    // Unit Symbols for display
    const UNIT_SYMBOLS = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    };

    // 3. Helper Functions
    
    /**
     * Clears error states from the UI
     */
    const clearError = () => {
        errorMsg.textContent = '';
        inputTemp.classList.remove('input-error');
    };

    /**
     * Displays an error message and highlights the input field
     * @param {string} message - The error message to display
     */
    const showError = (message) => {
        errorMsg.textContent = message;
        inputTemp.classList.add('input-error');
        resultValue.textContent = '--';
        resultUnit.textContent = '';
    };

    /**
     * Formats a number to avoid excessive decimal places while keeping precision.
     * @param {number} num - The number to format
     * @returns {string} - Formatted string
     */
    const formatNumber = (num) => {
        // Round to max 4 decimal places, remove trailing zeros
        return parseFloat(num.toFixed(4)).toString();
    };

    // 4. Validation Logic
    
    /**
     * Validates the input temperature against Absolute Zero limits
     * @param {number} temp - The numeric temperature
     * @param {string} unit - The unit (celsius, fahrenheit, kelvin)
     * @returns {boolean} - true if valid, false if invalid
     */
    const isValidTemperature = (temp, unit) => {
        if (isNaN(temp)) {
            showError("Please enter a valid number.");
            return false;
        }

        const minTemp = ABSOLUTE_ZERO[unit];
        if (temp < minTemp) {
            showError(`Temperature cannot be below Absolute Zero (${minTemp}${UNIT_SYMBOLS[unit]}).`);
            return false;
        }

        return true;
    };

    // 5. Conversion Logic
    
    /**
     * Converts a temperature from one unit to another
     * @param {number} temp - The temperature to convert
     * @param {string} from - Source unit
     * @param {string} to - Target unit
     * @returns {number} - Converted temperature
     */
    const convertTemperature = (temp, from, to) => {
        if (from === to) return temp;

        let tempInCelsius;

        // First convert to Celsius as a base
        switch (from) {
            case 'celsius':
                tempInCelsius = temp;
                break;
            case 'fahrenheit':
                tempInCelsius = (temp - 32) * (5 / 9);
                break;
            case 'kelvin':
                tempInCelsius = temp - 273.15;
                break;
        }

        // Then convert from Celsius to target
        switch (to) {
            case 'celsius':
                return tempInCelsius;
            case 'fahrenheit':
                return (tempInCelsius * (9 / 5)) + 32;
            case 'kelvin':
                return tempInCelsius + 273.15;
        }
    };

    // 6. Rendering / Event Listeners
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();

        const inputValue = inputTemp.value.trim();
        
        if (inputValue === '') {
            showError("Please enter a temperature value.");
            return;
        }

        const numericTemp = Number(inputValue);
        const fromUnit = selectFrom.value;
        const toUnit = selectTo.value;

        if (isValidTemperature(numericTemp, fromUnit)) {
            const convertedValue = convertTemperature(numericTemp, fromUnit, toUnit);
            
            // Display Result
            resultValue.textContent = formatNumber(convertedValue);
            resultUnit.textContent = UNIT_SYMBOLS[toUnit];
        }
    });

    // Optional: Real-time clearing of error on input
    inputTemp.addEventListener('input', clearError);
    selectFrom.addEventListener('change', clearError);
});
