"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Rusty Operations | News";
  }, []);

  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="content">
          <section id="news">
            <h1>News</h1>
          </section>
        </div>
      </div>
    </main>
  );
}
