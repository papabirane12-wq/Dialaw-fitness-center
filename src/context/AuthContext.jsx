import React, { createContext, useContext, useState } from 'react';
import { MOCK_CLIENT_PROFILE } from '../data/mockData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Role: 'visitor' | 'client' | 'admin'
  const [role, setRole] = useState('visitor');
  const [clientProfile, setClientProfile] = useState(MOCK_CLIENT_PROFILE);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSlotForBooking, setSelectedSlotForBooking] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4500);
  };

  const openBookingModal = (slot = null) => {
    setSelectedSlotForBooking(slot);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedSlotForBooking(null);
  };

  const openCheckoutModal = (plan = null) => {
    setSelectedPlanForCheckout(plan);
    setIsCheckoutOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutOpen(false);
    setSelectedPlanForCheckout(null);
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        clientProfile,
        setClientProfile,
        isBookingOpen,
        openBookingModal,
        closeBookingModal,
        selectedSlotForBooking,
        isCheckoutOpen,
        openCheckoutModal,
        closeCheckoutModal,
        selectedPlanForCheckout,
        showToast,
        toastMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
