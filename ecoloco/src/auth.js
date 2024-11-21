// src/auth.js
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Sign Up
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

// Sign In
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Sign Out
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// AuthListener
export const AuthListener = () => {
  const navigate = useNavigate();

  useEffect(() => { 
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, redirect to home
              navigate("/home");
          } else {
              // User is signed out, redirect to signin
              navigate("/login");
          }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
  }, [navigate]);

  return null; // No UI for this component
};