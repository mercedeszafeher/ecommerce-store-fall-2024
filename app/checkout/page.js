'use client';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const [totalPrice, setTotalPrice] = useState(null);
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

  useEffect(() => {
    // Retrieve total price from localStorage
    const storedTotalPrice = localStorage.getItem('totalPrice');
    setTotalPrice(storedTotalPrice);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Simple form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      newErrors.cardNumber = 'A valid 16-digit card number is required';
    }
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'A valid 3-digit CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // For now, just log the data
      console.log('Checkout successful', formData);
      alert('Thank you for your purchase!');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>

      <p>Total Price: {totalPrice} €</p>

      <form onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <div>
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>
            Address:
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>
        <div>
          <label>
            City:
            <input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>
          {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
        </div>
        <div>
          <label>
            Postal Code:
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </label>
          {errors.postalCode && (
            <p style={{ color: 'red' }}>{errors.postalCode}</p>
          )}
        </div>
        <div>
          <label>
            Country:
            <input
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </label>
          {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
        </div>

        <h3>Payment Information</h3>
        <div>
          <label>
            Card Number:
            <input
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              maxLength="16"
            />
          </label>
          {errors.cardNumber && (
            <p style={{ color: 'red' }}>{errors.cardNumber}</p>
          )}
        </div>
        <div>
          <label>
            Expiry Date (MM/YY):
            <input
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
            />
          </label>
          {errors.expiryDate && (
            <p style={{ color: 'red' }}>{errors.expiryDate}</p>
          )}
        </div>
        <div>
          <label>
            CVV:
            <input
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength="3"
            />
          </label>
          {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
        </div>

        <button>Complete Purchase</button>
      </form>
    </div>
  );
}
