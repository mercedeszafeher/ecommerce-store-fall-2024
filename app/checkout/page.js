'use client';

import { useEffect, useState } from 'react';
import CompletePurchase from '../components/CompletePurchase';
import styles from './CheckoutPage.module.scss';

export default function CheckoutPage() {
  const [totalPrice, setTotalPrice] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Get total price from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedTotalPrice = localStorage.getItem('totalPrice');
    setCartItems(storedCartItems);
    setTotalPrice(storedTotalPrice);
  }, []);

  // Form validation
  const validateForm = (updatedFormData = formData) => {
    const newErrors = {};

    if (!updatedFormData.name) newErrors.name = 'Name is required';
    if (!updatedFormData.address) newErrors.address = 'Address is required';
    if (!updatedFormData.city) newErrors.city = 'City is required';
    if (!updatedFormData.postalCode)
      newErrors.postalCode = 'Postal Code is required';
    if (!updatedFormData.country) newErrors.country = 'Country is required';
    if (!updatedFormData.cardNumber || updatedFormData.cardNumber.length < 16) {
      newErrors.cardNumber = 'A valid 16-digit card number is required';
    }
    if (!updatedFormData.expiryDate)
      newErrors.expiryDate = 'Expiry date is required';
    if (!updatedFormData.cvv || updatedFormData.cvv.length < 3) {
      newErrors.cvv = 'A valid 3-digit CVV is required';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Revalidate the form on every input change
    validateForm(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, proceeding with checkout...');
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutHeader}>Checkout</h1>

      <div className={styles.checkoutForm}>
        <h3>Total Amount: {totalPrice} €</h3>

        <form onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address:</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && (
              <p className={styles.errorMessage}>{errors.address}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="city">City:</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className={styles.errorMessage}>{errors.city}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
            {errors.postalCode && (
              <p className={styles.errorMessage}>{errors.postalCode}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="country">Country:</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
            {errors.country && (
              <p className={styles.errorMessage}>{errors.country}</p>
            )}
          </div>

          <h2>Payment Details</h2>

          <div className={styles.paymentDetails}>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength="16"
              />
              {errors.cardNumber && (
                <p className={styles.errorMessage}>{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
              <input
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
              />
              {errors.expiryDate && (
                <p className={styles.errorMessage}>{errors.expiryDate}</p>
              )}
            </div>

            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength="3"
              />
              {errors.cvv && (
                <p className={styles.errorMessage}>{errors.cvv}</p>
              )}
            </div>
          </div>

          <CompletePurchase
            cartItems={cartItems}
            totalPrice={totalPrice}
            isFormValid={isFormValid}
          />
        </form>
      </div>
    </div>
  );
}
