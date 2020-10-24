import React from "react";
import firebase from "firebase";
import "./style.css";

import useRTDatabaseList from "./firebase-hooks/useRTDatabaseList";
import useRTDatabaseValue from "./firebase-hooks/useRTDatabaseValue";

// Firebase Config
const config = {
  apiKey: "AIzaSyAr9ICuLA34b9HYXX_QihIqR7iUTl5ihoo",
  authDomain: "forex-16c8a.firebaseapp.com",
  databaseURL: "https://forex-16c8a.firebaseio.com",
  projectId: "forex-16c8a",
  storageBucket: "forex-16c8a.appspot.com",
  messagingSenderId: "747165846668",
  appId: "1:747165846668:web:29f34828ce77b5d29dffa9",
  measurementId: "G-VNJZD35VCV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default function App() {
  const [
    allData,
    pageData,
    total,
    loading,
    error,
    numberOfPages,
    page,
    prevPage,
    nextPage,
    visitPage
  ] = useRTDatabaseList("conversations/5f81e375e3e2fc177434db9b/messages", {
    limit: 5
  });
  const [rtValue] = useRTDatabaseValue(
    "/conversations/5f5d2dcf7cf1e510c882a3ec/createdAt"
  );

  return (
    <div>
      <h1>
        Hello Firebase Hooks ({page}/{numberOfPages})
      </h1>
      <button onClick={prevPage}>PREV</button>
      <button onClick={nextPage}>NEXT</button>
      <button onClick={() => visitPage(7)}>Go to page</button>
      {loading ? <div>Loading...</div> : <p>{JSON.stringify(pageData)}</p>}
      <hr />
      <h3>{rtValue}</h3>
    </div>
  );
}
